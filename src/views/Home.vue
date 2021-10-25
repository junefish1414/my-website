<template>
  <div class="home">
    <HelloWorld msg="Welcome to June's Website"/>
    <AboutMe></AboutMe>
    <AboutJob></AboutJob>
    <Experience></Experience>
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
import AboutMe from '@/components/AboutMe.vue'
import AboutJob from '@/components/AboutJob.vue'
import Experience from '@/components/Experience.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AboutMe,
    AboutJob,
    Experience
  }
}
</script>
