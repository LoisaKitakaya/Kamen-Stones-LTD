<template>
  <div class="home">
    <!-- caption -->
    <div class="caption">
      <p class="text-light fs-2">
        We strive to focus on operational excellence and continuous cost
        improvement.
      </p>
      <p class="text-light fs-2">
        Equally important, we are committed to providing quality products and
        services to our customers.
      </p>
      <p class="text-light fs-2">
        We invite you to explore our website. We hope you will enjoy learning
        more about Kamen Stones Rock Quarry.
      </p>
    </div>
    <!-- caption -->
    <!-- logo -->
    <div class="logo-container">
      <img src="@/assets/Kamen-stones-logo.png" alt="kamen stones ltd logo" />
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

$svg-background: url("@/assets/home-bg.jpg");

.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000022;
  background-image: $svg-background;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.caption {
  width: 40%;
  margin: auto;
  color: black !important;
}

.logo-container {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
}

.logo-container img {
  border-radius: 50%;
  transition-timing-function: ease-in-out;
}

.logo-container:hover {
  transform: translateY(-5px) scale(1.025) rotate(5deg);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .home {
    flex-wrap: wrap-reverse;
  }

  .caption {
    width: auto;
    margin: 1rem;
  }

  .logo-container {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }

  .logo-container img {
    width: 350px;
  }

  .logo-container:hover {
    transform: translateY(0) scale(0) rotate(0);
  }
}
</style>
