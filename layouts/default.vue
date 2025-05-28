<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <header class="bg-white shadow-sm py-4 px-6">
      <Header />
    </header>

    <main class="flex-grow container mx-auto py-8 px-6">
      <slot />
    </main>

    <footer class="bg-white py-4 px-6 border-t">
      <div class="container mx-auto text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Nuxt Auth Demo
      </div>
    </footer>
  </div>
</template>
