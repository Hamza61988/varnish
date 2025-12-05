<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="min-h-screen bg-white text-[#1f2937] md:p-12">
    <div class="max-w-3xl mx-auto">
      <button
        class="tools-btn shadow-md gap-2 mb-4 rounded-[2rem] flex items-center ..."
      >
        <span class="tools-icon"></span>
        Tools
      </button>
      <h1 class="text-[3rem] font-medium text-[#111827]">Epoch Converter</h1>
      <h2 class="text-[#73737F] font-medium uppercase tracking-wide mb-6">
        UNIX EPOCH TIME CONVERTER
      </h2>
      <div
        class="w-full max-w-3xl mb-[3.4375rem] flex items-end gap-5 rounded-xl"
      >
        <div class="flex-1">
          <label class="block mb-1 text-sm font-medium">Epoch Timestamp</label>
          <input
            type="text"
            placeholder="e.g 1763370035"
            class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium"> </label>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow"
          >
            Convert
          </button>
        </div>
      </div>
      <div class="w-full overflow-x-auto mb-12">
        <table class="w-full text-left text-[15px]">
          <thead class="text-[#73737F] font-medium border-b">
            <tr>
              <th class="py-3">TIME</th>
              <th class="py-3">TYPE</th>
              <th class="py-3">TIME ZONE</th>
            </tr>
          </thead>
          <tbody class="text-[#1f2937]">
            <tr class="border-b">
              <td class="py-4">
                2025-11-17 14:00:35+05:00 PKT<br />
                Y-M-D H:I:S P
              </td>
              <td>LOCAL</td>
              <td>PKT</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                2025-11-17T09:00:35+00:00<br />Y-M-D\TH:I:S P
              </td>
              <td>UTC TIME</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                2025-11-17T09:00:35+00:00<br />Y-M-D\TH:I:S P
              </td>
              <td>ISO 8601 TIME</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                MON, 17 NOV 2025 09:00:35 +0000<br />
                D, D M Y H:I:S O
              </td>
              <td>RFC 2822 TIME</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">1763370035<br />SECONDS SINCE JAN 01 1970</td>
              <td>EPOCH TIME</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                1763456435 / 1763283635<br />SECONDS SINCE JAN 01 1970
              </td>
              <td>EPOCH TIME +/- 1 DAY</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                1763974835 / 1762765235<br />SECONDS SINCE JAN 01 1970
              </td>
              <td>EPOCH TIME +/- 1 WEEK</td>
              <td>GMT/UTC</td>
            </tr>
            <tr class="border-b">
              <td class="py-4">
                1765962035 / 1760691635<br />SECONDS SINCE JAN 01 1970
              </td>
              <td>EPOCH TIME +/- 1 MONTH</td>
              <td>GMT/UTC</td>
            </tr>
            <tr>
              <td class="py-4">
                1794096035 / 1731834035<br />SECONDS SINCE JAN 01 1970
              </td>
              <td>EPOCH TIME +/- 1 YEAR</td>
              <td>GMT/UTC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 class="text-[2rem] font-semibold text-[#111827] mb-6">
        Epoch Converter FAQ
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#73737F] leading-relaxed mb-12"
      >
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            What is Epoch Time?
          </h3>
          <p class="text-[15px]">
            Epoch time, also known as <a class="underline">Unix time</a> or
            POSIX time, is the amount of time in seconds that has elapsed since
            January 1st, 1970 (00:00:00 UTC). It is important to note that this
            time does not change no matter where you are geographically located,
            which is why it is useful for online applications that are tracking
            time. It also allows you to programmatically and mathematically
            compare dates with other measures of time. Unix time may be checked
            on most Unix systems by typing date +%s on the command line.
          </p>
        </div>
        <div>
          <h3 class="text-[1.5625rem] font-semibold text-[#1f2937] mb-3">
            UNIX Epoch Timestamp
          </h3>
          <p class="text-[15px]">
            The purpose of the online Epoch time converter is to output the
            <span class="font-bold"
              >UNIX Epoch timestamp into a human readable date/time</span
            >, in both local time or GMT/UTC. For example, a UNIX system might
            record the timestamp as 1459734769 which does not mean much to the
            normal user. Once converted, to say a format of Y-m-d H:i:sP, it
            results in an output of 2016-04-03 18:52:49-07:00. This can then be
            easily manipulated and used to display to users.
          </p>
        </div>
      </div>
    </div>
  </div>

<AccessAllFeaturesSection class="mt-10"/>
</template>
<style scoped>
input[type="checkbox"] {
  accent-color: #2563eb;
}
.tools-btn {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2px 9px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
}
.tools-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23888" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd"/></svg>');
}
.btn {
  position: relative;
  padding-left: 39px;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border-radius: 10px;
  padding: 1px 20px;
  cursor: pointer;
}
.btn::before {
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
}
</style>
