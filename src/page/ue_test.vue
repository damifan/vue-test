<template>
  <div>
    <u-editor :vaule="ueditor.value" :config="ueditor.config" ref="ue"></u-editor>
    <input type="button" @click="returnContent"  value="显示编辑器内容（从控制台查看）"/>
  </div>

</template>

<script>
  import UEditor from '@/components/ue.vue'

  export default {
    name: 'ue_test',
    components: {UEditor},
    data () {
      return {
        dat: {
          content: ''
        },
        ueditor: {
          value: 'this is init',
          config: {}
        }

      }
    },
    methods: {
      returnContent () {
        this.dat.content = this.$refs.ue.getUEContent()
        console.log(this.dat.content)
      }
    }

  }
</script>

<style scoped>

</style>
