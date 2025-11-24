<template>
    <div class="mt-[4.25rem] mx-auto max-w-3xl">

        <div class="w-full">

            <button class="support-btn shadow-md">
                Support
            </button>

            <h1 class="text-5xl font-medium mt-4">
                Zone Settings
            </h1>

            <button class="btn2 mt-4">
                <span>Table of contents</span>
                <span class="arrow"></span>
            </button>

            <p class="text-[#73737F] mt-4">KeyCDN's Zones come with a number of configurable Zone settings.
                 Here is a list and description of the CDN features
                  for both Push and Pull Zones</p>



        </div>
<div class="w-full mt-4 mb-[8.25rem] flex flex-col gap-[3rem]">

    <span>
        <h2 class="text-[2rem] font-semibold">Image Processing</h2>
        <p class="text-[#73737F]">Image Processing transforms and optimizes images with simple URL parameters.</p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Force Download</h2>
        <p class="text-[#73737F]">
            Forces content to download instead of opening. The following response header will be set:
            Content-Disposition: Attachment
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">CORS</h2>
        <p class="text-[#73737F]">
            Enables cross-origin resource sharing <a class="underline">(CORS)</a>. This will set the header to: Access-Control-Allow-Origin "*".
            Make sure this option is enabled if you are using resources such as fonts, CSS files, and icons from another domain.
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Gzip</h2>
        <p class="text-[#73737F]">
            Enables Gzip compression on text/plain, text/css, text/js, text/javascript, text/xml, text/*-component,
            application/json, application/x-javascript, application/javascript, application/xml,
            application/x-mms, application/atom+xml, application/vnd.xm...
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Expire</h2>
        <p class="text-[#73737F]">
            Adding or modifying the Expires and Cache-Control response header fields that are sent to the client if the
            response code equals 200, 201, 204, 206, 300, 302, 303, 304, or 307. This setting overrides the header
            received from the origin in case of a Pull Zone. The expire value only has an impact on the web browser cache
            and not on the KeyCDN cache.
        </p>
        <ul>
            <li class="text-[#73737F]">-1: Cache-Control: no-cache</li>
            <li class="text-[#73737F]">0: Push Zone: disabled </br> 0: Push Zone: disabled Pull Zone: as received from the origin (header honoring)</li>
            <li class="text-[#73737F]">>0: Cache-Control: max-age=t, where t is the time specified in the directive in minutes converted to seconds</li>
          
        </ul>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Block Bad Bots</h2>
        <p class="text-[#73737F]">Block bad bots (returns a 451 Unavailable For Legal Reasons response status).</p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Allow Empty Referrer</h2>
        <p class="text-[#73737F]">Allow requests with an empty Referrer request header value if one or more <a class=" underline"> Zone Referrer</a> is active.</p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Block Referrer</h2>
        <p class="text-[#73737F]">
            Block requests with a Referrer request header value matching a Zone Referrer
            (returns a 403 Forbidden response status).
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Secure Token</h2>
        <p class="text-[#73737F]">
            Restrict access to all the files within this Zone by <a class="underline"> secure access tokens</a>. This defines a time interval for
            which the specified Zone URLs should be accessible. Once it expires, the URLs will return a 403 Forbidden status.
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Shared SSL</h2>
        <p class="text-[#73737F]">Enables the wildcard certificate for this Zone (https://*.kxdcdn.com).</p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Custom SSL</h2>
        <p class="text-[#73737F]">
           <a class="underline">Custom SSL</a>  is fully supported (also known as private SSL). They reflect one or more Zone Aliases
            (e.g. https://example.yourdomain.com)
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Let's Encrypt SSL</h2>
        <p class="text-[#73737F]">
            Automatically creates a certificate for your Zone Alias (e.g. https://cdn.example.com).
            Limited to only one Zone Alias.
        </p>
    </span>

    <span>
        <h2 class="text-[2rem] font-semibold">Force SSL</h2>
        <p class="text-[#73737F]">
            Redirects HTTP requests to HTTPS (returns a 301 Moved Permanently response status).
        </p>
    </span>

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
