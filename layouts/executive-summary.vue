<template>
  <div>
    <header>
      <nav class="m-5 flex justify-between items-center">
        <!-- Logo -->
        <div class="ml-10">
          <img src="https://via.placeholder.com/50" alt="Logo" class="h-20 w-20" />
        </div>

        <!-- Navigation Links -->
        <ul class="flex space-x-4 text-sm">
          <li><NuxtLink to="/" class="nav-link text-blue-500 hover:text-green-500">Home</NuxtLink></li>
          <li><NuxtLink to="/executive-summary" class="nav-link text-blue-500 hover:text-green-500">Executive Summary</NuxtLink></li>

        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .nav-link,
  .nav-text {
    transition: color 0.3s, transform 0.3s;
  }

  .nav-link:hover,
  .nav-text:hover {
    color: #12b488; /* Hover font color */
    cursor: pointer;
    transform: scale(1.10);
  }

  .router-link-exact-active {
    color: #12b488;
  }
</style>