<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
 
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
