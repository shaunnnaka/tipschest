<template>
<div>
  <div class="about" >
    <p class="concept">文系の先行研究も探せるサービス</p>

    <p>このWebサービスは，新たに課題研究を始める中高校生へテーマ設定や参考文献の調査を効率化するために2020年4月から1年間運用をしてみた課題研究論文情報サイトです。<br><br>
      各学校等が実施している課題研究を集めた場を提供することを目指し，800件以上の課題研究論文を当サービスで閲覧することができます。
    </p>
  </div>
  <div class="about" >
      <h2 class="about_title">NEWS</h2>
        <li></li>
        <li></li>
        <li></li>
  </div>

</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,700");
  @import url("https://fonts.googleapis.com/earlyaccess/notosansjapanese.css");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  body {
    letter-spacing: .03rem;
    font-family: "Poppins", "Noto Sans Japanese", YuGothic, "-apple-system", "Helvetica Neue", Meiryo, sans-serif;
    line-height: 1.35;
    font-size: 16px;
    background-color: #fff;
    color: #2C363A;
    margin: 0;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga", "kern";
    width: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  pre {
    letter-spacing: .03rem;
    font-family: "Poppins", "Noto Sans Japanese", YuGothic, "-apple-system", "Helvetica Neue", Meiryo, sans-serif;
    line-height: 1.65 !important;
    font-size: 16px;
    color: #2C363A;
    white-space: initial;
  }

  pre a, .tmp a {
    color: #1A0DAB;
  }

  .tmp a span {
    color: #2C363A;
  }

  a {
    text-decoration: none;
    color: #2C363A;
  }

  a:hover {
    text-decoration: none;
    transition: all 0.3s ease;
    color: #aaa;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .inner {
    margin-left: 0;
    margin-right: 0;
    max-width: 960px;
    padding: 0 20px;
  }
  .about :first-child{
    margin-top: 15px;
  }
  .about{
    color: #5a5a5a; 
    margin-left: 12vw;
    margin-right: auto;
    line-height: 1.8;
    font-size: 18px;  
    margin-left: 3px;
    padding-left: 10%;
    margin-bottom: 100px;
    text-align: left;
  }
  .about .concept{
    margin-top: 170px;
  }
  .about_title{
    letter-spacing: 0.15rem;
  }

  .about .concept{
    font-weight: 300;
    font-family: YuGothic,"Noto Sans Japanese",  "-apple-system", "Helvetica Neue", Meiryo;
    font-size: 36px;
    margin-bottom: 65px;
    letter-spacing: 0.08rem;
    color: #646464;
  }

  .about p, .about li{
    font-family: YuGothic,"Noto Sans Japanese",  "-apple-system", "Helvetica Neue", Meiryo;
    font-weight: 300;
    width: 70%;
    margin-left: 5px;
  }
  .concept::first-letter{
    color: #ED7D31;
  }

</style>