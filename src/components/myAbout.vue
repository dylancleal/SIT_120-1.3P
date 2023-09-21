<template>
  <section class="about">
    <h2 class="section-title">About Me</h2>
    <p class="about-description">I'm a web developer with a strong passion for creating beautiful and functional websites.</p>
    <p class="about-description">My skills include HTML, CSS, JavaScript, and Vue.js. I love to learn and explore new technologies.</p>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* Styling for the About component */
.about {
  padding: 20px;
  text-align: center;
  background-color: #fff; /* White background */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
  border-radius: 5px; /* Rounded corners */
}

.section-title {
  font-size: 28px;
  color: #007BFF; /* Blue title color */
}

.about-description {
  font-size: 18px;
  line-height: 1.6;
  color: #333; /* Dark text color */
}
*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
