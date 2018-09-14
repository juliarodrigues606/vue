<template>
  <div id="app">
    <header class="mu-appbar mu-primary-color mu-elevation-4 mu-table-flex mu-secondary-text-color" >
      <h1>Lorem Ipsum</h1>
    </header>
    <div class="container"><carousel/></div>
    <div><tabs/></div>
    <div class="container"><formulario/></div>
    <footer>
    <mu-flex class="flex-wrapper" justify-content="end">
      <mu-flex class="flex-demo" justify-content="center" >Júlia Rodrigues</mu-flex>
    </mu-flex>
  </footer>
  </div>
</template>

<script>
import Tabs from './components/Tabs'
import Carousel from './components/Carousel'
import Formulario from './components/Formulario'

export default {
  name: 'App',
  components: {Tabs, Carousel, Formulario}
}
</script>

<style>
body {
  background-color: #e0f2f1;
}
</style>
