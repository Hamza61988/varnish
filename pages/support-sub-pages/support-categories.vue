<template>
  <div>
    <div class="relative min-h-screen max-w-[652px] mx-auto overflow-hidden pb-20">

      <div class="relative site-margins z-10 px-6 ">
        <div class="flex flex-col items-center text-center ">

      

          <div class="w-full space-y-4 ">
       <CommonTitle
      upername="support categories"
      title="Support"
      subtitle="Find answers, guides, and tutorials to supercharge your content delivery."
      pcAlignment="center"
      mobileAlignment="center"
      :fontWeight="500"
    />
            <NuxtLink to="/support-categories/zones"
              class="block w-full p-8 text-left  border border-[#EEEEF0] rounded-[20px] hover:border-gray-300 transition-colors">
              <h3 class="font-semibold text-[#1A1925] text-[18px] md:text-[20px] mb-2">Zones</h3>
              <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
                Explore articles related to Zones, KeyCDN's content delivery instances. Learn how to create a Pull Zone
                and Push Zone, purge the CDN cache, and add a custom subdomain.
              </p>
            </NuxtLink>

            <NuxtLink to="/support-categories/integrations"
              class="block w-full p-8 text-left  border border-[#EEEEF0] rounded-[20px] hover:border-gray-300 transition-colors">
              <h3 class="font-semibold text-[#1A1925] text-[18px] md:text-[20px] mb-2">Integrations</h3>
              <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
                Explore articles related to integrating KeyCDN into your stack. Learn how to integrate with many content
                management systems, frameworks, and custom applications.
              </p>
            </NuxtLink>

            <NuxtLink to="/support-categories/accountmanagment"
              class="block w-full p-8 text-left  border border-[#EEEEF0] rounded-[20px] hover:border-gray-300 transition-colors">
              <h3 class="font-semibold text-[#1A1925] text-[18px] md:text-[20px] mb-2">Account Management</h3>
              <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
                Explore articles related to the management of your KeyCDN account. Learn how to secure your account,
                enable notifications, and purchase credits for billing purposes.
              </p>
            </NuxtLink>

            <NuxtLink to="/support-categories/troubleshooting"
              class="block w-full p-8 text-left  border border-[#EEEEF0] rounded-[20px] hover:border-gray-300 transition-colors">
              <h3 class="font-semibold text-[#1A1925] text-[18px] md:text-[20px] mb-2">Troubleshooting</h3>
              <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
                Explore articles related to troubleshooting your content delivery. Learn how to fix a wide range of
                errors, common misconfigurations, and other delivery issues.
              </p>
            </NuxtLink>

            <NuxtLink to="/support-categories/glossary"
              class="block w-full p-8 text-left  border border-[#EEEEF0] rounded-[20px] hover:border-gray-300 transition-colors">
              <h3 class="font-semibold text-[#1A1925] text-[18px] md:text-[20px] mb-2">Glossary</h3>
              <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed">
                Explore articles related to content delivery education. Learn about a wide range of web development,
                performance, and optimization subjects.
              </p>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>

    <div class=" bottom-0  z-0 pointer-events-none ">
      <svg width="662" height="206" viewBox="0 0 662 206" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M633.785 573.704C656.376 425.798 632.407 281.836 561.396 218.415C478.73 144.586 332.315 179.907 121.391 445.224C242.485 -512.33 -213.359 515.652 -95.8792 60.2125"
          stroke="#EEEEF0" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  </div>
</template>