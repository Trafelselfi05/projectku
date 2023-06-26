<template>
  <div class="keranjang">
    <Navbar />
    <div class="container">
      <!--Breadcrumbs-->
      <div class="row">
        <div class="col-mt-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                <router-link to="/foods" class="text-dark">Food</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsif mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{ index+1 }}</th>
                  <td><img :src="'../assets/images/' + keranjang.product.gambar" class="img-fluid" width="250"/></td>
                  <td><strong>{{ keranjang.product.nama }}</strong></td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan :"-" }}
                  </td>
                  <td>
                    {{ keranjang.jumlah_pemesanan }}
                  </td>
                  <td>Rp. {{ keranjang.product.harga }}</td>
                  <td>Rp. {{ keranjang.product.harga*keranjang.jumlah_pemesanan }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "KeranjangView",
  components: {
    Navbar,
  },
  data(){
    return {
      keranjangs : []

    }
  },
methods: {
  setKeranjang(data){
    this.keranjangs = data
  }
},
mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>