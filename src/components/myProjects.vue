<template>
  <section class="projects">
    <h2 class="section-title">Projects</h2>
    <div class="project-list">
      <div class="project-item">
        <h3 class="project-title">Project 1</h3>
        <p class="project-description">This is a description of my first project. It involved building a responsive website for a client.</p>
        <button class="project-button">View Details</button>
      </div>
      <div class="project-item">
        <h3 class="project-title">Project 2</h3>
        <p class="project-description">Project 2 was an e-commerce website with a focus on user experience and mobile responsiveness.</p>
        <button class="project-button">View Details</button>
      </div>
      <!-- Add more project entries here -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
/* Styling for the Projects component */
.projects {
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

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #fff; /* White background */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
  border-radius: 5px; /* Rounded corners */
}

.project-title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #007BFF; /* Blue title color */
}

.project-description {
  font-size: 14px;
  line-height: 1.4;
  color: #333; /* Dark text color */
}

.project-button {
  background-color: #007BFF; /* Blue background */
  color: #fff; /* White text color */
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
}

.project-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

*{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
