<template>
    <a class="Works" id="worksPage">
        <div class="all_box">
            <div class="intro">
                <div class="title">03</div>
                <p>我的作品</p>
                <div class="kind">網頁設計  |  平面設計 |  其他</div>
            </div>
            <div class="worksAll">
                <a href="http://www.zhanrui-design.com/" target="_blank" class="work work1">
                    <div class="work-mask">
                        <div class="workName">
                            <h6>展璿室內設計 | 網頁設計</h6>
                            <p>Design by June</p>
                        </div>
                        <a href="http://www.zhanrui-design.com/" target="_blank"><img src="../assets/image/link-icon.svg" alt=""></a>
                    </div>
                </a>
                <a href="https://www.lawyer-fredliu.com/" target="_blank" class="work work2">
                    <div class="work-mask">
                        <div class="workName">
                            <h6>劉鴻傑律師事務所 | 網頁設計</h6>
                            <p>Design by June</p>
                        </div>
                        <a href="https://www.lawyer-fredliu.com/" target="_blank"><img src="../assets/image/link-icon.svg" alt=""></a>
                    </div>
                </a>
                <a href="http://www.powerloan.com.tw/" target="_blank" class="work work3">
                    <div class="work-mask">
                        <div class="workName">
                            <h6>威力貸專業貸款公司 | 網頁設計</h6>
                            <p>Design by June</p>
                        </div>
                        <a href="http://www.powerloan.com.tw/" target="_blank"><img src="../assets/image/link-icon.svg" alt=""></a>
                    </div>
                </a>
                <a href="http://www.betonbrut.com.tw/" target="_blank" class="work work4">
                    <div class="work-mask">
                        <div class="workName">
                            <h6>清水模有限股份公司 | 網頁設計</h6>
                            <p>Design by June</p>
                        </div>
                        <a href="http://www.betonbrut.com.tw/" target="_blank"><img src="../assets/image/link-icon.svg" alt=""></a>
                    </div>
                </a>
                <a href="http://www.shiouda.com.tw/" target="_blank" class="work work5">
                    <div class="work-mask">
                        <div class="workName">
                            <h6>修達手機維修 | 網頁設計</h6>
                            <p>Design by June</p>
                        </div>
                        <a href="http://www.shiouda.com.tw/" target="_blank"><img src="../assets/image/link-icon.svg" alt=""></a>
                    </div>
                </a>
                <a href="https://junefish1414.github.io/my-work/index.html" target="_blank" class="work work6">
                    <a href="https://junefish1414.github.io/my-work/index.html" target="_blank" class="more_work">更多作品</a>
                </a>
            </div>
        </div>
    </a>
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
$line-fz-middle:18px;

.Works{
    padding: 50px 0;
    display: block;
    .all_box{
        max-width: 1400px;
    }
    .intro{
    text-align: center;
        p{
            margin-top: -20px;
            margin-bottom: 35px;
            font-size: $line-fz;
        }
        .kind{
            font-size: $line-fz-middle;
        }
    }
    .title{
        color:rgba(226, 214, 198, 0.2);
        font-size: 300px;
        font-weight: bold;
        position: relative;
        line-height: 150px;
        text-align: center;
        &:before{
            content:'WORKS.';
            color: rgba(31, 37, 27, 1);
            font-weight: normal;
            font-size: $title-fz;
            position: absolute;
            left: 50%;
            top: 50%;
            transform:translate(-50%, -50%);
        }
    }
}
.worksAll{
    display: flex;
    margin-top: 50px;
    align-content: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .work{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;
        display: flex;
        align-items: flex-end;
        height: 17vw;
        width: 30%;
        border-radius: 5px;
        border:1px solid $primay-color-light;
        overflow: hidden;
        transition: ease-in .3s;
        margin: 15px 1%;
        &:last-child{
            align-items: center;
            justify-content: center;
        }
        &:hover .work-mask{
            opacity: 1;
        }
        .work-mask{
            opacity: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9));
            padding: 70px 5% 15px;
            display: flex;
            align-items:center;
            justify-content: space-between;
            width: 100%;
            color: #FFF;
            h6{
                font-size: $line-fz-middle;
                font-weight:700;
            }
            p{
                font-size: 14px;
                color: $primay-color-light;
            }
            a{
                animation-name: scaleBig;
                animation-delay: 0;
                animation-iteration-count: infinite;
                animation-duration: 1.5s;
                animation-timing-function: cubic-bezier(0.64, 0.01, 0.46, 1);
            }
        }
    }
}
.more_work{
    color: #FFF;
    border: 1px solid #FFF;
    padding: 5px 2vw;
    text-align: center;
    &:hover{
        background-color: #fff;
        color: #000;
        letter-spacing: 2px;
        border-radius: 5px;
    }
}
.work1{background-image: url(../assets/image/work01.png);}
.work2{background-image: url(../assets/image/work02.png);}
.work3{background-image: url(../assets/image/work03.png);}
.work4{background-image: url(../assets/image/work04.png);}
.work5{background-image: url(../assets/image/work05.png);}
.work6{background-image: url(../assets/image/work06.png);}

@keyframes scaleBig {
    0%{
        transform: scale(1,1);
    }
    50%{
        transform: scale(1.2,1.2);
    }
    100%{
        transform: scale(1,1);
    }

}

// RWD
$full-media:1300px;
$pc-media:960px;
$pad-media:780px;
$phone-media:500px;
@media screen and (max-width: $pc-media) {
    .worksAll .work {
        height: 26vw;
        width: 48%;
    }
}
@media screen and (max-width: $phone-media) {
    .worksAll .work {
        height: 50vw;
        width: 100%;
    }
    .worksAll .work .work-mask{
        opacity: 1;
    }
    .Works .title:before {
    content: 'WORKS.';
    color: #1f251b;
    font-weight: normal;
    font-size:40px;
    }
    .Works .intro p {
    margin-top: -45px;
    }
}
</style>

<script>
export default {
  name: 'Works'

}
</script>
