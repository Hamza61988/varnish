<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block"
      style="
        background-image: url(&quot;/images/about/BGline.svg&quot;);
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: auto;
        opacity: 1;
        z-index: 0;
      "
    ></div>

    <!-- Main Content -->
    <main class="container site-padding site-margins relative z-10">
      <!-- Open Source CDN Section -->
      <section class="">
        <CommonTitle
          upername="Open Source"
          title="Open source CDN"
          subtitle="We deliver open source software at speed and scale."
          pcAlignment="center"
          mobileAlignment="center"
          :fontWeight="500"
        />

        <!-- Content Paragraphs -->
        <div class="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <p
            class="text-[13px] md:text-[1rem] text-left md:text-justify"
            style="
              font-family: &quot;Inter&quot;, sans-serif;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: -0.006em;
              color: #73737f;
            "
          >
            At Varnish we love open source and feel strongly about giving back
            to the community. We use a lot of open source software in our own
            projects and understand the importance of providing continued
            support to help make the internet more fast and secure.
            <br />
            We realized that developers put in a lot of time and effort into
            their open source projects and we truly appreciate it. Without open
            source, many great projects would not exist or even be available to
            the general public due to costs associated with using that project.
            Open source projects encourage creativity and drive innovation which
            are two things we are very passionate about.<br />As open source
            contributors ourselves, we realize the impact that an open source
            project can have on the community. Having support from other parties
            can greatly increase the quality and deliverability of an open
            source project. In turn, more people will use the project and you
            can watch it flourish.<br />Do you currently maintain an open source
            project and need a CDN? We are committed to contributing to open
            source projects by providing free CDN accounts. Use a free KeyCDN
            account in your open source projects to optimize the delivery of
            your content. Whether it be all the static assets on your website or
            a link to an open source library you want to accelerate for your
            users. Please contact us to get started.
          </p>
        </div>
      </section>

      <!-- Features Section -->

      <section class="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          <!-- Flexible Card -->
          <div class="flex flex-col items-center">
            <!-- Card with Icon Only -->
            <div
              class="relative overflow-hidden mb-4"
              style="
                width: 235px;
                height: 167px;
                border: 12px solid #f7f7f8;
                border-radius: 20px;
                box-shadow:
                  0px 0.5px 0.5px 0px #1a19250a,
                  0px 1px 1px 0px #1a19250a,
                  0px 1px 2px -1px #1a19250a;
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: -10px;
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
                  <!-- Rocket Icon -->
                  <img
                    src="/images/Rocket.svg"
                    alt="Rocket"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full text-[1.5rem] md:text-[2rem]"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 600;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Global coverage
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full text-[13px] md:text-[1rem]"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Achieve impeccable performance for all users no matter the total
              quantity or geographical location.
            </p>
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
                border: 12px solid #f7f7f8;
                background: #ffffff;
                box-shadow:
                  0px 0.5px 0.5px 0px #1a19250a,
                  0px 1px 1px 0px #1a19250a,
                  0px 1px 2px -1px #1a19250a;
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: -10px;
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
                  <!-- Renewable Icon -->
                  <img
                    src="/images/Renewable Energy.svg"
                    alt="Renewable"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full text-[1.5rem] md:text-[2rem]"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 600;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Instant purge
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full text-[13px] md:text-[1rem]"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Use our robust API or dashboard to purge the entire cache or
              individual content instantaneously.
            </p>
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
                border: 12px solid #f7f7f8;
                background: #ffffff;
                box-shadow:
                  0px 0.5px 0.5px 0px #1a19250a,
                  0px 1px 1px 0px #1a19250a,
                  0px 1px 2px -1px #1a19250a;
              "
            >
              <div
                class="absolute hidden sm:block"
                style="
                  width: 148px;
                  height: 148px;
                  top: 0px;
                  right: -10px;
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
                  <!-- chart Icon -->
                  <img
                    src="/images/ine chart with data points.svg"
                    alt="chart"
                    class="relative z-10"
                    style="width: 105px; height: 105px; opacity: 1"
                  />
                </div>
              </div>
            </div>
            <!-- Title -->
            <h3
              class="mb-2 text-left w-full text-[1.5rem] md:text-[2rem]"
              style="
                font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                font-weight: 600;
                letter-spacing: -0.02em;
                color: #1a1925;
                text-align: center;
              "
            >
              Detailed reports
            </h3>
            <!-- Description -->
            <p
              class="mb-4 text-left w-full text-[13px] md:text-[1rem]"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
                letter-spacing: -0.006em;
                color: #51515e;
                text-align: center;
              "
            >
              Access valuable content delivery insights to make better decisions
              and improve the user experience.
            </p>
          </div>
        </div>
      </section>

      <!-- Project We Support Section -->
      <section>
        <!-- Section Label -->
        <CommonTitle
          upername="project we support"
          title="Project We Support"
          subtitle="We are committed to contributing back to the community."
          pcAlignment="center"
          mobileAlignment="center"
        />
        <!-- Project Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          <!-- Meteor Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              box-shadow:
                0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Background Image -->
            <div
              style="
                position: absolute;
                width: 148px;
                height: 148px;
                top: 8px;
                right: 26px;
                opacity: 1;
                border: none;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url(&quot;/images/about/bgcard.svg&quot;);
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <!-- Document Icon with Grid -->
              <div class="mb-4 relative">
                <div
                  style="
                    width: 23.333332061767578px;
                    height: 20.708370208740234px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: visible;
                  "
                >
                  <!-- Background Image Icon -->
                  <div
                    style="
                      position: absolute;
                      width: 26.666664123535156px;
                      height: 26.666664123535156px;
                      border-radius: 4.67px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      opacity: 1;
                    "
                  ></div>
                  <img
                    src="/images/about/Icon.svg"
                    alt="Icon"
                    width="16"
                    height="16"
                    style="position: relative; z-index: 1"
                  />
                </div>
              </div>
              <hr class="my-4 border-t-1 border-gray-200" />
              <p
                class="text-[13px] md:text-[1rem]"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;
                  letter-spacing: -0.6%;
                  color: #73737f;
                "
              >
                Meteor is a free and open source JavaScript framework for web,
                mobile, and desktop. It allows apps to be built with less lines
                of code for any device.
              </p>
            </div>
          </div>

          <!-- Webpack Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              box-shadow:
                0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Background Image -->
            <div
              style="
                position: absolute;
                width: 148px;
                height: 148px;
                top: 8px;
                right: 26px;
                opacity: 1;
                border: none;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url(&quot;/images/about/bgcard.svg&quot;);
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <!-- Document Icon with Grid -->
              <div class="mb-4 relative">
                <div
                  style="
                    width: 23.333332061767578px;
                    height: 20.708370208740234px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: visible;
                  "
                >
                  <!-- Background Image Icon -->
                  <div
                    style="
                      position: absolute;
                      width: 26.666664123535156px;
                      height: 26.666664123535156px;
                      border-radius: 4.67px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      opacity: 1;
                    "
                  ></div>
                  <img
                    src="/images/about/Icon.svg"
                    alt="Icon"
                    width="16"
                    height="16"
                    style="position: relative; z-index: 1"
                  />
                </div>
              </div>
              <hr class="my-4 border-t-1 border-gray-200" />
              <p
                class="text-[13px] md:text-[1rem]"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;
                  letter-spacing: -0.6%;
                  color: #73737f;
                "
              >
                webpack is a free and open source JavaScript module bundler. It
                allows nearly any file to be transformed or bundled to then be
                used on the web.
              </p>
            </div>
          </div>

          <!-- FreeNAS Card -->
          <div
            class="relative overflow-hidden min-h-[200px]"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
              box-shadow:
                0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),
                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),
                0px 2px 2px -1px rgba(7, 1, 19, 0.03),
                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03);
            "
          >
            <!-- Background Image -->
            <div
              style="
                position: absolute;
                width: 148px;
                height: 148px;
                top: 8px;
                right: 26px;
                opacity: 1;
                border: none;
                border-image-source: radial-gradient(
                  81.86% 81.86% at 100% 100%,
                  rgba(26, 25, 37, 0.12) 0%,
                  rgba(26, 25, 37, 0) 77.02%
                );
                border-image-slice: 1;
                background-image: url(&quot;/images/about/bgcard.svg&quot;);
                background-repeat: no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <!-- Document Icon with Grid -->
              <div class="mb-4 relative">
                <div
                  style="
                    width: 23.333332061767578px;
                    height: 20.708370208740234px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: visible;
                  "
                >
                  <!-- Background Image Icon -->
                  <div
                    style="
                      position: absolute;
                      width: 26.666664123535156px;
                      height: 26.666664123535156px;
                      border-radius: 4.67px;
                      background-image: url(&quot;/images/about/bgcardicon.svg&quot;);
                      background-repeat: no-repeat;
                      background-size: cover;
                      background-position: center;
                      opacity: 1;
                    "
                  ></div>
                  <img
                    src="/images/about/Icon.svg"
                    alt="Icon"
                    width="16"
                    height="16"
                    style="position: relative; z-index: 1"
                  />
                </div>
              </div>
              <hr class="my-4 border-t-1 border-gray-200" />
              <p
                class="text-[13px] md:text-[1rem]"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;
                  letter-spacing: -0.6%;
                  color: #73737f;
                "
              >
                FreeNAS is a free and open source network-attached storage
                software. It allows a unified file and block storage, VM, and
                Docker system with many features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Open Source page
</script>
