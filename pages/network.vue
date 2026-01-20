<template>
  <div
    class="min-h-screen  relative overflow-hidden"
    style="background: #f7f7f8"
  >
  <div class="px-[57.5px] md:px-6  xl:px-0">
    <!-- Main Content -->
    <main class="mx-auto  pt-[5%]">
      <!-- Header Section -->
      <section
        class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <!-- Section Label -->
        <div class="flex items-center  justify-center ">
<SectionsUpername name="Network" />
        </div>

        <!-- Title -->
        <h1
          class="text-center mb-4 sm:mb-6"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            font-style: Medium;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.02em;
            text-align: center;
            vertical-align: middle;
            color: rgba(26, 25, 37, 1);
          "
        >
          Network
        </h1>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: rgba(81, 81, 94, 1);
          "
        >
          Get access to all of our strategic content delivery locations.
        </p>
      </section>

      <!-- World Map Section -->
      <section
        class="w-full max-w-6xl mx-auto px-4  mb-16 sm:mb-20 md:mb-24"
      >
        <div class="relative w-full">
          <!-- Map Container -->
          <div
            class="relative w-full"
            style="min-height: 400px; position: relative"
          >
            <!-- Map Image -->
            <img
              src="/images/Network/map.svg"
              alt="World Map with POP Locations"
              class="w-full h-auto"
              style="display: block"
            />

            <!-- Interactive POP Dots Overlay -->
            <div
              class="absolute inset-0 pointer-events-none"
              style="z-index: 10"
            >
              <!-- Active POP Dots (Blue) -->
              <template v-for="pop in activePOPs" :key="pop.id">
                <div
                  class="absolute cursor-pointer pointer-events-auto pop-dot active-pop"
                  :style="{
                    left: pop.x + '%',
                    top: pop.y + '%',
                    width: '8px',
                    height: '8px',
                    background: '#3b82f6',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.2s ease',
                  }"
                  @mouseenter="hoveredPOP = pop"
                  @mouseleave="hoveredPOP = null"
                  :title="pop.location"
                >
                  <div
                    v-if="hoveredPOP?.id === pop.id"
                    class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs whitespace-nowrap"
                    style="
                      background: rgba(26, 25, 37, 0.9);
                      color: white;
                      font-family: 'Inter', sans-serif;
                      font-size: 11px;
                      pointer-events: none;
                      z-index: 20;
                    "
                  >
                    {{ pop.location }}
                  </div>
                </div>
              </template>

              <!-- Planned POP Dots (Gray) -->
              <template v-for="pop in plannedPOPs" :key="pop.id">
                <div
                  class="absolute cursor-pointer pointer-events-auto pop-dot planned-pop"
                  :style="{
                    left: pop.x + '%',
                    top: pop.y + '%',
                    width: '8px',
                    height: '8px',
                    background: '#9ca3af',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.2s ease',
                  }"
                  @mouseenter="hoveredPOP = pop"
                  @mouseleave="hoveredPOP = null"
                  :title="pop.location"
                >
                  <div
                    v-if="hoveredPOP?.id === pop.id"
                    class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs whitespace-nowrap"
                    style="
                      background: rgba(26, 25, 37, 0.9);
                      color: white;
                      font-family: 'Inter', sans-serif;
                      font-size: 11px;
                      pointer-events: none;
                      z-index: 20;
                    "
                  >
                    {{ pop.location }} (Planned)
                  </div>
                </div>
              </template>
            </div>

            <!-- Legend -->
            <div
              class="absolute bottom-4 left-4 flex flex-col gap-3 z-20"
              style="padding: 12px 16px"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-3 h-3 rounded-full"
                  style="background: #3b82f6"
                ></div>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    color: #1a1925;
                  "
                >
                  Active POP
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="w-3 h-3 rounded-full"
                  style="background: #9ca3af"
                ></div>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    color: #1a1925;
                  "
                >
                  Planned POP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- City List by Regions Section -->
      <section
        class="w-full max-w-6xl mx-auto px-4 md:px-6  xl:px-0 mb-16 sm:mb-20 md:mb-24"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <!-- North America Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              North America
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in northAmericaCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Europe Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              Europe
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in europeCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Asia Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              Asia
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in asiaCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Oceania Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              Oceania
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in oceaniaCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Latin America Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              Latin America
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in latinAmericaCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- Africa Card -->
          <div
            class="relative overflow-hidden rounded-[20px] p-4 md:p-6"
            style="
              background: rgba(255, 255, 255, 1);
              border: 1px solid rgba(238, 238, 240, 1);
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <h3
              class="mb-4"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                color: #1a1925;
              "
            >
              Africa
            </h3>
            <div class="space-y-2">
              <div
                v-for="city in africaCities"
                :key="city.name"
                class="flex items-center gap-2"
              >
                <span class="text-base">{{ city.flag }}</span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1a1925;
                  "
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Premium Data Centers Section -->
      <section
        class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-0 mb-16 sm:mb-20 md:mb-24"
        style="
          background-color: #f7f7f8;
          padding: 60px 40px;
          border-radius: 20px;
        "
      >
        <!-- Header -->
        <div class="text-center mb-12">
          <!-- Section Label -->
          <div class="flex items-center justify-center mb-4 sm:mb-6">
          <SectionsUpername name="Network" />
          </div>

          <h2
            class="mb-4"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-style: Medium;
              font-size: 48px;
              line-height: 56px;
              letter-spacing: -0.02em;
              text-align: center;
              vertical-align: middle;
              color: rgba(26, 25, 37, 1);
            "
          >
            Premium data centers
          </h2>
          <p
            class="mb-8"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-style: Regular;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: -0.011em;
              text-align: center;
              color: rgba(81, 81, 94, 1);
            "
          >
            Leading providers for high performance and connectivity.
          </p>
        </div>

        <!-- Feature Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          <!-- Flexible Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
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
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url('/images/about/bgcard.svg');
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Flexible Icon -->
                  <img
                    src="/icons/network1.svg"
                    alt="Flexible"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                font-style: Bold;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.02em;
                text-align: center;
                color: rgba(26, 25, 37, 1);
              "
            >
              Global
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-style: Regular;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: -0.006em;
                text-align: center;
                color: rgba(115, 115, 127, 1);
              "
            >
              Extensive coverage with 60+ data centers in 40+ countries spread
              across 6 continents.
            </p>
          </div>

          <!-- Programmatic Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
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
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url('/images/about/bgcard.svg');
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Programmatic Icon -->
                  <img
                    src="/icons/network3.svg"
                    alt="Programmatic"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                font-style: Bold;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.02em;
                text-align: center;
                color: rgba(26, 25, 37, 1);
              "
            >
              Secure
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-style: Regular;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: -0.006em;
                text-align: center;
                color: rgba(115, 115, 127, 1);
              "
            >
              Stringent security and compliance standards to keep data safe (ISO
              27001).
            </p>
          </div>

          <!-- Accurate Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
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
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url('/images/about/bgcard.svg');
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Accurate Icon -->
                  <img
                    src="/icons/network2.svg"
                    alt="Accurate"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                font-style: Bold;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.02em;
                text-align: center;
                color: rgba(26, 25, 37, 1);
              "
            >
              Redundant
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-style: Regular;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: -0.006em;
                text-align: center;
                color: rgba(115, 115, 127, 1);
              "
            >
              Dense interconnectivity with distributed power and cooling ensures
              high availability.
            </p>
          </div>
        </div>

        <!-- Company Logos -->
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <img
            src="/icons/d6c20539cb41888055fe0be24db21e91473acf1b.png"
            alt="Company logo"
            style="width: auto"
          />
        </div>
      </section>

      <!-- Tier 1 Networks Section -->
      <section class="w-full max-w-6xl mx-auto" style="padding: 5% 0%">
        <!-- Header -->
        <div class="text-center mb-12">
          <!-- Section Label -->
          <div class="flex items-center justify-center mb-4 sm:mb-6">
         <SectionsUpername name="Network" />
          </div>

          <h2
            class="mb-4 text-[2rem] md:text-5xl"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              font-style: Medium;
              letter-spacing: -0.02em;
              text-align: center;
              vertical-align: middle;
              color: rgba(26, 25, 37, 1);
            "
          >
            Tier 1 networks
          </h2>
          <p
            class="mb-8 text-[13px] md:text-base"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-style: Regular;
              letter-spacing: -0.011em;
              text-align: center;
              color: rgba(81, 81, 94, 1);
            "
          >
            Leading providers for high throughput and low latency.
          </p>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <!-- Left: Text Content -->
          <div class="space-y-4" style="margin: auto">
            <p
              class="text-[13px] md:text-base text-justify"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-style: Regular;
                letter-spacing: -0.006em;
                color: rgba(115, 115, 127, 1);
              "
            >
              We operate a
              <span style="text-decoration: underline"
                >non-federated global CDN</span
              >
              and have engineered our architecture from the ground up. Each
              point of presence must adhere to our strict data center
              requirements, including direct access to multiple Tier 1 network
              providers.
            </p>
            <p
              class="text-[13px] md:text-base text-justify"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-style: Regular;
                letter-spacing: -0.006em;
                color: rgba(115, 115, 127, 1);
              "
            >
              Having our network backbone powered by Tier 1 networks allows data
              to be transferred without delay, even in the most demanding
              circumstances. We only expand our network where true value can be
              added.
            </p>
          </div>

          <!-- Right: Feature Cards -->
          <div class="space-y-4">
            <!-- High Reliability Card -->
            <div
              class="rounded-[20px] p-6"
              style="
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(238, 238, 240, 1);
              "
            >
              <div class="flex items-start gap-[10px]">
                <div
                  class="flex-shrink-0"
                  style="padding-left: 2px; padding-right: 2px"
                >
                  <img
                    src="/icons/svgexport-53.png"
                    alt="Endless scalability icon"
                  />
                </div>
                <div>
                  <h3
                    class="mb-2 text-base md:text-lg"
                    style="
                      font-family: 'Bricolage Grotesque', sans-serif;
                      font-weight: 600;
                      font-style: SemiBold;
                      letter-spacing: -0.02em;
                      color: rgba(26, 25, 37, 1);
                    "
                  >
                    High reliability
                  </h3>
                  <p
                    class="text-xs md:text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-style: Regular;
                      letter-spacing: -0.006em;
                      color: rgba(115, 115, 127, 1);
                    "
                  >
                    Always stay online when every single point of failure has
                    been eliminated.
                  </p>
                </div>
              </div>
            </div>

            <!-- Endless Scalability Card -->
            <div
              class="rounded-[20px] p-6"
              style="
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(238, 238, 240, 1);
              "
            >
              <div class="flex items-start gap-[10px]">
                <div
                  class="flex-shrink-0"
                  style="padding-left: 2px; padding-right: 2px"
                >
                  <img
                    src="/icons/svgexport-54.svg"
                    alt="Robust connections icon"
                  />
                </div>
                <div>
                  <h3
                    class="mb-2 text-base md:text-lg"
                    style="
                      font-family: 'Bricolage Grotesque', sans-serif;
                      font-weight: 600;
                      font-style: SemiBold;
                      letter-spacing: -0.02em;
                      color: rgba(26, 25, 37, 1);
                    "
                  >
                    Endless scalability
                  </h3>
                  <p
                    class="text-xs md:text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-style: Regular;
                      letter-spacing: -0.006em;
                      color: rgba(115, 115, 127, 1);
                    "
                  >
                    Grow confidently knowing our infrastructure can handle any
                    traffic volume.
                  </p>
                </div>
              </div>
            </div>

            <!-- Robust Connections Card -->
            <div
              class="rounded-[20px] p-6"
              style="
                background: rgba(255, 255, 255, 1);
                border: 1px solid rgba(238, 238, 240, 1);
              "
            >
              <div class="flex items-start gap-[10px]">
                <div
                  class="flex-shrink-0"
                  style="padding-left: 2px; padding-right: 2px"
                >
                  <img
                    src="/icons/network_icon.svg"
                    alt="High reliability icon"
                  />
                </div>
                <div>
                  <h3
                    class="mb-2 text-base md:text-lg"
                    style="
                      font-family: 'Bricolage Grotesque', sans-serif;
                      font-weight: 600;
                      font-style: SemiBold;
                      letter-spacing: -0.02em;
                      color: rgba(26, 25, 37, 1);
                    "
                  >
                    Robust connections
                  </h3>
                  <p
                    class="text-xs md:text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-style: Regular;
                      letter-spacing: -0.006em;
                      color: rgba(115, 115, 127, 1);
                    "
                  >
                    Expect fast content transfers when each edge server has at
                    least 40 Gbps uplinks.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>


      </section>
      

      <!-- Access All Features CTA Section -->
      
      
    </main>
  </div>
  </div>  
    <SectionsAccessAllFeaturesSection />

</template>

<script setup lang="ts">
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";
import { ref } from "vue";
import SectionsAccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";

// Hover state for POP dots
const hoveredPOP = ref<any>(null);

// Active POP locations with approximate coordinates (percentage-based positioning)
const activePOPs = ref([
  // North America
  { id: 1, location: "New York, USA", x: 28, y: 32 },
  { id: 2, location: "Chicago, USA", x: 25, y: 35 },
  { id: 3, location: "Los Angeles, USA", x: 18, y: 38 },
  { id: 4, location: "San Francisco, USA", x: 15, y: 36 },
  { id: 5, location: "Dallas, USA", x: 24, y: 40 },
  { id: 6, location: "Miami, USA", x: 26, y: 45 },
  { id: 7, location: "Seattle, USA", x: 16, y: 28 },
  { id: 8, location: "Atlanta, USA", x: 27, y: 42 },
  { id: 9, location: "Denver, USA", x: 22, y: 37 },
  { id: 10, location: "Montreal, Canada", x: 28, y: 28 },
  { id: 11, location: "Mexico City, Mexico", x: 22, y: 45 },

  // South America
  { id: 12, location: "São Paulo, Brazil", x: 32, y: 65 },
  { id: 13, location: "Buenos Aires, Argentina", x: 30, y: 72 },
  { id: 14, location: "Santiago, Chile", x: 28, y: 70 },
  { id: 15, location: "Bogotá, Colombia", x: 26, y: 52 },
  { id: 16, location: "Lima, Peru", x: 25, y: 60 },

  // Europe
  { id: 17, location: "London, UK", x: 48, y: 28 },
  { id: 18, location: "Paris, France", x: 49, y: 32 },
  { id: 19, location: "Frankfurt, Germany", x: 52, y: 30 },
  { id: 20, location: "Amsterdam, Netherlands", x: 51, y: 29 },
  { id: 21, location: "Madrid, Spain", x: 47, y: 38 },
  { id: 22, location: "Milano, Italy", x: 54, y: 34 },
  { id: 23, location: "Stockholm, Sweden", x: 55, y: 22 },
  { id: 24, location: "Oslo, Norway", x: 54, y: 20 },
  { id: 25, location: "Copenhagen, Denmark", x: 53, y: 27 },
  { id: 26, location: "Helsinki, Finland", x: 58, y: 22 },
  { id: 27, location: "Dublin, Ireland", x: 45, y: 29 },
  { id: 28, location: "Vienna, Austria", x: 54, y: 32 },
  { id: 29, location: "Warsaw, Poland", x: 56, y: 29 },
  { id: 30, location: "Zurich, Switzerland", x: 52, y: 33 },
  { id: 31, location: "Athens, Greece", x: 57, y: 40 },
  { id: 32, location: "Lisbon, Portugal", x: 45, y: 38 },
  { id: 33, location: "Bucharest, Romania", x: 58, y: 32 },
  { id: 34, location: "Kyiv, Ukraine", x: 59, y: 28 },

  // Asia
  { id: 35, location: "Tokyo, Japan", x: 85, y: 35 },
  { id: 36, location: "Seoul, South Korea", x: 83, y: 33 },
  { id: 37, location: "Singapore", x: 78, y: 52 },
  { id: 38, location: "Hong Kong", x: 81, y: 42 },
  { id: 39, location: "Bangalore, India", x: 70, y: 45 },
  { id: 40, location: "Dubai, UAE", x: 62, y: 42 },
  { id: 41, location: "Istanbul, Turkey", x: 59, y: 35 },
  { id: 42, location: "Moscow, Russia", x: 62, y: 22 },
  { id: 43, location: "Almaty, Kazakhstan", x: 68, y: 30 },

  // Oceania
  { id: 44, location: "Sydney, Australia", x: 88, y: 68 },
  { id: 45, location: "Melbourne, Australia", x: 89, y: 70 },
  { id: 46, location: "Brisbane, Australia", x: 89, y: 65 },
  { id: 47, location: "Perth, Australia", x: 82, y: 68 },
  { id: 48, location: "Auckland, New Zealand", x: 92, y: 72 },

  // Africa
  { id: 49, location: "Johannesburg, South Africa", x: 58, y: 72 },
]);

// Planned POP locations
const plannedPOPs = ref([
  // Africa
  { id: 50, location: "Lagos, Nigeria", x: 52, y: 50 },
  { id: 51, location: "Nairobi, Kenya", x: 62, y: 52 },

  // Asia
  { id: 52, location: "Jakarta, Indonesia", x: 80, y: 55 },
  { id: 53, location: "Beijing, China", x: 82, y: 35 },
]);

// City data by region
const northAmericaCities = [
  { name: "Atlanta", flag: "🇺🇸" },
  { name: "Chicago", flag: "🇺🇸" },
  { name: "Dallas", flag: "🇺🇸" },
  { name: "Denver", flag: "🇺🇸" },
  { name: "Los Angeles", flag: "🇺🇸" },
  { name: "Miami", flag: "🇺🇸" },
  { name: "Montreal", flag: "🇨🇦" },
  { name: "New York", flag: "🇺🇸" },
  { name: "San Francisco", flag: "🇺🇸" },
  { name: "Seattle", flag: "🇺🇸" },
];

const europeCities = [
  { name: "Amsterdam", flag: "🇳🇱" },
  { name: "Athens", flag: "🇬🇷" },
  { name: "Bucharest", flag: "🇷🇴" },
  { name: "Copenhagen", flag: "🇩🇰" },
  { name: "Dublin", flag: "🇮🇪" },
  { name: "Frankfurt", flag: "🇩🇪" },
  { name: "Helsinki", flag: "🇫🇮" },
  { name: "Kyiv", flag: "🇺🇦" },
  { name: "Lisbon", flag: "🇵🇹" },
  { name: "London", flag: "🇬🇧" },
  { name: "Madrid", flag: "🇪🇸" },
  { name: "Milano", flag: "🇮🇹" },
  { name: "Oslo", flag: "🇳🇴" },
  { name: "Paris", flag: "🇫🇷" },
  { name: "Stockholm", flag: "🇸🇪" },
  { name: "Vienna", flag: "🇦🇹" },
  { name: "Warsaw", flag: "🇵🇱" },
  { name: "Zurich", flag: "🇨🇭" },
];

const asiaCities = [
  { name: "Almaty", flag: "🇰🇿" },
  { name: "Bangalore", flag: "🇮🇳" },
  { name: "Dubai", flag: "🇦🇪" },
  { name: "Hong Kong", flag: "🇭🇰" },
  { name: "Istanbul", flag: "🇹🇷" },
  { name: "Moscow", flag: "🇷🇺" },
  { name: "Seoul", flag: "🇰🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Tokyo", flag: "🇯🇵" },
];

const oceaniaCities = [
  { name: "Auckland", flag: "🇳🇿" },
  { name: "Brisbane", flag: "🇦🇺" },
  { name: "Melbourne", flag: "🇦🇺" },
  { name: "Perth", flag: "🇦🇺" },
  { name: "Sydney", flag: "🇦🇺" },
];

const latinAmericaCities = [
  { name: "Bogotá", flag: "🇨🇴" },
  { name: "Buenos Aires", flag: "🇦🇷" },
  { name: "Lima", flag: "🇵🇪" },
  { name: "Mexico City", flag: "🇲🇽" },
  { name: "Santiago", flag: "🇨🇱" },
  { name: "São Paulo", flag: "🇧🇷" },
];

const africaCities = [{ name: "Johannesburg", flag: "🇿🇦" }];
</script>

<style scoped>
.pop-dot {
  transition: all 0.2s ease;
}

.pop-dot:hover {
  transform: translate(-50%, -50%) scale(1.5);
  z-index: 15;
}

.active-pop:hover {
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
}

.planned-pop:hover {
  box-shadow: 0 0 0 4px rgba(156, 163, 175, 0.3);
}
</style>
