var number = 1;
number++;
//コンポーネントを定義
Vue.component( 'my-component', {
    template: '<ul><comp-child v-for="item in list" v-bind:key="item.id" v-bind="item" v-on:attack="handleAttack"></comp-child></ul>',
    //オブジェクトを返えす関数にする
    data: function(){
        return {
            list: [
                { id: 1, name: "スライム", hp: 100 },
                { id: 2, name: "ゴブリン", hp: 200 },
                { id: 3, name: "ドラゴン", hp: 500 }
            ]
        }
    },
    //ルートと同様にプロパティを定義できる
    methods: {
        handleAttack: function( id ){
            //idから要素を取得
            var item = this.list.find( function(el){
                return el.id === id;
            } );
            //HPを１０減らす
            if( item !== undefined && item.hp > 0 ){
                item.hp -= 10;
            }
        }
    }
} );

//子コンポーネント
Vue.component( 'comp-child',{
    template: '<li>NAME: {{ name }} HP: {{ hp }}<button v-on:click="doAttack">攻撃する</button></li>',
    props: { id: Number, name: String, hp: Number },
    methods: {
        //$emitでattackを発火
        doAttack: function( ){
            //引き数として自分のIDを渡す
            this.$emit( 'attack', this.id );
        }
    }
} );

//イベントバス
var bus = new Vue({
    data: {
        count: 0
    }
})

Vue.component( 'component-b', {
    template: '<p>bus: {{ bus.count }}</p>',
    computed: {
        bus: function(){
            return bus.$data
        }
    },
    created: function( ){
        bus.$on( 'bus-event', function( ){
            this.count++
        } )
    }
} );

//ローカルコンポーネント
var localComponent = {
    template: 'LocalComponent'
}

//slot
Vue.component( 'slot-parent', {
    template: '<slot-child>埋めこまれたスロットコンテンツ</slot-child>'
} );

Vue.component( 'slot-child', {
    template: '<div class="slot-child">ここにスロットを埋め込む　→ <slot></slot></div>'
} );

//名前つきスロット
Vue.component( 'name-slot-parent', {
    template: '<name-slot-child><header slot="header">Hello Vue.js Slot!</header>{{ msg }}</name-slot-child>',
    data: function(){
        return {
            msg:"Vue.jsはJavaScriptのフレームワークです。" 
        }
    }
});

Vue.component('name-slot-child', {
    template: "<section><header><slot name='header'>{{ header_msg }}</slot></header><div class='content'><slot>{{ content_msg }}</slot></div><slot name='footer'></slot></section>",
    data: function(){
        return {
            header_msg : "デフォルトタイトル" ,
            content_msg: "デフォルトコンテンツ"
        }
    }
});

Vue.component('sync-component', {
    template: '<sync-child  v-bind:name.sync="name" v-bind:hp.sync="hp"></sync-child>',
    data: function(){
        return {
            name : "メタルスライム" ,
            hp: 500
        }
    }
});

Vue.component('sync-child', {
    template: '<div class="sync-component"><p>名前. {{ name }} HP. {{ hp }}</p><p>名前 <input v-model="localName"></p><p>HP <input size="5" v-model.number="localHp"></p></div>',
    props: {
        name: String,
        hp: Number
    },
    computed:{
        localName: {
            get: function(){ return this.name },
            set: function( val ){ this.$emit('update:name', val) }
        },
        localHp: {
            get: function(){ return this.hp },
            set: function( val ){ this.$emit('update:hp', val) }
        }
    }
});

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
         ],

         watchList: [],

         current: '',

         topics: [
             { value: 'vue', name: 'Vue.js' },
             { value: 'jQuery', name: 'jQuery' }
         ],

         price: 19800,

         order: false
    },
    //Watch
    watch: {
        current: function( val ){
            //GitHubのAPIからトピックのリポジトリを検索
            axios.get( 'https://api.github.com/search/repositories', {
                params:{ q: 'topic: ' + val }
            }).then( function( response ){
                this.watchList = response.data.items
            }.bind( this ) )
        }
    },
    //filters
    filters: {

        round: function( val ){
            return Math.round( val * 100 ) / 100
        },

        radian: function( val ){
            return val * Math.PI / 180
        }
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
        },

        sortedList: function(){
            return window._.orderBy( this.fruit, 'price', this.order ? 'desc' : 'asc' )
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