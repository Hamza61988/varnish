<template>
  <section class="container mx-auto px-4 py-12 md:py-16 bg-[#F7F7F8]">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Feature Card 1 -->
        <div class="feature-card bg-gray-50 p-6 shadow-sm">
          <div class="feature-icon-container">
            <div class="icon-blob"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <!-- Globe -->
              <circle cx="12" cy="10" r="6" stroke="#1A1925" stroke-width="1.5" fill="none"/>
              <line x1="12" y1="4" x2="12" y2="16" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="6" y1="10" x2="18" y2="10" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="7" x2="16" y2="7" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="13" x2="16" y2="13" stroke="#1A1925" stroke-width="1.5"/>
              <!-- Network connection -->
              <line x1="6" y1="18" x2="18" y2="18" stroke="#1A1925" stroke-width="1.5"/>
              <circle cx="12" cy="18" r="1.5" fill="#1A1925"/>
              <line x1="9" y1="18" x2="9" y2="20" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="15" y1="18" x2="15" y2="20" stroke="#1A1925" stroke-width="1.5"/>
            </svg>
          </div>
          <h3 class="feature-heading">
            Optimized hardware
          </h3>
          <p class="feature-description">
            Each edge server is meticulously crafted with an advanced TCP
            stack, 100% SSD coverage, and much more.
          </p>
        </div>

        <!-- Feature Card 2 -->
        <div class="feature-card bg-gray-50 p-6 shadow-sm">
          <div class="feature-icon-container">
            <div class="icon-blob"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <!-- Globe -->
              <circle cx="12" cy="10" r="6" stroke="#1A1925" stroke-width="1.5" fill="none"/>
              <line x1="12" y1="4" x2="12" y2="16" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="6" y1="10" x2="18" y2="10" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="7" x2="16" y2="7" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="13" x2="16" y2="13" stroke="#1A1925" stroke-width="1.5"/>
              <!-- Network connection -->
              <line x1="6" y1="18" x2="18" y2="18" stroke="#1A1925" stroke-width="1.5"/>
              <circle cx="12" cy="18" r="1.5" fill="#1A1925"/>
              <line x1="9" y1="18" x2="9" y2="20" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="15" y1="18" x2="15" y2="20" stroke="#1A1925" stroke-width="1.5"/>
            </svg>
          </div>
          <h3 class="feature-heading">
            Powerful features
          </h3>
          <p class="feature-description">
            Every account, large or small, has access to all of our features,
            like HTTP/2, Brotli, TLS 1.3, and many more.
          </p>
        </div>

        <!-- Feature Card 3 -->
        <div class="feature-card bg-gray-50 p-6 shadow-sm">
          <div class="feature-icon-container">
            <div class="icon-blob"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <!-- Globe -->
              <circle cx="12" cy="10" r="6" stroke="#1A1925" stroke-width="1.5" fill="none"/>
              <line x1="12" y1="4" x2="12" y2="16" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="6" y1="10" x2="18" y2="10" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="7" x2="16" y2="7" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="8" y1="13" x2="16" y2="13" stroke="#1A1925" stroke-width="1.5"/>
              <!-- Network connection -->
              <line x1="6" y1="18" x2="18" y2="18" stroke="#1A1925" stroke-width="1.5"/>
              <circle cx="12" cy="18" r="1.5" fill="#1A1925"/>
              <line x1="9" y1="18" x2="9" y2="20" stroke="#1A1925" stroke-width="1.5"/>
              <line x1="15" y1="18" x2="15" y2="20" stroke="#1A1925" stroke-width="1.5"/>
            </svg>
          </div>
          <h3 class="feature-heading">
            Global network
          </h3>
          <p class="feature-description">
            Our network utilizes IP anycast and our latency based routing
            technology for leading performance.
          </p>
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
  background: #EBF1FF;
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
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #1A1925;
  margin-bottom: 8px;
}

.feature-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #73737F;
}
</style>

