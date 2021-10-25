<template>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
   <div class="aboutJob">
       <div class="all_box">
           <div class="jContent">
               <div class="jc-left" data-aos="fade-up">
                   <div class="jc-l-t">
                       <div class="jc-num">
                           <h3><span>2</span>years</h3>
                           <h5>網頁相關經驗</h5>
                       </div>
                       <div class="jc-num">
                           <h3><span>50</span>plus</h3>
                           <h5>累積大小專案參與製作</h5>
                       </div>
                   </div>
                   <div class="jc-text" @mouseenter="highlightLink"><p>前份工作擔任的職務為<a>網頁設計師</a>，2年工作期間曾<a>參與50+以上</a>大小案件製作，累積豐富的設計經驗，並於後期轉任專職切版師，負責設計稿切版、畫面動態效果製作等，熟悉 CSS / HTML / RWD 的運用，並利用閒餘時間自我<a>進修 JavaScript、Vue.js </a>等前端框架相關知識，讓自己成為更有技術力的開發人員。 除了自己的技術面以外，也曾與企劃、視覺設計師、後端工程師共同配合執行專案、規劃介面的經驗，讓我深知跨部門溝通的重要性，也願意<a>嘗試學習、運用新技術</a>，讓開發流程更準確有效率。</p></div>
               </div>
               <div class="jc-right"></div>
           </div>
       </div>
   </div>
</template>

<style lang="scss">

    body{
        position: relative;
    }
    .highlightSpot {
            transition: all 0.2s;
            border-bottom: 2px solid white;
            position: absolute;
            top: 0;
            background: white;
            left: 0;
            z-index: -1;
            border-radius: 20px;
            display: block;
            color:#70A9A1;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
    .aboutJob{
        background-image: url(../assets/image/aboutJob_bg.png);
        width: 100%;
        padding: 100px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #FFF;
    }
    .jContent{
        display: flex;
        .jc-left{
            flex:4;
            padding-right: 3%;
            .jc-l-t{
                display: flex;
                .jc-num{
                    margin-right:8%;
                    h3{
                        font-size: 36px;
                        font-weight: 300;
                        border-bottom:2px solid #FFF;
                        padding: 8px 0;
                    }
                    span{
                        font-size: 105px;
                        font-weight: 700;
                        margin-right: 3%;
                    }
                    h5{
                        padding-top:8px;
                    }
                }
            }
        }
        .jc-right{
            flex: 2;
        }
        .jc-text{
            margin-top: 40px;
            position: relative;
            a {
                text-decoration: none;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 20px;
                padding: 3px 8px;
                margin: 0 1px;
                cursor: default;
                }
        }
    }
</style>

<script>
export default {
  name: 'AboutJob',
  methods: {
    highlightLink (e) {
      console.log(e.target)
      if (e.target.nodeName === 'A') {
        console.log('正選到A')
      }
    //   const highlight = document.createElement('span')
    //   highlight.classList.add('highlightSpot')
    //   const app = document.querySelector('#app')
    //   console.log(app)
    //   document.body.append(highlight)
    //   console.log('被觸發了')
    //   console.log(e.target.offsetHeight, e.target.offsetWidth)
    //   console.log(e.target.offsetTop, e.target.offsetLeft)
    //   const coords = {
    //     width: e.target.offsetWidth,
    //     height: e.target.offsetHeight,
    //     left: e.target.offsetLeft,
    //     top: e.target.offsetTop
    //   }
    //   highlight.style.width = `${coords.width}px `
    //   highlight.style.height = `${coords.height}px`
    //   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    },
    outHighLight () {
      console.log('我移出了')
    }
  }
}
</script>
