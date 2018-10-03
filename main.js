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
        
        count: 0,
        
        isChild: true,
        
        isActive: true,
        
        textColor: 'red',
        
        bgColor: 'lightgray',
        
        classObject: {
            child: true,
            'is-ctive': false,
        },
        
        styleObject: {
            color: 'blue',
            backgroundColor: 'wheat'
        },
        
        ok: true,
        
        type: "A",
        
        name: "キマイラ",

        monster: [
            { id: 1, name: "スライム", hp: 100 },
            { id: 2, name: "ゴブリン", hp: 200 },
            { id: 3, name: "ドラゴン", hp: 500 },
        ],

        an_mons: []
    },
    //算出プロパティ
    computed:{
        //何かを処理した結果
    },
    //ライフサイクルフック
    created: function(){
       console.log( "Vue.js app is created" );
       //リストの更新
       var n_mons = { id: 1, name: "キングスライム", hp: 700 };
       this.$set( this.monster, 0, n_mons );
    },
    //アプリケーションで使用するメソッド
    methods:{
        click: function( event ){
            alert( "Click Button!" )
        },

        increment: function( ){
            this.count += 1;
        },
        //モンスター追加する関数
        doAdd: function( ){
            //list内で最大のIDを取得
            var max = this.monster.reduce( 
                function( a, b ){
                    return a.id > b.id ? a.id : b.id
                }, 0 
            );
            //モンスターリストに追加
            this.monster.push( 
                {
                    id: max + 1,
                    name: this.name,
                    hp: 500
                }
             );
        },
        
        doRemove: function( index ){
            this.monster.splice( index, 1 )
        },
        //体力減る
        doAttack: function( index ){
            this.monster[ index ].hp -= 10;
        }
    }
} );
//Vueオブジェクトへアクセス(app.data.messageではない)
console.log( app.message );
//リストに項目追加
app.list.push( 'オレンジ' );
//表示を隠す
//app.show = false