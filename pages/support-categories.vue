<template>
  <div>
   
    <div
      class="relative z-10 mt-[4.25rem] mb-[146.22px] mx-auto max-w-[855px] px-6"
    >
      <div class="flex flex-col items-center text-center gap-4 mb-[3.625rem]">
        <div>
          <div
            style="
              padding: 4px 12px 4px 8px;
              box-shadow: 0 3px 3px -1.5px #07011308, 0 2px 2px -1px #07011308,
                0 1px 1px -0.5px #07011308, 0 0.5px 0.5px #07011308;
            "
            class="inline-flex items-center space-x-2 rounded-full text-xs sm:text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-4 sm:w-4"
              style="color: #a3a3ae; fill: #a3a3ae"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#A3A3AE"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span style="color: #1a1925; font-weight: 500; font-size: 12.06px"
              >Support Categories</span
            >
          </div>
        </div>

        <h1 class="text-[48.22px] font-medium text-[#1A1925]">Support</h1>

        <p class="text-[#51515E] text-[16.07px] max-w-xl">
          Find answers, guides, and tutorials to supercharge your content
          delivery.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-[155.01531982421875px_1fr] gap-[30px]"
      >
        <aside class="space-y-[9.23px] font-medium text-[11.72px]">
          <div
            style="border: 1.28px solid #00000040"
            class="block w-full text-left text-[#757575] rounded-md px-3 py-2 transition-colors"
          >
            Getting started
          </div>

          <div
            class="bg-[#EFEFEF59]/35 px-[6.24px] py-[12.93px] flex flex-col gap-[5px] rounded-[9.23px]"
          >
            <NuxtLink
              to="/support-categories/zones"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Zones</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/support-categories/integrations"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Integrations</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/support-categories/AccountManagment"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Account Management</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/support-categories/troubleshooting"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Troubleshooting</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/support-categories/tutorials"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Tutorials</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/support-categories/glossary"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50"
            >
              <span>Glossary</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>
          </div>
        </aside>

        <main class="space-y-8">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
   <svg width="662" height="205" viewBox="0 0 662 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M633.785 573.705C656.376 425.799 632.407 281.836 561.396 218.416C478.73 144.587 332.315 179.908 121.391 445.225C242.485 -512.329 -213.359 515.653 -95.8792 60.2135" stroke="#EEEEF0" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</template>
