<template>
    <div>
        <div class="MySkill">
            <div class="title">
                <div class="all_box">
                    <h2>SKILLS</h2>
                    <span>相關技能</span>
                </div>
            </div>
            <div class="skillContent">
                <div class="skill-single sk1" >
                    <div class="sk-mask" data-skName="htcs" @click="openSkill">
                        <div>
                            <h6>My Skills</h6>
                            <h3>HTML / CSS</h3>
                            <ul>
                                <li>熟悉 HTML5 、 CSS3</li>
                                <li>能依照設計稿手刻頁面版型</li>
                                <li>熟悉 RWD 響應式網頁規劃能力</li>
                                <li>熟悉 CSS FlexBox 排版</li>
                                <li>熟悉 CSS3 動畫製作動態效果</li>
                                <li>可使用 SCSS、Pug (jade) 等預處理器進行模組化管理</li>
                                <li>具備 Bootstrap4、5 開發專案能力</li>
                                <li>可使用 NPM 基本指令管理專案</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="skill-single sk2" >
                    <div class="sk-mask" data-skName="js" @click="openSkill">
                        <div>
                            <h6>My Skills</h6>
                            <h3>JavaScript</h3>
                            <ul>
                                <li>使用 ES5、 ES6 語法</li>
                                <li>透過 axios / AJAX / JSON 串接 API</li>
                                <li>了解 This、Hoisting 等 JS 核心概念</li>
                                <li>以ESLint Standard Style 規範進行開發</li>
                                <li>使用 Vue.js 框架進行開發</li>
                                <li>使用 Vue CLI 於專案</li>
                                <li>使用 Vue Router 管理路由</li>
                                <li>了解 Option API 結構與 V 指令</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="skill-single sk3" >
                    <div class="sk-mask" data-skName="oth" @click="openSkill">
                        <div>
                            <h6>My Skills</h6>
                            <h3>Others</h3>
                            <ul class="others">
                                <li>版本控制： </li>
                                <li>使用 Git 進行版本控制</li>
                                <li>使用 Sourcetree 版本控制介面 </li>
                                <li>延伸工具：</li>
                                <li>熟悉 Illustrator、Photoshop</li>
                                <li>熟悉 Adobe Xd</li>
                            </ul>
                        </div>
                    </div>
                </div>
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
.skillContent{
    display: flex;
    transition: ease .3s;
    .skill-single{
        flex: 1;
        cursor: pointer;
        text-align: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center ;
        color: #FFF;
        min-height: calc(100vh - 75px - 140px);
        .sk-mask{
            background-color:rgba(81,81,81,0.5);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px;
            transition:
            font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            background-color 0.2s;
        }
        h6{
            color: $primay-color;
            font-size: $line-fz;
            font-weight: bold;
            margin-bottom: 10px;
        }
        h3{
            font-size: $title-skill;
            font-weight: 300;
        }
        ul{
            text-align: left;
            display: none;
            border-top: 1px solid $primay-color-light;
            padding-top: 20px;
            margin-top: 10px;
        }
        li{
            margin: 15px 0;
            list-style-type: square;
        }
    }
    .sk1{
        background-image: url(../assets/image/Group-16.png);
    }
    .sk2{
        background-image: url(../assets/image/Group-17.png);
    }
    .sk3{
        background-image: url(../assets/image/Group-18.png);
    }
    .sk-active{
        flex: 2;
        .sk-mask{
            background-color:rgba(81,81,81,0.8);
        }
        ul{
            display: block;
        }
    }
}

</style>

<script>
export default {
  name: 'MySkill',
  methods: {
    openSkill (e) {
      const skillName = e.target.dataset.skname
      const sk1 = document.querySelector('.sk1')
      console.log(skillName)
      if (skillName === 'htcs') {
        sk1.classList.add('sk-active')
      }
    }
  }
}
</script>
