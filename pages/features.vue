<template>
  <div
    class="min-h-screen relative overflow-hidden"
    style="background: #f7f7f8"
  >
    <!-- Main Content -->
    <main class="mx-auto" style="max-width: 940px" ;>
      <!-- Features Section -->
      <section class="px-[5%] lg:px-0 " style="margin: 10% 0%;">
        <div class="flex flex-col" style="align-items: flex-start">
          <!-- Section Label -->
          <div class="flex items-center justify-center mb-4 sm:mb-6">
            <div
              class="flex items-center"
              style="
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
              "
            >
              <!-- Lightning Bolt Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A3A3AE"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="min-width: 16px; min-height: 16px"
              >
                <path
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <span
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0%;
                  text-align: center;
                  color: #1a1925;
                "
              >
                Multiple Features
              </span>
            </div>
          </div>

          <!-- Title -->
          <h1
            class="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              vertical-align: middle;
              color: #1a1925;
            "
          >
            Features
          </h1>

          <!-- Subtitle -->
          <p
            class="text-left lg:text-center mb-8 sm:mb-10 md:mb-12 text-sm md:text-base"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: -0.011em;
              color: #51515e;
            "
          >
            Get access to all of our features no matter the account size.
          </p>
        </div>

        <!-- Values Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32"
        >
          <!-- Agility Card -->
          <div
            class="relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div
                class="mb-4 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
                <img
                  src="/images/about/Group.svg"
                  alt="Integrity Icon"
                  class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925"
                />
              </div>
              <h3
                class="mb-2 sm:mb-3 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Fast
              </h3>
              <p
                class="text-sm sm:text-base"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Our primary focus is on speed, improving performance by a
                millisecond at a time.
              </p>
            </div>
          </div>

          <!-- Integrity Card -->
          <div
            class="relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Dollar Sign Icon -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative z-10"
                  >
                    <path
                      d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3
                class="mb-2 sm:mb-3 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Scalable
              </h3>
              <p
                class="text-sm sm:text-base"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Our network can handle all levels of traffic, from a small blog
                to a top 10 website.
              </p>
            </div>
          </div>

          <!-- Reliability Card -->
          <div
            class="relative overflow-hidden min-h-[210px] md:h-[210px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 8px;
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
                border: none;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <div class="mb-4">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute -top-2 -left-2 w-8 h-8"
                    style="
                      background-image: url('/images/about/bgcardicon.svg');
                      background-repeat: no-repeat;
                      background-size: contain;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Headphone Icon -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="relative z-10"
                  >
                    <path
                      d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V15C15 14.4696 15.2107 13.9609 15.5858 13.5858C15.9609 13.2107 16.4696 13 17 13H19C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19Z"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19V15C9 14.4696 8.78929 13.9609 8.41421 13.5858C8.03914 13.2107 7.53043 13 7 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19Z"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3
                class="mb-2 sm:mb-3 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Reliable
              </h3>
              <p
                class="text-sm sm:text-base"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Our resilient infrastructure and 24/7 customer support assures
                high reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- General Section -->
      <section class="w-full mx-auto px-[5%] lg:px-0 " style="margin: 10% 0%;">
        <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
          <!-- Mobile/Tablet: Content First, Desktop: Feature List First -->
          <div class="w-full lg:w-1/3 order-2 lg:order-1">
            <div
              class="rounded-[20px] border border-[#eeeef0] bg-white p-6"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
            >
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in featuresList"
                  :key="index"
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                  :class="
                    index === featuresList.length - 1
                      ? 'bg-[#eeeef0]'
                      : 'hover:bg-gray-50'
                  "
                >
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #1a1925;
                    "
                  >
                    {{ feature }}
                  </span>
                  <svg
                    v-if="index === featuresList.length - 1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <!-- Mobile/Tablet: Content Second, Desktop: Content Second -->
          <div class="w-full lg:flex-1 flex items-center order-1 lg:order-2">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl text-left"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                General
              </h2>
              <p
                class="text-left"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 26px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Global expectations for fast loading content is at an all-time
                high. Users expect content to be delivered at near instant
                speeds. We have built a high performance content delivery
                network that can meet the demands faced today and is ready for
                what the future holds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Security Section -->
      <section class="w-full mx-auto px-[5%] lg:px-0 mt-12" style="margin: 10% 0%;">
        <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
          <!-- Mobile/Tablet: Content First, Desktop: Content First -->
          <div class="w-full lg:flex-1 flex items-center order-1">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl text-left"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Security
              </h2>
              <p
                class="text-left"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 26px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Digital threats increase every day as the total number of people
                regularly accessing the internet grows. We understand the
                importance of a perfect uptime and rock solid security. We have
                proactively implemented many measures to prevent attacks and
                unauthorized actions.
              </p>
            </div>
          </div>

          <!-- Mobile/Tablet: Feature List Second, Desktop: Feature List Second -->
          <div class="w-full lg:w-1/3 order-2">
            <div
              class="rounded-[20px] border border-[#eeeef0] bg-white p-6"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
            >
              <!-- Title -->
              <h3
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  color: #1a1925;
                "
              >
                HTTP/2
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in featuresList"
                  :key="index"
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                  :class="
                    index === featuresList.length - 1
                      ? 'bg-[#F7F7F8]'
                      : 'hover:bg-gray-50'
                  "
                >
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #1a1925;
                    "
                  >
                    {{ feature }}
                  </span>
                  <svg
                    v-if="index === featuresList.length - 1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Zones Section -->
      <section class="w-full mx-auto px-[5%] lg:px-0" style="margin: 10% 0%;">
        <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
          <!-- Mobile/Tablet: Feature List First, Desktop: Feature List First -->
          <div class="w-full lg:w-1/3 order-1">
            <div
              class="rounded-[20px] border border-[#eeeef0] bg-white p-6"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
            >
              <!-- Title -->
              <h3
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 15px;
                  line-height: 20px;
                  color: #1a1925;
                "
              >
                HTTP/2
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in featuresList"
                  :key="index"
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                  :class="
                    index === featuresList.length - 1
                      ? 'bg-[#F7F7F8]'
                      : 'hover:bg-gray-50'
                  "
                >
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #1a1925;
                    "
                  >
                    {{ feature }}
                  </span>
                  <svg
                    v-if="index === featuresList.length - 1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <!-- Mobile/Tablet: Content Second, Desktop: Content Second -->
          <div class="w-full lg:flex-1 flex items-center order-2">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl text-left"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                Zones
              </h2>
              <p
                class="text-left"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 26px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Every application typically has a large list of necessary
                requirements. We understand that adding a CDN service to a stack
                may become overwhelming. We have made sure that our platform can
                be easily configured to meet almost any specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Powerful Platform Section -->
      <section class="w-full mx-auto px-[5%] lg:px-0" style="margin: 10% 0%;">
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
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
            "
          >
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              "
            >
              Platform
            </span>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            text-align: center;
            vertical-align: middle;
            color: #1a1925;
          "
        >
          Powerful Platform
        </h2>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-10 md:mb-12 text-sm md:text-base"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Content delivery is a breeze with our user-friendly dashboard.
        </p>

        <!-- Platform Cards -->
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
                    src="/images/feature_icon_1.svg"
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
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Flexible
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Wide range of settings make sure content is delivered in the exact
              way needed.
            </p>
            <!-- Button -->
            <button
              class="w-full py-2 px-4 text-white font-medium transition-colors"
              style="
                background: #1a1925;
                border: 1px solid var(--Border-Primary, #e7e7ea);
                border-radius: 6px;
                border-width: 1px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                width: 50%;
              "
            >
              Get Started
            </button>
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
                    src="/images/feature_icon_2.svg"
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
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Programmatic
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              RESTful API allows complete account control from any application
              in any language.
            </p>
            <!-- Button -->
            <button
              class="py-2 px-4 font-medium transition-colors"
              style="
                background: #ffffff;
                border: 1px solid var(--Border-Primary, #e7e7ea);
                border-radius: 6px;
                border-width: 1px;
                color: #1a1925;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                width: 50%;
              "
            >
              Learn More
            </button>
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
                    src="/images/feature_icon_3.svg"
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
                font-weight: 600;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Accurate
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Detailed reports give a deep understanding of how content is being
              delivered.
            </p>
            <!-- Button -->
            <button
              class="w-full py-2 px-4 font-medium transition-colors"
              style="
                background: #ffffff;
                border: 1px solid var(--Border-Primary, #e7e7ea);
                border-radius: 6px;
                border-width: 1px;
                color: #1a1925;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                width: 50%;
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <!-- Easy Integration Section -->
      <section class="w-full mx-auto px-[5%] lg:px-0" style="margin: 10% 0%;">
        <!-- Section Label -->
        <div class="flex flex-col" style="align-items: flex-start">
          <div
            class="flex items-center justify-start lg:justify-center mb-4 sm:mb-6"
          >
            <div
              class="flex items-center"
              style="
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
              "
            >
              <!-- Lightning Bolt Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A3A3AE"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="min-width: 16px; min-height: 16px"
              >
                <path
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <span
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0%;
                  text-align: center;
                  color: #1a1925;
                "
              >
                Integrations
              </span>
            </div>
          </div>

          <!-- Title -->
          <h2
            class="text-left lg:text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              vertical-align: middle;
              color: #1a1925;
            "
          >
            Easy Integration
          </h2>

          <!-- Subtitle -->
          <p
            class="text-left lg:text-center mb-8 sm:mb-10 md:mb-12 text-sm md:text-base"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: -0.011em;
              color: #51515e;
            "
          >
            Add to any infrastructure in a matter of seconds.
          </p>
        </div>
        <!-- Integration Content -->
        <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
          <!-- Left - Feature List -->
          <div class="w-full lg:w-1/3">
            <div
              class="rounded-[20px] border border-[#eeeef0] bg-white p-6"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
            >
              <ul class="space-y-3">
                <li
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors bg-[#F7F7F8]"
                >
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #1a1925;
                    "
                  >
                    Content management systems
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <span
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #73737f;
                    "
                  >
                    Frameworks
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#73737F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right - Integration Logos -->
          <div
            class="w-full lg:flex-1 flex items-center justify-center lg:items-start lg:justify-start"
          >
            <!-- Mobile/Tablet: Vertical Image -->
            <div class="w-full flex justify-center lg:hidden">
              <img
                src="/images/feature_lang_img.svg"
                alt="Integration Logos"
                class="h-auto opacity-60"
                style="max-width: 100%; width: auto"
              />
            </div>
            <!-- Desktop: Image -->
            <div class="hidden lg:flex w-full justify-start">
              <img
                src="/images/feature_lang_img.svg"
                alt="Integration Logos"
                class="w-full h-auto opacity-60"
                style="max-width: 100%"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="mb-12 sm:mb-8 md:mb-0">
      <SectionsAccessAllFeaturesSection />
    </div>
  </div>
</template>

<script setup lang="ts">
// Features list for General, Security, and Zones sections
const featuresList = [
  "IPv6 Support",
  "Header Control",
  "Log Forwarding",
  "Grip Progression",
  "Byte Range Requests",
  "HTTP Live Streaming",
  "Image Processing",
];

// Integration logos/platforms
const integrationLogos = [
  "WordPress",
  "Magento",
  "Joomla!",
  "TYPO3",
  "Drupal",
  "PrestaShop",
];
</script>

<style scoped>
/* Additional styles if needed */
</style>
