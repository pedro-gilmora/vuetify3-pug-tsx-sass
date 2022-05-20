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
      <v-container>
        <greet-tsx/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="sass">
#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>

<script lang="ts">
import GreetTsx from '@/components/greet';
import { Ref, Vue, Options } from 'vue-property-decorator';
import { VApp } from 'vuetify/components';
import { Person } from './models/base';

@Options({
  components: {GreetTsx}
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