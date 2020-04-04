import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/styles/main.sass'

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: 'mdi',
  theme: {
    themes: {
      dark: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70'
      }
    },
    dark: true
  }
});
