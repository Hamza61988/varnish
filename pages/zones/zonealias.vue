<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium mt-4">Create a Zone Alias</h1>
    </div>

    <div class="flex flex-col gap-4 mt-4">
      <img src="/images/Zones/ZoneAlias.svg" alt="zone alias" />

      <p class="text-[#73737F]">
        The Zone Alias configuration always requires a CNAME record to be added
        in your DNS in addition to adding the Zone Alias in the KeyCDN
        dashboard. The Zone Alias grants access to your Zone by activating the
        specified domain on our network. The CNAME enables the domain name
        resolution to your Zone and is responsible for pointing your Zone Alias
        (e.g. cdn.example.com) to the Zone URL (e.g. example-hexid.kxcdn.com).
      </p>

      <div class="pl-8">
        <ol class="flex flex-col gap-4 text-[#73737F]">
          <li>
            Add a CNAME record in your DNS. This will be your desired Zone Alias
            that points to your Zone URL. For example, create
            cdn.yourwebsite.com as a CNAME record that points to
            example-hexid.kxcdn.com. Check that your new DNS record is active
            with our DNS Checker tool. Please keep in mind DNS changes can take
            some time depending on the TTL.
          </li>
          <li>Log in to the KeyCDN dashboard.</li>
          <li>In the left navigation sidebar click Zone Aliases.</li>
          <li>Click Add Zone Alias.</li>
          <li>
            Define the Zone Alias that matches the CNAME record created in step
            1 (e.g cdn.yourwebsite.com).
          </li>
          <li>Choose the Zone that you want to map the Zone Alias to.</li>
          <li>Click Save.</li>
        </ol>
      </div>

      <p class="text-[#73737F]">
        Here is an example for what it may look like for static resources on
        your website:
      </p>

      <p class="text-[#73737F] mt-4">Without CDN:</p>

      <p class="text-[#73737F] mt-4">
        Commonly, a 403 error will be returned if a CNAME record has been
        created but the corresponding Zone Alias has not been added in the
        KeyCDN dashboard.
      </p>
    </div>

    <div class="mt-4 flex flex-col">
      <h2 class="text-[2rem] font-semibold">Wildcard Zone Alias</h2>
      <p class="text-[#73737F]">
        Defining a wildcard Zone Alias, such as *.example.com, will allow more
        than one subdomain to be pointed towards a Zone URL, for example:
      </p>

      <div class="my-6 pl-8 text-[#73737F]">
        <ul class="list-disc">
          <li>img.example.com</li>
          <li>css.example.com</li>
          <li>js.example.com</li>
        </ul>
      </div>
      <p class="text-[#73737F] mt-4">
        Remember to add a CNAME record to your DNS settings to point the
        wildcard Zone Alias to the Zone URL.
      </p>
      <span class="mt-4">
        <img src="/images/Zones/ZonesAlias2.svg" alt="zone alias" />
      </span>
    </div>

    <div class="mt-4">
      <h2 class="text-[2rem] font-semibold">
        Pointing root domains to your Zone URL
      </h2>
      <p class="text-[#73737F]">
        CNAME records are not supported on root domains (e.g. example.com) as
        they would conflict with the SOA and NS records (<a class="underline"
          >RFC1912</a
        >
        section 2.4: "A CNAME record is not allowed to coexist with any other
        data."). An alternative option is to redirect the root domain to a
        subdomain (e.g. www.example.com). Do the following in your DNS settings:
      </p>

      <div class="pl-8">
        <ol class="flex flex-col gap-4 text-[#73737F]">
          <li>
            Redirect your root domain to its www version with a URL or Forward
            record.
          </li>
          <li>Create a CNAME record for www and point it to your Zone URL.</li>
        </ol>
      </div>
      <p class="text-[#73737F] mt-4">
        Some DNS providers do not support redirects (known as URL or Forward
        records). An alternative option would be using use the free service
        wwwizer.com. We recommend to avoid this approach as it negatively
        impacts performance and generates additional RTTs. Use subdomains
        instead.
      </p>

      <p class="text-[#73737F] mt-4">
        There are DNS providers offering better solutions to this problem such
        as NS1. They call it <a class="underline">ALIAS records </a>(NS1) or
        CNAME Flattening (Cloudflare). This allows the root (naked) domain to be
        pointed to a Zone URL. It is important to note that the CNAME record
        will be masqueraded as an A record
      </p>
    </div>

    <div class="mt-4 flex flex-col">
      <h2 class="text-[2rem] font-semibold">
        Advantages of using a Zone Alias
      </h2>
      <p class="text-[#73737F]">
        There are a few advantages to setting up a Zone Alias as opposed to
        using the KeyCDN Zone URL provided in the dashboard.
      </p>

      <div class="my-6 pl-8 text-[#73737F]">
        <ul class="list-disc">
          <li>
            Using a Zone Alias allows you to setup a generic subdomain such as
            cdn.yourdomain.com, allowing you to keep the same URLs even if you
            point your CNAME record to a different URL in the future (e.g. if
            you want to change CDN providers).
          </li>
          <li>
            The domain will contain keywords relevant to your site, therefore
            your assets are closer bound to your domain which is better in terms
            of <a class="underline">CDN SEO</a> .
          </li>
          <li>
            Using a Zone Alias allows you to take advantage of
            <a class="underline">Let's Encrypt</a> , which provides you with a
            custom SSL/TLS certificate for free.
          </li>
          <li>
            Zone Aliases allow you to view indexed images data using the sitemap
            view in Google Search Console.
          </li>
        </ul>
      </div>

      <div class="mt-4 flex flex-col">
        <h2 class="text-[2rem] font-semibold">
          Disadvantage of using a Zone Alias
        </h2>
        <p class="text-[#73737F]">
          Since Zone Aliases are created using a
          <a class="underline">CNAME</a> , this produces an additional DNS
          lookup. However, if you set your DNS TTL high enough (e.g. greater
          than 3600) there should be little to no affect on speed.
        </p>
      </div>

      <hr class="border-[#00000038] border-t-2 mt-4" />

      <div class="mt-4 flex flex-col">
        <h2 class="text-[25px] text-[#0E84F7] font-semibold">
          Create a CNAME DNS Record in cPanel
        </h2>
        <p class="text-[#73737F] underline">
          Setting up a cPanel CDN combination is easy and can be done in just a
          few steps. If you do not plan to use a Zone Alias (e.g.
          cdn.yourwebsite.com) there is no need to do anything in cPanel and you
          can move on directly to integrating the CDN with your…
        </p>
      </div>

      <div class="mt-4 flex flex-col">
        <h2 class="text-[25px] text-[#0E84F7] font-semibold">
          How to Create a CNAME in Cloudflare
        </h2>
        <p class="text-[#73737F] underline">
          This tutorial explains how to setup a CNAME in Cloudflare that can be
          used with KeyCDN by completing the following steps: Create a Zone
          Alias in the KeyCDN dashboard. If you need HTTPS, enable Custom SSL
          and upload the certificate. Log in to…
        </p>
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
