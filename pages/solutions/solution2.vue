<script setup lang="ts">
import AccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";
</script>

<template>
  <div class="site-margins site-padding">
    <CommonTitle
      upername="Solutions"
      title="Image Processing"
      subtitle="We offer a powerful way to transform and optimize images in real time."
      mobileAlignment="start"
      pcAlignment="start"
    />
    <div
      class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10"
    >
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          Image processing allows on the fly image transformation and
          optimization. Our real-time image processing allows images to be
          altered and enhanced with simple query parameters before being
          delivered by our high performance content delivery network. This means
          no matter where your users are located they will receive processed
          images with low latency.
        </p>
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          By using our image processing service the overall resources on the
          origin server will be reduced because there is no longer a need to
          store several variations of the same image. Instead, append one or
          more of our available query parameters to process the image to fit
          your required specifications.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62695 0.250244C6.76849 0.250244 6.90617 0.298995 7.00879 0.401611C7.11111 0.504144 7.15914 0.64117 7.15918 0.782471C7.15918 0.923979 7.11136 1.0617 7.00879 1.16431C6.90617 1.26692 6.76848 1.3147 6.62695 1.3147H2.06348L10.4746 9.72583C10.6852 9.93642 10.6852 10.2643 10.4746 10.4749C10.264 10.6852 9.93609 10.6854 9.72559 10.4749L1.31543 2.06372V6.6272C1.31543 6.76873 1.26668 6.90642 1.16406 7.00903C1.06152 7.11143 0.924554 7.15938 0.783203 7.15942H0.750977L0.729492 7.15356C0.436518 7.12587 0.25 6.87522 0.25 6.6272V0.782471C0.249996 0.7696 0.249491 0.728882 0.256836 0.684814C0.262184 0.652815 0.277279 0.59068 0.321289 0.530518C0.370424 0.446192 0.44595 0.370667 0.530273 0.321533C0.590437 0.277522 0.652572 0.262428 0.68457 0.25708C0.728642 0.249735 0.76936 0.25024 0.782227 0.250244H6.62695Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
              <path
                d="M24.1323 0.25C24.145 0.25 24.1858 0.249482 24.23 0.256836C24.2601 0.261862 24.3173 0.275913 24.3745 0.314453C24.4281 0.338356 24.4808 0.368069 24.5239 0.411133C24.5553 0.442542 24.5853 0.485352 24.6069 0.536133L25.0298 0.958984L24.6646 0.876953V6.62695C24.6646 6.76849 24.6168 6.90617 24.5142 7.00879C24.4115 7.11138 24.2738 7.15918 24.1323 7.15918C23.9908 7.15915 23.8531 7.11137 23.7505 7.00879C23.6479 6.90618 23.6001 6.76844 23.6001 6.62695V2.06348L15.1899 10.4746C14.9794 10.6851 14.6515 10.6849 14.4409 10.4746C14.2303 10.264 14.2303 9.93618 14.4409 9.72559V9.72461L22.8794 1.31445H18.3169C18.1754 1.31445 18.0377 1.2666 17.9351 1.16406C17.8324 1.06145 17.7837 0.923757 17.7837 0.782227C17.7837 0.640846 17.8326 0.503918 17.9351 0.401367C18.0377 0.298752 18.1754 0.25 18.3169 0.25H24.1323Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
              <path
                d="M10.0996 14.3115C10.2179 14.3115 10.3682 14.3633 10.4746 14.4697C10.6849 14.6803 10.6851 15.0083 10.4746 15.2188L2.06348 23.6289H6.62695C6.76844 23.6289 6.90619 23.6768 7.00879 23.7793C7.1114 23.8819 7.15918 24.0196 7.15918 24.1611C7.15918 24.3027 7.11141 24.4404 7.00879 24.543C6.90618 24.6455 6.76844 24.6934 6.62695 24.6934H0.803711L0.774414 24.7471L0.610352 24.665C0.585932 24.6558 0.559543 24.6429 0.533203 24.624C0.447154 24.5746 0.369923 24.4978 0.320312 24.4121C0.2771 24.3523 0.262112 24.2904 0.256836 24.2588C0.249621 24.2152 0.249991 24.1752 0.25 24.1621V18.3174L0.258789 18.2119C0.277187 18.1088 0.32443 18.0125 0.401367 17.9355C0.503919 17.8331 0.640847 17.7842 0.782227 17.7842C0.923762 17.7842 1.06145 17.8329 1.16406 17.9355C1.2666 18.0382 1.31445 18.1759 1.31445 18.3174V22.8535L9.72559 14.4688C9.83194 14.3627 9.9815 14.3116 10.0996 14.3115Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
              <path
                d="M14.9092 14.2927C15.0061 14.3122 15.1097 14.3615 15.1895 14.4412L23.6846 22.9363V18.3728C23.6846 18.2313 23.7333 18.0936 23.8359 17.991C23.9385 17.8885 24.0763 17.8406 24.2178 17.8406C24.359 17.8407 24.4961 17.8886 24.5986 17.991C24.7012 18.0936 24.75 18.2313 24.75 18.3728V24.2175C24.75 24.2303 24.7505 24.271 24.7432 24.3152C24.7379 24.347 24.7223 24.4085 24.6787 24.4685C24.6293 24.5538 24.5531 24.6302 24.4678 24.6794C24.4082 24.7225 24.3472 24.7376 24.3154 24.7429C24.2716 24.7502 24.2309 24.7498 24.2178 24.7498H18.373C18.2316 24.7498 18.0938 24.7019 17.9912 24.5994C17.8886 24.4968 17.8408 24.359 17.8408 24.2175C17.8408 24.076 17.8886 23.9383 17.9912 23.8357C18.0938 23.7332 18.2316 23.6853 18.373 23.6853H22.9365L14.4414 15.1902L14.2646 15.0125L14.3096 14.9675C14.2537 14.7875 14.2953 14.5867 14.4404 14.4412H14.4414C14.5478 14.3348 14.6971 14.283 14.8154 14.283L14.9092 14.2927Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              Flexible transformations
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              Serve properly scaled images by dynamically updating the width and
              height.
            </p>
          </div>
        </div>

        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.35693e-05 22.6197C-0.000136404 23.5163 0.35621 24.3762 0.990375 25.0102C1.62454 25.6441 2.48464 26 3.3813 25.9998C4.27796 25.9994 5.13763 25.6429 5.77137 25.0083L20.2663 10.5161C20.4695 10.3128 20.584 10.0371 20.584 9.74962C20.584 9.46194 20.4695 9.18625 20.2663 8.98316L17.0163 5.73321C16.813 5.52973 16.5373 5.41528 16.2498 5.41528C15.9622 5.41528 15.6865 5.52973 15.4834 5.73321L0.991182 20.2281C0.353899 20.8604 -0.00309762 21.7219 2.02525e-05 22.6196L7.35693e-05 22.6197ZM16.2501 8.03285L17.9672 9.74989L15.7083 12.0085L13.9913 10.2915L16.2501 8.03285ZM2.52179 21.7585L12.4587 11.8243L14.1757 13.5413L4.24151 23.4782C3.93431 23.7854 3.48661 23.9053 3.06683 23.793C2.64727 23.6806 2.3195 23.3529 2.20694 22.9331C2.0946 22.5135 2.2145 22.0656 2.52171 21.7584L2.52179 21.7585Z"
                fill="#1F62FF"
              />
              <path
                d="M24.9166 7.5835H22.7499C22.3629 7.5835 22.0051 7.78991 21.8117 8.12504C21.6181 8.46018 21.6181 8.87322 21.8117 9.20834C22.0051 9.54348 22.3629 9.7501 22.7499 9.7501H24.9166C25.3036 9.7501 25.6612 9.54347 25.8548 9.20834C26.0482 8.8732 26.0482 8.46016 25.8548 8.12504C25.6612 7.7899 25.3036 7.5835 24.9166 7.5835Z"
                fill="#1F62FF"
              />
              <path
                d="M18.4166 3.25007V1.08342C18.4166 0.696206 18.21 0.338623 17.8748 0.145207C17.5397 -0.0484023 17.1267 -0.0484023 16.7915 0.145207C16.4564 0.338607 16.25 0.696211 16.25 1.08342V3.25007C16.25 3.63708 16.4564 3.99471 16.7915 4.18807C17.1267 4.38168 17.5397 4.38168 17.8748 4.18807C18.21 3.99467 18.4166 3.63707 18.4166 3.25007Z"
                fill="#1F62FF"
              />
              <path
                d="M23.7412 3.79132C24.0151 3.5175 24.1219 3.11829 24.0218 2.74431C23.9216 2.37033 23.6295 2.078 23.2553 1.97785C22.8813 1.87768 22.4821 1.98457 22.2083 2.25839L20.6754 3.79131C20.4016 4.06514 20.2947 4.46434 20.3948 4.83833C20.4952 5.21231 20.7873 5.50464 21.1613 5.60479C21.5355 5.70495 21.9345 5.59807 22.2083 5.32424L23.7412 3.79132Z"
                fill="#1F62FF"
              />
              <path
                d="M13.2248 5.64109C13.5122 5.6413 13.7881 5.52728 13.9914 5.32402C14.1947 5.12096 14.3089 4.84525 14.3089 4.55756C14.3089 4.27008 14.1947 3.99456 13.9912 3.79131L12.4583 2.25839C12.1845 1.98457 11.7853 1.87769 11.4113 1.97785C11.0373 2.07801 10.745 2.37031 10.6448 2.74431C10.5447 3.11829 10.6516 3.51749 10.9254 3.79132L12.4583 5.32424C12.6616 5.5273 12.9373 5.6413 13.2248 5.64109Z"
                fill="#1F62FF"
              />
              <path
                d="M23.7412 13.5413L22.2083 12.0084C21.9345 11.7346 21.5355 11.6277 21.1613 11.7278C20.7873 11.828 20.4952 12.1203 20.3948 12.4943C20.2947 12.8683 20.4016 13.2675 20.6754 13.5413L22.2083 15.0742C22.4821 15.3481 22.8813 15.4549 23.2553 15.3548C23.6295 15.2546 23.9216 14.9623 24.0218 14.5883C24.1219 14.2143 24.0151 13.8151 23.7412 13.5413Z"
                fill="#1F62FF"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              Robust optimizations
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              Improve image performance by reducing the overall size and using a
              better format.
            </p>
          </div>
        </div>

        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.67861 4.0923H18.8249L16.9915 5.87549C16.8672 5.99633 16.8014 6.15259 16.8014 6.31599C16.8014 6.4794 16.8672 6.63567 16.9915 6.7565C17.1157 6.87733 17.269 6.94132 17.4444 6.94132C17.6197 6.94132 17.773 6.87733 17.8973 6.7565L20.8192 3.91466C20.8923 3.8364 20.9507 3.74412 20.9798 3.63042L20.9945 3.55216C21.0092 3.43132 20.9945 3.33191 20.9581 3.23249L20.9361 3.18992C20.9361 3.18278 20.9287 3.18278 20.9287 3.17564V3.1685C20.8996 3.11165 20.8629 3.06908 20.8192 3.02651L17.8973 0.184669C17.6488 -0.0569992 17.2399 -0.0569992 16.9914 0.184669C16.743 0.426338 16.743 0.824009 16.9914 1.0657L18.8248 2.84889L8.67858 2.84916C8.32789 2.84916 8.03564 3.12626 8.03564 3.47449C8.03592 3.82245 8.32789 4.09241 8.67858 4.09241L8.67861 4.0923Z"
                fill="#1F62FF"
              />
              <path
                d="M20.9351 20.2412C20.9351 20.234 20.9277 20.234 20.9277 20.2269V20.2198C20.8986 20.1629 20.8619 20.1203 20.8182 20.0778L17.8963 17.2359C17.6478 16.9943 17.239 16.9943 16.9905 17.2359C16.742 17.4776 16.742 17.8753 16.9905 18.117L18.8239 19.9002H8.67761C8.32691 19.9002 8.03467 20.1773 8.03467 20.5255C8.03467 20.8737 8.31958 21.1508 8.67761 21.1508H18.8239L16.9905 22.934C16.8662 23.0548 16.8004 23.2111 16.8004 23.3745C16.8004 23.5379 16.8662 23.6942 16.9905 23.815C17.1147 23.9358 17.268 23.9998 17.4434 23.9998C17.6187 23.9998 17.772 23.9359 17.8963 23.815L20.8182 20.9732C20.8913 20.8949 20.9497 20.8026 20.9788 20.6889L20.9935 20.6107C21.0082 20.4898 20.9935 20.3904 20.9571 20.291L20.9351 20.2412Z"
                fill="#1F62FF"
              />
              <path
                d="M0.642938 1.25066H3.56482C3.91551 1.25066 4.20776 0.973553 4.20776 0.625329C4.20776 0.277104 3.92285 0 3.56482 0H0.642938C0.292242 0 0 0.277104 0 0.625329C0.000271838 0.973553 0.292513 1.25066 0.642938 1.25066Z"
                fill="#1F62FF"
              />
              <path
                d="M0.738281 3.46761C0.738281 3.8087 1.02319 4.09294 1.38122 4.09294H4.3031C4.65379 4.09294 4.94604 3.81584 4.94604 3.46761C4.94604 3.11939 4.66113 2.84229 4.3031 2.84229H1.38122C1.02319 2.84942 0.738281 3.12652 0.738281 3.46761Z"
                fill="#1F62FF"
              />
              <path
                d="M1.46875 6.30892C1.46875 6.65001 1.75366 6.93425 2.11169 6.93425H5.03357C5.38426 6.93425 5.67651 6.65715 5.67651 6.30892C5.67651 5.9607 5.3916 5.68359 5.03357 5.68359H2.11169C1.75366 5.69073 1.46875 5.96783 1.46875 6.30892Z"
                fill="#1F62FF"
              />
              <path
                d="M2.19873 9.15121C2.19873 9.4923 2.48364 9.77653 2.84167 9.77653H7.22456C7.57525 9.77653 7.86749 9.49943 7.86749 9.15121C7.86749 8.80298 7.58259 8.52588 7.22456 8.52588H2.84167C2.48364 8.53302 2.19873 8.81012 2.19873 9.15121Z"
                fill="#1F62FF"
              />
              <path
                d="M13.156 14.8345C13.156 14.9979 13.2218 15.1542 13.3461 15.275C13.4703 15.3958 13.6236 15.4598 13.799 15.4598C13.9743 15.4598 14.1277 15.3958 14.2519 15.275L17.1738 12.4332C17.2469 12.3549 17.3053 12.2626 17.3344 12.1489L17.3491 12.0707C17.3638 11.9498 17.3491 11.8504 17.3053 11.7367L17.2907 11.7153C17.2907 11.7082 17.2833 11.7082 17.2833 11.701V11.6939C17.2542 11.637 17.2175 11.5945 17.1738 11.5519L14.2519 8.71006C14.0034 8.46839 13.5945 8.46839 13.346 8.71006C13.0976 8.95173 13.0976 9.3494 13.346 9.59109L15.1795 11.3743L5.02624 11.3745C4.67554 11.3745 4.3833 11.6517 4.3833 11.9999C4.3833 12.3481 4.66821 12.6252 5.02624 12.6252H15.1725L13.3391 14.4084C13.2222 14.5147 13.1564 14.6712 13.1564 14.8346L13.156 14.8345Z"
                fill="#1F62FF"
              />
              <path
                d="M7.21723 14.2163H2.83435C2.48365 14.2163 2.19141 14.4934 2.19141 14.8416C2.19141 15.1899 2.47632 15.467 2.83435 15.467H7.21723C7.56793 15.467 7.86017 15.1899 7.86017 14.8416C7.86017 14.4934 7.57526 14.2163 7.21723 14.2163Z"
                fill="#1F62FF"
              />
              <path
                d="M5.02624 17.0586H2.10436C1.75367 17.0586 1.46143 17.3357 1.46143 17.6839C1.46143 18.0321 1.74633 18.3092 2.10436 18.3092H5.02624C5.37694 18.3092 5.66918 18.0321 5.66918 17.6839C5.66918 17.3357 5.38427 17.0586 5.02624 17.0586Z"
                fill="#1F62FF"
              />
              <path
                d="M4.29528 19.8999H1.37341C1.02271 19.8999 0.730469 20.177 0.730469 20.5252C0.730469 20.8735 1.01538 21.1506 1.37341 21.1506H4.29528C4.64598 21.1506 4.93822 20.8735 4.93822 20.5252C4.93822 20.177 4.65332 19.8999 4.29528 19.8999Z"
                fill="#1F62FF"
              />
              <path
                d="M3.56579 22.7417H0.643916C0.29322 22.7417 0.000976562 23.0188 0.000976562 23.367C0.000976562 23.7153 0.285884 23.9924 0.643916 23.9924H3.56579C3.91649 23.9924 4.20873 23.7153 4.20873 23.367C4.20873 23.0188 3.92383 22.7417 3.56579 22.7417Z"
                fill="#1F62FF"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              Swift delivery
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              Increase image speed by being distributed globally through our 60+
              data centers.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex flex-col justify-center">
        <div class="border rounded-2xl">
          <img
            src="/images/Solutions/solution2.svg"
            alt="Leaf Solution"
            class="w-full rounded-2xl h-auto mix-blend-multiply"
          />
        </div>
        <div
          class="mt-6 bg-white rounded-2xl px-3 py-2 text-sm text-[#73737F] text-center"
        >
          https://ip.keycdn.com/example.jpg?format=webp
          <span class="text-black">|</span>
        </div>
      </div>

      <div class="flex flex-col gap-6 justify-center">
        <p class="text-[#73737F] text-[13px] md:text-[1rem]">
          In addition to being powerful, our real-time image processing is
          affordable. Pricing starts at $0.40 per 1,000 operations. An operation
          is counted when an image has been processed. Once an image is
          processed it is then cached at our shield locations. Our edge servers
          are then able to pull and cache the processed image instead of having
          to process the image again. This will improve the image processing
          performance and decrease the overall cost.
        </p>
        <p class="text-[#73737F]">
          Furthermore, our real-time image processing also allows for automatic
          WebP formatting. This allows you to take advantage of delivering the
          next generation image format to accepted browsers. The WebP image
          format offers superior compression over other image formats, which can
          significantly decrease size and increase speed.
        </p>
      </div>
    </div>

    <div
      class="mt-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 mb-20"
    >
      <div class="flex flex-col gap-6">
        <p class="text-[#73737F]">
          Images often consume the most resources when a page is loaded.
          Utilizing our on the fly image processing can be a great way to
          optimize your images and improve the performance of your website or
          application. Traffic pricing is affordable from the very beginning and
          no contract is required. KeyCDN can be integrated seamlessly with your
          existing infrastructure.
        </p>
        <p class="text-[#73737F]">
          Simplify your stack by combining your digital image processing and
          content delivery. Learn more about what is possible with our image
          processing API.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6982 1.2417C16.7002 1.2419 16.7022 1.2415 16.7041 1.2417L16.7031 1.24268H16.7109L24.2842 2.09131L24.2832 2.09229C24.9204 2.159 25.5216 2.41275 26.0107 2.8208L26.2148 3.00635C26.7375 3.52487 27.067 4.20759 27.1475 4.93994L27.9805 12.5142L27.9814 12.5161C28.0872 13.4907 27.7474 14.4616 27.0566 15.1577L27.0537 15.1606L14.9229 27.2769L14.9219 27.2759C14.323 27.889 13.5006 28.2312 12.6436 28.2231L12.6445 28.2241C12.6419 28.2241 12.6393 28.2231 12.6367 28.2231C12.6322 28.2231 12.6276 28.2242 12.623 28.2241V28.2231C11.771 28.2224 10.9547 27.8822 10.3555 27.2769L1.94531 18.8667V18.8657C1.34009 18.2596 1 17.4382 1 16.5815C1 15.7252 1.34011 14.9034 1.94531 14.2974L14.0596 2.16943L14.0664 2.16357C14.4957 1.74167 15.0274 1.45192 15.5996 1.31494V1.11768L16.6982 1.2417ZM22.127 6.6167C21.9984 6.61698 21.8745 6.66787 21.7832 6.75928V6.76025C21.6922 6.85141 21.6406 6.97538 21.6406 7.10498C21.6407 7.23423 21.6923 7.35768 21.7832 7.44873V7.44971C21.874 7.54069 21.9976 7.59172 22.127 7.59229C22.2542 7.59255 22.3753 7.54271 22.4668 7.45459C22.5587 7.36162 22.6113 7.23594 22.6113 7.104C22.6113 6.97507 22.5615 6.85129 22.4727 6.7583L22.3984 6.69775C22.3187 6.64488 22.2248 6.61647 22.1279 6.6167H22.127Z"
                fill="white"
                stroke="#1F62FF"
                stroke-width="2"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              Low pricing
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              Benefit from pay as you go billing and volume pricing as low as
              $0.01/GB.
            </p>
          </div>
        </div>

        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5527 0.922363L23.0645 24.4087L22.9727 24.7407L22.6855 24.5513L16.3701 20.3696L11.4639 25.0366L11.1221 25.3618L11.0449 24.897L9.59766 16.1685L1.2168 12.7485L0.655273 12.519L1.21582 12.2866L29.2158 0.625488L29.6895 0.428223L29.5527 0.922363ZM14.3037 17.5806L22.2559 22.8452L27.5762 3.58447L14.3037 17.5806ZM12.707 22.2134L15.3535 19.6968L13.7363 18.6265L12.707 22.2134ZM10.7822 15.9995L11.6836 21.4458L12.6924 17.9351L12.4697 17.7886L12.6738 17.5728L23.1826 6.48975L10.7822 15.9995ZM3.75781 12.5083L10.042 15.0728L24.8252 3.73389L3.75781 12.5083Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              Fast platform
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              Configuration updates only take a few minutes to be deployed
              across the globe.
            </p>
          </div>
        </div>

        <div
          style="
            width: 432;
            height: 104;
            gap: 16px;
            angle: 0 deg;
            opacity: 1;
            border-radius: 20px;
            border-width: 1px;
            padding-top: 17px;
            padding-right: 24px;
            padding-bottom: 17px;
            padding-left: 24px;
          "
          class="bg-white flex gap-2"
        >
          <div class="pt-1 w-12">
            <svg
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5527 0.922363L23.0645 24.4087L22.9727 24.7407L22.6855 24.5513L16.3701 20.3696L11.4639 25.0366L11.1221 25.3618L11.0449 24.897L9.59766 16.1685L1.2168 12.7485L0.655273 12.519L1.21582 12.2866L29.2158 0.625488L29.6895 0.428223L29.5527 0.922363ZM14.3037 17.5806L22.2559 22.8452L27.5762 3.58447L14.3037 17.5806ZM12.707 22.2134L15.3535 19.6968L13.7363 18.6265L12.707 22.2134ZM10.7822 15.9995L11.6836 21.4458L12.6924 17.9351L12.4697 17.7886L12.6738 17.5728L23.1826 6.48975L10.7822 15.9995ZM3.75781 12.5083L10.042 15.0728L24.8252 3.73389L3.75781 12.5083Z"
                fill="#1F62FF"
                stroke="#1F62FF"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div>
            <h2
              class="text-[1.125rem] md:text-[1.25rem] font-semibold text-[#1a1925]"
            >
              No commitment
            </h2>
            <p
              class="text-[#73737F] mt-1 text-[13px] md:text-[1rem] leading-relaxed"
            >
              No contract required, allowing traffic volume to scale up or down
              at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AccessAllFeaturesSection class="mt-10" />
</template>

<style scoped>
p,
ol,
ul {
  font-family: inter;
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
