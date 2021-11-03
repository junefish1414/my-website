<template>
  <div id="nav" @scroll="navChange">
    <a class="Logo" href="#">June</a>
    <div class="My-resume">
      <a href="https://pda.104.com.tw/profile/edit?vno=75wrssp1l" target="_blank">104個人履歷</a> |
      <a href="https://junefish1414.github.io/my-work/index.html" target="_blank">作品集</a>
    </div>
  </div>
  <div class="phone-nav active">
    <a class="Logo" href="#">June</a>
    <div class="phone-icon">
      <div title="My GitHub"><a href="https://github.com/junefish1414" target="_blank"><img src="../assets/image/icon-1.svg" alt=""></a></div>
      <div title="My CodePen"><a href="https://codepen.io/collection/oEgVEr" target="_blank"><img src="../assets/image/icon-2.svg" alt=""></a></div>
      <div title="Email"><a href="mailto:acc101130@gm.ntcu.edu.tw" ><img src="../assets/image/icon-3.svg" alt=""></a></div>
    </div>
  </div>
  <div class="landingPage" @scroll="navChange">
    <div class="menus">
      <a class="menu" data-menuName="about" @mouseenter="changeBackground" @mouseleave="recoverBackground" @click="toAbout">
        <h2 class="eng">ABOUT</h2>
        <p class="intro"><span class="num">01</span>關於</p>
      </a>
      <a class="menu" data-menuName="skills" @mouseenter="changeBackground" @mouseleave="recoverBackground" @click="toSkill" >
        <h2 class="eng">SKILLS</h2>
        <p class="intro"><span class="num">02</span>技能</p>
      </a>
      <a class="menu" data-menuName="works" @mouseenter="changeBackground" @mouseleave="recoverBackground" @click="toWork">
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
$primay-color:#C79B6E;
$primay-color-light:#E2D6C6;
$secondary-color: #47533F;
$landing-title:105px;
$title-fz:70px;
$line-fz:24px;

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
    font-size: 50px;
    font-weight: 600;
    border-bottom: 6px solid;
  }
}
.My-resume{
  font-family: "Century Gothic",san-serif;
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
  z-index: 99;
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
    cursor: pointer;
    &:hover{
      color: #FFF;
    }
    .eng{
      font-size: $landing-title;
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
.phone-nav{display: none;}
// RWD
$full-media:1300px;
$pc-media:960px;
$pad-media:780px;
$phone-media:500px;
@media screen and (max-width: $full-media) {
  .landingPage {
    align-items: center;
  }
    .menus{
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .menu{
          margin: 25px 0;
          .eng{
            font-size:$title-fz;
          }
      }
    }
  .more {
    bottom: 50px;
    left: auto;
    right: 3%;
  }
}
@media screen and (max-width: $pad-media) {
  .copyright{
    display: none;
  }
  #nav{
    display: none;
  }
  .phone-nav{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
    position: absolute;
    .Logo{
      font-weight: bold;
      color: #2c3e50;
    }
  }
  .phone-icon{
    display: flex;
    div{
      margin: 0 5px;
    }
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
      const screenWidth = window.outerWidth
      if (screenWidth > 768) {
        landingBg.style.backgroundImage = 'url(https://upload.cc/i1/2021/10/22/2htqeB.png)'
        more.style.display = 'block'
        nav.style.display = 'flex'
      }
    },
    navChange () {
      console.log('滑動觸發')
    },
    toAbout () {
      document.querySelector('#aboutPage').scrollIntoView(true)
    },
    toSkill () {
      const screenWidth = window.outerWidth
      if (screenWidth > 600) {
        document.querySelector('#skillPage').scrollIntoView(false)
      } else {
        document.querySelector('#skillPage').scrollIntoView(true)
      }
    },
    toWork () {
      document.querySelector('#worksPage').scrollIntoView(true)
    }
  },
  mounted () {
    window.addEventListener('scroll', e => {
      const screenHeight = window.scrollY
      const nav = document.querySelector('#nav')
      const screenWidth = window.outerWidth
      if (screenHeight > 0 && screenWidth > 780) {
        nav.classList.add('active')
        nav.style.padding = '20px 20px'
      } else {
        nav.classList.remove('active')
      }
    })
    window.addEventListener('resize', e => {
      const screenWidth = window.outerWidth
      const nav = document.querySelector('#nav')
      if (screenWidth < 600) {
        nav.classList.add('active')
        nav.style.padding = '20px 20px'
      }
    })
  }
}
</script>
