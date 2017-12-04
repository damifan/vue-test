<template>
  <header class="header">
    <el-row>
      <el-col :span="22"><h1 class="logo">Vue Demo by damifan</h1>
      </el-col>
      <el-col :span="2">
        <h1>
          <router-link :to="'/login/'">
            <el-button type="primary">登录</el-button>
          </router-link>
        </h1>
      </el-col>
    </el-row>
  </header>
</template>
<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>

</style>
