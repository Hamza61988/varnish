<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full flex flex-col items-start gap-4">
 
      <h1 class="text-5xl font-medium">Technical Questions</h1>

      <button class="btn2 text-[#73737F] mt-4">
        <span>Table of contents</span>
        <span class="arrow"></span>
      </button>

      <p class="text-[#73737F]">
        This section is focusing on technical questions on a deeper level and is
        the continuation of our FAQ.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">What cache statuses are there?</h2>
      <p class="text-[#73737F]">
        Different cache statuses can occur for Push and Pull Zones. Here's an
        overview of possible cache statuses:
      </p>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>HIT - Your content has been delivered from the cache.</li>
        <li>
          MISS - Your content was not yet in the cache but will be after the
          first request. The second request to that file will be a cache HIT.
        </li>
        <li>
          EXPIRED - The cached content has expired and the new content from the
          origin server has been fetched.
        </li>
        <li>
          REVALIDATED - It has been verified, that the currently cached content
          is still valid.
        </li>
        <li>
          UPDATING - Content has been served from the cache. There is a cache
          lock active and new content is being copied from the origin server.
        </li>
        <li>
          STALE - The most recently cached content is returned to the client.
          This can occur when the origin is not reachable, the connection times
          out, or the origin server is using
          <a class="underline">stale-while-revalidat</a> e. STALE is also
          returned if an asset has expired and is being updated in the
          background.
        </li>
      </ul>

      <p class="text-[#73737F]">
        In some error cases there is no cache status returned. Raw logs will
        show a - instead of one of above values.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Which HTTP request methods do you support?
      </h2>
      <p class="text-[#73737F]">
        The request methods allowed vary slightly between Push and Pull Zones.
        For Pull Zones, we support all common
        <a class="underline">Http request Methods</a>:
      </p>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          HEAD and GET requests get cached and will be served from the KeyCDN
          cache.
        </li>
        <li>PUT, POST, DELETE requests will not be cached (X-Cache: MISS).</li>
      </ul>

      <p class="text-[#73737F]">
        For Push Zones, we only support HEAD and GET requests. If using a method
        other than HEAD or GET on a Push Zone you will receive a
        <a class="underline">405 Method Not Allowed</a> status.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Do I need to define specific edge server locations for my KeyCDN Zone?
      </h2>
      <p class="text-[#73737F]">
        No, this is not required. All KeyCDN Zones are automatically configured
        to work with our complete <a class="underline">Network</a> of edge
        server locations. This does not need to be defined manually. Upon user
        request, assets will be pulled from your origin server and cached at the
        client's nearest CDN edge server.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        What does a request header from a KeyCDN edge server look like?
      </h2>
      <p class="text-[#73737F]">
        Commonly used for full site acceleration, this option forwards the Host
        header Host: www.example.com to the origin server as received from the
        client instead of the host from the origin URL.
      </p>

      <div
        class="border border-[#D0D0D8] overflow-x-auto text-[#73737F] rounded-md p-4 mt-2  text-[14px]"
      >
        <pre><code>
GET /foobar.jpg HTTP/1.1
Host: your_origin_host
X-Forwarded-Host: &lt;zonename&gt;-&lt;hexid&gt;.kxcdn.com
X-Forwarded-For: 178.82.72.134
X-Forwarded-Scheme: http
X-Pull: KeyCDN
Connection: close
Accept: */*
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5)  AppleWebKit/537.36 (KHTML, like Gecko) 
 Chrome/41.0.2272.118 Safari/537.36
Accept-Language: en-US,en;q=0.8,de;q=0.6,ja;q=0.4
Cookie: foobar
  </code></pre>
      </div>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          X-Forwarded-Host contains the originally requested host, either the
          Zone URL (e.g. example-hexid.kxcdn.com) or Zone Alias (e.g.
          cdn.example.com).
        </li>
        <li>
          X-Forwarded-For forwards the client IP address from our edge server.
        </li>
        <li>
          X-Forwarded-Scheme identifier of the originating scheme of an HTTP
          request. Either http or https.
        </li>
        <li>X-Pull contains the value defined in the Zone settings.</li>
        <li>Is s-maxage in Cache-Control h</li>
      </ul>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is s-maxage in Cache-Control header supported?
      </h2>
      <p class="text-[#73737F]">
        Yes, content will be cached according to s-maxage in the Cache-Control
        header. The s-maxage header is intended for KeyCDN's edge servers, while
        max-age is intended for regular clients. Learn more about the
        <a class="underline">Expire and Cache-Control headers.</a>
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Why does the analytics page show no used storage for a Pull Zone?
      </h2>
      <p class="text-[#73737F]">
        Pull Zones on each edge server have a different amount of data cached.
        This is very dependent on the traffic pattern and expiry values. There
        is no storage cost for Pull Zones.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is stale content served from a Pull Zone if the origin server is not
        available?
      </h2>
      <p class="text-[#73737F]">
        Yes, stale content will be served if the origin server is not reachable
        or if the connection times out. If the origin server is reachable and
        returns an HTTP 403, 404, 500, 502, 503, or 504 status the Pull Zone
        will not serve stale content but return the same response as it gets
        from the origin server.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Is the URL case sensitive?</h2>
      <p class="text-[#73737F]">
        It's important to distinguish that the domain is not case sensitive but
        the path is case sensitive.
      </p>

      <ul class="text-[#73737F] flex flex-col gap-4 list-disc pl-5">
        <li>
          The domain can be upper case or lower case. We recommend working with
          lower case. For example cdn.yourdomain.com, CDN.yourdomain.com, and
          cdn.Yourdomain.com will all work.
        </li>
        <li>
          The path needs to be correct. For example /yourfile.txt is not the
          same as /YourFile.txt.
        </li>
      </ul>

      <p class="text-[#73737F]">
        Having the path case-insensitive is not available due to performance
        issues. The case insensitivity of the DNS is specified in
        <a class="underline">RFC 4343</a>.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Can I purge content from the CDN?
      </h2>
      <p class="text-[#73737F]">
        Content of a Pull Zone can be purged instantly from all POPs globally.
        It can be done through the dashboard or the
        <a class="underline">API</a>. Assets of a Push Zone can only be purged
        by URL.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is byte-range not working in combination with S3?
      </h2>
      <p class="text-[#73737F]">
        AWS S3 does not send the HTTP header Accept-Ranges: bytes if you are
        using the default endpoint URL. KeyCDN sends only 200 instead of 206 and
        ignores range requests if this field is missing. Use the following
        format as the Origin URL instead which serves the required Accept-Ranges
        header field: &lt;bucketname&gt;.s3.amazonaws.com
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How are byte-range requests cached?
      </h2>
      <p class="text-[#73737F]">
        If the asset is present in the cache, then the KeyCDN edge servers honor
        a byte-range request and deliver only the specified bytes of that file
        to the client. If the asset is not cached, or if it is in stale state,
        the KeyCDN edge servers download the entire asset from the origin
        server. If the request is for a single byte range, the edge servers send
        that byte-range to the client as soon as it is encountered in the
        download stream. If the request specifies multiple byte ranges within
        the same file, the edge servers deliver the entire asset to the client
        when the download completes.
      </p>

      <p class="text-[#73737F]">
        After the download completes and is stored in the cache on the KeyCDN
        edge servers, all future byte-range requests, whether for a single range
        or multiple ranges, are delivered immediately from the cache.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Why do my files not get cached? Why is my miss ratio high?
      </h2>
      <p class="text-[#73737F]">
        Please check if you're sending the HTTP header Content-Length from your
        origin server. The Content-Length header must be both present and
        contain a value greater than 0 in order to produce a cache HIT.
        Otherwise, it will be a cache MISS.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">Can I use .htaccess in my Zone?</h2>
      <p class="text-[#73737F]">No, .htaccess files will not be processed.</p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Will an EV certificate work with KeyCDN's SSL/TLS?
      </h2>
      <p class="text-[#73737F]">
        Yes, any kind of <a class="underline">Ev certificate</a> on the origin
        server will work with HTTPS solutions from KeyCDN (Shared SSL,
        <a class="underline">Custom SSL</a>, or
        <a class="underline">Lets Encrypt</a>), the green bar in the browser
        will remain. It's also possible to use an EV certificate for Custom SSL
        in the KeyCDN dashboard.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Can I change the reporting time Zone?
      </h2>
      <p class="text-[#73737F]">
        The reporting time Zone in the whole KeyCDN dashboard is UTC, it cannot
        be changed. Also the time stamp provided in the KeyCDN raw logs is UTC.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Can I override the default cache expiry time?
      </h2>
      <p class="text-[#73737F]">
        Yes, this can be set in the Zone settings within the KeyCDN dashboard.
        Alternatively, you can set an expiry header on your origin server.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        The Expires header has been set on your origin but the expiry date is
        not updating for the cached files?
      </h2>
      <p class="text-[#73737F]">
        You have set Ignore Cache Control to disabled and Expires to 0 to fully
        honor the expiry headers from your origin server. The Expires header
        value will be initially cached together with the asset. Further, if that
        asset is not changing the Expires value won't either. This means that
        the date of the Expires header might be in the past for assets that are
        rarely changing. The browser needs to revalidate an asset on every
        request if the Expires date is in the past. The Expires value will be
        updated as received from the origin server if the asset has been
        modified (e.g. ETag or Last-Modified has changed), otherwise it will not
        be updated from the origin server and keep the initial date. This might
        be undesirable. We recommend that you use the Cache-Control header
        instead of the Expires header field to overcome this limitation. In case
        both response headers are used, Cache-Control has a higher precedence
        over Expires.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Search engines are crawling the CDN URL and I now have duplicate
        content, how can I solve that?
      </h2>
      <p class="text-[#73737F]">
        You can use a robots.txt or canonical headers to solve that. Check our
        <a class="underline">Best SEO for Your CDN</a> guide on how you can
        resolve this.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is there a specific User-Agent when KeyCDN is fetching content from the
        origin server?
      </h2>
      <p class="text-[#73737F]">
        There is no specific User-Agent in place. If you want distinguish KeyCDN
        traffic from other traffic on your origin server, take advantage of the
        <a class="underline">X-Pull</a> request header.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Can I get the IPs of the KeyCDN edge servers?
      </h2>
      <p class="text-[#73737F]">
        We don't disclose the IPs of the edge servers because the IPs frequently
        change. If you want to distinguish KeyCDN traffic from other traffic on
        your origin server, please take advantage of the feature X-Pull.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        I can't connect to my Push Zone and upload content, why?
      </h2>
      <p class="text-[#73737F]">
        Make sure you follow the instructions on how to
        <a class="underline">Upload to a Push Zone</a>. If you still have
        issues, please send us your IP address and we'll check if you've been
        blocked.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Can I still use the kxcdn.com domain if Let's Encrypt or Custom SSL is
        enabled?
      </h2>
      <p class="text-[#73737F]">
        No, once you enable and configure the Let's Encrypt or Custom SSL
        setting, you will no longer be able to use the HTTPS version of the
        kxcdn.com domain (e.g. example-hexid.kxcdn.com). This will in most cases
        result in a common name invalid error or a 404 error.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How are simultaneous requests to the same asset handled?
      </h2>
      <p class="text-[#73737F]">
        KeyCDN never blocks a request. We either queue the response for a
        certain number of seconds (before fetching it again) or we fetch the
        content in parallel to the other request again from the origin server.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        Is HLS supported when Origin Shield is enabled?
      </h2>
      <p class="text-[#73737F]">
        If you're using HLS to stream on demand media then you can use it in
        conjunction with the KeyCDN Origin Shield feature. However, if you're
        streaming a live event over HLS, Origin Shield should be disabled as it
        will cause the .m3u8 files to be cached, which is unwanted.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold">
        How can I determine how much bandwidth my website currently uses?
      </h2>
      <p class="text-[#73737F]">
        You can check your origin server's current bandwidth usage numbers. This
        will give you an approximation of how much bandwidth you will be using
        via the CDN. For more information and to see where to find your
        bandwidth numbers, read through our  <a class="underline">How to Indentify Your Bandwith Usage</a>guide.
      </p>
    </div>

    <div class="mt-[2.3125rem] flex flex-col gap-4 mb-20">
      <h2 class="text-[2rem] font-semibold">
        Can I use the KeyCDN Let's Encrypt SSL option if I'm already using Let's
        Encrypt on my origin server?
      </h2>
      <p class="text-[#73737F]">
        Yes, you can still use the KeyCDN <a class="underline">Let's Encrypt</a> option even if you're
        already using Let's Encrypt on your origin server. The Let's Encrypt
        certificate on your origin server will be for your main domain (e.g.
        yourwebsite.com) while the KeyCDN Let's Encrypt certificate will be
        associated with your Zone Alias (e.g. cdn.yourwebsite.com).
      </p>
    </div>
  </div>
    <Teleport to="#full-width-section">
  <svg
    class="image-processing-bg"
    width="691"
    height="202"
    viewBox="0 0 691 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M662.785 573.706C685.376 425.8 661.407 281.837 590.396 218.417C507.73 144.588 361.315 179.909 150.391 445.226C271.485 -512.328 -184.359 515.654 -66.8792 60.2144"
      stroke="#EEEEF0"
      stroke-width="40"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</Teleport>
</template>

<style scoped>
p, ol, ul, pre, code {
  font-family: inter;
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
