<template>
    <!-- 定义这个数据 :model="form" -->
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名"  prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button style="margin-left:105px;margin-top:10px" type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script>
  // import Mock from 'mockjs'
  import Cookie from 'js-cookie'
  import {getMenu} from '../api'
  export default {
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        // rules 表单验证
        rules: {
          username: [
            { required: true, trigger: "blur", message: "请输入用户名" },
          ],
          password: [{ required: true, trigger: "blur", message: "请输入密码" }],
        },
      };
    },
    methods:{
        //假设点击登录会返回token信息
        submit(){
            // const token=Mock.Random.guid()
            // //将token信息存入cookie 用于不同页面间的通信
            // Cookie.set('token',token)
            // //登陆成功后跳转至home页面
            //校验通过
            this.$refs.form.validate((valid)=>{
              //valid存在说明校验通过
              if(valid){
                getMenu(this.form).then(({data})=>{
                  if(data.code===20000){
                    //将token信息存入cookie 用于不同页面间的通信
                    console.log('ok');
                    Cookie.set('token',data.data.token)
                    //获取菜单的数据存入store中
                    // data.data.menu
                    // this.$store.commit('setMenu',data.data.menu)
                    this.$router.push('/home')
                  }else {
                    this.$message.error(data.data.message)
                  }
                })
              }
            })
        }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .login-container{
      width: 350px;
      margin: 180px auto;
      border: 1px solid  #eaeaea;
      padding: 35px 35px 15px 35px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 0 25px #cac6c6;
      box-sizing: border-box;
      .login_title{
          margin-bottom: 40px ;
          text-align: center;
          color: #505458;
      }
      .el-input{
          width: 198px;
      }
  }
  </style>
  