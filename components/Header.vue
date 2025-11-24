<template>
  <header
    class="flex justify-center items-center bg-white top-0 z-50"
    style="background-color: transparent; height: 80px; "
  >
    <nav class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between" style="height: 32px;">
        <!-- Logo Section -->
        <div class="flex items-center flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/icons/Company logo.svg"
              alt="Varnish Logo"
              class="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 flex-shrink-0"
            />
            <span class="text-lg sm:text-xl md:text-xl font-bold text-gray-900 whitespace-nowrap ml-1.5 sm:ml-2 md:ml-2"
              >Varnish</span
            >
          </NuxtLink>
          <!-- Navigation Links - Hidden below 800px, visible on 800px+ -->
          <div class="hidden tablet:flex items-center flex-1 min-w-0" style="margin-left: 40px; gap: 32px;">
            <template v-for="link in navigationLinks" :key="link.name">
              <!-- Regular Links -->
              <NuxtLink
                v-if="!link.hasDropdown"
                :to="link.route || '#'"
                class="text-gray-700 hover:text-gray-900 transition-colors text-xs tablet:text-[13px] whitespace-nowrap"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  text-align: center;
                "
              >
                {{ link.name }}
              </NuxtLink>

              <!-- Solutions Dropdown -->
              <UiDropdownMenu v-else>
                <template #trigger>
                  <a
                    href="#"
                    class="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 cursor-pointer text-xs tablet:text-[13px] whitespace-nowrap"
                    style="
                      font-family: 'Bricolage Grotesque', sans-serif;
                      font-weight: 500;
                      line-height: 20px;
                      letter-spacing: -0.006em;
                      text-align: center;
                    "
                  >
                    <span>{{ link.name }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </template>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Solution 1
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Solution 2
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Solution 3
                </a>
              </UiDropdownMenu>
            </template>
          </div>
        </div>

        <!-- Action Buttons - Hidden below 800px, visible on 800px+ -->
        <div class="hidden tablet:flex items-center flex-shrink-0" style="gap: 12px;">
          <!-- Login Button -->
          <button
            class="flex items-center justify-center text-gray-700"
            style="
              width: 75px;
              height: 32px;
              border-radius: 6px;
              border: 1px solid rgba(26, 25, 37, 0.09);
              padding: 6px;
              background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
              box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
                0px 2px 4px -1px rgba(26, 25, 37, 0.12),
                0px 4px 8px -4px rgba(26, 25, 37, 0.12),
                0px 8px 12px -4px rgba(26, 25, 37, 0.06),
                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
            "
          >
            Login
          </button>
          <!-- Sign Up Button -->
          <button
            class="flex items-center justify-center text-white"
            style="
              width: 75px;
              height: 32px;
              border-radius: 6px;
              padding: 6px;
              background: linear-gradient(0deg, #1a1925, #1a1925),
                linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0.12) 0%,
                  rgba(255, 255, 255, 0) 100%
                );
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
              box-shadow: 0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
                0px 2px 4px -1px rgba(26, 25, 37, 0.12),
                0px 4px 8px -4px rgba(26, 25, 37, 0.12),
                0px 8px 12px -4px rgba(26, 25, 37, 0.06),
                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset;
            "
          >
            Sign Up
          </button>
        </div>

        <!-- Hamburger Menu Button - Visible below 800px, hidden on 800px+ -->
        <button
          @click="toggleMobileMenu"
          class="tablet:hidden flex items-center justify-center p-2 sm:p-2.5 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- Backdrop/Overlay -->
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="tablet:hidden fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        @click="closeMobileMenu"
      ></div>
    </Transition>

    <!-- Sidebar Menu - Slides in from left -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="tablet:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[9999] shadow-xl"
      >
      <div class="flex flex-col h-full">
        <!-- Sidebar Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/icons/Company logo.svg"
              alt="Varnish Logo"
              class="h-8 w-8 flex-shrink-0"
            />
            <span class="text-xl font-bold text-gray-900 whitespace-nowrap ml-2"
              >Varnish</span
            >
          </NuxtLink>
          <button
            @click="closeMobileMenu"
            class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sidebar Content -->
        <div class="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <template v-for="link in navigationLinks" :key="link.name">
            <NuxtLink
              v-if="!link.hasDropdown"
              :to="link.route || '#'"
              class="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: -0.006em;
              "
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </NuxtLink>
            <div v-else>
              <button
                @click="toggleDropdown(link.name)"
                class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  font-size: 13px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                "
              >
                <span>{{ link.name }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 transition-transform"
                  :class="{ 'rotate-180': openDropdown === link.name }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                v-if="openDropdown === link.name"
                class="pl-4 space-y-1 mt-1"
              >
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  @click="closeMobileMenu"
                >
                  Solution 1
                </a>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  @click="closeMobileMenu"
                >
                  Solution 2
                </a>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  @click="closeMobileMenu"
                >
                  Solution 3
                </a>
              </div>
            </div>
          </template>
        </div>

        <!-- Sidebar Footer - Action Buttons -->
        <div class="p-4 border-t border-gray-200 space-y-3">
          <button
            class="w-full flex items-center justify-center text-gray-700 py-2"
            style="
              height: 32px;
              border-radius: 6px;
              border: 1px solid rgba(26, 25, 37, 0.09);
              background: linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
            "
            @click="closeMobileMenu"
          >
            Login
          </button>
          <button
            class="w-full flex items-center justify-center text-white py-2"
            style="
              height: 32px;
              border-radius: 6px;
              background: linear-gradient(0deg, #1a1925, #1a1925);
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-size: 13px;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
            "
            @click="closeMobileMenu"
          >
            Sign Up
          </button>
        </div>
      </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
const openDropdown = ref<string | null>(null);

const navigationLinks = [
  { name: "Features", hasDropdown: false, route: "/features" },
  { name: "Solutions", hasDropdown: true },
  { name: "Network", hasDropdown: false, route: "/" },
  { name: "Pricing", hasDropdown: false, route: "/pricing" },
  { name: "Support", hasDropdown: false, route: "/support" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    openDropdown.value = null;
  }
  // Prevent body scroll when menu is open
  if (typeof window !== 'undefined') {
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  openDropdown.value = null;
  // Restore body scroll
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';
  }
};

const toggleDropdown = (linkName: string) => {
  if (openDropdown.value === linkName) {
    openDropdown.value = null;
  } else {
    openDropdown.value = linkName;
  }
};

// Cleanup on unmount
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>
