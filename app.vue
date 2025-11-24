<template>
  <div
    class="flex flex-col min-h-screen"
    style="
      font-family: 'Bricolage Grotesque', sans-serif;
      border-radius: 6px;
      background-color: #f7f7f8;
    "
  >
    <CookieBanner />
    <Header />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
