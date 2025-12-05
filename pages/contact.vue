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

    <div class="max-w-2xl mx-auto md:px-[2.3547rem] px-[1.125rem] lg:px-0 py-16 relative z-10">
      
      <div class="text-center mb-12 flex flex-col items-center gap-4">
        <div class="inline-flex items-center bg-white/90 rounded-full px-3 py-1 shadow-sm border border-gray-100 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="min-width: 16px; min-height: 16px"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          <span class="text-xs font-medium text-[#1a1925]">Contact</span>
        </div>

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
            <img src="/images/about/Icon.svg" alt="Icon" class="relative z-10 h-5 w-auto" />
          </div>
          <h3 class="font-medium text-[#1a1925] mb-2">FAQ</h3>
          <p class="text-sm text-[#51515e]">Have questions? Find answers in our frequently asked questions.</p>
        </div>

        <div class="info-card">
          <div class="relative mb-4">
            <div class="absolute -top-2 -left-2 w-8 h-8 bg-contain bg-no-repeat" style="background-image: url('/images/about/bgcardicon.svg');"></div>
            <img src="/images/about/Group.svg" alt="Icon" class="relative z-10 h-5 w-auto" />
          </div>
          <h3 class="font-medium text-[#1a1925] mb-2">Knowledge base</h3>
          <p class="text-sm text-[#51515e]">Need help? Find guidance in our extensive knowledge base.</p>
        </div>

        <div class="info-card">
          <div class="relative mb-4">
            <div class="absolute -top-2 -left-2 w-8 h-8 bg-contain bg-no-repeat" style="background-image: url('/images/about/bgcardicon.svg');"></div>
            <img src="/images/about/Icon3rd.svg" alt="Icon" class="relative z-10 h-5 w-auto" />
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
                class="input-base input-shadow"
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
  background-color: transparent;
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