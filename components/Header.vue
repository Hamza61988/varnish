<template>
  <header class=" z-[1000] fixed w-full bg-[#f7f7f8]">
    <div class="hidden md:flex justify-center">
     <div
  v-if="visible"
  class=" text-white flex w-full justify-center items-center h-9 px-4 relative bg-[url('/global/banner.svg')] bg-cover bg-center"
  >
  <p class="text-[14px]">
    Varnish uses Cookies to make its website Easier to use.  
    <a  class="underline hover:cursor-pointer text-[14px]">Learn More</a>
  </p>

  <span
    @click="visible = false"
    class="cursor-pointer text-white font-bold text-xl absolute right-4 top-1/2 -translate-y-1/2"
  >×</span>
</div>

</div class="bg-[#f7f7f8]">
    <nav
      class="container mx-auto w-full flex flex-col relative"
      style="z-index: 1; margin: auto"
    >
      <div
        class="flex items-center px-4 justify-between"
        style="height: 80px; min-height: 80px; gap: 0 ;"
      >
        <div
          class="flex items-center flex-shrink-0 z-10"
          style="margin: 0; padding: 0"
        >
          <NuxtLink to="/" class="flex items-center" style="gap: 0">
            <img
              src="/icons/company-logo.svg"
              alt="Varnish Logo"
              class="h-[43px] flex-shrink-0 block"
              style=" display: block"
            />
          </NuxtLink>
          <div
            class="hidden tablet:flex items-center flex-1 min-w-0"
            style="margin-left: 40px; gap: 8px; flex-shrink: 0"
          >
            <template v-for="link in navigationLinks" :key="link.name">
              <NuxtLink
                v-if="!link.hasDropdown"
                :to="link.route || '#'"
                class="transition-colors text-[0.875rem] tablet:text-[13px] whitespace-nowrap hover:bg-[#fff] py-[4px] px-[12px] rounded-full"
                style="
                  font-family: 'inter', sans-serif;
                  font-weight: 500;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  text-align: center;
                  color: #1a1925;
                "
              >
                {{ link.name }}
              </NuxtLink>

              <div
                v-else
                class="relative solutions-dropdown-container hover:bg-[#fff] py-[4px] px-[12px] rounded-full"
                id="solutions-dropdown-container"
              >
                <button
                  type="button"
                  id="solutions-dropdown-button"
                  onclick="var menu=document.getElementById('solutions-dropdown-menu');var arrow=document.getElementById('solutions-dropdown-arrow');if(menu){var isOpen=menu.style.display==='block';menu.style.display=isOpen?'none':'block';if(arrow){arrow.style.transform=isOpen?'rotate(0deg)':'rotate(180deg)';}}return false;"
                  class="text-[#1A1925]    flex items-center space-x-1 cursor-pointer text-xs tablet:text-[13px] whitespace-nowrap bg-transparent border-none outline-none"
                  style="
                    font-family: 'inter', sans-serif;
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
                <div
                  id="solutions-dropdown-menu"
                  class="absolute top-full -translate-x-[200px] flex p-6 mt-4 w-[90vw] max-w-[67.75rem] rounded-[1.5rem] shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  style="z-index: 9999; display: none"
                >
                  <div class="grid grid-cols-4 gap-3 mb-[16px]">
                    <div class="px-[20px]">
                      <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                        <h3
                          class="font-semibold text-[0.75rem] text-[#73737f]"
                          style="font-family: 'inter', sans-serif"
                        >
                          FEATURES
                        </h3>
                        <hr />
                      </span>

                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Predictive Analytics
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution2"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            AI-Driven Automation
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution3"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Real-Time Insights
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution4"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Workflow Optimization
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Multi-Channel Campaigns
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <div class="px-[20px]">
                      <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                        <h3
                          class="font-semibold text-[0.75rem] text-[#73737f]"
                          style="font-family: 'inter', sans-serif"
                        >
                          USE CASES
                        </h3>
                        <hr />
                      </span>

                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Creative Agencies
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution2"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Startup Teams
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution3"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Sales Departments
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution4"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Product Developers
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/solutions/solution1"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            HR Specialists
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <div class="px-[20px]">
                      <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                        <h3
                          class="font-semibold text-[0.75rem] text-[#73737f]"
                          style="font-family: 'inter', sans-serif"
                        >
                          RESOURCES
                        </h3>
                        <hr />
                      </span>

                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Predictive Analytics
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            AI-Driven Automation
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Real-Time Insights
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Workflow Optimization
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/features"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Multi-Channel Campaigns
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>

                    <div class="px-[20px]">
                      <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                        <h3
                          class="font-semibold text-[0.75rem] text-[#73737f]"
                          style="font-family: 'inter', sans-serif"
                        >
                          ABOUT VARNISH
                        </h3>
                        <hr />
                      </span>

                      <ul class="space-y-3">
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Meet the Team
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Corporate Values
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Global Offices
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Our Mission
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            to="/about"
                            class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                            style="font-family: 'inter', sans-serif"
                          >
                            Press & Media
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="grid grid-cols-4 gap-3">
                    <NuxtLink
                      to="/features"
                      class="rounded-[16px] p-4 border border-[#eeeef0] hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                    >
                      <div
                        class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 class="font-semibold text-sm text-[#1a1925]">
                          Features
                        </h4>
                        <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/solutions/solution1"
                      class="rounded-[16px] p-4 border border-[#eeeef0] hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                    >
                      <div
                        class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 class="font-semibold text-sm text-[#1a1925]">
                          Use Cases
                        </h4>
                        <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/features"
                      class="rounded-[16px] p-4 border border-[#eeeef0] hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                    >
                      <div
                        class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 class="font-semibold text-sm text-[#1a1925]">
                          Resources
                        </h4>
                        <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/about"
                      class="rounded-[16px] p-4 border border-[#eeeef0] hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                    >
                      <div
                        class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 class="font-semibold text-sm text-[#1a1925]">
                          About Beam
                        </h4>
                        <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div
          class="hidden tablet:flex items-center flex-shrink-0"
          style="gap: 12px"
        >
          <NuxtLink
            to="/login"
            class="flex items-center  justify-center text-[#1a1925]"
            style="
              border-radius: 8px;
              padding: 8px 14px;
              font-family: 'inter', sans-serif;
              font-weight: 500;
              font-size: 14px;
              line-height: 1.5;
              letter-spacing: -0.02em;
              text-align: center;
              text-transform: capitalize;
             
            "
          >
            Login
          </NuxtLink>
          <NuxtLink
            to="/signup"
    
           
          >
          <Button name="Sign Up" variant="primary" />
          </NuxtLink>
        </div>

        <div class="flex tablet:hidden">
          <NuxtLink
            to="/signup"
          >
            <Button name="Sign Up" variant="secondary" />
          </NuxtLink>

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
      </div>

      <div
        id="mobile-menu"
        v-show="isMobileMenuOpen"
        style="
          display: none !important;
          overscroll-behavior: contain;
        "
        class="bg-[#eeeef0] rounded-2xl overflow-y-auto max-h-[85vh] shadow-xl"
      >
        <nav
          class="flex flex-col"
          style="
            padding-top: 20px;
            padding-right: 3%;
            padding-bottom: 16px;
            padding-left: 3%;
            margin: 0% 0%;
          "
        >
          <template v-for="link in navigationLinks" :key="link.name">
            <NuxtLink
              v-if="!link.hasDropdown"
              :to="link.route || '#'"
              :class="[
                'block transition-colors',
                isActiveLink(link.route)
                  ? 'text-gray-900 bg-gray-100 font-semibold'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
              ]"
              style="
                padding: 4px 8px 4px 12px;
                font-family: 'inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.006em;
              "
              @click="isMobileMenuOpen = false"
            >
              {{ link.name }}
            </NuxtLink>

            <div v-else>
              <button
                @click="toggleDropdown(link.name)"
                class="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 hover:bg-[#fff] rounded-full text-left"
                style="
                  padding: 4px 8px 4px 12px;
                  font-family: 'inter', sans-serif;
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
                class="px-4 bg-[#fff] space-y-1 mt-1 pb-4 rounded-xl"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6  pt-4">
                  <div>
                    <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                      <h3
                        class="font-semibold text-[0.75rem] text-[#73737f]"
                        style="font-family: 'inter', sans-serif"
                      >
                        FEATURES
                      </h3>
                      <hr class="border-[#d1d1d6]" />
                    </span>

                    <ul class="space-y-3">
                      <li>
                        <NuxtLink
                          to="/solutions/solution1"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Predictive Analytics
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution2"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          AI-Driven Automation
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution3"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Real-Time Insights
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution4"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Workflow Optimization
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Multi-Channel Campaigns
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                      <h3
                        class="font-semibold text-[0.75rem] text-[#73737f]"
                        style="font-family: 'inter', sans-serif"
                      >
                        USE CASES
                      </h3>
                      <hr class="border-[#d1d1d6]" />
                    </span>

                    <ul class="space-y-3">
                      <li>
                        <NuxtLink
                          to="/solutions/solution1"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Creative Agencies
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution2"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Startup Teams
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution3"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Sales Departments
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution4"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Product Developers
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/solutions/solution1"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          HR Specialists
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                      <h3
                        class="font-semibold text-[0.75rem] text-[#73737f]"
                        style="font-family: 'inter', sans-serif"
                      >
                        RESOURCES
                      </h3>
                      <hr class="border-[#d1d1d6]" />
                    </span>

                    <ul class="space-y-3">
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Predictive Analytics
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          AI-Driven Automation
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Real-Time Insights
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Workflow Optimization
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/features"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Multi-Channel Campaigns
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span class="flex gap-[16px] mb-[1.25rem] flex-col">
                      <h3
                        class="font-semibold text-[0.75rem] text-[#73737f]"
                        style="font-family: 'inter', sans-serif"
                      >
                        ABOUT VARNISH
                      </h3>
                      <hr class="border-[#d1d1d6]" />
                    </span>

                    <ul class="space-y-3">
                      <li>
                        <NuxtLink
                          to="/about"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Meet the Team
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/about"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Corporate Values
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/about"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Global Offices
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/about"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Our Mission
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/about"
                          @click="isMobileMenuOpen = false"
                          class="text-sm text-[#51515E] hover:text-[#222222] transition-colors block"
                          style="font-family: 'inter', sans-serif"
                        >
                          Press & Media
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>

                  <NuxtLink
                    to="/features"
                    @click="isMobileMenuOpen = false"
                    class="rounded-[16px] p-4 border border-[#d1d1d6] bg-white hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                  >
                    <div
                      class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="font-semibold text-sm text-[#1a1925]">
                        Features
                      </h4>
                      <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solutions/solution1"
                    @click="isMobileMenuOpen = false"
                    class="rounded-[16px] p-4 border border-[#d1d1d6] bg-white hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                  >
                    <div
                      class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="font-semibold text-sm text-[#1a1925]">
                        Use Cases
                      </h4>
                      <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/features"
                    @click="isMobileMenuOpen = false"
                    class="rounded-[16px] p-4 border border-[#d1d1d6] bg-white hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                  >
                    <div
                      class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="font-semibold text-sm text-[#1a1925]">
                        Resources
                      </h4>
                      <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/about"
                    @click="isMobileMenuOpen = false"
                    class="rounded-[16px] p-4 border border-[#d1d1d6] bg-white hover:bg-[#f7f7f8] transition-all group flex items-center gap-3"
                  >
                    <div
                      class="min-w-10 min-h-10 w-10 h-10 bg-[#f7f7f8] rounded flex items-center justify-center transition-colors group-hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-[#1a1925] transition-colors group-hover:text-[#1f62ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="font-semibold text-sm text-[#1a1925]">
                        About Beam
                      </h4>
                      <p class="text-xs text-[#73737f]">Lorem ipsum dolor</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import Button from "~/components/common/Button.vue";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isDesktopMenuOpen = ref(false);
const visible = ref(true);
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
  { name: "Network", hasDropdown: false, route: "/network" },
  { name: "Pricing", hasDropdown: false, route: "/pricing" },
  { name: "Support", hasDropdown: false, route: "/support" },
];

// Check if link is active
const isActiveLink = (routePath: string | undefined) => {
  if (!routePath) return false;
  const currentPath = route.path;
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