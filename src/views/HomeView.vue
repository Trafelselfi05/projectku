<template>
  <div class="home">
    <Navbar/>
    <div class="container">
    <HeroView/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import HeroView from '@/components/Hero.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar,
    HeroView
  }
}
</script>
