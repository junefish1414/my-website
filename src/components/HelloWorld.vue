<template>
  <div id="nav" @scroll="navChange">
    <a class="Logo" href="#">June</a>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div class="landingPage" @scroll="navChange">
    <div class="menus">
      <a href="#" class="menu" data-menuName="about" @mouseenter="changeBackground" @mouseleave="recoverBackground">
        <h2 class="eng">ABOUT</h2>
        <p class="intro"><span class="num">01</span>關於</p>
      </a>
      <a href="#" class="menu" data-menuName="skills" @mouseenter="changeBackground" @mouseleave="recoverBackground" >
        <h2 class="eng">SKILLS</h2>
        <p class="intro"><span class="num">02</span>技能</p>
      </a>
      <a href="#" class="menu" data-menuName="works" @mouseenter="changeBackground" @mouseleave="recoverBackground">
        <h2 class="eng">WORKS</h2>
        <p class="intro"><span class="num">03</span>作品</p>
      </a>
    </div>
    <div class="more">想了解更多歡迎參考我的<a href="https://github.com/junefish1414" target="_blank">GitHub</a>頁面</div>
    <div class="copyright">© 2021 XIN-YU WANG</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #808080
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
  max-height: 75px;

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
.landingPage{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: flex-start;
  position: relative;
  transition: ease-in .5s;
  background-image: url(https://upload.cc/i1/2021/10/22/2htqeB.png);
  // background-image: url(../../image/Mask-Group-6.png);
  background-size: cover;
  padding: 0 3%;
}
.allBox{
  width: 90%;
  margin: 0 auto;
}
.menus{
  display: flex;
  align-items: center;
  justify-self: flex-start;
  .menu{
    text-align: left;
    margin-right: 5%;
    &:hover{
      color: #FFF;
    }
    .eng{
      font-size: 105px;
    }
    .num{
      margin-right: 10px;
    }
  }
}
.more {
  position: absolute;
  left: 3%;
  bottom:150px;
  color: #707070;
  a{
    border-bottom: 2px solid ;
    &:hover{
      font-weight: bold;
    }
  }
}
.copyright{
  position: absolute;
  left: 3%;
  bottom: 50px;
  font-size: 20px;
  color: #CCCCCC;
}
.active{
  background-color:rgba(255,255,255,0.8);
  box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
  backdrop-filter: blur(4px);
  transition: ease .3s;
  .Logo{
    font-size: 30px!important;
  }
}

</style>

<script>
export default {
  data () {
    return {
      about: '../../image/Mask-Group-7.png',
      skills: '../../image/Mask-Group-8.png',
      works: '../../image/Mask-Group-9.png'
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    changeBackground (e) {
      const landingBg = document.querySelector('.landingPage')
      const nav = document.querySelector('#nav')
      const more = document.querySelector('.more')
      const menuName = e.target.dataset.menuname
      if (menuName === 'about') {
        landingBg.style.backgroundImage = 'url(https://upload.cc/i1/2021/10/21/VNzlx5.png)'
        more.style.display = 'none'
        nav.style.display = 'none'
      } else if (menuName === 'skills') {
        landingBg.style.backgroundImage = 'url(https://upload.cc/i1/2021/10/22/WgYGDn.png)'
        more.style.display = 'none'
        nav.style.display = 'none'
      } else if (menuName === 'works') {
        landingBg.style.backgroundImage = 'url(https://upload.cc/i1/2021/10/22/dBYLmQ.png)'
        more.style.display = 'none'
        nav.style.display = 'none'
      }
    },
    recoverBackground (e) {
      const landingBg = document.querySelector('.landingPage')
      const more = document.querySelector('.more')
      const nav = document.querySelector('#nav')
      landingBg.style.backgroundImage = 'url(https://upload.cc/i1/2021/10/22/2htqeB.png)'
      more.style.display = 'block'
      nav.style.display = 'flex'
    },
    navChange () {
      console.log('滑動觸發')
    }
  },
  mounted () {
    window.addEventListener('scroll', e => {
      const screenHeight = window.scrollY
      const nav = document.querySelector('#nav')
      if (screenHeight > 0) {
        nav.classList.add('active')
        nav.style.padding = '20px 2%'
        console.log('超過0px')
      } else {
        nav.classList.remove('active')
        console.log('現在歸零了')
      }
    })
  }
}
</script>
