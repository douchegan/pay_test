<template>
  <div class="page-index">
    <el-container>
      <el-header>
        <el-menu
          background-color="#409eff"
          text-color="#fff"
          :default-active="activeIndex"
          active-text-color="#ffd740"
          mode="horizontal"
          @select="sortListClick"
        >
          <el-menu-item :index="'logo'">
            <div style="text-align: left;">
              <img style="height: 50px" src="@/assets/logo-ola.png">
              <div class="ola-title">欧拉数术</div>
            </div>
          </el-menu-item>
          <el-menu-item v-for="(item, index) in sortList" :key="index" :index="index">{{item}}</el-menu-item>
        </el-menu>
        <span class="login-btn">
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </span>
      </el-header>
      <el-main>
        <el-row>
          <el-col v-if="!hotShow" :span="18" v-loading="loading">
            <el-row v-for="(item, index) in news" :key="index">
              <el-card class="box-card" shadow="hover">
                <div slot="header" @click="visible = true">
                  <span>{{item.title}}</span>
                </div>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <img style="width: 100%" v-bind:src="item.img"/>
                  </el-col>
                  <el-col :span="18">
                    <div class="text">{{item.des}}</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
            <el-pagination
              background
              :page-size="pagination.pageSize"
              layout="prev, pager, next"
              :current-page.sync="pagination.currPage"
              :total="pagination.total">
            </el-pagination>
          </el-col>
          <el-col v-else :span="18" class="hot-detail">
            <div class="title">{{hotDetail.title}}</div>
            <div class="sub-title">{{hotDetail.subhead}}</div>
            <div class="text" v-html="hotDetail.text"></div>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="margin-top">
              <div v-for="(item, index) in sortList" :key="index" class="list-div" @click="sortListClick(index)">
                {{item}}
              </div>
            </el-card>
            <el-card shadow="hover" class="margin-top">
              <div slot="header" class="title-card">
                <el-tag type="danger"></el-tag>
                <span class="title-text">24小时热文</span>
              </div>
              <el-row :gutter="5" v-for="(item, index) in hotPaper" :key="index">
                <el-col :span="6">
                  <el-tag type="warning">{{index + 1}}</el-tag>
                </el-col>
                <el-col :span="18">
                  <div class="text hot-paper-titel" @click="hotClick(index)">{{item.title}}</div>
                  <div class="text min-font-size">{{item.read}}阅读</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-dialog
        class="pay-dialog"
        title="提示"
        :before-close="payDialogClose"
        :visible.sync="visible"
        width="30%">
        <span slot="title" @click="payClick">
          支付2元继续阅读
        </span>
        <transition name="fade">
          <pay v-if="payPageShow"></pay>
        </transition>
      </el-dialog>
    </el-container>
    <el-footer>
      <div>北京欧拉数术科技有限公司</div>
      <div>地址：北京市大兴区凉水河一街10号院1号楼9层902室</div>
      <div>服务热线：086-010-85322946</div>
      <div>我们一直致力于帮助企业健康长远的发展</div>
      <div>京ICP备18037012号</div>
    </el-footer>
  </div>
</template>

<script>
import pay from './pay.vue'
import newData from './newData.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex: 'picture',
      visible: false,
      payPageShow: false,
      hotShow: false,
      news: [],
      sortList: { picture: '图片', aviation: '航空', technology: '科技', house: '房产', automobile: '汽车', baby: '亲子' },
      hotPaper: [],
      hotDetail: {},
      pagination: {
        total: 0,
        currPage: 1,
        pageSize: 5
      },
      loading: false
    }
  },
  methods: {
    payClick: function () {
      this.payPageShow = true
    },
    payDialogClose: function (done) {
      this.payPageShow = false
      done()
    },
    sortListClick (index) {
      this.hotShow = false
      this.loading = true
      let timeout = Math.random() * 2000
      setTimeout(() => {
        this.activeIndex = index
        this.pagination.currPage = 1
        this.pagination.total = newData[index].length
        this.news = newData[index].slice(0, 5)
        this.loading = false
      }, timeout)
    },
    hotClick (index) {
      this.hotDetail = this.hotPaper[index]
      this.hotShow = true
    }
  },
  components: {pay},
  mounted () {
    this.sortListClick('picture')
    this.hotPaper = newData.hotPaper
  },
  watch: {
    'pagination.currPage' (v) {
      this.news = newData[this.activeIndex].slice((v - 1) * 5, v * 5)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-index {
    height: 800px;
    width: 80%;
    min-width: 600px;
    margin: 0 auto;
  }
  .el-header{
    height: auto !important;
    position: fixed;
    z-index: 1000;
    background: white;
    width: 100%;
    top: 0;
    min-width: 700px;
    padding: 0;
    left: 0;
  }
  .ola-title {
    display: inline-block;
    position: relative;
    /* top: -19px; */
    left: 10px;
    font-size: 20px;
  }
  .el-main {
    margin-top: 30px;
  }
  .login-btn {
    position: absolute;
    top: 9px;
    right: 40px;
  }
  .el-row{
    padding: 10px;
  }
  .text{
    /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
    text-align: left;
    color: #a7a7a7;
  }
  .el-footer{
    font-size: 12px;
    color: #adadad;
    height: auto !important;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 10px 0;
    background: #2D3237;
    line-height: 20px;
  }
  .list-div {
    margin-bottom: 21px;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
  }
  .margin-top{
    margin-top: 10px
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .title-card {
    text-align: left;
  }
  .title-card .el-tag {
    height: 20px;
    width: 7px;
    padding: 0;
  }
  .title-card .title-text {
    position: relative;
    left: 2px;
    top: -3px;
  }
  .min-font-size {
    font-size: 12px;
    text-align: right;
  }
  .hot-paper-titel {
    font-size: 12px;
    text-align: left;
    color: black;
    cursor: pointer;
  }
  .hot-detail {
    text-align: left;
    padding: 0 40px 0 0;
  }
  .hot-detail .title {
    font-weight: bold;
    font-size: 20px;
    padding: 20px 0 0 0;
  }
  .hot-detail .sub-title {
    font-size: 12px;
    color: #a7a7a7;
  }
  .hot-detail .text {
    font-size: 16px;
    color: #3f3f3f;
    padding: 20px 0 0 0;
    line-height: 40px;
  }
</style>
<style>
  .box-card .el-card__header{
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    font-weight: bold;
  }
  .pay-dialog .el-dialog__header {
    background: #1FB8FC;
    color: #fff;
    padding: 10px 20px 10px;
    cursor: pointer;
  }
  .pay-dialog .el-dialog__headerbtn{
    top: 15px;
  }
  .pay-dialog .el-dialog__headerbtn .el-dialog__close{
    color: #ffffff;
  }
  .pay-dialog .el-dialog__body{
    padding: 0;
  }
</style>
