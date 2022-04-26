<template lang="pug">
v-app
  hello-world(msg="Hello")
  welcome
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import Welcome from '@/components/Welcome';
import {VApp} from 'vuetify/components';
</script>

<style lang="sass">
#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50
</style>
