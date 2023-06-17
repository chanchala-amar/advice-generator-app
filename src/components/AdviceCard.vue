<template>
  <article class="card">
    <h1 class="title">Advice # {{ advice.id }}</h1>
    <p>{{ advice.advice }}</p>
  </article>
  <section class="end-section">
    <img
      src="@/assets/images/pattern-divider-desktop.svg"
      alt="dividing-line"
      class="desktop-line"
    />
    <img
      src="@/assets/images/pattern-divider-mobile.svg"
      alt="dividing-line"
      class="mobile-line"
    />
    <div class="btn-glow">
      <button class="green-circle" @click="refreshAdvice">
        <img src="@/assets/images/icon-dice.svg" alt="dice-icon" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const APIURL = "https://api.adviceslip.com/advice";
const advice = ref({});

const refreshAdvice = async function () {
  const response = await fetch(APIURL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  });
  advice.value = (await response.json()).slip;
};

refreshAdvice();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: hsl(217, 19%, 24%);
  color: hsl(193, 38%, 86%);
  border-radius: 0.5rem;
  width: 90%;
}
.card p {
  padding: 0rem 2rem 6rem;
}
.desktop-line {
  display: none;
}
.mobile-line {
  display: block;
  width: 90%;
  padding-bottom: 2rem;
}
.end-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -5.25rem;
}
.green-circle {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  background-color: hsl(150, 100%, 66%);
  cursor: pointer;
  border: none;
}

.green-circle:hover {
  box-shadow: 0px 0px 15px 15px hsla(150, 100%, 66%, 0.15);
}
.title {
  color: hsl(150, 100%, 66%);
  font-size: 16px;
}
a {
  color: #42b983;
}
@media screen and (min-width: 500px) {
  .card {
    width: 45%;
  }
  .end-section {
    top: -5.65rem;
  }
  .mobile-line {
    display: none;
  }
  .desktop-line {
    padding-bottom: 3rem;
    display: block;
  }
}
@media screen and (min-width: 700px) and (max-width: 900px) {
  .card {
    width: 65%;
  }
  .desktop-line {
    width: 70%;
  }
}
</style>
