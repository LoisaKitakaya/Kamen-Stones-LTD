<template>
  <div class="home">
    <!-- caption -->
    <div class="caption">
      <p class="text-light fs-2">
        We strive to focus on operational excellence and continuous cost
        improvement.
      </p>
      <p class="text-light fs-2">
        We are committed to providing quality products and
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

export default {
  name: "HomeView",
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
  background-attachment: scroll;
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
  width: 550px;
  transform: translateY(-25px);
}

.logo-container:hover {
  transform: scale(1.025);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .home {
    flex-wrap: wrap-reverse;
    width: auto !important;
  }

  .caption {
    width: auto;
    margin: 1rem;
    text-align: center;
  }

  .logo-container {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .logo-container img {
    width: 350px;
    transform: translateY(0);
  }

  .logo-container:hover {
    transform: translateY(0) scale(0) rotate(0);
  }
}
</style>
