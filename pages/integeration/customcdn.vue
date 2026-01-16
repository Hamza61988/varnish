<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<template>
  <div class="mt-[4.25rem] md:max-w-lg lg:max-w-2xl">
    <div class="w-full flex flex-col gap-4 items-start">
      <h1 class="text-[2rem] md:text-5xl font-medium">Custom CDN Integration</h1>

      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        This article focuses on how to integrate your website with KeyCDN and
        provide you with a better understanding of how to make use of the CDN.
      </p>
    </div>

    <div class="my-4">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold mt-4">
        How to integrate your website with a CDN
      </h2>
      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        It is most common to have HTML pages delivered by the origin server and
        offload all static resources, such as CSS, JavaScript, images, and
        videos, to the CDN. In most cases, the static content accounts for 80%
        or more of a website. Follow the steps below to integrate your website
        with a CDN:
      </p>

      <div class="my-4">
        <div class="pl-8">
          <ol class="text-[#73737F] text-[13px] md:text-[1rem] list-decimal flex flex-col gap-4">
            <li class="">
              Create a <a class="underline">Pull Zone</a> or
              <a class="underline">Push Zone</a> .
            </li>
            <li class="">Get the CDN URL (created in step 1).</li>
            <li class="">
              Identify the resource in your HTML that you want to load from the
              CDN, such as your CSS, JavaScript, and images.
            </li>
            <li>
              Replace the Origin URL with your CDN URL (Zone URL or Zone Alias
              for KeyCDN).
            </li>
          </ol>
        </div>
      </div>

      <div class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> Make sure all pages and other
          dynamic content are delivered by the origin server. In most cases the
          CDN should only deliver static content.
        </h1>
      </div>

      <div class="mt-4">
        <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">Example</p>

        <p class="text-[#73737F] text-[13px] md:text-[1rem]">Origin URL: https://www.example.com</p>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">URL: https://example-hexid.kxcdn.com</p>
      </div>
    </div>

    <div class="mt-[2.3125rem]">
      <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
        Before integrating website with CDN:
      </p>

      <div class="mt-[2.3125rem]">
        <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
          Before integrating website with CDN:
        </p>

        <div
          class="border border-[#D0D0D8] text-[#73737F] text-[13px] md:text-[1rem] rounded-md p-4 mt-2 overflow-x-auto"
        >
          <pre class="whitespace-pre"><code>
&lt;html&gt;
&lt;head&gt;
&lt;link href="https://www.example.com/css/example.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Website Heading&lt;/h1&gt;
&lt;a href="https://www.example.com/news.html"&gt;Link&lt;/a&gt;
&lt;p&gt;Paragraph.&lt;/p&gt;
&lt;img src="https://www.example.com/img/example.jpg" alt="example"&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
        </div>
      </div>

      <div class="mt-[2.3125rem]">
        <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
          After integrating website with CDN:
        </p>

        <div
          class="border border-[#D0D0D8] text-[#73737F] text-[13px] md:text-[1rem] rounded-md p-4 mt-2 overflow-x-auto"
        >
          <pre class="whitespace-pre"><code>
&lt;html&gt;
&lt;head&gt;
&lt;link href="https://example-hexid.kxcdm.com/css/example.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Website Heading&lt;/h1&gt;
&lt;a href="https://www.example.com/news.html"&gt;Link&lt;/a&gt;
&lt;p&gt;Paragraph.&lt;/p&gt;
&lt;img src="https://example-hexid.kxcdm.com/img/example.jpg" alt="example"&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
        </div>
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

pre {
  font-size: 0.875rem; /* text-sm */
}

@media (min-width: 768px) {
  pre {
    font-size: 1rem; /* text-base */
  }
}
</style>
