<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMune" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑区域 -->
            <span class="l-text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item command="layout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
        </div>
    </div>
</template>

<style lang="less">
.header-container {
    background-color: #333;
    padding: 0 20px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l-text {
        color: #ffff;
        margin-left: 10px;
        
    }
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }


</style>
<script>
import Cookie from 'js-cookie'
export default {
    name:"CommonHeader",
    data(){
        return {}
    },
    methods:{
        handleMune(){
            console.log(this.$store.commit('collapseMenu'));
        },
        // loyout(){
        //     //清除cookie中的token信息
        //     Cookie.remove('token')
        // }
        handleClick(command){
            if(command==='layout'){
                //清除cookie中的token信息
                 Cookie.remove('token')
                //跳转到登陆页面
                this.$router.push('/login')
            }
        }
    }
}
</script>