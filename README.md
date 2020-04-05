#  <font color=#108ee9>Vuetify を用いて Todoアプリを作成</font>

## <font color=#108ee9>アイコン と ボタン</font>
```
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span small>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
        <v-icon right>mdi-email</v-icon>
    </v-btn>

    <v-btn depressed fab small dark color="purple white--text">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
```

## <font color=#108ee9>テキスト と カラー</font>

```
    <p class="red white--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste illo, eaque voluptate at ab, corporis et obcaecati ducimus, sunt excepturi aperiam? Nisi animi obcaecati modi sed consectetur voluptas non nam.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos. Commodi incidunt, doloremque sit exercitationem nemo tempore, quidem corporis at, animi voluptatem esse minima. Eligendi dolorem blanditiis maiores incidunt aut.</p>
    <h1 class="display-4 font-italic font-weight-bold">Massive Display</h1>
    <h4 class="display-1">Smaller display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-thin">This is a subheading</p>
    <p class="caption"> This is a caption</p>
```

## <font color=#108ee9>グリッドシステム と ボタン</font>

```
    <v-container fluid class="my-5">
      <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn outlined block class="primary">1</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outlined block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outlined block class="primary">2</v-btn>
      </v-flex>
      <v-flex xs4 md2>
        <v-btn outlined block class="primary">2</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-around>
      <v-flex xs4 md3>
        <v-btn outlined block color="success">1</v-btn>
      </v-flex>
      <v-flex xs4 md3>
        <v-btn outlined block class="success">2</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
```

## vuetify@1.5.v → 2.2.20

|修正前|修正後|
|---|:---:|
|v-list-tile|v-list-item|
|v-list-tile-content|v-list-item-content|
|v-list-tile-action|v-list-item-action|
|v-btn flat|v-btn text|
|slot="activator"|template v-slot:activator="{ on }"|

## <font color=#108ee9>アイコン と ツールチップ</font>

```
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Button</v-btn>
      </template>
      <span>Button</span>
    </v-tooltip>  
```

## <font color=#108ee9>アバター</font>

```
    <v-responsive class="pt-4">
      <v-avatar size="100" class="grey lighen-2">
        <img :src="person.avatar">
      </v-avatar>
    </v-responsive>
```

## <font color=#108ee9>パネル</font>

```
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
```

## <font color=#108ee9>メニューバー</font>

```
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="grey" v-on="on" v-bind="attrs">
          <v-icon left>mdi-chevron-down</v-icon>
          <span>Menu</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
```

## <font color=#108ee9>モーダル</font>

```
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text class="success" v-on="on">Add new project</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h2>Add a new Project</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title"></v-text-field>
            <v-textarea label="Information" v-model="content"></v-textarea>
          </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
```

## <font color=#108ee9>main.js にて firebase を設定</font>

```
    import firebase from 'firebase/app'
    import 'firebase/firestore'

    const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore()

    export default db

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
