<template>
    <div class="experience">
        <div class="all_box">
            <div class="title">
                <h2>WORK EXPERIENCES.</h2>
                <p>工作經驗</p>
            </div>
            <div class="exContent">
                <div class="e_c_single" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                    <h4>2018.11-2021.06
                        <div class="circle"></div>
                        <div class="circle circle_animation"></div>
                    </h4>
                    <span>2 years +</span>
                    <h5>揚京快客網路行銷公司 | 網頁設計師</h5>
                    <ul>
                        <li></li>
                        <li>專案溝通：與專案助理溝通討論客戶需求，協助設計風格成形、完整</li>
                        <li>設計規劃：設計構想、主視覺產出(Website design | Logo | icon | banner等)、Mockup提供客戶參考與調整</li>
                        <li>切版執行：設計切版、HTML / CSS開發、RWD </li>
                        <li>校稿確認：專案助理討論與梳理客戶修正方向，版面、功能校正，以達到客戶預期效果。</li>
                        <li>專案維護：與其他設計師交接，維護與管理專案。</li>
                    </ul>
                </div>
                <div class="e_c_single" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                    <h4>2016.08 - 2018.09
                        <div class="circle past-circle"></div>
                        <div class="circle circle_animation"></div>
                    </h4>
                    <span>2 years +</span>
                    <h5>築優建設股份有限公司 | 平面設計師</h5>
                    <ul>
                        <li>主要負責平面設計相關實務，包含發想構思、提案發表、設計編排、詢價洽談、發包與印刷實務等，具備獨立作業與執行之能力，實體產出例如： </li>
                        <li>銷售用文宣(DM、海報、精裝本書冊等)</li>
                        <li>廣告看板(大型帆布看板、圍籬帆布、羅馬旗等)</li>
                        <li>EDM設計(banner、臉書粉絲專頁與LINE等社群用圖)</li>
                        <li>宣傳禮贈品設計(廣告筆、鑰匙圈、禮盒等周邊客製化禮品)</li>
                        <li>官網內容設計與維護、影片宣傳</li>
                        <li>配合公司交辦之事項</li>
                    </ul>
                </div>
                <div class="e_c_single" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                    <h4>2014.12 - 2016.06
                        <div class="circle past-circle"></div>
                        <div class="circle circle_animation"></div>
                    </h4>
                    <span>1 years +</span>
                    <h5>卓越文教股份有限公司 | 美編人員</h5>
                    <ul>
                        <li>配合公司當期主打活動，進行文案發想與設計產出。 </li>
                        <li>資訊整合、文案發想</li>
                        <li>美編設計，文字素材編排等</li>
                        <li>設計稿發包，獨立校稿</li>
                        <li>實際設計產出如：DM | 大型海報 | 插畫 | 廣告看板 | 宣傳帆布條 | 臉書粉絲專頁Banner、LINE@ 圖文設計等</li>
                    </ul>
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

.experience{
    padding: 100px 0;
    .title{
        h2{
            font-size: $title-fz;
            color:#1F251B;
        }
        p{
            font-size: $line-fz;
        }
    }
}
.exContent{
    margin-top: 50px;
    padding-left: 7vh;
    border-left: 1px solid #E2D6C6;
    color: #707070;
    line-height: 180%;
    position: relative;
    &:before{
        content: "";
        background-color: #fff;
        width: 15px;
        height: 15px;
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(-50%);
    }
    h4{
        font-size: $line-fz;
        color: #707070;
        font-family: 'Century Gothic', sans-serif;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        .circle{
            width: 20px;
            height: 20px;
            border:3px solid $secondary-color;
            background:$secondary-color;
            border-radius: 100%;
            position: absolute;
            left: -7vh;
            transform: translate(-50%,-50%);
            top: 50%;
            z-index: 99;
        }
        .past-circle{
            background:#FFF;
        }
        .circle_animation{
            display: none;
            background-color:rgba(71, 83, 63, 0.8);
            animation-name: scaleUp;
            animation-delay:0;
            animation-iteration-count:infinite;
            animation-timing-function: ease-in;
            animation-duration: 1s;
            z-index: 6;
        }
    }
    span{
        background-color:$primay-color;
        color: #FFF;
        font-size: 16px;
        padding: 3px 20px;
        border-radius: 70px;
        margin-left: 8px;
    }
    h5{
        font-size: $line-fz;
        margin-top: 8px;
    }
    ul{
        color: #939291;
        font-size: 16px;
        margin-top: 20px;
        padding-left:25px;
    }
    li{
        list-style: square;
        &:nth-child(1){
            list-style: none;
            margin-left: -25px;
        }
    }
    .e_c_single{
        margin-bottom: 45px;
        &:last-child{
            margin-bottom: 0;
        }
        &:hover .circle_animation{
        display: flex;
        }
    }
    @keyframes scaleUp{
        0% {
            transform:translate(-50%, -50%) scale(1,1) ;
            opacity:1;
        }
        100% {
            transform:translate(-50%, -50%) scale(2,2) ;
            opacity:0;
        }
    }
}

</style>

<script>
export default {
  name: 'Experience',
  data () {
    return {
      isActive: 'false'
    }
  }
}
</script>
