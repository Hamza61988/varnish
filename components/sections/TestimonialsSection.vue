<template>
  <section
    class="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24"
    style="background: #f7f7f8"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
        <!-- Section Label -->
        <div class="flex items-center justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center"
            style="
              height: 24px;
              gap: 2px;
              border-radius: 999px;
              padding-top: 4px;
              padding-right: 8px;
              padding-bottom: 4px;
              padding-left: 8px;
              background: #ffffffe5;
              box-shadow: 0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Sparkle/Star Icon -->
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
              Testimonials
            </span>
          </div>
        </div>

        <!-- Title -->
        <h2
          class="text-center mb-4 sm:mb-6"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            font-style: SemiBold;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.04em;
            text-align: center;
            vertical-align: middle;
            text-transform: capitalize;
            color: #1a1925;
          "
        >
          Trusted By Thousands
        </h2>

        <!-- Subtitle -->
        <p
          class="text-center mb-8 sm:mb-10 md:mb-12 text-sm md:text-base max-w-2xl mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Over 40,000 customers trust Varnish to deliver content to millions.
        </p>
      </div>

      <!-- Testimonial Card -->
      <div
        class="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
      >
        <!-- Left: Image -->
        <div
          class="flex items-center justify-center overflow-hidden mx-auto md:mx-0"
          style="
            width: 50%;
            border-radius: 28px;
            background: rgba(0, 0, 0, 0.12);
          "
        >
          <img
            src="/images/Video_image.svg"
            alt="Angela Moss"
            class="w-full h-full object-cover"
            style="border-radius: 28px"
          />
        </div>

        <!-- Right: Quote and Navigation -->
        <div
          class="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 mx-auto md:mx-0 relative overflow-hidden"
          style="
            width: 100%;
            border-radius: 28px;
            background: #eeeef0;
            box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
              0px 1px 1px 0px rgba(26, 25, 37, 0.08),
              0px 1px 2px -1px rgba(26, 25, 37, 0.06);
          "
        >
          <!-- Background Decorative Image -->
          <div
            class="absolute"
            style="
              width: 238.78px;
              height: 235.45px;
              top: 300px;
              left: 530px;
              opacity: 1;
            "
          >
            <img
              src="/images/terminate_vector.svg"
              alt="Decorative background"
              class="w-full h-full object-contain"
              style="width: 100%; height: 100%; display: block"
            />
          </div>
          <!-- Name and Navigation -->
          <div
            class="flex items-start justify-between mb-4 sm:mb-6 relative z-10"
          >
            <div>
              <h3
                class="mb-1"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 24px;
                  letter-spacing: -0.015em;
                  color: #1a1925;
                "
              >
                Angela Moss
              </h3>
              <p
                class=""
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #73737f;
                "
              >
                CTO at Meteor
              </p>
            </div>
            <!-- Navigation Arrows -->
            <div class="flex items-center gap-2">
              <button
                class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                style="color: #73737f"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors"
                style="background: #1a1925; color: #ffffff; border-radius: 8px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Quote -->
          <div class="relative flex-1 z-10">
            <p
              class=""
              style="
                font-family: 'Bricolage Grotesque', sans-serif;
                font-weight: 500;
                font-size: 28px;
                line-height: 36px;
                letter-spacing: -0.02em;
                vertical-align: middle;
                color: #51515e;
              "
            >
              Varnish has been an excellent CDN for us. Setup was quick and
              easy, and the Let's Encrypt integration makes SSL setup completely
              painless.
            </p>
          </div>
        </div>
      </div>

      <!-- Statistics and Ratings -->
      <div class="flex" style="justify-content: space-between; width: 100%">
        <!-- Statistics Box 1 -->
        <div class="flex flex-row gap-2 sm:gap-3" style="gap: 10px">
          <div
            class="flex items-center justify-center"
            style="
              width: 227px;
              height: 52px;
              gap: 10px;
              border-radius: 10px;
              padding-top: 10px;
              padding-right: 16px;
              padding-bottom: 10px;
              padding-left: 16px;
              background: #eeeef0;
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <p
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                font-style: Medium;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.02em;
                text-align: center;
                vertical-align: middle;
                color: #73737f;
                margin: 0;
              "
            >
              <span style="color: #000000">145</span>+ global reach
            </p>
          </div>

          <!-- Statistics Box 2 -->
          <div
            class="flex items-center justify-center"
            style="
              width: 227px;
              height: 52px;
              gap: 10px;
              border-radius: 10px;
              padding-top: 10px;
              padding-right: 16px;
              padding-bottom: 10px;
              padding-left: 16px;
              background: #eeeef0;
              box-shadow: 0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.08),
                0px 1px 1px 0px rgba(26, 25, 37, 0.08),
                0px 1px 2px -1px rgba(26, 25, 37, 0.06);
            "
          >
            <p
              style="
                font-family: 'Funnel Display', sans-serif;
                font-weight: 500;
                font-style: Medium;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.02em;
                text-align: center;
                vertical-align: middle;
                color: #73737f;
                margin: 0;
              "
            >
              <span style="color: #000000">$68B</span> in revenue
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-2 sm:gap-3">
          <!-- Google Rating Box -->
          <div
            class=""
            style="
              background-color: transparent;
              display: flex;
              align-items: center;
            "
          >
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0"
            >
              <!-- Google G Logo -->
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <p
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-style: Medium;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                vertical-align: middle;
                color: #73737f;
                margin: 0;
              "
            >
              <span
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0%;
                  vertical-align: middle;
                  color: #1a1925;
                "
                >4.8</span
              >
              Google
            </p>
          </div>

          <!-- Trustpilot Rating Box -->
          <div
            class=""
            style="
              background-color: transparent;
              display: flex;
              align-items: center;
            "
          >
            <div class="flex items-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-6 sm:w-6 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-style: Medium;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0%;
                vertical-align: middle;
                color: #73737f;
                margin: 0;
              "
            >
              <span
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0%;
                  vertical-align: middle;
                  color: #1a1925;
                "
                >4.9</span
              >
              Trustpilot
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Testimonials Section Component
</script>
