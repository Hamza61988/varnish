<template>
  <div class="min-h-screen flex flex-col items-center justify-center relative" style="background-color: #FFFFFF; font-family: 'Bricolage Grotesque', sans-serif;">
    <!-- Background decorative shapes -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 opacity-20" style="background: linear-gradient(315deg, #E5E5E5 0%, transparent 100%); border-radius: 50%; transform: translate(-30%, 30%);"></div>
      <!-- BG_Line_landing.svg in top right -->
      <div class="absolute top-0 right-0">
        <img 
          src="/images/BG_Line_landing.svg" 
          alt="Background line decoration top right" 
          class="w-auto h-auto"
          style="max-width: 241px; max-height: 481px;"
        />
      </div>
      <!-- BGline.svg in bottom left -->
      <div class="absolute bottom-0 left-0">
        <img 
          src="/images/about/BGline.svg" 
          alt="Background line decoration" 
          class="w-auto h-auto"
          style="max-width: 657px; max-height: 209px;"
        />
      </div>
    </div>

    <!-- Signup Card Container -->
    <div 
      class="relative z-10 flex flex-col"
      style="
        width: 589px;
        min-height: 576px;
        gap: 60px;
        border-radius: 25px;
        padding-top: 44px;
        padding-right: 102px;
        padding-bottom: 44px;
        padding-left: 102px;
        background: #1A1925;
      "
    >
      <!-- Header Section with Logo and Title -->
      <div class="flex items-center justify-center">
        <div class="flex items-center gap-3">
          <img
            src="/icons/Company logo.svg"
            alt="Varnish Logo"
            class="rounded-lg"
            style="width: 72px; height: 72px;"
          />
          <h1 
            class="text-white"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-style: bold;
              font-size: 57.58px;
              line-height: 47.5px;
              letter-spacing: -0.03em;
              vertical-align: bottom;
              color: #FFFFFF;
            "
          >
            Varnish
          </h1>
        </div>
      </div>

      <!-- Form Section -->
      <div class="flex flex-col gap-4" style="gap: 30px;">
        <!-- Your Website Input -->
        <input
          v-model="formData.website"
          type="text"
          placeholder="Your Website"
          class="w-full border border-transparent focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Name Input -->
        <input
          v-model="formData.name"
          type="text"
          placeholder="Your Name"
          class="w-full border border-transparent focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Username Input -->
        <input
          v-model="formData.username"
          type="text"
          placeholder="Your Username (Alphanumeric)"
          class="w-full border border-transparent focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Your Password Input -->
        <input
          v-model="formData.password"
          type="password"
          placeholder="Your Password"
          class="w-full border border-transparent focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Confirm Password Input -->
        <input
          v-model="formData.confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full border border-transparent focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Checkboxes Section -->
        <div class="flex flex-col gap-4" style="gap: 16px;">
          <!-- Terms and Privacy Policy Checkbox -->
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="formData.acceptTerms"
              type="checkbox"
              class="w-5 h-5 rounded border-2 border-white bg-transparent checked:bg-white focus:outline-none"
              style="
                accent-color: #FFFFFF;
                cursor: pointer;
              "
            />
            <span 
              class="text-white"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                letter-spacing: 0%;
              "
            >
              I accept the 
              <a 
                href="#" 
                class="underline"
                style="
                  text-decoration: underline;
                  color: #FFFFFF;
                "
              >
                terms and privacy policy
              </a>
            </span>
          </label>

          <!-- Email Contact Checkbox -->
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="formData.agreeToContact"
              type="checkbox"
              class="w-5 h-5 rounded border-2 border-white bg-transparent checked:bg-white focus:outline-none"
              style="
                accent-color: #FFFFFF;
                cursor: pointer;
              "
            />
            <span 
              class="text-white"
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 700;
                font-size: 16px;
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
          class="w-full text-white font-bold transition-opacity hover:opacity-90 focus:outline-none"
          style="
            height: 48px;
            padding: 10px;
            border-radius: 6px;
            background: #1F62FF;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            font-size: 16px;
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
  layout: 'blank'
})

const formData = ref({
  website: '',
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  agreeToContact: false
})

const handleSignup = () => {
  // Handle signup logic here
  console.log('Signup attempt:', formData.value)
}
</script>

<style scoped>
/* Ensure text fill works properly */
h1 {
  color: #FFFFFF;
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
  width: 20px;
  height: 20px;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:checked {
  background: #FFFFFF;
}

input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1A1925;
  font-size: 14px;
  font-weight: bold;
}
</style>

