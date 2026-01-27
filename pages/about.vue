<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Pagee Background - BGline.svg -->
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
    <main
      class="site-padding site-margins flex flex-col gap-[48px] md:gap-[58px] "
    >
      <!-- About Us Section -->
      <section>
        <!-- Section Label -->
        <commonTitle
          upername="About"
          title="About"
          subtitle="Get to know more about us."
          mobileAlignment="start"
          pcAlignment="center"
        />

        <!-- Content Paragraphs -->
        <div class="max-w-2xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <p
            class="text-[13px] md:text-base text-left md:text-justify"
            style="
              font-family: &quot;Inter&quot;, sans-serif;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: -0.006em;
              color: #73737f;
            "
          >
            <span class="text-[#1A1925]">Varnish</span> is a registered
            trademark and service of Varnish Technologies LLC, a privately
            funded company headquartered in [Your Location]. We are a leading
            content delivery network provider, built from the ground up with a
            next-generation architecture designed for speed, reliability, and
            scalability. Our mission is to create a content delivery solution
            that is accessible, efficient, and adaptable for businesses and
            developers worldwide. Varnish operates independently — we are not a
            federated CDN nor a reseller of third-party networks.
          </p>

          <p
            class="text-[13px]  md:text-base text-left md:text-justify"
            style="
              font-family: &quot;Inter&quot;, sans-serif;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: -0.006em;
              color: #73737f;
            "
          >
            Your experience is our priority. We provide a simple, intuitive
            platform that allows you to get started in just a few minutes, while
            also offering advanced configuration options for more complex needs.
            Our state-of-the-art infrastructure ensures optimal performance,
            allowing you to focus on growing your business. Varnish makes
            content delivery smarter, faster, and more cost-effective.
          </p>
        </div>
      </section>

      <!-- Our Values Section -->
      <section>
        <!-- Section Label -->
      <commonTitle
          upername="Values"
          title="Values"
          subtitle="How we maintain the highest standards."
          mobileAlignment="start"
          pcAlignment="center"
        />

        <!-- Values Cards -->
        <LandingFeatures :features="values" />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">

const values = [
  {
    title: "Agility",
    description: "Adapting quickly to evolving technology and user needs.",
    icon: `<svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3314 9.19523L8.63677 8.13137L11.3114 1.43148C11.3656 1.29588 11.2837 1.14491 11.1419 1.11841L5.18829 0.00617195C5.01681 -0.0258642 4.84656 0.0689013 4.7811 0.232748L0.0352323 12.121C-0.0770294 12.402 0.0926743 12.7153 0.386804 12.7702L6.33584 13.8816L3.31412 21.4511C3.11463 21.9507 3.75416 22.3494 4.10783 21.9461L14.5978 9.98378C14.8427 9.70424 14.6937 9.26262 14.3316 9.19496L14.3314 9.19523Z" fill="black"/>
                </svg>`,
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and accountability.",
    icon: `<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="34" height="33" fill="url(#pattern0_18486_10171)"/>
                  <defs>
                    <pattern id="pattern0_18486_10171" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_18486_10171" transform="matrix(0.0107843 0 0 0.0111111 0.0147059 0)"/>
                    </pattern>
                    <image id="image0_18486_10171" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO2dS2xNQRyHv0pQrwUr2pBYId5Jgw1FsMHCRizEQlAk2KAWWAhRCQvpwoKwIESsJeKxqFCPIMTGIxZKmwZFtCgiI5P8F03c297eO2dmzjn/L/ltbo97fvOlbqdz5pyCoiiKoiiKoiiK8h9DgclAPbABOACcBM4DV4F7wAvgDfBZ0gMYSU+f19/Isa3yb8/Lex2Q966Xc9lzZpJxwEKgATgGXALuAO+Bv32k+cpfObftcFE6NUhH2zV6RgALgK1AM3AL6Awg0lSYTuneLGOZL2MLSjWwA3gA/IlAkkkodmwPgV0yZq/UAs8ikGA855mM3QvDgacRDNoEylNxkDi7IhisCZydPkQ/jGCgJnDu+xD9PYKBmsCxc/jECT1IE0lUNCqaLCWToq8Dm4ApwCjJVGAzcENFV56XwKISOtlFo1cqmrLSAowdRC+7KHRbRTPo7+TBSO4r+7WKpuQsqaCf/RhR0ZT2g69SbqpoBoydXRRimCzUdwDtQJO8VogtKpoBY6dwhWgqcOzRIsfaqZ+Kpv+MLnLejgLH2tcKYd9DRVPeAFwdr6JR0VEMwKhoFZ0IKhoVnSnRrvZw/AL2AjUeOttzNMo5XXS3DhKn7/63StKIfxodde/2UbbLUdka/FPjqPtHH2VdLUOGwkV3u3M1cexOzLyLbvFR9IqK5rKPooVW0fIm+oiPohtVNPYugsSZp6Kp81HUblntzbHon/1c2XHO/RyLbvVZ9lCORR/xWbYux6IX+SxbJbeR5U10V4h7FU/lUPTpEIVX5FD0shCFq2RxJS+iXwFDQpXemSPR2wN2ZgzwNUXr0bVldv3Sz8Yeb5xI0RWWfWV2PU4E1JZ5eeuXyI79mmF3oP99BTlYwWefiTz7iQj7qIW3EUgxjvMOGElkrI9AjHGcdURIlezWNxnJNRlTlNgfGp8ikGQcbCeYQOSsiUCUqTBrSQnnIpBlysxZUkS1PE7NpCyPYpxlDMR4oC0CeabEtPt8XpJr5jrcFGkSjP3tbzYpZxnwIwKZxWK7LSUjLJfL9Cay2LWPlWSMVY72g7hKr3TKJIsrWL92mW9yKS7TTA88G7F3284hJ0wCHgeaJ08kZ1QDZzxKvpDGX0Zcsi3h6d8PeUSxAkwDniQg+TkwK/TgYmM4cBj47Wh+fMjn9to0MlO2xpYr+S4wI/Qg0sRq+SMJpQpuk1seor0qEvvHyR654lFM8Adgt6+HZ2edUTI7aZVdQ5/lfscG+ZqiKIqiKIqiKIpCmfwDQ+/BCuUZ6FAAAAAASUVORK5CYII="/>
                  </defs>
                </svg>`,
  },
  {
    title: "Reliability",
    description: "Ensuring consistent, uninterrupted content delivery.",
    icon: `<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="35" height="34" fill="url(#pattern0_18486_10173)"/>
                  <defs>
                    <pattern id="pattern0_18486_10173" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_18486_10173" transform="matrix(0.0107937 0 0 0.0111111 0.0147059 0)"/>
                    </pattern>
                    <image id="image0_18486_10173" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiUlEQVR4nO2cW6hVRRiAv1Ne6pSQlzpE96P1kkJlZPVSFEVREIRBSioUFaFSCRIVQg8iJRrUQxERKIVBEdGVIEiDtJt6EhHClOimRWaZWcdjOjH0nxfZa9baa2bNmrX2/8H/cjh7zcy31+Wf+WdtUBRFURRFURRFURRFURRFUTIwkWMEeBeYC5zi2fcLgEeBz4D9wAFgI7AIOJnEiCV4M/AgMODZ3ynAfcAnwDFHez/I/51IIrg66xvb5Yw7z7OPk0XaR8DRLvuwDbiJFooeAV4ELvfs1wTgLrnNjATo14fAZdRIt2eIK3YCMzz6chJwO/A68HcFV5gd6yvA+TRY9O/AOSXaHwvcDKyVh5mJEMPAKmASDRT9eBdtngBcAzwP/BpJbqewmcpSuZK6wV4RC4A1wLdFP/RvoE5fXKCtK4CngR9rlNspvgPmyQlQROzxn48q+tSM408HlgO7EhCaF0PAjQXE1ip6XMbxTQ9EIY4EamxKxV9kyhFV9IUZx9+TgIhWib414/hvJyAiCdEhZl02Hss4/pwERLRK9IaM49uUaUsCMloj+ghwekYbg8AvgdqxD9dvgHeAlcA9wFXARFkdPJqq6MMBG3zC0c5gl2f2IWArsA5YBtwh6yjjc8ZzZ+AxJSn6N8dZPXobsSLeAn6Stn8GPgZeAB6WJU07YeijPNdHXDepRbQBXiUNLomYWhaiistsKWlgr4yv2yz6WM79OiaTpI5Yu+jhCjvwRoAaYSdOA64E7gaeknuyC1sEfr9u0f9U/G3/CawAzi0h1BYSbgAWA89JzXBvhzYOy8Qor8Cwts2ijYTNb78AVku5ahYwVdK+mfI3O7t8GfhSvqBuj/9Qzlj7ZD281aJNpHjGsYA/yiOBi9I9KdrIVWFvFS4WBFxQ61nRRrYX2C0LLm4LNP5CVFHWN4mEfSackTP+awPMIntetAF2A9NyHMz0XPRS0fwfNiW8NMfDoEcBuRCHEhBhIsRBqXC7OFP26qlo/MLOgmcX2FBptwGraPzC5s9LCkzZ14cW/VcCgzc1xPKcNe8JXSxGqWjcsSZnYjO54AOyEAcTGLCpMex2iH6Hn+kFHJXCvorwWgICTMT43LHTCnlrIbhopAD6QQICTMTYAZzteDi6Zo9e9MteDdNDsdVRZX+pKtGjT95uc0rT8FiY4WJ+laKRjSlDCQgwkeJTR1W9UtHIXo0dCUgwEcJmGJ0YiCF6tKEYpXtTc9iHXhL7JL5PQIap4dYRnYsyKtGmJWHfI08GO1val4AUEziGHO/i1IatSvzRMslnkShXN2xRahi4V1bl9kuGsUluF8mdycdzXYMq6QdoOLfUsPnbNDmj8GF2A94pTCqj8GFeTe+QNDaj8OH+in/VpnUZhQ9LapDZ6IzCh2WRRTc+o/DhyYiiW5FR+PBsJNGtySjK0pdTBgoRrcsofCrr6yqU3MqMoixjgTdLyuzZjKIs44D3NKOIQ3+JbQw9n1HE2sawqO4ON5mJwFeaUcRhIOc3PDSjCMgY4AHJKOzvm2pGoSiKoiiKoiiKQgX8BwmdQk5FqTWgAAAAAElFTkSuQmCC"/>
                  </defs>
                </svg>`,
  },
];
</script>
