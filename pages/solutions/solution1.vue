<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <button class="support-btn shadow-md">Support</button>
    <h1 class="text-5xl font-medium mt-2">CDN Services</h1>
    <p class="text-[#73737F] mt-4 max-w-2xl">
      We offer an ideal content delivery service that operates exceedingly fast.
    </p>
    <div
      class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10"
    >
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F]">
          CDN services are not created equally. There are many differentiating
          factors that make up each content delivery network available. We have
          designed KeyCDN to be intuitive and flexible. Our network can be
          effortlessly integrated into any infrastructure, from a small hobby
          project to a large enterprise.
        </p>
        <p class="text-[#73737F]">
          With a wide variety of platform features available, you can configure
          KeyCDN exactly how you want to deliver content seamlessly with your
          existing infrastructure. Take advantage of features like Brotli, TLS
          1.3, and free TLS certificates to not only accelerate your content but
          to also keep it secure as it travels from our edge servers to your
          users.
        </p>
      </div>
      <div class="flex flex-col gap-6">
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-12">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Instant purge</h2>
            <p class="text-[#73737F]">
              Never serve stale content again. Purge all data centers in the
              blink of an eye. Purge the entire cache or individual content.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-10">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Platform features</h2>
            <p class="text-[#73737F]">
              We have many advanced features that allow complete content
              delivery control.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-10">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Network health</h2>
            <p class="text-[#73737F]">
              We have a low latency network with stellar speeds and an almost
              perfect uptime record.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-16 grid grid-cols-1 mb-20 place-items-center md:grid-cols-2 gap-10"
    >
      <div class="flex flex-col gap-6">
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-10">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Low pricing</h2>
            <p class="text-[#73737F]">
              Benefit from pay as you go billing and volume pricing as low as
              $0.01/GB.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-10">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">Fast platform</h2>
            <p class="text-[#73737F]">
              Configuration updates only take a few minutes to be deployed
              across the globe.
            </p>
          </div>
        </div>
        <div class="bg-white flex gap-2 shadow-sm border rounded-lg p-5">
          <div class="pt-1 w-10">
            <img alt="solution icon" src="/images/Solutions/icon.png" />
          </div>
          <div>
            <h2 class="text-[1rem] font-semibold">No commitment</h2>
            <p class="text-[#73737F]">
              No contract required, allowing traffic volume to scale up or down
              at any time.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F]">
          Although there are many CDN services provided by any CDN provider,
          customer support is one of the most important. At KeyCDN we want all
          of our customers to have their content properly optimized for the
          fastest delivery possible. That is why our extensive learning
          resources go in-depth on how to optimally configure KeyCDN to work
          with your CMS, framework, or custom application. Furthermore, if you
          have any questions or issues with your setup that is not answered in
          our knowledge base you can reach out to our support team 24/7 for
          dedicated support.
        </p>
        <p class="text-[#73737F]">
          We know the importance of having your data readily available at all
          times. That is why, included in our CDN service, all data processed
          occurs in real time. We provide valuable content delivery insights
          that allow better decisions to be made.
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
