<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Magento CDN Integration</h1>

      <p class="text-[#73737F]">
        Magento is a popular ecommerce solution for online businesses. Magento
        is powering about 1% of the websites worldwide and is developed and
        maintained by Magento, Inc., a company owned by Adobe.
      </p>

      <p class="text-[#73737F]">
        A slow Magento website means less revenue, which is why it's important
        to choose the best CDN for Magento. With KeyCDN, the static content of a
        Magento website is offloaded to the CDN. Assets to an end client are
        always delivered from the closest KeyCDN location, which means less
        latency and higher throughput.
      </p>

      <p class="text-[#73737F]">
        This article shows how to complete both a Magento and Magento 2 CDN
        integration.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How to complete a Magento CDN integration (pre version 2)
      </h2>

      <p class="text-[#73737F]">
        This section shows how to complete a Magento CDN integration with
        KeyCDN. The integration can be done with HTTPS in addition to HTTP.
      </p>

      <ol class="text-[#73737F] flex flex-col gap-4 pl-8">
        <li class="">Create  <a class="underline">Pull zone</a> or a <a class="underline">Push Zone</a>.</li>
        <li class="">
          Log in to the Magento admin panel to start with the Magento CDN
          integration.
        </li>
        <li class="">Go to System > Configuration.</li>

        <img src="/images/Integeration/magento.svg" alt="magento 1st" />
        <li class="">
          Once in "Configuration", go to "General" and click on "Web".
        </li>

        <img src="/images/Integeration/magento2.svg" alt="magento 2nd" />

        <li>
          Select the Unsecure section and enter the following information.
        </li>

        <ul class="text-[#73737F] list-disc flex flex-col gap-4 pl-8">
          <li>
            Base URL: Enter your website URL in the following format:
            http://www.yourwebsite.com
          </li>
          <li>
            Base Link URL: You don't need to change this. It should be
            pre-populated with your Base URL
          </li>
          <li>
            Base Skin URL: Fill in your Pull Zone URL that you get in the KeyCDN
            dashboard including the according folder for skin (e.g.
            http://example-hexid.kxcdn.com/skin/ or
            http://cdn.yourdomain.com/skin/)
          </li>
          <li>
            Base Media URL: Also fill in your Pull Zone URL from the KeyCDN
            dashboard followed by the right folder (e.g.
            http://example-hexid.kxcdn.com/media/ or
            http://cdn.yourdomain.com/media/)
          </li>
          <li>
            Base JavaScript URL: Enter again your KeyCDN URL followed by the
            JavaScript folder /js/ (e.g. http://example-hexid.kxcdn.com/js/ or
            http://cdn.yourdomain.com/js/)
          </li>
          <li>
            Warning: When using CDN, in some cases JavaScript may not run
            properly if CDN is not in your subdomain. If you encounter such
            issues, please change the Base JavaScript URL back to your origin
            server.
          </li>
        </ul>

        <li class="">
          Select the "Secure" section if you want to use HTTPS. We recommend to
          use HTTPS. Before you can use HTTPS, you need to make sure you've
          configured either <a class="underline"> Shared SSL</a> or
          <a class="underline">Custom SSL</a> in the KeyCDN dashboard. Both
          Shared SSL and Custom SSL are free of charge.
        </li>

        <ul class="text-[#73737F] list-disc flex flex-col gap-4 pl-8">
          <li>
            Base URL: Enter your website URL in the following format:
            https://www.yourwebsite.com
          </li>
          <li>
            Base Link URL: You don't need to change this. It should be
            pre-populated with your Base URL
          </li>
          <li>
            Base Skin URL: Fill in your Pull Zone URL that you get in the KeyCDN
            dashboard including the according folder for skin (e.g.
            https://example-hexid.kxcdn.com/skin/ or
            https://cdn.yourdomain.com/skin/)
          </li>
          <li>
            Base Media URL: Also fill in your Pull Zone URL from the KeyCDN
            dashboard followed by the right folder (e.g.
            https://example-hexid.kxcdn.com/media/ or
            https://cdn.yourdomain.com/media/)
          </li>
          <li>
            Base JavaScript URL: Enter again your KeyCDN URL followed by the
            JavaScript folder /js/ (e.g. https://example-hexid.kxcdn.com/js/ or
            https://cdn.yourdomain.com/js/ )
          </li>
          <li>
            Warning: When using CDN, in some cases JavaScript may not run
            properly if CDN is not in your subdomain. If you encounter such
            issues, please change the Base JavaScript URL back to your origin
            server.
          </li>

          <ul class="text-[#73737F] list-disc flex flex-col gap-4 pl-8">
            <li>Use Secure URL in Frontend > Yes</li>
            <li>Use Secure URL in Admin > Yes</li>
          </ul>
        </ul>

        <img src="/images/Integeration/magento3.svg" alt="magento 3rd" />

        <li class="">
          Save all the settings. The Magento CDN integration is completed.
        </li>

        <li class="">
          We recommend to quickly check the HTML code in order to verify if all
          the URLs have been rewritten properly
        </li>
      </ol>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold">
        How to complete a Magento 2 CDN integration
      </h2>

      <ol class="text-[#73737F] pl-8 list-disc mt-6 flex flex-col gap-4">
        <li>
          Create a <a class="underline">Pull Zone</a> or a
          <a class="underline">Push Zone.</a>
        </li>
        <li>Log in to the Magento admin panel.</li>
        <li>Navigate to Stores > Configuration then navigate to Web.</li>
        <li>
          Depending on whether your website is delivered over HTTP or HTTPS you
          will expand either the Base URLs or Base URLs (Secure) option.
        </li>
        <li>
          From here, add your Zone URL or
          <a class="underline">Zone Alias </a> to the Base URL for Static View
          Files field followed by /static/. For example:
          http://example-hexid.kxcdn.com/static/ (remember to add the correct
          protocol if using HTTPS).
        </li>
        <li>
          Similarly, add your Zone URL or <a class="underline">Zone Alias</a> to
          the Base URL for User Media Files followed by /media/ For example:
          http://example-hexid.kxcdn.com/media/ (remember to add the correct
          protocol if using HTTPS).
        </li>

        <img src="/images/Integeration/magento4.svg" alt="magento 4th" />

        <li>Once this is complete save the config.</li>
        <li>
          Use the sidebar to navigate to System > Cache Management and Flush
          Magento Cache.
        </li>

        <img src="/images/Integeration/magento5.svg" alt="magento 5th" />
        <li class="my-4">
          Verify your HTML page source to ensure that you are properly
          delivering static content via the CDN.
        </li>

        <img src="/images/Integeration/magento6.svg" alt="magento 6th" />

        <p class="text-[#73737F]">
          That's it! Now your Magento installation is integrated with KeyCDN.
          Also, make sure to check out our additional 12 tips on how to
          <a class="underline">speed up Magento performance</a>.
        </p>
      </ol>

      <div class="my-8">
        <h2 class="text-[2rem] font-semibold">
          Choosing the best CDN for Magento
        </h2>

        <p class="text-[#73737F]">
          Now that your Magento site is integrated with a CDN, you can begin
          taking advantage of the speed improvements, improved redundancy, and
          better security for your site. When choosing the best CDN for Magento,
          you should ensure that the CDN provider supports the new HTTP/2
          protocol, uses optimized SSD servers, and offers SSL options such as
          free Let's Encrypt certificates.
        </p>

         <p class="text-[#73737F]">
        KeyCDN has also developed a series of tools and maintains a knowledge base. Check these pages as well:
        </p>

        <ul class="text-[#73737F] pl-8 list-disc mt-2 flex flex-col gap-2">
          <li>
          The <a class="underline">Ping Test</a> tool makes pinging IPs from different locations a breeze.
          </li>
          <li>
          <a class="underline">Website Speed</a> Test from different locations lets you analyze the page loading time.
          </li>
          <li>
          HTTP headers can be examined with the KeyCDN <a class="underline">HTTP Header Checker</a> .
          </li>
          <li>
           Our <a class="underline">troubleshooting guide</a>  lets you solve the most common problems around CDNs.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <section
    class="relative overflow-hidden pt-4 mt-4 bg-white h-[450px] sm:h-[550px] md:h-[620px] lg:h-[676px] w-full"
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

    <div class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]">
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
</template>

<style scoped>
.support-btn {
  position: relative;
  padding-left: 39px;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;

  border-radius: 10px;
  padding: 1px 20px;
  cursor: pointer;
}

.support-btn::before {
  content: "";
  position: absolute;
  padding-left: 12px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%23888'><path d='M7 0L1 8h4l-1 6 6-8H7z'/></svg>");
}
.arrow {
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23888'><path fill-rule='evenodd' d='M10 6l6 6H4l6-6z' clip-rule='evenodd'/></svg>");
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
