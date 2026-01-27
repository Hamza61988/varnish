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
    <main
      class="site-padding site-margins"
    >
      <!-- FAQ Section -->
      <section class="">
        <!-- Section Label -->
        <commonTitle
          upername="FAQ'S"
          title="Frequently Asked Questions"
          subtitle="Get quick answers to common questions that are often asked."
          mobileAlignment="start"
          pcAlignment="center"
        />

        <!-- FAQ Items -->
        <div class="space-y-[10px] sm:space-y-[30px]">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="relative overflow-hidden group"
            style="
              height: 175px;
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="
                width: 148px;
                height: 148px;
                top: 9.5px;
                right: 26px;
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
              "
            ></div>
            <div class="relative z-10 p-4 sm:p-5 md:p-6">
              <h3
                class="mb-2 text-[1rem] md:text-[1.125rem]"
                style="
                  font-family: &quot;Bricolage Grotesque&quot;, sans-serif;
                  font-weight: 600;
                  line-height: 24px;
                  letter-spacing: -0.02em;
                  color: #1a1925;
                "
              >
                {{ index + 1 }}. {{ item.question }}
              </h3>
              <p
                class="text-[0.9375rem]"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>

        <!-- Have More Questions Section -->
        <div class="md:text-center">
          <p
            style="
              font-family: &quot;Inter&quot;, sans-serif;
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
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: -0.011em;
                color: #1f62ff;
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

const faqItems = [
  {
    question: "What is Varnish?",
    answer:
      "Varnish is a high-performance content delivery network (CDN) that delivers websites, applications, and digital content faster, more reliably, and securely to users worldwide.",
  },
  {
    question: "Who can use Varnish?",
    answer:
      "Varnish is suitable for businesses of all sizes, developers, SaaS platforms, e-commerce sites, and digital publishers looking to enhance performance and user experience.",
  },
  {
    question: "What types of content can Varnish deliver?",
    answer:
      "Varnish delivers all digital content, including websites, videos, images, APIs, software, and web applications, supporting both static and dynamic content efficiently.",
  },
  {
    question: "How do I get support?",
    answer:
      "Our support team is available to help with setup, troubleshooting, and performance optimization, ensuring your content delivery runs smoothly at all times.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "You can set up Varnish in just a few minutes. Our platform is user-friendly, allowing immediate content delivery, while advanced settings let you customize caching, security, and delivery rules for more complex needs.",
  },
];
</script>
