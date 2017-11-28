<template>
  <el-container>
    <el-header>
      <HeaderC></HeaderC>
    </el-header>
    <el-main>

      <el-collapse accordion>

        <el-collapse-item v-for="i in list" :key="i.id">
          <template slot="title">
            <div>
              <i class="el-icon-date"></i>
              <time v-text="$utils.goodTime(i.create_at)"></time>
              <router-link :to="'/content/' + i.id">
                <el-button type="text">{{i.title}}</el-button>
              </router-link>
            </div>
          </template>
          <div>
            <article v-html="i.content"></article>
          </div>
        </el-collapse-item>

      </el-collapse>
    </el-main>
    <el-footer>
      <FooterC></FooterC>
    </el-footer>
  </el-container>
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


</style>
