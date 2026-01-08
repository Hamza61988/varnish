<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <h1 class="text-5xl font-medium mt-4">Create a Pull Zone</h1>

      <p style="font-family: inter" class="text-[#73737F] mt-4">
        To set up a KeyCDN Pull Zone, follow the steps outlined below:
      </p>
    </div>

    <div class="mt-[2.3125rem] mb-[8.1875rem]">
      <div class="pl-8">
        <ol class="text-[#73737F]">
          <li class="mt-3">Log in to the KeyCDN dashboard.</li>
          <li class="mt-3">In the left navigation sidebar click Zones.</li>
          <li class="mt-3">Click Add Zone.</li>
          <li class="mt-3">Set the Zone Type as pull.</li>
          <li class="mt-3">
            Define the Origin URL (e.g. https://www.yourwebsite.com).
          </li>
          <li class="mt-3">Click Save.</li>
        </ol>
      </div>

      <p style="font-family: inter" class="text-[#73737F] mt-[48px]">
        These are the minimal steps in order to have a working Zone. The default
        settings work for most use cases.
        <a class="underline">Pull Zone settings</a> Read our article for more
        information about the options available when using a Pull Zone.
        Additionally, learn more about our
        <a class="underline">Pull Zone purging</a> options.
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
