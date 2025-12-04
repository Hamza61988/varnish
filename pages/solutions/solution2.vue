<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <button class="support-btn shadow-md">Support</button>
    <h1 class="text-5xl font-medium mt-2">Image Processing</h1>
    <p class="text-[#73737F] mt-4 max-w-2xl">
      We offer a powerful way to transform and optimize images in real time.
    </p>

    <div class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10">
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F]">
          Image processing allows on the fly image transformation and
          optimization. Our real-time image processing allows images to be
          altered and enhanced with simple query parameters before being
          delivered by our high performance content delivery network. This means
          no matter where your users are located they will receive processed
          images with low latency.
        </p>
        <p class="text-[#73737F]">
          By using our image processing service the overall resources on the
          origin server will be reduced because there is no longer a need to
          store several variations of the same image. Instead, append one or
          more of our available query parameters to process the image to fit
          your required specifications.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <div class="bg-white flex gap-2  shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Flexible transformations</h2>
            <p class="text-[#73737F]">
              Serve properly scaled images by dynamically updating the width and height.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Robust optimizations</h2>
            <p class="text-[#73737F]">
              Improve image performance by reducing the overall size and using a better format.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Swift delivery</h2>
            <p class="text-[#73737F]">
              Increase image speed by being distributed globally through our 60+ data centers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex flex-col justify-center">
        <div class="bg-[#F9F9FA] border rounded-lg p-8 pb-4">
          <img 
            src="/images/Solutions/solution2.svg" 
            alt="Leaf Solution" 
            class="w-full h-auto mix-blend-multiply" 
          />
         
        </div>
         <div class="mt-6 bg-white border rounded px-3 py-2 text-sm text-[#73737F] text-center">
            https://ip.keycdn.com/example.jpg?format=webp <span class=" text-black">|</span>
          </div>
      </div>

      <div class="flex flex-col gap-6 justify-center">
        <p class="text-[#73737F]">
          In addition to being powerful, our real-time image processing is
          affordable. Pricing starts at $0.40 per 1,000 operations. An operation
          is counted when an image has been processed. Once an image is
          processed it is then cached at our shield locations. Our edge servers
          are then able to pull and cache the processed image instead of having
          to process the image again. This will improve the image processing
          performance and decrease the overall cost.
        </p>
        <p class="text-[#73737F]">
          Furthermore, our real-time image processing also allows for automatic
          WebP formatting. This allows you to take advantage of delivering the
          next generation image format to accepted browsers. The WebP image
          format offers superior compression over other image formats, which can
          significantly decrease size and increase speed.
        </p>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 mb-20">
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F]">
          Images often consume the most resources when a page is loaded.
          Utilizing our on the fly image processing can be a great way to
          optimize your images and improve the performance of your website or
          application. Traffic pricing is affordable from the very beginning and
          no contract is required. KeyCDN can be integrated seamlessly with your
          existing infrastructure.
        </p>
        <p class="text-[#73737F]">
          Simplify your stack by combining your digital image processing and
          content delivery. Learn more about what is possible with our image
          processing API.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Low pricing</h2>
            <p class="text-[#73737F]">
              Benefit from pay as you go billing and volume pricing as low as $0.01/GB.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Fast platform</h2>
            <p class="text-[#73737F]">
              Configuration updates only take a few minutes to be deployed across the globe.
            </p>
          </div>
        </div>

        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">No commitment</h2>
            <p class="text-[#73737F]">
              No contract required, allowing traffic volume to scale up or down at any time.
            </p>
          </div>
        </div>
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