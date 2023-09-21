<template>
  <div id="app">
    <!-- Header Section -->
    <header>
      <h1 class="header-title">Your Name</h1>
      <nav class="nav-links">
        <!-- Navigation Links -->
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/myabout" class="nav-link">About</router-link>
        <router-link to="/myprojects" class="nav-link">Projects</router-link>
        <router-link to="/mycontact" class="nav-link">Contact</router-link>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Vue Router will display components based on routes here -->
      <router-view></router-view>
    </main>

    <!-- Footer Section -->
    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
}
/* Global Styling for the App */
body {  
  margin: 0;
  padding: 0;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styling */
header {
  background-color: #f0f0f0; /* Light gray background */
  color: #007BFF; /* Blue text color */
  padding: 20px;
  text-align: center;
}

.header-title {
  font-size: 28px;
  margin: 0;
}

.nav-links {
  margin-top: 20px;
}

.nav-link {
  color: #007BFF; /* Blue text color */
  text-decoration: none;
  margin: 0 20px; /* Wider spacing */
  font-size: 18px;
  font-weight: bold; /* Bold text */
}

.nav-link:hover {
  text-decoration: underline;
}

/* Main Content Styling */
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff; /* White background */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
  border-radius: 5px; /* Rounded corners */
}

/* Footer Styling */
footer {
  background-color: #f0f0f0; /* Light gray background */
  color: #007BFF; /* Blue text color */
  padding: 20px 0;
  text-align: center;
  font-size: 18px; /* Larger font size */
}

/* Add more styles as needed */

@media screen and (max-width: 768px) {
  /* Adjust styles for smaller screens */
  .header-title {
    font-size: 24px; /* Smaller font size for header title */
  }

  .nav-link {
    font-size: 16px; /* Smaller font size for navigation links */
  }

  main {
    padding: 10px; /* Reduce padding for main content on smaller screens */
  }

  footer {
    padding: 10px 0; /* Reduce padding for footer on smaller screens */
  }

}

</style>
