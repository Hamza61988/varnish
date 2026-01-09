<template>
  <section class="container mx-auto px-4 pt-[100px] md:pt-[0px] bg-[#F7F7F8]">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8"
      >
        <!-- Feature Card 1 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: -10;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7173 9.69434H10.4775C10.1274 9.69434 9.84375 9.97626 9.84375 10.325V18.4898C9.84375 18.8383 10.1271 19.1205 10.4775 19.1205H17.7173C18.0675 19.1205 18.3511 18.8386 18.3511 18.4898L18.3508 10.325C18.3508 9.97626 18.0671 9.69434 17.7173 9.69434ZM17.0836 17.8592H11.111V10.9553H17.0836V17.8592Z" fill="black"/>
<path d="M28.8804 8.98005C29.2305 8.98005 29.5141 8.69812 29.5141 8.34937C29.5141 8.00095 29.2308 7.7187 28.8804 7.7187H25.3611V3.8274C25.3611 3.47898 25.0778 3.19673 24.7274 3.19673H20.8175V0.630674C20.8175 0.282254 20.5342 0 20.1837 0C19.8336 0 19.55 0.281928 19.55 0.630674V3.19673L16.7595 3.19705V0.631C16.7595 0.282579 16.4762 0.00032593 16.1258 0.00032593C15.7756 0.00032593 15.492 0.282254 15.492 0.631V3.19705H12.7016V0.631C12.7016 0.282579 12.4183 0.00032593 12.0678 0.00032593C11.7177 0.00032593 11.4341 0.282254 11.4341 0.631V3.19705H8.64361V0.631C8.64361 0.282579 8.36031 0.00032593 8.00986 0.00032593C7.65974 0.00032593 7.37611 0.282254 7.37611 0.631V3.19705H3.46617C3.11605 3.19705 2.83242 3.47898 2.83242 3.82773V7.71903H0.63375C0.28363 7.71903 0 8.00095 0 8.3497C0 8.69812 0.283303 8.98037 0.63375 8.98037H2.83242V11.7573H0.63375C0.28363 11.7573 0 12.0392 0 12.3879C0 12.7364 0.283303 13.0186 0.63375 13.0186H2.83242V15.7955H0.63375C0.28363 15.7955 0 16.0774 0 16.4262C0 16.7746 0.283303 17.0569 0.63375 17.0569H2.83242V19.8334H0.63375C0.28363 19.8334 0 20.1154 0 20.4641C0 20.8125 0.283303 21.0948 0.63375 21.0948H2.83242V24.9861C2.83242 25.3345 3.11572 25.6168 3.46617 25.6168H7.37611V28.3112C7.37611 28.6596 7.65942 28.9419 8.00986 28.9419C8.35998 28.9419 8.64361 28.66 8.64361 28.3112V25.6168H11.4341V28.3112C11.4341 28.6596 11.7174 28.9419 12.0678 28.9419C12.4179 28.9419 12.7016 28.66 12.7016 28.3112V25.6168H15.492V28.3112C15.492 28.6596 15.7753 28.9419 16.1258 28.9419C16.4759 28.9419 16.7595 28.66 16.7595 28.3112V25.6168H19.55V28.3112C19.55 28.6596 19.8333 28.9419 20.1837 28.9419C20.5338 28.9419 20.8175 28.66 20.8175 28.3112V25.6168H24.7274C25.0775 25.6168 25.3611 25.3348 25.3611 24.9861V21.0948H28.8804C29.2305 21.0948 29.5141 20.8129 29.5141 20.4641C29.5141 20.1157 29.2308 19.8334 28.8804 19.8334H25.3611V17.0569H28.8804C29.2305 17.0569 29.5141 16.7749 29.5141 16.4262C29.5141 16.0778 29.2308 15.7955 28.8804 15.7955H25.3611V13.0186H28.8804C29.2305 13.0186 29.5141 12.7367 29.5141 12.3879C29.5141 12.0395 29.2308 11.7573 28.8804 11.7573H25.3611V8.98037L28.8804 8.98005ZM24.094 11.7569H22.5052C22.1551 11.7569 21.8715 12.0389 21.8715 12.3876C21.8715 12.736 22.1548 13.0183 22.5052 13.0183H24.094V15.7952H22.5052C22.1551 15.7952 21.8715 16.0771 21.8715 16.4259C21.8715 16.7743 22.1548 17.0565 22.5052 17.0565H24.094V19.8331H22.5059C22.1558 19.8331 21.8721 20.115 21.8721 20.4638C21.8721 20.8122 22.1554 21.0945 22.5059 21.0945H24.094V24.3554H20.8178V22.2476C20.8178 21.8992 20.5345 21.6169 20.1841 21.6169C19.834 21.6169 19.5503 21.8988 19.5503 22.2476V24.3551H16.7596V22.2476C16.7596 21.8992 16.4763 21.6169 16.1258 21.6169C15.7757 21.6169 15.4921 21.8988 15.4921 22.2476V24.3551H12.7016L12.7019 22.2476C12.7019 21.8992 12.4186 21.6169 12.0682 21.6169C11.7181 21.6169 11.4344 21.8988 11.4344 22.2476V24.3551H8.64399V22.2476C8.64399 21.8992 8.36069 21.6169 8.01024 21.6169C7.66012 21.6169 7.37649 21.8988 7.37649 22.2476V24.3551H4.10033V21.0941H6.08016C6.43028 21.0941 6.71391 20.8122 6.71391 20.4635C6.71391 20.115 6.43061 19.8328 6.08016 19.8328H4.10033V17.0562H6.08016C6.43028 17.0562 6.71391 16.7743 6.71391 16.4255C6.71391 16.0771 6.43061 15.7949 6.08016 15.7949H4.10033V13.018H6.08016C6.43028 13.018 6.71391 12.736 6.71391 12.3873C6.71391 12.0389 6.43061 11.7566 6.08016 11.7566H4.10033V8.97971H6.08016C6.43028 8.97971 6.71391 8.69779 6.71391 8.34904C6.71391 8.00062 6.43061 7.71836 6.08016 7.71836H4.10033V4.45744H7.37649V6.16984C7.37649 6.51826 7.65979 6.80051 8.01024 6.80051C8.36036 6.80051 8.64399 6.51858 8.64399 6.16984V4.45744H11.4344V6.16984C11.4344 6.51826 11.7177 6.80051 12.0682 6.80051C12.4183 6.80051 12.7019 6.51858 12.7019 6.16984V4.45744H15.4924V6.16984C15.4924 6.51826 15.7757 6.80051 16.1261 6.80051C16.4763 6.80051 16.7599 6.51858 16.7599 6.16984V4.45744H19.5503V6.16984C19.5503 6.51826 19.8336 6.80051 20.1841 6.80051C20.5342 6.80051 20.8178 6.51858 20.8178 6.16984V4.45744H24.094V7.71836H22.5052C22.1551 7.71836 21.8715 8.00029 21.8715 8.34904C21.8715 8.69746 22.1548 8.97971 22.5052 8.97971H24.094L24.0937 11.7569H24.094Z" fill="black"/>
</svg>

            </div>
            <h3 class="feature-heading">Optimized hardware</h3>
            <p class="feature-description">
              Each edge server is meticulously crafted with an advanced TCP
              stack, 100% SSD coverage, and much more.
            </p>
          </div>
        </div>

        <!-- Feature Card 2 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: -10;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
              <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 7.80729C31.9995 7.5881 31.8764 7.38967 31.6853 7.29972L16.2174 0.048986C16.0782 -0.0163287 15.9191 -0.0163287 15.7799 0.048986L0.312048 7.29972C0.122014 7.39021 0 7.58865 0 7.80729C0 8.02565 0.122014 8.22409 0.312048 8.31487L6.36586 11.1535L0.312048 13.9925C0.122014 14.083 0 14.2814 0 14.5C0 14.7184 0.122014 14.9168 0.312048 15.0073L6.36586 17.8463L0.312048 20.6852C0.122014 20.7757 0 20.9741 0 21.1925C0 21.4111 0.122014 21.6096 0.312048 21.7001L15.7799 28.9508C15.9191 29.0164 16.0782 29.0164 16.2174 28.9508L31.6853 21.7001C31.8753 21.6096 31.9974 21.4111 31.9974 21.1925C31.9974 20.9741 31.8753 20.7757 31.6853 20.6852L25.6315 17.8463L31.6853 15.0073C31.8753 14.9168 31.9974 14.7184 31.9974 14.5C31.9974 14.2814 31.8753 14.083 31.6853 13.9925L25.6315 11.1535L31.6853 8.31458V8.31486C31.8764 8.22492 31.9995 8.02649 32 7.80729ZM30.1651 21.1929L15.9987 27.8301L1.83245 21.1929L7.66761 18.4544L15.78 22.2582L15.7797 22.2585C15.9189 22.3238 16.078 22.3238 16.2172 22.2585L24.3296 18.4547L30.1651 21.1929ZM30.1651 14.5001L15.9987 21.1373L1.83245 14.5004L7.66761 11.7619L15.78 15.5657H15.7797C15.9189 15.631 16.078 15.631 16.2172 15.5657L24.3296 11.7619L30.1651 14.5001ZM15.9987 14.4445L1.83245 7.80757L15.9987 1.17039L30.1651 7.80757L15.9987 14.4445Z" fill="black"/>
</svg>

            </div>
            <h3 class="feature-heading">Powerful features</h3>
            <p class="feature-description">
              Every account, large or small, has access to all of our features,
              like HTTP/2, Brotli, TLS 1.3, and many more.
            </p>
          </div>
        </div>

        <!-- Feature Card 3 -->
        <div class="feature-card group relative overflow-hidden">
          <!-- Card Background - bgcard.svg -->
          <div
            class="absolute hidden group-hover:block"
            style="
              width: 148px;
              height: 148px;
              top: 8px;
              right: 26px;
              opacity: 1;
              border: 0.8px solid;
              border-image-source: radial-gradient(
                81.86% 81.86% at 100% 100%,
                rgba(26, 25, 37, 0.12) 0%,
                rgba(26, 25, 37, 0) 77.02%
              );
              border-image-slice: 1;
              background-image: url('/images/about/bgcard.svg');
              background-repeat: no-repeat;
              background-size: contain;
              border: none;
            "
          ></div>
          <div class="relative z-10 p-6">
            <div
              class="mb-4 relative"
              style="padding-top: 4.67px; padding-left: 2.33px"
            >
              <!-- Icon Background - bgcardicon.svg -->
              <div
                class="absolute -top-2 -left-2 w-8 h-8"
                style="
                  background-image: url('/images/about/bgcardicon.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  z-index: -10;
                  border: none;
                "
              ></div>
              <!-- Integrity Icon -->
           <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33984 9.75C5.33984 12.0706 6.25403 14.2962 7.8813 15.9372C9.50857 17.5781 11.7156 18.5 14.0169 18.5C16.3182 18.5 18.5253 17.5781 20.1526 15.9372C21.7798 14.2962 22.694 12.0706 22.694 9.75C22.694 7.42936 21.7798 5.20376 20.1526 3.56282C18.5253 1.92187 16.3182 1 14.0169 1C11.7156 1 9.50857 1.92187 7.8813 3.56282C6.25403 5.20376 5.33984 7.42936 5.33984 9.75Z" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0156 18.5C15.9434 18.0144 16.908 17.7708 16.908 9.75C16.908 4.40278 15.9439 1.48611 14.0156 1C12.0874 1.48611 11.1233 4.40278 11.1233 9.75C11.1233 17.7708 12.0879 18.0144 14.0156 18.5ZM14.0156 18.5V22.875M5.33854 9.75H22.6927M1 25.7917H11.1233M11.1233 25.7917C11.1233 26.5652 11.428 27.3071 11.9704 27.8541C12.5128 28.401 13.2485 28.7083 14.0156 28.7083C14.7827 28.7083 15.5184 28.401 16.0608 27.8541C16.6033 27.3071 16.908 26.5652 16.908 25.7917M11.1233 25.7917C11.1233 25.0181 11.428 24.2763 11.9704 23.7293C12.5128 23.1823 13.2485 22.875 14.0156 22.875M16.908 25.7917H27.0313M16.908 25.7917C16.908 25.0181 16.6033 24.2763 16.0608 23.7293C15.5184 23.1823 14.7827 22.875 14.0156 22.875" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <h3 class="feature-heading">Global network</h3>
            <p class="feature-description">
              Our network utilizes IP anycast and our latency based routing
              technology for leading performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Features Section Component
</script>

<style scoped>
.feature-card {
  border: 0.8px solid rgba(26, 25, 37, 0.12);
  border-radius: 20px;
  height: 246px;
  width: 262px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
}
.feature-card:hover {
  background-color: rgb(240, 240, 240);
}
.feature-icon-container {
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-blob {
  position: absolute;
  width: 32px;
  height: 28px;
  background: #ebf1ff;
  border-radius: 50% 40% 60% 50%;
  top: 2px;
  left: 4px;
  opacity: 0.6;
  filter: blur(6px);
  transform: rotate(-15deg);
  z-index: 0;
}

.feature-icon {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
}

.feature-heading {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #1a1925;
  margin-bottom: 8px;
}

.feature-description {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: #51515e;
}
</style>
