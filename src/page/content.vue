<template>
  <div>
    <my-header></my-header>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author.loginname}}   发表于：{{$utils.goodTime(dat.create_at)}} </p>
    <hr>
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies">
        <p>评论者：{{i.author.loginname}}　　评论于：{{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '../components/header.vue'
  import myFooter from '../components/footer.vue'

  export default {
    components: {myHeader, myFooter},
    name: 'content',
    data () {
      console.log(this.$route)

      return {
        id: this.$route.params.id,
        dat: {
          author: {}
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('/topic/' + this.id, null, r => {
          this.dat = r.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
