<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto px-6 max-w-[58.75rem] ">
    <div class="mb-4">
     <div
              style="
                padding: 4px 12px 4px 8px;
                box-shadow: 0 3px 3px -1.5px #07011308, 0 2px 2px -1px #07011308,
                  0 1px 1px -0.5px #07011308, 0 0.5px 0.5px #07011308;
              "
              class="inline-flex items-center space-x-2 rounded-full text-xs sm:text-sm font-medium border border-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 sm:h-4 sm:w-4"
                style="color: #a3a3ae; fill: #a3a3ae"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A3A3AE"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span
                style="color: #1a1925; font-weight: 500; font-size: 12.06px"
              >
                Solutions
              </span>
            </div>
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
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.42139 8.64648C9.81773 8.64648 10.1411 8.96986 10.1411 9.36621C10.1411 9.76252 9.81771 10.0859 9.42139 10.0859H2.52979C2.02704 10.0859 1.61475 10.4982 1.61475 11.001V22.1699C1.61475 22.6727 2.02703 23.085 2.52979 23.085H22.144C22.6468 23.085 23.0591 22.6727 23.0591 22.1699V11.001C23.0591 10.4982 22.6468 10.0859 22.144 10.0859H15.0884C14.6922 10.0858 14.3687 9.76246 14.3687 9.36621C14.3687 8.96994 14.6921 8.6466 15.0884 8.64648H22.144C23.4395 8.64648 24.4985 9.70573 24.4985 11.001V22.1699C24.4985 23.4651 23.4393 24.5244 22.144 24.5244H2.52979C1.23459 24.5244 0.175293 23.4652 0.175293 22.1699V11.001C0.175293 9.70578 1.23453 8.64648 2.52979 8.64648H9.42139Z" fill="#1F62FF" stroke="#1F62FF" stroke-width="0.35"/>
<path d="M12.5186 0.174805L12.5459 0.202148H12.5723L12.6055 0.236328C12.6072 0.236767 12.6096 0.235839 12.6113 0.236328C12.6283 0.241076 12.6431 0.248438 12.6562 0.255859H12.6826L12.7334 0.307617L16.7646 4.33887C17.051 4.62518 17.051 5.06329 16.7646 5.34961C16.6239 5.48994 16.4439 5.56445 16.2598 5.56445C16.0758 5.5644 15.8955 5.49013 15.7549 5.34961L13.0566 2.65137V16.7217C13.0566 16.9691 12.9304 17.1877 12.7393 17.3174L12.9316 17.4414H12.3369C11.9407 17.4413 11.6172 17.118 11.6172 16.7217V2.65137L8.91895 5.34961C8.77822 5.49001 8.59825 5.56445 8.41406 5.56445C8.23003 5.56445 8.04981 5.49012 7.90918 5.34961C7.62285 5.0633 7.62286 4.62519 7.90918 4.33887L11.8037 0.389648L11.8047 0.388672C11.8318 0.361577 11.8596 0.334708 11.8867 0.307617L11.9375 0.255859H11.9629C11.9736 0.249782 11.9857 0.244679 11.999 0.240234C12.0032 0.23722 12.0076 0.233543 12.0127 0.230469C12.0173 0.227719 12.0232 0.227131 12.0283 0.224609C12.0379 0.216703 12.0507 0.205101 12.0684 0.196289C12.095 0.183 12.12 0.177783 12.1396 0.175781C12.1545 0.174294 12.1703 0.174805 12.1738 0.174805H12.5186ZM12.7061 0.293945C12.7054 0.293308 12.7043 0.292037 12.7031 0.291016H12.7012C12.7031 0.292854 12.7056 0.293461 12.7061 0.293945Z" fill="#1F62FF" stroke="#1F62FF" stroke-width="0.35"/>
</svg>

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
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2855 15.4287H5.14284V5.99994C5.14284 5.6937 4.97952 5.41088 4.71433 5.25773C4.44913 5.10461 4.12227 5.10461 3.85709 5.25773C3.59189 5.41085 3.42857 5.69369 3.42857 5.99994V15.4287H1.7143C1.25963 15.4287 0.823689 15.6093 0.502101 15.9308C0.180556 16.2522 0 16.6884 0 17.1428V22.2857C0 22.7404 0.180551 23.1765 0.502101 23.4979C0.823645 23.8194 1.25961 24 1.7143 24H22.2857C22.7404 24 23.1765 23.8194 23.4979 23.4979C23.8194 23.1766 24 22.7404 24 22.2857V17.1428C24 16.6884 23.8195 16.2522 23.4979 15.9308C23.1766 15.6093 22.7404 15.4287 22.2857 15.4287H22.2855ZM1.7141 22.2857V17.1428H22.2855V22.2857H1.7141ZM10.3284 1.41429C10.1294 1.18164 10.0696 0.860289 10.1717 0.571692C10.2738 0.282893 10.522 0.0704449 10.8231 0.014533C11.1242 -0.0416076 11.4324 0.0672733 11.6314 0.300141C12.9772 1.89447 13.7153 3.91351 13.7153 6.00022C13.7153 8.08665 12.9771 10.1059 11.6314 11.7003C11.4685 11.8906 11.2306 12.0004 10.9798 12.0004C10.7604 12.0004 10.549 11.9159 10.3897 11.7647C10.2304 11.6135 10.1353 11.407 10.1239 11.1875C10.1124 10.9683 10.1857 10.7528 10.3284 10.5859C11.4088 9.30204 12.0011 7.67815 12.0011 6.00025C12.0011 4.32256 11.4088 2.69845 10.3284 1.4146L10.3284 1.41429ZM8.27984 3.12856C8.08248 2.89442 8.02485 2.57243 8.12906 2.28427C8.23305 1.99611 8.48314 1.78536 8.7847 1.73136C9.08626 1.67756 9.3938 1.78857 9.59131 2.02292C10.5321 3.1379 11.0483 4.54979 11.0483 6.00868C11.0483 7.46756 10.5322 8.8794 9.59131 9.99421C9.4282 10.1901 9.18619 10.3032 8.93142 10.3028C8.73003 10.3009 8.53587 10.2279 8.38276 10.0971C8.2088 9.95062 8.10013 9.74093 8.08078 9.51423C8.06142 9.28753 8.13309 9.06232 8.27983 8.88859C8.96144 8.08366 9.33529 7.06331 9.33529 6.00871C9.33529 4.9539 8.96143 3.93355 8.27983 3.12862L8.27984 3.12856ZM6.23146 7.16576C6.50792 6.84017 6.65977 6.4272 6.65977 5.99994C6.65977 5.57291 6.50792 5.15968 6.23146 4.83434C6.08472 4.66038 6.01327 4.43538 6.03241 4.20869C6.05176 3.98199 6.16023 3.7723 6.33418 3.62578C6.50814 3.47904 6.73314 3.40759 6.95983 3.42694C7.18653 3.44608 7.39621 3.55475 7.54274 3.72871C8.08035 4.36329 8.37554 5.16821 8.37554 5.99998C8.37554 6.8319 8.08036 7.63661 7.54274 8.27146C7.37218 8.47115 7.11954 8.58173 6.8571 8.57153C6.65677 8.57195 6.46261 8.5022 6.30843 8.37439C6.13809 8.22425 6.03431 8.01265 6.01985 7.78592C6.00539 7.55943 6.08153 7.33634 6.23146 7.16576ZM20.5709 19.7141C20.5709 19.9414 20.4807 20.1594 20.32 20.3202C20.1592 20.481 19.9412 20.5711 19.7139 20.5711H17.9996C17.6934 20.5711 17.4103 20.4078 17.2572 20.1426C17.104 19.8774 17.104 19.5508 17.2572 19.2856C17.4103 19.0204 17.6933 18.8569 17.9996 18.8569H19.7139C19.9412 18.8569 20.1592 18.9472 20.32 19.108C20.4807 19.2688 20.5709 19.4867 20.5709 19.7141ZM15.4283 19.7141C15.4283 19.9414 15.3379 20.1594 15.1771 20.3202C15.0163 20.481 14.7984 20.5711 14.571 20.5711H12.8567C12.5505 20.5711 12.2677 20.4078 12.1145 20.1426C11.9614 19.8774 11.9614 19.5508 12.1145 19.2856C12.2677 19.0204 12.5505 18.8569 12.8567 18.8569H14.571C14.7983 18.8569 15.0163 18.9472 15.1771 19.108C15.3379 19.2688 15.4283 19.4867 15.4283 19.7141Z" fill="#1F62FF"/>
</svg>

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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2855 15.4287H5.14284V5.99994C5.14284 5.6937 4.97952 5.41088 4.71433 5.25773C4.44913 5.10461 4.12227 5.10461 3.85709 5.25773C3.59189 5.41085 3.42857 5.69369 3.42857 5.99994V15.4287H1.7143C1.25963 15.4287 0.823689 15.6093 0.502101 15.9308C0.180556 16.2522 0 16.6884 0 17.1428V22.2857C0 22.7404 0.180551 23.1765 0.502101 23.4979C0.823645 23.8194 1.25961 24 1.7143 24H22.2857C22.7404 24 23.1765 23.8194 23.4979 23.4979C23.8194 23.1766 24 22.7404 24 22.2857V17.1428C24 16.6884 23.8195 16.2522 23.4979 15.9308C23.1766 15.6093 22.7404 15.4287 22.2857 15.4287H22.2855ZM1.7141 22.2857V17.1428H22.2855V22.2857H1.7141ZM10.3284 1.41429C10.1294 1.18164 10.0696 0.860289 10.1717 0.571692C10.2738 0.282893 10.522 0.0704449 10.8231 0.014533C11.1242 -0.0416076 11.4324 0.0672733 11.6314 0.300141C12.9772 1.89447 13.7153 3.91351 13.7153 6.00022C13.7153 8.08665 12.9771 10.1059 11.6314 11.7003C11.4685 11.8906 11.2306 12.0004 10.9798 12.0004C10.7604 12.0004 10.549 11.9159 10.3897 11.7647C10.2304 11.6135 10.1353 11.407 10.1239 11.1875C10.1124 10.9683 10.1857 10.7528 10.3284 10.5859C11.4088 9.30204 12.0011 7.67815 12.0011 6.00025C12.0011 4.32256 11.4088 2.69845 10.3284 1.4146L10.3284 1.41429ZM8.27984 3.12856C8.08248 2.89442 8.02485 2.57243 8.12906 2.28427C8.23305 1.99611 8.48314 1.78536 8.7847 1.73136C9.08626 1.67756 9.3938 1.78857 9.59131 2.02292C10.5321 3.1379 11.0483 4.54979 11.0483 6.00868C11.0483 7.46756 10.5322 8.8794 9.59131 9.99421C9.4282 10.1901 9.18619 10.3032 8.93142 10.3028C8.73003 10.3009 8.53587 10.2279 8.38276 10.0971C8.2088 9.95062 8.10013 9.74093 8.08078 9.51423C8.06142 9.28753 8.13309 9.06232 8.27983 8.88859C8.96144 8.08366 9.33529 7.06331 9.33529 6.00871C9.33529 4.9539 8.96143 3.93355 8.27983 3.12862L8.27984 3.12856ZM6.23146 7.16576C6.50792 6.84017 6.65977 6.4272 6.65977 5.99994C6.65977 5.57291 6.50792 5.15968 6.23146 4.83434C6.08472 4.66038 6.01327 4.43538 6.03241 4.20869C6.05176 3.98199 6.16023 3.7723 6.33418 3.62578C6.50814 3.47904 6.73314 3.40759 6.95983 3.42694C7.18653 3.44608 7.39621 3.55475 7.54274 3.72871C8.08035 4.36329 8.37554 5.16821 8.37554 5.99998C8.37554 6.8319 8.08036 7.63661 7.54274 8.27146C7.37218 8.47115 7.11954 8.58173 6.8571 8.57153C6.65677 8.57195 6.46261 8.5022 6.30843 8.37439C6.13809 8.22425 6.03431 8.01265 6.01985 7.78592C6.00539 7.55943 6.08153 7.33634 6.23146 7.16576ZM20.5709 19.7141C20.5709 19.9414 20.4807 20.1594 20.32 20.3202C20.1592 20.481 19.9412 20.5711 19.7139 20.5711H17.9996C17.6934 20.5711 17.4103 20.4078 17.2572 20.1426C17.104 19.8774 17.104 19.5508 17.2572 19.2856C17.4103 19.0204 17.6933 18.8569 17.9996 18.8569H19.7139C19.9412 18.8569 20.1592 18.9472 20.32 19.108C20.4807 19.2688 20.5709 19.4867 20.5709 19.7141ZM15.4283 19.7141C15.4283 19.9414 15.3379 20.1594 15.1771 20.3202C15.0163 20.481 14.7984 20.5711 14.571 20.5711H12.8567C12.5505 20.5711 12.2677 20.4078 12.1145 20.1426C11.9614 19.8774 11.9614 19.5508 12.1145 19.2856C12.2677 19.0204 12.5505 18.8569 12.8567 18.8569H14.571C14.7983 18.8569 15.0163 18.9472 15.1771 19.108C15.3379 19.2688 15.4283 19.4867 15.4283 19.7141Z" fill="#1F62FF"/>
</svg>

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
        <div class="bg-white flex gap-4 shadow-sm border border-gray-100 rounded-xl p-5 items-start">
          <div class="flex-shrink-0 pt-1">
<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6982 1.2417C16.7002 1.2419 16.7022 1.2415 16.7041 1.2417L16.7031 1.24268H16.7109L24.2842 2.09131L24.2832 2.09229C24.9204 2.159 25.5216 2.41275 26.0107 2.8208L26.2148 3.00635C26.7375 3.52487 27.067 4.20759 27.1475 4.93994L27.9805 12.5142L27.9814 12.5161C28.0872 13.4907 27.7474 14.4616 27.0566 15.1577L27.0537 15.1606L14.9229 27.2769L14.9219 27.2759C14.323 27.889 13.5006 28.2312 12.6436 28.2231L12.6445 28.2241C12.6419 28.2241 12.6393 28.2231 12.6367 28.2231C12.6322 28.2231 12.6276 28.2242 12.623 28.2241V28.2231C11.771 28.2224 10.9547 27.8822 10.3555 27.2769L1.94531 18.8667V18.8657C1.34009 18.2596 1 17.4382 1 16.5815C1 15.7252 1.34011 14.9034 1.94531 14.2974L14.0596 2.16943L14.0664 2.16357C14.4957 1.74167 15.0274 1.45192 15.5996 1.31494V1.11768L16.6982 1.2417ZM22.127 6.6167C21.9984 6.61698 21.8745 6.66787 21.7832 6.75928V6.76025C21.6922 6.85141 21.6406 6.97538 21.6406 7.10498C21.6407 7.23423 21.6923 7.35768 21.7832 7.44873V7.44971C21.874 7.54069 21.9976 7.59172 22.127 7.59229C22.2542 7.59255 22.3753 7.54271 22.4668 7.45459C22.5587 7.36162 22.6113 7.23594 22.6113 7.104C22.6113 6.97507 22.5615 6.85129 22.4727 6.7583L22.3984 6.69775C22.3187 6.64488 22.2248 6.61647 22.1279 6.6167H22.127Z" fill="white" stroke="#1F62FF" stroke-width="2"/>
</svg>
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
<svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5527 0.922363L23.0645 24.4087L22.9727 24.7407L22.6855 24.5513L16.3701 20.3696L11.4639 25.0366L11.1221 25.3618L11.0449 24.897L9.59766 16.1685L1.2168 12.7485L0.655273 12.519L1.21582 12.2866L29.2158 0.625488L29.6895 0.428223L29.5527 0.922363ZM14.3037 17.5806L22.2559 22.8452L27.5762 3.58447L14.3037 17.5806ZM12.707 22.2134L15.3535 19.6968L13.7363 18.6265L12.707 22.2134ZM10.7822 15.9995L11.6836 21.4458L12.6924 17.9351L12.4697 17.7886L12.6738 17.5728L23.1826 6.48975L10.7822 15.9995ZM3.75781 12.5083L10.042 15.0728L24.8252 3.73389L3.75781 12.5083Z" fill="#1F62FF" stroke="#1F62FF" stroke-width="0.5"/>
</svg>
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
<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5569 9.6013H7.33336V5.99826C7.33336 4.01436 8.97563 2.4021 11.0038 2.4021C13.0246 2.4021 14.6669 4.01436 14.6669 5.99826C14.6669 6.66316 15.2131 7.19949 15.8904 7.19949C16.5677 7.19949 17.114 6.66319 17.114 5.99826C17.114 2.68818 14.3758 0 11.0041 0C7.62505 0 4.89052 2.68818 4.89052 5.99826V9.60159L2.44681 9.60131C1.10325 9.60131 0 10.6809 0 12.0001V21.5979C0 22.9241 1.09595 24 2.44681 24H19.5568C20.9077 24 22 22.9241 22 21.5979V12.0001C22 10.6775 20.9077 9.60131 19.5568 9.60131L19.5569 9.6013ZM12.2234 18.0021C12.2234 18.667 11.6808 19.1997 11.0035 19.1997C10.3265 19.1994 9.78017 18.6634 9.78017 18.0021V15.5997C9.78017 14.9348 10.3265 14.3985 11.0038 14.3985C11.681 14.3985 12.2237 14.9348 12.2237 15.5997L12.2234 18.0021Z" fill="#1F62FF"/>
</svg>
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
