<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <h1 class="text-5xl font-medium">CDN Error Codes</h1>

      <p class="text-[#73737F]">
        Error pages will not be cached, therefore only 200, 301, and 302
        responses will be cached. KeyCDNs error pages show either a black or
        blue error code font color. All other error pages are coming from your
        origin server.
      </p>
    </div>
    <div class="mt-[2.3125rem] flex flex-col gap-4 mb-20">
      <h2 class="text-[2rem] font-semibold">400 Bad Request</h2>
      <p class="text-[#73737F]">
        In most of the cases a malformed HTTP request (e.g. empty requests by
        load balancers / health checks). A certain number is normal. Learn more
        about how to
        <a class="underline">avoid a bad request</a>.
      </p>

      <h2 class="text-[2rem] font-semibold">403 Forbidden</h2>
      <p class="text-[#73737F]">
        It is prohibited to access the requested asset. A possible reason is a
        wrong URL or the Secure Token is not valid. Learn more about
        <a class="underline">403 Forbidden</a> errors.
      </p>

      <h2 class="text-[2rem] font-semibold">404 Not Found</h2>
      <p class="text-[#73737F]">
        The content either does not exist or has been moved. Learn more about
        <a class="underline">404 Not Found</a> errors.
      </p>

      <h2 class="text-[2rem] font-semibold">405 Method Not Allowed</h2>
      <p class="text-[#73737F]">
        The method is not allowed. A Push Zone only supports the GET and HEAD
        methods. Learn more about
        <a class="underline">405 Method Not Allowed</a> errors.
      </p>

      <h2 class="text-[2rem] font-semibold">410 Gone</h2>
      <p class="text-[#73737F]">
        The <a class="underline">Secure Token</a> has expired.
      </p>

      <h2 class="text-[2rem] font-semibold">
        451 Unavailable For Legal Reasons
      </h2>
      <p class="text-[#73737F]">
        A <a class="underline">bad bot</a> which is blocked hits a KeyCDN edge
        server.
      </p>

      <h2 class="text-[2rem] font-semibold">500 Origin Error</h2>
      <p class="text-[#73737F]">
        Our edge server was not able to pull the content from your origin
        server. Either your origin server is not reachable or firewall rules
        prevented the connection. The status code 500 is a generic error
        message, which is thrown if there is a
        <a class="underline">502 Bad Gateway</a> or a
        <a class="underline">504 Gateway Timeout</a>.
      </p>
    </div>
  </div>

  <ClientOnly>
    <Teleport to="#full-width-section">
      <svg
        class="image-processing-bg"
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

ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
