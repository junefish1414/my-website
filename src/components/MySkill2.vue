<template>
    <div>
        <div class="MySkill">
            <div class="title">
                <div class="all_box">
                    <h2>SKILLS</h2>
                    <span>相關技能</span>
                </div>
            </div>
        </div>
        <div class="panels" >
            <div class="panel panel1">
                <p>my skill</p>
                <p>HTML/CSS</p>
                <p>
                    ◆ 熟悉 HTML5 、 CSS3 <br>
                    ◆ 能依照設計稿手刻頁面版型<br>
                    ◆ 熟悉 RWD 響應式網頁規劃能力<br>
                    ◆ 熟悉 CSS FlexBox 排版<br>
                    ◆ 熟悉 CSS3 動畫製作動態效果<br>
                    ◆ 可使用 SCSS、Pug ( jade ) 等預處理器進行模組化管理<br>
                    ◆ 具備 Bootstrap4、5 開發專案能力<br>
                    ◆ 可使用 NPM 基本指令管理專案
                </p>
            </div>
            <div class="panel panel2">
                <p>my skill</p>
                <p>JavaScript</p>
                <p>
                    ◆ 使用 ES5、 ES6 語法<br>
                    ◆ 透過 axios / AJAX / JSON 串接 API<br>
                    ◆ 了解 This、Hoisting 等 JS 核心概念<br>
                    ◆ 以 ESLint Standard Style 規範進行開發<br>
                    ◆ 使用 Vue.js 框架進行開發<br>
                    ◆ 使用 Vue CLI 於專案<br>
                    ◆ 使用 Vue Router 管理路由<br>
                    ◆ 了解 Option API 結構與 V 指令<br>
                </p>
            </div>
            <div class="panel panel3">
                <p>my skill</p>
                <p>Others</p>
                <p>版本控制：<br>
                    ◆ 使用 Git 進行版本控制 <br>
                    ◆ 使用 Sourcetree 版本控制介面<br><br>
                    延伸工具：<br>
                    ◆ 熟悉 Illustrator、Photoshop、Adobe XD<br>
                    ◆ 使用 Visual Studio 作為主要撰寫工具
                </p>
            </div>
         </div>
    </div>
</template>

<style lang="scss">
// 規範
$primay-color:#C79B6E;
$primay-color-light:#E2D6C6;
$secondary-color: #47533F;
$title-fz:70px;
$title-skill:60px;
$line-fz:24px;
$line-fz-title:20px;

.MySkill{
    .title{
        background-color:$primay-color-light;
        .all_box{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-image: url(../assets/image/Mask-Group-5.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: right bottom;
            padding: 35px 0;
        }
        h2{
            font-size: $title-fz;
        }
        span{
            background-color: $primay-color-light;
            padding: 3px 25px;
            margin-left: -25px;
            font-size: $line-fz;
        }
    }
}
.panels {
    min-height: calc(100vh - 75px - 140px);
    overflow: hidden;
    display: flex;
    cursor:pointer;
}

.panel {
    background: #6B0F9C;
    box-shadow: inset 0 0 8px 3px rgba(0,0,0,0.25);
    color: white;
    text-align: center;
    align-items: center;
    transition:
    justify-content 0.7s  cubic-bezier(0.61,-0.19, 0.7,-0.11),
    font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    background-color 0.2s;
    font-size: 20px;
    background-size: cover;
    background-position: center;
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 35px 3%;
    flex-direction: column;
    position: relative;
    &:before{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(80,80,80,0.5);
        left: 0;
        top: 0;
    }
}

.panel1 { background-image:url(../assets/image/Group-16.png); }
.panel2 { background-image:url(../assets/image/Group-17.png); }
.panel3 { background-image:url(../assets/image/Group-18.png); }

/* Flex Children */
.panel > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    // flex: 1 0 auto;
    // display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.panel >p:first-child{
    color: $primay-color;
    font-size: $line-fz;
    font-weight: bold;
    transform: translateY(-200%);
    opacity: 0;
    margin-bottom: -15px;
}
.panel.open-active>*:first-child {
    transform: translateY(0);
    opacity: 1;
}
.panel >p:last-child{
    transform: translateY(100%);
    font-size: 16px;
    opacity:0;
    text-align: left;
    height: 0;
    width: fit-content;
}
.panel.open-active>*:last-child {
    transform: translateY(0);
    opacity:1;
    height: auto;
    border-top: 1px solid $primay-color;
    padding-top: 50px;
}
.panel p {
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
    span{
        color: $primay-color;
        font-size: $line-fz;
        font-weight: bold;
        display: block;
        margin-bottom: 10px;
    }
}
.panel p:nth-child(2) {
    font-size: 3em;
    font-weight: 400;
}
.panel.open {
    flex: 1.5;
    font-size: 16px;
    box-shadow: none;
    &:before{
        background-color: rgba(80,80,80,0.8);
    }
}
</style>

<script>
export default {
  name: 'MySkill',
  data () {
    return {
      isOpen: 'false'
    }
  },
  methods: {
    // openSkill (e) {
    //   const skillName = e.target.dataset.skname
    //   const panel1 = document.querySelector('.panel1')
    //   console.log(skillName)
    //   this.isOpen = !this.isOpen
    //   if (this.isOpen) {
    //     panel1.classList.add('open')
    //   } else {
    //     panel1.classList.remove('open')
    //   }
    // }
  },
  mounted () {
    const panels = document.querySelectorAll('.panel')
    const nowClickPanel = document.querySelector('.panels')

    function toggleOpen () {
      if (this !== nowClickPanel) {
        nowClickPanel.classList.remove('open')
      }
      this.classList.toggle('open')
    };

    function toggleActive (e) {
      if (e.propertyName.includes('flex')) {
        console.log(e.propertyName)
        this.classList.toggle('open-active')
      }
    }

    panels.forEach(item => item.addEventListener('click', toggleOpen))
    panels.forEach(item => item.addEventListener('transitionend', toggleActive))
  }
}
</script>
