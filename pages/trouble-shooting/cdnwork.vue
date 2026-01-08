<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col gap-4 items-start">
 
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
          class=" border border-[#E5E7EB] p-4 rounded text-[#73737F] text-sm overflow-x-auto whitespace-nowrap"
        >
          curl -I https://www.keycdn.com/img/example.jpg
        </div>
        <div
          class="w-full border border-[#D0D0D8] text-[#73737F] text-sm shadow rounded-xl p-4 "
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

    <Teleport to="#full-width-section">
 <AccessAllFeaturesSection class="mt-10"/>

</Teleport>

</template>

<style scoped>
p, ol, ul, pre, code {
  font-family: inter;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
