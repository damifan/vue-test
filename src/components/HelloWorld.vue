<template>
  <div class="hello">
    v-html: <h1 v-html="msg"></h1>



    <router-link to="/Footer">Footer</router-link>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '<strong>Welcome to Your Vue.js App...</strong>'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
