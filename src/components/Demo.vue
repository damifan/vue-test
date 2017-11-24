<template>
  <div id="app">
    <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
    <br><br>
    <div v-bind:class="{'class1': class1}">
      directiva v-bind:class
    </div>
    <br><br><br>
    {{5+5}}<br>
    {{ ok ? 'YES' : 'NO' }}<br>
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id">菜鸟教程</div>

    <p v-if="!class1">现在你看到我了</p>

    <pre><a v-bind:href="url">菜鸟教程</a></pre>

    <p>{{ message }}</p>
    <input v-model="message">

    <button v-on:click="reverseMessage">反转字符串</button>


    {{ message | capitalize }}


    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>

    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>


    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>


    <input type="radio" id="runoob2" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google2" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>


    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>


    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="message" type="number">



  </div>
</template>

<script>
  export default {
    name: 'Demo',
    data () {
      return {
        class1: false,
        ok: true,
        message: 'RUNOOB',
        id: 1,
        url: window.location.href,
        message2: '菜鸟教程\r\nhttp://www.runoob.com',
        checked: false,
        checkedNames: [],
        picked: 'Runoob',
        selected: []
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }

  }
</script>

<style scoped>
  .class1 {
    background: #444;
    color: #eee;
  }
</style>
