<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <h1 class="text-[2rem] md:text-5xl font-medium mt-4">Pull Zone Settings</h1>

      <button class="btn2 mt-4">
        <span>Table of contents</span>
      </button>

      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        Here is a list and description of the CDN features that are
        <a class="underline">Pull Zone</a> specific:
      </p>
    </div>
    <div class="w-full mt-4 mb-[8.25rem] flex flex-col gap-[3rem]">
      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Origin Shield</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Predefined shield servers, instead of our edge servers, will pull the
          content from your origin server if enabled. This will reduce the
          traffic on your origin server but adds an additional request from the
          edge server to the shield server if the content has not yet been
          cached. Additional HTTP response header field: X-Shield: active
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Max Expire</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          This value specifies the maximum time for which cacheable HTTP
          documents will be retained without checking the origin server. Applies
          only if NOT defined by the origin either by X-Accel-Expires,
          Cache-Control, or Expires.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Ignore Cache Control</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Disables processing of Cache-Control response header fields from the
          origin server (ignores X-Accel-Expires, Cache-Control, and Expires).
          Max Expires has precedence if enabled.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Ignore Query String</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          The feature ignore query string tells the cache to reply with a cached
          reply even if the query string differs. From a caching point of view
          the request is treated as if having no query string when this feature
          is enabled.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Forward Host Header</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Commonly used for full site acceleration, this option forwards the
          Host header Host: www.example.com to the origin server as received
          from the client instead of the host from the origin URL.
        </p>
        <img
          src="/images/Zones/ForwardHost.svg"
          alt="BEST CDN AWARD"
          class=""
        />
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key Scheme</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          <a class="underline">Scheme based caching </a>as requested by the
          client, http or https. The Cache Key Scheme and Origin Shield feature
          are not supported to be both enabled. It is not recommended to enable
          this feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key Host</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Dynamic caching based on the host header Host: cdn.example.com that
          matches the Zone Alias. It is required to enable this option if you
          want to host <a class="underline"> multiple sites in one Zone</a>. It
          is not recommended to enable this feature as it will lower the cache
          hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key Cookie</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          <a class="underline">Cookie variable based caching </a>as received in
          the client request header. It is not recommended to enable this
          feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key Device</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          <a class="underline">Device-based caching</a> , such as desktop,
          mobile and tablet. It is not recommended to enable this feature as it
          will lower the cache hit ratio
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key WebP</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Country code based caching derived from the client Cache WebP images
          based on the Accept: image/webp header. It requires to enable the
          feature<a class="underline">Image Processing</a> or the origin server
          to deliver WebP images.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Key Country</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Country code based caching derived from the client IP address. Adds
          the X-Country-Code header to the origin request with the two-letter
          country code (ISO 3166-1 alpha-2). It is not recommended to enable
          this feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Brotli</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Cache <a class="underline">Brotli</a>compressed assets from the origin
          server (Content-Encoding: br). Only enable this feature if your origin
          supports Brotli compression.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Cache Cookies</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          By default, files with cookies are not cacheable. However, enabling
          this option will ignore the presence of cookies and therefore force
          the edge servers to cache these files.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Strip Cookies</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          This feature strips the cookies received from the origin server. The
          client will not receive the Set-Cookie response header.<span
            class="font-bold"
            >It is highly recommended to enable this directive if you enable
            Cache Cookies, otherwise it may create a security risk.</span
          >
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">X-Pull Key</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Specify a X-Pull request header key to have the possibility to
          restrict access to your origin server (X-Pull: [key]). Default if
          empty: X-Pull: KeyCDN
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Canonical Header</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Add a canonical header in order to improve SEO. Reference is your
          Origin URL (e.g Link: http://foo.co/a/b.pdf; rel="canonical").
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Robots.txt</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Block crawlers from indexing the content in your Zone.
        </p>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Optimize for HLS</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Sets the Zone settings for HTTP Live Streaming (HLS). The index file
          .m3u8 will not be cached and it overwrites the directives as follows:
        </p>
        <ul class="text-[#73737F] text-[13px] md:text-[1rem]">
          <li>Expire: -1 (Cache-Control: no-cache)</li>
          <li>Max Expire: 5 (relevant for the .ts files)</li>
          <li>Ignore Cache Control: enabled</li>
        </ul>
      </span>

      <span>
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">Generic Error Pages</h2>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Disable this option to forward an error page as received from the
          origin to the client. This applies to 4xx and 5xx errors.
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

<style scoped>
p,
ol,
ul {
  font-family: inter;
}
.btn2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: #73737f;

  border-radius: 6px;
  padding: 15px 20px;
  cursor: pointer;
  box-shadow: 0px 0.5px 0.5px 0px #07011308;

  box-shadow: 0px 1px 1px -0.5px #07011308;

  box-shadow: 0px 2px 2px -1px #07011308;

  box-shadow: 0px 3px 3px -1.5px #07011308;

  box-shadow: 0px 0px 0px 1px #1a192514;
}
</style>
