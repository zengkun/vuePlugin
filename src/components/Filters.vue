<template>
  <div>
    <h1>{{ price | formatterPrice}} / {{ price | formatterPrice('美元')}}</h1>
    <h2>{{time | formatterDate}}</h2>
    <p v-colorSwatch="'red'">我是改变颜色的自定义指令</p>
    <p v-innerText="'我是自定义指令插入的内容'">123</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: '123456',
      time: +new Date()
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
