<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn">Support</button>

      <h1 class="text-5xl font-medium mt-4">Purge CDN Cache</h1>

      <p class="text-[#73737F] mt-4">
        There are two different approaches to purging the CDN cache. It can
        either be completely purged, which means all assets are removed from the
        CDN cache. Alternatively, it can be purged by URL, which means an
        individual asset is removed from the CDN cache. Purging the CDN cache is
        done in a few seconds globally.
      </p>
    </div>

    <div class="my-4">
      <div class="bg-[#FEF9D8] text-[#73737F] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> Purging a Push Zone can only be
          done by URL.
        </h1>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="text-[2rem] font-semibold mt-4">Purge Cache</h2>

      <div class="pl-4">
        <ol class="text-[#73737F]">
          <li class="mt-3">Log in to the KeyCDN dashboard.</li>
          <li class="mt-3">In the left navigation sidebar click Zones.</li>
          <li class="mt-3">
            In the Zones table click the Zone menu that you want to purge. From
            the drop down click Purge
          </li>
        </ol>
      </div>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold mt-4">Purge URL</h2>

      <div class="pl-4 mb-4">
        <ol class="text-[#73737F]">
          <li class="mt-3">Log in to the KeyCDN dashboard.</li>
          <li class="mt-3">In the left navigation sidebar click Zones.</li>
          <li class="mt-3">
            In the Zones table click the Zone menu that you want to purge. From
            the drop down click Purge URL.
          </li>
          <li>Enter one URL path per line (e.g. /path/to/example.css).</li>
          <li>Click Purge.</li>
        </ol>
      </div>
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
