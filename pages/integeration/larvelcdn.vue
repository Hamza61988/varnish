<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

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
