<template>
    <a class="sizeBox" id="aboutPage">
        <div class="all_box">
            <div class="about">
                <div class="pic" data-aos="fade-left" data-aos-delay="300" data-aos-duration="800" >
                    <img src="../assets/image/self.png" alt="">
                </div>
                <div class="intro">
                    <div class="title">01</div>
                    <div class="aboutText">
                        <h3 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><span>王歆瑜</span>Xin Yu Wang</h3>
                        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">嗨！我是June，對所有事物都充滿好奇心並願意嘗試與挑戰。熱愛設計與音樂，喜歡捕捉生活中的片刻感動並融入設計中。經常有人以能動能靜形容我，平時活潑熱情，但當需要專注在自己手上的任務時，願意付出長時間研究並有耐心地處理遇到的問題。<br><br>

    原以平面設計出發，自從接觸到網頁設計之後，意識到 Coding 的豐富與多元。目前致力於研究前端技術，以持續探索 Web 未知的可能性為樂。增進能力之餘，不定期會新增一些JS的小作品，也記錄程式相關筆記與自己的心路歷程，希望以後能開發出更多有趣的 Side Project。
    </p>
                    </div>
                    <div class="contact" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                        <div><img src="../assets/image/icon-1.svg" alt=""><a title="My GitHub" href="https://github.com/junefish1414" target="_blank">GitHub | @junefish1414</a></div>
                        <div><img src="../assets/image/icon-2.svg" alt=""><a title="My CodePen" href="https://codepen.io/collection/oEgVEr" target="_blank">CodePen精選 | @yyfish1414</a></div>
                        <div><img src="../assets/image/icon-3.svg" alt=""><a title="Email" href="mailto:acc101130@gm.ntcu.edu.tw" >E-mail | acc101130@gm.ntcu.edu.tw</a></div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped lang="scss">
$primay-color:#C79B6E;
$primay-color-light:#E2D6C6;
$secondary-color: #47533F;
$title-fz:70px;
$line-fz:24px;

p{
    color: #939291;
    font-size: 16px;
}
.sizeBox{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    .all_box{
        height: 100%;
        display: flex;
        align-items: center;

    }
}

.about{
    width: 100%;
    display: flex;
    justify-content: center;
    padding:50px 0;
}
.pic{
    flex: 2;
    position: relative;
    padding-top: 50px;
    &:before{
        z-index: -1;
        background-color: $secondary-color;
        content: "";
        width:1000px;
        min-height: calc(100vh + 100px);
        position: absolute;
        right: 50%;
        top: -100px;
    }
    img{
        width: 100%;
        max-width:350px;
        box-shadow: -50px 50px 50px rgba(60, 70, 53, 0.89);
    }
}
.intro{
    flex: 4;
    padding:0 5%;
    position: relative;
    &:after{
        content: "";
        background-image: url(../assets/image/deco.png);
        width: 72px;
        height: 104px;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        right: -5%;
        bottom: 35px;
    }
}
.title{
    color:rgba(226, 214, 198, 0.2);
    font-size: 300px;
    font-weight: bold;
    position: relative;
    line-height: 150px;
    &:before{
        content:'ABOUT ME.';
        color: rgba(31, 37, 27, 1);
        font-weight: normal;
        font-size: $title-fz;
        position: absolute;
        left: 0;
        top: 50%;
        transform:translateY(-50%);
    }
}
.aboutText{
    h3{
        color:$primay-color;
        font-size: $line-fz;
        margin-bottom: 25px;
        span{
            font-size:40px;
            margin-right: 15px;
        }
    }
}
.contact{
    margin-top: 35px;
    div{
        display: flex;
        align-items: center;
        margin: 10px 0;
        opacity: 0.7;
        transition: cubic-bezier(0.4, 0, 1, 1) .2s;
        &:hover{
                opacity: 1;
                letter-spacing: 1.5px;
            }
        img{
            margin-right: 5px;
        }
        a{
            color: $primay-color;
        }
    }
}
// RWD
$full-media:1300px;
$pc-media:960px;
$pad-media:780px;
$phone-media:500px;
@media screen and (max-width: $full-media) {
  .sizeBox{
    height: auto;
  }
}
@media screen and (max-width: $pc-media) {
    .about {
        display: block;
    }
    .pic {
        text-align: center;
        img{
            box-shadow: 0px 10px 25px rgba(0,0,0,0.3);
        }
        &:before{
            z-index: -1;
            background-color: #47533F;
            content: "";
            width: 115%;
            min-height: 50%;
            position: absolute;
            right: -5%;
            top: auto;
            transform: translate(0, -50%);
        }
    }
}
@media screen and (max-width: $pad-media) {
    .aboutText h3{
        font-size: 18px;
    }
    .aboutText h3 span{
        font-size: 26px;
    }
}
@media screen and (max-width: $phone-media) {
    .title{
        line-height: 80px;
        &:before{
            font-size: 40px;
        }
    }
}
</style>

<script>
export default {
  name: 'AboutMe'
}
</script>
