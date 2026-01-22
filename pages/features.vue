<template>
  <div
    class="min-h-screen relative overflow-hidden"
    style="background: #f7f7f8"
  >
    <!-- Main Content -->
    <main
      class="flex flex-col gap-[100px] md:gap-[122px] site-padding site-margins"
    >
      <!-- Features Section -->
      <section>
        <commonTitle
          upername="Multiple Features"
          title="Features"
          subtitle="Get access to all of our features no matter the account size."
          mobileAlignment="center"
          pcAlignment="center"
        />

        <LandingFeatures :features="features" />
      </section>

      <!-- General Section -->
      <section
        class="flex md:px-[38.5px] px-0 flex-col gap-[40px] md:gap-[80px]"
      >
        <div class="">
          <div class="flex flex-col lg:flex-row gap-[0.875rem] md:gap-[2.5rem]">
            <!-- Mobile/Tablet: Content First, Desktop: Feature List First -->
            <div class="w-full lg:w-1/3 order-2 lg:order-1">
              <div
                class="rounded-[20px] border border-[#eeeef0] bg-white py-[10px] px-[6px]"
                style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
              >
                <ul class="space-y-3">
                  <li
                    v-for="(feature, index) in featuresList"
                    :key="index"
                    class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                    :class="
                      index === featuresList.length - 1
                        ? 'bg-[#eeeef0]'
                        : 'hover:bg-gray-50'
                    "
                  >
                    <span
                      style="
                        font-family: &quot;Inter&quot;, sans-serif;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 20px;
                        color: #73737f;
                      "
                    >
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Mobile/Tablet: Content Second, Desktop: Content Second -->
            <div class="w-full lg:flex-1 flex items-center order-1 lg:order-2">
              <div>
                <h2
                  class="mb-[14px] text-[24px] md:text-[32px] text-left"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  General
                </h2>
                <p
                  class="text-left text-[0.8125rem] md:text-[1rem]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;

                    line-height: 26px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Global expectations for fast loading content is at an all-time
                  high. Users expect content to be delivered at near instant
                  speeds. We have built a high performance content delivery
                  network that can meet the demands faced today and is ready for
                  what the future holds.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Security div -->
        <div class="w-full mx-auto lg:px-0">
          <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
            <!-- Mobile/Tablet: Content First, Desktop: Content First -->
            <div class="w-full lg:flex-1 flex items-center order-1">
              <div>
                <h2
                  class="mb-[14px] text-[24px] md:text-[32px] text-left"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Security
                </h2>
                <p
                  class="text-left text-[14px] md:text-[16px]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;

                    line-height: 26px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Digital threats increase every day as the total number of
                  people regularly accessing the internet grows. We understand
                  the importance of a perfect uptime and rock solid security. We
                  have proactively implemented many measures to prevent attacks
                  and unauthorized actions.
                </p>
              </div>
            </div>

            <!-- Mobile/Tablet: Feature List Second, Desktop: Feature List Second -->
            <div class="w-full lg:w-1/3 order-2">
              <div
                class="rounded-[20px] border border-[#eeeef0] bg-white py-[10px] px-[6px]"
                style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
              >
                <!-- Title -->

                <ul class="space-y-3">
                  <li
                    v-for="(feature, index) in featuresList"
                    :key="index"
                    class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                    :class="
                      index === featuresList.length - 1
                        ? 'bg-[#F7F7F8]'
                        : 'hover:bg-gray-50'
                    "
                  >
                    <span
                      style="
                        font-family: &quot;Inter&quot;, sans-serif;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 20px;
                        color: #73737f;
                      "
                    >
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Zones div -->
        <div class="w-full mx-auto lg:px-0">
          <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
            <!-- Mobile/Tablet: Feature List First, Desktop: Feature List First -->
            <div class="w-full lg:w-1/3 md:order-1 order-2">
              <div
                class="rounded-[20px] border border-[#eeeef0] bg-white py-[10px] px-[6px]"
                style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
              >
                <!-- Title -->

                <ul class="space-y-3">
                  <li
                    v-for="(feature, index) in featuresList"
                    :key="index"
                    class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors"
                    :class="
                      index === featuresList.length - 1
                        ? 'bg-[#F7F7F8]'
                        : 'hover:bg-gray-50'
                    "
                  >
                    <span
                      style="
                        font-family: &quot;Inter&quot;, sans-serif;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 20px;
                        color: #73737f;
                      "
                    >
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Mobile/Tablet: Content Second, Desktop: Content Second -->
            <div class="w-full lg:flex-1 flex items-center md:order-2 order-1">
              <div>
                <h2
                  class="mb-[14px] text-[24px] md:text-[32px] text-left"
                  style="
                    font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: #1a1925;
                  "
                >
                  Zones
                </h2>
                <p
                  class="text-left text-[14px] md:text-[16px]"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;

                    line-height: 26px;
                    letter-spacing: -0.006em;
                    color: #51515e;
                  "
                >
                  Every application typically has a large list of necessary
                  requirements. We understand that adding a CDN service to a
                  stack may become overwhelming. We have made sure that our
                  platform can be easily configured to meet almost any
                  specification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Powerful Platform Section -->
      <section class="flex flex-col">
        <!-- Section Label -->

        <commonTitle
          upername="Platform"
          title="Powerful Platform"
          subtitle="Content delivery is a breeze with our user-friendly dashboard."
          alignment="center"
        />

        <!-- Platform Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          <!-- Flexible Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow:
                  0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
                  opacity: 1;
                  border: 0.8px solid;
                  border-image-source: radial-gradient(
                    81.86% 81.86% at 100% 100%,
                    rgba(26, 25, 37, 0.12) 0%,
                    rgba(26, 25, 37, 0) 77.02%
                  );
                  border-image-slice: 1;
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-size: contain;
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Flexible Icon -->
                  <img
                    src="/images/feature_icon_1.svg"
                    alt="Flexible"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Flexible
            </h3>
            <!-- Description -->
            <p
              class="mb-[23px] text-[14px] max-w-[230px] md:max-w-[256px] lg:text-[15px] text-left w-full"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;

                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Wide range of settings make sure content is delivered in the exact
              way needed.
            </p>
            <Button
              name="Get Started"
              variant="secondary"
              customClass="w-1/2"
            />
          </div>

          <!-- Programmatic Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow:
                  0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
                  opacity: 1;
                  border: 0.8px solid;
                  border-image-source: radial-gradient(
                    81.86% 81.86% at 100% 100%,
                    rgba(26, 25, 37, 0.12) 0%,
                    rgba(26, 25, 37, 0) 77.02%
                  );
                  border-image-slice: 1;
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-size: contain;
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Programmatic Icon -->
                  <img
                    src="/images/feature_icon_2.svg"
                    alt="Programmatic"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Programmatic
            </h3>
            <!-- Description -->
            <p
              class="mb-[23px] text-[14px] max-w-[230px] md:max-w-[256px] lg:font-[15px] text-left w-full"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;

                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              RESTful API allows complete account control from any application
              in any language.
            </p>
            <Button name="Learn More" variant="outline" customClass="w-1/2" />
          </div>

          <!-- Accurate Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border-radius: 20px;
                background: #ffffff;
                box-shadow:
                  0px 0.5px 0.5px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 1px 0px rgba(26, 25, 37, 0.04),
                  0px 1px 2px -1px rgba(26, 25, 37, 0.04);
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: 0px;
                  opacity: 1;
                  border: 0.8px solid;
                  border-image-source: radial-gradient(
                    81.86% 81.86% at 100% 100%,
                    rgba(26, 25, 37, 0.12) 0%,
                    rgba(26, 25, 37, 0) 77.02%
                  );
                  border-image-slice: 1;
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-size: contain;
                  border: none;
                "
              ></div>
              <!-- Card Background - bgcard.svg -->
              <div
                class="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none opacity-30"
                style="
                  background-image: url(&quot;/images/about/bgcard.svg&quot;);
                  background-repeat: no-repeat;
                  background-position: top right;
                  background-size: contain;
                "
              ></div>
              <!-- Icon -->
              <div class="relative flex items-center justify-center h-full">
                <div class="relative">
                  <!-- Icon Background -->
                  <div
                    class="absolute"
                    style="
                      width: 75px;
                      height: 75px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      z-index: 0;
                    "
                  ></div>
                  <!-- Accurate Icon -->
                  <img
                    src="/images/feature_icon_3.svg"
                    alt="Accurate"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 700;
                font-size: 24px;
                line-height: 24px;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Accurate
            </h3>
            <!-- Description -->
            <p
              class="mb-[23px] text-[14px] max-w-[230px] md:max-w-[256px] lg:font-[15px] text-left w-full"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;

                line-height: 20px;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Detailed reports give a deep understanding of how content is being
              delivered.
            </p>
            <Button name="Learn More" variant="outline" customClass="w-1/2" />
          </div>
        </div>
      </section>

      <!-- Easy Integration Section -->
      <section class="">
        <!-- Section Label -->
        <commonTitle
          upername="Integration"
          title="Easy Integration"
          subtitle="Add to any infrastructure in a matter of seconds."
          alignment="start"
        />
        <!-- Integration Content -->
        <div class="flex flex-col lg:flex-row gap-8 sm:gap-10">
          <!-- Left - Feature List -->
          <div class="w-full lg:w-1/3">
            <div
              class="rounded-[20px] border border-[#eeeef0] bg-white py-[10px] px-[6px]"
              style="box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05)"
            >
              <ul class="space-y-3">
                <li
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors bg-[#F7F7F8]"
                >
                  <span
                    style="
                      font-family: &quot;Inter&quot;, sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #1a1925;
                    "
                  >
                    Content management systems
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#1A1925"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li
                  class="flex items-center justify-between py-2 px-3 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <span
                    style="
                      font-family: &quot;Inter&quot;, sans-serif;
                      font-weight: 400;
                      font-size: 15px;
                      line-height: 20px;
                      color: #73737f;
                    "
                  >
                    Frameworks
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="#73737F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right - Integration Logos -->
          <div
            class="w-full lg:flex-1 flex items-center justify-center lg:items-start lg:justify-start"
          >
            <!-- Mobile/Tablet: Vertical Image -->
            <div class="w-full flex justify-center lg:hidden">
              <img
                src="/images/feature_lang_img2.png"
                alt="Integration Logos"
                class="h-auto opacity-60"
                style="max-width: 100%; width: auto"
              />
            </div>
            <!-- Desktop: Image -->
            <div class="hidden lg:flex w-full justify-start">
              <img
                src="/images/feature_lang_img.svg"
                alt="Integration Logos"
                class="w-full h-auto opacity-60"
                style="max-width: 100%"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="mb-12 sm:mb-8 md:mb-0">
      <SectionsAccessAllFeaturesSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import commonTitle from "~/components/common/Title.vue";
import SectionsAccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
import Button from "~/components/common/Button.vue";
const features = [
  {
    title: "Fast",
    description:
      "Our primary focus is on speed, improving performance by a millisecond at a time.",
    icon: `<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0782 29H0.91249C0.40867 29 0 28.5828 0 28.0688V0.931235C0 0.417188 0.408641 0 0.91249 0H31.0875C31.5913 0 32 0.417167 32 0.931235V28.0688C31.9905 28.5828 31.5915 29 31.0782 29ZM1.82498 27.1373H30.175V8.27628H1.82498V27.1373ZM1.82498 6.41323H30.175V1.8532H1.82498V6.41323ZM27.2768 3.07564C26.6781 3.07564 26.203 3.60935 26.203 4.25934C26.203 4.91928 26.6876 5.44304 27.2768 5.44304C27.866 5.44304 28.3508 4.90962 28.3508 4.25934C28.3603 3.59969 27.8758 3.07564 27.2768 3.07564ZM22.7055 4.25934C22.7055 3.60938 23.1901 3.07564 23.7793 3.07564C24.378 3.07564 24.8629 3.59966 24.8534 4.25934C24.8534 4.90959 24.378 5.44304 23.7793 5.44304C23.1901 5.44304 22.7055 4.91931 22.7055 4.25934ZM26.6116 24.5953C26.1078 24.5953 25.6991 24.1782 25.6991 23.6638C25.6991 21.083 24.7107 18.6576 22.9241 16.8333C21.1371 15.0094 18.7612 14.0004 16.2332 14.0004C15.1686 14.0004 14.1233 14.1751 13.1254 14.5341C12.6501 14.6991 12.1272 14.4466 11.9659 13.9616C11.8043 13.4764 12.0513 12.9429 12.5267 12.7779C13.7146 12.3608 14.9595 12.1471 16.2331 12.1471C19.246 12.1471 22.0875 13.3504 24.2162 15.5237C26.3453 17.697 27.5238 20.598 27.5238 23.6733C27.5238 24.1779 27.1154 24.5953 26.6116 24.5953ZM5.85515 24.5953C5.35133 24.5953 4.94266 24.1782 4.94266 23.6638C4.94266 21.3352 5.61758 19.0941 6.9004 17.173C7.18567 16.7462 7.74644 16.6393 8.16453 16.9306C8.58266 17.2215 8.68733 17.8037 8.40206 18.2211C7.32801 19.8316 6.75801 21.7137 6.75801 23.6638C6.7675 24.1781 6.35871 24.5953 5.85515 24.5953ZM16.1519 19.7552L9.00063 12.8265C8.65842 12.4868 8.11694 12.4868 7.76523 12.8071C7.41354 13.1271 7.36609 13.6705 7.65107 14.0586L13.6371 22.1104C13.6257 22.2127 13.6195 22.3167 13.6195 22.4221C13.6195 23.8967 14.7885 25.0901 16.2332 25.0901C17.6682 25.0901 18.8467 23.8967 18.8467 22.4221C18.8467 20.9472 17.6777 19.7539 16.2332 19.7539C16.2059 19.7539 16.179 19.7543 16.1519 19.7552ZM15.961 21.6655C16.0232 21.6575 16.0849 21.643 16.1449 21.6216C16.174 21.6185 16.2036 21.6168 16.2334 21.6168C16.661 21.6168 17.0222 21.9758 17.0222 22.4221C17.0222 22.8683 16.6705 23.2273 16.2334 23.2273C15.7963 23.2273 15.4446 22.8683 15.4446 22.4221C15.4446 22.0736 15.659 21.7784 15.961 21.6655Z" fill="black"/>
</svg>
`,
  },
  {
    title: "Scalable",
    description:
      "Our network can handle all levels of traffic, from a small blog to a top 10 website.",
    icon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="34" height="34" fill="url(#pattern0)" />
  <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0" transform="scale(0.0111111)" />
    </pattern>
    <image id="image0" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO2aTWvUUBSG34pNWn9BBdeu/B8i/T/i2hHxA7Qfui3iUlcFF/pjbEUdUEER0UMXLZULEWSYTJOc3Jx77n0fyGo4c/M+E07OTQYghBBCCCGEEEIIWcplAOvLPyqbDQA7AL4DOB/pEAAHAK50PIcKwC6AX8p1Q4Y9AJtIkKcjCl48XnQ8h0cjr7uPBPkSUfRJx3OYj7zuDwBrSIx5RNHnTWu6iI8R1k2ufdyPLLpL4McliF4HcBfAB0PRWwD+5C66L2FCOIwQ+ElL/RmAGyvqJEfRNYA3ka6srRXSXpYkuh4guW/gtlEzyLxUguh6oOS+gZ+3fMfvEkTXHSS/bWZmTeBrK74j7DKRs+iqw43vXRNKG/hZS/0pgOs5i656SNYGvrqifuixmVO72PivRiN6Z2TJLkTXAyRrRc9LE10PlKwV/akk0bVCslb0rBTRtVKyVnR4K3MPwOecRVc9p4vUxiwX491YkgMUPYHkAEVH6smLvDd6pZSs6BiS2yaHKV6SJik6luR/regBgK8Tv/ZPTnRMyVrCj/QQwLfmR9rv8Z+QpESnLLmt7YSnea5Ejz1dxOB4yTn97HgjTUK0B8laWeaivUh2L/pVwj05G9E3DSRXRpODqejbBlfyzGhyMBW9bdAujhRbcLeiQ7jXCwsfRu7JYiTL/Ga41lzZdwDcmmA9KVX01AhFT4NQ9DQIRU+DUHTemw7xKHrmcNPhUvSx0ePK4kSLQ1kUjfRrzRCHsiga6deaIQ5lUTTSr1VR2qZDrESXtukQK9GlbTrESrTHwELRyLpWhcfAQtHIulaFx8BC0ci6VoXHwELRyLpWhcfAQtHIulaFx8BC0ci6VoXHwELRyLpWhcfAQtHIulaFx8BC0ci6lhBCCCGEEEKQPH8BZTJTYfF4k0sAAAAASUVORK5CYII=" />
  </defs>
</svg>
`,
  },
  {
    title: "Reliable",
    description:
      "Our resilient infrastructure and 24/7 customer support assures high reliability.",
    icon: `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0" mask-type="luminance" maskUnits="userSpaceOnUse" x="2" y="0" width="30" height="30">
    <path d="M2.65527 0.55542H31.234V29.8065H2.65527V0.55542Z" fill="white"/>
  </mask>
  <g mask="url(#mask0)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2976 25.0201C22.1644 25.3301 22.2769 25.549 22.5702 25.6705L25.2888 26.5772C25.5626 26.6684 25.8593 26.5235 25.9517 26.2538C26.185 25.5741 25.1125 25.4294 24.1882 25.1212C26.1235 24.1097 27.773 22.6371 28.9858 20.8536C32.4858 15.7083 31.83 8.794 27.354 4.37508C23.7794 0.845918 18.5211 -0.331184 13.8026 1.23689C12.4285 1.69389 11.1553 2.36726 10.027 3.21475C9.79821 3.38735 9.75388 3.71076 9.92868 3.93667C10.1035 4.16301 10.4317 4.20633 10.6605 4.03374C11.6997 3.25266 12.8712 2.63328 14.1332 2.21328C15.1921 1.86106 16.3201 1.64924 17.4933 1.60069V2.87707C17.4933 3.16261 17.7278 3.39416 18.017 3.39416C18.3062 3.39416 18.5403 3.1626 18.5403 2.87707V1.60133C21.6895 1.73287 24.5289 3.04736 26.6147 5.10598C28.6997 7.16461 30.0311 9.96872 30.1645 13.0782H28.871C28.5818 13.0782 28.3478 13.3093 28.3478 13.5948C28.3478 13.8803 28.5818 14.1114 28.871 14.1114H30.1645C30.0673 16.3907 29.3268 18.5049 28.1192 20.2803C26.9941 21.9341 25.4641 23.2967 23.6706 24.2286L24.1801 22.7315C24.401 22.0874 23.4103 21.757 23.19 22.4004L22.2976 25.0201ZM18.0308 14.1112H23.8825C24.171 14.1112 24.4051 13.8797 24.4051 13.5946C24.4051 13.3098 24.1717 13.0775 23.8819 13.078H18.5403V5.24397C18.5403 4.95843 18.3063 4.72733 18.0171 4.72733C17.7279 4.72733 17.4938 4.95889 17.4938 5.24397V13.5813C17.4933 13.8866 17.7221 14.1114 18.0308 14.1114L18.0308 14.1112ZM13.674 28.7748C14.8347 29.4252 16.5839 30.0659 17.9918 29.7003C18.269 29.6278 18.5376 29.5159 18.8024 29.3644L20.2925 28.5133C21.0048 28.0833 21.2416 27.1718 20.824 26.4569L18.2886 22.1202C17.8632 21.3919 16.9216 21.1431 16.184 21.5627L14.3046 22.6327C14.0848 22.7586 13.859 22.659 13.7322 22.4567L8.22112 13.0331C8.11269 12.843 8.17793 12.592 8.37043 12.4831C8.98305 12.1198 9.62601 11.7671 10.2487 11.4119C10.9911 10.9883 11.2477 10.0278 10.7949 9.30409L8.2767 4.99542C7.8506 4.26875 6.90792 4.02135 6.17146 4.43955L4.71259 5.27032C4.18358 5.57287 3.79054 5.96408 3.48852 6.48888C2.93447 7.45232 2.67791 8.63529 2.66779 9.95162C2.64367 13.0751 4.02123 17.0157 6.08672 20.5487C8.15356 24.0826 10.9224 27.2337 13.6742 28.7746L13.674 28.7748Z" fill="black"/>
  </g>
</svg>
`,
  },
];
// Features list for General, Security, and Zones sections
const featuresList = [
  "HTTP/2",
  "IPv6 Support",
  "Header Control",
  "Log Forwarding",
  "Grip Progression",
  "Byte Range Requests",
  "HTTP Live Streaming",
  "Image Processing",
];

// Integration logos/platforms
const integrationLogos = [
  "WordPress",
  "Magento",
  "Joomla!",
  "TYPO3",
  "Drupal",
  "PrestaShop",
];
</script>

<style scoped>
/* Additional styles if needed */
</style>
