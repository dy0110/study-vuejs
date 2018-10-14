var number = 1;
number++;

var app = new Vue( {
    //要素
    el: '#app',
    //アプリケーションで使用するデータ
    data:{
        message: 'Hello Vue.js!',

        url: "https://jp.vuejs.org/index.html",

        st_msg: "Hello <strong>Vue.js!</strong>",
        
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

        an_mons: [],

        val: true,

        array: [],

        radio: "",

        select: "",

        multiple: [],

        number: 10,

        width: 1000,

        height: 600,

        //フォーム入力と紐ずけるデータ
        budget: 300,

        //表示件数
        limit: 2,

        //元にあるリスト
        fruit: [ 
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'バナナ', price: 200 },
            { id: 3, name: 'いちご', price: 400 },
            { id: 4, name: 'オレンジ', price: 300 },
            { id: 5, name: 'メロン', price: 500 }
         ]
    },
    //算出プロパティ
    computed:{
        //何かを処理した結果
        halfWidth: function( ){
            return this.width/2
        },

        halfHeight: function( ){
            return this.height/2
        },

        halfPoint: function( ){
            return{
                x: this.halfWidth,
                y: this.halfHeight
            }
        },

        bindWidth: {
            get: function(){
                return this.width / 2
            },
            set: function( val ){
                this.width = val * 2
            }
        },

        //bagde以下のリストを返す算出プロパティ
        matched: function( ){
            return this.fruit.filter(
                function( el ){
                    return el.price <= this.budget
                }, this
            )
        },

        //matchedで返ったデータをlimit件返す算出プロパティ
        limited: function( ){
            return this.matched.slice( 0, this.limit );
        }
    },
    //DOMへアクセスできるタイミング
    mounted: function() {
        //一時的な変更　仮想DOMで上書き
        //ルート要素の取得
        console.log( this.$el );
        //DOMの取得
        console.log( this.$refs.hello )
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
        },

        //イベントハンドラー
        handleClick: function() {
            alert( 'クリックしたよ' )
        },

        //フォーム入力の取得
        handleInput: function( event ){
            console.log( "代入前: " + this.message )
            this.message = event.target.value;
            console.log( "代入後: " + this.message );
        },

        //マウスの右クリック
        handleRightClick: function( comment ){
            console.log( comment );
        },

        //ハンドラー
        handle: function( comments ){
            console.log( comments );
        }
    }
} );
//Vueオブジェクトへアクセス(app.data.messageではない)
console.log( app.message );
//リストに項目追加
app.list.push( 'オレンジ' );
//表示を隠す
//app.show = false