<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium mt-4">WordPress CDN Integration</h1>

      <p class="text-[#73737F] mt-4">
        This tutorial shows how to integrate a WordPress website with KeyCDN
        using our CDN Enabler plugin.
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <div class="pl-8">
        <ol class="text-[#73737F]">
          <li class="mt-3">Create a <a class="underline">Pull Zone</a>.</li>
          <li class="mt-3">Log in to your WordPress admin dashboard.</li>
          <li class="mt-3">Go to the CDN Enabler settings.</li>

          <li class="mt-3">
            Update the CDN Hostname setting with your
            <a class="underline">Zone Alias</a> (e.g. cdn.example.com) or Zone
            URL (e.g. example-hexid.kxcdn.com).
          </li>
          <li>Click Save Changes and Validate Configuration.</li>
          <li>If applicable, clear your WordPress cache.</li>
        </ol>

        <p class="text-[#73737F] mt-4">
          That's it! We recommend verifying that the URLs have been rewritten
          properly, which can be done by checking the HTML in the page source or
          by running a <a class="underline"> Website Speed Test</a>.
        </p>

        <div
          class="bg-[#FEF9D8] mt-4 text-[#73737F] border py-5 rounded-2xl px-10"
        >
          <h1 class="">
            <span class="font-bold">Note:</span> CDN Enabler will only rewrite
            URLs in the HTML page. It doesn't rewrite URLs invoked in other
            ways, like through CSS or JavaScript files.
          </h1>
        </div>

        <p class="text-[#73737F] mt-4">
          To have the ability to purge the CDN cache from your WordPress
          website, either from the admin bar or <a href="underline">WP-CLI</a> ,
          connect your KeyCDN account with your API key and Zone ID. The API key
          and Zone ID can be obtained from the KeyCDN dashboard.
        </p>

        <p class="text-[#73737F] mt-4">
          For more information about this plugin, like the available settings
          and hooks, please read the
          <a class="underline">CDN Enabler documentation</a>.
        </p>
      </div>

      <hr class="border-[#00000038] border-t-2 mt-4" />
    </div>

    <div class="my-4">
      <h2 class="text-[2rem] font-semibold">WordPress CDN Enabler Plugin</h2>

      <p class="text-[#73737F]">
        The WordPress CDN Enabler plugin is a content delivery network (CDN)
        integration plugin that rewrites URLs, such as those serving CSS,
        JavaScript, and images, to be served by a CDN. It supports including
        URLs in the rewrite by file extension and…
      </p>
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
