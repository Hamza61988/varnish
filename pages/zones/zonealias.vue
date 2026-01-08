<script setup lang="ts">
import AccessAllFeaturesSection from '~/components/sections/AccessAllFeaturesSection.vue';

</script>

<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">

      <h1 class="text-5xl font-medium mt-4">Create a Zone Alias</h1>
    </div>

    <div class="flex flex-col gap-4 mt-4">
      <img src="/images/Zones/ZoneAlias.svg" alt="zone alias" />

      <p style="font-family: inter;" class="text-[#73737F]">
        The Zone Alias configuration always requires a CNAME record to be added
        in your DNS in addition to adding the Zone Alias in the KeyCDN
        dashboard. The Zone Alias grants access to your Zone by activating the
        specified domain on our network. The CNAME enables the domain name
        resolution to your Zone and is responsible for pointing your Zone Alias
        (e.g. cdn.example.com) to the Zone URL (e.g. example-hexid.kxcdn.com).
      </p>

      <div class="pl-8">
        <ol class="flex flex-col gap-4 text-[#73737F]">
          <li>
            Add a CNAME record in your DNS. This will be your desired Zone Alias
            that points to your Zone URL. For example, create
            cdn.yourwebsite.com as a CNAME record that points to
            example-hexid.kxcdn.com. Check that your new DNS record is active
            with our DNS Checker tool. Please keep in mind DNS changes can take
            some time depending on the TTL.
          </li>
          <li>Log in to the KeyCDN dashboard.</li>
          <li>In the left navigation sidebar click Zone Aliases.</li>
          <li>Click Add Zone Alias.</li>
          <li>
            Define the Zone Alias that matches the CNAME record created in step
            1 (e.g cdn.yourwebsite.com).
          </li>
          <li>Choose the Zone that you want to map the Zone Alias to.</li>
          <li>Click Save.</li>
        </ol>
      </div>

      <p style="font-family: inter;" class="text-[#73737F]">
        Here is an example for what it may look like for static resources on
        your website:
      </p>

      <p style="font-family: inter;" class="text-[#73737F] mt-4">Without CDN:</p>

      <p style="font-family: inter;" class="text-[#73737F] mt-4">
        Commonly, a 403 error will be returned if a CNAME record has been
        created but the corresponding Zone Alias has not been added in the
        KeyCDN dashboard.
      </p>
    </div>

    <div class="mt-4 flex flex-col">
      <h2 class="text-[2rem] font-semibold">Wildcard Zone Alias</h2>
      <p style="font-family: inter;" class="text-[#73737F]">
        Defining a wildcard Zone Alias, such as *.example.com, will allow more
        than one subdomain to be pointed towards a Zone URL, for example:
      </p>

      <div class="my-6 pl-8 text-[#73737F]">
        <ul class="list-disc">
          <li>img.example.com</li>
          <li>css.example.com</li>
          <li>js.example.com</li>
        </ul>
      </div>
      <p style="font-family: inter;" class="text-[#73737F] mt-4">
        Remember to add a CNAME record to your DNS settings to point the
        wildcard Zone Alias to the Zone URL.
      </p>
      <span class="mt-4">
        <img src="/images/Zones/ZonesAlias2.svg" alt="zone alias" />
      </span>
    </div>

    <div class="mt-4">
      <h2 class="text-[2rem] font-semibold">
        Pointing root domains to your Zone URL
      </h2>
      <p style="font-family: inter;" class="text-[#73737F]">
        CNAME records are not supported on root domains (e.g. example.com) as
        they would conflict with the SOA and NS records (<a class="underline"
          >RFC1912</a
        >
        section 2.4: "A CNAME record is not allowed to coexist with any other
        data."). An alternative option is to redirect the root domain to a
        subdomain (e.g. www.example.com). Do the following in your DNS settings:
      </p>

      <div class="pl-8">
        <ol class="flex flex-col gap-4 text-[#73737F]">
          <li>
            Redirect your root domain to its www version with a URL or Forward
            record.
          </li>
          <li>Create a CNAME record for www and point it to your Zone URL.</li>
        </ol>
      </div>
      <p style="font-family: inter;" class="text-[#73737F] mt-4">
        Some DNS providers do not support redirects (known as URL or Forward
        records). An alternative option would be using use the free service
        wwwizer.com. We recommend to avoid this approach as it negatively
        impacts performance and generates additional RTTs. Use subdomains
        instead.
      </p>

      <p style="font-family: inter;" class="text-[#73737F] mt-4">
        There are DNS providers offering better solutions to this problem such
        as NS1. They call it <a class="underline">ALIAS records </a>(NS1) or
        CNAME Flattening (Cloudflare). This allows the root (naked) domain to be
        pointed to a Zone URL. It is important to note that the CNAME record
        will be masqueraded as an A record
      </p>
    </div>

    <div class="mt-4 flex flex-col">
      <h2 class="text-[2rem] font-semibold">
        Advantages of using a Zone Alias
      </h2>
      <p style="font-family: inter;" class="text-[#73737F]">
        There are a few advantages to setting up a Zone Alias as opposed to
        using the KeyCDN Zone URL provided in the dashboard.
      </p>

      <div class="my-6 pl-8 text-[#73737F]">
        <ul class="list-disc">
          <li>
            Using a Zone Alias allows you to setup a generic subdomain such as
            cdn.yourdomain.com, allowing you to keep the same URLs even if you
            point your CNAME record to a different URL in the future (e.g. if
            you want to change CDN providers).
          </li>
          <li>
            The domain will contain keywords relevant to your site, therefore
            your assets are closer bound to your domain which is better in terms
            of <a class="underline">CDN SEO</a> .
          </li>
          <li>
            Using a Zone Alias allows you to take advantage of
            <a class="underline">Let's Encrypt</a> , which provides you with a
            custom SSL/TLS certificate for free.
          </li>
          <li>
            Zone Aliases allow you to view indexed images data using the sitemap
            view in Google Search Console.
          </li>
        </ul>
      </div>

      <div class="mt-4 flex flex-col">
        <h2 class="text-[2rem] font-semibold">
          Disadvantage of using a Zone Alias
        </h2>
        <p style="font-family: inter;" class="text-[#73737F]">
          Since Zone Aliases are created using a
          <a class="underline">CNAME</a> , this produces an additional DNS
          lookup. However, if you set your DNS TTL high enough (e.g. greater
          than 3600) there should be little to no affect on speed.
        </p>
      </div>

      <hr class="border-[#00000038] border-t-2 mt-4" />

      <div class="mt-4 flex flex-col">
        <h2 class="text-[25px] text-[#0E84F7] font-semibold">
          Create a CNAME DNS Record in cPanel
        </h2>
        <p style="font-family: inter;" class="text-[#73737F] underline">
          Setting up a cPanel CDN combination is easy and can be done in just a
          few steps. If you do not plan to use a Zone Alias (e.g.
          cdn.yourwebsite.com) there is no need to do anything in cPanel and you
          can move on directly to integrating the CDN with your…
        </p>
      </div>

      <div class="mt-4 flex flex-col">
        <h2 class="text-[25px] text-[#0E84F7] font-semibold">
          How to Create a CNAME in Cloudflare
        </h2>
        <p style="font-family: inter;" class="text-[#73737F] underline">
          This tutorial explains how to setup a CNAME in Cloudflare that can be
          used with KeyCDN by completing the following steps: Create a Zone
          Alias in the KeyCDN dashboard. If you need HTTPS, enable Custom SSL
          and upload the certificate. Log in to…
        </p>
      </div>
    </div>

  </div>

  
  <Teleport to="#full-width-section">
    <AccessAllFeaturesSection class="mt-10" />
  </Teleport></template>

<style scoped>
p,ol,ul {
  font-family: inter;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
