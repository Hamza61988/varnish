<script setup lang="ts">
import AccessAllFeaturesSection from"~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <h1 class="text-[2rem] md:text-5xl font-medium">PrestaShop CDN Integration</h1>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        <a class="underline">PrestaShop</a> is a free ecommerce solution written
        in PHP. About 250,000 shops worldwide are using PrestaShop. The shop
        solution was initiated in 2005 by French students and is now maintained
        by PrestaShop SA, located in Paris and Miami.
      </p>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
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
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">PrestaShop CDN integration</h2>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        This article shows how to complete a
        <a class="underline">PrestaShop</a> CDN integration with KeyCDN.
      </p>

      <ol class="text-[#73737F] text-[13px] md:text-[1rem] flex flex-col gap-4 pl-8">
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

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
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
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">
        The benefits of using a CDN for your PrestaShop site
      </h2>

      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        Once the PrestaShop CDN integration is completed, there are many
        benefits:
      </p>

      <ul class="text-[#73737F] text-[13px] md:text-[1rem] pl-8 list-disc mt-4 flex flex-col gap-2">
        <li>
          Access to all of our
          <a class="underline">strategically placed POPs</a> worldwide. We
          ensure that the assets are always loaded from the closest POP to
          ensure low latency and best throughput.
        </li>
        <li>
          The <a class="underline">pricing</a> of KeyCDN is very transparent.
          There is no monthly fee. KeyCDN does not charge for HTTP request and
          there is no extra fee for HTTPS traffic.
        </li>
        <li>
          KeyCDN also delivers content based on <a class="underline">HTTP/2</a>.
          The new protocol brings a number of advantages.
        </li>
      </ul>

      <div class="mt-4 text-[#73737F] text-[13px] md:text-[1rem]">
        <p>
          KeyCDN has launched awesome <a class="underline">tools</a> and is
          constantly expanding the <a class="undelrine">knowledge</a> base. Here
          are some important pages:
        </p>
        <ul class="text-[#73737F] text-[13px] md:text-[1rem] pl-8 list-disc mt-4 flex flex-col gap-2">
          <li>
            The <a class="underline">Website Speed Test</a> is essential for
            analyzing web performance.
          </li>

          <li>
            The KeyCDN <a class="underline">HTTP Header Checker</a> is very
            useful for examining HTTP headers.
          </li>
          <li>
            <a class="underline">Custom SSL</a> can be added to every Zone.
          </li>
          <li>
            Certificates can easily be decrypted with the
            <a class="underline">SSL Certificate Checker</a> .
          </li>
        </ul>
      </div>
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
</style>
