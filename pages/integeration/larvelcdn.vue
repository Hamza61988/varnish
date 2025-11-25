<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col gap-4 items-start">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">Larvel CDN Integration</h1>

      <p class="text-[#73737F]">
        The <a class="underline">Laravel CDN</a> integration could be done with either the <a class="underline">CDN Assets
        Manager Package</a>  in combination with an AWS S3 bucket, the <a class="underline">Simple CDN
        Package</a>  or by creating a helper that rewrites the URLs of your static
        assets. The following tutorial describes the creation of a helper in
        Laravel 5 to map your assets to the CDN URL.
      </p>
    </div>

    <div class="my-4">
      <div class="pl-8">
        <ol class="text-[#73737F] flex flex-col gap-4">
          <li class="">
            Create a <a class="underline">Pull Zone</a>
            before you start the Laravel CDN integration.
          </li>
          <li class="">
            Create the ./app/helpers.php file and update the ./composer.json as
            follow:
          </li>

          <div
            class="w-full border border-[#D0D0D8] text-[#73737F] shadow rounded-xl p-4 bg-white"
          >
            <pre><code>
...
"autoload": {
  "classmap": [
    ...
  ],
  ...
  "files": [
    "app/helpers.php"
  ]
},
...
  </code></pre>
          </div>

          <li class="">
            Execute the command composer dump-autoload to dump the autoloader.
          </li>
          <li>Add the following code to your ./app/helpers.php:</li>

          <div
            class="w-full border border-[#D0D0D8] shadow rounded-xl p-4 bg-white"
          >
            <pre><code>
&lt;?php
// global CDN link helper function
function cdn($asset) {

  // Verify if KeyCDN URLs are present in the config file
  if (!Config::get('app.cdn'))
    return asset($asset);

  // Get file name incl extension and CDN URLs
  $cdns = Config::get('app.cdn');
  $assetName = basename($asset);

  // Remove query string
  $assetName = explode("?", $assetName);
  $assetName = $assetName[0];

  // Select the CDN URL based on the extension
  foreach ($cdns as $cdn => $types) {
    if (preg_match('/^.*\.(' . $types . ')$/i', $assetName))
      return cdnPath($cdn, $asset);
  }

  // In case of no match use the last in the array
  end($cdns);
  return cdnPath(key($cdns), $asset);
}

function cdnPath($cdn, $asset) {
  return "//" . rtrim($cdn, "/") . "/" . ltrim($asset, "/");
}
...
  </code></pre>
          </div>

          <p class="text-[#73737F]">
            The standard asset() function will be called if no CDN URLs are
            defined in the ./config/app.php config file.
          </p>

          <li>Define the CDN URLs in the ./config/app.php file.</li>

          <div class="w-full border border-[#D0D0D8] shadow rounded-xl p-4 bg-white">
  <pre><code>
&lt;?php
return [

  /*
  |--------------------------------------------------------------------------
  | Application KeyCDN domains
  |--------------------------------------------------------------------------
  |
  | Specify different domains for your assets.
  |
  */

  'cdn' => array(
    "cdn.keycdn.com" => "css|js|eot|woff|ttf",
    "img.keycdn.com" => "jpg|jpeg|png|gif|svg",
    "all.keycdn.com" => ""
  ),

...
  </code></pre>
</div>

  <p class="text-[#73737F]">Example</p>

  <img alt="larvel" src="/images/Integeration/larvel.svg"></img>

          <li>Use the global helper function in your views:</li>

    <div class="w-full border border-[#D0D0D8] shadow rounded-xl p-2 bg-white">
  <pre><code v-pre>
&lt;img src=&quot;{{ cdn('/img/yourImg.png') }} alt=&quot;Your Image loaded from KeyCDN&quot; /&gt;
  </code></pre>
</div>


          <li>Verify the HTML source code if your assets are loading from KeyCDN.</li>
        </ol>
      </div>

      <div class="my-4">
          <img alt="larvel2" src="/images/Integeration/larvel2.svg"></img>
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
      <!-- Bottom Right Background Image -->
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
        <!-- CTA Badge -->
        <div
          class="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6 pt-3 sm:pt-4 md:pt-5 lg:pt-[5%]"
        >
          <div
            class="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-0.5 sm:py-0.75 md:py-1 bg-[#FFFFFFE5] rounded-full text-xs sm:text-xs md:text-sm font-medium text-gray-300"
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

        <!-- Main Heading -->
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

        <!-- Subtitle -->
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

        <!-- Company Metrics -->
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
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
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
          <span class="text-gray-600 text-xs sm:text-sm md:text-base">•</span>
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

        <!-- CTA Button -->
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
.arrow {
  width: 12px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23888'><path fill-rule='evenodd' d='M10 6l6 6H4l6-6z' clip-rule='evenodd'/></svg>");
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
