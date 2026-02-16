<template>
  <div class="fixed inset-0 overflow-hidden flex items-center justify-center" style="background-color: #FFFFFF; font-family: 'Bricolage Grotesque', sans-serif; width: 100vw; height: 100vh;">
    <!-- Background decorative shapes -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 opacity-20" style="background: linear-gradient(315deg, #E5E5E5 0%, transparent 100%); border-radius: 50%; transform: translate(-30%, 30%);"></div>
      <!-- BG_Line_landing.svg in top right -->
       
      <!-- BGline.svg in bottom left -->
      <div class="absolute bottom-0 left-0 hidden sm:block">
        <img 
          src="/images/about/BGline.svg" 
          alt="Background line decoration" 
          class="w-auto h-auto"
          style="max-width: 657px; max-height: 209px;"
        />
      </div>
    </div>

    <!-- Wrapper to center card and signup link together -->
    <div class="relative z-10 w-full max-w-[589px] mx-auto px-4 py-2 flex flex-col items-center justify-center">
      <div class="absolute left-4 top-4 sm:left-6 sm:top-6">
        <CommonBackButton />
      </div>
      <!-- Login Card Container -->
      <div 
        class="w-full flex flex-col px-4 py-6 sm:px-6 sm:py-8 sm:gap-8 sm:rounded-[25px] md:px-8 md:py-10 md:gap-10 lg:px-[102px] lg:py-11 lg:gap-[60px]"
        style="
          gap: 24px;
          border-radius: 20px;
          background: #1A1925;
        "
      >
      <!-- Header Section with Logo and Title -->
      <div class="flex items-center justify-center">
        <div class="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <img
            src="/icons/company-logo.svg"
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
              color: #FFFFFF;
            "
          >
            Varnish
          </h1>
        </div>
      </div>

      <!-- Form Section -->
      <div class="flex flex-col gap-3 sm:gap-4" style="gap: 16px;">
        <!-- Username Input -->
        <input
          v-model="formData.username"
          type="text"
          placeholder="Username"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Name Input -->
        <input
          v-model="formData.name"
          type="text"
          placeholder="Name"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Auth Code Input -->
        <input
          v-model="formData.authCode"
          type="text"
          placeholder="Auth Code (if available)"
          class="w-full border border-transparent focus:outline-none h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #FFFFFF;
            color: #1A192599;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
            line-height: 16px;
            letter-spacing: 0%;
          "
        />

        <!-- Forgot Password Link -->
        <div 
          class="text-center w-full"
          style="
            margin-top: 4px;
          "
        >
          <a 
            href="#" 
            class="text-white hover:underline inline-block text-xs sm:text-sm md:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 700;
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
          class="w-full text-white font-bold transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 h-11 sm:h-12 text-sm sm:text-base sm:px-4 sm:py-2.5"
          style="
            padding: 8px 12px;
            border-radius: 6px;
            background: #1F62FF;
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 700;
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
        class="mt-2 sm:mt-4 md:mt-6 text-center w-full text-xs sm:text-sm md:text-base"
        style="
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

// Prevent body scrolling completely
onMounted(() => {
  if (typeof window !== 'undefined') {
    // Prevent scrolling
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    document.body.style.width = '100vw'
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.bottom = '0'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.height = '100vh'
    document.documentElement.style.width = '100vw'
    document.documentElement.style.position = 'fixed'
    
    // Prevent touch scrolling on mobile
    document.body.style.touchAction = 'none'
    document.documentElement.style.touchAction = 'none'
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
    document.body.style.height = ''
    document.body.style.width = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.bottom = ''
    document.body.style.margin = ''
    document.body.style.padding = ''
    document.body.style.touchAction = ''
    
    document.documentElement.style.overflow = ''
    document.documentElement.style.height = ''
    document.documentElement.style.width = ''
    document.documentElement.style.position = ''
    document.documentElement.style.touchAction = ''
  }
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

/* Prevent body scrolling */
:deep(body),
:deep(html) {
  overflow: hidden !important;
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Prevent any scrolling on the main container */
.fixed {
  overflow: hidden !important;
  overscroll-behavior: none !important;
}
</style>

