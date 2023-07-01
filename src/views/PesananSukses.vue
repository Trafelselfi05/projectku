<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
        <div class="row justify-content-center mt-5 md-4">
          <div class="col text-center">
            <img src="../assets/images/menunggu.png" width="300" />
            <h2><strong>Sukses !!</strong></h2>
            <h4>Pesanan Anda Segera Akan Proses<br>Silahkan Ditunggu</h4>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PesananSuksesView",
  components: {
    Navbar,
  },
};
</script>

<style>

</style>