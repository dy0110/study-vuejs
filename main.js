var number = 1;
number++;

var app = new Vue( {
    //要素
    el: '#app',
    //アプリケーションで使用するデータ
    data:{
        message: 'Hello Vue.js!',
        list:[ 'りんご', 'バナナ', 'いちご' ],
        text: {
            text: "初期メッセージ",
            value: 'Hello Vue.js!'
        },
        number: number, //numberがリアクティブデータになる
        show: true,
        num: 1,
        count: 0
    },
    //算出プロパティ
    computed:{
        //何かを処理した結果
    },
    //ライフサイクルフック
    created: function(){
       console.log( "Vue.js app is created" )
    },
    //アプリケーションで使用するメソッド
    methods:{
        click: function( event ){
            alert( "Click Button!" )
        },
        increment: function( ){
            this.count += 1;
        }
    }
} );
//Vueオブジェクトへアクセス(app.data.messageではない)
console.log( app.message )
//リストに項目追加
app.list.push( 'オレンジ' );
//表示を隠す
//app.show = false