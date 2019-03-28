<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created:function() {
    console.log('检测是否登录')
  }
}
</script>

<style>
#app{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

</style>
