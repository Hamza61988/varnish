<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium mt-4">Key CDN Log Forwarding</h1>

      <p class="text-[#73737F] mt-4">
        The raw logs can be received through syslog. Here's how to configure Log
        Forwarding syslog to receive your raw logs in real time:
      </p>
    </div>

    <div class="mt-[2.3125rem]">
      <p class="text-[#73737F] mt-4">
        To set up a Push Zone, follow the steps outlined below:
      </p>

      <ol class="flex text-[#73737F] flex-col gap-4 pl-8">
        <li>Log in to the KeyCDN dashboard.</li>
        <li>
          In the left navigation sidebar click Account and then Log Forwarding.
        </li>
        <li>Define the destination server, destination port, and token.</li>
        <li>Click Save.</li>
      </ol>

      <p class="text-[#73737F] mt-4">
        It is highly recommended to take advantage of the token feature when
        configuring your syslog settings. Allowed characters are: a-zA-Z0-9-.
      </p>
    </div>

    <div class="mt-4 flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Where to send the syslog messages to?
      </h2>
      <p class="text-[#73737F]">KeyCDN recommends the following options:</p>
      <ul class="pl-8 gap-4 list-disc flex flex-col text-[#73737F]">
        <li>
          Configure your own syslog server. For more details please read <a class="underline">
          Configure Your Own Syslog Server</a>.
        </li>
        <li>
          Third party log management services such as LogDNA, Logentries,
          Loggly, Logmatic, Logstash or Graylog.
        </li>
      </ul>
    </div>

    <hr class="border-t border-gray-300 my-4 mb-20" />

    <div class="mt-4 flex flex-col gap-4 mb-20 ">
      <h2 class="text-[2rem] text-[#0E84F7] font-semibold">
        KeyCDN Log Forwarding
      </h2>
      <p class="underline text-[#73737F]">
        The log fields are separated by | (pipe). See the example below.
        Timestamp incl. msec (e.g. 1383918771.123) POP (point of presence) IP
        address of the client (e.g. 111.111.111.0 or 2001:be:ef::1) HTTP status
        code. A full list of all status codes is…
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
