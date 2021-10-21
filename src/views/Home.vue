<template>
  <div class="home">
    <HelloWorld msg="Welcome to June's Website"/>
  </div>
</template>

<style scoped lang="scss">
.home{
  width: 100%;
  height: 100vh;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
