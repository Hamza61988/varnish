<template>
  <section
    class="container mx-auto px-0 sm:px-6 md:px-12 lg:px-24 pt-[0.25rem] md:pt-[100pt]"
    style="background: #f7f7f8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="hidden md:block ">
        <div class="flex items-center justify-start mb-3 ">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding: 4px 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00288 1.2006C7.00288 0.458539 6.04046 0.167152 5.62884 0.784575L1.59597 6.83388C1.2637 7.3323 1.62099 7.99991 2.22001 7.99991H5.00288V10.7992C5.00288 11.5413 5.9653 11.8327 6.37692 11.2152L10.4098 5.16593C10.7421 4.66752 10.3848 3.99991 9.78575 3.99991H7.00288V1.2006Z"
                fill="#A3A3AE"
              />
            </svg>

            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #1a1925;
              "
            >
              Transform
            </span>
          </div>
        </div>

        <h2
          class="mb-3 "
          style="
            font-weight: 600;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -4%;
            text-transform: capitalize;
            color: #1a1925;
          "
        >
          Speed Up Images
        </h2>

        <p
          class="text-sm md:text-base mb-[1.875rem]"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          "
        >
          Transform and optimize images in real time.
        </p>
      </div>

      <div class="flex md:px-0 px-[57.5px] flex-col lg:flex-row gap-8 lg:gap-4" style="width: 100%">
        <div class="flex flex-col w-full lg:w-[60%] order-2 lg:order-1">
          <div
            class="mb-4 sm:mb-6 overflow-hidden flex items-center justify-center"
            style="
              height: 269px;
              border-radius: 20px;
              border: 1px solid #cfcfcf;
              background: #f9fbfb;
            "
          >
            <img
              src="/images/home_image.svg"
              alt="Plant Image"
              class="w-full h-auto"
              style="display: block; max-width: 100%; border-radius: 20px"
            />
          </div>

          <div
            class="mb-4 hidden md:flex lg:mb-0 w-full"
            style="
              border-radius: 16px;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              class="flex flex-row items-center gap-2 sm:gap-3 w-full"
              style="display: flex; flex-direction: row; align-items: center; width: 100%;"
            >
              <div
                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-mono"
                style="
                  font-family: 'Monaco', 'Courier New', monospace;
                  color: #51515e;
                  width: 100%;
                  min-width: 0;
                  border: none;
                  border-radius: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  white-space: nowrap;
                  overflow: hidden;
                "
              >
                <span >{{ displayedText }}</span>
                <span class="blinking-cursor">|</span>
              </div>
            </div>
          </div>

            <div
            class="mb-4 md:hidden lg:mb-0 w-full"
            style="
              border-radius: 20px;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              class="flex flex-row items-center gap-2 sm:gap-3 w-full"
              style="display: flex; flex-direction: row; align-items: center; width: 100%;"
            >
              <div
                class="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 text-[15px] sm:text-sm "
                style="
               
                  color: #51515e;
                  width: 100%;
                  min-width: 0;
                  border: none;
                  border-radius: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  white-space: nowrap;
                  overflow: hidden;
                "
              >
                https://ip.keycdn.com/example.jpg?<br/>format=webp |
              </div>
            </div>
          </div>
          

          <div class="flex flex-row items-center justify-center md:hidden">
            <button
              class="flex items-center justify-center whitespace-nowrap flex-shrink-0"
              style="
                width: 100%;
                height: 40px;
                border-radius: 6px;
                padding: 10px 6px;
                background: #1a1925;
                font-family: 'inter', sans-serif;
                font-weight: 500;
                font-size: 17px;
                color: #ffffff;
              "
            >
              API Documentation
            </button>
          </div>
        </div>

        <div
          class="hidden md:flex flex-col lg:justify-between w-full lg:w-[40%] order-1 lg:order-2"
        >
          <div
            class="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-col gap-6 lg:gap-0 lg:h-full lg:justify-between"
          >
            <div>
              <h3
                class="mb-2 sm:mb-3"
                style="font-weight: 600; font-size: 16px; color: #1a1925;"
              >
                Transform
              </h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #73737f;">
                Serve properly scaled images by dynamically updating the width and height.
              </p>
            </div>

            <div>
              <h3
                class="mb-2 sm:mb-3"
                style="font-weight: 600; font-size: 16px; color: #1a1925;"
              >
                Optimize
              </h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #73737f;">
                Improve image performance by reducing the overall size and using next-gen formats.
              </p>
            </div>

            <div>
              <h3
                class="mb-2 sm:mb-3"
                style="font-weight: 600; font-size: 16px; color: #1a1925;"
              >
                Deliver
              </h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #73737f;">
                Increase image speed by being distributed globally through our premium edge locations.
              </p>
            </div>

            <div
              class="hidden lg:flex flex-row items-center gap-2 sm:gap-3"
              style="flex-direction: row; align-items: center"
            >
              <button
                class="flex bg-[#1a1925] hover:bg-[#51515e] items-center justify-center whitespace-nowrap flex-shrink-0"
                style="
                  width: 175px;
                  height: 40px;
                  border-radius: 6px;
                  padding: 10px 6px;
                  font-family: 'inter', sans-serif;
                  font-weight: 500;
                  font-size: 17px;
                  color: #ffffff;
                  box-shadow: 0px 8px 12px -4px rgba(26, 25, 37, 0.06);
                "
              >
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const baseText = "https://ip.varnish.com/example.jpg?format=";
const formats = ["webp", "jpeg"];

const displayedText = ref("");
let loopNum = 0;
let isDeleting = false;
let typingTimeout: any = null;

const typeAnimation = () => {
  const currentFormat = formats[loopNum % formats.length];
  const fullText = baseText + currentFormat;

  if (isDeleting) {
    displayedText.value = fullText.substring(0, displayedText.value.length - 1);
  } else {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1);
  }

  let typeSpeed = 100;
  if (isDeleting) typeSpeed = 50;

  if (!isDeleting && displayedText.value === fullText) {
    typeSpeed = 3000;
    isDeleting = true;
  } else if (isDeleting && displayedText.value === baseText) {
    isDeleting = false;
    loopNum++;
    typeSpeed = 500;
  }

  typingTimeout = setTimeout(typeAnimation, typeSpeed);
};

onMounted(() => {
  displayedText.value = baseText;
  typeAnimation();
});

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
});
</script>

<style scoped>
.blinking-cursor {
  font-weight: 100;
  font-size: 1.2em;
  color: #51515e;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>