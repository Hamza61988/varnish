<template>
  <div
    class="min-h-screen relative overflow-hidden"
    style="background: #f7f7f8"
  >
    <!-- Main Content -->
    <main
      class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"
    >
      <!-- Features Section -->
      <section>
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
      <section
        class="w-full mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <div class="flex flex-col md:flex-row gap-8 sm:gap-10 px-9">
          <!-- Left - Feature List -->
          <div class="w-1/3">
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

          <!-- Right - Content -->
          <div class="w-full flex flex-1 items-center">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl"
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
      <section
        class="w-full mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <div class="flex flex-col md:flex-row gap-8 sm:gap-10 px-9">
          <!-- Left - Content -->
          <div class="w-full flex flex-1 items-center">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl"
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

          <!-- Right - Feature List -->
          <div class="w-1/3">
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
      <section
        class="w-full mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <div class="flex flex-col md:flex-row gap-8 sm:gap-10 px-9">
          <!-- Left - Feature List -->
          <div class="w-1/3">
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

          <!-- Right - Content -->
          <div class="w-full flex flex-1 items-center">
            <div>
              <h2
                class="mb-4 text-3xl sm:text-4xl md:text-5xl"
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
      <section
        class="w-full mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
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
                <div class="relative" style="top: 11px; left: 45.5px;">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 143px;
                      height: 143px;
                      border-radius: 5.33px;
                      top: -39px;
                      left: -17.5px;
                      opacity: 1;
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
                    style="width: 144px; height: 145px; opacity: 1;"
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
              "
            >
              Wide range of settings make sure content is delivered in the
              exact way needed.
            </p>
            <!-- Button -->
            <button
              class="w-full py-2 px-4 rounded-lg text-white font-medium transition-colors"
              style="
                background: #1a1925;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
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
                <div class="relative" style="top: 11px; left: 45.5px;">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 143px;
                      height: 143px;
                      border-radius: 5.33px;
                      top: -39px;
                      left: -17.5px;
                      opacity: 1;
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
                    style="width: 144px; height: 145px; opacity: 1;"
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
              "
            >
              RESTful API allows complete account control from any application
              in any language.
            </p>
            <!-- Button -->
            <button
              class="w-full py-2 px-4 rounded-lg font-medium transition-colors border-2"
              style="
                background: #ffffff;
                border-color: #1a1925;
                color: #1a1925;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
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
                <div class="relative" style="top: 11px; left: 45.5px;">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 143px;
                      height: 143px;
                      border-radius: 5.33px;
                      top: -39px;
                      left: -17.5px;
                      opacity: 1;
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
                    style="width: 144px; height: 145px; opacity: 1;"
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
              "
            >
              Detailed reports give a deep understanding of how content is
              being delivered.
            </p>
            <!-- Button -->
            <button
              class="w-full py-2 px-4 rounded-lg font-medium transition-colors border-2"
              style="
                background: #ffffff;
                border-color: #1a1925;
                color: #1a1925;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <!-- Easy Integration Section -->
      <section
        class="w-full mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <!-- Section Label -->
        <div class="flex flex-col" style="align-items: flex-start">
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
                Integrations
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
            Easy Integration
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
            Add to any infrastructure in a matter of seconds.
          </p>
        </div>
        <!-- Integration Content -->
        <div class="flex flex-col md:flex-row gap-8 sm:gap-10 px-9">
          <!-- Left - Feature List -->
          <div class="w-1/3">
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
          <div class="w-full flex flex-1 items-center">
            <div class="w-full">
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
    <section
      class="relative overflow-hidden bg-white h-[450px] sm:h-[550px] md:h-[620px] lg:h-[676px] w-full"
      style="background-color: #f7f7f8"
    >
      <div
        class="absolute inset-0 pointer-events-none overflow-hidden"
        style="z-index: 0"
      >
        <!-- Bottom Right Background Image -->
        <img
          src="/images/2ndlast_section2.svg"
          alt=""
          class="absolute opacity-30 bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
        />
      </div>

      <div
        class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]"
      >
        <div
          class="bg-[#1A1925] text-center relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[356px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[35px]"
        >
          <!-- CTA Badge -->
          <div
            class="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 pt-3 sm:pt-4 md:pt-5 lg:pt-[5%]"
          >
            <div
              class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 color-[#A3A3AE] fill-[#A3A3AE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span class="text-[#1A1925] ml-1">Lets Get Started</span>
            </div>
          </div>

          <!-- Main Heading -->
          <h2
            class="relative text-white mb-2 sm:mb-3 md:mb-4 cta-heading"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 600;
              letter-spacing: -0.04em;
              text-align: center;
              text-transform: capitalize;
              color: #ffffff;
            "
          >
            Access All Features
          </h2>

          <!-- Subtitle -->
          <p
            class="relative mb-4 sm:mb-5 md:mb-6 lg:mb-8 cta-subtitle"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              letter-spacing: -0.011em;
              text-align: center;
              color: #51515e;
            "
          >
            Get started with a free 14 day trial, no credit card required.
          </p>

          <!-- Company Metrics -->
          <div
            class="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-5 cta-metrics"
          >
            <span
              class="cta-metric-text"
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                letter-spacing: -0.02em;
                text-align: center;
                color: #ffffff;
              "
              >120 Employes</span
            >
            <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
            <span
              class="cta-metric-text"
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                letter-spacing: -0.02em;
                text-align: center;
                color: #ffffff;
              "
              >$31.5M Raised</span
            >
            <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
            <span
              class="cta-metric-text"
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                letter-spacing: -0.02em;
                text-align: center;
                color: #ffffff;
              "
              >7 Years old</span
            >
          </div>

          <!-- CTA Button -->
          <div class="relative pb-4 sm:pb-5 md:pb-6 lg:pb-[15%]">
            <button
              class="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-[125px] sm:w-[135px] md:w-[145px] lg:w-[153px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] opacity-100"
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                letter-spacing: -0.02em;
                text-align: center;
                color: #ffffff;
              "
            >
              <span
                class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-tight"
                >Get Started ~ Free</span
              >
            </button>
          </div>
        </div>
      </div>
    </section>
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
  "WORDPRESS",
  "Joomla!",
  "Drupal",
  "Magento",
  "TYPO3",
  "PrestaShop",
];
</script>

<style scoped>
/* Additional styles if needed */
</style>
