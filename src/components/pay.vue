<template>
  <div class="pay-dialog-body">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.phone" placeholder="请输入手机号码">
          <i class="el-icon-mobile-phone" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="10">
          <el-col :span="16">
            <el-input v-model="form.message" placeholder="请输入短信验证码">
              <i class="el-icon-message" slot="prefix"></i>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button>获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.amount" placeholder="充值金额">
          <img src="@/assets/pay-lock.png" slot="prefix"/>
        </el-input>
      </el-form-item>
      <el-form-item label="充值方式：">
        <span>
          <el-radio v-model="radio" label="1">支付宝</el-radio>
          <el-radio v-model="radio" label="2">微信</el-radio>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">马上支付</el-button>
      </el-form-item>
      <el-form-item>
        <el-button>其他支付方式</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        form: '',
        message: '',
        amount: ''
      },
      radio: '1'
    }
  }
}
</script>
<style scoped>
.pay-dialog-body{
  padding: 20px 30px;
}
.el-button {
  width: 100%
}
</style>
<style>
.pay-dialog-body .el-form-item__label {
  font-weight: bold;
}
.el-button.el-button--primary{
  background-color: #1FB8FC;
  border-color: #1FB8FC;
}
</style>
