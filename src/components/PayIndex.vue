<template>
  <div class="page-index">
    <el-container>
      <el-header>
        <el-menu
          background-color="#409eff"
          text-color="#fff"
          :default-active="1"
          active-text-color="#ffd740"
          mode="horizontal"
        >
          <el-menu-item >
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
          <el-col :span="18">
            <el-row v-for="(item, index) in news" :key="index">
              <el-card class="box-card" shadow="hover">
                <div slot="header" @click="visible = true">
                  <span>{{item.title}}</span>
                </div>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <img style="width: 100%" src="./../assets/news/new1.jpg"/>
                  </el-col>
                  <el-col :span="18">
                    <div class="text">{{item.des}}</div>
                    <div class="text">{{item.des}}</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover" class="margin-top">
              <div v-for="(item, index) in sortList" :key="index" class="list-div">
                {{item}}
              </div>
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
      <div>贝业思数据智能技术服务</div>
      <div>地址：XXXXXXXXXX</div>
      <div>服务热线：333333333333</div>
      <div>我们一直致力于帮助企业健康长远的发展</div>
    </el-footer>
  </div>
</template>

<script>
import pay from './pay.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      visible: false,
      payPageShow: false,
      news: [
        {title: '国务院：免去杨国中的国家外汇管理局副局长职务', des: '国务院任免国家工作人员。任命于文明为国家中医药管理局局长；任命余艳红（女）为国家中医药管理局副局长。免去胡静林的财政部副部长职务；免去杨国中的国家外汇管理局副局长职务'},
        {title: '汇率波动加大 中企在外汇市场不能"裸奔', des: '中国人民银行副行长、国家外汇管理局局长潘功胜在第一财经《中国经济论坛》中指出，人民币资本项目的开放目前存在着可兑换程度较低、便利性不高和交易环节约束多等问题'},
        {title: '华帝回应京津地区产品停售：渠道正在逐步恢复中', des: '有消息称，华帝股份在京津地区的所有产品已全部停止销售、售后、安装和配送。'},
        {title: '证监会：股票质押融资业务实际平仓风险有限', des: '日前，中国证监会上市公司监管部与中国上市公司协会共同举办的2018年第4期上市公司董事长、总经理研修班成功举办。'}
      ],
      sortList: ['军事', '图片', '航空', '科技', '房产']
    }
  },
  methods: {
    payClick: function () {
      this.payPageShow = true
    },
    payDialogClose: function (done) {
      this.payPageShow = false
      done()
    }
  },
  components: {pay}
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #a7a7a7;
  }
  .el-footer{
    font-size: 12px;
    color: #adadad;
    height: 100px !important;
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
