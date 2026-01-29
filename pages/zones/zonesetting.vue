<template>
    <div class="">

    <Title
     upername="support"
      title="Zone Settings"
      subtitle="KeyCDN's Zones come with a number of configurable Zone settings. Here is a list and description of the CDN features for both Push and Pull Zones"
      :showTableOfContents="true"
      pcAlignment="start"
      mobileAlignment="start"
      :fontWeight="500"
    />
<div class="w-full mt-4  flex flex-col gap-[3rem]">

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Image Processing</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">Image Processing transforms and optimizes images with simple URL parameters.</p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Force Download</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Forces content to download instead of opening. The following response header will be set:
            Content-Disposition: Attachment
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">CORS</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Enables cross-origin resource sharing <a class="underline">(CORS)</a>. This will set the header to: Access-Control-Allow-Origin "*".
            Make sure this option is enabled if you are using resources such as fonts, CSS files, and icons from another domain.
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Gzip</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Enables Gzip style="font-family: inter;" compression on text/plain, text/css, text/js, text/javascript, text/xml, text/*-component,
            application/json, application/x-javascript, application/javascript, application/xml,
            application/x-mms, application/atom+xml, application/vnd.xm...
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Expire</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Adding or modifying the Expires and Cache-Control response header fields that are sent to the client if the
            response code equals 200, 201, 204, 206, 300, 302, 303, 304, or 307. This setting overrides the header
            received from the origin in case of a Pull Zone. The expire value only has an impact on the web browser cache
            and not on the KeyCDN cache.
        </p>
        <ul class="pl-6 gap-4 flex flex-col list-disc">
            <li class="text-[#73737F] text-[13px] md:text-[1rem]">-1: Cache-Control: no-cache</li>
            <li class="text-[#73737F] text-[13px] md:text-[1rem]">0: Push Zone: disabled </br> 0: Push Zone: disabled Pull Zone: as received from the origin (header honoring)</li>
            <li class="text-[#73737F] text-[13px] md:text-[1rem]">>0: Cache-Control: max-age=t, where t is the time specified in the directive in minutes converted to seconds</li>
          
        </ul>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Block Bad Bots</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">Block bad bots (returns a 451 Unavailable For Legal Reasons response status).</p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Allow Empty Referrer</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">Allow requests with an empty Referrer request header value if one or more <a class=" underline"> Zone Referrer</a> is active.</p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Block Referrer</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Block requests with a Referrer request header value matching a Zone Referrer
            (returns a 403 Forbidden response status).
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Secure Token</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Restrict access to all the files within this Zone by <a class="underline"> secure access tokens</a>. This defines a time interval for
            which the specified Zone URLs should be accessible. Once it expires, the URLs will return a 403 Forbidden status.
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Shared SSL</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">Enables the wildcard certificate for this Zone (https://*.kxdcdn.com).</p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Custom SSL</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
           <a class="underline">Custom SSL</a>  is fully supported (also known as private SSL). They reflect one or more Zone Aliases
            (e.g. https://example.yourdomain.com)
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Let's Encrypt SSL</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Automatically creates a certificate for your Zone Alias (e.g. https://cdn.example.com).
            Limited to only one Zone Alias.
        </p>
    </span>

    <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Force SSL</h2>
        <p style="font-family: inter;" class="text-[#73737F] text-[13px] md:text-[1rem]">
            Redirects HTTP style="font-family: inter;" requests to HTTPS (returns a 301 Moved Permanently response status).
        </p>
    </span>

</div>

    </div>
      <ClientOnly>
      <Teleport to="#full-width-section">
  <svg
    class="image-processing-bg hidden md:flex"
    width="691"
    height="202"
    viewBox="0 0 691 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M662.785 573.706C685.376 425.8 661.407 281.837 590.396 218.417C507.73 144.588 361.315 179.909 150.391 445.226C271.485 -512.328 -184.359 515.654 -66.8792 60.2144"
      stroke="#EEEEF0"
      stroke-width="40"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    </svg>
</Teleport>
</ClientOnly>
</template>

<script setup>
import Title from '../../components/common/Title.vue';
</script>

<style scoped>
  p,ol,ul {
  font-family: inter;
}


</style>
