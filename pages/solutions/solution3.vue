<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl ">
    <div class="mb-4">
     <button class="support-btn shadow-md">Support</button>
    </div>
    
    <h1 class="text-5xl font-medium mt-2 text-[#1A1925]">Video CDN</h1>
    <p class="text-[#73737F] mt-4 max-w-2xl text-lg">
      We offer an affordable way to deliver high resolution videos without delay.
    </p>

    <div class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10">
      
      <div class="flex flex-col gap-6 text-[#73737F] leading-relaxed">
        <p>
          We have engineered a high performance video CDN. Whether
          you are wanting to deliver videos on demand or HTTP live
          streams, our content delivery network ensures a lag free user
          experience. Our network is highly scalable and performance is
          never sacrificed, no matter the number of users.
        </p>
        <p>
          Precisely manage who is accessing your videos. Our Secure
          Token feature makes it possible to limit access only for
          designated users. Hotlink protection makes the video
          exclusively available for the defined referrers.
        </p>
        <p>
          All leading video and audio formats are supported including
          FLV (Flash), MP4 (HTML5 videos), MOV (QuickTime), WMV
          (Windows Media), MP3, and WAV. Our network can accelerate
          any type of video content.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">Global network</h2>
            <p class="text-[#73737F]  leading-relaxed">
              We have 60+ data centers in 40+ countries spread across 6 continents.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">Smooth playback</h2>
            <p class="text-[#73737F]  leading-relaxed">
              Optimized for all types of video and HTTP live streaming to prevent interruptions.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">Safeguard content</h2>
            <p class="text-[#73737F]  leading-relaxed">
              Hotlink protection and token authentication keeps content private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      
      <div class="flex flex-col gap-4">
        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">Low pricing</h2>
            <p class="text-[#73737F]  leading-relaxed">
              Benefit from pay as you go billing and volume pricing as low as $0.01/GB.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">Fast platform</h2>
            <p class="text-[#73737F]  leading-relaxed">
              Configuration updates only take a few minutes to be deployed across the globe.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
            <img alt="solution icon" src="/images/Solutions/icon.png" class="w-6 h-6" />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">No commitment</h2>
            <p class="text-[#73737F]  leading-relaxed">
              No contract required, allowing traffic volume to scale up or down at any time.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 text-[#73737F] leading-relaxed">
        <p>
          Our video CDN has also been optimized for video players. We
          support features like video seeking and partial downloads.
          These features are automatically enabled to get the most out
          of your videos.
        </p>
        <p>
          You can use KeyCDN's video CDN to help supercharge your
          HLS live stream. HTTP live streaming is a technology used for
          streaming live and on demand content using the HTTP
          protocol. HLS has many advantages, such as firewall and
          proxies being able to better handle the HTTP traffic, it is
          compatible with iOS devices, and does not require a flash web
          player for playback. KeyCDN offers an optimized HLS feature
          free for all customers which allows you to accelerate your HLS
          streams even faster. In most cases, live streaming based on
          HLS is better suited and recommended over RTMP.
        </p>
        <p>
          Our video CDN requires no additional origin server
          configurations and is automatically available to all accounts.
        </p>
      </div>
    </div>
  </div>

<AccessAllFeaturesSection class="mt-10"/>
</template>

<style scoped>
.support-btn {
  position: relative;
  padding-left: 39px;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border-radius: 10px;
  padding: 1px 20px;
  cursor: pointer;
}
.support-btn::before {
  content: "";
  position: absolute;
  padding-left: 12px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%23888'><path d='M7 0L1 8h4l-1 6 6-8H7z'/></svg>");
}
.btn2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 15px 20px;
  cursor: pointer;
}
.arrow {
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23888'><path fill-rule='evenodd' d='M10 6l6 6H4l6-6z' clip-rule='evenodd'/></svg>");
}
</style>