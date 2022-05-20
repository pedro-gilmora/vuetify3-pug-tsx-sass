import 'vuetify/styles' // Global CSS has to be imported
import 'sf-font/stylesheet.css'
import '@mdi/font/css/materialdesignicons.min.css'
import './app.sass'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const vuetify = createVuetify({
    theme:{
        defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    components,
    directives,
  }) // Replaces new Vuetify(...)

app.use(vuetify)

app.mount('#app')
