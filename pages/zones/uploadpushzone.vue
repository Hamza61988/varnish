<script setup lang="ts">
import AccessAllFeaturesSection from"~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="mt-[4.25rem]  md:max-w-lg lg:max-w-2xl ">
    <div class="w-full">
      <h1 class="text-[2rem] md:text-5xl font-medium mt-4">Upload Data to a Push Zone</h1>

      <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        There are a couple of ways to upload data to a KeyCDN Push Zone. This
        guide walks through how to upload data to our
        <a class="underline">CDN storage </a> cloud through FTP(S) and rsync
        over SSH. A Push Zone should be used for larger files (> 10 MB), which
        do not change frequently. The maximum file size should not exceed 5 GB.
      </p>

      <div
        style="
          box-shadow: 0px 0.5px 0.5px 0px #07011308;

          box-shadow: 0px 1px 1px -0.5px #07011308;

          box-shadow: 0px 2px 2px -1px #07011308;

          box-shadow: 0px 3px 3px -1.5px #07011308;

          box-shadow: 0px 0px 0px 1px #1a192514;
        "
        class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] max-w-[47.5rem] mt-4 mx-auto py-5 rounded-2xl px-10"
      >
        <h1 class="">
          <span class="font-bold">Note:</span> Push Zones are limited to 250,000
          inodes (files).
        </h1>
      </div>
    </div>

    <div class="mt-[2.3125rem]">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold mt-4">
        How to upload data with FTP(S)
      </h2>

      <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
        If a new <a class="underline">Push Zone</a> was just created you will
        need to wait a few minutes until the Zone has been deployed. Follow the
        steps below to successfully upload your data to KeyCDN using FTP(S):
      </p>

      <div class="pl-8">
        <ol class="text-[#73737F] text-[13px] md:text-[1rem] flex flex-col gap-4 my-[24px]">
          <li class="">
            From the KeyCDN dashboard, navigate to Subusers and add a user for
            the specified Push Zone.
          </li>
          <li class="">Connect to the FTP server:</li>
          <li class="">
            <span class="font-bold">Hostname:</span>ftp.keycdn.com <br />
            <span class="font-bold">Port:</span>21 <br />
            <span class="font-bold">Username:</span>{subuser_username}<br />
            <span class="font-bold">Password:</span>{subuser_password}
          </li>

          <li class="">Upload data to your Push Zone.</li>
        </ol>

        <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem] mt-4">
          We recommend using FTPS (explicit FTP over TLS) to avoid plaintext
          transfer of your credentials over the network and using an FTP client
          like <a class="underline">FileZilla</a>.
        </p>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-4">
      <img
        src="/images/Zones/Uploadpushzone.svg"
        alt="BEST CDN AWARD"
        class=""
      />

      <div class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> If FTPS is used please ensure
          data is being transferred over TLS 1.2 or TLS 1.3.
        </h1>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <h2 class="text-[1.5rem] md:text-[2rem] font-semibold text-black">
          How to upload data with rsync over SSH
        </h2>
        <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem]">
          If you are interested in lsyncd read our
          <a href="#" class="underline">lsyncd over SSH</a> article. Follow the
          steps below to successfully upload your data to KeyCDN using rsync:
        </p>
      </div>

      <p style="font-family: inter" class="pl-8 text-[#73737F] text-[13px] md:text-[1rem]">
        1. SSH public key (ssh-rsa or ssh-ed25519). It takes a few minutes for
        the key to be distributed to the responsible servers.
      </p>

      <div class="flex flex-col gap-2">
        <p style="font-family: inter" class="pl-8 text-[#73737F] text-[13px] md:text-[1rem]">
          2. Add your SSH private key on your system:
        </p>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-[13px] md:text-[1rem] text-sm overflow-x-auto"
        >
          ssh-add /path/to/your/private.key
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p style="font-family: inter" class="pl-8 text-[#73737F] text-[13px] md:text-[1rem]">
          3. Upload/synchronise data to your Push Zone using the following rsync
          command:
        </p>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-[13px] md:text-[1rem] text-sm overflow-x-auto whitespace-nowrap"
        >
          rsync -rtvz --chmod=D2755,F644 {path_to_your_folder}/
          {keycdn_username}@rsync.keycdn.com:{zone_name}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <strong class="ml-8 text-[#73737F] text-[13px] md:text-[1rem] font-bold">Example:</strong>
        <div
          class="ml-8 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded text-[#73737F] text-[13px] md:text-[1rem] text-sm overflow-x-auto whitespace-nowrap"
        >
          rsync -rtvz --chmod=D2755,F644 {path_to_your_folder}/
          {keycdn_username}@rsync.keycdn.com:{zone_name}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem]">
          In addition to the above, you might find the following flags useful:
        </p>
        <ul class="text-[#73737F] text-[13px] md:text-[1rem] list-disc pl-7 space-y-4">
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

      <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem]">
        If you want to list the content in your Push Zone use the following
        command:
      </p>

      <div class="bg-[#FEF9D8] text-[#73737F] text-[13px] md:text-[1rem] border py-5 rounded-2xl px-10">
        <h1 class="">
          <span class="font-bold">Note:</span> We limit the allowed rsync flags.
          Some older rsync versions behave differently in regards to what flags
          they use for common operations. Please ensure rsync version 3.0.0 or
          greater is used.
        </h1>
      </div>
    </div>

    <div class="mt-6 flex flex-col gap-4">
      <h2 class="text-[1.5rem] md:text-[2rem] font-semibold text-black">
        How data gets deployed to a Push Zone
      </h2>

      <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem]">
        Now that your data is uploaded to our storage cluster, there are a few
        things to consider when it comes to deploying this data:
      </p>

      <ul class="text-[#73737F] text-[13px] md:text-[1rem] list-disc pl-5 space-y-2">
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

  <ClientOnly>
    <Teleport to="#full-width-section">
      <AccessAllFeaturesSection class="mt-10" />
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
p,
ol,
ul {
  font-family: inter;
}
ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-top: 1rem;
}
</style>
