<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Typo3 CDN Integration</h1>

      <p class="text-[#73737F]">
        Typo3 is an open source CMS used primarily by enterprises or for
        Intranet purposes. With a large, active community of 100,000 people in
        48 countries, this CMS offers great opportunities for both beginners and
        experts. Using a CDN to help further improve the global performance of
        your Typo3 installation, is an easy way to help keep your users happy by
        providing them with a better user experience.
      </p>

      <p class="text-[#73737F]">
        This tutorial guides you through the Typo3 CDN integration with the
        Content Replacer extension which is compatible with both Typo3 LTS 7 and
        8.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Typo3 CDN integration</h2>

      <p class="text-[#73737F]">
        This section shows how to complete a Magento CDN integration with
        KeyCDN. The integration can be done with HTTPS in addition to HTTP.
      </p>

      <ol class="text-[#73737F] flex flex-col gap-4 pl-8">
        <li class="">
          Create a Pull Zone before you start with the Typo3 CDN integration.
        </li>
        <li class="">Log in to the Typo3 backend.</li>
        <li class="">
          Navigate to the Extension page and install the Content Replacer
          extension from content_replacer.
        </li>

        <img src="/images/Integeration/typo.svg" alt="typo 1st" />

        <img src="/images/Integeration/typo2.svg" alt="typo 2nd" />
        <li class="">
          Navigate to the template page and edit the template located at the
          root level
        </li>

        <img src="/images/Integeration/typo3.svg" alt="typo 3rd" />

        <li class="">
          Scroll down to Setup and enter the following code (be sure to replace
          example-hexid.kxcdn.com with your own Zone URL or Zone Alias):
        </li>

      <div class="w-full border border-[#D0D0D8] shadow rounded-xl p-4 bg-white">
  <pre><code>
config.tx_ja_replacer {
  search {
    1="typo3temp/
    3="typo3conf/
  }

  replace {
    1="https://example-hexid.kxcdn.com/typo3temp/
    2="https://example-hexid.kxcdn.com/fileadmin/
    3="https://example-hexid.kxcdn.com/typo3conf/
  }
}
  </code></pre>
</div>

        <img src="/images/Integeration/typo4.svg" alt="typo 4rd" />

        <li class="">
          Save your template, flush the frontend and general caches and verify
          your page source to ensure your assets are being delivered through the
          KeyCDN URL.
        </li>
      </ol>

      <img src="/images/Integeration/typo5.svg" alt="typo 5th" />

      <p class="text-[#73737F]">
        Another Typo3 CDN integration option is to use the cs_cdn extension
        which is based on smile_cdn. This extension replaces local file
        references with references to remote files, overwrites file links, and
        can delete KeyCDN files from cache. Read the TYPO3 Performance article
        for more information from the authors.
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold">
        Supercharging Typo3 with a CDN integration
      </h2>

      <p class="text-[#73737F] mt-4">
        With KeyCDN, supercharging your Typo3 Installation is done in a variety
        of ways.
      </p>

      <ul class="text-[#73737F] pl-8 list-disc mt-6 flex flex-col gap-2">
        <li>
          KeyCDN offers HTTP/2 support on all edge servers to help improve speed
          and optimize content delivery.
        </li>
        <li>
          Access to a global network of POPs allows site owners to deliver
          content to users faster. For large enterprise customers, this not only
          helps reduce latency but is also cheaper.
        </li>
        <li>
          Instant Purge ability allows customers to purge by URL or purge
          everything. It only takes a few seconds until the cache is globally
          purged on all POPs.
        </li>

       
      </ul>

       <p class="mt-4 text-[#73737F]">
          KeyCDN also offers many additional features and provides a list of
          useful tools to do everything from site speed tests to HTTP/2 server
          checks, and much more.
        </p>
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
