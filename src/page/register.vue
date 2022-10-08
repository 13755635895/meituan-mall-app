<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="rgisterForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
           
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
             @input="input"
          ></el-input>
          <div class="pw-strength">
          <div :class="['bar', strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        </el-form-item>
        
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('rgisterForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('rgisterForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.rgisterForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateUserName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("密码必须为6-16位的字母数字或下划线组成"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: "",
      },
      strengthClass: "",
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: validateUserName, trigger: "blur" }],
      },
    };
  },
  methods: {
    resetForm(formName) {
     this.$refs[formName].resetFields();
    },
    submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.register({
                ...this.registerForm
            }).then(res=>{
                console.log('reg',res)
                if(res.status == 'success'){
                    this.$router.push({name:'login'})
                }else{
                    alert(res.msg)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    //检查 密码强、中、弱、安全性

    input(){
       var regStr = /(\w)+/g;
       var regNum = /(\d)+/g;
       var reg = /_/g;
       var strtongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regStr) && this.registerForm.password.match(regNum)
        if(this.registerForm.password.length>20 || (this.registerForm.password.length>6 && strtongth)){
            this.strengthClass = 'strong'
        }else if(this.registerForm.password.length <6 ){
            this.strengthClass = 'week'
        }else if(!this.registerForm.password){
            this.strengthClass = ''
        }
        else {
            this.strengthClass ='normal'
        }
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>