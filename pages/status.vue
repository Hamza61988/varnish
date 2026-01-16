<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <!-- Main Content -->
    <main
      class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"
    >
      <!-- Header Section -->
      <section
        class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-4 sm:px-6 md:px-0"
      >
        <!-- Section Label -->
         <div class="flex items-center justify-center" ><SectionsUpername name="Network Status" /></div>


        <!-- Title -->
        <h1
          class="text-center mb-4 sm:mb-6"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -2%;
            text-align: center;
            vertical-align: middle;
            color: #1a1925;
          "
        >
          Status
        </h1>

        <!-- Subtitle -->
        <p
          class="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -1.1%;
            text-align: center;
            color: #51515e;
          "
        >
          All systems are operational
        </p>
      </section>

      <!-- Regional Status Cards -->
      <section class="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto"
        >
          <!-- North America Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                North America
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in [
                    'Atlanta',
                    'Chicago',
                    'Dallas',
                    'Denver',
                    'Los Angeles',
                    'Miami',
                    'New York',
                    'San Francisco',
                    'Seattle',
                  ]"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Europe Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                Europe
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in [
                    'Amsterdam',
                    'Athens',
                    'Bucharest',
                    'Copenhagen',
                    'Dublin',
                    'Frankfurt',
                    'Helsinki',
                    'Kyiv',
                    'Lisbon',
                    'London',
                    'Madrid',
                    'Milano',
                    'Oslo',
                    'Paris',
                    'Stockholm',
                    'Vienna',
                    'Warsaw',
                    'Zurich',
                  ]"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Asia Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                Asia
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in [
                    'Almaty',
                    'Bangalore',
                    'Dubai',
                    'Hong Kong',
                    'Istanbul',
                    'Moscow',
                    'Seoul',
                    'Singapore',
                    'Tel Aviv',
                    'Tokyo',
                  ]"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Oceania Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                Oceania
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in [
                    'Auckland',
                    'Brisbane',
                    'Melbourne',
                    'Perth',
                    'Sydney',
                  ]"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Latin America Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                Latin America
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in [
                    'Bogotá',
                    'Buenos Aires',
                    'Lima',
                    'São Paulo',
                    'Santiago',
                    'Mexico City',
                  ]"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Africa Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-4"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -2%;
                  color: #757575;
                "
              >
                Africa
              </h3>
              <div class="space-y-2">
                <div
                  v-for="city in ['Johannesburg']"
                  :key="city"
                  class="flex items-center gap-2 cursor-pointer"
                  @click="toggleStatus(city, 'regional')"
                >
                  <div
                    class="relative flex items-center justify-center flex-shrink-0"
                    style="width: 16px; height: 16px"
                  >
                    <!-- Outer circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '16px',
                        height: '16px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                      }"
                    ></div>
                    <!-- White ring -->
                    <div
                      class="absolute rounded-full"
                      style="
                        width: 12px;
                        height: 12px;
                        background: #ffffff;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                      "
                    ></div>
                    <!-- Inner circle -->
                    <div
                      class="absolute rounded-full"
                      :style="{
                        width: '6px',
                        height: '6px',
                        background: regionalStatus[city]
                          ? '#5DAC5F'
                          : '#d1d5db',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }"
                    ></div>
                  </div>
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      letter-spacing: -0.6%;
                      color: #000000;
                    "
                  >
                    {{ city }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer Navigation -->
      <section class="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div class="mx-auto">
          <div
            class="py-6"
            style="
              background: #ffffff;
              border-top: 1px solid #eeeef0;
              border-bottom: 1px solid #eeeef0;
            "
          >
            <div
              class="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            >
              <div
                v-for="item in [
                  'Dashboard',
                  'API',
                  'Log Forwarding',
                  'Storage Cluster',
                ]"
                :key="item"
                class="flex items-center gap-2 cursor-pointer"
                @click="toggleStatus(item, 'footer')"
              >
                <div
                  class="relative flex items-center justify-center flex-shrink-0"
                  style="width: 16px; height: 16px"
                >
                  <!-- Outer circle -->
                  <div
                    class="absolute rounded-full"
                    :style="{
                      width: '16px',
                      height: '16px',
                      background: footerStatus[item] ? '#5DAC5F' : '#d1d5db',
                    }"
                  ></div>
                  <!-- White ring -->
                  <div
                    class="absolute rounded-full"
                    style="
                      width: 12px;
                      height: 12px;
                      background: #ffffff;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    "
                  ></div>
                  <!-- Inner circle -->
                  <div
                    class="absolute rounded-full"
                    :style="{
                      width: '6px',
                      height: '6px',
                      background: footerStatus[item] ? '#5DAC5F' : '#d1d5db',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }"
                  ></div>
                </div>
                <span
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 14.26px;
                    line-height: 19.01px;
                    letter-spacing: -2%;
                    color: #757575;
                  "
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IP Location Finder API Section -->
      <section class="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div class="mx-auto">
          <h2
            class="mb-2"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 600;
              font-size: 32px;
              line-height: 24px;
              letter-spacing: -2%;
              color: #1a1925;
            "
          >
            IP Location Finder API
          </h2>
          <p
            class="mb-8"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              font-size: 17px;
              line-height: 26px;
              letter-spacing: -0.6%;
              color: #73737f;
            "
          >
            LAST 90 DAYS
          </p>
          <p
            class="mb-12"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 26px;
              letter-spacing: -0.6%;
              color: #73737f;
            "
          >
            There have been no incidents in the past 90 days.
          </p>

          <!-- API Section -->
          <div class="mb-12">
            <h3
              class="mb-4"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 600;
                font-size: 32px;
                line-height: 24px;
                letter-spacing: -2%;
                color: #1a1925;
              "
            >
              API
            </h3>
            <p
              class="mb-6 text-base sm:text-lg"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #51515e;
              "
            >
              The RESTful API returns the overall service status and a short
              description of an open incident in JSON format.
            </p>
            <div
              class="flex items-center gap-3 p-4 rounded-lg"
              style="background: #f7f7f8; border: 1px solid #eeeef0"
            >
              <span
                class="px-3 py-1.5 rounded text-xs font-medium uppercase"
                style="background: #d4edda; color: #51515e"
              >
                GET
              </span>
              <code
                class="text-sm sm:text-base"
                style="
                  font-family: 'Inter', monospace;
                  font-weight: 400;
                  color: #1a1925;
                  word-break: break-all;
                "
              >
                https://status.keycdn.com/status.json
              </code>
            </div>
          </div>

          <!-- Response Parameters Section -->
          <div>
            <h3
              class="mb-6"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 400;
                font-size: 25px;
                line-height: 35px;
                letter-spacing: -2%;
                color: #000000;
              "
            >
              Response Parameters
            </h3>
            <div>
              <!-- PARAMETER Label -->
              <div class="mb-4 pb-2" style="border-bottom: 1px solid #eeeef0">
                <span
                  class="uppercase"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: -1.1%;
                    text-transform: uppercase;
                    color: #73737f;
                  "
                >
                  PARAMETER
                </span>
              </div>

              <!-- Status Parameter -->
              <div class="mb-6 pb-4" style="border-bottom: 1px solid #eeeef0">
                <div
                  class="mb-2"
                  style="
                    font-family: 'Inter', monospace;
                    font-weight: 600;
                    font-size: 14px;
                    color: #000000;
                  "
                >
                  status
                </div>
                <div
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    color: #73737f;
                  "
                >
                  operational, maintenance, degraded, outage
                </div>
              </div>

              <!-- Description Parameter -->
              <div>
                <div
                  class="mb-2"
                  style="
                    font-family: 'Inter', monospace;
                    font-weight: 600;
                    font-size: 14px;
                    color: #000000;
                  "
                >
                  description
                </div>
                <div
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    color: #73737f;
                  "
                >
                  incident
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Regional cities status
const regionalStatus = ref<Record<string, boolean>>({
  // North America
  Atlanta: true,
  Chicago: true,
  Dallas: true,
  Denver: true,
  "Los Angeles": true,
  Miami: true,
  "New York": true,
  "San Francisco": true,
  Seattle: true,
  // Europe
  Amsterdam: true,
  Athens: true,
  Bucharest: true,
  Copenhagen: true,
  Dublin: true,
  Frankfurt: true,
  Helsinki: true,
  Kyiv: true,
  Lisbon: true,
  London: true,
  Madrid: true,
  Milano: true,
  Oslo: true,
  Paris: true,
  Stockholm: true,
  Vienna: true,
  Warsaw: true,
  Zurich: true,
  // Asia
  Almaty: true,
  Bangalore: true,
  Dubai: true,
  "Hong Kong": true,
  Istanbul: true,
  Moscow: true,
  Seoul: true,
  Singapore: true,
  "Tel Aviv": true,
  Tokyo: true,
  // Oceania
  Auckland: true,
  Brisbane: true,
  Melbourne: true,
  Perth: true,
  Sydney: true,
  // Latin America
  Bogotá: true,
  "Buenos Aires": true,
  Lima: true,
  "São Paulo": true,
  Santiago: true,
  "Mexico City": true,
  // Africa
  Johannesburg: true,
});

// Footer navigation status
const footerStatus = ref<Record<string, boolean>>({
  Dashboard: true,
  API: true,
  "Log Forwarding": true,
  "Storage Cluster": true,
});

const toggleStatus = (key: string, type: "regional" | "footer") => {
  if (type === "regional") {
    regionalStatus.value[key] = !regionalStatus.value[key];
  } else {
    footerStatus.value[key] = !footerStatus.value[key];
  }
};
</script>
