var jsonObj=[
  {"id":"0","title":"豪雪地帯における屋根の形状の移り変わりと特性", "author":"長野県飯山高等学校","pref":"長野県","field":"物理","data":"2019","url":"roof.pdf"},
  {"id":"1","title":"糸に伝わる音は縦波か横波か", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_01p1.pdf"},
  {"id":"2","title":"スティックスリップ現象の発生条件", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_02p2.pdf"},
  {"id":"3","title":"粗い面や濡れた粗面での乱反射における反射角と光量の関係", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_03p3.pdf"},
  {"id":"4","title":"強磁性体の磁気回路による熱減磁率の変化", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_04p4.pdf"},
  {"id":"5","title":"動摩擦係数の速度と質量への依存", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_05p5.pdf"},
  {"id":"6","title":"界面活性剤水溶液のモル濃度とアンチバブルの生成", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_06p6.pdf"}];
  
  var app = new Vue({
    el: '#app',
    data:{
      order: "upolder",
      field: "none",
      pref: "none",
      orderedObj: [{"id":"0","title":"豪雪地帯における屋根の形状の移り変わりと特性", "author":"長野県飯山高等学校","pref":"長野県","field":"物理","data":"2019","url":"roof.pdf"}],
      jsonObj: [
        {"id":"0","title":"豪雪地帯における屋根の形状の移り変わりと特性", "author":"長野県飯山高等学校","pref":"長野県","field":"物理","data":"2019","url":"roof.pdf"},
        {"id":"1","title":"糸に伝わる音は縦波か横波か", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_01p1.pdf"},
        {"id":"2","title":"スティックスリップ現象の発生条件", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_02p2.pdf"},
        {"id":"3","title":"粗い面や濡れた粗面での乱反射における反射角と光量の関係", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2018","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_03p3.pdf"},
        {"id":"4","title":"強磁性体の磁気回路による熱減磁率の変化", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_04p4.pdf"},
        {"id":"5","title":"動摩擦係数の速度と質量への依存", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2017","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_05p5.pdf"},
        {"id":"6","title":"界面活性剤水溶液のモル濃度とアンチバブルの生成", "author":"千葉県立船橋高等学校","pref":"千葉県","field":"物理","data":"2019","url":"https://www.chiba-c.ed.jp/funako/fttp_kousin/ssh/reserch/2019/2019_06p6.pdf"}
      ]
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
    },
  })
