<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col gap-4 items-start">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Check if CDN Working</h1>

      <img alt="cdn work" src="/images/Trouble-shoot/cdnwork.svg" />
    </div>

    <div class="mt-4 flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Integrating your application with a CDN
      </h2>
      <p class="text-[#73737F]">
        Before verifying that your CDN is properly set up, first double check
        your CMS or Framework's CDN integration guide. If you're integrating
        your application with KeyCDN, we have a variety of guides available
        which outline the process step by step:
      </p>
      <ul class="list-disc pl-8 text-[#73737F] flex flex-col gap-4">
        <li>CMS integration guides</li>
        <li>Framework integration guides</li>
      </ul>
    </div>

    <div class="mt-4 flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Checking if your CDN is integrated
      </h2>
      <p class="text-[#73737F]">
        Once you've carefully followed each step of the integration process for
        your CMS or framework, you should check if the CDN has been properly
        integrated with your site. There are a few ways to do this. First of
        all, take note of which URL you used during the integration process, was
        it the default Zone URL (e.g. example-hexid.kxcdn.com) or did you
        configure a <a class="underline">Zone Alias</a> (e.g. cdn.yourwebsite.com). This is important as
        this URL is what you will need to look for in the methods below.
      </p>
      <ol class="list-disc pl-8 text-[#73737F] flex flex-col gap-4">
        <li>
          The first method to check if your CDN is integrated with your site is
          to run a site speed test. Choose any location to run it from and then
          analyze the URLs of your site's static assets.
        </li>
        <img alt="cdn work" src="/images/Trouble-shoot/cdnwork2.svg" />
        <p class="text-[#73737F]">
          Are these URLs showing the CDN URL you defined during the integration
          process or are they your origin URL? If your static assets are still
          being delivered from your origin URL you'll need to double check the
          integration guide and ensure you've followed each step.
        </p>
        <li>
          The second way to check if your CDN is integrated is by inspecting the
          page source of your site. In Chrome, simply right-click on your page
          and select "View Page Source". This will open another window
          displaying all of your site's HTML.
        </li>
        <img alt="cdn work" src="/images/Trouble-shoot/cdnwork3.svg" />

        <p class="text-[#73737F]">
          From here, browse through the HTML and look for signs of static assets
          (e.g. ending with .css, .js, .png, etc) If the URL used to deliver
          those assets is the CDN URL you defined during the integration process
          you've successfully integrated a CDN with your application.
        </p>
      </ol>
    </div>

    <div class="mt-[2.7rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Checking if your CDN is caching content
      </h2>
      <p class="text-[#73737F]">
        Once you've confirmed that the CDN is properly integrated into your
        site, you'll want to ensure that it is delivering cached content as
        expected. In certain cases (such as when there is no Content-Length
        header present) the CDN won't properly cache your content, resulting in
        an X-Cache: MISS. Although the CDN will be integrated, it won't help
        improve your speed if this is the case.
      </p>

      <p class="text-[#73737F]">
        To ensure your CDN is caching content you should check the HTTP headers
        of one of your static assets to ensure it is returning a HIT response.
        In the case of KeyCDN, we define this with the X-Cache header as
        mentioned above. To ensure the CDN is returning a HIT response, you may
        need to reload the content a few times. To verify this, use one of the
        methods below:
      </p>
    </div>

    <div class="">
      <ol class="text-[#73737F] flex flex-col gap-4">
        <li class="">
          Perform a curl command on one of your assets, for example:
        </li>
        <div
          class="bg-white border border-[#E5E7EB] p-4 rounded text-[#73737F] text-sm overflow-x-auto whitespace-nowrap"
        >
          curl -I https://www.keycdn.com/img/example.jpg
        </div>
        <div
          class="w-full border border-[#D0D0D8] text-[#73737F] text-sm shadow rounded-xl p-4 bg-white"
        >
          <pre><code>
HTTP/2 200 
server: keycdn-engine 
date: Wed, 15 Jun 2022 06:43:47 GMT 
content-type: image/jpeg 
content-length: 195025 
last-modified: Thu, 16 Jul 2020 07:06:27 GMT 
vary: Accept-Encoding 
etag: "5f0ffc73-2f9d1" 
expires: Wed, 22 Jun 2022 06:43:47 GMT 
cache-control: max-age=604800 
strict-transport-security: max-age=31536000; includeSubdomains; preload 
content-security-policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: 
x-frame-options: SAMEORIGIN 
x-xss-protection: 1; mode=block 
x-content-type-options: nosniff 
referrer-policy: no-referrer-when-downgrade 
x-cache: HIT 
x-edge-location: chzh 
access-control-allow-origin: * 
accept-ranges: bytes
  </code></pre>
        </div>

        <li class="">
          Run a site speed test and verify the X-Cache response header (you may
          need to run this 2-3 times):
        </li>

        <img alt="cdn work4" src="/images/Trouble-shoot/cdnwork4.svg" />

        <p class="text-[#73737F]">
          Regardless of the method you choose above, be sure to run the curl
          command or site speed test a few times so that the edge server can
          properly cache and deliver the static asset. This is essential,
          especially said asset has never been requested before since
          integrating the CDN
        </p>
      </ol>
    </div>

    <div class="mt-[2.7rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Summary</h2>
      <p class="text-[#73737F]">
        As demonstrated in this article, there are a few different ways to check
        if a CDN is working. They're all pretty simple and regardless of which
        method you choose, you'll be able to accurately determine whether your
        CDN is properly integrated or not.
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
