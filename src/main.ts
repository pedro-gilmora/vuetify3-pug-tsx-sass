import 'vuetify/styles' // Global CSS has to be imported
import 'sf-font/stylesheet.css'
import '@mdi/font/css/materialdesignicons.min.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const
    app = createApp(App),
    vuetify = createVuetify({
        defaults: {

            VCard: {
                color: 'secondary',
            },
            VBtn: {
                variant: "outlined",
                rounded: "sm"
            },
            VTextField: {
                variant: "outlined",
                density: "compact",
                rounded: false
            },
        },
        theme: {
            defaultTheme: 'dark',
        },
        components,
        directives,
    }) // Replaces new Vuetify(...)
app.use(vuetify);
app.mount('#app')
