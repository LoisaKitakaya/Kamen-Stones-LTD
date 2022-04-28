<template>
  <div class="about-container container-fluid">
    <hr />
    <h1 class="text-center">About Kamen Stones LTD</h1>
    <hr />
    <div class="general-info fs-4">
      <h3 class="text-center">General Information</h3>
      <p>
        Kamen Stone Rock Quarry provides limestone materials required by the
        Kenyan economy. We primarily produce crushed stone, as well as fill
        material, topsoil and rip rap. Aggregates are used to build roads,
        non-residential and residential properties.
      </p>
    </div>
    <div class="mission fs-4">
      <h3 class="text-center">Our Mission</h3>
      <p>
        Our Mission is to provide quality products and services which
        consistently meet our customer's expectations: to be responsible
        stewards, with respect to the safety and environmental impact of our
        operations and products. We recognize that success in all of our
        activities is related directly to the talents, dedication and
        performance of our employees throughout the company.
      </p>
    </div>
    <div class="guiding-principles fs-4">
      <h3 class="text-center">Guiding Principles</h3>
      <ul>
        <li>
          Integrity: We will work consistently to earn the respect and trust of
          all parties with whom we interact by acting fairly and honorably. We
          will observe high ethical standards and obey all laws and regulations.
        </li>
        <br />
        <li>
          Excellence: We are committed to excellence in all of our activities.
          We value innovation and we intend to maintain a position of leadership
          in our area.
        </li>
        <br />
        <li>
          Respect: We will maintain a high respect for both employees and
          customers, their dignity, their talents and their interests.
        </li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss">
.about-container {
  padding: 2rem;
}

.general-info,
.mission,
.guiding-principles {
  width: 70%;
  margin: auto;
  text-align: justify;
}

// .about-container h1,
.general-info h3,
.mission h3,
.guiding-principles h3 {
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .about-container {
    padding: 1rem !important;
  }

  .general-info,
  .mission {
    width: auto !important;
    text-align: center !important;
  }

  .guiding-principles {
    width: auto !important;
    text-align: left !important;
  }
}
</style>
