<template>
  <div>
    <div class="relative flex flex-col gap-[45px] z-10">
      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Zone Settings
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          KeyCDN’s Zones come with a number of configurable Zone settings. Here
          is a list and description of the CDN features for both Push and Pull
          Zones: Image Processing transforms and optimizes images with simple
          URL parameters. Force...
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Pull Zone Settings
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          Here is a list and description of the CDN features that are Pull Zone
          specific: Origin Shield Predefined shield servers, instead of our edge
          servers, will pull the content from your origin server if enabled.
          This will reduce traffic on your...
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Create a Pull Zone
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          To set up a KeyCDN Pull Zone, follow the steps outlined below: Log in
          to the KeyCDN dashboard. In the left navigation sidebar click Zones.
          Click Add Zone. Set the Zone Type as pull. Define the Origin URL (e.g.
          https://www.yourwebsite.com). Click…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Create a Push Zone
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          A KeyCDN Push Zone allows you to upload your data to our storage
          cluster. This is recommended for files greater than 10 MB in size and
          is required for files larger than 100 MB because Pull Zones do not
          cache anything larger than 100 MB. To set up a…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Create a Zone Alias
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          The Zone Alias configuration always requires a CNAME record to be
          added in your DNS in addition to adding the Zone Alias in the KeyCDN
          dashboard. The Zone Alias grants access to your Zone by activating the
          specified domain on our network. The CNAME…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Purge CDN Cache
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          There are two different approaches to purging the CDN cache. It can
          either be completely purged, which means all assets are removed from
          the CDN cache. Alternatively, it can be purged by URL, which means an
          individual asset is removed from the CDN…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Image Processing
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          Our powerful real-time Image Processing feature transforms and
          optimizes your images with simple query parameters. Your image
          management workflow defines the user experience by transforming and
          optimizing the image delivery for any browser. Process…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Create a Zone Referrer (Hotlink Protection)
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          Zone Referrers allow you to restrict HTTP referrers in order to
          prevent your content from being embedded on other websites. This
          feature is also known as hotlink protection. Hotlink protection will
          save you bandwidth by prohibiting other sites from…
        </p>
      </section>

      <section class="">
        <h2 class="font-semibold text-[#000000] text-[18.08px]">
          Push Zone Settings
        </h2>
        <p
          style="font-family: inter"
          class="text-[#73737F] text-sm leading-relaxed"
        >
          Here is a list and description of the CDN features that are Push Zone
          specific: Directory Listing Generates directory indexes,
          automatically, similar to the Unix ls command or the Win32 dir shell
          command. It is recommended to disable this feature…
        </p>
      </section>
    </div>
   

  </div>
  
</template>
