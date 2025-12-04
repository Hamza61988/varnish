<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Drupal CDN Integration</h1>

      <p class="text-[#73737F]">
        Drupal is a free, open source CMS based on PHP. About 2.1% of the
        websites globally are powered by Drupal. Like other content management
        systems, it offers a wide range of modules that can be integrated into
        Drupal websites.
      </p>

      <p class="text-[#73737F]">
        Slow Drupal website? Varnish can change that. Here's why: Varnish will
        cache the static files of a Drupal website all around the world. In
        addition to optimizing a Drupal website, it's essential to integrate a
        CDN for better performance. Varnish will cache the assets as long as
        specified in the HTTP headers defined by the origin server.
      </p>

      <p class="text-[#73737F]">
        How does the Drupal CDN module work? The module will change the URL of
        static assets. The new URL will point to Varnish instead of the origin
        server. There is no redirection taking place, the URL will be rewritten
        to the Varnish domain. An example would be:
      </p>

      <ul class="list-disc text-[#73737F] pl-8">
        <li class="">
          URL to the origin server: https://www.yourwebsite/drupalfolder/pic.jpg
        </li>
        <li>
          New URL to Varnish:
          https://example-hexid.kxcdn.com/drupalfolder/pic.jpg
        </li>
      </ul>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Let's get started with the Drupal CDN Integration
      </h2>

      <p class="text-[#73737F]">
        This tutorial shows how to complete a Drupal CDN integration with
        Varnish.
      </p>

      <ol class="text-[#73737F] flex flex-col gap-4 pl-8">
        <li class="">
          Create a Pull Zone before you start with the Drupal CDN integration. A
          Push Zone would work as well but it's not recommended here.
        </li>
        <li class="">
          Click on the menu item "Modules", then click "Install New Module".
        </li>
        <li class="">
          Go to Extend > Install new module > Install from a URL, enter the CDN
          Module URL: http://ftp.drupal.org/files/projects/cdn-8.x-3.2.zip
          (check the official Drupal CDN module for the lastest version) and
          click "Install".
        </li>

        <img src="/images/Integeration/drupalcdn.svg" alt="drupals 1st" />
        <li class="">
          Go to the Extend page and under Web Services select both "CDN" and
          "CDN UI" then click Install.
        </li>

        <img src="/images/Integeration/drupalcdn2.svg" alt="drupals 2nd" />

        <li class="">
          Navigate to Configure > Web Services > CDN Integration. Set the CDN
          status to enabled and enter your CDN URL that you get from the KeyCDN
          dashboard (e.g. https://example-hexid.kxcdn.com). You can also use
          your Zone Alias (e.g. http://cdn.yoursite.com). Save the changes.
        </li>

        <img src="/images/Integeration/drupalcdn3.svg" alt="drupals 3rd" />

        <p class="text-[#73737F]">
          The setting "Far Future expiration" will define higher caching values
          for the assets (valid for KeyCDN, as well as the client's browser).
          Longer cached assets will result in less request to the CDN and the
          origin server, this can further improve the loading time.
          Alternatively, if you want to define higher caching values for assets,
          we recommend to do so in the KeyCDN dashboard for this specific Zone.
          Please note that content cached by KeyCDN can be purged anytime, but
          content cached by a browser cannot be purged.
        </p>

        <li class="">
          A red warning box appears. Click on "Aggregate and compress CSS
          files". Within the Bandwidth Optimization box, check Aggregate and
          compress CSS files and Aggregate JavaScript files, then save the
          configuration.
        </li>

        <img src="/images/Integeration/drupalcdn4.svg" alt="drupals 4rth" />

        <li class="">
          We always recommend checking the changes in the HTML code. Make sure
          the URLs have been rewritten properly.
        </li>

        
      </ol>

      <p class="text-[#73737F]">
          That's it. The Drupal CDN integration is completed. If there are any
          issues after the CDN integration, the KeyCDN support can be contacted
          anytime
        </p>
    </div>

<div class="mt-[2.3125rem]">
  <h2 class="text-[2rem] font-semibold">
    The benefits of using Varnish with Drupal
  </h2>

  <p class="text-[#73737F] mt-4">
    Once Varnish is integrated into a Drupal site, there are lots of advantages to benefit from:
  </p>

  <ul class="text-[#73737F] pl-8 list-disc mt-6 flex flex-col gap-2">
    <li>Access to our complete network of POPs. Content is always served from the closest location to the end users.</li>
    <li>Detailed statistics can be monitored in the Varnish dashboard.</li>
    <li>Varnish supports HTTP/2 for even faster content delivery. There is no special configuration needed to take advantage of the new protocol.</li>
  </ul>

  <div class="my-8">

  <p class="text-[#73737F] ">
    Varnish also offers great <a href="#" class="underline">tools</a> and an up to date 
    <a href="#" class="underline">knowledge base</a>. Here some useful pages:
  </p>

  <ul class="text-[#73737F] pl-8 list-disc mt-2 flex flex-col gap-2">
    <li>
      The <a href="#" class="underline">Website Speed Test</a> from Varnish lets you analyze the loading time of a website.
    </li>
    <li>
      When it comes to HTTP headers, the Varnish 
      <a href="#" class="underline">HTTP Header Checker</a> is the perfect tool.
    </li>
    <li>
      <a href="#" class="underline">Custom SSL</a> is free for everyone, just upload your certificate.
    </li>
    <li>
      The <a href="#" class="underline">SSL Certificate Checker</a> lets you easily verify certificates.
    </li>
  </ul>
  </div>
</div>

  </div>

<AccessAllFeaturesSection class="mt-10"/>
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
