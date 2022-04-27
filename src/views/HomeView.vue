<template>
  <div class="home">
    <!-- logo -->
    <div class="logo-container">
      <img src="@/assets/kamen.gif" alt="kamen stones ltd logo" />
    </div>
    <!-- logo -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
// theme colors
$navy-blue: #002367;
// theme colors

.home {
  min-height: 100vh;
  background-color: $navy-blue;
}

.logo-container img {
  width: 175px;
}

.logo-container {
  display: flex;
  justify-content: center;
}
</style>
