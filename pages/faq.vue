<template>
  <div class="min-h-screen  relative overflow-hidden">
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url('/images/about/BGline.svg');
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <!-- Main Content -->
    <main
      class="container mx-auto px-[57.5px] md:px-0 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"
    >
      <!-- FAQ Section -->
      <section class="w-full max-w-4xl mx-auto ">
        <!-- Section Label -->
        <div class="flex items-center md:justify-center mb-4 sm:mb-6">
<SectionsUpername name="FAQ'S" />
        </div>

        <!-- Title -->
        <h1
          class="md:text-center text-[2rem] md:text-[3rem] mb-4 sm:mb-6"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
          
            line-height: 56px;
            letter-spacing: -0.02em;
           
            color: #1A1925;
          "
        >
          Frequently Asked Questions
        </h1>

        <!-- Subtitle -->
        <p
          class="md:text-center text-[0.875rem] md:text-[1rem] mb-8 sm:mb-10 md:mb-12"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.011em;
           
            color: #51515E;
          "
        >
          Get quick answers to common questions that are often asked.
        </p>

        <!-- FAQ Items -->
        <div class="space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
          <!-- FAQ Item 1 -->
          <div
            class="relative overflow-hidden"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #EEEEF0;
              background: #FFFFFF;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative  z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1A1925;
                "
              >
                1. What is Varnish?
              </h3>
              <p class="text-[0.875rem] md:text-[0.9375rem]"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515E;
                "
              >
                Varnish is a high-performance content delivery network (CDN) that
                delivers websites, applications, and digital content faster, more
                reliably, and securely to users worldwide.
              </p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div
            class="relative overflow-hidden"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #EEEEF0;
              background: #FFFFFF;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative  z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1A1925;
                "
              >
                2. Who can use Varnish?
              </h3>
              <p class="text-[0.875rem] md:text-[0.9375rem]"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515E;
                "
              >
                Varnish is suitable for businesses of all sizes, developers, SaaS
                platforms, e-commerce sites, and digital publishers looking to
                enhance performance and user experience.
              </p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div
            class="relative overflow-hidden"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #EEEEF0;
              background: #FFFFFF;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative  z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1A1925;
                "
              >
                3. What types of content can Varnish deliver?
              </h3>
              <p class="text-[0.875rem] md:text-[0.9375rem]"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515E;
                "
              >
                Varnish delivers all digital content, including websites, videos,
                images, APIs, software, and web applications, supporting both
                static and dynamic content efficiently.
              </p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div
            class="relative overflow-hidden"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #EEEEF0;
              background: #FFFFFF;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative  z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1A1925;
                "
              >
                4. How do I get support?
              </h3>
              <p class="text-[0.875rem] md:text-[0.9375rem]"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515E;
                "
              >
                Our support team is available to help with setup, troubleshooting,
                and performance optimization, ensuring your content delivery runs
                smoothly at all times.
              </p>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div
            class="relative overflow-hidden"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #EEEEF0;
              background: #FFFFFF;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
                opacity: 1;
                border: 0.8px solid;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url('/images/about/bgcard.svg');
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative  z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: 'Bricolage Grotesque', sans-serif;
                  font-weight: 600;
                  
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1A1925;
                "
              >
                5. How quickly can I get started?
              </h3>
              <p class="text-[0.875rem] md:text-[0.9375rem]"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515E;
                "
              >
                You can set up Varnish in just a few minutes. Our platform is
                user-friendly, allowing immediate content delivery, while advanced
                settings let you customize caching, security, and delivery rules for
                more complex needs.
              </p>
            </div>
          </div>
        </div>

        <!-- Have More Questions Section -->
        <div class="md:text-center">
          <p
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 500;
              font-size: 18px;
              line-height: 24px;
              letter-spacing: -0.011em;
              color: #1a1925;
            "
          >
            Have more questions?
            <NuxtLink
              to="/contact"
              class="inline-block py-1 rounded text-white hover:opacity-90 transition-opacity"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.011em;
                color: #1F62FF;
              "
            >
              Contact Us
            </NuxtLink>
            at anytime for additional help.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// FAQ page
</script>

