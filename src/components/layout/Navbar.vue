<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid">
      <!-- home link -->
      <a class="navbar-brand" href="#">Kamen Stones</a>
      <!-- home link -->

      <!-- menu links -->
      <ul class="navbar-nav" id="full-menu">
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
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
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
