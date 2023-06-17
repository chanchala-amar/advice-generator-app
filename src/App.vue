<template>
  <Suspense>
    <template #default>
      <AdviceCard />
    </template>
    <template #fallback>
      <p>Your advice is loading, please wait...</p>
    </template>
  </Suspense>

  <div class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Chanchala Murthy</a>.
  </div>
</template>

<script>
import AdviceCard from "./components/AdviceCard.vue";

export default {
  name: "App",
  components: {
    AdviceCard,
  },
};
</script>

<style>
#app {
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: hsl(218, 23%, 16%);
  font-size: 28px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  padding: 1rem;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
