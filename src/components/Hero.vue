<template>
  <div class="hero">
    <!--Dekstop-->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="co-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Tersedia Banyak makanan Lezat,</strong><br />Di gadget
                kamu
              </h2>
              <p>Ayo Buruan Pesan dan Pilih Makanan Favorit Kamu</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.svg" width="100%" />
        </div>
      </div>
    </div>
    <!--    Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="col-md-6">
        <img src="../assets/images/hero.svg" width="100%" />
      </div>
      <div class="row mt-4">
        <div class="co-md-6 mb 3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Tersedia Banyak makanan Lezat,</strong><br />Di gadget
                kamu
              </h2>
              <p>Ayo Buruan Pesan dan Pilih Makanan Favorit Kamu</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroView",
};
</script>

<style>
</style>