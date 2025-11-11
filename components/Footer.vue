<template>
  <footer
    class="bg-white border-t border-gray-200 mt-auto"
    style="background-color: #ffffff"
  >
    <div
      class="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
      style="margin-top: 20px; margin-bottom: 20px"
    >
      <!-- Top Section: Custom Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
        <!-- Column 1: Company Info - Full width on mobile/tablet, 6 columns on desktop -->
        <div class="space-y-3 sm:space-y-4 lg:col-span-6 col-span-3 sm:col-span-3 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start space-x-2">
            <img
              src="/icons/Company logo.svg"
              alt="Varnish Logo"
              class="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span class="text-lg sm:text-xl font-bold text-gray-900">Varnish</span>
          </div>
          <p
            class="leading-relaxed text-sm sm:text-base"
            style="
              font-family: 'Bricolage Grotesque', sans-serif;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: -0.006em;
              color: #73737f;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            tristique risus. Suspendisse semper.
          </p>
          <!-- Award Badge -->
          <div class="flex items-center justify-center sm:justify-start space-x-2 pt-1">
            <img
              src="/images/Frame 2147225686.svg"
              alt="BEST CDN AWARD"
              class="h-[50px] sm:h-[62px] w-auto"
            />
          </div>
        </div>

        <!-- Column 2: Product - 1 column on mobile/tablet (in line with Company & Support), 2 columns on desktop -->
        <div class="lg:col-span-2 col-span-1 text-center sm:text-left">
          <h3
            class="mb-3 sm:mb-4 text-sm sm:text-base"
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
          <ul class="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Network
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                API
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company - 1 column on mobile/tablet (in line with Product & Support), 2 columns on desktop -->
        <div class="lg:col-span-2 col-span-1 text-center sm:text-left">
          <h3
            class="mb-3 sm:mb-4 text-sm sm:text-base"
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
          <ul class="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Referral
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Support - 1 column on mobile/tablet (in line with Product & Company), 2 columns on desktop -->
        <div class="lg:col-span-2 col-span-1 text-center sm:text-left">
          <h3
            class="mb-3 sm:mb-4 text-sm sm:text-base"
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
          <ul class="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Knowledge Base
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Network Status
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Open Source
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: System Status & Copyright -->
      <div
        class="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-gray-200 gap-4 sm:gap-0"
      >
        <!-- System Status -->
        <div class="flex items-center order-2 sm:order-1">
          <div
            class="flex items-center space-x-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-300 rounded-full"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"
              ></span>
            </span>
            <span class="text-xs sm:text-sm text-gray-900">All systems operational</span>
          </div>
        </div>

        <!-- Copyright & Legal Links -->
        <div
          class="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 order-1 sm:order-2"
        >
          <span
            class="text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #51515e;
            "
          >
            &copy; 2025 Varnish Inc.
          </span>
          <a
            href="#"
            class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #51515e;
            "
          >
            Privacy Policy
          </a>
          <a
            href="#"
            class="hover:opacity-80 transition-opacity text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: -0.006em;
              color: #51515e;
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
