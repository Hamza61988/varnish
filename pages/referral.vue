<template>
  <div class="min-h-screen pt-10 relative overflow-hidden">
    <main>
      <section class="site-padding site-margins">
        <!-- Section Label -->
        <CommonTitle
          upername="Referral"
          title="Referral program"
          subtitle="We offer a high reward credit system for all successful referrals."
          pcAlignment="center"
          mobileAlignment="center"
        />

        <!-- Company Overview & Key Values Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">
          <!-- Left Column - Company Description -->
          <div class="w-full m-auto">
            <p
              class="text-[13px] md:text-[1rem]"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
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
              class="text-[13px] md:text-[1rem]"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
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
                  class="mb-2 text-[1.5rem] md:text-[2rem]"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Create account
                </h3>
                <p
                  class="text-[13px] md:text-[1rem]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;
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
                  class="mb-2 text-[1.5rem] md:text-[2rem]"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Share link
                </h3>
                <p
                  class="text-[13px] md:text-[1rem]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;
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
                  class="mb-2 text-[1.5rem] md:text-[2rem]"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Earn credits
                </h3>
                <p
                  class="text-[13px] md:text-[1rem]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;
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
import SectionsAccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
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
