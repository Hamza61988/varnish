<template>
  <section class="bg-gray-50 py-6 md:py-8">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-4 md:mb-6">
          <h2 class="feature-heading">
            ACCESS ALL FEATURES
          </h2>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >Instant Purge</span
            >
          </div>
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >HTTP/2</span
            >
          </div>
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >TLS Certificate</span
            >
          </div>
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >Origin Shield</span
            >
          </div>
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >Secure Token</span
            >
          </div>
          <div
            class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="border: 1px solid #EEEEF0;"
          >
            <div class="feature-dot-container">
              <div class="feature-dot-inner"></div>
            </div>
            <span class="feature-text"
              >DDoS Protection</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Access All Features Section Component
</script>

<style scoped>
.feature-heading,
.feature-text {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #1A1925;
}

.feature-dot-container {
  width: 16px;
  height: 16px;
  background: #E0E7FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-dot-inner {
  width: 8px;
  height: 8px;
  background: #2563EB;
  border-radius: 50%;
}
</style>

