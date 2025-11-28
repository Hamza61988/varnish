<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl ">
    <div class="mb-4">
      <button class="support-btn shadow-md">Support</button>
    </div>

    <h1 class="text-5xl font-medium mt-2 text-[#1A1925]">CDN Storage</h1>
    <p class="text-[#73737F] mt-4 max-w-2xl text-lg">
      We offer high speed content delivery storage optimized for large files.
    </p>

    <div
      class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10"
    >
      <div class="flex flex-col gap-6 text-[#73737F] leading-relaxed">
        <p>
          CDN storage is the best solution for distributing large static files
          or offloading content from an origin server. Our content delivery
          network storage allows direct access to our backbone to distribute
          data at maximum transfer speeds. This is perfect for static site
          hosting, software distribution, and high resolution videos.
        </p>
        <p>
          Our edge servers are interconnected with our storage cluster, which
          guarantees fast distribution to your users. Your origin server is
          completely exonerated and can use its resources for other important
          tasks. This is perfect for distributing large files, such as mobile or
          desktop applications and games, as well as HD or 4K videos.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              Accelerated uploads
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              Data can be transferred through FTP(S) or rsync over SSH based on
              certificates.
            </p>
          </div>
        </div>

        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              High throughput
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              Tier 1 network backbone and optimized hardware prevent bandwidth
              bottlenecks.
            </p>
          </div>
        </div>

        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              Secure storage
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              All content is stored in our highly redundant and secure European
              data centers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      <div class="flex flex-col gap-4">
        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              Low pricing
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              Benefit from pay as you go billing and volume pricing as low as
              $0.01/GB.
            </p>
          </div>
        </div>

        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              Fast platform
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              Configuration updates only take a few minutes to be deployed
              across the globe.
            </p>
          </div>
        </div>

        <div
          class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start"
        >
          <div class="flex-shrink-0 pt-1">
            <img
              alt="solution icon"
              src="/images/Solutions/icon.png"
              class="w-6 h-6"
            />
          </div>
          <div>
            <h2 class="text-[1.125rem] font-semibold text-gray-900 mb-1">
              No commitment
            </h2>
            <p class="text-[#73737F] leading-relaxed">
              No contract required, allowing traffic volume to scale up or down
              at any time.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 text-[#73737F] leading-relaxed">
        <p>
          CDN storage through a Push Zone can be setup in just a few minutes and
          is extremely easy to work with. Use it in conjunction with a Pull Zone
          or alone as needed. Just upload your content and take your CDN URL
          followed by the file path to access it. Now users who access your Push
          Zone will be delivered data from our nearest point of presence.
        </p>
        <p>
          Push Zones are instances that have been optimized on best practice
          guidelines. Optimal expire header settings, ETag handling, and byte
          range request support provides an excellent user experience.
        </p>
        <p>
          Utilizing CDN storage can be a great cost effective way to handle the
          delivery of your large files. Interconnect traffic from our storage
          cluster to our edge servers is free, only pay for content storage and
          outbound bandwidth from our edge servers.
        </p>
      </div>
    </div>
  </div>

  <section
    class="relative overflow-hidden pt-4 mt-4 bg-white h-[450px] sm:h-[550px] md:h-[620px] lg:h-[676px] w-full"
    style="background-color: #f7f7f8"
  >
    <div
      class="absolute inset-0 pointer-events-none overflow-hidden"
      style="z-index: 0"
    >
      <img
        src="/images/2ndlast_section2.svg"
        alt=""
        class="absolute opacity-30 bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
      />
    </div>
    <div class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]">
      <div
        class="bg-[#1A1925] text-center relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[356px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[35px]"
      >
        <div
          class="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 pt-3 sm:pt-4 md:pt-5 lg:pt-[5%]"
        >
          <div
            class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full sm: md:font-medium text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 color-[#A3A3AE] fill-[#A3A3AE]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span class="text-[#1A1925] ml-1">Lets Get Started</span>
          </div>
        </div>
        <h2
          class="relative text-white mb-2 sm:mb-3 md:mb-4 cta-heading"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 600;
            letter-spacing: -0.04em;
            text-align: center;
            text-transform: capitalize;
            color: #ffffff;
          "
        >
          Access All Features
        </h2>
        <p
          class="relative mb-4 sm:mb-5 md:mb-6 lg:mb-8 cta-subtitle"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            letter-spacing: -0.011em;
            text-align: center;
            color: #51515e;
          "
        >
          Get started with a free 14 day trial, no credit card required.
        </p>
        <div
          class="relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-5 cta-metrics"
        >
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >120 Employes</span
          >
          <span class="text-gray-600 sm:md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >$31.5M Raised</span
          >
          <span class="text-gray-600 sm:md:text-base">•</span>
          <span
            class="cta-metric-text"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
            >7 Years old</span
          >
        </div>
        <div class="relative pb-4 sm:pb-5 md:pb-6 lg:pb-[15%]">
          <button
            class="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-[125px] sm:w-[135px] md:w-[145px] lg:w-[153px] h-[30px] sm:h-[32px] md:h-[34px] lg:h-[36px] opacity-100"
            style="
              font-family: 'Funnel Display', sans-serif;
              font-weight: 500;
              letter-spacing: -0.02em;
              text-align: center;
              color: #ffffff;
            "
          >
            <span
              class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-tight"
              >Get Started ~ Free</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
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
