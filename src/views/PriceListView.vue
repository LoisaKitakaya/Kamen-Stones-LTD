<template>
  <div class="price-list-container container-fluid">
    <hr />
    <h1 class="text-center">Our prices</h1>
    <hr />
    <table class="table table-striped table-hover">
      <thead class="text-center">
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price/t (METRIC-TONS)</th>
          <th scope="col">Price/m<sup>3</sup> (METERS CUBED)</th>
          <th scope="col">Volume Purchase</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <th scope="row">Base Material</th>
          <td>$54</td>
          <td>$98</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$64</td>
          <td>$108</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Clay Soil</th>
          <td>$78</td>
          <td>$88</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$88</td>
          <td>$98</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Base Material</th>
          <td>$23</td>
          <td>$33</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$33</td>
          <td>$43</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Fill Material</th>
          <td>$97</td>
          <td>$107</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$117</td>
          <td>$127</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Landscape Rocks</th>
          <td>$70</td>
          <td>$80</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$90</td>
          <td>$100</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Oversized</th>
          <td>$175</td>
          <td>$185</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$195</td>
          <td>$205</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Rip Rap</th>
          <td>$312</td>
          <td>$322</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$323</td>
          <td>$333</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Septic Fill</th>
          <td>$69</td>
          <td>$79</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$89</td>
          <td>$99</td>
          <td>1000 TONS +</td>
        </tr>
        <tr>
          <th scope="row">Top Soil</th>
          <td>$159</td>
          <td>$169</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>$179</td>
          <td>$189</td>
          <td>1000 TONS +</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p class="text-center">
      <router-link to="/contacts">Contact</router-link> us to clarify anything
      related to our products and prices.
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PriceListView",
};
</script>

<style lang="scss">
.price-list-container {
  padding: 2rem;
}

@media screen and (max-width: 600px) {
  .price-list-container {
    padding: 1rem !important;
  }
}
</style>
