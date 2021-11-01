<template>
   <div class="aboutJob">
       <div class="all_box">
           <div class="jContent">
               <div class="jc-left" >
                   <div class="jc-l-t">
                       <div class="jc-num" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
                           <h3><span>2</span>years</h3>
                           <h5>網頁相關經驗</h5>
                       </div>
                       <div class="jc-num" data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
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
   <!-- data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" -->
</template>

<style lang="scss">
//顏色規範
$primay-color:#C79B6E;
$primay-color-light:#E2D6C6;
$secondary-color: #47533F;
$title-fz:70px;
$line-fz:24px;

    body{
        position: relative;
    }
    .highlightSpot {
            transition: all 0.2s;
            border-bottom: 1px solid white;
            position: absolute;
            top: 0;
            background: #74c2b7b2;
            display: flex;
            align-items: center;
            left: 0;
            z-index: 0;
            border-radius: 20px;
            color:#FFF;
            padding: 3px 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            text-decoration: none;
            font-family: 'Raleway','微軟正黑體', sans-serif;
            opacity: 0;
    }
    .aboutJob{
        background-image: url(../assets/image/aboutJob_bg.png);
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #FFF;
        position: relative;
        background-attachment: fixed;
    }
    .jContent{
        display: flex;
        .jc-left{
            flex:8;
            padding: 100px 3% 100px 0;
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
            flex: 4;
            background-image: url(../assets/image/backview.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right center;
        }
        .jc-text{
            margin-top: 40px;
            position: relative;
            max-width: 700px;
            a {
                text-decoration: none;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 20px;
                padding: 3px 8px;
                margin: 0 1px;
                cursor: default;
                transition: ease .3s;
                }
        }
    }
// RWD
$full-media:1300px;
$pc-media:960px;
$pad-media:780px;
$phone-media:500px;
@media screen and (max-width: 1200px) {
    .jContent .jc-text a:hover{
        background-color:  #74c2b7b2;
    }
}
@media screen and (max-width: $pad-media) {
    .jContent .jc-right {
        flex: 0;
    }
    .jContent .jc-left{
        padding: 50px 0;
    }
    .jContent .jc-left .jc-l-t .jc-num span {
        font-size: $title-fz;
    }
}

@media screen and (max-width: $phone-media) {
    .jContent .jc-left .jc-l-t .jc-num span {
        font-size: 40px;
    }
    .jContent .jc-left .jc-l-t .jc-num h3 {
    font-size: 26px;
    }
}
</style>

<script>
export default {
  name: 'AboutJob',
  methods: {
  },
  mounted () {
    const triggers = document.querySelectorAll('.jc-text a')
    const highlight = document.createElement('p')
    highlight.classList.add('highlightSpot')
    // const aboutJob = document.querySelector('.jc-text')
    // aboutJob.append(highlight)
    document.body.append(highlight)

    // 效果
    function highlightLink () {
      console.log(window.outerWidth)
      if (window.outerWidth < 1200) {
        console.log('不執行highlightSpot')
      } else {
        const linkCoords = this.getBoundingClientRect()
        const innerText = this.innerText
        console.log(innerText)
        console.log(linkCoords)
        const coords = {
          width: linkCoords.width,
          height: linkCoords.height,
          left: linkCoords.left + window.scrollX,
          top: linkCoords.top + window.scrollY
        }
        highlight.style.width = `${coords.width}px `
        highlight.style.height = `${coords.height}px`
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
        highlight.style.opacity = '1'
        highlight.innerHTML = innerText
      }
    };

    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
  }
}
</script>
