<template>
  <div class="min-h-screen relative overflow-hidden bg-white">
    <!-- Page Background - BGline.svg -->
    <div
      class="absolute inset-0 pointer-events-none hidden md:block bg-[url('/images/about/BGline.svg')] bg-no-repeat bg-left-bottom bg-auto opacity-100 z-0"
    ></div>

    <!-- Main Content -->
    <main class="w-full mx-auto flex flex-col max-w-[950px] mt-[5%] px-4 sm:px-6 md:px-8">
      <!-- Careers Section -->
      <section class="w-full max-w-6xl mx-auto">
        <!-- Section Label -->
        <div class="flex items-center justify-start sm:justify-center mb-4 sm:mb-6">
          <div
            class="flex items-center h-6 gap-0.5 rounded-full py-1 px-2 bg-[#ffffffe5] shadow-[0px_0.5px_0.5px_0px_rgba(7,1,19,0.03),0px_1px_1px_-0.5px_rgba(7,1,19,0.03),0px_2px_2px_-1px_rgba(7,1,19,0.03),0px_3px_3px_-1.5px_rgba(7,1,19,0.03)]"
          >
            <!-- Lightning Bolt Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE] min-w-4 min-h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3A3AE"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <span class="font-['Bricolage_Grotesque'] font-medium text-xs leading-4 tracking-0 text-center text-[#1a1925]">
              Careers
            </span>
          </div>
        </div>

        <!-- Title -->
        <h1
          class="text-left sm:text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-['Bricolage_Grotesque'] font-medium tracking-[-0.02em] align-middle text-[#1a1925]"
        >
          Careers
        </h1>

        <!-- Subtitle -->
        <p
          class="text-left sm:text-center mb-8 sm:mb-10 md:mb-12 font-['Inter'] font-normal text-base leading-6 tracking-[-0.011em] text-[#51515e]"
        >
          We are looking for smart and enthusiastic people to help us build a
          world-class CDN.
        </p>

        <!-- Company Overview & Key Values Section -->
        <div class="flex flex-col md:flex-row justify-between mb-12 sm:mb-16 md:mb-20 gap-5">
          <!-- Left Column - Company Description -->
          <div class="w-full md:w-[60%] flex flex-col justify-center order-1 md:order-1">
            <p
              class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-justify text-[#73737f]"
            >
              KeyCDN is a content delivery network headquartered in Switzerland.
              We are a privately funded company that has engineered our
              infrastructure from the ground up. There are no investors to
              please, allowing our primary focus to remain where it should be,
              making our network as fast and reliable as possible.
            </p>
          </div>

          <!-- Right Column - Key Values Cards -->
          <div
            class="w-full md:flex-1 space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-start md:items-end order-2 md:order-2"
          >
            <!-- Outcome-oriented culture -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  Outcome-oriented culture
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  We strongly value a positive working environment where talent
                  can thrive.
                </p>
              </div>
            </div>

            <!-- International team -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  International team
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  Diverse origins with team members based out of many different
                  countries.
                </p>
              </div>
            </div>

            <!-- Pride in your craft -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  Pride in your craft
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  Enjoy the work that you do and be proud of the impact that
                  your skills have.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row - More Values & Global Footprint -->
        <div class="flex flex-col md:flex-row justify-between mb-12 sm:mb-16 md:mb-20 gap-5">
          <!-- Left Column - More Value Cards -->
          <div class="w-full md:w-[40%] space-y-4 sm:space-y-5 order-2 md:order-1">
            <!-- Remote first company -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  Remote first company
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  Geographical restraints are a problem of the past allowing you
                  to work from any location.
                </p>
              </div>
            </div>

            <!-- Flexible vacation time -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  Flexible vacation time
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  Take time off when needed as we highly value a healthy
                  work-life balance.
                </p>
              </div>
            </div>

            <!-- Continued learning -->
            <div
              class="flex gap-4 p-4 sm:p-5 md:p-6 w-full rounded-[20px] border border-[#eeeef0] bg-white"
            >
              <div
                class="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12"
              >
                <img
                  src="/images/about/IconCareer.svg"
                  alt="Icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="mb-2 font-['Bricolage_Grotesque'] font-semibold text-lg leading-6 tracking-[-0.02em] text-[#1a1925]"
                >
                  Continued learning
                </h3>
                <p
                  class="font-['Inter'] font-normal text-[15px] leading-5 tracking-[-0.006em] text-[#51515e]"
                >
                  We invest in your education in the constantly changing IT
                  landscape.
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column - Global Footprint -->
          <div
            class="w-full md:flex-1 space-y-4 sm:space-y-5 md:space-y-6 flex flex-col justify-center order-1 md:order-2"
          >
            <p
              class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-justify text-[#73737f]"
            >
              Our global footprint is vast with 60+ data centers spread across 6
              continents. It is imperative that we expand our network where true
              value can be added and performance can be enhanced. We are looking
              for talented individuals that have the passion and initiative to
              help us improve and grow our network.
            </p>
          </div>
        </div>

        <!-- Job Listing Section -->
        <div class="mb-12 sm:mb-16 md:mb-20">
          <!-- Job Content - Single Box -->
          <div class="rounded-[20px] border border-[#eeeef0] bg-white">
            <!-- Job Title Header -->
            <button
              @click="toggleJobListing"
              class="w-full flex items-center justify-between pb-4 mb-4 cursor-pointer bg-transparent border-none text-left border-b border-[#eeeef0] p-6"
            >
              <h2
                class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-[#73737f]"
              >
                Customer support specialist (remote)
              </h2>
              <svg
                class="w-5 h-5 transition-transform duration-200 text-[#73737f]"
                :class="{ 'rotate-180': isJobListingOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Job Content -->
            <div
              v-show="isJobListingOpen"
              class="space-y-6 p-6"
            >
              <!-- Introductory Paragraph -->
              <p
                class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black"
              >
                If you're passionate about technology and customer support, can
                back our content strategy, and execute with a minimal amount of
                hand holding then we'd love to have a conversation with you.
                We're looking for a customer support specialist that loves
                interacting with our customers.
              </p>

              <!-- The job -->
              <div>
                <h3
                  class="mb-3 font-['Inter'] font-semibold text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  The job
                </h3>
                <p
                  class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  Solve customer issues by developing expertise in relevant
                  product areas and by learning to troubleshoot a diverse range
                  of customer issues. The ideal candidate will be comfortable
                  working in a rapid changing startup environment and is willing
                  to be evaluated based on objective performance measures.
                </p>
              </div>

              <!-- You'll own and be responsible for -->
              <div>
                <h3
                  class="mb-3 font-['Inter'] text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  You'll own and be responsible for:
                </h3>
                <ul
                  class="space-y-2 list-disc pl-5"
                >
                  <li
                    v-for="item in responsibilities"
                    :key="item"
                    class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black mb-1"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- What skills and experience we're looking for -->
              <div>
                <h3
                  class="mb-3 font-['Inter'] font-semibold text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  What skills and experience we're looking for
                </h3>
                <ul
                  class="space-y-2 list-disc pl-5"
                >
                  <li
                    v-for="item in skills"
                    :key="item"
                    class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black mb-1"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- What we absolutely need in a candidate -->
              <div>
                <h3
                  class="mb-3 font-['Inter'] font-semibold text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  What we absolutely need in a candidate
                </h3>
                <ul
                  class="space-y-2 list-disc pl-5"
                >
                  <li
                    v-for="item in candidateTraits"
                    :key="item"
                    class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black mb-1"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- Application Instructions -->
              <div class="pt-4">
                <p
                  class="mb-2 font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  Please apply by emailing us at jobs [at] keycdn [dot] com.
                </p>
                <p
                  class="font-['Inter'] font-normal text-base leading-[26px] tracking-[-0.006em] text-black"
                >
                  No recruiters or agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isJobListingOpen = ref(true);

const toggleJobListing = () => {
  isJobListingOpen.value = !isJobListingOpen.value;
};

const responsibilities = [
  "Support and engage with KeyCDN users.",
  "Provide fast, accurate and personalized communication to our customers.",
  "Primarily focused on content, customer success, community relations, and sponsoring.",
  "Maintain our knowledge base to improve the accuracy of the support we provide to customers.",
];

const skills = [
  "Bachelor's degree or higher, ideally in information technology, communication, or marketing.",
  "A strong practical understanding of web technologies (e.g. HTML, WordPress, and web frameworks).",
  "The experience and ability to create high quality content for multiple channels.",
  "Native English speaking (preferably located in North America or Europe).",
];

const candidateTraits = [
  "Willingness to roll up your sleeves - We have a small (but rapidly growing) operation, so this isn't a role for professional managers.",
  "Passion for learning new things - We hit a relatively broad base of skillsets in our work, so if you just want to focus on the one thing you do well then this may not be the position for you. Ideally you'll be able to teach us things as well.",
  "Value Evidence over opinion - At KeyCDN it's far less important to be right than it is to get it right.",
  "Genuine enthusiasm for the problems we're solving - Life is too short to do anything that you're not excited about.",
];
</script>
