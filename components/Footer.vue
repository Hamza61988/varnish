<template>
  <footer
    class="bg-white border-t border-gray-200 mt-auto"
    style="background-color: #ffffff; border: none"
  >
    <div
      class="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
      style="margin-top: 20px; margin-bottom: 20px"
    >
      <!-- Top Section: Custom Grid -->
      <div
        class="flex flex-col sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-12 gap-6 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12"
      >
        <!-- Column 1: Company Info - Full width on mobile/tablet, 6 columns on desktop -->
        <div
          class="space-y-3 sm:space-y-4 lg:col-span-6 sm:col-span-3 text-left"
        >
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img
              src="/icons/Company-logo.svg"
              alt="Varnish Logo"
              class="h-9 w-9 sm:h-8 sm:w-8"
            />
            <span style="font-weight: 500;" class="text-xl font-bold   text-gray-900"
              >Varnish</span
            >
          </NuxtLink>
          <p
            class="leading-relaxed w-[350px] text-[14px] sm:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: -0.006em;
              color: #73737F;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            tristique risus. Suspendisse semper.
          </p>

          <div class="flex items-center gap-2">
  <div class="flex gap-1">
    <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  </div>
  
  <span class="text-[14px] text-[#1a1925] " style=" font-weight: 500;">4.98/5</span>
</div>

<!-- ratings -->

<div class="flex flex-row items-start md:justify-start justify-between gap-12 sm:gap-16 pt-5">
  
  <div class="flex flex-col items-start gap-1">
    <span class="text-[1rem] text-[#1a1925] " style=" font-weight: 500;">4.8/5</span>
    <span class="text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide">Ratings</span>
  </div>

  <div class="flex flex-col items-start gap-1">
    <span class="text-[1rem] text-[#1a1925] " style=" font-weight: 500;">4.7/5</span>
    <span class="text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide">Reviews</span>
  </div>

  <div class="flex flex-col items-start gap-1">
    <span class="text-[1rem] text-[#1a1925] " style=" font-weight: 500;">4.9/5</span>
    <span class="text-[0.75rem] font-semibold text-gray-500 uppercase tracking-wide">Feedback</span>
  </div>

</div>
          <!-- Award Badge -->
          <div class="flex items-center justify-start space-x-2 pt-1">
            <img
              src="/images/Frame-2147225686.svg"
              alt="BEST CDN AWARD"
              class="h-[50px] sm:h-[62px] w-auto"
            />
          </div>
        </div>

        <!-- Column 2: Product - Full width on mobile, 1 column on tablet, 2 columns on desktop -->
        <div class="lg:col-span-2 sm:col-span-1 md:mt-0 mt-5 text-left">
          <h3
            class="mb-1 sm:mb-4 text-sm sm:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #1a1a2e;
            "
          >
            Product
          </h3>
          <ul class="space-y-1 sm:space-y-3">
            <li>
              <NuxtLink
                to="/features"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Features
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Network
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tools"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                API
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company - Full width on mobile, 1 column on tablet, 2 columns on desktop -->
        <div class="lg:col-span-2 sm:col-span-1 text-left">
          <h3
            class="mb-1 sm:mb-4  text-[14px] sm:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #1a1a2e;
            "
          >
            Company
          </h3>
          <ul class="space-y-1 sm:space-y-3">
            <li>
              <NuxtLink
                to="/about"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/referral"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Referral
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/careers"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Careers
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Support - Full width on mobile, 1 column on tablet, 2 columns on desktop -->
        <div class="lg:col-span-2 sm:col-span-1 text-left">
          <h3
            class="mb-1 sm:mb-4 text-[14px] sm:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 500;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #1a1a2e;
            "
          >
            Support
          </h3>
          <ul class="space-y-1 sm:space-y-3">
            <li>
              <NuxtLink
                to="/support"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Knowledge Base
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Network Status
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                Open Source
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="hover:text-black text-[#73737F] transition-opacity text-[14px] sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  
                "
              >
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: System Status & Copyright -->
      <div
        class="flex flex-col sm:flex-row md:items-start sm:items-center items-center md:justify-between  pt-12 border-t border-gray-200 gap-4 sm:gap-0"
      >
        <!-- System Status -->
        <div class="flex items-center order-1">
          <div
            class="flex items-center space-x-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-300 rounded-full"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"
              ></span>
            </span>
            <span class="text-[14px] sm:text-sm text-gray-900"
              >All systems operational</span
            >
          </div>
        </div>

        <!-- Copyright & Legal Links -->
        <div
          class="flex text-[#73737F] flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 order-2"
        >
          <span
            class="text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              
            "
          >
            &copy; 2025 Varnish Inc.
          </span>
          <a
            href="#"
            class="hover:text-black text-[#73737F] transition-opacity text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              
            "
          >
            Privacy Policy
          </a>
          <a
            href="#"
            class="hover:text-black text-[#73737F] transition-opacity text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              
            "
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - no script needed
</script>
