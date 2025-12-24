<template>
  <div class="min-h-screen bg-white relative overflow-hidden" style="background-color: #f7f7f8">
    <main>
      <section style="margin: 3% 1% 1% 1%; padding: 0 4%">
        <div class="flex items-center justify-start sm:justify-center mb-4 sm:mb-6">
          <div class="flex items-center" style="
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
            ">
            <!-- Lightning Bolt Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-[#A3A3AE] stroke-[#A3A3AE]" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="color: #1a1925">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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
              Tools
            </span>
          </div>
        </div>

        <h2 class="text-left sm:text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            vertical-align: middle;
            color: #1a1925;
          ">
          Tools
        </h2>

        <p class="text-left sm:text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-sm sm:text-base px-0 sm:px-2" style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          ">
          Troubleshoot website, network, and CDN issues for fast resolutions.
        </p>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          <h3 class="text-left section-heading" style="margin-bottom: 16px">
            WEB
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-2 sm:px-0">
          <NuxtLink to="/web/websitespeedtest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Website Speed Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Full page speed test to get detailed insights on how a website
                performs.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/web/performancetest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                    border: none;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Performance Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Asset performance test from multiple locations to get detailed
                speed metrics.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/web/httpheaderchecker"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Reliability Icon -->
                <img src="/images/about/Icon3rd.svg" alt="Reliability Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                HTTP Header Checker
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Single asset request with curl to get the HTTP response headers.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/web/http2test"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                HTTP/2 Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Verify if a URL is delivered through the HTTP/2 network
                protocol.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/web/brotlitest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                    border: none;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Brotli Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Verify if a server supports the lossless Brotli compression
                algorithm.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          <h3 class="text-left section-heading" style="margin-bottom: 16px">
            NETWORK
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-2 sm:px-0">
          <NuxtLink to="/networks/iplocationfinder"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                IP Location Finder
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Lookup an IP address or hostname to get the geographical
                location.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink to="/networks/dnschecker"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                DNS Checker
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Lookup a DNS record from multiple servers to get detailed record
                information.
              </p>
            </div>
          </NuxtLink>

          <!-- Reliability Card -->
          <NuxtLink to="/networks/pingtest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Reliability Icon -->
                <img src="/images/about/Icon3rd.svg" alt="Reliability Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Ping Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Ping any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/networks/ipv6test"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Ping IPv6 Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Ping any IPv6 address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink to="/networks/traceroutetest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Traceroute Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Trace any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/networks/bgplookingglass"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Reliability Icon -->
                <img src="/images/about/Icon3rd.svg" alt="Reliability Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                BGP Looking Glass
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Comprehensive directory of BGP looking glass servers in various
                regions.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          <h3 class="text-left section-heading" style="margin-bottom: 16px">
            SECURITY
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 px-2 sm:px-0">
          <!-- Agility Card -->
          <NuxtLink to="/security/certificatechecker"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Certificate Checker
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Decode an SSL/TLS certificate to validate intermediate
                certificates.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink to="/security/certificatechaincomposer"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Certificate Chain Composer
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Generate intermediate certificates for an SSL/TLS certificate.
              </p>
            </div>
          </NuxtLink>

          <!-- Reliability Card -->
          <NuxtLink to="/security/sha256"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Reliability Icon -->
                <img src="/images/about/Icon3rd.svg" alt="Reliability Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                SHA256 Generator
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Instantly generate a SHA256 hash of any string or input value.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/security/sslfreaktest"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                SSL FREAK Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Verify if a server is vulnerable to the FREAK attack
                (CVE-2015-0204).
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink to="/security/tlslogjam"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                TLS Logjam Test
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Verify if a server is vulnerable to the Logjam attack
                (CVE-2015-4000).
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- OTHERS Section -->
        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
          <h3 class="text-left section-heading" style="margin-bottom: 16px">
            OTHERS
          </h3>
        </div>
        <!-- Tools Others Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-2 sm:px-0 mb-8 sm:mb-12 md:mb-16">
          <NuxtLink to="/others/epochconverter"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Agility Icon -->
                <img src="/images/about/Icon.svg" alt="Agility Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Epoch Converter
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Convert a unix epoch timestamp to a human readable format.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/others/hexconverter"
            class="relative overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            ">
            <!-- Card Background - bgcard.svg -->
            <div class="absolute hidden sm:block" style="
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
              "></div>
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div class="mb-4 relative" style="padding-top: 4.67px; padding-left: 2.33px">
                <!-- Icon Background - bgcardicon.svg -->
                <div class="absolute -top-2 -left-2 w-8 h-8" style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "></div>
                <!-- Integrity Icon -->
                <img src="/images/about/Group.svg" alt="Integrity Icon" class="relative z-10"
                  style="height: 20.71px; width: auto; color: #1a1925" />
              </div>
              <h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                ">
                Knowledge base
              </h3>
              <p class="text-sm sm:text-base card-description" style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                ">
                Convert a hexadecimal value to decimal and a decimal value to
                hexadecimal.
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>
      <div class="mb-12 sm:mb-8 md:mb-0">
        <SectionsAccessAllFeaturesSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SectionsAccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<style scoped>
/* Section Headings - Mobile Optimized */
.section-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1925;
}

@media (min-width: 768px) {
  .section-heading {
    font-size: 32px;
    margin-bottom: 24px;
  }
}

/* Card Description Text - Mobile Optimized */
.card-description {
  width: 85%;
}

@media (min-width: 640px) {
  .card-description {
    width: 75%;
  }
}

@media (min-width: 768px) {
  .card-description {
    width: 70%;
  }
}

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
