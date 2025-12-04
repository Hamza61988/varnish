<template>
  <section class="bg-gray-50">
    <div class="container mx-auto px-4" style="background-color: #f7f7f8">
      <div class="max-w-6xl mx-auto">
        <div class="space-y-3 md:space-y-4 w-full lg:w-[70%] lg:mx-auto">
          <!-- Zone Card -->
          <div
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden config-card"
            style="border-radius: 20px"
            data-card-index="0"
          >
            <button
              type="button"
              @click="toggleCard(0)"
              onclick="console.log('Zone card clicked');var allCards=document.querySelectorAll('.config-card');var clickedCard=this.closest('.config-card');var clickedContent=clickedCard?clickedCard.querySelector('.config-card-content'):null;var clickedArrow=clickedCard?clickedCard.querySelector('.config-card-arrow'):null;var wasOpen=clickedContent?clickedContent.classList.contains('config-card-content-expanded'):false;allCards.forEach(function(card){var content=card.querySelector('.config-card-content');var arrow=card.querySelector('.config-card-arrow');if(content){content.classList.remove('config-card-content-expanded');content.classList.add('config-card-content-collapsed');}if(arrow){arrow.style.transform='rotate(0deg)';}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('config-card-content-collapsed');clickedContent.classList.add('config-card-content-expanded');if(clickedArrow){clickedArrow.style.transform='rotate(90deg)';}}return false;"
              class="w-full p-5 md:p-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div class="flex-1 min-w-0 pr-4">
                <h3 class="text-sm md:text-base font-medium text-gray-900">
                  Zone
                </h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4 transition-transform config-card-arrow"
                :class="{ 'rotate-90': expandedCards[0] }"
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
            <div
              class="px-5 md:px-6 pb-5 md:pb-6 config-card-content config-card-content-collapsed"
            >
              <div class="pt-4">
                <p class="text-xs md:text-sm text-gray-500 mb-4">
                  The first 3 Zones are included for free. Each additional Zone
                  is $1 per month.
                </p>
              </div>
            </div>
          </div>

          <!-- Storage Card -->
          <div
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden config-card"
            style="border-radius: 20px"
            data-card-index="1"
          >
            <button
              type="button"
              @click="toggleCard(1)"
              onclick="console.log('Storage card clicked');var allCards=document.querySelectorAll('.config-card');var clickedCard=this.closest('.config-card');var clickedContent=clickedCard?clickedCard.querySelector('.config-card-content'):null;var clickedArrow=clickedCard?clickedCard.querySelector('.config-card-arrow'):null;var wasOpen=clickedContent?clickedContent.classList.contains('config-card-content-expanded'):false;allCards.forEach(function(card){var content=card.querySelector('.config-card-content');var arrow=card.querySelector('.config-card-arrow');if(content){content.classList.remove('config-card-content-expanded');content.classList.add('config-card-content-collapsed');}if(arrow){arrow.style.transform='rotate(0deg)';}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('config-card-content-collapsed');clickedContent.classList.add('config-card-content-expanded');if(clickedArrow){clickedArrow.style.transform='rotate(90deg)';}}return false;"
              class="w-full p-5 md:p-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div class="flex-1">
                <h3 class="text-sm md:text-base font-medium text-gray-900">
                  Storage
                </h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4 transition-transform config-card-arrow"
                :class="{ 'rotate-90': expandedCards[1] }"
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
            <div
              class="px-5 md:px-6 pb-5 md:pb-6 config-card-content config-card-content-collapsed"
            >
              <div class="pt-4">
                <p class="text-xs md:text-sm text-gray-500 mb-4">
                  The first 3 Zones are included for free. Each additional Zone
                  is $1 per month.
                </p>
              </div>
            </div>
          </div>

          <!-- Log Forwarding Card -->
          <div
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden config-card"
            style="border-radius: 20px"
            data-card-index="2"
          >
            <button
              type="button"
              @click="toggleCard(2)"
              onclick="console.log('Log Forwarding card clicked');var allCards=document.querySelectorAll('.config-card');var clickedCard=this.closest('.config-card');var clickedContent=clickedCard?clickedCard.querySelector('.config-card-content'):null;var clickedArrow=clickedCard?clickedCard.querySelector('.config-card-arrow'):null;var wasOpen=clickedContent?clickedContent.classList.contains('config-card-content-expanded'):false;allCards.forEach(function(card){var content=card.querySelector('.config-card-content');var arrow=card.querySelector('.config-card-arrow');if(content){content.classList.remove('config-card-content-expanded');content.classList.add('config-card-content-collapsed');}if(arrow){arrow.style.transform='rotate(0deg)';}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('config-card-content-collapsed');clickedContent.classList.add('config-card-content-expanded');if(clickedArrow){clickedArrow.style.transform='rotate(90deg)';}}return false;"
              class="w-full p-5 md:p-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div class="flex-1">
                <h3 class="text-sm md:text-base font-medium text-gray-900">
                  Log Forwarding
                </h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4 transition-transform config-card-arrow"
                :class="{ 'rotate-90': expandedCards[2] }"
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
            <div
              class="px-5 md:px-6 pb-5 md:pb-6 config-card-content config-card-content-collapsed"
            >
              <div class="pt-4">
                <p class="text-xs md:text-sm text-gray-500 mb-4">
                  The first 3 Zones are included for free. Each additional Zone
                  is $1 per month.
                </p>
              </div>
            </div>
          </div>

          <!-- Image Forwarding Card -->
          <div
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden config-card"
            style="border-radius: 20px"
            data-card-index="3"
          >
            <button
              type="button"
              @click="toggleCard(3)"
              onclick="console.log('Image Forwarding card clicked');var allCards=document.querySelectorAll('.config-card');var clickedCard=this.closest('.config-card');var clickedContent=clickedCard?clickedCard.querySelector('.config-card-content'):null;var clickedArrow=clickedCard?clickedCard.querySelector('.config-card-arrow'):null;var wasOpen=clickedContent?clickedContent.classList.contains('config-card-content-expanded'):false;allCards.forEach(function(card){var content=card.querySelector('.config-card-content');var arrow=card.querySelector('.config-card-arrow');if(content){content.classList.remove('config-card-content-expanded');content.classList.add('config-card-content-collapsed');}if(arrow){arrow.style.transform='rotate(0deg)';}});if(clickedContent&&!wasOpen){clickedContent.classList.remove('config-card-content-collapsed');clickedContent.classList.add('config-card-content-expanded');if(clickedArrow){clickedArrow.style.transform='rotate(90deg)';}}return false;"
              class="w-full p-5 md:p-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div class="flex-1">
                <h3 class="text-sm md:text-base font-medium text-gray-900">
                  Image Forwarding
                </h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4 transition-transform config-card-arrow"
                :class="{ 'rotate-90': expandedCards[3] }"
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
            <div
              class="px-5 md:px-6 pb-5 md:pb-6 config-card-content config-card-content-collapsed"
            >
              <div class="pt-4">
                <p class="text-xs md:text-sm text-gray-500 mb-4">
                  The first 3 Zones are included for free. Each additional Zone
                  is $1 per month.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Access All Features Section -->
        <div class="mt-12 md:mt-16 text-center">
          <h2
            class="font-['Bricolage_Grotesque'] font-medium text-xs leading-4 tracking-[0.1em] text-center text-[#1a1925] mb-6 md:mb-8"
          >
            ACCESS ALL FEATURES
          </h2>

          <!-- Features Tags -->
          <div
            class="flex flex-wrap justify-center lg:justify-between gap-3 lg:gap-0"
          >
            <!-- Instant Purge -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Instant Purge</span
              >
            </div>

            <!-- HTTP/2 -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >HTTP/2</span
              >
            </div>

            <!-- TLS Certificate -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >TLS Certificate</span
              >
            </div>

            <!-- Origin Shield -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Origin Shield</span
              >
            </div>

            <!-- Secure Token -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >Secure Token</span
              >
            </div>

            <!-- DDoS Protection -->
            <div
              class="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#eeeef0] shadow-sm flex-shrink-0"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute w-4 h-4 rounded-full bg-blue-600 opacity-20 blur-sm"
                ></div>
                <div class="relative w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <span
                class="font-['Bricolage_Grotesque'] font-medium text-[13px] leading-4 tracking-0 text-[#1a1925]"
                >DDoS Protection</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Expand/collapse state for each card (all collapsed by default)
const expandedCards = ref([false, false, false, false]);

// Toggle card expand/collapse (accordion behavior - only one open at a time)
const toggleCard = (index: number) => {
  console.log("Vue toggleCard called for index:", index);
  const wasOpen = expandedCards.value[index];

  // Close all cards first
  expandedCards.value = [false, false, false, false];

  // If the clicked card was closed, open it now
  if (!wasOpen) {
    expandedCards.value[index] = true;
  }

  // Sync with vanilla JS fallback using classes
  if (typeof window !== "undefined") {
    const cards = document.querySelectorAll(".config-card");

    // Close all cards
    cards.forEach((card, i) => {
      const content = card.querySelector(".config-card-content") as HTMLElement;
      const arrow = card.querySelector(".config-card-arrow") as HTMLElement;
      if (content) {
        content.classList.remove("config-card-content-expanded");
        content.classList.add("config-card-content-collapsed");
        if (arrow) {
          arrow.style.transform = "rotate(0deg)";
        }
      }
    });

    // Open the clicked card if it wasn't already open
    if (!wasOpen) {
      const card = cards[index];
      if (card) {
        const content = card.querySelector(
          ".config-card-content"
        ) as HTMLElement;
        const arrow = card.querySelector(".config-card-arrow") as HTMLElement;
        if (content) {
          content.classList.remove("config-card-content-collapsed");
          content.classList.add("config-card-content-expanded");
          if (arrow) {
            arrow.style.transform = "rotate(90deg)";
          }
        }
      }
    }
  }
};

// Sync Vue state with DOM on mount
onMounted(() => {
  console.log("ConfigurationOptionsSection mounted");
  if (typeof window !== "undefined") {
    // Initialize all cards as collapsed
    const cards = document.querySelectorAll(".config-card");
    console.log("Found", cards.length, "config cards on mount");
    cards.forEach((card, index) => {
      const content = card.querySelector(".config-card-content") as HTMLElement;
      const arrow = card.querySelector(".config-card-arrow") as HTMLElement;
      if (content) {
        content.classList.add("config-card-content-collapsed");
        content.classList.remove("config-card-content-expanded");
        if (arrow) {
          arrow.style.transform = "rotate(0deg)";
        }
      }
    });

    // Also add event listeners as fallback (accordion behavior)
    cards.forEach((card, index) => {
      const button = card.querySelector("button");
      if (button) {
        button.addEventListener("click", function (e) {
          const allCards = document.querySelectorAll(".config-card");
          const clickedContent = card.querySelector(
            ".config-card-content"
          ) as HTMLElement;
          const clickedArrow = card.querySelector(
            ".config-card-arrow"
          ) as HTMLElement;
          const wasOpen = clickedContent?.classList.contains(
            "config-card-content-expanded"
          );

          // Close all cards first
          allCards.forEach((c) => {
            const content = c.querySelector(
              ".config-card-content"
            ) as HTMLElement;
            const arrow = c.querySelector(".config-card-arrow") as HTMLElement;
            if (content) {
              content.classList.remove("config-card-content-expanded");
              content.classList.add("config-card-content-collapsed");
            }
            if (arrow) {
              arrow.style.transform = "rotate(0deg)";
            }
          });

          // Open clicked card if it wasn't already open
          if (clickedContent && !wasOpen) {
            clickedContent.classList.remove("config-card-content-collapsed");
            clickedContent.classList.add("config-card-content-expanded");
            if (clickedArrow) {
              clickedArrow.style.transform = "rotate(90deg)";
            }
          }
        });
      }
    });
  }
});
</script>

<style scoped>
/* Smooth Expand/Collapse Transition */
.config-card-content {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease,
    padding-top 0.3s ease, padding-bottom 0.3s ease;
}

.config-card-content-collapsed {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.config-card-content-expanded {
  max-height: 1000px;
  opacity: 1;
  padding-top: 0;
  padding-bottom: 0;
}

/* Smooth arrow rotation */
.config-card-arrow {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
