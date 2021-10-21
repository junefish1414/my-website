<template>
  <div class="landingPage">
    <div class="menus">
      <a href="#" class="menu" data-menuName="about" @mouseenter="changeBackground" @mouseleave="recoverBackground">
        <h2 class="eng">ABOUT</h2>
        <p class="intro"><span class="num">01</span>關於</p>
      </a>
      <a href="#" class="menu" data-menuName="skills" @mouseenter="changeBackground" >
        <h2 class="eng">SKILLS</h2>
        <p class="intro"><span class="num">02</span>技能</p>
      </a>
      <a href="#" class="menu" data-menuName="works" @mouseenter="changeBackground">
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
.landingPage{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: flex-start;
  position: relative;
  // background-image: url(https://upload.cc/i1/2021/10/21/wnDVaQ.png);
  background-image: url(../../image/Mask-Group-6.png);
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
      console.log('進入範圍內')
      const landingBg = document.querySelector('.landingPage')
      const menu = document.querySelector('.menu')
      const more = document.querySelector('.more')
      const menuName = e.target.dataset.menuname
      console.log(menuName)
      if (menuName === 'about') {
        console.log('成功選中about了')
        landingBg.style.backgroundImage = 'url(../../image/Mask-Group-7.png)'
        menu.style.color = '#FFF'
        more.style.display = 'none'
      }
    },
    recoverBackground (e) {
      console.log('我離開了')
      const landingBg = document.querySelector('.landingPage')
      const menu = document.querySelector('.menu')
      const more = document.querySelector('.more')
      landingBg.style.backgroundImage = 'url(../../image/Mask-Group-6.png)'
      menu.style.color = '#808080'
      more.style.display = 'block'
    }
  }
}
</script>
