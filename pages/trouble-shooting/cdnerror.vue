<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

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
    In most of the cases a malformed HTTP request (e.g. empty requests by load balancers / health checks). 
    A certain number is normal. Learn more about how to 
    <a class="underline">avoid a bad request</a>.
  </p>

  <h2 class="text-[2rem] font-semibold">403 Forbidden</h2>
  <p class="text-[#73737F]">
    It is prohibited to access the requested asset. A possible reason is a wrong URL or the Secure Token is not valid. 
    Learn more about <a class="underline">403 Forbidden</a> errors.
  </p>

  <h2 class="text-[2rem] font-semibold">404 Not Found</h2>
  <p class="text-[#73737F]">
    The content either does not exist or has been moved. Learn more about 
    <a class="underline">404 Not Found</a> errors.
  </p>

  <h2 class="text-[2rem] font-semibold">405 Method Not Allowed</h2>
  <p class="text-[#73737F]">
    The method is not allowed. A Push Zone only supports the GET and HEAD methods. Learn more about 
    <a class="underline">405 Method Not Allowed</a> errors.
  </p>

  <h2 class="text-[2rem] font-semibold">410 Gone</h2>
  <p class="text-[#73737F]">
    The <a class="underline">Secure Token</a> has expired.
  </p>

  <h2 class="text-[2rem] font-semibold">451 Unavailable For Legal Reasons</h2>
  <p class="text-[#73737F]">
    A <a class="underline">bad bot</a> which is blocked hits a KeyCDN edge server.
  </p>

  <h2 class="text-[2rem] font-semibold">500 Origin Error</h2>
  <p class="text-[#73737F]">
    Our edge server was not able to pull the content from your origin server. Either your origin server is not reachable 
    or firewall rules prevented the connection. The status code 500 is a generic error message, which is thrown if there is a 
    <a class="underline">502 Bad Gateway</a> or a <a class="underline">504 Gateway Timeout</a>.
  </p>

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
