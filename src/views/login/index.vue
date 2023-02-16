<template>
  <div class="login-container">
    <el-form
      inline-message="true"
      :rules="loginRules"
      :model="loginForm"
      class="login-form"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
          <!-- <el-icon>
            <avatar />
          </el-icon> -->
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
          <!-- <el-icon>
            <avatar />
          </el-icon> -->
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          :type="passwordType"
          name="password"
        />
        <span class="show-pwd">
          <svg-icon
            @click="handlePasswordType"
            :icon="passwordType == 'password' ? 'eye' : 'eye-open'"
          ></svg-icon>

          <!-- <el-icon>
            <view />
          </el-icon> -->
        </span>
      </el-form-item>

      <el-button
        @click="handleLogin"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
// 导入组件之后无需注册可直接使用
// import { Avatar } from '@element-plus/icons'
import { ref } from 'vue'
import { useStore } from 'vuex'

const loginForm = ref({
  username: 'admin',
  // username: 'ngyixuan',
  password: '123456'
})
const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码需要大于6位数'))
  } else {
    callback()
  }
}
const passwordType = ref('password')
const handlePasswordType = () => {
  if (passwordType.value === 'password') passwordType.value = 'text'
  else passwordType.value = 'password'
}
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'change',
      message: '必填'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      validator: validatePassword
    }
  ]
})

const loading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const handleLogin = () => {
  console.log('loginFormRef value', loginForm.value)
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
        // TODO:登陆后操作
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
