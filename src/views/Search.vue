<template>
  <div class='about'><h2>SEARCH</h2>
  <hr class='accenthr'>
  <div id="app">
    <div id="listing" class="paper_list">
      <select class="select" id="sort_law" v-model="order">
        <option value="upolder" >更新日時（昇順）</option>
        <option value="upnewer" >更新日時（降順）</option>
        <option value="older">出版年（昇順）</option>
        <option value="newer">出版年（降順）</option>
      </select>
      <select id="field" class="select" v-model="field">
          <option value="none">分野を選択</option>
          <option value="物理">物理</option>
          <option value="化学">化学</option>
          <option value="生物">生物</option>
          <option value="地学">地学</option>
          <option value="数学">数学</option>
          <option value="情報">情報</option>
          <option value="教育">教育</option>
          <option value="文学">文学</option>
          <option value="グローバル">グローバル</option>
          <option value="人間科学">人間科学</option>
          <option value="歴史">歴史</option>
          <option value="現代社会">現代社会</option>
          <option value="地方創生">地方創生</option>
          <option value="政治経済">政治経済</option>
          <option value="倫理">倫理</option>
          <option value="芸術">芸術</option>
          <option value="体育">体育</option>
          <option value="その他">その他</option>
      </select>
      <select id="pref"  class="select" v-model="pref">
        <option value="none" >都道府県</option>
        <option value="北海道">北海道</option>
        <option value="青森県">青森県</option>
        <option value="岩手県">岩手県</option>
        <option value="宮城県">宮城県</option>
        <option value="秋田県">秋田県</option>
        <option value="山形県">山形県</option>
        <option value="福島県">福島県</option>
        <option value="茨城県">茨城県</option>
        <option value="栃木県">栃木県</option>
        <option value="群馬県">群馬県</option>
        <option value="埼玉県">埼玉県</option>
        <option value="千葉県">千葉県</option>
        <option value="東京都">東京都</option>
        <option value="神奈川県">神奈川県</option>
        <option value="新潟県">新潟県</option>
        <option value="富山県">富山県</option>
        <option value="石川県">石川県</option>
        <option value="福井県">福井県</option>
        <option value="山梨県">山梨県</option>
        <option value="長野県">長野県</option>
        <option value="岐阜県">岐阜県</option>
        <option value="静岡県">静岡県</option>
        <option value="愛知県">愛知県</option>
        <option value="三重県">三重県</option>
        <option value="滋賀県">滋賀県</option>
        <option value="京都府">京都府</option>
        <option value="大阪府">大阪府</option>
        <option value="兵庫県">兵庫県</option>
        <option value="奈良県">奈良県</option>
        <option value="和歌山県">和歌山県</option>
        <option value="鳥取県">鳥取県</option>
        <option value="島根県">島根県</option>
        <option value="岡山県">岡山県</option>
        <option value="広島県">広島県</option>
        <option value="山口県">山口県</option>
        <option value="徳島県">徳島県</option>
        <option value="香川県">香川県</option>
        <option value="愛媛県">愛媛県</option>
        <option value="高知県">高知県</option>
        <option value="福岡県">福岡県</option>
        <option value="佐賀県">佐賀県</option>
        <option value="長崎県">長崎県</option>
        <option value="熊本県">熊本県</option>
        <option value="大分県">大分県</option>
        <option value="宮崎県">宮崎県</option>
        <option value="鹿児島県">鹿児島県</option>
        <option value="沖縄県">沖縄県</option>
        </select>
   
      <button class="go" v-on:click="search">検索 </button>
      
      <div id="itemArea">
        <div  id="item" v-for="(item, key) in paperList" :key=key>
          <br>
          <a target="_blank"  :href="item.url" >
            <div class="item_block">
              <div class="paper_title" >{{  item.title  }}</div>
              <hr>
              <div class="paper_author" id="item0a">{{  item.author  }} </div>
              <div class="paper_field"> {{  item.field  }} </div>
              <div class="paper_data"> {{  item.data  }}  </div>
             </div>
          </a>
        </div>
      </div>
    </div>
      
      
      
      <div id="deeperButtonArea"></div>
      
    </div>

  </div >
</template>

<script>
// import p from '@/assets/data/paperList.json'
import pjs from '@/assets/data/json.js'

export default {
  data(){
    return {
      // paperList: JSON.stringify(p),
      paperList: pjs,
      order: "upolder",
      field: "none",
      pref: "none",
      orderedObj: pjs,
      jsonObj: pjs
    }
  },
  // computed:{
  //   search: function(){
  //     var tmpObj = this.jsonObj;
  //     let fi = this.field;
  //     if(this.field != "none"){
  //       tmpObj = tmpObj.filter(function(a){
  //         return a.field === fi ;
  //       });
  //     }else{
  //       tmpObj = tmpObj.filter(function(){
  //         return true ;
  //       });
  //     }
      
  //     switch (this.order){
  //       case "upnewer":{
  //         tmpObj.reverse();
  //         break;
  //       }
  //       case "older":{
  //         tmpObj = tmpObj.sort(function(a,b){
  //           return a.data - b.data
  //         })
  //         break;
  //       }
  //       case "newer":{
  //         tmpObj = tmpObj.sort(function(a,b){
  //           return b.data - a.data
  //         })
  //         break;
  //       }
  //       default:{

  //         break;
  //       }
  //     }
  //     this.orderedObj = tmpObj;
  //   }
  // }
}

</script>

<style scoped>
  
@import url("https://fonts.googleapis.com/cssfamily=Poppins:400,700");
@import url("https://fonts.googleapis.com/earlyaccessnotosansjapanese.css");
@import url("https://fonts.googleapis.com/iconfamily=Material+Icons");


body {
  letter-spacing: .03rem;
  font-family: "Poppins", "Noto Sans Japanese", YuGothic, "-apple-system", "Helvetica Neue", Meiryo, sans-serif;
  line-height: 1.35;
  font-size: 16px;
  color: #2C363A;
  background-color: #fff;
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
  text-decoration: underline;
  transition: all 0.3s ease;
  color: #aaa;
}

img {
  max-width: 100%;
  height: auto;
}


.about{
  margin-top: 120px;
  margin-left: 5vw;
}
.about h2{
  font-weight: 500;
  margin-bottom: 0;
}
.about .accenthr{
  width: 40px;
  margin-top: 0;
  margin-left: 0;
  border-top: 1px solid #ED7D31;
  border-bottom: transparent;
}





.paper_list{
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
  padding-top: 13px;
  padding-bottom: 3px;
  margin-left: 0%;
  margin-top: 30px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.315);
  border: 2px solid #646464;
}

.select{
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 10px;
  height: 40px;
  width: 10%;
}
.searchGo{
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 10px;
  height: 40px;
  width: 15%;
}
#item hr{
  border-top: 1px dashed #bbb;
  width: 90%;
  text-decoration: none;
  border-style: dashed;
  color: black;
 }


.paper_list{
  font-size: 14px;
  line-height: 1;
  margin-bottom: 10px;
  padding-top: 13px;
  padding-bottom: 3px;
  margin-left: 0%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  border: 1px solid #ED7D31;
}


.select{
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 10px;
  height: 35px;
  width: 15%;
  color: #646464;
  
}
.searchGo{
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 10px;
  height: 40px;
  width: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid #646464;
  color: #575757;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 9px;
  padding-left: 15px;

}

.searchGo:hover{
  cursor: pointer;
}

#itemArea{
  display: inline-block;
  text-align: left;
  width: 100%;
}
.item_block{
  border-color: #646464;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  padding-top: 10px;
  padding-left: 10px;
  margin: 2% 0% 0% 4%;
  height: 80px;
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  background-color: rgba(255, 255, 255, 0.199);
  cursor: pointer;
  float: left;
}
#item hr{
border-top: 1px dashed #bbb;
border-bottom: transparent;
width: 80vw;
text-decoration: none;
border-style: dashed;
color: #646464;
}
.paper_title{
  font-size: 100%;
  padding-bottom: 15px;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  margin-top: 5px;
  padding-top: 0px;
  height: 25px;
  display: inline-block;
  color: #464646;
}
.paper_author{

  height: 20px;
  padding-left: 0px;
  padding-top: inherit;
  display: inline-block;
  vertical-align: top;
  color: #646464;
}
.paper_field{
  height: 20px;
  margin-right: 3%;
  margin-left: 3%;
  padding-top: inherit;
  display: inline-block;
  vertical-align: top;
  color: #646464;
}
.paper_data{
  height: 20px;
  padding-left: 0px;
  padding-top: inherit;
  margin-left: 0;
  margin-right: 0px;
  display: inline-block;
  vertical-align: top;
  color: #646464;
}

.scroll-top{
  position: fixed;
  opacity: 0.85;
  bottom: 3%;
  right: -8%;
  width: 20%;
  height: 10%;
  z-index: 10000;
}
.deeper{
  width: auto;
  display: inline-block; 
  text-align: center; 
  
  border: 1px solid rgb(71, 71, 71);
  color: rgb(71, 71, 71);
  padding: 5px;
  margin: 15px;
}
.deeper:hover{
  cursor: pointer;
}
</style>