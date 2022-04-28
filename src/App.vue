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

// bootstrap icons
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
// bootstrap icons

// google fonts
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Raleway&display=swap");

// fonts
$Raleway: "Raleway", sans-serif;
// fonts
// google fonts

body {
  padding: 0 !important;
  margin: 0 !important;
  font-family: $Raleway;
  scroll-behavior: smooth !important;
}
</style>
