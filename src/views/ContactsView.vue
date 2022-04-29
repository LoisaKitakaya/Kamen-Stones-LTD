<template>
  <div class="contact-container container-fluid">
    <hr />
    <h1 class="text-center">Contacts</h1>
    <hr />
    <form action="#">
      <p class="text-center">Comments, complaints, compliments</p>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <textarea
          name="message"
          class="form-control"
          id="message"
          placeholder="Your message"
          style="height: 200px"
          v-model="message"
        ></textarea>
        <label for="message">Your message</label>
      </div>
      <br />
      <div class="submit-btn">
        <button type="submit" class="btn btn-outline-success">Submit</button>
      </div>
    </form>
    <hr />
    <h1 class="text-center">Find us here</h1>
    <hr />
    <div class="location-container">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127650.74683709093!2d36.95551216020882!3d-1.0979083786046855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f492933ec3075%3A0xf7db8bdafb93a4cd!2sHirani%20quarries%20Ltd!5e0!3m2!1sen!2ske!4v1651152174368!5m2!1sen!2ske"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <br />
      <div class="location fs-4">
        <h4>Our offices are at:</h4>
        <p>
          Saint Jhn tower, <br />
          11th story, wing C, <br />
          Kenyatta road, Nairobi, Kenya
        </p>
        <br />
        <h4>Alternatively, you can contact us in the following ways:</h4>
        <ul>
          <li><strong>email:</strong> kamenstones@info.com</li>
          <li><strong>tel (paid):</strong> +2548942430</li>
          <li><strong>tel (toll free):</strong> +25480934982</li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ContactsView",
  data() {
    return {
      email: "",
      message: "",
    };
  },
};
</script>

<style lang="scss">
.contact-container {
  padding: 2rem;
}

.contact-container form {
  width: 60%;
  margin: auto;
}

.contact-container form {
  p {
    text-decoration: underline;
  }
}

.submit-btn {
  width: fit-content;
  margin: auto;
}
.location-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.location h4 {
  text-decoration: underline;
}

iframe {
  // width="600"
  // height="450"
  // style="border: 0"
  height: 500px;
  width: 550px;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 0.3rem;
}

@media screen and (max-width: 600px) {
  .contact-container {
    padding: 1rem !important;
  }

  .contact-container form {
    width: auto !important;
  }

  .location-container {
    flex-wrap: wrap;
  }

  iframe {
    width: auto !important;
    margin-bottom: 2rem !important;
  }
}
</style>
