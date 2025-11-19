<template>
  <div
    class="min-h-screen bg-white relative overflow-hidden"
    style="background-color: #f7f7f8"
  >
    <!-- Main Content -->
    <main>
      <!-- Our Values Section -->
      <section style="margin: 3% 1% 1% 1%">
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-bottom: 4px;
              padding-left: 8px;
              padding-right: 8px;
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
              class="h-3 w-3 fill-[#A3A3AE] stroke-[#A3A3AE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              style="color: #1a1925"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
              Tools
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
          Tools
        </h2>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-sm sm:text-base"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          "
        >
          Troubleshoot website, network, and CDN issues for fast resolutions.
        </p>

        <!-- Values Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32"
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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                Website Speed Test
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
                Full page speed test to get detailed insights on how a website
                performs.
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
                    border: none;
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
                Performance Test
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
                Asset performance test from multiple locations to get detailed
                speed metrics.
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
                <!-- Reliability Icon -->
                <img
                  src="/images/about/Icon3rd.svg"
                  alt="Reliability Icon"
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
                HTTP Header Checker
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
                Single asset request with curl to get the HTTP response headers.
              </p>
            </div>
          </div>

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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                HTTP/2 Test
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
                Verify if a URL is delivered through the HTTP/2 network
                protocol.
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
                    border: none;
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
                Brotli Test
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
                Verify if a server supports the lossless Brotli compression
                algorithm.
              </p>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32"
        >
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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                IP Location Finder
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
                Lookup an IP address or hostname to get the geographical
                location.
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
                DNS Checker
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
                Lookup a DNS record from multiple servers to get detailed record
                information.
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
                <!-- Reliability Icon -->
                <img
                  src="/images/about/Icon3rd.svg"
                  alt="Reliability Icon"
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
                Ping Test
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
                Ping any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </div>

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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                Ping IPv6 Test
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
                Ping any IPv6 address or hostname simultaneously from multiple
                locations.
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
                Traceroute Test
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
                Trace any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </div>

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
                <!-- Reliability Icon -->
                <img
                  src="/images/about/Icon3rd.svg"
                  alt="Reliability Icon"
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
                BGP Looking Glass
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
                Comprehensive directory of BGP looking glass servers in various
                regions.
              </p>
            </div>
          </div>
        </div>
        <!-- Tools Security Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32"
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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                Certificate Checker
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
                Decode an SSL/TLS certificate to validate intermediate
                certificates.
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
                Certificate Chain Composer
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
                Generate intermediate certificates for an SSL/TLS certificate.
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
                <!-- Reliability Icon -->
                <img
                  src="/images/about/Icon3rd.svg"
                  alt="Reliability Icon"
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
                SHA256 Generator
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
                Instantly generate a SHA256 hash of any string or input value.
              </p>
            </div>
          </div>

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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                SSL FREAK Test
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
                Verify if a server is vulnerable to the FREAK attack
                (CVE-2015-0204).
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
                TLS Logjam Test
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
                Verify if a server is vulnerable to the Logjam attack
                (CVE-2015-4000).
              </p>
            </div>
          </div>
        </div>

        <!-- Tools Others Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
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
                <!-- Agility Icon -->
                <img
                  src="/images/about/Icon.svg"
                  alt="Agility Icon"
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
                Epoch Converter
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
                Convert a unix epoch timestamp to a human readable format.
              </p>
            </div>
          </div>

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
                Knowledge base
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
                Convert a hexadecimal value to decimal and a decimal value to
                hexadecimal.
              </p>
            </div>
          </div>
        </div>
      </section>
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
          class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%] py-8 sm:py-10 md:py-12 lg:py-[8%]"
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
              <span class="text-gray-600 text-xs sm:text-sm md:text-base"
                >•</span
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
                >$31.5M Raised</span
              >
              <span class="text-gray-600 text-xs sm:text-sm md:text-base"
                >•</span
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
    </main>
  </div>
</template>

<script setup lang="ts">
// About Us page
</script>

<style scoped>
.cta-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.04em;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-heading {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 40px;
    line-height: 48px;
  }
}

@media (min-width: 1024px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

.cta-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.011em;
  text-align: center;
  color: #51515e;
}

@media (min-width: 640px) {
  .cta-subtitle {
    font-size: 13px;
    line-height: 20px;
  }
}

@media (min-width: 768px) {
  .cta-subtitle {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

.cta-metric-text {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-metric-text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (min-width: 768px) {
  .cta-metric-text {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (min-width: 1024px) {
  .cta-metric-text {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
