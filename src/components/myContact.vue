<template>
  <section class="contact">
    <h2 class="section-title">Contact Me</h2>
    <p class="contact-description">If you'd like to get in touch, feel free to reach out to me using the following methods:</p>
    <ul class="contact-list">
      <li class="contact-item">
        <span class="contact-label">Email:</span> your.email@example.com
      </li>
      <li class="contact-item">
        <span class="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/yourname" class="contact-link" target="_blank">linkedin.com/in/yourname</a>
      </li>
      <li class="contact-item">
        <span class="contact-label">GitHub:</span> <a href="https://github.com/yourusername" class="contact-link" target="_blank">github.com/yourusername</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
/* Styling for the Contact component */
*{
  font-family: Arial, Helvetica, sans-serif;
}
.contact {
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

.contact-description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333; /* Dark text color */
}

.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-item {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333; /* Dark text color */
}

.contact-label {
  font-weight: bold;
}

.contact-link {
  color: #007BFF; /* Blue text color */
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
