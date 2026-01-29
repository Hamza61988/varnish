<template>
  <div class="min-h-screen relative overflow-hidden">
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

    <main class="site-padding site-margins">
      <!-- Header Section -->
      <CommonTitle
        upername="Blog"
        title="Blog"
        subtitle="Insights and advice for improving web performance."
        pcAlignment="center"
        mobileAlignment="center"
      />
      <!-- Blog Posts Section -->
      <section class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
        <div class="flex rounded flex-col gap-[40px]">
          <!-- Blog Post Card - Mapped -->
          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="overflow-hidden"
            style="
              background: #ffffff;

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
              <!-- Icon -->
              <div class="relative" style="width: 96px; height: 96px">
                <img :src="post.image" alt="Company logo" style="width: auto" />
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
                    font-family: &quot;Inter&quot;, sans-serif;
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
                  {{ post.category }}
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5">
              <!-- Title -->
              <h2
                class="mb-4"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  vertical-align: middle;
                  color: rgba(26, 25, 37, 1);
                "
              >
                {{ post.title }}
              </h2>

              <!-- Description -->
              <p
                class="mb-4"
                style="
                  font-family: &quot;Inter&quot;, sans-serif;
                  font-weight: 400;
                  font-style: Regular;
                  font-size: 13px;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: rgba(0, 0, 0, 1);
                "
              >
                {{ post.description }}
              </p>

              <!-- Date and Read More -->
              <div class="flex items-center justify-between">
                <span
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 20px;
                    letter-spacing: -0.006em;
                    color: #000000;
                  "
                >
                  {{ post.date }}
                </span>
                <a
                  :href="post.link"
                  class="hover:underline"
                  style="
                    font-family: &quot;Inter&quot;, sans-serif;
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
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";

const blogPosts = [
  {
    category: "Ecommerce Conversion Rate",
    title: "10 Proven Ways to Improve Your Ecommerce Conversion Rate",
    description:
      "The world of ecommerce continues to grow year by year. As consumers want to purchase items from the comfort of their own home and have them delivered in a timely manner, the opportunities in ecommerce are ever-expanding. The expectation for a good user experience is now higher than ever. Customer want to know they can trust the website they are buying from, they want to access the website fast, and they want a great offer.",
    date: "January 18, 2025",
    image: "/icons/network4.svg",
    link: "#",
  },
  {
    category: "Ecommerce Conversion Rate",
    title: "10 Proven Ways to Improve Your Ecommerce Conversion Rate",
    description:
      "The world of ecommerce continues to grow year by year. As consumers want to purchase items from the comfort of their own home and have them delivered in a timely manner, the opportunities in ecommerce are ever-expanding. The expectation for a good user experience is now higher than ever. Customer want to know they can trust the website they are buying from, they want to access the website fast, and they want a great offer.",
    date: "January 18, 2025",
    image: "/icons/network4.svg",
    link: "#",
  },
  {
    category: "Ecommerce Conversion Rate",
    title: "10 Proven Ways to Improve Your Ecommerce Conversion Rate",
    description:
      "The world of ecommerce continues to grow year by year. As consumers want to purchase items from the comfort of their own home and have them delivered in a timely manner, the opportunities in ecommerce are ever-expanding. The expectation for a good user experience is now higher than ever. Customer want to know they can trust the website they are buying from, they want to access the website fast, and they want a great offer.",
    date: "January 18, 2025",
    image: "/icons/network4.svg",
    link: "#",
  },
];
</script>
