<template>
  <!-- <div id="nav">
    <a class="Logo" href="#">June</a>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div> -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <router-view/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');

body{
  width: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  *{
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
    transition: ease .2s;
  }
}
#app {
  font-family: 'Raleway','微軟正黑體', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: auto;
  max-width: 100%;
  position: relative;
  text-align: left;
  p{
      line-height: 180%;
  }
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;
  width: 100%;
  overflow: hidden;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .Logo{
    font-size: 60px;
    font-weight: 600;
    border-bottom: 6px solid;
  }
}
::selection {
    background: #70A9A1;
    color: #FFF;
}
::-moz-selection {
    background: #70A9A1;
    color: #FFF;
}
.all_box{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}
@media screen and (max-width: 1920px) {
    .all_box{
        max-width: 1200px;
    }
}
@media screen and (max-width: 1300px) {
    .all_box{
        width: 90%;
    }
}
</style>
