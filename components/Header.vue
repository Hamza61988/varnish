<template>
  <header class="bg-white z-50 fixed w-full" style="background-color: #f7f7f8">
    <!-- BG_Line_landing.svg - Top Right (Desktop/Laptop only) -->
    <img
      src="/images/BG_Line_landing.svg"
      alt="Background Line"
      class="hidden tablet:block absolute pointer-events-none"
      style="width: 10%; z-index: 0; opacity: 1; right: 0"
    />
    <nav
      class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full flex flex-col relative"
      style="z-index: 1; margin: auto"
    >
      <div
        class="flex items-center justify-between"
        style="height: 80px; min-height: 80px; gap: 0"
      >
        <!-- Logo Section -->
        <div
          class="flex items-center flex-shrink-0 z-10"
          style="margin: 0; padding: 0"
        >
          <NuxtLink to="/" class="flex items-center" style="gap: 0">
            <img
              src="/icons/Company-logo.svg"
              alt="Varnish Logo"
              class="h-8 w-8 flex-shrink-0 block"
              style="min-width: 32px; min-height: 32px; display: block"
            />
            <span
              class="text-lg sm:text-xl md:text-xl font-bold text-gray-900 whitespace-nowrap ml-1.5 sm:ml-2 md:ml-2 block"
              style="margin: 0; padding: 0"
              >Varnish</span
            >
          </NuxtLink>
          <!-- Navigation Links - Hidden below 800px, visible on 800px+ -->
          <div
            class="hidden tablet:flex items-center flex-1 min-w-0"
            style="margin-left: 40px; gap: 32px; flex-shrink: 0"
          >
            <template v-for="link in navigationLinks" :key="link.name">
              <!-- Regular Links -->
              <NuxtLink
                v-if="!link.hasDropdown"
                :to="link.route || '#'"
                :class="[
                  'transition-colors text-xs tablet:text-[13px] whitespace-nowrap px-3 py-1.5 rounded-full',
                  isActiveLink(link.route)
                    ? 'bg-white text-gray-900'
                    : 'text-gray-700 hover:text-gray-900',
                ]"
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
              <div v-else class="relative solutions-dropdown-container" id="solutions-dropdown-container">
                <button
                  type="button"
                  id="solutions-dropdown-button"
                  onclick="var menu=document.getElementById('solutions-dropdown-menu');var arrow=document.getElementById('solutions-dropdown-arrow');if(menu){var isOpen=menu.style.display==='block';menu.style.display=isOpen?'none':'block';if(arrow){arrow.style.transform=isOpen?'rotate(0deg)':'rotate(180deg)';}}return false;"
                  class="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 cursor-pointer text-xs tablet:text-[13px] whitespace-nowrap bg-transparent border-none outline-none"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 500;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    text-align: center;
                    padding: 0;
                  "
                >
                  <span>{{ link.name }}</span>
                  <svg
                    id="solutions-dropdown-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 transition-transform"
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
                
                <!-- Dropdown Content -->
                <div
                  id="solutions-dropdown-menu"
                  class="absolute top-full left-[200%] -translate-x-1/2 mt-2 w-[800px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  style="z-index: 9999; display: none;"
                >
                  <!-- Multi-column dropdown content -->
                  <div class="grid grid-cols-4 gap-8 mb-6 p-6">
                    <!-- Column 1: Features -->
                    <div>
                      <h3 class="font-bold text-sm text-gray-900 mb-4" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        FEATURES
                      </h3>
                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Predictive Analytics
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution2"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            AI-Driven Automation
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution3"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Real-Time Insights
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution4"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Workflow Optimization
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Multi-Channel Campaigns
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 2: Use Cases -->
                    <div>
                      <h3 class="font-bold text-sm text-gray-900 mb-4" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        USE CASES
                      </h3>
                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Creative Agencies
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution2"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Startup Teams
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution3"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Sales Departments
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution4"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Product Developers
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            HR Specialists
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 3: Resources -->
                    <div>
                      <h3 class="font-bold text-sm text-gray-900 mb-4" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        RESOURCES
                      </h3>
                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Predictive Analytics
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            AI-Driven Automation
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Real-Time Insights
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Workflow Optimization
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Multi-Channel Campaigns
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <!-- Column 4: About -->
                    <div>
                      <h3 class="font-bold text-sm text-gray-900 mb-4" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        ABOUT VARNISH
                      </h3>
                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Meet the Team
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Corporate Values
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Global Offices
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Our Mission
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-gray-700 hover:text-gray-900 transition-colors block"
                            style="font-family: 'Bricolage Grotesque', sans-serif;"
                          >
                            Press & Media
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Cards Section -->
                  <div class="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200 px-6 pb-6">
                    <!-- Card 1: Features -->
                    <NuxtLink
                      to="/features"
                      class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
                    >
                      <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mb-3 group-hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 class="font-bold text-sm text-gray-900 mb-1" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Features
                      </h4>
                      <p class="text-xs text-gray-500" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Lorem ipsum dolor
                      </p>
                    </NuxtLink>

                    <!-- Card 2: Use Cases -->
                    <NuxtLink
                      to="/solutions/solution1"
                      class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
                    >
                      <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mb-3 group-hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <h4 class="font-bold text-sm text-gray-900 mb-1" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Use Cases
                      </h4>
                      <p class="text-xs text-gray-500" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Lorem ipsum dolor
                      </p>
                    </NuxtLink>

                    <!-- Card 3: Resources -->
                    <NuxtLink
                      to="/features"
                      class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
                    >
                      <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mb-3 group-hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </div>
                      <h4 class="font-bold text-sm text-gray-900 mb-1" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Resources
                      </h4>
                      <p class="text-xs text-gray-500" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Lorem ipsum dolor
                      </p>
                    </NuxtLink>

                    <!-- Card 4: About -->
                    <NuxtLink
                      to="/about"
                      class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors group"
                    >
                      <div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mb-3 group-hover:bg-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 class="font-bold text-sm text-gray-900 mb-1" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        About Varnish
                      </h4>
                      <p class="text-xs text-gray-500" style="font-family: 'Bricolage Grotesque', sans-serif;">
                        Lorem ipsum dolor
                      </p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Action Buttons - Hidden below 800px, visible on 800px+ -->
        <div
          class="hidden tablet:flex items-center flex-shrink-0"
          style="gap: 12px"
        >
          <!-- Login Button -->
          <NuxtLink
            to="/login"
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
          </NuxtLink>
          <!-- Sign Up Button -->
          <NuxtLink
            to="/signup"
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
          </NuxtLink>
        </div>

        <!-- Hamburger Menu Button - Visible below 800px, hidden on 800px+ -->
        <button
          id="mobile-menu-toggle"
          type="button"
          class="tablet:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors text-gray-700"
          @click="toggleMobileMenu"
          onclick="var m=document.getElementById('mobile-menu');if(m){var d=window.getComputedStyle(m).display;m.style.setProperty('display',d==='none'?'block':'none','important');}"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu - Expands below header (best solution from working Header.vue) -->
      <!-- Always in DOM for fallback to work -->
      <div
        id="mobile-menu"
        v-show="isMobileMenuOpen"
        style="display: none !important"
      >
        <nav class="flex flex-col" style="margin: 5% 0%">
          <template v-for="link in navigationLinks" :key="link.name">
            <!-- Regular Links -->
            <NuxtLink
              v-if="!link.hasDropdown"
              :to="link.route || '#'"
              :class="[
                'block py-3 px-4 transition-colors',
                isActiveLink(link.route)
                  ? 'text-gray-900 bg-gray-100 font-semibold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
              ]"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.006em;
              "
              @click="isMobileMenuOpen = false"
            >
              {{ link.name }}
            </NuxtLink>

            <!-- Solutions Dropdown -->
            <div v-else>
              <button
                @click="toggleDropdown(link.name)"
                class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors text-left"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  font-size: 14px;
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
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  @click="isMobileMenuOpen = false"
                >
                  Solution 1
                </a>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  @click="isMobileMenuOpen = false"
                >
                  Solution 2
                </a>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  @click="isMobileMenuOpen = false"
                >
                  Solution 3
                </a>
              </div>
            </div>
          </template>

          <!-- Action Buttons in Mobile Menu -->
          <div class="mt-4 pt-4 border-t border-gray-200 space-y-3 px-4">
            <NuxtLink
              to="/login"
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
              @click="isMobileMenuOpen = false"
            >
              Login
            </NuxtLink>
            <NuxtLink
              to="/signup"
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
              @click="isMobileMenuOpen = false"
            >
              Sign Up
            </NuxtLink>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Mobile menu state (best practice from working Header.vue)
const isMobileMenuOpen = ref(false);
const openDropdown = ref<string | null>(null);

// Toggle function (works with Vue reactivity)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Sync Vue state with DOM (when Vue loads) - Client-side only
watch(isMobileMenuOpen, (newVal) => {
  if (typeof window !== "undefined") {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.style.display = newVal ? "block" : "none";
    }
  }
});

// Fallback: Ensure menu works even if Vue hydration is delayed
onMounted(() => {
  // Initialize menu state - Client-side only
  if (typeof window !== "undefined") {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.style.display = isMobileMenuOpen.value ? "block" : "none";
    }

    // Update header position based on cookie banner visibility
    const updateHeaderPosition = () => {
      const banner = document.querySelector("[data-cookie-banner]");
      const header = document.querySelector("header");
      if (
        banner &&
        header &&
        banner instanceof HTMLElement &&
        header instanceof HTMLElement
      ) {
        const bannerHeight = banner.offsetHeight;
        header.style.top = bannerHeight > 0 ? `${bannerHeight}px` : "0px";
      }
    };

    // Initial check
    setTimeout(updateHeaderPosition, 100);

    // Watch for banner visibility changes
    const observer = new MutationObserver(updateHeaderPosition);
    const banner = document.querySelector("[data-cookie-banner]");
    if (banner) {
      observer.observe(banner, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    // Also check on resize
    window.addEventListener("resize", updateHeaderPosition);
  }
});

const navigationLinks = [
  { name: "Features", hasDropdown: false, route: "/features" },
  { name: "Solutions", hasDropdown: true },
  { name: "Network", hasDropdown: false, route: "/" },
  { name: "Pricing", hasDropdown: false, route: "/pricing" },
  { name: "Support", hasDropdown: false, route: "/support" },
];

// Check if link is active
const isActiveLink = (routePath: string | undefined) => {
  if (!routePath) return false;
  const currentPath = route.path;
  // Don't highlight Network link on home page
  if (routePath === "/") {
    return false; // Network link should not be active on home page
  }
  return currentPath === routePath || currentPath.startsWith(routePath + "/");
};

const toggleDropdown = (linkName: string) => {
  if (openDropdown.value === linkName) {
    openDropdown.value = null;
  } else {
    openDropdown.value = linkName;
  }
};

// Close mobile menu on route change (best practice from working Header.vue)
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
    openDropdown.value = null;
  }
);
</script>
