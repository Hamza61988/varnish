<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Main Content -->
    <main
      class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <!-- Header Section -->
      <section
        class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto px-4 sm:px-6 md:px-0 mb-12 sm:mb-16 md:mb-20"
      >
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-bottom: 4px;
              padding-left: 8px;
              padding-right: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 fill-[#A3A3AE] stroke-[#A3A3AE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              style="color: #1a1925"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                text-align: center;
                color: #1a1925;
              "
            >
              Blog
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1
          class="text-center mb-4 sm:mb-6"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            font-style: Medium;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.02em;
            text-align: center;
            vertical-align: middle;
            color: rgba(26, 25, 37, 1);
          "
        >
          Blogs
        </h1>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-style: Regular;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: rgba(81, 81, 94, 1);
          "
        >
          Insights and advice for improving web performance.
        </p>
      </section>

      <!-- Blog Posts Section -->
      <section class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
        <div class="flex flex-col gap-[40px]">
          <!-- Blog Post Card 1 -->
          <div
            class="overflow-hidden"
            style="
              height: 503px;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.25);
              border-bottom-right-radius: 14px;
              border-bottom-left-radius: 14px;
              opacity: 1;
            "
          >
            <!-- Blue Header Section -->
            <div
              class="relative"
              style="
                height: 305px;
                background: rgba(63, 120, 255, 1);
                padding: 51px 230px;
                border-top-left-radius: 14px;
                border-top-right-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 1;
              "
            >
              <!-- Shopping Cart with Plus Icon -->
              <div class="relative" style="width: 96px; height: 96px">
                <img
                  src="/icons/network4.svg"
                  alt="Company logo"
                  style="width: auto"
                />
              </div>

              <!-- Category Label -->
              <div
                class="absolute bottom-4 left-0"
                style="
                  width: 256px;
                  height: 41px;
                  background: rgba(255, 255, 255, 1);
                  opacity: 1;
                "
              >
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 15.88px;
                    line-height: 18.35px;
                    letter-spacing: 0px;
                    text-align: center;
                    color: rgba(0, 0, 0, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                  "
                >
                  Ecommerce Conversion Rate
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5">
              <!-- Title -->
              <h2
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  vertical-align: middle;
                  color: rgba(26, 25, 37, 1);
                "
              >
                10 Proven Ways to Improve Your Ecommerce Conversion Rate
              </h2>

              <!-- Description -->
              <p
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-style: Regular;
                  font-size: 13px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: rgba(0, 0, 0, 1);
                "
              >
                The world of ecommerce continues to grow year by year. As
                consumers want to purchase items from the comfort of their own
                home and have them delivered in a timely manner, the
                opportunities in ecommerce are ever-expanding. The expectation
                for a good user experience is now higher than ever. Customer
                want to know they can trust the website they are buying from,
                they want to access the website fast, and they want a great
                offer.
              </p>

              <!-- Date and Read More -->
              <div class="flex items-center justify-between">
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #000000;
                  "
                >
                  January 18, 2025
                </span>
                <a
                  href="#"
                  class="hover:underline"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: rgba(31, 98, 255, 1);
                  "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <!-- Blog Post Card 2 -->
          <div
            class="overflow-hidden"
            style="
              height: 503px;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.25);
              border-bottom-right-radius: 14px;
              border-bottom-left-radius: 14px;
              opacity: 1;
            "
          >
            <!-- Blue Header Section -->
            <div
              class="relative"
              style="
                height: 305px;
                background: rgba(63, 120, 255, 1);
                padding: 51px 230px;
                border-top-left-radius: 14px;
                border-top-right-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 1;
              "
            >
              <!-- Shopping Cart with Plus Icon -->
              <div class="relative" style="width: 96px; height: 96px">
                <!-- Shopping Cart Icon -->
                <img
                  src="/icons/network4.svg"
                  alt="Company logo"
                  style="width: auto"
                />
              </div>

              <!-- Category Label -->
              <div
                class="absolute bottom-4 left-0"
                style="
                  width: 256px;
                  height: 41px;
                  background: rgba(255, 255, 255, 1);
                  opacity: 1;
                "
              >
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 15.88px;
                    line-height: 18.35px;
                    letter-spacing: 0px;
                    text-align: center;
                    color: rgba(0, 0, 0, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                  "
                >
                  Ecommerce Conversion Rate
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5">
              <!-- Title -->
              <h2
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  vertical-align: middle;
                  color: rgba(26, 25, 37, 1);
                "
              >
                10 Proven Ways to Improve Your Ecommerce Conversion Rate
              </h2>

              <!-- Description -->
              <p
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-style: Regular;
                  font-size: 13px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: rgba(0, 0, 0, 1);
                "
              >
                The world of ecommerce continues to grow year by year. As
                consumers want to purchase items from the comfort of their own
                home and have them delivered in a timely manner, the
                opportunities in ecommerce are ever-expanding. The expectation
                for a good user experience is now higher than ever. Customer
                want to know they can trust the website they are buying from,
                they want to access the website fast, and they want a great
                offer.
              </p>

              <!-- Date and Read More -->
              <div class="flex items-center justify-between">
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  January 18, 2025
                </span>
                <a
                  href="#"
                  class="hover:underline"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: rgba(31, 98, 255, 1);
                  "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <!-- Blog Post Card 3 -->
          <div
            class="overflow-hidden"
            style="
              height: 503px;
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.25);
              border-bottom-right-radius: 14px;
              border-bottom-left-radius: 14px;
              opacity: 1;
            "
          >
            <!-- Blue Header Section -->
            <div
              class="relative"
              style="
                height: 305px;
                background: rgba(63, 120, 255, 1);
                padding: 51px 230px;
                border-top-left-radius: 14px;
                border-top-right-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 1;
              "
            >
              <!-- Shopping Cart with Plus Icon -->
              <div class="relative" style="width: 96px; height: 96px">
                <img
                  src="/icons/network4.svg"
                  alt="Company logo"
                  style="width: auto"
                />
              </div>

              <!-- Category Label -->
              <div
                class="absolute bottom-4 left-0"
                style="
                  width: 256px;
                  height: 41px;
                  background: rgba(255, 255, 255, 1);
                  opacity: 1;
                "
              >
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 15.88px;
                    line-height: 18.35px;
                    letter-spacing: 0px;
                    text-align: center;
                    color: rgba(0, 0, 0, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                  "
                >
                  Ecommerce Conversion Rate
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5">
              <!-- Title -->
              <h2
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  vertical-align: middle;
                  color: rgba(26, 25, 37, 1);
                "
              >
                10 Proven Ways to Improve Your Ecommerce Conversion Rate
              </h2>

              <!-- Description -->
              <p
                class="mb-4"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-style: Regular;
                  font-size: 13px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: rgba(0, 0, 0, 1);
                "
              >
                The world of ecommerce continues to grow year by year. As
                consumers want to purchase items from the comfort of their own
                home and have them delivered in a timely manner, the
                opportunities in ecommerce are ever-expanding. The expectation
                for a good user experience is now higher than ever. Customer
                want to know they can trust the website they are buying from,
                they want to access the website fast, and they want a great
                offer.
              </p>

              <!-- Date and Read More -->
              <div class="flex items-center justify-between">
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  January 18, 2025
                </span>
                <a
                  href="#"
                  class="hover:underline"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: rgba(31, 98, 255, 1);
                  "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Blog page
</script>
