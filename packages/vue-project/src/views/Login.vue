<template>
  <div class="login_container">
    <!-- 登录块 -->
    <div class="login_box">
      <!-- 头像 -->
      <div class="acator_box"></div>
      <!-- 表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        class="login_form"
        label-width="0"
      >
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="loginForm.username" prefix-icon="icon-denglu">
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="loginForm.password" prefix-icon="icon-mima">
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  data() {
    return {
      loginForm: {
        username: "username",
        password: "password",
      },
    };
  },
  methods: {
    submit() {
      router.push("/home");
    },
  },
};
</script>
<style lang="less" scoped>
// 根节点样式
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .acator_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #00eeee;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eeeeee;
    }
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.login_form {
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
