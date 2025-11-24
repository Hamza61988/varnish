<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Joomla CDN Integration</h1>

      <div class="">
        <img src="/images/Integeration/joomlacdn.svg" alt="zone alias" />
      </div>

      <p class="text-[#73737F]">
        <a class="underline">Joomla</a> is the second most popular content
        management systems (CMS) after WordPress. The open source CMS is freely
        available and offers a wide range of extensions to customize a website.
        This guide shows you how to perform a Joomla CDN integration to help
        improve content delivery speeds and reduce latency.
      </p>

      <p class="text-[#73737F]">
        A fast loading Joomla website is essential for user satisfaction, which
        is why it's important to choose the best CDN for Joomla. With KeyCDN,
        the static content of a Joomla site will always be delivered to the end
        client from the closest KeyCDN location. The integration of KeyCDN into
        a Joomla website is very easy thanks to the plugin "CDN for Joomla!".
        The plugin updates the website so that . static assets are loaded from
        KeyCDN and not the origin server anymore.
      </p>

      <p class="text-[#73737F]">
        The free version of the CDN for Joomla extension only supports HTTP
        integrations. If you are using HTTPS for your CDN URL, then you are
        required to buy the paid version from the
        <a class="underline">plugin author</a>. The following tutorial shows how
        to integrate Joomla with KeyCDN using HTTPS
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold">
        How to complete a Joomla CDN integration.
      </h2>
      <div class="pl-8 flex flex-col gap-4">
        <ol class="text-[#73737F] flex flex-col gap-4">
          <li class="">
            It is recommended to backup your CMS before you start with the
            integration.
          </li>
          <li class="">
            Create a <a class="underline">Pull Zone</a> (recommended) or a
            <a class="underline">Push Zone</a> before you start with the Joomla
            CDN integration.
          </li>
          <li class="">Log in to your Joomla admin panel.</li>

          <li class="">
            Download and install the plugin.<br />
            <span
              >a. Download the plugin from here:
              <a class="underline">CDN for Joomla!</a></span
            ><br />
            <span
              >b. Upload "CDN for Joomla!" by navigating to Extensions > Manage
              > Install.</span
            >
          </li>

          <img src="/images/Integeration/joomlacdn1.svg" alt="zone alias" />

          <li class="">
            Go to Extensions > Plugins in the top menu. Choose the plugin "CDN
            for Joomla!". Enter the KeyCDN URL in the field "CDN Domain" e.g.
            https://ssl.demo123.org.
          </li>

          <img src="/images/Integeration/joomlacdn2.svg" alt="zone alias" />

          <li class="">
            We recommend to enable all file types as shown in the screenshot
            below. If there are issues with certain file types after the CDN
            integration, we recommend to disable that specific file type
            temporarily until the issue is solved.
          </li>

          <img src="/images/Integeration/joomlacdn3.svg" alt="zone alias" />

          <li>
            Save all the updates.<br />

          </li>
        </ol>

        
      </div>
        <p class="text-[#73737F] mt-4">
              We recommend to examine the HTML code, in order to check if all
              the URLs have been properly rewritten. All static assets (as
              defined by file type in the plugin) should now be pointing to
              KeyCDN.
            </p>

            <p class="text-[#73737F] mt-4">
              Using the CDN for Joomla! extension is one way to setup a Joomla
              CDN integration, however, some users may already have the
              <a class="underline"> JCH Optimize plugin</a> installed and
              configured. In this case, you don't need to follow the
              instructions above, simply take your Zone URL or custom CDN URL
              and enter it into the CDN/Cookieless Domain section of the JCH
              Optimize plugin.
            </p>
       

          <img src="/images/Integeration/joomlacdn4.svg" alt="zone alias" />

          <p class="text-[#73737F] mt-4">
            This plugin allows you to define multiple domains to parallelize
            downloads across hostnames however this is no longer recommended
            with HTTP/2. Select the file types you want to accelerate using the
            Joomla CDN and check your page's source code to verify if you're
            assets are being called using the CDN URL.
          </p>

          <p class="text-[#73737F] mt-4">
            To learn about other ways to improve your Joomla site's performance,
            check out these 10 tips to speed up Joomla performance
          </p>
    </div>

    <div class="mt-4 flex flex-col gap-4">
         <h2 class="text-[2rem] font-semibold">
Choosing the best Joomla CDN
        </h2>
          <p class="text-[#73737F]">
     Once you have completed the above integration, your Joomla site will
       be integrated with KeyCDN. When choosing the best Joomla CDN, you 
       should ensure that the CDN provider supports the new HTTP/2 protocol, uses optimized SSD servers, and offers SSL options such as free Let's 
      Encrypt certificates. These features will ensure your site is receiving a major performance boost while remaining secure.
      </p>

         <p class="text-[#73737F]">
     Additionally,  KeyCDN users will benefit from our global network of strategically 
      placed points of presence (POPs) around the world. Traffic spikes can  easily 
      be handled by the CDN (instead of the origin server). The KeyCDN  dashboard shows 
      all activities in real time. The raw logs can be  examined in real time, setting filters on certain headers or values  (e.g. 404). There is also a geographic breakdown available showing  transferred data and the number of requests per country. Additionally,  it's possible to forward the raw logs to a server of your choice. The  KeyCDN cache can be purged at any time in the dashboard or 
     via the API,  this can be a specific URL or the whole zone. It only takes a few  seconds until the cache is globally purged.
      </p>


      
           <p class="text-[#73737F]">
  KeyCDN provides you with awesome <a>tools</a>  for content delivery. Also check the following pages:
      </p>


      <div class="pl-8 ">
      <ul class="text-[#73737F] list-disc flex flex-col gap-4">
        <li class="">The KeyCDN <a class="underline">Website Speed Test</a> lets you measure the site speed of a website from various locations.</li>
        <li>In order to examine certain HTTP requests, the KeyCDN <a class="underline">HTTP Header Checker </a>is the ideal tool for it.</li>
        <li><a class="underline">Custom SSL</a> can be used for free.</li>
        <li>Certificates can be verified with the KeyCDN <a class="underline">SSL Certificate Checker</a> </li>
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
