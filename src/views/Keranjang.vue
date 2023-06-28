<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
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
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/images/' + keranjang.product.gambar"
                      class="img-fluid"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.product.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.ketrangan || "-" }}
                  </td>
                  <td>
                    {{ keranjang.jumlah_pemesanan }}
                  </td>
                  <td align="right">Rp. {{ keranjang.product.harga }}</td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{
                        keranjang.product.harga * keranjang.jumlah_pemesanan
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <stong>Total Harga :</stong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!--Form Check Out-->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.nama"
              />
            </div>
            <div class="form-group">
              <label for="noTlp">No Handphone</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.noTlp"
              />
            </div>
            <button type="submit" class="btn btn-success float-right" @click="checkout">
              <b-icon-cart></b-icon-cart >Pesan
            </button>
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
  name: "KeranjangView",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {}
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios.delete("http://localhost:3000/keranjangs/" + id).then(() => {});
      //update data keranjang
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setKeranjang(response.data))
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noTlp) {
        // Lakukan checkout atau proses pemesanan
        console.log("Nama:", this.pesan.nama);
        console.log("No Handphone:", this.pesan.noTlp);

        // Setelah berhasil melakukan checkout, kosongkan data pesan dan keranjangs
        this.pesan.nama = "";
        this.pesan.noTlp = "";
        this.keranjangs = [];
      } else {
        console.log("Nama dan No Handphone harus diisi!");
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjang(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (total, keranjang) {
        return total + keranjang.product.harga * keranjang.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>