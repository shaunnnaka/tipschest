import paperList from './paperList.js'

var app = new Vue({
    el: '#app',
    data:{
      order: "upolder",
      field: "none",
      pref: "none",
      orderedObj: paperList,
      jsonObj: paperList
    },
    methods:{
      search: function(event){
        var tmpObj = this.jsonObj;
        let fi = this.field;
        if(this.field != "none"){
          tmpObj.filter(function(a){
            return a.field === fi ;
          });
        }else{

        }
        switch (this.order){
          case "upnewer":{
            tmpObj.reverse();
            break;
          }
          case "older":{
            tmpObj.sort(function(a,b){
              return a.data - b.data
            })
            break;
          }
          case "newer":{
            tmpObj.sort(function(a,b){
              return b.data - a.data
            })
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
