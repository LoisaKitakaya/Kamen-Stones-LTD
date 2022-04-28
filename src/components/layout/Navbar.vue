<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <!-- home link -->
      <a class="navbar-brand" href="#" id="home-btn">Kamen Stones</a>
      <!-- home link -->

      <!-- menu links -->
      <ul class="nav nav-tabs" id="full-menu">
        <li class="nav-item">
          <a href="#" class="nav-link" id="about-btn">About Us</a>
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
            <li><a class="dropdown-item" href="#">Base Material</a></li>
            <li><a class="dropdown-item" href="#">Clay Soil</a></li>
            <li><a class="dropdown-item" href="#">Fill Material</a></li>
            <li><a class="dropdown-item" href="#">Landscape Rocks</a></li>
            <li><a class="dropdown-item" href="#">Oversized</a></li>
            <li><a class="dropdown-item" href="#">Rip Rap</a></li>
            <li><a class="dropdown-item" href="#">Septic Fill</a></li>
            <li><a class="dropdown-item" href="#">Top Soil</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">All Products</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" id="price-btn">Price List</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" id="careers-btn">Careers</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" id="contact-btn">Contacts</a>
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
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav" id="offcanvas-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">About Us</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Price List</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Careers</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Contacts</a>
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
  $(window).scroll(() => {
    let myPos = $(window).scrollTop();

    console.log(myPos);
  });

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
});
// JQuery methods
</script>

<style lang="scss">
// colors
$dark: rgb(30, 25, 25);
// colors

.navbar-nav {
  display: flex !important;
  flex-direction: row !important;
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

#offcanvas-menu {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
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
