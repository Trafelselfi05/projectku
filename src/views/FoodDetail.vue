<template>
    <div class="food-detail">
      <Navbar />
      <div class="container">
        <!--breadcrumbs -->
        <div class="row">
          <div class="col-mt-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">
                  <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <router-link to="/foods" class="text-dark">Food</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Food Order
                </li>
              </ol>
            </nav>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-6 mt-3">
            <img
              :src="'../assets/images/' + product.gambar"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ product.nama }}</strong>
            </h2>
            <hr>
            <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
            <form class="mt-4" v-on:submit.prevent>
              <div class="form-group">
                <label for="jumlah_pesanan">Jumlah Pesan</label>
                <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea v-model="pesan.ketrangan" class="form-control" placeholder="Keterangan Seperti : Pedas, Nasi Setengah ..."></textarea>
              </div>
               <button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart></b-icon-cart>Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import axios from "axios";
  
  export default {
    name: "FoodDetail",
    components: {
      Navbar,
    },
    data() {
      return {
        product: {},
        pesan :{}
      };
    },
    methods: {
      setProduct(data) {
        this.product = data;
      },
      pemesanan(){
        this.pesan.products(this.product);
        axios
        .post("http://localhost:3000/keranjangs",this.pesan)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/products/" + this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    },
  };
  </script>
  
  <style>
  </style>
  