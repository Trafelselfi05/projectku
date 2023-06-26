<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Kulinerku</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">Keranjang<b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">{{ jumlah_pesanans.length }}</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarView",
  data() {
    return {
      jumlah_pesanans: []
  }
},
methods: {
  setJumlah(data) {
    this.jumlah_pesanans = data
  }
},
mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
},
};
</script>

<style>
</style>