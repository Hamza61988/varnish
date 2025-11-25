<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">PrestaShop CDN Integration</h1>

      <p class="text-[#73737F]">
        <a class="underline">PrestaShop</a> is a free ecommerce solution written
        in PHP. About 250,000 shops worldwide are using PrestaShop. The shop
        solution was initiated in 2005 by French students and is now maintained
        by PrestaShop SA, located in Paris and Miami.
      </p>

      <p class="text-[#73737F]">
        A slow PrestaShop website can have a significant impact on revenue.
        KeyCDN can solve that problem by supercharging PrestaShop websites. Once
        KeyCDN is integrated, the static content of a PrestaShop website is
        delivered from KeyCDN's infrastructure instead of the origin server;
        this will
        <span class="font-bold"
          >significantly lower latency and improve throughput</span
        >. A request from an end client is always routed to the next available
        KeyCDN POP. PrestaShop natively supports a CDN integration, so there are
        no particular PrestaShop addons needed.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">PrestaShop CDN integration</h2>

      <p class="text-[#73737F]">
        This article shows how to complete a <a class="underline">PrestaShop</a> CDN integration with
        KeyCDN.
      </p>

      <ol class="text-[#73737F] flex flex-col gap-4 pl-8">
        <li class="">Create a <a class="underline">Pull Zone</a>.</li>
        <li class="">Log in to the admin panel of PrestaShop.</li>
        <li class="">Go to "Advanced Parameters" and click "Performance"</li>

        <img src="/images/Integeration/prestashop.svg" alt="presta 1st" />

        <li class="">
          Scroll down to the "CCC (Combine, Compress and Cache)" section and
          select the following choices as shown in this screenshot.
        </li>

        <img src="/images/Integeration/presta3.svg" alt="presta 2nd" />

        <li class="">
          Scroll down to the next section called "Media servers (use only with
          CCC)". In the field "Media Server #1" enter your CDN URL that you get
          from the KeyCDN dashboard (e.g. zonename-hexid.kxcdn.com) or
          alternatively you can use a CNAME/Zone Alias (e.g. cdn.domain.com).
        </li>

        <img src="/images/Integeration/presta2.svg" alt="presta 3rd" />

        <li class="">Save all settings</li>

        <li>
          We recommend to check the HTML in order to make the PrestaShop CDN
          integration has been successful and all the URL have been rewritten.
          If there is any issue with the CDN integration, the KeyCDN support is
          available anytime.
        </li>
      </ol>


      <p class="text-[#73737F]">
        The KeyCDN cache can easily be purged via the dashboard or the API. One
        can choose to purge the whole Zone or individual URLs, it only takes a
        few seconds to purge the content globally. The raw logs of the CDN can
        be forwarded to any IP. This allows you to further process and analyze
        the logs. Offloading traffic from the origin server to the CDN will
        significantly lower bandwidth consumption on the origin server. If the
        traffic volume on the origin server should be lowered even further,
        KeyCDN has developed the Origin Shield which lets a POP fetch content
        from other POPs instead of the origin server
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold">
       The benefits of using a CDN for your PrestaShop site
      </h2>

      <p class="text-[#73737F] mt-4">
        Once the PrestaShop CDN integration is completed, there are many benefits:
      </p>

      <ul class="text-[#73737F] pl-8 list-disc mt-4 flex flex-col gap-2">
        <li>
        Access to all of our <a class="underline">strategically placed POPs</a>  worldwide. We ensure that the assets are always loaded from the closest POP to ensure low latency and best throughput.
        </li>
        <li>
         The <a class="underline">pricing</a>  of KeyCDN is very transparent. There is no monthly fee. KeyCDN does not charge for HTTP request and there is no extra fee for HTTPS traffic.
        </li>
        <li>
         KeyCDN also delivers content based on <a class="underline">HTTP/2</a>.  The new protocol brings a number of advantages.
        </li>
     
</ul>


<div  class="mt-4 text-[#73737F]">
      <p>
        KeyCDN has launched awesome <a class="underline">tools</a> and is constantly expanding the <a class="undelrine">knowledge</a> base. Here are some important pages:
      </p>
<ul class="text-[#73737F] pl-8 list-disc mt-4 flex flex-col gap-2">
      <li>
        The <a class="underline">Website Speed Test</a>  is essential for analyzing web performance.
      </li>

      <li>The KeyCDN <a class="underline">HTTP Header Checker</a>  is very useful for examining HTTP headers.</li>
      <li> <a class="underline">Custom SSL</a> can be added to every Zone.</li>
      <li>Certificates can easily be decrypted with the <a class="underline">SSL Certificate Checker</a> .</li>
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
