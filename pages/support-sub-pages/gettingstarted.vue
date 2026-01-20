<template>
  <div>
    <div class="relative z-10 mt-[4.25rem] mb-[146.22px] mx-auto max-w-[855px] px-6">
      <div class="grid grid-cols-1 md:grid-cols-[155.01531982421875px_1fr] gap-[30px]">
        <aside class="space-y-[9.23px] font-medium text-[11.72px]">
          <div style="border: 1.28px solid #00000040"
            class="block w-full text-left text-[#757575] rounded-md px-3 py-2 transition-colors">
            Getting started
          </div>

          <div class="bg-[#EFEFEF59]/35 px-[6.24px] py-[12.93px] flex flex-col gap-[5px] rounded-[9.23px]">
            <NuxtLink to="/support-categories/zones"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Zones</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <NuxtLink to="/support-categories/integrations"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Integrations</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <NuxtLink to="/support-categories/AccountManagment"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Account Management</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <NuxtLink to="/support-categories/troubleshooting"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Troubleshooting</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <NuxtLink to="/support-categories/tutorials"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Tutorials</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>

            <NuxtLink to="/support-categories/glossary"
              active-class="!bg-[#ffffff] !text-[#1F62FF] shadow-[0px_0.92px_1.85px_0px_#00000040] is-active"
              class="group flex items-center justify-between w-full text-left px-3 py-2 text-[#757575] rounded-md transition-all hover:bg-white/50">
              <span>Glossary</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:text-black transition-opacity duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </aside>

        <main class="relative flex flex-col gap-[35px] z-10">
          <div class="flex flex-col items-start text-left gap-4">
<SectionsUpername name="Support Categories" />

            <h1 class="text-[2rem] md:text-5xl font-medium text-[#1A1925]">
              Getting Started
            </h1>

            <p style="font-family: inter" class="text-[#51515E] text-[13px] md:text-[1rem] max-w-xl">
              Setting up a CDN to work with your website is easy and can be done
              in just a few steps.The article
              <a href="#" class="underline text-[#73737F]">How Does a CDN Work</a>
              is a recommended read if you are not yet familiar with a content
              delivery network.
            </p>
          </div>

          <section>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed mb-4">
              Pull Zones are the most commonly used Zone Type and are the
              recommended method for most CDN users. With this method, the CDN
              automatically pulls content from your origin server and caches it
              on our edge servers. Once the content is cached, visitor requests
              will be routed and delivered from the nearest possible edge server
              location.
            </p>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
              To get started with your KeyCDN integration, complete the
              following three steps:
            </p>
          </section>

          <section>
            <h2 class="font-semibold text-[#1A1925] text-[1.5rem] md:text-[2rem] mb-1">
              1. Create your Zone
            </h2>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed mb-4">
              Creating a KeyCDN Zone is easy. Simply follow the steps outlined
              below:
            </p>
            <ol style="font-family: inter"
              class="list-decimal list-inside text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed space-y-2 mb-4">
              <li>Log in to the KeyCDN dashboard.</li>
              <li>In the left navigation sidebar click Zones.</li>
              <li>Click Add Zone.</li>
              <li>Set the Zone Type as pull</li>
              <li>Define the Origin URL (e.g. https://www.yourwebsite.com).</li>
              <li>Click Save.</li>
              <li>
                Wait approximately 5 minutes for the Zone to fully deploy.
              </li>
            </ol>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
              Alternatively, using a
              <a href="#" class="underline">Push Zone</a> is recommended for
              files greater than 10 MB in size and is required for files larger
              than 100 MB because
              <a href="#" class="underline">Pull Zones</a> do not cache anything
              larger than 100 MB.
            </p>
          </section>

          <section>
            <h2 class="font-semibold text-[#1A1925] text-[1.5rem] md:text-[2rem] mb-1">
              2. Check your CDN assets
            </h2>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed mb-4">
              Once your Zone is fully deployed, you'll want to check an asset to
              see if it is properly accessible via the CDN.
            </p>
            <ol style="font-family: inter"
              class="list-decimal list-inside text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed space-y-2 mb-4">
              <li>
                Choose one of your website's static asset URLs (e.g.
                https://www.yourwebsite.com/path/to/example.css).
              </li>
              <li>Replace the origin URL with your new KeyCDN Zone URL.</li>
              <li>
                Access your new Zone URL in a browser; use our Performance Tool,
                or use a curl command to verify the asset returns a 200 status
                (e.g. https://zonename-hexid.kxcdn.com/path/to/example.css)
              </li>
            </ol>

            <div style="border: 1px solid var(--Border-Secondary, #eeeef0)" class="rounded-lg p-5 mb-4 overflow-x-auto">
              <pre style="font-family: Inter" class="text-[14px] text-[#73737F] leading-snug">
curl -I https://zonename-hexid.kxcdn.com/path/to/example.css
<span class="font-bold">HTTP/2 200</span>
server: keycdn-engine
date: Wed, 12 Feb 2020 02:57:19 GMT
content-type: text/css
vary: Accept-Encoding
last-modified: Tue, 11 Feb 2020 12:50:54 GMT
etag: W/"5e42a31a-28663"
expires: Wed, 19 Feb 2020 02:57:19 GMT
cache-control: max-age=604800
x-cache: HIT
x-edge-location: defr</pre>
            </div>

            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
              Once you have verified that your assets are accessible through the
              Zone URL, you can move on to the next step of integrating KeyCDN
              with your website.
            </p>
          </section>

          <section>
            <h2 class="font-semibold text-[#1A1925] text-[1.5rem] md:text-[2rem] mb-1">
              3. Integrate the CDN with your website
            </h2>
            <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed mb-4">
              The following integration guides will help you to quickly
              integrate KeyCDN into your web projects:
            </p>
            <ul style="font-family: inter"
              class="list-disc list-inside text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed space-y-3">
              <li>WordPress integration</li>
              <li>CMS integration guides</li>
              <li>Framework integration guides</li>
              <li>AWS S3 CDN integration</li>
              <li>Custom CDN integration</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
    <AccessAllFeaturesSection class="mt-10" />
  </div>
</template>

<script setup>
import AccessAllFeaturesSection from"~/components/common/AccessAllFeatures.vue";
</script>
