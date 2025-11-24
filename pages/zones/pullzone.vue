<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium mt-4">Create a Pull Zone</h1>

      <p class="text-[#73737F] mt-4">
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

      <p class="text-[#73737F] mt-4">
        These are the minimal steps in order to have a working Zone. The default
        settings work for most use cases. Read our Pull Zone settings article
        for more information about the options available when using a Pull Zone.
        Additionally, learn more about our Pull Zone purging options.
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
