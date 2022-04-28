<template>
  <nav class="navbar navbar-light bg-light" id="top">
    <div class="container-fluid">
      <!-- home link -->
      <router-link to="/" class="navbar-brand fs-3" id="home-btn"
        >Kamen Stones</router-link
      >
      <!-- home link -->

      <!-- menu links -->
      <ul class="nav nav-tabs" id="full-menu">
        <li class="nav-item">
          <router-link to="/about" class="nav-link" id="about-btn"
            >About Us</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="products-btn"
            >Products</a
          >
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link to="/products" class="dropdown-item"
                >All Products</router-link
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Base Material</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Clay Soil</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Fill Material</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Landscape Rocks</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Oversized</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Rip Rap</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Septic Fill</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="dropdown-item"
                >Top Soil</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/price-list" class="nav-link" id="price-btn"
            >Price List</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/career" class="nav-link" id="careers-btn"
            >Careers</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link" id="contact-btn"
            >Contacts</router-link
          >
        </li>
      </ul>
      <!-- menu links -->

      <!-- toggler -->
      <ul class="navbar-nav" id="menu-toggle">
        <li class="nav-item">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </li>
      </ul>
      <!-- toggler -->

      <!-- off canvas -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title fs-2" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav" id="offcanvas-menu">
            <li class="nav-item fs-3">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item fs-3">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item fs-3">
              <router-link to="/price-list" class="nav-link"
                >Price List</router-link
              >
            </li>
            <li class="nav-item fs-3">
              <router-link to="/products" class="nav-link"
                >Products</router-link
              >
            </li>
            <li class="nav-item fs-3">
              <router-link to="/career" class="nav-link">Careers</router-link>
            </li>
            <li class="nav-item fs-3">
              <router-link to="/contacts" class="nav-link"
                >Contacts</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- off canvas -->
    </div>
  </nav>
</template>

<script>
// JQuery
import $ from "jquery";
// JQuery

export default {
  name: "Navbar",
};

// JQuery methods
$(document).ready(() => {
  //
  let aboutBtn = $("#about-btn");
  let priceBtn = $("#price-btn");
  let careersBtn = $("#careers-btn");
  let contactsBtn = $("#contact-btn");
  let homeBtn = $("#home-btn");

  homeBtn.click(() => {
    aboutBtn.removeClass("active");
    priceBtn.removeClass("active");
    careersBtn.removeClass("active");
    contactsBtn.removeClass("active");
  });

  aboutBtn.click(() => {
    aboutBtn.addClass("active");
    priceBtn.removeClass("active");
    careersBtn.removeClass("active");
    contactsBtn.removeClass("active");
  });

  priceBtn.click(() => {
    priceBtn.addClass("active");
    aboutBtn.removeClass("active");
    careersBtn.removeClass("active");
    contactsBtn.removeClass("active");
  });

  careersBtn.click(() => {
    careersBtn.addClass("active");
    priceBtn.removeClass("active");
    aboutBtn.removeClass("active");
    contactsBtn.removeClass("active");
  });

  contactsBtn.click(() => {
    contactsBtn.addClass("active");
    careersBtn.removeClass("active");
    priceBtn.removeClass("active");
    aboutBtn.removeClass("active");
  });

  let closeMenuBtn = $(".nav-link");
  let offCanvas = $("#offcanvasNavbar");
  let openMenuBtn = $("#menu-toggle");

  openMenuBtn.click(() => {
    offCanvas.show();
  });

  closeMenuBtn.click(() => {
    offCanvas.hide();
  });
});
// JQuery methods
</script>

<style lang="scss">
// colors
$dark: rgb(30, 25, 25);
// colors

// font
$Courgette: "Courgette", cursive;
$Raleway: "Raleway", sans-serif;
// font

nav {
  font-family: $Raleway;
  background: rgb(165, 180, 252);
  background: linear-gradient(
    90deg,
    rgba(165, 180, 252, 1) 0%,
    rgba(221, 214, 254, 1) 100%
  );
}

.navbar-brand {
  font-family: $Courgette;
}

.navbar-nav {
  display: flex !important;
  flex-direction: row !important;
}

.navbar-brand:hover {
  color: rgb(50, 50, 50) !important;
}

#menu-toggle {
  display: none !important;
}

.nav-item {
  margin: 0 0.5rem;
}

.nav-link {
  color: $dark !important;
}

.offcanvas {
  background: rgb(165, 180, 252);
  background: linear-gradient(
    90deg,
    rgba(165, 180, 252, 1) 0%,
    rgba(221, 214, 254, 1) 100%
  );
}

#offcanvas-menu {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
}

.nav,
.nav-tabs {
  border-color: gray !important;
}

.nav-tabs .active {
  border-color: gray !important;
  background-color: #f0f9ffa8 !important;
}

.nav-link:hover {
  border-color: gray !important;
}

@media screen and (max-width: 600px) {
  #full-menu {
    display: none !important;
  }

  #menu-toggle {
    display: block !important;
  }
}
</style>
