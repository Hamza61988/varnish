<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <h1 class="text-5xl font-medium mt-4">Key CDN Log Format</h1>

      <p class="text-[#73737F] mt-4">
        The log fields are separated by | (pipe). See the example below.
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <ol class="flex text-[#73737F] flex-col gap-4 pl-8">
        <li>Timestamp incl. msec (e.g. 1383918771.123)</li>
        <li>POP (point of presence)</li>
        <li>IP address of the client (e.g. 111.111.111.0 or 2001:be:ef::1)</li>
        <li>
          HTTP status code. A full list of all status codes is available on
          Wikipedia
        </li>
        <li>Bytes sent for this request (e.g. 1392)</li>
        <li>User ID (e.g. uid1234)</li>
        <li>Zone ID (e.g. zid4321)</li>
        <li>Zone Alias (preferred) or Zone domain (e.g. cdn.example.com)</li>
        <li>Cache status (e.g. HIT)</li>
        <li>CLF request (e.g. "GET /path/folder/image-15kb.jpg HTTP/1.1")</li>
        <li>CLF date (e.g. [13/Aug/2014:22:23:02 +0200])</li>
        <li>Referrer (enclosed by double quotes)</li>
        <li>Agent (enclosed by double quotes)</li>
        <li>Scheme (e.g. https)</li>
        <li>TLS Version (e.g. TLSv1.2)</li>
        <li>Country Code (e.g. US)</li>
        <li>
          Region Code two-symbol country region (state, province, etc) code
          (e.g. CA)
        </li>
        <li>Organization (e.g. "AS14618 Amazon.com, Inc.")</li>
        <li>Byte Range bytes=&lt;range requested&gt; (e.g. bytes=512-1024)</li>
      </ol>
    </div>

    <div>
      <div
        class="bg-[#FEF9D8] text-[#73737F] max-w-[47.5rem] mt-4 border mx-auto py-5 rounded-2xl px-10"
      >
        <h1 class="font-bold">
          Note: The client IP is anonymized by setting the last octet to 0 to be
          GDPR compliant
        </h1>
      </div>
    </div>

    <div>
      <h2 class="text-[2rem] font-semibold mt-4">Example</h2>

      <div
        class="border border-[#D0D0D8] text-[#73737F] rounded-2xl p-2 mt-2 overflow-x-auto text-sm"
      >
        <pre><code>
1407961382.123|usla|111.111.111.0|200|253061|uid1234|zid4321|example-hexid.kxcdn.com|HIT|"GET /
  </code></pre>
      </div>
      <hr class="border-t border-gray-300 my-4" />
    </div>

    <div class="my-4 flex flex-col gap-4">
      <h2 class="text-[2rem] text-[#0E84F7] font-semibold">
        KeyCDN Log Forwarding
      </h2>
      <p class="underline text-[#73737F]">
        The raw logs can be received through syslog. Here's how to configure Log
        Forwarding syslog to receive your raw logs in real time: Log in to the
        KeyCDN dashboard. In the left navigation sidebar click Account and then
        Log Forwarding. Define the…
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
