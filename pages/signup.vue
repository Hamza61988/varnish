<template>
  <div
    class="fixed inset-0 overflow-y-auto flex items-center justify-center px-4 py-2"
    style="
      background-color: #ffffff;
      font-family: 'Bricolage Grotesque', sans-serif;
    "
  >
    <!-- Background decorative shapes -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 opacity-20"></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 opacity-20"
        style="
          background: linear-gradient(315deg, #e5e5e5 0%, transparent 100%);
          border-radius: 50%;
          transform: translate(-30%, 30%);
        "
      ></div>
      <!-- BG_Line_landing.svg in top right -->
      <div class="absolute top-0 right-0 hidden sm:block">
        <img
          src="/images/BG_Line_landing.svg"
          alt="Background line decoration top right"
          class="w-auto h-auto"
          style="max-width: 241px; max-height: 481px"
        />
      </div>
      <!-- BGline.svg in bottom left -->
      <div class="absolute bottom-0 left-0 hidden sm:block">
        <img
          src="/images/about/BGline.svg"
          alt="Background line decoration"
          class="w-auto h-auto"
          style="max-width: 657px; max-height: 209px"
        />
      </div>
    </div>

    <!-- Signup Card Container -->
    <div
      class="relative z-10 flex flex-col w-full max-w-[589px] mx-auto px-4 py-6 sm:px-6 sm:py-8 sm:gap-8 sm:rounded-[25px] md:px-8 md:py-10 md:gap-10 lg:px-[102px] lg:py-11 lg:gap-[60px] my-4"
      style="gap: 24px; border-radius: 20px; background: #1a1925"
    >
      <div class="absolute left-4 top-4 sm:left-6 sm:top-6">
        <CommonBackButton />
      </div>
      <!-- Header Section with Logo and Title -->
      <div class="flex items-center justify-center">
        <div class="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <img
            src="/icons/Company-logo.svg"
            alt="Varnish Logo"
            class="rounded-lg w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px]"
          />
          <h1
            class="text-white text-xl sm:text-2xl md:text-3xl lg:text-[57.58px] lg:leading-[47.5px]"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-style: bold;
              letter-spacing: -0.03em;
              vertical-align: bottom;
              color: #ffffff;
            "
          >
            Varnish
          </h1>
        </div>
      </div>

      <!-- Form Section -->
      <div class="flex flex-col gap-3 sm:gap-4" style="gap: 16px">
        <!-- Your Website Input -->
        <input
          v-model="formData.website"
          type="text"
          placeholder="Your Website"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #ffffff;
            color: #1a192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Name Input -->
        <input
          v-model="formData.name"
          type="text"
          placeholder="Your Name"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #ffffff;
            color: #1a192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Username Input -->
        <input
          v-model="formData.username"
          type="text"
          placeholder="Your Username (Alphanumeric)"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #ffffff;
            color: #1a192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Password Input -->
        <input
          v-model="formData.password"
          type="password"
          placeholder="Your Password"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #ffffff;
            color: #1a192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Confirm Password Input -->
        <input
          v-model="formData.confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #ffffff;
            color: #1a192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Checkboxes Section -->
        <div class="flex flex-col gap-2 sm:gap-3" style="gap: 12px">
          <!-- Terms and Privacy Policy Checkbox -->
          <label class="flex items-start gap-2 cursor-pointer">
            <input
              v-model="formData.acceptTerms"
              type="checkbox"
              class="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-white bg-transparent checked:bg-white focus:outline-none mt-0.5 sm:mt-0"
              style="accent-color: #ffffff; cursor: pointer; flex-shrink: 0"
            />
            <span
              class="text-white text-xs sm:text-sm md:text-base"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                line-height: 16px;
                letter-spacing: 0%;
              "
            >
              I accept the
              <a
                href="#"
                class="underline"
                style="text-decoration: underline; color: #ffffff"
              >
                terms and privacy policy
              </a>
            </span>
          </label>

          <!-- Email Contact Checkbox -->
          <label class="flex items-start gap-2 cursor-pointer">
            <input
              v-model="formData.agreeToContact"
              type="checkbox"
              class="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-white bg-transparent checked:bg-white focus:outline-none mt-0.5 sm:mt-0"
              style="accent-color: #ffffff; cursor: pointer; flex-shrink: 0"
            />
            <span
              class="text-white text-xs sm:text-sm md:text-base"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                line-height: 16px;
                letter-spacing: 0%;
              "
            >
              I agree to be contacted by email
            </span>
          </label>
        </div>

        <!-- Create Account Button -->
        <button
          @click="handleSignup"
          class="w-full text-white font-bold transition-opacity hover:opacity-90 focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #1f62ff;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

// Prevent body scrolling but allow card scrolling if needed
onMounted(() => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
});

const formData = ref({
  website: "",
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  agreeToContact: false,
});

const handleSignup = () => {
  // Handle signup logic here
  console.log("Signup attempt:", formData.value);
};
</script>

<style scoped>
/* Ensure text fill works properly */
h1 {
  color: #ffffff;
}

/* Placeholder styling for input fields */
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: rgba(26, 25, 37, 0.6);
  opacity: 1;
}

/* Checkbox styling */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  position: relative;
}

@media (min-width: 640px) {
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}

input[type="checkbox"]:checked {
  background: #ffffff;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1a1925;
  font-size: 12px;
  font-weight: bold;
}

@media (min-width: 640px) {
  input[type="checkbox"]:checked::after {
    font-size: 14px;
  }
}

/* Prevent body scrolling */
:deep(body),
:deep(html) {
  overflow: hidden !important;
  height: 100% !important;
  position: fixed;
  width: 100%;
}
</style>
