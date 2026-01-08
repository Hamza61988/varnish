<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';
</script>

<template>
  <div class="mt-[4.25rem] mx-auto px-6 max-w-[940px]">
    
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
      <span style="color: #1a1925; font-weight: 500; font-size: 12.06px">
        Solutions
      </span>
    </div>

    <div class="max-w-4xl">
      <h1 class="text-5xl font-medium mt-2">CDN Services</h1>
      <p class="text-[#73737F] mt-4 max-w-2xl">
        We offer an ideal content delivery service that operates exceedingly fast.
      </p>
    </div>

    <div class="mt-[5rem] flex flex-col gap-6 text-[#73737F] max-w-4xl">
      <p>
        CDN services are not created equally. There are many differentiating
        factors that make up each content delivery network available. We have
        designed KeyCDN to be intuitive and flexible. Our network can be
        effortlessly integrated into any infrastructure, from a small hobby
        project to a large enterprise.
      </p>
      <p>
        With a wide variety of platform features available, you can configure
        KeyCDN exactly how you want to deliver content seamlessly with your
        existing infrastructure. Take advantage of features like Brotli, TLS
        1.3, and free TLS certificates to not only accelerate your content but
        to also keep it secure as it travels from our edge servers to your
        users.
      </p>
    </div>

    <div class="mt-[4.3125rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0527 0H7.43302C6.952 0 6.55854 0.350611 6.55854 0.779217V2.72711H0.437082C0.192342 2.72711 0 2.8985 0 3.11658V4.67501C0 4.89309 0.192342 5.06448 0.437082 5.06448H24.0479C24.2927 5.06448 24.485 4.89309 24.485 4.67501V3.11658C24.485 2.8985 24.2927 2.72711 24.0479 2.72711H17.9265V0.779217C17.9265 0.350603 17.533 0 17.052 0H17.0527ZM16.1782 1.55843V2.72711H8.30775V1.55843H16.1782Z" fill="#1F62FF"/>
            <path d="M22.6743 6.34424V27.2729C22.6742 28.4476 21.5809 29.4993 20.1138 29.4995H4.37256C2.9055 29.4995 1.81216 28.448 1.81201 27.2729V6.34424H22.6743ZM6.12158 7.68115C5.65655 7.68115 5.18423 8.02406 5.18408 8.5708V27.2729C5.18422 27.8197 5.65655 28.1626 6.12158 28.1626C6.58653 28.1625 7.05797 27.8196 7.05811 27.2729V8.5708C7.05797 8.05826 6.64349 7.72569 6.2085 7.68604L6.12158 7.68115ZM12.2427 7.68115C11.7777 7.6812 11.3063 8.0241 11.3062 8.5708V27.2729C11.3063 27.8197 11.7777 28.1625 12.2427 28.1626C12.7077 28.1626 13.18 27.8197 13.1802 27.2729V8.5708C13.18 8.02406 12.7077 7.68115 12.2427 7.68115ZM18.3638 7.68115C17.8989 7.68138 17.4274 8.02424 17.4272 8.5708V27.2729C17.4274 27.8195 17.8989 28.1624 18.3638 28.1626C18.8288 28.1626 19.3011 27.8197 19.3013 27.2729V8.5708C19.3011 8.02406 18.8288 7.68115 18.3638 7.68115Z" fill="#1F62FF" stroke="white"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">Instant purge</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            Never serve stale content again. Purge all data centers in the
            blink of an eye. Purge the entire cache or individual content.
          </p>
        </div>
      </div>

      <div   style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3075 0.000411317C17.5137 0.000411317 15.2306 2.28353 15.2306 5.0773C15.2306 6.00758 15.5052 6.86346 15.9444 7.61588H8.46145V7.61555C7.99433 7.61555 7.61548 7.99442 7.61548 8.46185V15.9317C6.86364 15.4928 6.00651 15.231 5.0769 15.231C2.28304 15.231 0 17.5142 0 20.3079C0 23.1017 2.28312 25.3848 5.0769 25.3848C6.00651 25.3848 6.86331 25.1096 7.61548 24.671V32.154C7.61548 32.6211 7.99435 33 8.46145 33H17.7693C18.1383 33.0039 18.4673 32.768 18.5825 32.4174C18.6973 32.0664 18.5716 31.6816 18.2715 31.4664C17.4472 30.8484 16.9229 29.8847 16.9229 28.7694C16.9229 26.8901 18.4283 25.3848 20.3076 25.3848C22.1869 25.3848 23.6922 26.8901 23.6922 28.7694C23.6922 29.8847 23.168 30.8485 22.3436 31.4664C22.0438 31.6816 21.9182 32.0664 22.033 32.4174C22.1478 32.768 22.4771 33.0039 22.8462 33H32.154H32.1537C32.6211 33 33 32.6211 33 32.154V22.8462C33.0016 22.4821 32.7704 22.1576 32.4256 22.0405C32.0805 21.9237 31.6997 22.0405 31.4796 22.3305C30.8615 23.1548 29.8847 23.6922 28.7694 23.6922C26.8901 23.6922 25.3848 22.1868 25.3848 20.3075C25.3848 18.4282 26.8901 16.9229 28.7694 16.9229C29.8847 16.9229 30.8616 17.4471 31.4796 18.2715V18.2718C31.698 18.5598 32.0759 18.6772 32.4193 18.5637C32.7628 18.4502 32.996 18.1311 32.9999 17.7693V8.46144V8.46177C32.9999 7.99433 32.6211 7.61547 32.1536 7.61547H24.6707C25.1099 6.86297 25.3845 6.00717 25.3845 5.07689C25.3845 2.28304 23.1013 0 20.3076 0L20.3075 0.000411317ZM20.3075 1.69268C22.1868 1.69268 23.6922 3.19802 23.6922 5.0773C23.6922 6.19258 23.168 7.15636 22.3436 7.77434C22.0438 7.98953 21.9181 8.3743 22.033 8.72528C22.1478 9.07594 22.4771 9.31179 22.8461 9.30785H31.3075V15.9317C30.5557 15.4928 29.6985 15.2311 28.7689 15.2311C25.9751 15.2311 23.692 17.5142 23.692 20.308C23.692 23.1017 25.9751 25.3849 28.7689 25.3849C29.6985 25.3849 30.5553 25.1096 31.3075 24.6711V31.3081H24.6705C25.1097 30.5556 25.3843 29.6998 25.3843 28.7695C25.3843 25.9756 23.1012 23.6926 20.3074 23.6926C17.5135 23.6926 15.2305 25.9757 15.2305 28.7695C15.2305 29.6998 15.505 30.5556 15.9443 31.3081H9.30728V22.8467L9.30761 22.8464C9.30925 22.4823 9.07799 22.1578 8.73324 22.0407C8.38815 21.924 8.00731 22.0407 7.78717 22.3307C7.16916 23.155 6.19231 23.6924 5.07703 23.6924C3.19774 23.6924 1.6924 22.187 1.6924 20.3077C1.6924 18.4285 3.19774 16.9231 5.07703 16.9231C6.19231 16.9231 7.16919 17.4473 7.78717 18.2717V18.272C8.00564 18.56 8.3832 18.6774 8.72694 18.564C9.07038 18.4505 9.30361 18.1313 9.30755 17.7695V9.30812H17.7689C18.1379 9.31206 18.467 9.07621 18.5821 8.72554C18.6969 8.37455 18.5713 7.98978 18.2711 7.77461C17.4468 7.1566 16.9226 6.19285 16.9226 5.07757C16.9226 3.19829 18.4279 1.69295 20.3072 1.69295L20.3075 1.69268Z" fill="#1F62FF"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">Platform features</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            We have many advanced features that allow complete content
            delivery control.
          </p>
        </div>
      </div>

      <div   style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6982 1.24182C16.7002 1.24202 16.7022 1.24162 16.7041 1.24182L16.7031 1.2428H16.7109L24.2842 2.09143L24.2832 2.09241C24.9204 2.15913 25.5216 2.41288 26.0107 2.82092L26.2148 3.00647C26.7375 3.52499 27.067 4.20771 27.1475 4.94006L27.9805 12.5143L27.9814 12.5162C28.0872 13.4908 27.7474 14.4617 27.0566 15.1578L27.0537 15.1608L14.9229 27.277L14.9219 27.276C14.323 27.8891 13.5006 28.2313 12.6436 28.2233L12.6445 28.2242C12.6419 28.2243 12.6393 28.2233 12.6367 28.2233C12.6322 28.2232 12.6276 28.2243 12.623 28.2242V28.2233C11.771 28.2225 10.9547 27.8823 10.3555 27.277L1.94531 18.8668V18.8658C1.34009 18.2598 1 17.4383 1 16.5817C1 15.7253 1.34011 14.9035 1.94531 14.2975L14.0596 2.16956L14.0664 2.1637C14.4957 1.74179 15.0274 1.45204 15.5996 1.31506V1.1178L16.6982 1.24182ZM22.127 6.61682C21.9984 6.6171 21.8745 6.668 21.7832 6.7594V6.76038C21.6922 6.85153 21.6406 6.9755 21.6406 7.1051C21.6407 7.23435 21.6923 7.35781 21.7832 7.44885V7.44983C21.874 7.54081 21.9976 7.59185 22.127 7.59241C22.2542 7.59267 22.3753 7.54284 22.4668 7.45471C22.5587 7.36174 22.6113 7.23606 22.6113 7.10413C22.6113 6.97519 22.5615 6.85141 22.4727 6.75842L22.3984 6.69788C22.3187 6.645 22.2248 6.61659 22.1279 6.61682H22.127Z" fill="white" stroke="#1F62FF" stroke-width="2"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">Network health</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            We have a low latency network with stellar speeds and an almost
            perfect uptime record.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16 flex flex-col gap-6 text-[#73737F] max-w-4xl">
      <p>
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
      <p>
        We know the importance of having your data readily available at all
        times. That is why, included in our CDN service, all data processed
        occurs in real time. We provide valuable content delivery insights
        that allow better decisions to be made.
      </p>
    </div>

    <div class="mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div   style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5527 0.922607L23.0645 24.4089L22.9727 24.741L22.6855 24.5515L16.3701 20.3699L11.4639 25.0369L11.1221 25.3621L11.0449 24.8972L9.59766 16.1687L1.2168 12.7488L0.655273 12.5193L1.21582 12.2869L29.2158 0.625732L29.6895 0.428467L29.5527 0.922607ZM14.3037 17.5808L22.2559 22.8455L27.5762 3.58472L14.3037 17.5808ZM12.707 22.2136L15.3535 19.697L13.7363 18.6267L12.707 22.2136ZM10.7822 15.9998L11.6836 21.446L12.6924 17.9353L12.4697 17.7888L12.6738 17.573L23.1826 6.48999L10.7822 15.9998ZM3.75781 12.5085L10.042 15.073L24.8252 3.73413L3.75781 12.5085Z" fill="#1F62FF" stroke="#1F62FF" stroke-width="0.5"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">Low pricing</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            Benefit from pay as you go billing and volume pricing as low as
            $0.01/GB.
          </p>
        </div>
      </div>

      <div   style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5569 9.6013H7.33336V5.99826C7.33336 4.01436 8.97563 2.4021 11.0038 2.4021C13.0246 2.4021 14.6669 4.01436 14.6669 5.99826C14.6669 6.66316 15.2131 7.19949 15.8904 7.19949C16.5677 7.19949 17.114 6.66319 17.114 5.99826C17.114 2.68818 14.3758 0 11.0041 0C7.62505 0 4.89052 2.68818 4.89052 5.99826V9.60159L2.44681 9.60131C1.10325 9.60131 0 10.6809 0 12.0001V21.5979C0 22.9241 1.09595 24 2.44681 24H19.5568C20.9077 24 22 22.9241 22 21.5979V12.0001C22 10.6775 20.9077 9.60131 19.5568 9.60131L19.5569 9.6013ZM12.2234 18.0021C12.2234 18.667 11.6808 19.1997 11.0035 19.1997C10.3265 19.1994 9.78017 18.6634 9.78017 18.0021V15.5997C9.78017 14.9348 10.3265 14.3985 11.0038 14.3985C11.681 14.3985 12.2237 14.9348 12.2237 15.5997L12.2234 18.0021Z" fill="#1F62FF"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">Fast platform</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            Configuration updates only take a few minutes to be deployed
            across the globe.
          </p>
        </div>
      </div>

      <div   style="width: 300;
height: 144;
gap: 16px;
angle: 0 deg;
opacity: 1;
border-radius: 20px;
border-width: 1px;
padding-top: 17px;
padding-right: 24px;
padding-bottom: 17px;
padding-left: 24px;
border: 1px solid var(--Border-Secondary, #EEEEF0)
" class="bg-white flex gap-4 ">
        <div class="pt-1 flex-shrink-0">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.1018 14.0272H31.3458C31.0743 14.0279 30.809 14.1114 30.5848 14.2662C30.3605 14.4209 30.1879 14.6403 30.0886 14.895L26.6075 23.9785L23.3593 15.8173C23.219 15.465 22.9387 15.1881 22.5868 15.0533C22.2348 14.9189 21.8431 14.9389 21.5065 15.1084C21.1695 15.2783 20.9188 15.5825 20.8147 15.9472L17.8102 26.468L14.3131 1.16978C14.2556 0.754987 14.0116 0.390372 13.6516 0.181213C13.2916 -0.0275875 12.8564 -0.0577733 12.4714 0.100148C12.0867 0.257714 11.7956 0.585828 11.6828 0.988695L8.03178 14.0376L0.891285 14.1499C0.395523 14.1538 -0.00380505 14.5619 2.73559e-05 15.0619C0.003857 15.562 0.40875 15.9642 0.904833 15.9603H0.917366L8.39172 15.8427C8.68207 15.8396 8.96338 15.7413 9.1935 15.563C9.42362 15.3848 9.59004 15.1356 9.66733 14.8538L12.8295 3.55855L16.3224 28.8289C16.3632 29.1381 16.5091 29.4234 16.735 29.6361C16.9609 29.8491 17.253 29.9761 17.5618 29.9965C17.5946 29.9965 17.628 30 17.6607 30H17.6604C17.9525 30.001 18.2369 29.9056 18.4702 29.728C18.7031 29.5505 18.8723 29.3009 18.9509 29.0174L22.179 17.7149L25.367 25.721V25.7213C25.4645 25.9761 25.6375 26.1947 25.8624 26.347C26.0873 26.4993 26.3533 26.5783 26.6245 26.573C26.895 26.5723 27.1593 26.4888 27.3818 26.334C27.6046 26.1789 27.7755 25.9592 27.8719 25.7045L31.6532 15.8376H39.1018C39.5979 15.8376 40 15.4323 40 14.9326C40 14.4325 39.5979 14.0272 39.1018 14.0272Z" fill="#1F62FF"/>
          </svg>
        </div>
        <div>
          <h2 class="text-[1rem] font-semibold text-[#1a1925]">No commitment</h2>
          <p class="text-[#73737F] mt-1 text-sm leading-relaxed">
            No contract required, allowing traffic volume to scale up or down
            at any time.
          </p>
        </div>
      </div>

    </div>
  </div>

  <AccessAllFeaturesSection class="mt-10"/>
</template>

<style scoped>

   p,ol,ul {
  font-family: inter;
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