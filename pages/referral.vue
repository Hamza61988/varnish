<template>
  <div
    class="min-h-screen relative overflow-hidden"
    style="background: #ffffff"
  >
    <main>
      <section
        class="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto px-4 sm:px-6 md:px-0"
        style="padding: 4%"
      >
        <!-- Section Label -->
        <div
          class="flex items-center justify-start lg:justify-center"
          style="margin-bottom: 24px"
        >
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
            <!-- Lightning Bolt Icon -->
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
              Referral
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1
          class="text-left lg:text-center"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -0.02em;
            vertical-align: middle;
            color: #1a1925;
            margin-bottom: 16px;
          "
        >
          Referral program
        </h1>

        <!-- Subtitle -->
        <p
          class="text-left lg:text-center"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
            margin-bottom: 48px;
          "
        >
          We offer a high reward credit system for all successful referrals.
        </p>

        <!-- Company Overview & Key Values Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">
          <!-- Left Column - Company Description -->
          <div class="w-full m-auto">
            <p
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                letter-spacing: -0.006em;
                text-align: justify;
                color: #73737f;
                margin-bottom: 16px;
              "
            >
              We are a leading CDN provider from Switzerland that has built a
              high performance content delivery network. Our content delivery
              network can accelerate any type of content for all users around
              the globe. Consider taking part in our referral program if you
              have enjoyed the benefits that our network has brought.
            </p>
            <p
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                letter-spacing: -0.006em;
                text-align: justify;
                color: #73737f;
                margin-bottom: 0;
              "
            >
              Give 10 credits to every referral, which equals up to 250 GB of
              free traffic. Receive 100% of the first payment made by each
              referral once the credits have been completely used.
            </p>
          </div>

          <!-- Right Column - Key Values Cards -->
          <div
            class="w-full mt-8 mb-8 lg:mt-0 lg:mb-0 flex flex-col items-start lg:items-center"
            style="gap: 16px"
          >
            <!-- Outcome-oriented culture -->
            <div
              class="flex gap-4 referral-card"
              style="
                width: 100%;
                height: 141px;
                border-radius: 20px;
                border: 1px solid #eeeef0;
                background: #ffffff;
                padding-top: 17px;
                padding-right: 24px;
                padding-bottom: 17px;
                padding-left: 24px;
              "
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full"
              >
                <img
                  src="/images/referrelVectore1.svg"
                  alt="Icon"
                  style="width: 52px; height: 52px"
                />
              </div>
              <div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Create account
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Get started by creating and maintaining an active KeyCDN
                  account.
                </p>
              </div>
            </div>

            <!-- International team -->
            <div
              class="flex gap-4 referral-card"
              style="
                width: 100%;
                height: 141px;
                border-radius: 20px;
                border: 1px solid #eeeef0;
                background: #ffffff;
                padding-top: 17px;
                padding-right: 24px;
                padding-bottom: 17px;
                padding-left: 24px;
              "
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full"
              >
                <img
                  src="/images/referrelVectore2.svg"
                  alt="Icon"
                  style="width: 52px; height: 52px"
                />
              </div>
              <div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Share link
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Proceed with sharing our content delivery network with anyone
                  that would benefit.
                </p>
              </div>
            </div>

            <!-- Pride in your craft -->
            <div
              class="flex gap-4 referral-card"
              style="
                width: 100%;
                height: 141px;
                border-radius: 20px;
                border: 1px solid #eeeef0;
                background: #ffffff;
                padding-top: 17px;
                padding-right: 24px;
                padding-bottom: 17px;
                padding-left: 24px;
              "
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full"
              >
                <img
                  src="/images/referrelVectore3.svg"
                  alt="Icon"
                  style="width: 52px; height: 52px"
                />
              </div>
              <div>
                <h3
                  class="mb-2"
                  style="
                    font-family: 'Bricolage Grotesque', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Earn credits
                </h3>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Continue earning payouts in KeyCDN credits for each qualifying
                  referral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionsAccessAllFeaturesSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import SectionsAccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 1023px) {
  .referral-card {
    width: 100% !important;
  }
}
@media (min-width: 1024px) {
  .referral-card {
    width: 90% !important;
  }
}
</style>
