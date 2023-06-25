<template>
  <div class="food-detail">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
             <li class="breadcrumb-item" aria-current="page">
              <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
              <router-link to="/foods" class="text-dark">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>