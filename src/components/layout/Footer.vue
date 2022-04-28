<template>
  <footer class="container-fluid navbar-light bg-light">
    <hr />
    <!-- newsletter form -->
    <form action="#" method="post">
      <h3 class="text-center">Subscribe to Newsletter</h3>
      <br />
      <div class="subscribe input-group mb-3">
        <i class="bi bi-envelope text-muted"></i>
        <input
          type="email"
          class="form-control"
          placeholder="Your email"
          aria-label="your email"
          aria-describedby="button-addon2"
          v-model="email"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="subscribe-button"
        >
          Subscribe
        </button>
      </div>
      <p class="form-footer-text text-muted text-center">
        *Subscribe to our newsletter to receive early discount offers and new
        templates info.
      </p>
      <br />
    </form>
    <!-- newsletter form -->
    <hr />
    <!-- sign out -->
    <div class="outro text-center">
      <p>2022 &#169; Kamen Stones LTD. All rights reserved.</p>
      <p class="text-muted fs-6">
        Made by
        <em><a class="text-muted" href="#" id="my-link">Freedom Design</a></em>
      </p>
    </div>
    <!-- sign out -->
  </footer>
  <!-- back to top -->
  <a href="#top" class="back-to-top" id="top-btn">
    <i class="bi bi-arrow-up"></i>_<span>back top</span>_<i
      class="bi bi-arrow-up"
    ></i>
  </a>
  <!-- back to top -->
</template>

<script>
// JQuery
import $ from "jquery";
// JQuery

export default {
  name: "Footer",
  data() {
    return {
      email: "",
    };
  },
};

// JQuery methods
$(document).ready(() => {
  //
  let topBtn = $("#top-btn");

  topBtn.hide();

  //
  $(window).scroll(() => {
    let myPos = $(window).scrollTop();

    if (myPos > 600) {
      topBtn.show();
    } else {
      topBtn.hide();
    }
  });
});
// JQuery methods
</script>

<style lang="scss">
// fonts
$Courgette: "Courgette", cursive;
$Raleway: "Raleway", sans-serif;
// fonts

footer {
  padding: 2rem !important;
  font-family: $Courgette;
  background: rgb(165, 180, 252);
  background: linear-gradient(
    90deg,
    rgba(165, 180, 252, 1) 0%,
    rgba(221, 214, 254, 1) 100%
  );
}

form {
  width: 50%;
  margin: auto;
  font-family: $Raleway;
}

.form-footer-text {
  line-height: 0;
  font-size: 13px;
  font-weight: bold;
}

.subscribe {
  position: relative;
}

.subscribe input,
.subscribe button {
  box-shadow: 0 0 3px #ccc, 0 10px 15px #d1d1d1 inset;
}

.subscribe input {
  text-indent: 32px;
  border: 1px solid #aaa;
  border-top-left-radius: 0.4rem !important;
  border-bottom-left-radius: 0.4rem !important;
}

.subscribe button {
  border-top-right-radius: 0.4rem !important;
  border-bottom-right-radius: 0.4rem !important;
}

.subscribe .bi-envelope {
  position: absolute;
  top: 5px;
  left: 12px;
  z-index: 5;
  font-size: 18px;
}

.back-to-top {
  position: fixed;
  bottom: 2.5rem;
  right: 1.5rem;
  color: black !important;
  font-family: $Courgette;
  text-decoration: none;
}

#my-link:hover {
  color: rgb(50, 50, 50) !important;
}

@media screen and (max-width: 600px) {
  footer {
    padding: 1rem !important;
    width: auto !important;
  }

  form {
    width: auto !important;
  }

  .back-to-top {
    display: none !important;
  }

  .form-footer-text {
    font-weight: normal !important;
  }
}
</style>
