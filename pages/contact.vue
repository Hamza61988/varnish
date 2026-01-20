<template>
  <div class="min-h-screen relative overflow-hidden bg-gray-50">
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        z-index: 0;
      "
    ></div>

    <div class="max-w-2xl mx-auto md:px-[2.3547rem] px-[57px] lg:px-0 py-16 relative z-10">
      
      <div class="text-center mb-12 flex flex-col items-center gap-4">
<SectionsUpername name="Contact" />

        <h1 class="text-4xl md:text-5xl font-medium text-[#1a1925] tracking-tight" style="font-family: 'Funnel Display', sans-serif;">
          Contact
        </h1>

        <p class="text-[#51515e] text-base">
          Get quick answers to any questions that you may have.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="info-card">
          <div class="relative mb-4">
            <div class="absolute -top-2 -left-2 w-8 h-8 bg-contain bg-no-repeat" style="background-image: url('/images/about/bgcardicon.svg');"></div>
         <div class="relative z-10 h-5 w-auto">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="28" height="28" fill="url(#pattern0_18486_10167)"/>
<defs>
<pattern id="pattern0_18486_10167" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10167" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10167" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFRklEQVR4nO2da4hVVRTHf42Wmk2TmT2hIMokAhmiKMT6UFBZEUQDRRGVoIXVlz4YvYcas8gJ0wghegtC9KGg6EXjNMVkQvWlqMwe9kBTZyYdKzVcsWEJQ9xz7j2Pvc86t/2DPwx67zlr/+fes/dee+09EIlEIpFIJBKJRCKRlpgMdAM3Ab3AS8BHwHfAz8AIsF81ov/m/m9IX9ur7+3Wa0WUScCFwGNq1h5ASpK71ofAcmC+3ut/RQdwKfA8sL1EY5vpd+A54BKNoW05DlgKbA5obpLcI+ch4FjaiGP06/unAYP/q73AGuAEakwn8CgwbsDQZtoNLAOOoGZcDvxkwEDJqF+Bq6kBRwOvGjBMCmodMAOjdBvp6KQkuW/kuRjjFuAvA+ZIyXJtuhkjLDVgiHiWGzVVxiHA4wZMkEBaqW0OTiiTtwCrdDY5B5iucj9fBqzWCUiIWNwQMCiLAzTqF2BRi8khN6XuAX4MENcdBOIK4B/PjXldJzxZce95w3Nsru0L8MxJwA7PDXmqYNKnQx81vhNU3qbtrgHve27AWyWlMzv0W+Ez1nd9ZQHvDPBM7iwx3iOB3zzHfBseptY7PQe9MOX+U/QX/Ykmqcb159uBw1Let8hzzNvLnqqvDDCEm5TSL3yR8t7P9TWNmKzfFJ+x95dlsmvEPs/Brkr5JKeZfFCfpXyynw6Q0z6xDKP7PAcqOvEo2i8sSUnZ+o7/4aImTwu0rjc74f4bMlxjOOEacwLEvw2YWsTo6wIEKSmjjd0ZrrEr4RqdgdrgZqa5WRcoSClpEtGI6YHu/3Jekw8FRg0YKC3qvYR2nBLo/jvzFu3MM2CelNChXhUwhvPzGL3EgHnSol5MacfqgHHkmimuMWCgtPjISBpDH641eqFieSaP0R8bMFGa6E0dgiZxT+B4XP1gZr41YKSk6LUmeY4zMw4Py9A3eYzeZsBMSdArTXp4lwTbVEFcW/MY/bcBQ6WBPtChZxJTA+TN08oTMmOxTmOzflpJ6fzeqTC+XEb7TppLDl2UEq+bag9UHF+uR8eXBoyVCVqfEuuMjAkoX/o6j9FDBgKXCXJlZ0nPZCuxDrXDhOX0hDgfMRBboQmL7/U2ySjX0VnvS27NY/TZBgKXmilXUsnNuv4wELzURLnTpGgyu+oGSBtkEJtypYEGSE10TRGjpwROM0pNtVW9KsQyAw0R43KbQwszqyZ7BaUi7S2zsrTfQINEazf6VcMG4nFaQYnMClAXLSkaTVh8dQXhYxWXOBxFydxocIU7VMlXktwWEy9UkesdbiGuKjJ3b/vcpXVyBUtcT7QQ14rAMTkPjscz8wOU8UpGo0N21vt1K17bbH8To48Ol9UMSm/Axi1osh0vVByF66Dzcn+gBo7p6KKRyWMB94NXskX5IHcDBwI1doM+j58EPg10zwN6sIAJeiqoCpJA5QPuHD1TnAF8ZcAcKUluX/k5GGWuAYOkpJKzLgwz24BJUkDfhxwjF+EsA2ZJDu3S4WrSSrs56rYdY1zPRZ1JzbjegHnSgjbpkM2dMllLLFUNSYNE0LPAxVVPPMrASg2c6Lh+QLdYz2unE3ZnamYrT+FJH3ABcBpwHnAtcB/wgh7U7Spbf9AV+X0TDureotsZBvW1D+oCxdx2Pi/63hwmD7Tb0cK+6cqxILC2yWafSAPWZkzSLG+HDik0d2XsoHqqDrhudGSsYhoETq066LrhRgYbM4xfF7fT8CoUD7SY6N+hSz9dVQdcV0abHCc5qJ/g2iRorNKnhX0jmjNYr0tLN+ifAIlEIpFIJBKJUBX/Am10AJlUycN/AAAAAElFTkSuQmCC"/>
</defs>
</svg>
         </div>

          </div>
          <h3 class="font-medium text-[#1a1925] mb-2">FAQ</h3>
          <p class="text-sm text-[#51515e]">Have questions? Find answers in our frequently asked questions.</p>
        </div>

        <div class="info-card">
          <div class="relative mb-4">
            <div class="absolute -top-2 -left-2 w-8 h-8 bg-contain bg-no-repeat" style="background-image: url('/images/about/bgcardicon.svg');"></div>
            <div class="relative z-10 h-5 w-auto">
        <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="31" height="32" fill="url(#pattern0_18486_10169)"/>
<defs>
<pattern id="pattern0_18486_10169" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10169" transform="matrix(0.0111111 0 0 0.0107639 0 0.015625)"/>
</pattern>
<image id="image0_18486_10169" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEklEQVR4nO2dTYhVdRiHnz7UAgs1CBFCaREVtCkqBEEby1UtElq0nD5GBxqklaYoBgoOREnixgoibKG0C5syMOgTaiiCWpRMX1rNYiwYKD9oOPGH38Bw8Z577vXc95xz/T3w7s45//d95sz5gvkNGGOMMcYYY4wxxlwdLAbGgT+ADJgF/gKmgSnV18Ak8BlwEngbOAjsBIaBR4EHgNuAJdSPG9Tbg+p1WL0f1CwnNdukZp2fe1ouZuXmd+CAnHXNAR2krJoDfgImgFeArcAQsIr+s0prbZXECfUyV/KMyVnXzJ/JEfUn8C6wHVinM61XrgfuA7YBbwE/B8/RNVmFdR54H3gOWFOg1zXa9gPtW2XvjRKdtVS6Tj7dcqbfCDwDfF6D/gZGdKY6A2xRna1BP30VfS+wFngY2Aw8CYwAzwMv6EZ3FPgI+B44V4PhO9U59XpKvb8M7NBMI5pxs2ZeKwd9F90LS4DVwEZgdMGdf6oPd/7L1ZzWmtDao+pl9RU8dtZSdB43A48Ae4D3gL9LEJuOcQLYrWOnNcqmFD+LAkVf7vFsA/AS8GMXcn/QPht0jH7Tro/krhArdZevSnQr6c3y9Zx+XtM20bTr51M5zGWRNsw7c6oia0g/qb7odO3fUuBXtCqyhvQzX8/m7Vzk4b8qsob0s/AS0pb0Rcqii1Hk2bznnes4WFVckSuLLo5FB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFB2HRQVh0EBYdhEUHYdFBWHQQFh2ERQdh0UFYdBAWHYRFD4roSeVapEiG48CbwGHgRWBM2RYpouEeYHnAYGWxXD1v1AxjmumwZjyumU/JQd9Fd1uzwHeKdTikrIyhIn+YXrC3bliptUfVywn1Nh+rVnaFis465Gp8COwFHgNWlCh6qRLHtulsnK5gvrb8W0EzWUtSTDrDjgCPS1ZR0UsVx3NEx4hItsmrf/JEf1txc1lLXVDE2ljONmPa5kIN+l1Y3+SJ3lWDBrMBqRS92ZabFCVZdZNZw2tKLnO5G/i1Bs1mDa1fgLvo4plyXIF+VTeeNaTOKgR2GT2SHrnuAO5XwN4Tiqrcrgy5Y8AnwGngYg0Gzkqqi7oEpCSZd4BXdd0dkYNNikNOZ+8tBHOtQvse0g9jXFl2v9VAXLs6oze+ceUgDSlU9joayjJgvWI1U4TxTAVSZ7T2TuXjlfmJoLZcA9ypFPI3dOkpW+xpHXtYa6U1DXC7XpnTa/mlHsT+pw8+exXWbQrehPd1IXl/h28lJod0Q/qqgOQvm3zzqgsrOsR4Jsm3Vt3koLBYN7SP9eQwo2f3p3r9lxzGGGOMMQwk/wPKkGLv6V+M3gAAAABJRU5ErkJggg=="/>
</defs>
</svg>

</div>
          </div>
          <h3 class="font-medium text-[#1a1925] mb-2">Knowledge base</h3>
          <p class="text-sm text-[#51515e]">Need help? Find guidance in our extensive knowledge base.</p>
        </div>

        <div class="info-card">
          <div class="relative mb-4">
            <div class="absolute -top-2 -left-2 w-8 h-8 bg-contain bg-no-repeat" style="background-image: url('/images/about/bgcardicon.svg');"></div>
             <div class="relative z-10 h-5 w-auto">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3584 0.824128C19.0956 -0.0298362 18.0097 -0.28359 17.3957 0.365494L14.6134 3.30685C13.8449 4.11925 13.4167 5.19507 13.4167 6.31335V9.28278L11.0479 11.6515C10.7062 11.9932 10.7062 12.5472 11.0479 12.8889C11.3897 13.2306 11.9437 13.2306 12.2854 12.8889L14.6541 10.5202H17.6235C18.7418 10.5202 19.8176 10.092 20.63 9.32352L23.5714 6.54115C24.2205 5.92716 23.9667 4.84129 23.1128 4.57853L20.2417 3.69514L19.3584 0.824128Z" fill="#1A1925"/>
<path d="M1.75 12.2705C1.75 6.79368 6.18984 2.35384 11.6667 2.35384C11.8468 2.35384 12.0258 2.35864 12.2035 2.3681C12.686 2.3938 13.0981 2.02344 13.1238 1.54088C13.1495 1.05831 12.7791 0.646281 12.2965 0.620577C12.0879 0.609464 11.8779 0.603841 11.6667 0.603841C5.22334 0.603841 0 5.82719 0 12.2705C0 18.7138 5.22334 23.9372 11.6667 23.9372C18.11 23.9372 23.3333 18.7138 23.3333 12.2705C23.3333 12.0593 23.3277 11.8493 23.3166 11.6406C23.2909 11.1581 22.8789 10.7877 22.3963 10.8134C21.9137 10.8391 21.5434 11.2512 21.5691 11.7337C21.5785 11.9114 21.5833 12.0903 21.5833 12.2705C21.5833 17.7473 17.1435 22.1872 11.6667 22.1872C6.18984 22.1872 1.75 17.7473 1.75 12.2705Z" fill="#1A1925"/>
<path d="M10.6674 7.08653C11.1418 6.99405 11.4513 6.53457 11.3588 6.06026C11.2663 5.58594 10.8069 5.2764 10.3326 5.36888C7.10379 5.9984 4.66667 8.84076 4.66667 12.2542C4.66667 16.1286 7.80747 19.2694 11.6818 19.2694C15.0953 19.2694 17.9376 16.8324 18.5672 13.6037C18.6597 13.1293 18.3501 12.6699 17.8758 12.5774C17.4015 12.4849 16.942 12.7944 16.8495 13.2687C16.3772 15.6912 14.242 17.5194 11.6818 17.5194C8.77397 17.5194 6.41667 15.1621 6.41667 12.2542C6.41667 9.69401 8.2449 7.55887 10.6674 7.08653Z" fill="#1A1925"/>
</svg>


</div>
          </div>
          <h3 class="font-medium text-[#1a1925] mb-2">Support request</h3>
          <p class="text-sm text-[#51515e]">Existing customer? Please open a new support request.</p>
        </div>
      </div>

      <div class="w-full mb-12">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm font-medium text-gray-700">Name *</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                required
                class="input-base  input-shadow"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm font-medium text-gray-700">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="John@gmail.com"
                required
                class="input-base input-shadow"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2 relative">
            <label for="type" class="text-sm font-medium text-gray-700">Type *</label>
            <div class="relative w-full">
              <select
                id="type"
                v-model="form.type"
                required
                class="input-base input-shadow w-full appearance-none pr-10 cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="technical">Technical</option>
              </select>
              <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="text-sm font-medium text-gray-700">Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              placeholder="Write your message here..."
              required
              class="input-base input-shadow resize-none h-32"
            ></textarea>
          </div>

          <div class="flex items-center space-x-3">
            <input
              id="privacy"
              v-model="form.agreeToPrivacy"
              type="checkbox"
              required
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="privacy" class="text-sm font-medium text-[#51515e] cursor-pointer">
              I Agree to the privacy policy
            </label>
          </div>

          <hr class="border-t border-gray-200" />

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p class="text-sm text-[#51515e]">
              By submitting, I acknowledge that I have read and agree to the
              <span class="text-[#1a1925] font-medium cursor-pointer hover:text-blue-600">Privacy Policy</span>.
            </p>
            <button type="submit" class="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  type: "general",
  message: "",
  agreeToPrivacy: false,
});

const handleSubmit = () => {
  console.log("Form submitted:", form.value);
  alert("Thank you for your message! We will get back to you soon.");
  form.value = {
    name: "",
    email: "",
    type: "general",
    message: "",
    agreeToPrivacy: false,
  };
};
</script>

<style scoped>
/* Reusable Styles */

/* 1. Base style for all Inputs, Selects, and Textareas */
.input-base {
  width: 100%;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: white;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1a1925;
  transition: all 0.2s ease;
}

/* 2. The Custom Shadow (extracted from your inline styles) */
.input-shadow {
  box-shadow: 
    0 0 0 1px #1a192514, 
    0 3px 3px -1.5px #07011308,
    0 2px 2px -1px #07011308, 
    0 1px 1px -0.5px #07011308,
    0 0.5px 0.5px #07011308;
}

.input-base:focus {
  box-shadow: 
    0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.08),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.08),
    0px 2px 2px -1px rgba(7, 1, 19, 0.08),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.08),
    0px 0px 0px 1px rgba(31, 98, 255, 0.5);
}

/* 3. Info Cards */
.info-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid #eeeef0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 4. Submit Button */
.submit-btn {
  width: auto;
  min-width: 72px;
  height: 36px;
  border-radius: 8px;
  padding: 0 16px;
  background: #1f62ff;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(85,85,85,0.08) 100%);
  border: none;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 
    0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
    0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
    0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
    0px 2px 4px -1px rgba(26, 25, 37, 0.12);
  transition: all 0.2s ease;
}

.submit-btn:hover {

  background: #0346e2;
  transform: translateY(-1px);
}

.submit-btn:active {
  transform: translateY(1px);
}
</style>