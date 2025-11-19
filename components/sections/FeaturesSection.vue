<template>
  <section class="container mx-auto px-4 py-12 md:py-16 bg-[#F7F7F8]">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Feature Card 1 -->
        <div class="feature-card bg-gray-50 shadow-sm relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden sm:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: 0;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
              <img
                src="/images/about/Group.svg"
                alt="Integrity Icon"
                class="relative z-10"
                style="height: 20.71px; width: auto; color: #1a1925"
              />
            </div>
            <h3 class="feature-heading">Optimized hardware</h3>
            <p class="feature-description">
              Each edge server is meticulously crafted with an advanced TCP
              stack, 100% SSD coverage, and much more.
            </p>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div class="feature-card bg-gray-50 shadow-sm relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden sm:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: 0;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
              <img
                src="/images/about/Group.svg"
                alt="Integrity Icon"
                class="relative z-10"
                style="height: 20.71px; width: auto; color: #1a1925"
              />
            </div>
            <h3 class="feature-heading">Powerful features</h3>
            <p class="feature-description">
              Every account, large or small, has access to all of our features,
              like HTTP/2, Brotli, TLS 1.3, and many more.
            </p>
          </div>
        </div>

        <!-- Feature Card 3 -->
        <div class="feature-card bg-gray-50 shadow-sm relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden sm:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: 0;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
              <img
                src="/images/about/Group.svg"
                alt="Integrity Icon"
                class="relative z-10"
                style="height: 20.71px; width: auto; color: #1a1925"
              />
            </div>
            <h3 class="feature-heading">Global network</h3>
            <p class="feature-description">
              Our network utilizes IP anycast and our latency based routing
              technology for leading performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features Section Component
</script>

<style scoped>
.feature-card {
  border-radius: 20px;
  height: 287px;
  display: flex;
  flex-direction: column;
}

.feature-icon-container {
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-blob {
  position: absolute;
  width: 32px;
  height: 28px;
  background: #ebf1ff;
  border-radius: 50% 40% 60% 50%;
  top: 2px;
  left: 4px;
  opacity: 0.6;
  filter: blur(6px);
  transform: rotate(-15deg);
  z-index: 0;
}

.feature-icon {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
}

.feature-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #1a1925;
  margin-bottom: 8px;
}

.feature-description {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #73737f;
}
</style>
