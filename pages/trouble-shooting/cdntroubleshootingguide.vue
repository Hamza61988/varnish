<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium">CDN Trouble Shooting Guide</h1>

      <button class="btn2 text-[#73737F] mt-4">
        <span>Table of contents</span>
        <span class="arrow"></span>
      </button>

      <p class="text-[#73737F]">
        This guide provides a list of troubleshooting suggestions for issues
        that you may experience when configuring a CDN.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Troubleshooting tools</h2>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          <a class="underline">KeyCDN Tools</a> offers many tools, such as a DNS
          check (dig), HTTP header verification, and more.
        </li>
        <li>
          <a class="underline">KeyCDN full page speed test </a> provides a
          detailed breakdown of all your assets including a page preview.
        </li>
        <li>
          <a class="underline">Pingdom Tools</a> speed check from seven
          different locations.
        </li>
        <li>
          Webpage Test speed check from many different locations with different
          browsers.
        </li>
        <li>
          <a class="underline">Chrome Developer Tools</a> are very powerful to
          get more insights into what is going wrong
        </li>
      </ul>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Are assets being cached on the KeyCDN edge servers?
      </h2>
      <p class="text-[#73737F]">
        There are six different cache statuses that may be returned by the
        KeyCDN edge servers. These include HIT, MISS, EXPIRED, REVALIDATED,
        UPDATING, and STALE. To learn more about what each cache status mean,
        read our <a class="underline">What Cache Status are there</a> .
      </p>

      <p class="text-[#73737F]">
        In order to check the cache status of a particular asset, you can run a
        curl command and check the X-Cache response header.
      </p>

      <div
        class="border border-[#D0D0D8] text-[#73737F] rounded-md p-4 mt-2 bg-white text-sm"
      >
        <pre><code>
curl -I https://www.keycdn.com 
HTTP/2 200 
server: keycdn-engine 
date: Thu, 12 Mar 2020 04:47:35 GMT 
content-type: text/html 
vary: Accept-Encoding 
last-modified: Thu, 05 Mar 2020 11:41:26 GMT 
etag: W/"5e60e566-13e3b" 
expires: Thu, 19 Mar 2020 04:47:35 GMT 
cache-control: max-age=604800 
strict-transport-security: max-age=31536000; includeSubdomains; preload 
content-security-policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: 
x-frame-options: SAMEORIGIN 
x-xss-protection: 1; mode=block 
x-content-type-options: nosniff 
referrer-policy: no-referrer-when-downgrade 
x-cache: HIT 
x-edge-location: ussf 
access-control-allow-origin: *
  </code></pre>
      </div>

      <p class="text-[#73737F]">
        An X-Cache: HIT means that the asset was delivered by a KeyCDN edge
        server and is properly cached. To receive a HIT status, the resource
        needs to be requested at least twice from the same server in order to
        ensure the asset is cached
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is your Zone Alias (CNAME) correctly configured?
      </h2>
      <p class="text-[#73737F]">
        Go to the KeyCDN Tools <a class="underline">DNS Checker</a> and verify
        that your Zone Alias (e.g. cdn.example.com) points to the Zone URL (e.g.
        example-hexid.kxcdn.com).
      </p>

      <img
        alt="cdn toruble shoot guide"
        src="/images/Trouble-shoot/cdntroubleshoot.svg"
      />
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Are your assets loading from KeyCDN?
      </h2>
      <p class="text-[#73737F]">
        Go to the KeyCDN Tools <a class="underline">HTTP Header Checker</a> and
        test this with a single asset such as a CSS file. It is important that
        you see the following in the HTTP response headers:
      </p>
      <ol class="flex flex-col gap-4 pl-8 text-[#73737F]">
        <li>HTTP/1.1 200 OK or HTTP/2 200</li>
        <li>Server: keycdn-engine</li>
      </ol>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Debugging why assets aren't delivered by the CDN
      </h2>
      <p class="text-[#73737F]">
        If you have just integrated a CDN in your website and notice that some
        assets aren't being delivered via the CDN URL this may be due to a few
        reasons.
      </p>
      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          If you plan to deliver your CDN assets using a custom URL (e.g.
          cdn.example.com) ensure that you have properly added the CNAME record
          to your DNS settings and <a class="underline">Zone Alias</a> in your
          KeyCDN dashboard. If either one of these steps are missed, your assets
          will not be delivered via the custom CDN URL. Use our
          <a class="underline">DNS check tool</a> to ensure your CNAME is
          properly configured.
        </li>
        <li>
          Ensure that the proper path is being used when requesting an asset via
          the CDN. If you have implemented any custom rewrites, double check
          that these do not conflict with the correct asset path.
        </li>
        <li>
          If you are using WordPress, some assets simply do not get delivered
          via the CDN such as the wp-emoji-release.min.js file as this always
          gets delivered via the origin.
        </li>
        <li>
          If you are using <a class="underline">CDN Enabler</a> and have noticed
          that some asset URL aren't being rewritten, check the page source to
          ensure you are not using a dynamic protocol //. CDN Enabler will not
          rewrite these assets and therefore it is recommend to use the full
          protocol, either http:// or https://..
        </li>
        <li>
          In some cases, resources within third party plugins are defined
          manually (e.g. an image to be used within a slider plugin). Ensure
          that once you have properly set up the CDN, you modify the image URL
          to point to your CDN or Zone URL.
        </li>
      </ul>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Are the Assets not loaded correctly via HTTPS?
      </h2>
      <p class="text-[#73737F]">
        For HTTPS there is Shared SSL or
        <a class="underline">Custom SSL</a> available. An asset can only be
        loaded via Shared SSL, Let's Encrypt SSL, or Custom SSL but not two
        methods at the same time. This means that once you have enabled either
        Custom or Let's Encrypt SSL, accessing the HTTPS version of your Zone
        URL (e.g. https://example-hexid.kxcdn.com) will not work.
      </p>

      <p class="text-[#73737F]">
        For HTTPS, a client needs to support <a class="underline">SNI</a> , this
        means that any version of Internet Explorer running on Windows XP will
        not work with HTTPS. In this case, please use a different browser (e.g.
        Firefox or Chrome) or upgrade Windows XP to at least Windows 7.
      </p>

      <p class="text-[#73737F]">
        If the HTTPS connection is not setup correctly, a browser will typically
        show a message like this:
      </p>

      <img
        alt="cdn toruble shoot guide"
        src="/images/Trouble-shoot/cdntroubleshoot2.svg"
      />

      <p class="text-[#73737F]">
        If you have trouble, loading the assets via HTTPS, please check the
        following points:
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Shared SSL</h2>
      <ol class="text-[#73737F] list-decimal">
        <li>Ensure that Shared SSL is enabled in the KeyCDN dashboard.</li>
      </ol>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Let's Encrypt</h2>
      <ol class="flex flex-col gap-4 pl-8 text-[#73737F]">
        <li>
          Ensure that you have the Let's Encrypt SSL option enabled in the
          KeyCDN dashboard.
        </li>
        <li>
          If your Zone already has a Zone Alias created and you enable the Let's
          Encrypt option, you will need to recreate the Zone Alias in order to
          Let's Encrypt SSL to work. Otherwise if you haven't created a Zone
          Alias yet, simply enable the Let's Encrypt option first and create the
          Zone Alias afterwards
        </li>
      </ol>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Custom SSl</h2>
      <ol class="flex flex-col gap-4 pl-8 text-[#73737F]">
        <li>
          Make sure that Custom SSL (not Shared SSL) is enabled for this Zone
        </li>
        <li>
          Verify that the <a class="underline">Zone Alias</a> has been setup
          properly (incl. the CNAME on your DNS and the Zone Alias is mapped to
          the right zone).
        </li>

        <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
          <li>
            How to check if the CNAME on your DNS has been setup correctly? Use
            the KeyCDN Tools <a class="underline">DNS checker</a> in order to
            verify your DNS globally.
          </li>
          <li>
            How to verify if the Zone Alias has been setup correctly? Check a
            single file with <a class="underline">KeyCDN tools HTTP Check</a>.
          </li>
        </ul>

        <li>
          Are you having issues uploading your certificate in the KeyCDN
          dashboard? Your private key of the certificate must match to the
          certificate, otherwise it won't be accepted in the dashboard. Do not
          use an encrypted private key (the first line of an encrypted cert
          normally starts with -----BEGIN ENCRYPTED PRIVATE KEY-----). Here's
          how you verify on the CLI if your private key matches your
          certificate:
        </li>

        <div
          class="border border-[#D0D0D8] text-[#73737F] rounded-md p-4 mt-2 bg-white text-sm"
        >
          <pre><code>
openssl x509 -noout -modulus -in certificate.crt | openssl md5 
openssl rsa -noout -modulus -in privateKey.key | openssl md5
  </code></pre>
        </div>

        <li>
          Check that your certificate is issued for your Zone Alias (e.g.
          cdn.yourdomain.com). A certificate only issued for www.yourdomain.com
          will not work for cdn.yourdomain.com.
        </li>

        <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
          <li>
            How to check if your certificate is valid for your subdomain? Use a
            <a class="underline">SSL certificate checker</a> .in order to verify
            if your certificate is valid for this Zone Alias.
          </li>
        </ul>
        <li>
          Ensure that the certificate chain is complete. If there are
          intermediate certs missing in the certificate chain, it's possible
          that some clients are not loading the content (note: chain
          certificates and intermediate certificates are the same).
        </li>

        <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
          <li>
            How to check if there is a missing intermediate certificate in the
            cert chain? Go to SSLLabs and check your domain (e.g.
            cdn.yourdomain.com) and go to "Chain issues" which should be "none".
            Here is an example of a complete certificate chain.
          </li>
        </ul>
        <img
          alt="cdn toruble shoot guide"
          src="/images/Trouble-shoot/cdntroubleshoot3.svg"
        />
        <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
          <li>
            Where to get missing intermediate certificates? Normally, all the
            needed intermediate certificates are sent along when a new
            certificate is ordered. If you don't have these intermediate certs,
            you can use our
            <a class="underline">Certificate Chain Composer</a> to automatically
            generate them. Additionally, you can either reissue your certificate
            (where you should also get new chain certificates) or you can find
            the needed chain certificates based on the fingerprint ID provided
            by SSLLabs.
          </li>
        </ul>

        <li>
          Check your certificate for weak keys. Your certificate should be
          A-graded. It's possible that a certificate will not be considered as
          secure anymore after a browser update.
        </li>
        <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
          <li>
           How to check a certificate for weak keys? Go to SSLLabs and check the grade of your domain, also check "Weak key".
          </li>

          <li>
            What should you do if your certificate has weak keys? You need to
            reissue your certificate. This is normally available for free in the
            dashboard of your SSL issuer. Please contact your SSL issuer for
            more details. You then need to upload the newly issues certificate
            in the KeyCDN dashboard.
          </li>
        </ul>
        <li>
          A change in the KeyCDN dashboard takes less than 5 minutes to be
          globally propagated. Make sure you wait a few minutes after a change.
        </li>
      </ol>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Your website is loading slow even though you implemented a CDN?
      </h2>
      <p class="text-[#73737F]">
        Use one of the speed check tools above to get more insights. Verify if
        you're getting any <a class="underline">error codes</a> and resolve them
        first. Avoid redirects as they will cause more RTTs and therefore slow
        down your website. Identify assets that are obviously loading slower
        than others and check if the X-Cache HTTP header field shows a HIT or
        MISS.
      </p>

      <p class="text-[#73737F]">
        A slow loading website can also be related to a slow origin server or
        external assets (commonly render blocking JavaScript libraries), which
        are loading slowly and decrease the overall load time of your website.
        Keep in mind that the initial HTML document is still loaded from your
        origin server, which means it is crucial that your server needs to be
        optimized as well.
      </p>

      <p class="text-[#73737F]">
        We recommend reading this
        <a class="underline">website performance optimization</a> article, which
        highlights the most important performance tips to help further
        accelerate your website.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <span class="text-[2rem] font-semibold"
        >Why is my cache hit ratio low?</span
      >

      <span class="text-[#73737F]">
        A number of factors can have an impact on your cache hit ratio (CHR).
        Please check the following points if you think the CHR is too low:
      </span>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          <span class="font-bold">Query strings (QS):</span> Each QS will create
          a new cache entry if query strings are not ignored. QS can be
          important to distinguish different versions of a file but it will
          cause extra cache entries if not used properly. QS can be ignored for
          each Zone, it will then always be cached as the same file.
        </li>
        <li>
          <span class="font-bold">Expire headers:</span> By default all HTTP
          headers from the origin server will be honoured by KeyCDN. It's
          important to define meaningful expire values. Also, take note that
          certain expire headers define their value in minutes while others are
          in seconds (e.g. X-Accel-Expires is in seconds while Expire is in
          minutes).
        </li>
        <li>
          <span class="font-bold">Purge:</span> Each purge (either a particular
          file or the entire Zone) will delete the content on all POPs. The
          file(s) will then be cached again with the first request.
        </li>
        <li>
          <span class="font-bold">New files:</span> Every new file needs to be
          cached on each POP all around the world. This will result in one cache
          miss for each file and POP.
        </li>
        <li>
          <span class="font-bold"
            >User generated content (long tail content):</span
          >
          The traffic pattern will also have a significant impact on the CHR. In
          case of user generated content, new files need to be cached more often
          because of the "long tail" (which will lead to a lower CHR).
        </li>
        <li>
          <span class="font-bold">Not cacheable content:</span> Not every file
          is cacheable. Files will be cached based on the Cache-Control header.
          Files with cookies cannot be cache if the cookie is not stripped away
          (see the feature in Zone settings).
        </li>
      </ul>

      <span class="text-[#73737F]">
        Visit our <a class="underline">CDN Cache Hit Ratio</a> article for more
        details.
      </span>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Are you getting 403 Forbidden after you enabled Zone Referrers?
      </h2>

      <p class="text-[#73737F]">
        First of all, keep in mind that assets which you access directly in your
        browser or using tools like curl do NOT have a referrer field in the
        HTTP request header. Requests without an HTTP referrer field are NOT
        allowed to access your assets if you enable any Zone Referrer for your
        Zone.
      </p>

      <ol class="flex flex-col gap-4 pl-8 text-[#73737F]">
        <li>
          Verify the HTTP Referer - Chrome's Developer Tools can help you with
          this. Open the Network panel and reload your website. Click on the
          asset that is having a 403 status code and analyze the headers. Does
          the Referer header show what you expected?
        </li>

        <img
          alt="cdn toruble shoot guide"
          src="/images/Trouble-shoot/cdntroubleshoot4.svg"
        />

        <p class="text-[#73737F]">
          In the example above you would be required to set www.keycdn.com as a
          Zone Referrer.
        </p>

        <li>
          Verify if the Zone Referrer is enforced as expected with KeyCDN Tools
          <a class="underline">HTTP Header Checker</a>. Referrer allowed example
          (www.demo.com is a valid referrer):
        </li>

        <img
          alt="cdn toruble shoot guide"
          src="/images/Trouble-shoot/cdntroubleshoot5.svg"
        />

        <p class="text-[#73737F]">Referrer <span class="font-bold">blocked</span> example:</p>
        <img
          alt="cdn toruble shoot guide"
          src="/images/Trouble-shoot/cdntroubleshoot6.svg"
        />

        <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
          <li>
            Where to get missing intermediate certificates? Normally, all the
            needed intermediate certificates are sent along when a new
            certificate is ordered. If you don't have these intermediate certs,
            you can use our
            <a class="underline">Certificate Chain Composer</a> . to
            automatically generate them. Additionally, you can either reissue
            your certificate (where you should also get new chain certificates)
            or you can find the needed chain certificates based on the
            fingerprint ID provided by <a class="underline">SSLLABS</a> .
          </li>
        </ul>

        <li>
          Check your certificate for weak keys. Your certificate should be
          A-graded. It's possible that a certificate will not be considered as
          secure anymore after a browser update.
        </li>

        <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
          <li>
            How to check a certificate for weak keys? Go to
            <a class="underline">SSLLABS</a> . and check the grade of your
            domain, also check "Weak key".
          </li>
          <li>
            What should you do if your certificate has weak keys? You need to
            reissue your certificate. This is normally available for free in the
            dashboard of your SSL issuer. Please contact your SSL issuer for
            more details. You then need to upload the newly issues certificate
            in the KeyCDN dashboard.
          </li>
        </ul>

        <li>
          A change in the KeyCDN dashboard takes less than 5 minutes to be
          globally propagated. Make sure you wait a few minutes after a change.
        </li>
      </ol>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How to further analyze the 4xx client errors shown in the dashboard?
      </h2>
      <p class="text-[#73737F]">
        Under Reporting > Usage among other useful information, the number of
        4xx errors are shown. Here's an example:
      </p>

      <img
        alt="cdn toruble shoot guide"
        src="/images/Trouble-shoot/cdntroubleshoot8.svg"
      />
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <p class="text-[#73737F]">
        There are a number of reasons causing 4xx errors. Some of them can be:
      </p>
      <ul class="flex list-disc flex-col gap-4 pl-8 text-[#73737F]">
        <li>
          Bowsers are sometimes requesting files by default (e.g. /favicon.ico
          ) even if the files don't exist and are not part of the HTML.
        </li>
        <li>
          Your Secure Token has expired which will result in a 410 error for the
          client.
        </li>
        <li>
          A bad bot is blocked on the edge server resulting in a 451 error.
        </li>
        <li>Users can manually request files. The files might not exist.</li>
        <li>Bots from search engines might crawl for content.</li>
        <li>
          You are using Zone Referrers and therefore any referrer you haven't
          added to the list will receive a 403 Forbidden.
        </li>
        <li>
          Your website is requesting files which don't exist but should be
          there. That's the case you want to avoid and you should further
          analyze!
        </li>
      </ul>

      <p class="text-[#73737F]">
        If you have a relative small number of 404 errors, in most cases it's
        perfectly normal. Even for a correctly working website, there may not be
        zero 4xx errors. In the screenshot above, there are over 48 million 2xx
        requests and only 175 4xx requests. This ratio is absolutely normal but
        customers sometimes still want to investigate the 4xx client errors.
        Here's how the 4xx client errors can be analyzed. There are two options:
      </p>

      <ul class="flex flex-col list-disc gap-4 pl-8 text-[#73737F]">
        <li>
          <span class="font-bold">Take advantage of the raw logs: </span> The
          raw logs can be forwarded to a host of your choice. The raw logs (e.g.
          all 404 requests) can then be further processed.
          <a class="underline">Log Forwarding</a> can be enabled in the KeyCDN
          dashboard. The <a class="underline">Log Formatr</a> offers all the
          information needed
        </li>
      </ul>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How to verify if the filter for X-Pull is properly implemented on your
        origin server?
      </h2>
      <p class="text-[#73737F]">
        Our <a class="underline">HTTP Header Checker</a> tool can help you with
        that. Just specify the X-Pull header value and verify if you are getting
        the response you are expecting (e.g. 403 Forbidden). Visit our How to
        Use <a class="underline">X-Pull</a> article to learn more about
        configuring this feature on your origin server.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Video files such as MP4 need to download completely before playing in
        your player?
      </h2>
      <p class="text-[#73737F]">
        By default, files with cookies are not cacheable. However, enabling this
        option will ignore the presence of cookies and therefore force the edge
        servers to cache these files.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Why can't I log in to my FTP account?
      </h2>
      <p class="text-[#73737F]">
        Please check your <a class="underline">FTP</a> settings and ensure you
        are using your KeyCDN Subuser credentials and not your email address. If
        you still can't login, please send us your IP address in a support
        request and we'll check if your IP address has been blocked.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Why are my images being deindexed from Google Search Console?
      </h2>
      <p class="text-[#73737F]">
        If your images start to get deindexed from your Google Search Console
        account, this is likely a sitemap structure issue. Assuming you are
        using the Yoast SEO WordPress plugin, you may need to add the following
        snippet at the top of your functions.php file in order for Yoast to
        index your images from the CDN domain.
      </p>

      <div
        class="border border-[#D0D0D8] text-[#73737F] rounded-md p-4 mt-2 bg-white text-sm"
      >
        <pre><code>
function wpseo_cdn_filter($uri) { 
return str_replace('https://www.yoursite.com', 'https://cdn.yoursite.com', $uri);
}

add_filter( 'wpseo_xml_sitemap_img_src', 'wpseo_cdn_filter' );
  </code></pre>
      </div>

      <p class="text-[#73737F]">
        Once you've added the snippet and modified it to use your origin URL and
        CDN URL, save the file and go to the Yoast SEO XML Sitemap page. You
        will need to regenerate the sitemap in order for the changes to take
        affect. In order to do this, set the XML sitemap functionality to
        "Disabled" then Save Changes. Once this is done, set it back to Enabled
        and Save Changes again. Your sitemap will now use the CDN URL to
        reference images.
      </p>

      <p class="text-[#73737F]">Before adding functions.php snippet:</p>

      <img
        alt="cdn toruble shoot guide"
        src="/images/Trouble-shoot/cdntroubleshoot7.svg"
      />

      <p class="text-[#73737F]">After adding functions.php snippet:</p>
      <img
        alt="cdn toruble shoot guide"
        src="/images/Trouble-shoot/cdntroubleshoot9.svg"
      />

      <p class="text-[#73737F]">
        Learn more about indexing images in SERPs by reading our <a class="underline">CDN SEO guide</a>.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How to fix a 301 redirect back to my origin server?
      </h2>
      <p class="text-[#73737F]">
        If you have KeyCDN integrated with your website, however are receiving a
        301 redirect when trying to access a CDN URL (e.g.
        https://cdn.yourwebsite.com/path/to/your/image.jpg) there are a couple
        of things you can check.
      </p>

      <ol class="flex flex-col gap-4 pl-8 mb-20 text-[#73737F]">
        <li>
          Verify that you are using the correct origin URL for your KeyCDN Zone.
          Be aware that if your origin URL is using a www subdomain, this must
          also be entered in the origin URL. Also, double check you have entered
          the correct protocol (e.g. http:// or https://).
        </li>
        <li>
          301 redirects always come from the origin server, therefore double
          check that you don't have any special redirect rules in place that are
          redirecting your assets.
        </li>
        <li>
          Be sure to purge your entire KeyCDN Zone once any modifications have
          been made to fix the 301 redirects. The edge servers cache 301
          redirects therefore even though you may have solved the problem, if
          the Zone isn't purged you may still see a redirect occur.
        </li>
      </ol>
    </div>
  </div>
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
.btn2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  background: #ffffff;
  border: 2px solid #eaeaea;
  border-radius: 6px;
  padding: 15px 20px;
  cursor: pointer;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
