<template>
  <section class="home">
    <h2 class="section-title">Welcome to My Portfolio</h2>
    <p class="section-description">I'm a passionate web developer.</p>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Styling for the Home component */
.home {
  padding: 20px;
  text-align: center;
}

.section-title {
  font-size: 28px;
  color: #007BFF; /* Blue title color */
}

.section-description {
  font-size: 18px;
  color: #333; /* Dark text color */
}

*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
