<template>
<div id="carousel">
  <mu-carousel :active="active" class="mu-elevation-4">
  <mu-icon slot="left"></mu-icon>
  <mu-icon slot="right"></mu-icon>
  <template slot="indicator" slot-scope="{ index, active }">
    <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
      <span class="rect-indicator"></span>
    </mu-button>
  </template>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
</div>
</template>
<script>
import carouselImg1 from './../assets/1.jpg'
import carouselImg2 from './../assets/2.jpg'
import carouselImg3 from './../assets/3.jpg'
import carouselImg4 from './../assets/4.jpg'

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
      active: 0
    }
  },
  methods: {
    changeActive (index) {
      this.active = index
    }
  }
}
</script>
<style>
#carousel {
  padding-top: 1em;
}
</style>
