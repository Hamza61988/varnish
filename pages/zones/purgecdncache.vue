<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <h1 class="text-[2rem] md:text-5xl font-medium mt-4">Purge CDN Cache</h1>

      <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        There are two different approaches to purging the CDN cache. It can
        either be completely purged, which means all assets are removed from the
        CDN cache. Alternatively, it can be purged by URL, which means an
        individual asset is removed from the CDN cache. Purging the CDN cache is
        done in a few seconds globally.
      </p>
    </div>

    <div
      style="
        box-shadow: 0px 0.5px 0.5px 0px #07011308;

        box-shadow: 0px 1px 1px -0.5px #07011308;

        box-shadow: 0px 2px 2px -1px #07011308;

        box-shadow: 0px 3px 3px -1.5px #07011308;

        box-shadow: 0px 0px 0px 1px #1a192514;
      "
      class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] max-w-[47.5rem] mt-4 mx-auto py-5 rounded-2xl px-10"
    >
      <h1 class="">
        <span class="font-bold">Note:</span> Purging a Push Zone can only be
        done by URL.
      </h1>
    </div>

    <div class="mt-4">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold mt-4">Purge Cache</h2>

      <div class="pl-8">
        <ol class="text-[#73737F] text-[13px] md:text-[1rem]">
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
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold mt-4">Purge URL</h2>

      <div class="pl-8 mb-4">
        <ol class="text-[#73737F] text-[13px] md:text-[1rem]">
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
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
