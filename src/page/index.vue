<template>
  <div>
    <FooterC></FooterC>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{i.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <FooterC></FooterC>
  </div>
</template>
<script>
  import HeaderC from '../components/header.vue'
  import FooterC from '../components/footer.vue'
  export default {
    components: { HeaderC, FooterC },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('topics', null, r => {
          console.log(r)
          this.list = r.data
        })
      }
    }
  }
</script>
<style>
  .article_list {margin: auto;}
</style>
