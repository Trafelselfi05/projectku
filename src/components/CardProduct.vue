<template>
  <div class="card-container">
    <div class="card shadow card-product">
      <img :src="'assets/images/' + product.gambar" class="card-img-top" alt="" :style="{ height: '200px' }">
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga : Rp. {{ product.harga }}</p>
        <router-link class="btn btn-success" :to="'/foods/' + product.id"><b-icon-cart></b-icon-cart>Pesan</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  width: 300px; /* Set the desired width for the card */
  margin-bottom: 20px;
}
</style>
