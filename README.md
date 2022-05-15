# Vuetify 3 + TypeScript + Pug + SASS + Vite

Starter template for simple usage of:

- [![Vue.js](https://img.shields.io/badge/VueJS-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org)
- [![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=flat&logo=vuetify&logoColor=AEDDFF)](https://next.vuetifyjs.com)
- [![TypeScript](https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat&logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)  
- [![Pug](https://img.shields.io/badge/Pug-FFF?style=flat&logo=pug&logoColor=A86454)](https://pugjs.org)  
- [![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white)](https://sass-lang.com)
- [![Vite](https://shields.io/badge/ViteJS-646cff?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEwIiBoZWlnaHQ9IjQwNCIgdmlld0JveD0iMCAwIDQxMCA0MDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zOTkuNjQxIDU5LjUyNDZMMjE1LjY0MyAzODguNTQ1QzIxMS44NDQgMzk1LjMzOCAyMDIuMDg0IDM5NS4zNzggMTk4LjIyOCAzODguNjE4TDEwLjU4MTcgNTkuNTU2M0M2LjM4MDg3IDUyLjE4OTYgMTIuNjgwMiA0My4yNjY1IDIxLjAyODEgNDQuNzU4NkwyMDUuMjIzIDc3LjY4MjRDMjA2LjM5OCA3Ny44OTI0IDIwNy42MDEgNzcuODkwNCAyMDguNzc2IDc3LjY3NjNMMzg5LjExOSA0NC44MDU4QzM5Ny40MzkgNDMuMjg5NCA0MDMuNzY4IDUyLjE0MzQgMzk5LjY0MSA1OS41MjQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjkyLjk2NSAxLjU3NDRMMTU2LjgwMSAyOC4yNTUyQzE1NC41NjMgMjguNjkzNyAxNTIuOTA2IDMwLjU5MDMgMTUyLjc3MSAzMi44NjY0TDE0NC4zOTUgMTc0LjMzQzE0NC4xOTggMTc3LjY2MiAxNDcuMjU4IDE4MC4yNDggMTUwLjUxIDE3OS40OThMMTg4LjQyIDE3MC43NDlDMTkxLjk2NyAxNjkuOTMxIDE5NS4xNzIgMTczLjA1NSAxOTQuNDQzIDE3Ni42MjJMMTgzLjE4IDIzMS43NzVDMTgyLjQyMiAyMzUuNDg3IDE4NS45MDcgMjM4LjY2MSAxODkuNTMyIDIzNy41NkwyMTIuOTQ3IDIzMC40NDZDMjE2LjU3NyAyMjkuMzQ0IDIyMC4wNjUgMjMyLjUyNyAyMTkuMjk3IDIzNi4yNDJMMjAxLjM5OCAzMjIuODc1QzIwMC4yNzggMzI4LjI5NCAyMDcuNDg2IDMzMS4yNDkgMjEwLjQ5MiAzMjYuNjAzTDIxMi41IDMyMy41TDMyMy40NTQgMTAyLjA3MkMzMjUuMzEyIDk4LjM2NDUgMzIyLjEwOCA5NC4xMzcgMzE4LjAzNiA5NC45MjI4TDI3OS4wMTQgMTAyLjQ1NEMyNzUuMzQ3IDEwMy4xNjEgMjcyLjIyNyA5OS43NDYgMjczLjI2MiA5Ni4xNTgzTDI5OC43MzEgNy44NjY4OUMyOTkuNzY3IDQuMjczMTQgMjk2LjYzNiAwLjg1NTE4MSAyOTIuOTY1IDEuNTc0NFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjYuMDAwMTciIHkxPSIzMi45OTk5IiB4Mj0iMjM1IiB5Mj0iMzQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0MUQxRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkQzNEZFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjE5NC42NTEiIHkxPSI4LjgxODE4IiB4Mj0iMjM2LjA3NiIgeTI9IjI5Mi45ODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRUE4MyIvPgo8c3RvcCBvZmZzZXQ9IjAuMDgzMzMzMyIgc3RvcC1jb2xvcj0iI0ZGREQzNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRkE4MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K&style=plastic)](https://vitejs.dev/)
- [![vue-property-decorator](https://img.shields.io/badge/-vue--property--decorator-grey)](https://www.npmjs.com/package/vue-property-decorator/v/10.0.0-rc.3)

You can start to enhance your development environment with a set of solutions like SFC for simple layouts or TSX components for complex layouts and UI logic, SASS styles instead of CSS, Pug instead of HTML...

>Since Vuetify 3 is still under development this repo follow the same path

# **Vue Class Component**
```html
<template>
  <v-app ref="app">
    <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
      <div class="d-flex justify-center align-center w-100">
        <v-btn @click="print('app-bar')">Get data</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100">
        <v-btn @click="print('drawer')">Get data</v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <GreetTSX/>
    </v-main>
  </v-app>
</template>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>

<script lang="ts">
import GreetTSX from './components/greet';
import { Ref, Vue, Options } from 'vue-property-decorator';
import { VApp } from 'vuetify/components';
import { Person } from './models/base';

@Options({
  components: {GreetTSX}
})
export default class App extends Vue {
  @Ref()
  app!: VApp

  text = 'prueba';

  mounted(){
    console.log(new Person(0, 'Pedro', 'Gil'))
  }

  print(key: string) {
    alert(JSON.stringify(this.app.getLayoutItem(key), null, 2))
  }

}
</script>
```

# **TSX Class Component**

```tsx
import { Vue } from "vue-property-decorator";
import { h } from 'vue'
import { VCard, VTextField } from "vuetify/components";
import { setup } from "vue-class-component";


export default class Greet extends Vue {
    text = 'Prueba'
    render() {
        return <VCard>
            {this.text}
            <VTextField v-model={this.text}/>
        </VCard>
    }
}
```

