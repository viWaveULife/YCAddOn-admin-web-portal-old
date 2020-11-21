<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :sm="4" :md="6" :lg="8" :xl="8"></a-col>
      <a-col :xs="24" :sm="16" :md="12" :lg="8" :xl="8">
        <div class="login-container-form">
          <h4 class="login-container-title">{{ title }}</h4>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" placeholder="Username">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
              <div class="login-container-message">{{ message.username }}</div>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
              <div class="login-container-message">{{ message.password }}</div>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-button
                block
                html-type="submit"
                :disabled="form.username === '' || form.password === ''"
              >
                登入
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import { dependencies, devDependencies } from '*/package.json'
  import { mapActions, mapGetters } from 'vuex'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

  export default {
    name: 'Login',
    components: {
      UserOutlined,
      LockOutlined,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        message: {
          username: '',
          password: '',
        },
        redirect: undefined,
        dependencies: dependencies,
        devDependencies: devDependencies,
      }
    },
    computed: {
      ...mapGetters({
        logo: 'settings/logo',
        title: 'settings/title',
      }),
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    mounted() {
      this.form.username = 'admin'
      this.form.password = '123456'
      /*  setTimeout(() => {
        this.handleSubmit()
      }, 5000) */
    },
    methods: {
      ...mapActions({
        login: 'user/login',
      }),
      handleRoute() {
        return this.redirect === '/404' || this.redirect === '/403'
          ? '/'
          : this.redirect
      },
      async handleSubmit() {
        await this.login(this.form)
        await this.$router.push(this.handleRoute())
      },
    },
  }
</script>
<style lang="less">
  .login-container {
    height: 100vh;
    background: #e0e0e0;
    background-size: cover;
    &-form {
      width: calc(100% - 40px);
      padding: 4vh;
      margin-top: calc((100vh - 380px) / 2);
      margin-right: 20px;
      margin-left: 20px;
      background: rgba(255, 255, 255, 0.1);
      background-size: 100% 100%;
      border-radius: 10px;
      box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    }
    &-title {
      margin-bottom: 30px;
      font-size: 26px;
      color: #000;
      text-align: center;
      line-height: 32px;
    }
    &-tips {
      position: fixed;
      bottom: @vab-margin;
      width: 100%;
      height: 40px;
      color: rgba(255, 255, 255, 0.856);
      text-align: center;
    }
    &-message {
      color: #ff0000;
      line-height: 25px;
      font-size: 18px;
    }
    .ant-input {
      width: 400px;
      height: 35px;
    }
    .ant-btn {
      height: 40px;
      border-radius: 5px;
      background-color: #000;
      color: #fff;
      margin-top: 70px;
    }
  }
</style>
