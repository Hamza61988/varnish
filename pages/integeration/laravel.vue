<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/common/AccessAllFeatures.vue';
import Title from '../../components/common/Title.vue';
import CodeSnippet from '../../components/common/CodeSnippet.vue';

const composerJsonCode = `...
"autoload": {
  "classmap": [
    ...
  ],
  ...
  "files": [
    "app/helpers.php"
  ]
},
...`;

const helperPhpCode = `<?php
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
    if (preg_match('/^.*\\.(' . $types . ')$/i', $assetName))
      return cdnPath($cdn, $asset);
  }

  // In case of no match use the last in the array
  end($cdns);
  return cdnPath(key($cdns), $asset);
}

function cdnPath($cdn, $asset) {
  return "//" . rtrim($cdn, "/") . "/" . ltrim($asset, "/");
}
...`;

const configAppPhpCode = `<?php
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

...`;

const viewCode = `<img src="{{ cdn('/img/yourImg.png') }} alt="Your Image loaded from KeyCDN" />`;
</script>

<template>
  <div class="  ">
  
      <Title
       upername="support"
        title="Laravels CDN Integration"
        subtitle="The Laravel CDN integration could be done with either the CDN Assets Manager Package in combination with an AWS S3 bucket, the Simple CDN Package or by creating a helper that rewrites the URLs of your static assets. The following tutorial describes the creation of a helper in Laravel 5 to map your assets to the CDN URL."
        pcAlignment="start"
        mobileAlignment="start"
        :fontWeight="500"
      />
    </div>
  <div class="">
    <div class="">
      <div class="pl-6">
        <ol class="text-[#73737F] text-[13px] md:text-[1rem]  flex flex-col gap-4">
          <li class="">
            Create a <a class="underline">Pull Zone</a>
            before you start the Laravel CDN integration.
          </li>
          <li class="">
            Create the ./app/helpers.php file and update the ./composer.json as
            follow:
          </li>

          <CodeSnippet :code="composerJsonCode" />

          <li class="">
            Execute the command composer dump-autoload to dump the autoloader.
          </li>
          <li>Add the following code to your ./app/helpers.php:</li>

          <CodeSnippet :code="helperPhpCode" />

          <p class="text-[#73737F] text-[13px] md:text-[1rem]">
            The standard asset() function will be called if no CDN URLs are
            defined in the ./config/app.php config file.
          </p>

          <li>Define the CDN URLs in the ./config/app.php file.</li>

          <CodeSnippet :code="configAppPhpCode" />

          <p class="text-[#73737F] text-[13px] md:text-[1rem]">Example</p>

  <img alt="larvel" src="/images/Integeration/larvel.svg"></img>

          <li>Use the global helper function in your views:</li>

          <CodeSnippet :code="viewCode" />

          <li>Verify the HTML source code if your assets are loading from KeyCDN.</li>
        </ol>
      </div>

      <div class="my-4">
          <img alt="larvel2" src="/images/Integeration/larvel2.svg"></img>
      </div>
    </div>

  </div>

<ClientOnly>
<Teleport to="#full-width-section">
  <AccessAllFeaturesSection class="mt-10"/>

</Teleport>
</ClientOnly>
</template>

<style scoped>
p, ol, ul, pre, code {
  font-family: inter;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
