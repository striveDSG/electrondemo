<template>
  <div class="login-container flx-center">
    <div class="login-inner-container">
      <div class="login-form-container">
        <a-card>
          <div class="app-title txt-center">xx信息报送系统</div>
          <a-form class="login-form" :model="form">
            <a-form-item field="username" label="用户名：">
              <a-input v-model="form.username" />
            </a-form-item>
            <a-form-item field="password" label="密码：">
              <a-input v-model="form.password" type="password" />
            </a-form-item>
          </a-form>
          <a-form-item class="submit-btn">
            <a-button type="primary">登录</a-button>
          </a-form-item>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { ILoginForm } from "./interface/index";

const form = reactive<ILoginForm>({
  username: "qweq",
  password: "",
});

const submitForm = (form: string): void => {};
</script>

<style lang="less">
@import "./index.less";
</style>
