<template>
  <el-container>
    <el-header>
      <HeaderC></HeaderC>
    </el-header>
    <el-main>
      <el-form class="login-container" :label-position="labelPosition" label-width="80px" :model="loginForm" ref="loginForm" :rules="rules">
        <h1>系统登录</h1>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input v-model="loginForm.captcha" placeholder="验证码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">注册</el-button>
        </el-form-item>
      </el-form>

    </el-main>
    <el-footer>
      <FooterC></FooterC>
    </el-footer>
  </el-container>


</template>

<script>
  import HeaderC from '../components/header.vue'
  import FooterC from '../components/footer.vue'
  export default {
    components: { HeaderC, FooterC },
    name: 'login',
    data () {
      return {
        labelPosition: 'top',
        loginForm: {
          mobile: '',
          captcha: ''
        },
        rules: {
          mobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
          ],
          captcha: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>
  .login-container {
    width: 30%;
    margin: 0 35% 0 35%;
  }

  form {

  }
</style>
