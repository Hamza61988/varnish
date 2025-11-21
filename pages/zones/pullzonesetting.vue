<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn">Support</button>

      <h1 class="text-5xl font-medium mt-4">Pull Zone Settings</h1>

      <button class="btn2 mt-4">
        <span>Table of contents</span>
        <span class="arrow"></span>
      </button>

      <p class="text-[#73737F] mt-4">
        Here is a list and description of the CDN features that are
        <a class="underline">Pull Zone</a> specific:
      </p>
    </div>
    <div class="w-full mt-4 mb-[8.25rem] flex flex-col gap-[3rem]">
      <span>
        <h2 class="text-[2rem] font-semibold">Origin Shield</h2>
        <p class="text-[#73737F]">
          Predefined shield servers, instead of our edge servers, will pull the
          content from your origin server if enabled. This will reduce the
          traffic on your origin server but adds an additional request from the
          edge server to the shield server if the content has not yet been
          cached. Additional HTTP response header field: X-Shield: active
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Max Expire</h2>
        <p class="text-[#73737F]">
          This value specifies the maximum time for which cacheable HTTP
          documents will be retained without checking the origin server. Applies
          only if NOT defined by the origin either by X-Accel-Expires,
          Cache-Control, or Expires.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Ignore Cache Control</h2>
        <p class="text-[#73737F]">
          Disables processing of Cache-Control response header fields from the
          origin server (ignores X-Accel-Expires, Cache-Control, and Expires).
          Max Expires has precedence if enabled.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Ignore Query String</h2>
        <p class="text-[#73737F]">
          The feature ignore query string tells the cache to reply with a cached
          reply even if the query string differs. From a caching point of view
          the request is treated as if having no query string when this feature
          is enabled.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Forward Host Header</h2>
        <p class="text-[#73737F]">
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
        <h2 class="text-[2rem] font-semibold">Cache Key Scheme</h2>
        <p class="text-[#73737F]">
          <a class="underline">Scheme based caching </a>as requested by the
          client, http or https. The Cache Key Scheme and Origin Shield feature
          are not supported to be both enabled. It is not recommended to enable
          this feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Key Host</h2>
        <p class="text-[#73737F]">
          Dynamic caching based on the host header Host: cdn.example.com that
          matches the Zone Alias. It is required to enable this option if you
          want to host <a class="underline"> multiple sites in one Zone</a>. It
          is not recommended to enable this feature as it will lower the cache
          hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Key Cookie</h2>
        <p class="text-[#73737F]">
          <a class="underline">Cookie variable based caching </a>as received in
          the client request header. It is not recommended to enable this
          feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Key Device</h2>
        <p class="text-[#73737F]">
          <a class="underline">Device-based caching</a> , such as desktop,
          mobile and tablet. It is not recommended to enable this feature as it
          will lower the cache hit ratio
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Key WebP</h2>
        <p class="text-[#73737F]">
          Country code based caching derived from the client Cache WebP images
          based on the Accept: image/webp header. It requires to enable the
          feature<a class="underline">Image Processing</a> or the origin server
          to deliver WebP images.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Key Country</h2>
        <p class="text-[#73737F]">
          Country code based caching derived from the client IP address. Adds
          the X-Country-Code header to the origin request with the two-letter
          country code (ISO 3166-1 alpha-2). It is not recommended to enable
          this feature as it will lower the cache hit ratio.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Brotli</h2>
        <p class="text-[#73737F]">
          Cache <a class="underline">Brotli</a>compressed assets from the origin
          server (Content-Encoding: br). Only enable this feature if your origin
          supports Brotli compression.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Cache Cookies</h2>
        <p class="text-[#73737F]">
          By default, files with cookies are not cacheable. However, enabling
          this option will ignore the presence of cookies and therefore force
          the edge servers to cache these files.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Strip Cookies</h2>
        <p class="text-[#73737F]">
          This feature strips the cookies received from the origin server. The
          client will not receive the Set-Cookie response header.<span
            class="font-bold"
            >It is highly recommended to enable this directive if you enable
            Cache Cookies, otherwise it may create a security risk.</span
          >
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">X-Pull Key</h2>
        <p class="text-[#73737F]">
          Specify a X-Pull request header key to have the possibility to
          restrict access to your origin server (X-Pull: [key]). Default if
          empty: X-Pull: KeyCDN
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Canonical Header</h2>
        <p class="text-[#73737F]">
          Add a canonical header in order to improve SEO. Reference is your
          Origin URL (e.g Link: http://foo.co/a/b.pdf; rel="canonical").
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Robots.txt</h2>
        <p class="text-[#73737F]">
          Block crawlers from indexing the content in your Zone.
        </p>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Optimize for HLS</h2>
        <p class="text-[#73737F]">
          Sets the Zone settings for HTTP Live Streaming (HLS). The index file
          .m3u8 will not be cached and it overwrites the directives as follows:
        </p>
        <ul class="text-[#73737F]">
          <li>Expire: -1 (Cache-Control: no-cache)</li>
          <li>Max Expire: 5 (relevant for the .ts files)</li>
          <li>Ignore Cache Control: enabled</li>
        </ul>
      </span>

      <span>
        <h2 class="text-[2rem] font-semibold">Generic Error Pages</h2>
        <p class="text-[#73737F]">
          Disable this option to forward an error page as received from the
          origin to the client. This applies to 4xx and 5xx errors.
        </p>
      </span>
    </div>
  </div>
</template>

<style scoped>
.support-btn {
  position: relative;
  padding-left: 39px;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border: 1px solid #ddd;
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
.btn2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 15px 20px;
  cursor: pointer;
}

.arrow {
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23888'><path fill-rule='evenodd' d='M10 6l6 6H4l6-6z' clip-rule='evenodd'/></svg>");
}
</style>
