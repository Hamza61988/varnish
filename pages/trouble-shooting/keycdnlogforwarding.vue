<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <h1 class="text-[2rem] md:text-5xl font-medium mt-4">Key CDN Log Forwarding</h1>

      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        The raw logs can be received through syslog. Here's how to configure Log
        Forwarding syslog to receive your raw logs in real time:
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        To set up a Push Zone, follow the steps outlined below:
      </p>

      <ol class="flex text-[#73737F] text-[13px] md:text-[1rem] flex-col gap-4 pl-8">
        <li>Log in to the KeyCDN dashboard.</li>
        <li>
          In the left navigation sidebar click Account and then Log Forwarding.
        </li>
        <li>Define the destination server, destination port, and token.</li>
        <li>Click Save.</li>
      </ol>

      <p class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        It is highly recommended to take advantage of the token feature when
        configuring your syslog settings. Allowed characters are: a-zA-Z0-9-.
      </p>
    </div>

    <div class="mt-4 flex flex-col gap-4">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold">
        Where to send the syslog messages to?
      </h2>
      <p class="text-[#73737F] text-[13px] md:text-[1rem]">KeyCDN recommends the following options:</p>
      <ul class="pl-8 gap-4 list-disc flex flex-col text-[#73737F] text-[13px] md:text-[1rem]">
        <li>
          Configure your own syslog server. For more details please read
          <a class="underline"> Configure Your Own Syslog Server</a>.
        </li>
        <li>
          Third party log management services such as LogDNA, Logentries,
          Loggly, Logmatic, Logstash or Graylog.
        </li>
      </ul>
    </div>

    <hr class="border-t border-gray-300 my-4 mb-20" />

    <div class="mt-4 flex flex-col gap-4 mb-20">
      <h2 class="text-[1.5rem] md:text-[2rem] text-[#0E84F7] font-semibold">
        KeyCDN Log Forwarding
      </h2>
      <p class="underline text-[#73737F] text-[13px] md:text-[1rem]">
        The log fields are separated by | (pipe). See the example below.
        Timestamp incl. msec (e.g. 1383918771.123) POP (point of presence) IP
        address of the client (e.g. 111.111.111.0 or 2001:be:ef::1) HTTP status
        code. A full list of all status codes is…
      </p>
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
