<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <h1 class="text-[2rem] md:text-5xl font-medium">Typo3 CDN Integration</h1>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        Typo3 is an open source CMS used primarily by enterprises or for
        Intranet purposes. With a large, active community of 100,000 people in
        48 countries, this CMS offers great opportunities for both beginners and
        experts. Using a CDN to help further improve the global performance of
        your Typo3 installation, is an easy way to help keep your users happy by
        providing them with a better user experience.
      </p>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        This tutorial guides you through the Typo3 CDN integration with the
        Content Replacer extension which is compatible with both Typo3 LTS 7 and
        8.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Typo3 CDN integration</h2>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        This section shows how to complete a Magento CDN integration with
        KeyCDN. The integration can be done with HTTPS in addition to HTTP.
      </p>

      <ol class="text-[#73737F] text-[13px] md:text-[1rem] flex flex-col gap-4 pl-8">
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

        <div
          class="w-full border border-[#D0D0D8] shadow rounded-xl p-4 bg-white"
        >
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

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        Another Typo3 CDN integration option is to use the cs_cdn extension
        which is based on smile_cdn. This extension replaces local file
        references with references to remote files, overwrites file links, and
        can delete KeyCDN files from cache. Read the TYPO3 Performance article
        for more information from the authors.
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">
        Supercharging Typo3 with a CDN integration
      </h2>

      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        With KeyCDN, supercharging your Typo3 Installation is done in a variety
        of ways.
      </p>

      <ul class="text-[#73737F] text-[13px] md:text-[1rem] pl-8 list-disc mt-6 flex flex-col gap-2">
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

      <p class="mt-4 text-[#73737F] text-[13px] md:text-[1rem]">
        KeyCDN also offers many additional features and provides a list of
        useful tools to do everything from site speed tests to HTTP/2 server
        checks, and much more.
      </p>
    </div>
  </div>

  <ClientOnly>
    <Teleport to="#full-width-section">
      <AccessAllFeaturesSection class="mt-10" />
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
p,
ol,
ul,
pre,
code {
  font-family: inter;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
