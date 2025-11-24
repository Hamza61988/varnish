
<template>
  <div class="mt-[4.25rem] mx-auto max-w-3xl">
    <div class="w-full">
      <button class="support-btn shadow-md">Support</button>

      <h1 class="text-5xl font-medium mt-4">Upload Data to a Push Zone</h1>

      <p class="text-[#73737F] mt-4">
        There are a couple of ways to upload data to a KeyCDN Push Zone. This
        guide walks through how to upload data to our
        <a class="underline">CDN storage </a> cloud through FTP(S) and rsync
        over SSH. A Push Zone should be used for larger files (> 10 MB), which
        do not change frequently. The maximum file size should not exceed 5 GB.
      </p>

      <div
        class="bg-[#FEF9D8] text-[#73737F] max-w-[47.5rem] mt-4 border mx-auto py-5 rounded-2xl px-10"
      >
        <h1 class="">
          <span class="font-bold">Note:</span> Push Zones are limited to 250,000
          inodes (files).
        </h1>
      </div>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[2rem] font-semibold mt-4">
        How to upload data with FTP(S)
      </h2>

      <p class="text-[#73737F] mt-4">
        If a new <a class="underline">Push Zone</a> was just created you will
        need to wait a few minutes until the Zone has been deployed. Follow the
        steps below to successfully upload your data to KeyCDN using FTP(S):
      </p>

      <div class="pl-8">
        <ol class="text-[#73737F]">
          <li class="mt-3">
            From the KeyCDN dashboard, navigate to Subusers and add a user for
            the specified Push Zone.
          </li>
          <li class="mt-3">Connect to the FTP server:</li>
          <li class="mt-3">
            <span class="font-bold">Hostname:</span>ftp.keycdn.com <br />
            <span class="font-bold">Port:</span>21 <br />
            <span class="font-bold">Username:</span>{subuser_username}<br />
            <span class="font-bold">Password:</span>{subuser_password}
          </li>

          <li class="mt-3">Upload data to your Push Zone.</li>
        </ol>

        <p class="text-[#73737F] mt-4">
          We recommend using FTPS (explicit FTP over TLS) to avoid plaintext
          transfer of your credentials over the network and using an FTP client
          like <a class="underline">FileZilla</a>.
        </p>
      </div>
    </div>

    <div>
      <img
        src="/images/Zones/Uploadpushzone.svg"
        alt="BEST CDN AWARD"
        class=""
      />

      <div class="bg-[#FEF9D8] text-[#73737F] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> If FTPS is used please ensure
          data is being transferred over TLS 1.2 or TLS 1.3.
        </h1>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <h2 class="text-[2rem] font-semibold text-black">
          How to upload data with rsync over SSH
        </h2>
        <p class="text-[#73737F]">
          If you are interested in lsyncd read our
          <a href="#" class="underline">lsyncd over SSH</a> article. Follow the
          steps below to successfully upload your data to KeyCDN using rsync:
        </p>
      </div>

      <p class="pl-8 text-[#73737F]">
        1. SSH public key (ssh-rsa or ssh-ed25519). It takes a few minutes for
        the key to be distributed to the responsible servers.
      </p>

      <div class="flex flex-col gap-2">
        <p class="pl-8 text-[#73737F]">
          2. Add your SSH private key on your system:
        </p>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-sm overflow-x-auto"
        >
          ssh-add /path/to/your/private.key
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p class="pl-8 text-[#73737F]">
          3. Upload/synchronise data to your Push Zone using the following rsync
          command:
        </p>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-sm overflow-x-auto whitespace-nowrap"
        >
          rsync -rtvz --chmod=D2755,F644 {path_to_your_folder}/
          {keycdn_username}@rsync.keycdn.com:{zone_name}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <strong class="ml-8 text-[#73737F] font-bold">Example:</strong>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-sm overflow-x-auto whitespace-nowrap"
        >
          rsync -rtvz --chmod=D2755,F644 {path_to_your_folder}/
          {keycdn_username}@rsync.keycdn.com:{zone_name}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p class="text-[#73737F]">
          In addition to the above, you might find the following flags useful:
        </p>
        <ul class="text-[#73737F] list-disc pl-7 space-y-4">
          <li>-n (Perform a trial run with no changes made.)</li>
          <li>
            --delete (Delete extraneous files from destination directories.)
          </li>
          <li>
            --delete-excluded (Also delete excluded files from destination
            directories, which requires the --exclude options.)
          </li>
        </ul>
      </div>

      <p class="text-[#73737F]">
        If you want to list the content in your Push Zone use the following
        command:
      </p>

      <div class="bg-[#FEF9D8] text-[#73737F] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> We limit the allowed rsync flags.
          Some older rsync versions behave differently in regards to what flags
          they use for common operations. Please ensure rsync version 3.0.0 or
          greater is used.
        </h1>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-4">
      <h2 class="text-[2rem] font-semibold text-black">
        How data gets deployed to a Push Zone
      </h2>

      <p class="text-[#73737F]">
        Now that your data is uploaded to our storage cluster, there are a few
        things to consider when it comes to deploying this data:
      </p>

      <ul class="text-[#73737F] list-disc pl-5 space-y-2">
        <li>
          New content is instantly uploaded to our storage cluster and is
          immediately available.
        </li>
        <li>
          If a change is made to an existing file, it takes approximately 15
          minutes for that file to be updated (seen as REVALIDATED in the logs).
        </li>
        <li>
          If a file is deleted from the storage cluster, it takes up to 30
          minutes for that file to be removed from the edge servers.
        </li>
        <li>
          It is not possible to purge the entire CDN cache in a Push Zone. Only
          <a href="#" class="underline">Purge URL</a> can be used in a Push
          Zone. If you require this functionality please use a
          <a href="#" class="underline">Pull Zone</a> instead.
        </li>
        <li>
          Although your content has been uploaded to our storage cluster, data
          is only deployed to a POP if it has been requested.
        </li>
      </ul>
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

      <div
        class="m-auto relative z-10 w-[85%] sm:w-[75%] md:w-[65%] lg:w-[60%]"
      >
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
