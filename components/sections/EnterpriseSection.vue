<template>
  <section class="mx-auto px-[57.5px] lg:px-0 mt-[24px] ">
    <div>
     <div
  class="bg-white rounded-lg p-[24px] flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 sm:gap-5 md:gap-6"
  style="border-radius: 16px; box-shadow: 0 1px 2px -1px #1a19250a, 0 1px 1px #1a19250a, 0 .5px .5px #1a19250a;"
>

<div class="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-auto">
          <div class="thumb-icon-container flex-shrink-0">
            <div class="thumb-blob"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="thumb-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H16.4262C17.907 22 19.1662 20.9197 19.3914 19.4562L20.4683 12.4562C20.7479 10.6384 19.3411 9 17.5032 9H14C13.4477 9 13 8.55228 13 8V4.46584C13 3.10399 11.896 2 10.5342 2C10.2093 2 9.91498 2.1913 9.78306 2.48812L7.26394 8.72711C7.11395 9.05212 6.78231 9.25 6.42785 9.25H4C2.89543 9.25 2 10.1454 2 11.25V13Z"
                stroke="#1F62FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="enterprise-heading">
              Enterprise
            </h3>
            <p class="enterprise-description">
              Over 100 TB per month? Contact us for discounted volume pricing.
            </p>
          </div>
        </div>
        <button class="contact-us-button w-full md:w-auto  ">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Enterprise Section Component
</script>

<style scoped>
.thumb-icon-container {
  width: 48px;
  height: 48px;
  border: 1px solid #EEEEF0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #FFFFFF;
  position: relative;
  overflow: hidden;
}

.thumb-blob {
  position: absolute;
  width: 36px;
  height: 28px;
  background: #EBF1FF;
  border-radius: 50% 40% 60% 50%;
  top: 6px;
  left: 4px;
  opacity: 0.7;
  filter: blur(6px);
  transform: rotate(-15deg);
}

.thumb-icon {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.enterprise-heading {
  font-family: 'Funnel Display', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
  vertical-align: middle;
  color: #1A1925;
  margin-bottom: 4px;
}

.enterprise-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.006em;
  vertical-align: middle;
  color: #51515E;
}

.contact-us-button {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: center;
  color: #FFFFFF;
  background: 
    linear-gradient(180deg, rgba(236, 236, 236, 0.08) 0%, rgba(85, 85, 85, 0.08) 100%),
    #1F62FF;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  box-shadow: 
    0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,
    0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,
    0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,
    0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset,
    0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),
    0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),
    0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),
    0px 2px 4px -1px rgba(26, 25, 37, 0.12),
    0px 4px 8px -4px rgba(26, 25, 37, 0.12),
    0px 8px 12px -4px rgba(26, 25, 37, 0.06);
  transition: transform 0.1s ease;
}

.contact-us-button:hover {
background:
  linear-gradient(180deg, rgba(236, 236, 236, 0.08) 0%, rgba(85, 85, 85, 0.08) 100%),
  #1251e4;

}

.contact-us-button:active {
  transform: translateY(0);
}

@media (min-width: 768px) {
  .contact-us-button {
    width: auto;
  }
}
</style>

