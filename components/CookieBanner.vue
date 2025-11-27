<template>
  <div
    v-if="showBanner"
    data-cookie-banner
    class="bg-[#1a1a2e] text-white py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-4 w-full relative"
    style="border-radius: 6px ; width: 98%; margin: auto;"
  >
    <div class="">
      <p
        class="text-center text-white text-[11px] sm:text-xs md:text-xs"
        style="
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 0;
        "
      >
        <span class="block sm:inline">Varnish uses cookies to make its website easier to use.</span>
        <a
          href="#"
          class="underline hover:no-underline text-white ml-1"
          style="text-decoration: none"
          >Learn more</a
        >
      </p>
      <button
        @click.stop="closeBanner"
        type="button"
        class="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer z-10 p-1 sm:p-1.5"
        aria-label="Close cookie banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const showBanner = ref(true);

const closeBanner = () => {
  showBanner.value = false;
  // Optionally save to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("cookieBannerDismissed", "true");
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    const dismissed = localStorage.getItem("cookieBannerDismissed");
    if (dismissed === "true") {
      showBanner.value = false;
    }
  }
});
</script>
