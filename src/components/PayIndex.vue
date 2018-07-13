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
            <!-- <el-row>
              <el-col :span="12">
              </el-col>
              <el-col :span="12">
                <el-row>1231</el-row>
                <el-row>123</el-row>
              </el-col>
            </el-row> -->
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
                  <div class="text hot-paper-titel">{{item.title}}</div>
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
        {img: require('@/assets/news/img1.jpg'), title: '辽宁打掉7个油耗子团伙:有警察遭捆绑虐打被丢雪地', des: '从“油耗子”盗采原油卖给收油窝点，再转运到多个小炼油厂提纯，最后输送到大炼油厂非法加工成石油制品。'},
        {img: require('@/assets/news/img2.png'), title: '关于新时代中阿关系，习近平这样说', des: '7月10日，中国—阿拉伯国家合作论坛第八届部长级会议在北京举行，国家主席习近平出席开幕式并发表重要讲话。'},
        {img: require('@/assets/news/img3.jpg'), title: '世贸组织总干事：中国在各个方面是积极参与者', des: '央视网消息：世贸组织第七次对中国贸易政策审议目前正在日内瓦举行。审议期间，央视驻日内瓦记者对世贸组织总干事阿泽维多进行了独家专访，他就近年来中国贸易的发展、现今国际贸易局势以及未来中国在世贸组织中将发挥的作用等问题做了全面的阐述。'},
        {img: require('@/assets/news/img4.jpg'), title: '为金靴奖拼了！凯恩请缨出战比利时 不想留下遗憾', des: '英媒体《每日镜报》的消息，英格兰头号射手哈里-凯恩已经向主教练索斯盖特主动请缨，他要求参加对阵比利时的三四名决赛。'}
      ],
      sortList: ['军事', '图片', '航空', '科技', '房产'],
      hotPaper: [
        { title: '哈尔滨交通执法腐败:251人被查 传前交通局长自杀', read: '20万' },
        { title: '四川江安县一工业园区发生爆燃事故，致19人死亡12人受伤', read: '5万' },
        { title: '实现零突破！中国自主研发抗艾滋病新药获批上市', read: '8万' },
        { title: '央视“最低调”的主持人，工作26年从不化妆，妻子是央视“才女”', read: '10万' },
        { title: '湖南慈利县一部长被指欺压寡妇，官方：言语不当，责令写检查', read: '3千' },
        { title: '伊万卡遭邻居“围攻”豪宅抗议：我们受够你爸了', read: '9千' }
      ]
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
    /* white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; */
    text-align: left;
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
