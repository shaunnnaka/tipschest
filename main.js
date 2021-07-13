import paperList from './paperList.js'

var app = new Vue({
    el: '#app',
    data:{
      order: "upolder",
      field: "none",
      pref: "none",
      orderedObj: [{"id":"0","title":"豪雪地帯における屋根の形状の移り変わりと特性", "author":"長野県飯山高等学校","pref":"長野県","field":"物理","data":"2019","url":"roof.pdf"}],
      jsonObj: paperList
    },
    methods:{
      search: function(event){
        var tmpObj = this.jsonObj;
        if(this.field != "none"){
          tmpObj = this.jsonObj.filter(function(a){
            return a["field"] === this.field;
          });
        }
        switch (this.order){
          case "upnewer":{
            tmpObj = tmpObj.reverse();
            break;
          }
          case "older":{
            tmpObj = tmpObj.sort(function(a,b){
              return a["data"] - b["data"]
            })
            break;
          }
          case "newer":{
            tmpObj = tmpObj.sort(function(a,b){
              return (a["data"] - b["data"])
            }).reverse();
            break;
          }
          default:{
            break;
          }
        }
        this.orderedObj = tmpObj;
      }
    }
  })
