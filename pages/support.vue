<template>
  <div class="min-h-screen relative overflow-hidden" style="background: #ffffff">
    <!-- Page Background - BGline.svg -->
    <div class="absolute inset-0 pointer-events-none hidden md:block" style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "></div>

    <!-- Main Content -->
    <main class="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
      <!-- Support Section -->
      <section class="w-full max-w-6xl mx-auto px-0">
        <!-- Section Label -->
        <div class="flex items-center justify-start sm:justify-center mb-4 sm:mb-6">
          <div class="flex items-center" style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            ">
            <!-- Lightning Bolt Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]" viewBox="0 0 24 24"
              fill="none" stroke="#A3A3AE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px">
              <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              ">
              Support
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-left sm:text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            vertical-align: middle;
            color: #1a1925;
          ">
          Support
        </h1>

        <!-- Subtitle -->
        <p class="text-left sm:text-center mb-8 sm:mb-10 md:mb-12" style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          ">
          Find answers, guides, and tutorials to supercharge your content
          delivery.
        </p>

        <!-- Support Categories - Three Columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 w-full">
          <!-- Zones Column -->
          <div class="bg-white rounded-lg p-5 sm:p-6 w-full" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <div class="flex items-center gap-2 mb-4">
              <h3 style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Zones
              </h3>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #73737f">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 20px">
              <li v-for="link in zonesLinks" :key="link.name" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                <NuxtLink :to="link.route" class="transition-colors hover-link" style="color: #73737f">{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Integrations Column -->
          <div class="bg-white rounded-lg p-5 sm:p-6 w-full" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <div class="flex items-center gap-2 mb-4">
              <h3 style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Integrations
              </h3>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #73737f">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 20px">
              <li v-for="link in integrationsLinks" :key="link.name" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                <NuxtLink :to="link.route" class="transition-colors hover-link" style="color: #73737f">{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Troubleshooting Column -->
          <div class="bg-white rounded-lg p-5 sm:p-6 w-full" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <div class="flex items-center gap-2 mb-4">
              <h3 style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Troubleshooting
              </h3>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #73737f">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="flex flex-col" style="min-height: 300px; gap: 20px">
              <li v-for="link in troubleshootingLinks" :key="link.name" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                <NuxtLink :to="link.route" class="transition-colors hover-link" style="color: #73737f">{{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full" style="
            height: 1px;
            background: #eeeef0;
            margin-top: 12px;
            margin-bottom: 12px;
          "></div>
        <!-- Information Cards -->
        <div class="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <!-- Getting Started Card -->
          <div class="relative overflow-hidden w-full md:flex-1" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute pointer-events-none" style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;
                border: none;
              "></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: -10;
                  "></div>
                <!-- Getting Started Icon -->
                 <div  class="z-10">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.375 0C1.95875 0 0 1.95875 0 4.375V15.4583C0 17.8746 1.95875 19.8333 4.375 19.8333H11.9583C12.4416 19.8333 12.8333 19.4416 12.8333 18.9583C12.8333 18.4751 12.4416 18.0833 11.9583 18.0833H4.375C2.92525 18.0833 1.75 16.9081 1.75 15.4583V4.375C1.75 2.92525 2.92525 1.75 4.375 1.75H18.9583C20.4081 1.75 21.5833 2.92525 21.5833 4.375V9.625C21.5833 10.1082 21.9751 10.5 22.4583 10.5C22.9416 10.5 23.3333 10.1082 23.3333 9.625V4.375C23.3333 1.95875 21.3746 0 18.9583 0H4.375Z" fill="#1A1925"/>
<path d="M5.25 6.41667C4.60567 6.41667 4.08333 5.89433 4.08333 5.25C4.08333 4.60567 4.60567 4.08333 5.25 4.08333C5.89433 4.08333 6.41667 4.60567 6.41667 5.25C6.41667 5.89433 5.89433 6.41667 5.25 6.41667Z" fill="#1A1925"/>
<path d="M13.3813 11.048C13.6105 10.8188 13.9476 10.7351 14.2573 10.8304L22.424 13.3432C22.7658 13.4484 23.0092 13.7509 23.0387 14.1073C23.0682 14.4637 22.8779 14.8022 22.558 14.9621L19.0496 16.7163L17.2955 20.2247C17.1355 20.5445 16.7971 20.7349 16.4407 20.7054C16.0843 20.6759 15.7817 20.4325 15.6765 20.0907L13.1637 11.924C13.0684 11.6142 13.1521 11.2772 13.3813 11.048Z" fill="#1A1925"/>
<path d="M9.33333 6.41667C8.689 6.41667 8.16667 5.89433 8.16667 5.25C8.16667 4.60567 8.689 4.08333 9.33333 4.08333C9.97766 4.08333 10.5 4.60567 10.5 5.25C10.5 5.89433 9.97766 6.41667 9.33333 6.41667Z" fill="#1A1925"/>
<path d="M13.4167 6.41667C12.7723 6.41667 12.25 5.89433 12.25 5.25C12.25 4.60567 12.7723 4.08333 13.4167 4.08333C14.061 4.08333 14.5833 4.60567 14.5833 5.25C14.5833 5.89433 14.061 6.41667 13.4167 6.41667Z" fill="#1A1925"/>
</svg>


                </div>
              </div>
              <h3 class="mb-2" style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Getting started
              </h3>
              <p style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                Where to begin? Follow these few
                <NuxtLink to="/support-sub-pages/gettingstarted" class="hover:underline" style="color: #0088ff">
                  simple steps.
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Knowledge Base Card -->
          <div class="relative overflow-hidden w-full md:flex-1" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute pointer-events-none" style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;

                border: none;
              "></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: -10;
                  "></div>
                <!-- Knowledge Base Icon -->
                <div  class="z-10">
                  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="28" height="29" fill="url(#pattern0_18486_10165)"/>
<defs>
<pattern id="pattern0_18486_10165" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10165" transform="matrix(0.0111111 0 0 0.010728 0 0.0172414)"/>
</pattern>
<image id="image0_18486_10165" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEklEQVR4nO2dTYhVdRiHnz7UAgs1CBFCaREVtCkqBEEby1UtElq0nD5GBxqklaYoBgoOREnixgoibKG0C5syMOgTaiiCWpRMX1rNYiwYKD9oOPGH38Bw8Z577vXc95xz/T3w7s45//d95sz5gvkNGGOMMcYYY4wxxlwdLAbGgT+ADJgF/gKmgSnV18Ak8BlwEngbOAjsBIaBR4EHgNuAJdSPG9Tbg+p1WL0f1CwnNdukZp2fe1ouZuXmd+CAnHXNAR2krJoDfgImgFeArcAQsIr+s0prbZXECfUyV/KMyVnXzJ/JEfUn8C6wHVinM61XrgfuA7YBbwE/B8/RNVmFdR54H3gOWFOg1zXa9gPtW2XvjRKdtVS6Tj7dcqbfCDwDfF6D/gZGdKY6A2xRna1BP30VfS+wFngY2Aw8CYwAzwMv6EZ3FPgI+B44V4PhO9U59XpKvb8M7NBMI5pxs2ZeKwd9F90LS4DVwEZgdMGdf6oPd/7L1ZzWmtDao+pl9RU8dtZSdB43A48Ae4D3gL9LEJuOcQLYrWOnNcqmFD+LAkVf7vFsA/AS8GMXcn/QPht0jH7Tro/krhArdZevSnQr6c3y9Zx+XtM20bTr51M5zGWRNsw7c6oia0g/qb7odO3fUuBXtCqyhvQzX8/m7Vzk4b8qsob0s/AS0pb0Rcqii1Hk2bznnes4WFVckSuLLo5FB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFD4roSeVapEiG48CbwGHgRWBM2RYpouEeYHnAYGWxXD1v1AxjmumwZjyumU/JQd9Fd1uzwHeKdTikrIyhIn+YXrC3bliptUfVywn1Nh+rVnaFis465Gp8COwFHgNWlCh6qRLHtulsnK5gvrb8W0EzWUtSTDrDjgCPS1ZR0UsVx3NEx4hItsmrf/JEf1txc1lLXVDE2ljONmPa5kIN+l1Y3+SJ3lWDBrMBqRS92ZabFCVZdZNZw2tKLnO5G/i1Bs1mDa1fgLvo4plyXIF+VTeeNaTOKgR2GT2SHrnuAO5XwN4Tiqrcrgy5Y8AnwGngYg0Gzkqqi7oEpCSZd4BXdd0dkYNNikNOZ+8tBHOtQvse0g9jXFl2v9VAXLs6oze+ceUgDSlU9joayjJgvWI1U4TxTAVSZ7T2TuXjlfmJoLZcA9ypFPI3dOkpW+xpHXtYa6U1DXC7XpnTa/mlHsT+pw8+exXWbQrehPd1IXl/h28lJod0Q/qqgOQvm3zzqgsrOsR4Jsm3Vt3koLBYN7SP9eQwo2f3p3r9lxzGGGOMMQwk/wPKkGLv6V+M3gAAAABJRU5ErkJggg=="/>
</defs>
</svg>

                </div>
                
              </div>
              <h3 class="mb-2" style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Knowledge base
              </h3>
              <p style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                Want guidance? Explore all available
                <NuxtLink to="/support-sub-pages/support-categories" class="hover:underline" style="color: #0088ff">
                  support categories.
                </NuxtLink>
              </p>
            </div>
          </div>

          <!-- Support Request Card -->
          <div class="relative overflow-hidden w-full md:flex-1" style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute pointer-events-none" style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
                z-index: 0;
                border: none;
              "></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: -10;
                  "></div>
                <!-- Support Request Icon -->
                 <div  class="z-10">
                  <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_17839_9349" fill="white">
<path d="M1 13.6245C0.449895 13.6245 0 13.2783 0 12.8553V9.3937C0 8.97056 0.450115 8.62451 1 8.62451C1.5501 8.62451 2 8.97073 2 9.3937V12.8553C2 13.2783 1.55014 13.6245 1 13.6245Z"/>
</mask>
<path d="M1 13.6245V11.6245C1.1317 11.6245 1.31851 11.6636 1.5132 11.8133C1.708 11.9632 2 12.3128 2 12.8553H0H-2C-2 13.8208 -1.48306 14.555 -0.92578 14.9837C-0.368616 15.4124 0.318199 15.6245 1 15.6245V13.6245ZM0 12.8553H2V9.3937H0H-2V12.8553H0ZM0 9.3937H2C2 9.93634 1.70786 10.286 1.51305 10.4358C1.31842 10.5855 1.1317 10.6245 1 10.6245V8.62451V6.62451C0.318412 6.62451 -0.368309 6.83657 -0.925465 7.26506C-1.4828 7.69369 -2 8.42792 -2 9.3937H0ZM1 8.62451V10.6245C0.868304 10.6245 0.681489 10.5855 0.486799 10.4357C0.291996 10.2858 9.92146e-08 9.93623 9.92146e-08 9.3937H2H4C4 8.4282 3.48306 7.69401 2.92578 7.2653C2.36862 6.83667 1.6818 6.62451 1 6.62451V8.62451ZM2 9.3937H9.92146e-08V12.8553H2H4V9.3937H2ZM2 12.8553H9.92146e-08C9.92146e-08 12.3128 0.291976 11.9632 0.486779 11.8134C0.681477 11.6636 0.868305 11.6245 1 11.6245V13.6245V15.6245C1.68183 15.6245 2.36866 15.4123 2.92582 14.9837C3.48309 14.555 4 13.8208 4 12.8553H2Z" fill="black" mask="url(#path-1-inside-1_17839_9349)"/>
<mask id="path-3-inside-2_17839_9349" fill="white">
<path d="M21.0806 13.6245H20.9194C20.4136 13.6245 20 13.2797 20 12.8585V9.39057C20 8.96916 20.4138 8.62451 20.9194 8.62451H21.0806C21.5864 8.62451 22 8.96932 22 9.39057V12.8585C22.0002 13.2797 21.5864 13.6245 21.0806 13.6245Z"/>
</mask>
<path d="M22 12.8585H20L20 12.8595L22 12.8585ZM21.0806 13.6245V11.6245H20.9194V13.6245V15.6245H21.0806V13.6245ZM20.9194 13.6245V11.6245C21.114 11.6245 21.3423 11.6896 21.5504 11.863C21.7614 12.0389 22 12.3806 22 12.8585H20H18C18 14.7101 19.6659 15.6245 20.9194 15.6245V13.6245ZM20 12.8585H22V9.39057H20H18V12.8585H20ZM20 9.39057H22C22 9.86852 21.7613 10.2103 21.5503 10.3861C21.3422 10.5595 21.114 10.6245 20.9194 10.6245V8.62451V6.62451C19.6667 6.62451 18 7.53822 18 9.39057H20ZM20.9194 8.62451V10.6245H21.0806V8.62451V6.62451H20.9194V8.62451ZM21.0806 8.62451V10.6245C20.886 10.6245 20.6577 10.5595 20.4496 10.386C20.2385 10.2101 20 9.86841 20 9.39057H22H24C24 7.5389 22.3341 6.62451 21.0806 6.62451V8.62451ZM22 9.39057H20V12.8585H22H24V9.39057H22ZM22 12.8585L20 12.8595C19.9997 12.3809 20.2388 12.0388 20.4498 11.8629C20.6579 11.6895 20.8861 11.6245 21.0806 11.6245V13.6245V15.6245C22.3331 15.6245 24.001 14.7107 24 12.8574L22 12.8585Z" fill="black" mask="url(#path-3-inside-2_17839_9349)"/>
<mask id="mask0_17839_9349" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="0" width="20" height="8">
<path d="M1.11621 0H20.6609V7.83548H1.11621V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_17839_9349)">
<mask id="path-6-inside-3_17839_9349" fill="white">
<path d="M20.1966 7.36764C18.9886 3.37102 15.2903 0.447266 10.9045 0.447266C6.51878 0.447266 2.82034 3.37106 1.6123 7.36764"/>
</mask>
<path d="M20.1966 7.36764L22.1111 6.78899C20.6575 1.97985 16.2044 -1.55273 10.9045 -1.55273V0.447266V2.44727C14.3761 2.44727 17.3198 4.76218 18.2822 7.94629L20.1966 7.36764ZM10.9045 0.447266V-1.55273C5.60464 -1.55273 1.15147 1.9799 -0.302149 6.78896L1.6123 7.36764L3.52676 7.94632C4.48921 4.76222 7.43292 2.44727 10.9045 2.44727V0.447266Z" fill="black" mask="url(#path-6-inside-3_17839_9349)"/>
</g>
<mask id="path-8-inside-4_17839_9349" fill="white">
<path d="M21 13.6245C21 15.1703 19.5459 16.6245 18 16.6245L21 13.6245Z"/>
</mask>
<path d="M21 13.6245H19C19 13.7749 18.9177 14.0377 18.6655 14.29C18.4132 14.5422 18.1504 14.6245 18 14.6245V16.6245V18.6245C19.3954 18.6245 20.6326 17.9797 21.4939 17.1184C22.3552 16.2571 23 15.0199 23 13.6245H21Z" fill="black" mask="url(#path-8-inside-4_17839_9349)"/>
<path d="M14 16.1245H17C17.2739 16.1245 17.5 16.3507 17.5 16.6245V17.6245C17.5 17.8984 17.2738 18.1245 17 18.1245H14C13.7262 18.1245 13.5 17.8984 13.5 17.6245V16.6245C13.5 16.3506 13.7262 16.1245 14 16.1245Z" stroke="black" stroke-miterlimit="10" stroke-linejoin="round"/>
<mask id="mask1_17839_9349" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="19" width="22" height="11">
<path d="M0.150391 19.7441H21.6836V29.6244H0.150391V19.7441Z" fill="white"/>
</mask>
<g mask="url(#mask1_17839_9349)">
<path d="M5.36328 21.2319H16.4443C18.5134 21.2319 20.1904 22.9096 20.1904 24.978V28.1772H1.61719V24.978C1.61719 22.9094 3.29458 21.2319 5.36328 21.2319Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
</g>
<mask id="mask2_17839_9349" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="25" width="2" height="5">
<path d="M4.18457 25.5962H5.09362V29.6246H4.18457V25.5962Z" fill="white"/>
</mask>
<g mask="url(#mask2_17839_9349)">
<mask id="path-14-inside-5_17839_9349" fill="white">
<path d="M4.64258 29.177V26.0461V29.177Z"/>
</mask>
<path d="M2.64258 29.177C2.64258 30.2816 3.53801 31.177 4.64258 31.177C5.74715 31.177 6.64258 30.2816 6.64258 29.177H4.64258H2.64258ZM6.64258 26.0461C6.64258 24.9416 5.74715 24.0461 4.64258 24.0461C3.53801 24.0461 2.64258 24.9416 2.64258 26.0461H4.64258H6.64258ZM4.64258 29.177H6.64258V26.0461H4.64258H2.64258V29.177H4.64258Z" fill="black" mask="url(#path-14-inside-5_17839_9349)"/>
</g>
<mask id="mask3_17839_9349" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="17" y="25" width="2" height="5">
<path d="M17.1387 25.5962H18.1045V29.6246H17.1387V25.5962Z" fill="white"/>
</mask>
<g mask="url(#mask3_17839_9349)">
<mask id="path-17-inside-6_17839_9349" fill="white">
<path d="M17.6123 29.177V26.0461V29.177Z"/>
</mask>
<path d="M15.6123 29.177C15.6123 30.2816 16.5077 31.177 17.6123 31.177C18.7169 31.177 19.6123 30.2816 19.6123 29.177H17.6123H15.6123ZM19.6123 26.0461C19.6123 24.9416 18.7169 24.0461 17.6123 24.0461C16.5077 24.0461 15.6123 24.9416 15.6123 26.0461H17.6123H19.6123ZM17.6123 29.177H19.6123V26.0461H17.6123H15.6123V29.177H17.6123Z" fill="black" mask="url(#path-17-inside-6_17839_9349)"/>
</g>
<path d="M11.3857 4.13428C15.3488 4.33502 18.5 7.61147 18.5 11.6245C18.5 13.3996 17.8801 15.0291 16.8496 16.313C16.7547 16.4312 16.6106 16.4995 16.459 16.4995H14.0625C13.8576 16.4995 13.6877 16.6696 13.6875 16.8745V17.7495C13.6875 17.8189 13.7078 17.8867 13.748 17.9497C13.8304 18.0783 13.8504 18.2379 13.8008 18.3823C13.7512 18.5266 13.638 18.64 13.4941 18.6909C12.7158 18.9657 11.8779 19.1245 11 19.1245C6.85763 19.1245 3.5 15.7669 3.5 11.6245C3.5 7.48234 6.85762 4.12474 11 4.12451L11.3857 4.13428Z" stroke="black" stroke-miterlimit="10" stroke-linejoin="round"/>
</svg>


                </div>
              </div>
              <h3 class="mb-2" style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                ">
                Support request
              </h3>
              <p style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                ">
                Need assistance? Please open a customer
                <NuxtLink to="/login" class="hover:underline" style="color: #0088ff">
                  support request.
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
        <div class="w-full" style="
            height: 1px;
            background: #eeeef0;
            margin-top: 12px;
            margin-bottom: 12px;
          "></div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const zonesLinks = [
  { name: "Zone Settings", route: "/zones/zonesetting" },
  { name: "Pull Zone Settings", route: "/zones/pullzonesetting" },
  { name: "Create a Pull Zone", route: "/zones/pullzone" },
  { name: "Create a Push Zone", route: "/zones/pushzone" },
  { name: "Upload Data to a Push Zone", route: "/zones/uploadpushzone" },
  { name: "Create a Zone Alias", route: "/zones/zonealias" },
  { name: "Purge CDN Cache", route: "/zones/purgecdncache" },
  { name: "Image Processing", route: "#" },
];

const integrationsLinks = [
  { name: "WordPress CDN Integration", route: "/integeration/wordpresscdn" },
  { name: "Joomla CDN Integration", route: "/integeration/joomlacdn" },
  { name: "Drupal CDN Integration", route: "/integeration/drupalcdn" },
  { name: "Magento CDN Integration", route: "/integeration/magentocdn" },
  { name: "Typo3 CDN Integration", route: "/integeration/typo3cdn" },
  { name: "PrestaShop CDN Integration", route: "/integeration/prestashopcdn" },
  { name: "Laravel CDN Integration", route: "/integeration/larvelcdn" },
  { name: "Custom CDN Integration", route: "/integeration/customcdn" },
];

const troubleshootingLinks = [
  { name: "Check If CDN Is Working", route: "/trouble-shooting/cdnwork" },
  { name: "CDN Error Codes", route: "/trouble-shooting/cdnerror" },
  {
    name: "CDN Troubleshooting Guide",
    route: "/trouble-shooting/cdntroubleshootingguide",
  },
  {
    name: "Technical Questions",
    route: "/trouble-shooting/technicalquestions",
  },
  { name: "KeyCDN Log Format", route: "/trouble-shooting/keycdnlog" },
  {
    name: "KeyCDN Log Forwarding",
    route: "/trouble-shooting/keycdnlogforwarding",
  },
];
</script>

<style scoped>
.hover-link:hover {
  color: #0088ff !important;
}
</style>
