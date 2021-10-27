<template>
    <div class="footer">
        <p>Know more about me</p>
        <div class="contact all_box" >
            <div title="My GitHub"><a href="https://github.com/junefish1414" target="_blank"><img src="../assets/image/icon-1.svg" alt=""></a></div>
            <div title="My CodePen"><a href="https://codepen.io/collection/oEgVEr" target="_blank"><img src="../assets/image/icon-2.svg" alt=""></a></div>
            <div title="Email"><a href="mailto:acc101130@gm.ntcu.edu.tw" ><img src="../assets/image/icon-3.svg" alt=""></a></div>
        </div>
        <div class="copyright">Copyright © 2021 Xin-Yu Wang</div>
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

.footer{
    margin-top: 50px;
    text-align: center;
    p{
        font-size: $line-fz-title;
        color: $primay-color-light;
    }
    .contact{
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            margin: 0 5px;
            opacity: 0.5;
            transition: ease-in .2s;
            &:hover{
                opacity: 1;
                transform: translateY(-3px);
            }
        }
    }
    .copyright{
        background-color:$primay-color;
        color: $primay-color-light;
        text-align: center;
        font-size: 14px;
        letter-spacing:0.03em;
        padding: 8px 0;
        margin-top: 35px;
    }
}
</style>
<script>
export default {
  name: 'footer'
}
</script>
