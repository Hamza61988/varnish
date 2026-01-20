<template>
  <section
    class=" "
    
  >
    <div class="">


      <SectionsTitle 
        upername="Transform" 
        title="Speed Up Images" 
        subtitle="Transform and optimize images in real time." 
        alignment="start"
        customClass="hidden md:flex"
      />



      <div class="flex lg:px-0  flex-col lg:flex-row gap-5" style="width: 100%">
        <div class="flex flex-col w-full lg:w-[60%] order-2 lg:order-1">
          <div
            class="mb-5 overflow-hidden flex items-center justify-center"
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
              border-radius: 20px;
             
            "
          >
            <div
              class="flex flex-row items-center gap-2 sm:gap-3 w-full"
              style="display: flex; flex-direction: row; align-items: center; width: 100%;"
            >
              <div
                class="w-full px-3 sm:px-4 py-2 sm:py-5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-mono"
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
                background: #1A1925;
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
            class="grid grid-cols-1 sm:grid-cols-3  lg:flex lg:flex-col  "
          >
            <div class="flex flex-col mb-[27px] gap-[6px]">
              <h3
                class=""
                style="font-weight: 600; font-size: 18px; color: #1A1925;"
              >
                Transform
              </h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #73737f;">
                Serve properly scaled images by dynamically updating the width and height.
              </p>
            </div>

            <div class="flex flex-col mb-[27px] gap-[6px]">
              <h3
                class=""
                style="font-weight: 600; font-size: 18px; color: #1A1925;"
              >
                Optimize
              </h3>
              <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #73737f;">
                Improve image performance by reducing the overall size and using next-gen formats.
              </p>
            </div>

            <div class="flex flex-col mb-[25px]  gap-[6px]">
              <h3
                class=""
                style="font-weight: 600; font-size: 18px; color: #1A1925;"
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
                class="flex bg-[#1A1925] hover:bg-[#51515e] items-center justify-center whitespace-nowrap flex-shrink-0"
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