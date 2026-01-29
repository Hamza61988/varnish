<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
import Title from "../../components/common/Title.vue";
import CodeSnippet from "../../components/common/CodeSnippet.vue";

const beforeCode = `<html>
<head>
<link href="https://www.example.com/css/example.css" rel="stylesheet">
</head>
<body>
<h2>Website Heading</h2>
<a href="https://www.example.com/news.html">Link</a>
<p>Paragraph.</p>
<img src="https://www.example.com/img/example.jpg" alt="example">
</body>
</html>`;

const afterCode = `<html>
<head>
<link href="https://example-hexid.kxcdm.com/css/example.css" rel="stylesheet">
</head>
<body>
<h2>Website Heading</h2>
<a href="https://www.example.com/news.html">Link</a>
<p>Paragraph.</p>
<img src="https://example-hexid.kxcdm.com/img/example.jpg" alt="example">
</body>
</html>`;
</script>

<template>
  <div class="">
    <Title
      upername="support"
      title="Custom CDN Integration"
      subtitle="This article focuses on how to integrate your website with KeyCDN and provide you with a better understanding of how to make use of the CDN."
      pcAlignment="start"
      mobileAlignment="start"
      :fontWeight="500"
    />

    <div class="w-full flex flex-col gap-4 items-start">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">
        How to integrate your website with a CDN
      </h2>
      <p class="text-[#73737F] text-[13px] md:text-[1rem]">
        It is most common to have HTML pages delivered by the origin server and
        offload all static resources, such as CSS, JavaScript, images, and
        videos, to the CDN. In most cases, the static content accounts for 80%
        or more of a website. Follow the steps below to integrate your website
        with a CDN:
      </p>

      <div class="my-4">
        <div class="pl-6">
          <ol
            class="text-[#73737F] text-[13px] md:text-[1rem] list-decimal flex flex-col gap-4"
          >
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

      <div
        class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] border py-5 rounded-2xl px-10"
      >
        <h1 class="">
          <span class="font-bold">Note:</span> Make sure all pages and other
          dynamic content are delivered by the origin server. In most cases the
          CDN should only deliver static content.
        </h1>
      </div>

      <div class="mt-4">
        <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
          Example
        </p>

        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Origin URL: https://www.example.com
        </p>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          URL: https://example-hexid.kxcdn.com
        </p>
      </div>
    </div>

    <div class="mt-[2.3125rem]">
      <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
        Before integrating website with CDN:
      </p>

     

        <CodeSnippet :code="beforeCode" />
  

      <div class="mt-[2.3125rem]">
        <p class="text-[#73737F] text-[13px] md:text-[1rem] font-bold">
          After integrating website with CDN:
        </p>

        <CodeSnippet :code="afterCode" />
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
ul {
  font-family: inter;
}
</style>
