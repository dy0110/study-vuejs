var app = new Vue( {
    //要素
    el: '#app',
    //アプリケーションで使用するデータ
    data:{
        message: 'Hello Vue.js!',
        list:[ 'りんご', 'バナナ', 'いちご' ],
        text: "初期メッセージ",
        number: 5,
        show: true
    },
    //算出プロパティ
    computed:{

    },
    //ライフサイクルフック
    created: function(){
       console.log( "Vue.js app is created" )
    },
    //アプリケーションで使用するメソッド
    methods:{
        click: function( event ){
            alert( "Click Button!" )
        }
    }
} );
//Vueオブジェクトへアクセス(app.data.messageではない)
console.log( app.message )
//リストに項目追加
//app.list.push( 'オレンジ' );
//表示を隠す
//app.show = false