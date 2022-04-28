<template>
  <!-- navigation -->
  <Navbar />
  <!-- navigation -->

  <!-- body -->
  <div class="main-body">
    <router-view />
  </div>
  <!-- body -->

  <!-- footer -->
  <Footer />
  <!-- footer -->
</template>

<script>
// @ is an alias to /src

// layout components
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
// layout components

// bootstrap js bundle
import bootstrap from "bootstrap";
// bootstrap js bundle

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
// theme colors
$navy-blue: #002367;
// theme colors

// bootstrap css
@import "../node_modules/bootstrap";
// bootstrap css

body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
