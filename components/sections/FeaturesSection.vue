<template>
  <section class="container mx-auto px-4 py-12 md:py-16 bg-[#F7F7F8]">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8"
      >
        <!-- Feature Card 1 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66675 5.33333C4.90532 5.33333 2.66675 7.5719 2.66675 10.3333V23C2.66675 25.7614 4.90532 28 7.66675 28H16.3334C16.8857 28 17.3334 27.5523 17.3334 27C17.3334 26.4477 16.8857 26 16.3334 26H7.66675C6.00989 26 4.66675 24.6568 4.66675 23V10.3333C4.66675 8.67647 6.00989 7.33333 7.66675 7.33333H24.3334C25.9903 7.33333 27.3334 8.67647 27.3334 10.3333V16.3333C27.3334 16.8856 27.7811 17.3333 28.3334 17.3333C28.8857 17.3333 29.3334 16.8856 29.3334 16.3333V10.3333C29.3334 7.5719 27.0948 5.33333 24.3334 5.33333H7.66675Z"
                  fill="#1A1925"
                ></path>
                <path
                  d="M8.66675 12.6667C7.93037 12.6667 7.33341 12.0697 7.33341 11.3333C7.33341 10.5969 7.93037 10 8.66675 10C9.40313 10 10.0001 10.5969 10.0001 11.3333C10.0001 12.0697 9.40313 12.6667 8.66675 12.6667Z"
                  fill="#1A1925"
                ></path>
                <path
                  d="M17.9597 17.9596C18.2216 17.6977 18.6068 17.602 18.9609 17.7109L28.2942 20.5827C28.6848 20.7029 28.963 21.0487 28.9967 21.456C29.0304 21.8633 28.8129 22.2501 28.4473 22.4329L24.4378 24.4377L22.433 28.4472C22.2502 28.8128 21.8634 29.0303 21.4561 28.9966C21.0488 28.9629 20.703 28.6847 20.5828 28.2941L17.711 18.9608C17.6021 18.6067 17.6977 18.2215 17.9597 17.9596Z"
                  fill="#1A1925"
                ></path>
                <path
                  d="M13.3334 12.6667C12.597 12.6667 12.0001 12.0697 12.0001 11.3333C12.0001 10.5969 12.597 10 13.3334 10C14.0698 10 14.6667 10.5969 14.6667 11.3333C14.6667 12.0697 14.0698 12.6667 13.3334 12.6667Z"
                  fill="#1A1925"
                ></path>
                <path
                  d="M18.0001 12.6667C17.2637 12.6667 16.6667 12.0697 16.6667 11.3333C16.6667 10.5969 17.2637 10 18.0001 10C18.7365 10 19.3334 10.5969 19.3334 11.3333C19.3334 12.0697 18.7365 12.6667 18.0001 12.6667Z"
                  fill="#1A1925"
                ></path>
              </svg>
            </div>
            <h3 class="feature-heading">hardware</h3>
            <p class="feature-description">
              Each edge server is meticulously crafted with an advanced TCP
              stack, 100% SSD coverage, and much more.
            </p>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0404 8.62623L15.3334 9.91916L19.2929 5.95964C20.9233 4.32927 23.44 4.12547 25.292 5.34825C25.5565 5.52294 25.8075 5.72673 26.0404 5.95964C27.6708 7.59002 27.8746 10.1068 26.6518 11.9587C26.4771 12.2233 26.2734 12.4743 26.0404 12.7072L22.0809 16.6667L23.3738 17.9596C23.7643 18.3501 23.7643 18.9833 23.3738 19.3738C22.9832 19.7643 22.3501 19.7643 21.9596 19.3738L20.6667 18.0809L11.431 27.3167C10.9934 27.7543 10.3999 28.0001 9.78105 28.0001H6.33333C5.04467 28.0001 4 26.9554 4 25.6668V22.219C4 21.6002 4.24583 21.0067 4.68342 20.5691L13.9192 11.3334L12.6262 10.0404C12.2357 9.64992 12.2357 9.01676 12.6262 8.62623C13.0168 8.23571 13.6499 8.23571 14.0404 8.62623ZM15.3333 12.7476L19.2525 16.6667L15.9192 20H8.08096L15.3333 12.7476Z"
                  fill="#1A1925"
                ></path>
              </svg>
            </div>
            <h3 class="feature-heading">Powerful features</h3>
            <p class="feature-description">
              Every account, large or small, has access to all of our features,
              like HTTP/2, Brotli, TLS 1.3, and many more.
            </p>
          </div>
        </div>

        <!-- Feature Card 3 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.00001 18.3279L4.00004 8.99999C4.00005 6.23857 6.23863 4.00001 9.00004 4.00001L23 4C25.7614 4 28 6.23857 28 9V18.3282C28 18.3299 28 18.3316 28 18.3333L28 23C28 25.4162 26.2861 27.4322 24.0077 27.8984C23.6822 27.965 23.3452 28 23 28H9C6.41116 28 4.28186 26.0325 4.02581 23.5112C4.00874 23.3431 4 23.1726 4 23M9.00004 6.00001L23 6C24.6568 6 26 7.34315 26 9V17.3333L21.2397 17.3333C20.7593 17.3333 20.3468 17.675 20.2573 18.147C19.8771 20.1513 18.1144 21.6667 16 21.6667C13.8856 21.6667 12.123 20.1513 11.7427 18.147C11.6532 17.675 11.2407 17.3333 10.7603 17.3333H6.00002L6.00004 8.99999C6.00005 7.34314 7.34319 6.00001 9.00004 6.00001Z"
                  fill="#1A1925"
                ></path>
                <path
                  d="M4 23V18.3333C4 18.3315 4 18.3297 4.00001 18.3279"
                  fill="#1A1925"
                ></path>
              </svg>
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
  border: 0.8px solid rgba(26, 25, 37, 0.12);
  border-radius: 20px;
  height: 246px;
  width: 262px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
}
.feature-card:hover {
  background-color: rgb(240, 240, 240);
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
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
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
  color: #51515e;
}
</style>
