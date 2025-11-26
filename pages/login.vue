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

    <!-- Login Card Container -->
    <div 
      class="relative z-10 flex flex-col"
      style="
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
        <!-- Username Input -->
        <input
          v-model="formData.username"
          type="text"
          placeholder="Username"
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

        <!-- Name Input -->
        <input
          v-model="formData.name"
          type="text"
          placeholder="Name"
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

        <!-- Auth Code Input -->
        <input
          v-model="formData.authCode"
          type="text"
          placeholder="Auth Code (if available)"
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

        <!-- Forgot Password Link -->
        <div 
          class="text-center"
          style="
            width: 385px;
            height: 16px;
            margin-top: 10px;
          "
        >
          <a 
            href="#" 
            class="text-white hover:underline"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
              font-size: 16px;
              line-height: 16px;
              letter-spacing: 0%;
            "
          >
            Forgot Password?
          </a>
        </div>

        <!-- Login Button -->
        <button
          @click="handleLogin"
          class="w-full text-white font-bold transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
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
          Login
        </button>
      </div>
    </div>

    <!-- Sign Up Link Below Card -->
    <div 
      class="relative z-10 mt-8 text-center"
      style="
        font-family: 'Bricolage Grotesque', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0%;
        color: #1A1925;
      "
    >
      <span>Don't have an account yet? </span>
      <NuxtLink 
        to="/signup"
        class="underline"
        style="
          text-decoration: underline;
          text-decoration-style: solid;
          color: #1A1925;
        "
      >
        Sign Up
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

const formData = ref({
  username: '',
  name: '',
  authCode: ''
})

const handleLogin = () => {
  // Handle login logic here
  console.log('Login attempt:', formData.value)
}
</script>

<style scoped>
/* Ensure text fill works properly */
h1 {
  color: #FFFFFF;
}

/* Placeholder styling for input fields */
input::placeholder {
  color: rgba(26, 25, 37, 0.6);
  opacity: 1;
}
</style>

