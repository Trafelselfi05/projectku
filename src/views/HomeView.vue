<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <HeroView />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye>Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md 3 mt-4">
          <CardProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import HeroView from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
    HeroView,
    CardProduct,
  },
};
</script>
