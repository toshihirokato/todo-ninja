#  Vuetify を用いて Todoアプリを作成

## アイコン と ボタン
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

## テキスト と カラー

```
    <p class="red white--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste illo, eaque voluptate at ab, corporis et obcaecati ducimus, sunt excepturi aperiam? Nisi animi obcaecati modi sed consectetur voluptas non nam.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quos. Commodi incidunt, doloremque sit exercitationem nemo tempore, quidem corporis at, animi voluptatem esse minima. Eligendi dolorem blanditiis maiores incidunt aut.</p>
    <h1 class="display-4 font-italic font-weight-bold">Massive Display</h1>
    <h4 class="display-1">Smaller display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-thin">This is a subheading</p>
    <p class="caption"> This is a caption</p>
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
