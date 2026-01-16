<template>
  <div
    class="min-h-screen  relative overflow-hidden"
  
  >
    <main>
      <section class=" mt-[4.25rem] mx-auto max-w-6xl px-[57.5px] lg:px-4 xl:px-0">
        <div
          class="flex items-center justify-start sm:justify-center"
        >
        <SectionsUpername name="Tools" />
        </div>

        <h2
          class="text-left sm:text-center mb-4 sm:mb-6 text-[32px] md:text-5xl"
          style="
            font-family: 'Bricolage Grotesque', sans-serif;
            font-weight: 500;
            letter-spacing: -0.02em;
            vertical-align: middle;
            color: #1a1925;
          "
        >
          Tools
        </h2>

        <p
          class="text-left sm:text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-[0.875rem] md:text-[1rem]"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.011em;
            color: #51515e;
          "
        >
          Troubleshoot website, network, and CDN issues for fast resolutions.
        </p>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 ">
          <h3 class="text-left text-[1.5rem] md:text-[2rem] section-heading" style="margin-bottom: 16px">
            WEB
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-[0.75rem] max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 "
        >
          <NuxtLink
            to="/web/websitespeedtest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative  z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
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
                  "
                ></div>
                <!-- Agility Icon -->
                <div class="relative bottom-1 z-10">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="34"
                      height="34"
                      fill="url(#pattern0_18486_10133)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_18486_10133"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0_18486_10133"
                          transform="scale(0.0111111)"
                        />
                      </pattern>
                      <image
                        id="image0_18486_10133"
                        width="90"
                        height="90"
                        preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEUlEQVR4nO2cy2tdVRTGf42iA0OLjZqXBFQUQUyc1AcoYk1EEAs+6lgcKNqBj7zaJhUFtS1ibdORneg/IDiyaBUciNVGRK1jq7aiYlp1oLZJ65INK3C5nNxz9j57n7PvvfuDD8K995y11pd91n6tfSAhISEhISEhISEhISEhISEhISQ2AOPAM8BB4EPgOPA9cAZYVp7Rz8x3HwALes243iOhCRcD9wF7gWPAeUBK0tzjC2APMAFcRBfjJhXiFw/C5vE08BZwJ12CdcAW4PMKxF2LR4EH1ZeOwzpgK/BtjQI382vgUToI12tnJZHyE01jbYtLgd06QhAPPAfMAEPKWf3M171fBS6hzXAd8KXnljebYWfWs41F4FraBI8BfwV4xIcybA0FsPMn8AiRw7Sw/wIEL2sIPRzIlonhJSIdVewvOJHYBYwAVwPzFhOUrNSxveC1xsac2hxRH4rY3RfTMLAHeKdgwDsyrp+z6LBmHTvDuRJ2345F7CItWZQDFeXZInYHLa5/g5qx0zLg/ox7DFQgtA+7ZmhZ2+jCtuObzrjPTAVCT2XYnba8h4n1YWoYJ7sM4VaASeBKYKP+vVKB0Kt2N6rtKUe7fwDXVDnj8z0ZkTbiYlUzyN0RBCs185XQIt8AnI0gUKmZZlh5Y0ihP44gSImER0KJvDWC4CQyPuRbZDMz+mYNY+d1xtevnK5oJCGBuKwxXKVj7Z0tputf+Z41bmnhmFk3aMZkBIKJI5/PiGdXi98/4FPoVnt8ZqGmGVdEIJg40oy1mzHS4vef+RL5lhzHul1oAUZ9CL0vx4hZ6uyk1DGZEc+LOde87qO45deCa73D2hnOtHlnuKKdYb/GVGTN/OeyRToTEQQuHrgEPKejiH7dMPBREdXIzWWE3huBSFKCF7RCqS8jth2ebZlddGcci0AscaTxfVOL2GwW/otWQDlhQ4DHSypKE0/qFhsVCm1y+3oXoccjEE08pQkqSB3OeXpbBOKJpzTRCNPSnw30tD7tIvRCBAKK8l/dBL4VuAy4XEtwDxVME6vYFLjfMT5aI5bCxJMeZl59mlYuBPb1sItzxyNpyaMlBO7RFr9Ukb+mLNkaP9RQ1Sk+HsWGNLHowQebeE+4OLpUY1WnKE1OdkkThzymCZt4jWbWOFdzVacAvZY+PxUgTdjEeza00MMRCL0+kA828RrNrHE6QFWnBEwdtwfywSbeJd+doWtVp1jygIW/BwP5YBOvU2f4XSDHxYIm540V3AUK9c8OPrw7HIHjohOWsRyRT0Xgp+H7LkIfiMBxaWjZC5qHe5V3aLqIoSWv8s1OX1SSSOi0qLQ5AselzXiPi9C9Hg9jShdwWVcWnXA0ggCkTfgpJfBaBAFIN9RM3x1BANImvIuS67k/FSygGdAKTNfzIRJRrp1sqCadK7Dt9aPFLs+a2ONwWLLTSsLmc64xx01K4+YcI6nIEX/v+/ioi4TusxTa6xGLCctC9KkIBBNHvmBZiH4vnrGY0xkOKjulmnRQOd9iW8y88s077o9ABImM5n19QfBeBMFJJHyXgDCdwt8RBCk1858qzoRvD1zu5QvmXrfpurrv076VvFKix+MJ2pO+DtrkYExt+fD5iI9ZYFGYTcrfPbTk0aocVrHLtuzfdCRSKSZKrlfvr9rhkhWyyyHGzEXxRMXlXmXhWvth3j7zODXj5YrKvXyg19HXKN+Bl5CQkJCQkJCQkJCQkJCQkEBN+B804GOo7z3GhAAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Website Speed Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Full page speed test to get detailed insights on how a website
                performs.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/web/performancetest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
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
                <div  class=" relative bottom-1 z-10">
               <svg width="31" height="31" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="34" height="35" fill="url(#pattern0_18486_10137)"/>
<defs>
<pattern id="pattern0_18486_10137" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10137" transform="matrix(0.0111111 0 0 0.0107937 0 0.0142857)"/>
</pattern>
<image id="image0_18486_10137" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2ZTYhNYRjHf25jpkTKQiiSshAWajZiQViyU2RvY0FKVmQ5yMJG2UlWiiVJjMTCxsfCYkopmYuUbxmfj069appm5t733td5/+ec51dndc997vv/9c6c93kOOI7jOI7jOI7jOEm5DrSBp8A94DJwFjgBHAR2A5uBtcAyoJX255vDFsAirgngJfAYuAFcAo7lDlEV7kTKnnodyh2gKmztQ/JzYCh3gCbs6r25F96EXf3IH47xFCeLT5Git/XwO41lfTjSxe7ma7kXXhXWBMF/epD8G9iQO4A6K4HzwK8+ThoXcodQZnno+Cb6PDN/A1bkDqPIkh4Ev5/ls1O5A6mxKMwrPkYI/gyMAAuB29N8/i7UdYD5wNEOu3Lq9TXs+sWT6mya5r7DGXPJMATsB15HCP4eHoxLZ6g5Ounexrfac4Pg8QjBP4CLwKoumph/39lHQ2mFWfGzyPNvcXZeHfE7o2Ek2rhWuxUGOWMRgoum5EoY3vcyr95Bw9gOPIw8994EhnMvvCoU/yvvRgq+HyZyThdsBG5FCn4A7My98KowHF6axgh+AuwC5uRePDAInAwvfWda73hojop7S2cdcDVyojYG7BE7FYxErL+4V3qi9iKcnwfQY7adPPV6VVazcQb4GbGwNnAg159cl1jk9d85HbGYt8ARYB76yIl+08UiPgDHgQVUB1MTPdsA6Et4UFRxLGlqoqd7Ok+EkWUxsK8qpiZ6IMhuh919riaviUxNtBqDiRoNF11So+GiS2o0XHQHUgly0R1w0SVhLroczEWXg7nocjAXXa1Gw+oqekSs0ait6LZYo1Fb0SYmyEXjovvCxAS5aFx0X5iYIBdNQ0XXtdEwNdF1bTRMTXRdGw1TE60WzMTqJEMtmInVSYZaMBOrkwy1YCZWJxlqwUysTjLUgplYnWSoBTOxOslQC2ZidZKhFszE6iRDLZiJ1UmGWjATq5MMtWAmVicZasFMrE4y1IKZWJ1kqAUzsTrJUAtmYnWSoRbMxOokQy2YidVxHMdxHMdxHMdxHMeh7vwFyKXyl1/mTAcAAAAASUVORK5CYII="/>
</defs>
</svg>


                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Performance Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Asset performance test from multiple locations to get detailed
                speed metrics.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/web/httpheaderchecker"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
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
                  "
                ></div>
                <!-- Reliability Icon -->
                <div class="relative bottom-1 z-10">
                  <svg width="31" height="31" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="25" height="22" fill="url(#pattern0_18486_10139)"/>
<defs>
<pattern id="pattern0_18486_10139" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10139" transform="matrix(0.0128889 0 0 0.0146465 -0.08 -0.159091)"/>
</pattern>
<image id="image0_18486_10139" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2aQW7TQBSGv0CgwAJxAO7R7JEQl4EuyQmAHSpUiLicgxwBuoMjIIEEK6AQ2NVo1FlEyGPFzstk/Px/0ttEyszz5/Efx2MQQgghhBBCCCGEGBc3gCPgDPgN1Crq6OI98Ag42FbyXeBjAQdVF14foqveK1mS6SS718o+KqD5emD1sI/oswIarwdW7/qI/lVA4/XAKjjrzL6brgdaEo1E46kkGonGU0k0Eo2nkmgkGk8l0Ug0nkqiGZhocYlEZ0KiMyHRmZDoTIxO9JU9zTsK0deBV/Hdir/AG+BW5h5GIfp5Q1+LzD24Fz0Ffjb0FT7LSdGiD+IlvwL+AFWPS/4w0df3lu+EOU7jnGHuE4PXuIoW/bphvPBZFx4n+lq2fGdhMO9gRN8HLgzehVgm+gonIEXTy5kXsSdXom8DnxLj/QAmHfL5PDFOiJQmJolMr2NPoTc3oquW8Y4N8vk8noQUxy3zh95ciL6XiIxQn4E7HcaaJ8Z5u8UVFXp7MHTR1ge47JHPuzjhxYk+bRln0XGsPvncJcKqoYq2XkGzxFjhruXaHq6wIkTvIhPnPfN5VwugCNGWkWGRz7uIkL2Lto4Mq3y2vuJcip4Z5LM70da/7pb5bBltRYgu6f7Z9Y+h5QFNDfPZ3e2dZYTMDPPZ8m6oKNEWK2hulM+u/4JbHODSIJ/dP1Ta9jHp1CifXxhEmOsH/4c9nz+vM2k5We4e/PfdyuqzP9jEaixbWW2bs1WG++dqTJuzxC3+k7jCVlHATdJ8M8jn9dcNVnGj9mV828mt6HU22ZD9msj0TfP5fzbdBHYlehOeNcz/hDJwJXoaZYeV/QV4ClylDFyJLhmJzoREZ0KiMyHRmZBoL6JVtJZEI9F4KolGovFUEk2hooUQQgghhBBCCCEYGP8APqEa1dG0j/YAAAAASUVORK5CYII="/>
</defs>
</svg>

                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                HTTP Header Checker
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Single asset request with curl to get the HTTP response headers.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/web/http2test"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <div class="relative bottom-1 z-10">
                 <svg width="31" height="31" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.374 2.73071C24.1902 2.73081 24.8545 3.39494 24.8545 4.21118V7.02954L24.8447 7.13599C24.797 7.37589 24.584 7.55368 24.332 7.55396V7.55493C24.0415 7.55493 23.8069 7.32101 23.8066 7.03052V4.21118C23.8066 3.97437 23.6128 3.77954 23.376 3.77954H1.58008C1.34327 3.77954 1.14941 3.97437 1.14941 4.21118V7.03052C1.14919 7.32101 0.914574 7.55493 0.624023 7.55493C0.333553 7.55484 0.0998304 7.32096 0.0996094 7.03052V4.21118C0.0996094 3.39489 0.763782 2.73071 1.58008 2.73071H23.374Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M24.332 6.50574C24.6225 6.50598 24.8564 6.73961 24.8564 7.03015V21.7675C24.8564 22.5838 24.1921 23.2479 23.374 23.2479H1.58008C0.763782 23.2479 0.0996094 22.5838 0.0996094 21.7675V7.03015C0.0996094 6.73946 0.333336 6.50574 0.624023 6.50574H24.332ZM1.14941 21.7684C1.14963 22.0051 1.3434 22.1991 1.58008 22.1991H23.374C23.6107 22.1991 23.8045 22.0051 23.8047 21.7684V7.55457H1.14941V21.7684Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" fill="black"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" stroke="black" stroke-width="0.2"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" stroke="black" stroke-opacity="0.2" stroke-width="0.2"/>
<path d="M3.60059 4.48474C3.96373 4.48482 4.25781 4.77881 4.25781 5.14197C4.25774 5.50506 3.96368 5.79912 3.60059 5.79919C3.23742 5.79919 2.94344 5.50511 2.94336 5.14197C2.94336 4.77876 3.23738 4.48474 3.60059 4.48474Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M5.80371 4.48474C6.16685 4.48482 6.46094 4.77881 6.46094 5.14197C6.46086 5.50506 6.1668 5.79912 5.80371 5.79919C5.44054 5.79919 5.14656 5.50511 5.14648 5.14197C5.14648 4.77876 5.44051 4.48474 5.80371 4.48474Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M8.00098 4.48474C8.36412 4.48482 8.6582 4.77881 8.6582 5.14197C8.65813 5.50506 8.36407 5.79912 8.00098 5.79919C7.63781 5.79919 7.34383 5.50511 7.34375 5.14197C7.34375 4.77876 7.63777 4.48474 8.00098 4.48474Z" fill="black" stroke="black" stroke-width="0.2"/>
</svg>

                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                HTTP/2 Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Verify if a URL is delivered through the HTTP/2 network
                protocol.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/web/brotlitest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                    border: none;
                  "
                ></div>
                <!-- Integrity Icon -->
                 <div class="relative bottom-1 z-10">
             <svg width="31" height="31" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="18.8929" height="25" fill="url(#pattern0_18486_10141)"/>
<defs>
<pattern id="pattern0_18486_10141" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10141" transform="matrix(0.0164251 0 0 0.0125926 -0.23913 -0.0666667)"/>
</pattern>
<image id="image0_18486_10141" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4nO3dO2sUURjG8X8UvKC1iOYLBFTEgIVgsSDRQlPrB7ARNWUKGxEV0toFoghiY2NhpRYGRSUgRA0pFBsRL3hF4nVBjwwMuBzOZmdmd/Ke8877wFOdnZM5v92dXWZ2N2CxWCwWi8WSUtYBE8Ac8A1wgv0N3Ad2oyzDwBNhXBfoT2AMRY/kGJGdNuyJCDBdE7DnIoB0TcBeigDRdfS7VmwXWff2uPN/AQdJMC6yohU7RmiV2LFCq8OOGVoVduzQarBTgFaBnQp08tgpQSeNnRp0stgpQieJnSp0ctgpQyeFnTp0MtgaoLO0CpxiFb0G6SLrlhqxswu+YnGRdbLP9SyHnV1dF4s0rAtgTNb4yBaLa1jFIr1wZ9A6KxbphTuD1lmxSC/cGbTOikV64c6gdVYs0gt3Bq2zYpFeuDPocJ8Bjwq27W3rj//o8jey79A8Be4Ct4DbwD3gY5OgWyXmfuNtO+SNLwTmP9djzhHgAvDHoPuDPkWxjOWXqAwaeFsjdJaTmqFvANOBjnrz7ghsWwV6P/ASmA1c81sLfNAK7QL9Amz05r00IOgjHWMZ6npv/FqToKe8OTd3OX72C511nzc+1RTodv7N286c6XLbQUAf9sbPNwX6qjdf9tR+XyP0Hm/8YlOgR735ji5z236hF4FV3vhiE6BnvbmGeiy8CvQh4BVwPXCI2gX8bQL0uDfXgR63H+T76NX5HV12n8VSFfl54Gl8c4Wgs19kuFJxv5ODPubNs63A07hf6A35MbvscTlZ6E/5ojszU2C7KtCt/OzdfP5xsarASUKf9ebYlH8stg5o/+1dY6DbgVf/0wW3NegSvRw4sfPOoHun7I7u9Lbf3uVs3nTgfIdBF+ydknN/Nuj/KbOTMyXnNuiOGPQKpcxOvs7f0xatfxXcHw99Ze2Fd5uFJkI7BTVoDFpVDRqDVlWDxqBV1aAxaFU1aAxaVQ0ag1ZVscT20/Ouxn6VhE7lnym4AfShJHSVrye4RHtcEjq7iv04AgRXc7MP4KxBOMPKseeBrUSS7JF9Ij+OaXiBXAIe5IcL8UeyxWKxWCwWC4XzD5O0FbmWTEpIAAAAAElFTkSuQmCC"/>
</defs>
</svg>

                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Brotli Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Verify if a server supports the lossless Brotli compression
                algorithm.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 ">
          <h3 class="text-left section-heading" style="margin-bottom: 16px">
            NETWORK
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-[0.75rem] max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 "
        >
          <NuxtLink
            to="/networks/iplocationfinder"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Agility Icon -->
                <div class="relative bottom-1 z-10">
                 <svg width="31" height="31" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="34" height="33" fill="url(#pattern0_18486_10143)"/>
<defs>
<pattern id="pattern0_18486_10143" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10143" transform="matrix(0.0107843 0 0 0.0111111 0.0147059 0)"/>
</pattern>
<image id="image0_18486_10143" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdUlEQVR4nO2cTWhdRRTHf1YbUWMViqhU7MZW7aJPEKoFqVDauNOqYKkrwcSqxbpxIbgRbLEL2yZxK26sH2tdlKxVRKVq1+JCY0EwLVjT9CvkysAJyCP38525M+fe+cF/k7x3z8z/zZ175utCIpFIJBKJRN+5B3gRmAHmgF+BC8A10QX525x85oB8J1GBjcBh4Ecga6gfgDfkWokh7gOmgUsjGDysReAksGk4WB9ZD7wJ/Kto8LDcj/cucDM95UHgF48GD+tnYCs943nPrThPF4Fn6QkvAdcDmLyqZeBVOs7BgAYPy2Umne0uliMw+P8tex8d4wHgnwjMHZZ7TjxERxhrObuoq58kzTTP2xGYWaa3MM4mGaFlkct1IfdimOkITMwq6jhG2ag8d5F51qLViajDEZiX1dQhDDLKVGcWSN9jDPdgWYnAuKymXJnvxhAHlA24LA/WHcBtosdkZeWKcqz9GGJGseLzwPaCWAP5jFY8t1hghjnFlry9QryBYss+jSF+U6r0dI2Ys0ox3YKvGc4rVXpHjZiPK8VcwBBXlSo9XiPmuFJM1wWZYSmA0RuUYrrRrBnmDXcd8xjirFKlZ2rE/FAppps7N8NXiv3loEK8RxSfC19iiHeUKp3JrTwoMflPxXiu7GbYrVjxTFr2rPTD46Kd0l1oteRVubKb4VbZrJIZ00Upuyk+jsC4rKY+wiBPRmBcVlNPYJTvIjAvq7Gv+gaMYqlV78Y4pyMwsVNTo3lsjjwDcVvV7qcjHIzA0DxN0TE+j8DUYX1GB7kFOBOBuas6K4u8nWSz8kJqU81LWTrNFuCvgCb/DWyjJwzk5GuIDONResbOlrf0uuW1XfSUp2Tvhm+TL0sss6yXfcULBXvZDpVcY0JxMTevJbsYRbxesFfQ9ekfhD5+cbJCRVeAyZLr7PVk9pJcu4iXK27IPEEgNtTYaL5Swexdyqdpncl7SmK+UONInrvenQRgqmbFlyvs1JxQ2kN3pUJ3UcfkoMP1bxoYcK3CWeznRjzCfL1CjH1SlrrXdnVula0jbDS/CjxT4eHU1OjXSq799AgLuittvyHhaE5B/gDWKcWYbWCE+44Grg6/58RwdW+FdWLoWoU4ohjnJjlTUtXkM3JKV4v3cuK4PSQ30gJ7C24rN4+hycMVBzRLHs50bynoHstSRhU+bflBcaKC0W5A4YOvc+KdwjN3FAwsfKU+d5XMiSzKZ3wwWXAHOS+88UqgZP6LAqPdyk2IQdlUiNzZ9620v8BoN/DwySctd5VBHw7bCoz2/WKTPW3HPhow3bm9oLLufz4pyqmPWM2diziX8yO3QWs5dZu5cx7H1oj/Pu3QWrfZdu68FmNi9jnRMeWRYNOc2nljO8WJjEnfqW2o3Dk2vDe4bwPlzjHiLacOPrESGd5y6pC5c4x4yaljyJ1jRD2nnii4TZLQ605PRVDwzJgaJQghNiFmxrUQ8i0yWY/UyOjjERQ8M6ZG28bG5IupZVOq8+JVm3MviUQikUgkEolEIoEK/wHfSXVwQu7/ngAAAABJRU5ErkJggg=="/>
</defs>
</svg>


                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                IP Location Finder
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Lookup an IP address or hostname to get the geographical
                location.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink
            to="/networks/dnschecker"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
               <div class="relative bottom-1 z-10">
           <svg width="31" height="31" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="-5.66602" y="-3" width="35" height="35" fill="url(#pattern0_18486_10145)"/>
<defs>
<pattern id="pattern0_18486_10145" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10145" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10145" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlUlEQVR4nO2ca4hWRRjHf+6aFmWQdLHLdjG6XyxLKtIyKxGyC14rs5spkUFmpRJEdAOLjEytIKgPWRFEQdoFtwuVpealLT9E4Ycu1mrurlak2apvPPC8cBjOzJl59+h7zu784PnyOmfOnL+zM88888xAJBKJRCKRSCQSiUS86Q0MAaYB84GlQAuwCegAKmod+luLlnkWmAqcr3VEUjgGmA58APydELNW+0vrukvr7tH0BSYBnwB7chDXZlL3x8CN+s4ew8HAbKB1L4prs9+BWUA/ujH76bi7qQ4Cm9am/9ndroefCawtgMCmrQfOpRsgs/+DwM4cRFkHjAUOVRsHfJNDvf8Cc4BGSsoJwMqcet4CHXpM5Lfnc3rHV8CxlIxLgC2eH7g6o8eLL53FQsfzO/UdPm3ZCJxNSRjjOVSsAa4CpjjKLAMaPN4pZZod9dyu71rj0a5twAgKjviqnRkf0q7leums/6uj3NEB75aFyVZLXb8AffSdk4wVpu2vYAIFZbhHT15mrNRuc5SVlWIo9zjquzlRbgCwJKOt/wFXUjBkXPvT0ehdKoL0qCQtlvI/Wia/LKTXbrDUKR5KEmnLDG2baxgR17QQHAX8nOE+jU957gLHM7d2oT2uMV8CTibXAtszJsgm6oz4niscjZSxcJjlWZtb1trFFdv+wGaHm5jGMMf4LvZlvf3sWY7Gbddea1vItFuee4Su87il7i0OwS7M6Nn3UydOBXY4ImY3OJ69zPFBJ+fQtpMc9YuPb0NWnrsdQ+AZ7GPEb13u+BhZ0rp4xvLcqhzbaFukzMt4brbju1aWeakeiUQikUgkEolEInuVI4DzLDZIA/gS7AnhcGCgWtZeXlOirNgBHvU36k6KbB4/p0EuibNc4/l8XbjPsWytqHVqFGy6Z3TudSN2crWj7PfGu0Zm1D02I7TboUGkxjIKXUnYDx7Bo6TQ1aSXphyEvjugnYtTNitKJXQF+E2HB1+hxb6wZIr6Cj1Qo3DJsjs1/2+pJY4te4yFFbpNd1XG617dQkuWqPSYEKErGmuuVeiHjHLtGlKtImPzm0aZTymw0LKzbXJiyo53pyOt1ia0xIuvqFHo14xy76aUOU5TF6omwpdK6Or+nO/+oE3o6naXeDqhQi9O2XwdSonwFbohJadiQQ1CV7S3NQQKfa8j2XERcEfRM5V8hUZdvGTZN/AT+lXN5E/+Jj5wiND9HRu3ZsLNfN3hL63QzUbZtz2FnqMegDnGDw1074aox1PxsD+K1sNDhF5nlH05QGjhlZR3tQUIjWb8T9NzLq6d77TEm1IIfVCKH/twoNAHpvTgSqDQSXprmECEf8uSO5h0AUsh9IwAUWxCo8LsyElok5Ep9Y0ok9BjgH9S3DTJlwsVGo2ZhAjdSw8LdSQsTcABKfUNpqBCi3cwF3hSx+BvLYLMdNSZJTQ6kYb0aNPj+UnLVoNHx+tS3PS1+5Y51vFhRpK5j9CHWKJwNqHHWdrSmeI6Vu1RCkSI0LuBFz16iY/QwsUpE5hrjJ4b0NZ3HENbXZhujH1Ja9ew6GfAY8BpnnW+ZNQjE6mNOUZZye1zMQr43HFid70myRcqRFpm+uuEOFGPe4wKPM4RiUQikUgkEolECkiD5ljUelhonuU5ORS/tw8LPd2Fw0Ir6pG9dIpjd2KPrrRc58YrFju9jsffxmUcf8ujbTXxgOODtushSduuhrn95EqQCeUJx4FO2514F2Vsa0ngrG406s0ttsZtdfSgRZZnNteQedrVI8qXZhxRXl6EhEefQ/cTAg/dS35FrUx11Cs74CbXeRy6L8wlhWfpToStsbs0ecX3GokNNcaBQ6+RmOkYk6t/kfv8WHIWw1N2uE1rNnrHLY6yrvgzgZlIYpONfUFzy6oUF6NUmehxC00HcJP2qD6aFWTrTSH3ZDR5XvUzOWM8dt0xUiguz7iNpqImFw6O1oulbGU+8pyEGj0urxqdkryTZts8dmgKw6CAtKvVGX8F4p1kYfNgarmOTeabUiEHfL72/MBKhr1gmRz76L/l8Y5VRbjSp1ZEiKcyZnZfa1E38TC1CY58kRDbpTvjtVyWVTgGF/QS2O8c1xGV/lrj1gIIvEWDR4XK2cibfhoj8Z0s87SNGrOQrNYeQ1/genXL8hjDbbZbb5Cc2N17sG+85E7gfUcOXIiJH/+e1nmkVwt6II16S/kUvU1siS40WnVVuUetQ39bq2Xm6cLknCJE2iKRSCQSiUQikUiEsvA/DCk/7Usj5kgAAAAASUVORK5CYII="/>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                DNS Checker
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Lookup a DNS record from multiple servers to get detailed record
                information.
              </p>
            </div>
          </NuxtLink>

          <!-- Reliability Card -->
          <NuxtLink
            to="/networks/pingtest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Reliability Icon -->
                <div class="relative bottom-1 z-10">
              <svg width="31" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="32" height="31" fill="url(#pattern0_18486_10147)"/>
<defs>
<pattern id="pattern0_18486_10147" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10147" transform="matrix(0.0107639 0 0 0.0111111 0.015625 0)"/>
</pattern>
<image id="image0_18486_10147" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaUlEQVR4nO2bXYhVVRTHfzdTa0JD7eOlUkyEvox66FsCDURJDSLyaZ5KGEw0I3rQOLeHPl4KpCLUnow0VEQxUBF8SdQgBxJSKEKZVCTUypBypubEgjUQl7kz59y799n7nLN+sGC495yz1/rPPnuvvfa+YBiGYRiGYRiGYRiGYRiGYUTCzcDDwEvABuAL4DDwPXAOuAJcA1K1a/rZOb1Grv0SeBd4BXgWmEbNaQAPAKuB3cAZ4N//iejSftE2XtM2K8+dwErgK+CiJ1GzmLS9HXgVuIOKMBlYCuwABgOK287+AQ4BvUAPJeRxYDPwWwRiphlNfN0EPEYJeAbYF4FoaZd2RN/E6HgOOBqBQKlj69csSCbvoDwFnIhAkNSzfQc8EUJgyU83ekzJ0ghtGNgK3F6EwA2doX+NIPA0kMkiaQ1wgy+R79FJInSgaST2DXC3a5FlBr4cQXBpZPY78KILgW8EmjUbi9MOxm6ZryZ1KrK8FscjCCQtiR0D7sor8n3AQATOpyWz88BDWUV+MuB4PAicBHZqubNXc3VxframlZPUpuln8/SaXr1nlz4jVG3lUpacW1Z4Vwsu6vygNQZZgd2KO3o0ng80WypSeKmVL2nn2IMFOnNCc9Eiy5TS1lpdVhcR46BqOipNjw1fBT6MpPguAnwE/OkxXtFyTN5y3OAf+vpOJz6maryu56QkqwNNR+PUemAK8SOCv92yJ+mtJ7sUew8ws4ugFwJ9uhA4qFnEz1pnuK52RT+T7w7otX16b6f/3FnA3iJF7lRsyb2fz9nGBM0O3tcF0pCDXjWkC4j3VHhpI2/JYaAokfOO2bKzMiPHc+9X5846Hh9Hswva4x/N4Z/E8rXrMbmbni1pzBsZdyEaml8eCVx1W5wxbvH3zXHesq57chaxZbZ+OuP9LxSYw2bN5Zdn9H2+zgneRR5tGLmgy9/xmAPsj0DYdnZYaztZhroBH8NFO+S/eEo3AsZiIvAO8HcEYo5nf2lc4vNYSMynffbkVsY7bDKzpCXWoxnS0mgO2ixvM56lJTGZd5YROasrshszrNlGdDQ8F6TSQLYxhsMzrSuptKK2lMhwXfVLIzDvKVynVEnshMipgtgJJaHp8GT+GmARMHeUzdm5+t1ah78kKGwxElLsy8DHXRwGb+gh+E863DUpnch5xT4PvA7c4rBtedY6rclUWuQsY/aQ5qo+t7t6VMTrVRiTO+nZPwKPFOiDFP1/qmJPHkvsPbo3WDRTW/YEKyfyCBLYlhx7ePfqhus23TS4pDs6g/p3v/5atk+Ph2VB2v68yiKTQ4gVut01nCNjGNZ7XvZ5Gr8qLNTCere5sJznWxA6mBi5CfjMgcCt9qk+2wBuA771IPKIHct5DKKyrPIo8ohJGwZ+C1GVWYzELHYSOqg6iJ2EDqYOYiehg6iD2Elo5+sgdhLa6TqInYR2tg5iJ6GdrIPYSWjn6iB2EtqpOoidhHam6jStaG8YhmEYhmEYhmEYhmEYhkHZ+A/eOK8xryvLGQAAAABJRU5ErkJggg=="/>
</defs>
</svg>


                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Ping Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Ping any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/networks/ipv6test"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] h-full w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Agility Icon -->
              <div class="relative bottom-1 z-10">
             <svg width="31" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1966 4.40307V0C9.41832 0.269392 7.84846 1.93173 6.79883 4.40307H11.1966Z" fill="black"/>
<path d="M11.197 11.1701V5.42236H6.41173C5.84321 7.0997 5.49554 9.06299 5.44727 11.1699L11.197 11.1701Z" fill="black"/>
<path d="M12.2168 18.9559H16.6138C15.5649 21.4237 13.9915 23.086 12.2168 23.3529V18.9559Z" fill="black"/>
<path d="M12.2168 12.1896H17.9671C17.9203 14.2967 17.5691 16.2587 17.0024 17.9351L12.2168 17.9353V12.1896Z" fill="black"/>
<path d="M17.9671 11.1688H12.2168V5.4231H17.0024C17.5691 7.09946 17.9203 9.06144 17.9671 11.1688Z" fill="black"/>
<path d="M16.6138 4.40238H12.2168V0.000610352C13.9963 0.267719 15.5649 1.93006 16.6138 4.40238Z" fill="black"/>
<path d="M17.722 4.40303H20.8848C19.4532 2.60064 17.505 1.22727 15.2637 0.511597C16.2503 1.45752 17.0902 2.79075 17.722 4.40303Z" fill="black"/>
<path d="M18.9851 12.1888C18.9398 14.2848 18.6181 16.2353 18.0801 17.9363H21.6074C22.6714 16.259 23.3221 14.296 23.4131 12.1888H18.9851Z" fill="black"/>
<path d="M11.197 12.1888H5.44727C5.49581 14.296 5.84373 16.2592 6.41277 17.9363L11.197 17.9366V12.1888Z" fill="black"/>
<path d="M17.7205 18.9553C17.089 20.5658 16.2495 21.898 15.2637 22.8432C17.5032 22.1281 19.4507 20.756 20.882 18.9553H17.7205Z" fill="black"/>
<path d="M5.6901 4.40247H2.5293C3.96214 2.59956 5.9102 1.22768 8.14843 0.51123C7.16516 1.45715 6.32242 2.79169 5.6901 4.40247Z" fill="black"/>
<path d="M4.42975 11.1688H0C0.0889516 9.06164 0.73981 7.09966 1.80291 5.4231H5.33378C4.79499 7.12282 4.47198 9.07569 4.42975 11.1688Z" fill="black"/>
<path d="M5.33345 17.9352H1.80746C0.744364 16.2588 0.0934928 14.2968 0 12.1897H4.42975C4.47194 14.2826 4.79489 16.2352 5.33345 17.9352Z" fill="black"/>
<path d="M5.694 18.9559C6.32606 20.5667 7.16426 21.8966 8.14778 22.8426C5.90955 22.1261 3.96149 20.754 2.5332 18.9559H5.694Z" fill="black"/>
<path d="M11.1972 23.3547V18.9552H6.80078C7.85041 21.4247 9.42001 23.0855 11.1972 23.3547Z" fill="black"/>
<path d="M18.082 5.422C18.6198 7.12302 18.941 9.07355 18.9861 11.1695H23.4138C23.3233 9.06262 22.6735 7.09934 21.6101 5.422H18.082Z" fill="black"/>
</svg>



                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Ping IPv6 Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Ping any IPv6 address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink
            to="/networks/traceroutetest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
                <div class="relative bottom-1 z-10">
         <svg width="31" height="31" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="-2.66602" width="31" height="32" fill="url(#pattern0_18486_10149)"/>
<defs>
<pattern id="pattern0_18486_10149" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10149" transform="matrix(0.0111111 0 0 0.0107639 0 0.015625)"/>
</pattern>
<image id="image0_18486_10149" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKUlEQVR4nO2cWcgOURiAH8tvzS5KslwgRSjcSBEirtwga5biRhHiQtkK2VKiXCpLQnYJIbJFKSESsi/J+l/YR4ejpO+c+WbmzDfnn3mfOld/c847zz/fmXPeeWdAEARBEARBEARBEASh2NQD1gCvgaAA7R3wDfgKPAVOAyuBwUDtNEWv8ODkA0/aY2Ah0CQN0Q88OMHAs/YCGO9a9D0PTizwtG0HGrkSvdiDEwo8bheBli5E19Wy73twUkEFmroBVkc85hLQ2IXsItIK6AXMBy6XIXtH1gHnheHAzRDZE7IOMi+o6WGvRfTLtJZ+RaRWiGy1zhYcXtm3LJuaVHeQRWOE5aoelHVweeOSQbTKjQgOmWcQfcblIAK/19mlRD/LOrC80cIgWqVYBcdLve8G2YLjbbrp4UHhqA9sAD7otgVo6KjvPgbRdyig5GMlRGx11P8ig+gTFEzyUYOIaj2/JuVa0bfh9YBDIZm2pNPHaEvfvSnIlXykjPxxEtHNLI/47jr6teRCcpBAdB3DvP+3TaUA08XhMiXHFd0cOG7p8yFQRcHn5CCBaDUVjAkpvfgJDCPnkg9GlBwmWvXZERgILLfknv9t69I+0f7AEr2UegR80tvS65a8bDllZm+BTSF1E+oJ/YEYkl23o/qcnKM6na13QLYAqoFOCcvMNlviWOuB5INpSR4csUxsTok+ohz/1rJcyrLw8of+VaZy8+sGfI4Y0OyEZWZvLKJfZST5np6/U2NpxIDeA+0Tlpmtt8SzssKCrwJj9Vo6VZaVGdBn4Jy+UcYtM3ukRapNiAl1wrtSFKti2A3MArpSQboDX0oEpJIrc4G+QNNKBqT/abtjSHSVKk2NUXpdqR7XXABGZh0Q8WR7L9pX6uhCQxHtmWwR7UD2ThHtj2xvRKvy03HAFKAtNY8qYJ9B8kdfkvNdgOf/bYMHkB/ZG/GEUrndG9RMqnSq84kuqV3tU3L+jSGx3SDrwPLGJ8PcVuldX+4xZcXU3C04xPT20RCXgwiwxyB6VdaB5Y35BtH3fVl/5oUelh3VpKyDyxvXLZ9QUIUkgiOmW67qsz7lCmo6dXXBnkn2kUo8OysKQ/WO0CRbFWILjthgEX3e1SDCn+nBVDm/33JcO/33qB8ZCfRXutRbqf1CYlNLzQU6YRTEaE/0UjZsyaqe5l/RcQUJy9isNCiR0ftmSZ3W0p/ACRI2ldxqY4lrhoMxVJtmGaONIckWt4ytrJujqjo6pZ9e2F4s7+xIgGqTLeOccTSG+radickx+lNXdkXo4FD0RMs4pxyNcdIyxsSYv8SKcdqBgBchX+CKI6FUGx/y0ubLiP3Zytic0xrYFrPis1q/q6dSAWGocq3burozyhg/9HEzyxijp77qw27s5ZSxCYIgCIIgCIIgCIIgCIIgCIIgCJTiF3jPiWhYDSnMAAAAAElFTkSuQmCC"/>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Traceroute Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Trace any IP address or hostname simultaneously from multiple
                locations.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/networks/bgplookingglass"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Reliability Icon -->
               <div class="relative bottom-1 z-10">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.666 -4.19617e-05C21.2433 -4.19617e-05 23.3796 2.10965 22.8676 4.6356C22.5703 6.10211 22.1319 7.54014 21.5565 8.92924C20.3839 11.7602 18.6652 14.3324 16.4985 16.4991C14.3318 18.6658 11.7596 20.3845 8.92863 21.5571C7.53953 22.1325 6.10149 22.5709 4.63499 22.8682C2.10904 23.3802 -0.000652313 21.2439 -0.000652313 18.6666V12.9985C-0.000652313 10.9742 1.70093 9.39747 3.57106 8.62283C4.70343 8.15379 5.73233 7.4663 6.59901 6.59962C7.46569 5.73294 8.15318 4.70404 8.62222 3.57167C9.39686 1.70154 10.9736 -4.19617e-05 12.9978 -4.19617e-05H18.666Z" fill="#EEEEF0"/>
<path d="M21.2715 7.80051C19.6908 6.20965 17.5913 5.33325 15.3571 5.33325C13.1239 5.33325 11.0254 6.20965 9.44661 7.80051C7.86688 9.39138 6.99706 11.5069 6.99805 13.7581C6.99805 16.0084 7.86682 18.1238 9.44661 19.7147C11.0254 21.3065 13.1249 22.182 15.3581 22.182C17.5914 22.182 19.6908 21.3066 21.2715 19.7147C24.5307 16.4295 24.5307 11.0848 21.2715 7.80045L21.2715 7.80051ZM15.359 20.7165C13.5146 20.7165 11.7809 19.9933 10.4766 18.6781C9.17136 17.3638 8.45361 15.6169 8.45361 13.7583C8.45361 11.8998 9.1713 10.1519 10.4766 8.83765C11.7809 7.5234 13.5146 6.79925 15.3581 6.79925C17.2025 6.79925 18.9384 7.5234 20.2436 8.83765C22.9347 11.5512 22.9347 15.9656 20.2436 18.6784C18.9382 19.9934 17.2034 20.7165 15.359 20.7165L15.359 20.7165Z" fill="black"/>
<path d="M10.9375 13.1721C10.9909 12.7716 10.7106 12.403 10.311 12.3492C9.92123 12.2954 9.54779 12.5778 9.49538 12.9805C9.25285 14.8313 9.8659 16.6505 11.1769 17.9728C11.3184 18.1153 11.5046 18.1878 11.6908 18.1878C11.8761 18.1878 12.0633 18.1165 12.2048 17.9737C12.4889 17.6874 12.4889 17.2234 12.2048 16.9371C11.2179 15.9392 10.7561 14.5672 10.9375 13.1721Z" fill="black"/>
<path d="M28.7397 23.7694C27.2755 22.5734 24.6164 20.3661 23.0541 19.0654C22.7341 19.5365 22.3735 19.9869 21.9585 20.4051C21.5453 20.8204 21.0993 21.1877 20.6289 21.5143C21.9187 23.0874 24.1092 25.7648 25.2953 27.2393C25.9276 28.028 26.653 28.4656 27.3929 28.5046C27.4268 28.5066 27.4626 28.5075 27.4994 28.5075C27.9484 28.5075 28.5787 28.3589 29.2149 27.7179C29.9026 27.025 30.0188 26.3382 29.9957 25.8839C29.9548 25.1384 29.5212 24.4065 28.7397 23.7694Z" fill="black"/>
</svg>



                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                BGP Looking Glass
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Comprehensive directory of BGP looking glass servers in various
                regions.
              </p>
            </div>
          </NuxtLink>
        </div>

        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 ">
           <h3 class="text-left text-[1.5rem] md:text-[2rem] section-heading" style="margin-bottom: 16px">
            SECURITY
          </h3>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-[0.75rem] max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 "
        >
          <!-- Agility Card -->
          <NuxtLink
            to="/security/certificatechecker"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Agility Icon -->
                <div class="relative bottom-1 z-10">
               <svg width="31" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0_18486_10151)"/>
<defs>
<pattern id="pattern0_18486_10151" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10151" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10151" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>



                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Certificate Checker
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Decode an SSL/TLS certificate to validate intermediate
                certificates.
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink
            to="/security/certificatechaincomposer"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
                <div class="relative bottom-1 z-10">
             <svg width="31" height="31" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="29" height="29" fill="url(#pattern0_18486_10153)"/>
<defs>
<pattern id="pattern0_18486_10153" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10153" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10153" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVR4nO2dz2tdRRTHP77E5FWbRNBSiAg2rVjcdO3aFrWtiKGL1qIo+KO2iwr+C4W30FistlRbFIRk40KJEsW9JlaSXdtYrGBatdoIYq0Sobll4Dx4hMyde++bufe+mfnAQEn75sc382bOnDlnCpFIJBKJRCIRN2wDjgBTwAKwDPwvZVl+NiX/ZqujPnhLP3AQmAWSnOVb4ADQV/Ug6s4TwA8FBF5bFoFdVQ+mjjSBdywIvLZ8DNxV9eDqwibgewcit8s5aSNoRuVrnjguF0MWezTjerwEnAR2A9uBYSnqz3vk75YyzuwNBMZm4LxBmCvAUWAgo6XyPPCToc7TBMTmDCLPACMF6h4CPjXU/SQBMJphuZgAGl20oT57wrBe94U+k9+01JYSezqlHXWo8ZJNGayLluU21YZ5NeUE6R0bMtjJtkVu86qmvVVgDM/4oCKRFXeK9bJeu6/hEY9XKHKbk5q2J/GEfoOF8VZJ/diraX8eTziYIvInXZpweXhY04freMKsZoDKEthYYj+GNf1YwZObkURTniu5LyM+C31EM7hfZe0uE6+XjqmKN8BOnvJ5M1zQDO6ZDJ8dlF/In8A/wPtdujdP+WzeLWsGN5ZB5Jl1PqfEtn1gOYQHrGgGd6/h3nA9kVX5u2A/DqUcwbfgATc1A1SmVl6RVfmroLXxi6a+b/CEJc0AHykgsipv52xfHYa+SKlvP54wrxngeAGRZ2TtzsNESn3nfXL8f6gZZOempu4CPzeI/JX8MvJwzFCnCtLxhhc1g7wmwrmayS1DncrU84oHZWdfb7BvAF9WIPJcgW9HT/B1imlVtsjqGu0+PGXcMPiy1uRLwP14TF/KUdzGTG4YrItELh5UiIP3PArcciDycAaLJRiREfEuWRS5X47Vv0WRzQ6iPCKr2OYdwD65Tf8jw7ejJ0TepskZuSnH6nk5jLwgJpxLkR8ALufcTBfrLHLRnJFVMeHG1xxpbYn8Y87+zNXZhLOVM7IgG19VIp+q62FE3VicsSBw0lFuWdj48op8AXiMQHNGEscir4o/eX+dvXBl5YwkOUVGAsTPyjKkYj/+lZua67IJT4ppt8XnnJG7xcp4WoK8r1kW2RuyiKwEfjlj3IXyJb/uyEHUs7jIGRlw5LTvWVzkjDQdOe17Fhc5IwNxJrvPGWnGmew+Z6QZRXafM9K0dKxW5qI37HKwJk93uSa3T3zqMBJEzoiyLvIwaNlB5EWYrClnZLpAzsi7FkVO5FjtBbMpJz6VjJ6HRkqgYhGRE/FdeJ0z8lKB+hrAf11cP10OLWfk5y5yRj4qaMLtCDFnRK2zRdkoYquZfQM4ntFO3qfpixeb4YLDR0DusGTHe50z8lDJ/egHfg8xZySvtdEt3ueM1EHokZQIIm9yRqpeOhoG96k3OSO6zbAsR85EKDkjOvPuvRLabqWInNQ57qIIh1OO3y6T3Fuh5YxsTbmRVjfbLmiFmjOicypdSclYLUor5JyRZw3OeVsb0jGDyEHkjKRdyJ6w8BTlhA9B4DbYaRBCed/uKVDvEPBZ6DN5LacNglyV54IHM7538UrK05PBitwONzhnEKYzmHGPBDMOdTyAvVdMM92jIkEuF7oAmosZROq2LIYscqfY3zkUec5nEy4v8b/dqCCwxsZScsE334UrO/uAPFJtCiBPei1npK6MyfvJk3JpuiyXByu9mDMSiUQikUgkQk9yGxIluCqVivLYAAAAAElFTkSuQmCC"/>
</defs>
</svg>



                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Certificate Chain Composer
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Generate intermediate certificates for an SSL/TLS certificate.
              </p>
            </div>
          </NuxtLink>

          <!-- Reliability Card -->
          <NuxtLink
            to="/security/sha256"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Reliability Icon -->
                <div class="relative bottom-1 z-10">
               <svg width="31" height="31" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_18486_10157)"/>
<defs>
<pattern id="pattern0_18486_10157" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10157" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10157" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2cS07DMBRFLxlQgdgHpEsqYUklFR/BABixEGj2Q0NbQGISZCkjFDPBsa9f7pE8Py9Sc2pXLiCEEEIIIYQQQoiJUAA4AA9sPv9mBuAOwA7AF4AHAEfyCU8NoPu13KDyCfzx3AwM9i6fsJwNDOVWm8inJPMJRuUZ7FU+478POwCX8gnL2jPYeSKfhswnWHi2nsHcu3vqPqOHZ9cPPXUfs+G5IPMxG54VmU8w1mThySKExwBu+y/23cTWBsBNrPOQe4KBu8TLPYNRcUX+JBi0S7w+xv52ogeNOA/aoVcH4hyluhBce44Yra83AFeMPw6UHmHtCI3vCCsyn9F3hEv5xNmBLeQT5yjyVD52w1OS+ZgNT0XmYzY8NZmP2fA0ZD4mw1OQ+ZgNT0nmYzY8FZmP2fDUZD5mw9OQ+ZgMT0HmYzY8JZmP2fBUZD5mw1OT+ZgNT0PmYzI8BZmP2fCUZD5mw1OR+ZgNT03mYzY8DZmPyfAUZD5mw1OS+ZgNT0XmYzY8NZmP2fA0ZD4mw1OQ+fyJ7qpAd1W6SEt3VRBn6a4KjDxoh14d0F2Vbop3VXwX2F/IfLLfEa7IdmArqxfq2XZgTQ4X6nPfgRVkPsGYe4baJjqKnFs9GlUII5FLCJfInFxCuEDmtGR/adZ6fNzPWlmzHxiqTRiePZlPMB4HBnNn2Klg8wnGCYBnAN/9eup/MEgFm88o/yx+CB5mZD5CCCGEEEIIIYTAaPwAMJeIQzAEo1QAAAAASUVORK5CYII="/>
</defs>
</svg>



                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                SHA256 Generator
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Instantly generate a SHA256 hash of any string or input value.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/security/sslfreaktest"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Agility Icon -->
                <div class="relative bottom-1 z-10">
              <svg width="31" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0_18486_10159)"/>
<defs>
<pattern id="pattern0_18486_10159" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10159" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10159" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7klEQVR4nO2cX2iXVRzGPwvUZXbTlTkUzW6iNIOh3ZQi6k16FUFGGIixStq8cN6Y0kZmoV6YFwr+g4z+CXWjYEEwYU0zC4dgkg50VI7apsxNTZMTL3yDke6A85zzPe+77wceGL9tv/M8z2DveX/nnBcMwzAMwzAMwzCMOxgHzADmAyuADcB24ABwGDgGnAW6gH7RIOBEg8Ne75Kf7ZDfPSDvtUHee76MVYxZSR4BngMagA+Bz4B24Dfg9rDSUum2jF14+FQ8NYjHwmv2PAg8C7wB7AC+A3oUinT3qR7xvkOyzJNsqtQCbwM/ALcyKMlFUpHtBNAkmZNSB3RmUIJLrE7JnoQJwKkMQjslnZIOotOUQVinrMYURZ/IIKhT1vEURQ9lENQpq5jDR0c7pMtEVjRWNFVSJYte4fHzmhUdTqs8fl63osPpLY+f1VZ0ODV5/KyxosOp2eNnnRUdTus9ft6xosPpXY+fFis6nN73+NlsRYfTFo+frVZ0OG33+PnIig6nnR4/u6zocNrr8bPPig6njz1+ij0cVnQgfe7x84UVHU5fefx8XdWi/1EIdcjj57DSXo9Krhl+4/HzrYKfgRRF9ykEa/P4aVPw81eKos8pBPve46dDwU+xczU67QrBfvT4Oang52iKog8q7XkbCY09gMWUMjofKAQ74/Hzi4KfTSmKXqkQ7LzHT1dmq/LBmKsQrNvjp1vBT32KoostqzcSB7vk8ZP6ZMF1YDyJOJ44XF9G8/piOpmM1sThrnq8DD+pVZkL4X/UJw7nMtLzKYuukWNkboypT+Os4s4MgrvE2o0CSzII7hJrkUbRNfLhihsj+hV4ACUaMyjAZbCjNToPA1cyKMFF1mVgEspsy6AIp7hTKhl1iW4ahoAvZVNji3w9lOhmaQqZsDFy2AvAY3cZd2aCD5WKbcHZMDFy4OWesV+JOO7FHB4j8X9ejRh4hmfcR5X+wGrURFz6n+4Zd3KkMY9IpiwpLoy9EUK/7BlzeYTxenO6AI7ES5EuhjPvMtbjka4NL1IS9kcIf01W4FtFB+W10OMU24BLQ608Ts2VTCdlBlUqJistnLpR6veUz0sKzTMKS01ulHd/T1NyFkX6XxpKhbeFVITFskzvMtPfwAtUjKUK+0F8uiGeKsmCTD6/HpCluErzpPJs5A9gDmOEacBPSvPkqYwxaoE9CUv+pIw3IyF5M/L075o8otgAngB+jlDyaWC2drjcmAC8B9wMND9uTbm9tozMus+TVsUJrqe0Q5SJZfd4bKJbjjxkuyqS+7+TZjlAOVLBfwJrUz08u+o8JLOTDtk11C/nHRvke4ZhGIZhGIZhGAaj5F9MGANvZ0DgYQAAAABJRU5ErkJggg=="/>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                SSL FREAK Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Verify if a server is vulnerable to the FREAK attack
                (CVE-2015-0204).
              </p>
            </div>
          </NuxtLink>

          <!-- Integrity Card -->
          <NuxtLink
            to="/security/tlslogjam"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
                <div class="relative bottom-1 z-10">
              <svg width="31" height="31" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="-2.66602" y="-1" width="31" height="31" fill="url(#pattern0_18486_10161)"/>
<defs>
<pattern id="pattern0_18486_10161" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10161" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10161" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/ElEQVR4nO2dW4hXRRzHP1u6G2Rl3iIzokwSKgwjJYnMyIeCEnsz0nqoBx/a1S4QXWyD6kUi6MWHLhZUhOTmg29FF4pss+0CFUYUaPRgLoq60WXdJkZGqNOZObc5M2fmP1/4wrKc329+v++enfM785/5/SEhISEhISEhodcxAKwEhoER4FvgMPAX8AvwHvAa8CRwGzDbd8Ch4SpgmxJVVOAJ4CNgI3C27yS6jCuB3cDfFQXO4zHgaeBc30l1bYrYCkxaEDjLcWCD7wS7gIXAWAsCZznSy9PJUuCgA5FPcR9wET0o8tGSD7j3gU3AcmAeMF1xnvrdZnXNiRL+Dqj/op7AwhJ38gTwVMWSbbay+a3A9w/AXHrgwTdWIMTrwPkNxpgPvFEwhqzBTyNibC2YJh6wONaDBdPJI0RcJ08aRF7bwpi3G8T+HbiECLHbcHfZvJOzeMgw7g4iwxLDG5+ck9vGm5qxp4DLiAjbDNVFkwdfWVxgqEaeJ6JK47AmSVmOucIzmhgOqro8eKzUJDjpeGlzruHBeB0RYFiTnHybc40PNbE8TgR4W5OcfK12jfsNi07B4ztNcnKdwjWu1cTyDRFgXJOcj/WG8zSxyBiDx5+a5Po9VUB5sfxBBBAapngiT0x0LJ5oExMdiyfaxETH4ok2MdGxeKJNTHQsnkKcAQwBo2oVTkTKCeBTYFCVh06xAPi6AyIIx/xK5e7sTu5FkcW/xHZyZw91IFnhmfe5EHq0A4kKz9zjQujjHUhUeKbUoHX4TlJ0hEloktDExCQ0SWhiYhKaJDQxMQlNEpqYmIQmCU0XOaV2U60DLlYrcwPq5zuAXeqaJDT1+TFweYmcrwA+SUJTiy8A0yrkLa99KQlNJe6oeSpL2ryVhKYUfwZmNsh/pvLROkTgXGtBgzZOkP0PImDuMuQlTx+8ChxR3A7MwiNEwJ+KXKjJqV9zonevp12vJyEC5SZDTlsMdo/iCSLQLQLTNPksUqdohWHvtJeziCIwThUc43inhA95sKkPxxCB8TlDLhsq+LkTxxAB8QBwliaPWRU74BwC5iShyeUaQx4v13xtdwYRCEcMOVxfs+2btFmVhOY/fe90uz77DWcfyzbBcrLJUQTAIUP8T1jw/1gSGj4HTq9RM+d1OJhuqK0Xt6yzdyGFgbJ7wdWG2N812J6jWanTXf9B27W16DCfNcR9V4Gt7C6WxfwCm/Ut6uxdTGGomWcYVuZ+LbCX00oWiwpsxtusrUWANfP2Evay71MWS0rYvdhLQu+0UDOvyLFdUcJO+r6xF4Q+ZqlmXp1jf1NJ2+/VIaqohR6s0Wao7NSzpoL9lpiF3luzZs6j3CyTxboK9tZr6+MdqpmXamLsK6iZ83hvjp97KvqwWluPBlAz323po67BGn6stbqvM7iwzP2GmnmOWjuu6jOv++7DNfwcstXPb0B9BudT6FsN8b3SgRtBrnVbwQKPYu80xLWq4deLyHn/J+DHkq3sdZQx3GBL7AF1JnqPwwfkUdXQVRfPvga+xzL9/+XPX4Swbu0aww3/iMtyfC5v6FOufUeFxaqObSLKmTl+ZzT06W1PSBvoU/sumk5L1+T4XmbBr5c9IW1gvQUxTs3Rl7b0rUfO94S0AZvdcGxVHVl+SQSYsChIW5QxBo/POiBkEeWyRfBYbek7ENvkzUSCW9Rdo2uh7IMyFtkv76TI/wC9YfRvA72vwwAAAABJRU5ErkJggg=="/>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                TLS Logjam Test
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Verify if a server is vulnerable to the Logjam attack
                (CVE-2015-4000).
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- OTHERS Section -->
        <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8 ">
          <h3 class="text-left text-[1.5rem] md:text-[2rem] section-heading" style="margin-bottom: 16px">
            OTHERS
          </h3>
        </div>
        <!-- Tools Others Cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-[0.75rem] max-w-6xl mx-auto  mb-8 sm:mb-12 md:mb-16"
        >
          <NuxtLink
            to="/others/epochconverter"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Agility Icon -->
                 <div class="relative bottom-1 z-10">
             <svg width="31" height="31" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="27" height="28" fill="url(#pattern0_18486_10163)"/>
<defs>
<pattern id="pattern0_18486_10163" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10163" transform="matrix(0.0111111 0 0 0.0107143 0 0.0178571)"/>
</pattern>
<image id="image0_18486_10163" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDklEQVR4nO2cy2oUQRSGf2LM6DpOYiZCBHcJCK7i7RVcRJ/DXBxNhIAGI3GjIqiPkJsoCkJwl8smJhsj+gQKJkEXiokaHVNScIRZdFV39aW6q/r88G86VdV9Pip1OV3TAIvFYrFYLBaLxWKxWCwWS+oQgCEAawB2AAhPvQPgNYBBABXbkI8BeFsACMKyNyh2az25jJBFE2wrPXuoAMGKnH3ZBui1AgQqcvaqDdDfCxCoyNmSQeZS3dxXibziZdBg0FmIQVsSg7YkBm1JDNqSGLQlMWhLYtCWxKAtiUGXFXTZnLnyDlAUxAwaDBo+mUGDQcMnM2gwaPhkBg0GjWbvARgFUCOP0TVXyjsDeiyg7TGHyjsDuiug7aMOlXcGdC2g7W6Hyjs9dFx3qLwzoPcoOJPJqkjlnQEtHDeDBoOGT2bQYNDwyQwadjwLoCcP0EXLRQgL/glgAkCrTdBFy0UIi15SbOEzAR20ha3lWF5Y9icAfQwagW4AWAQwDKAfQAeAg+QOujZCZRoR2tsC0Js16KLlIkTIz45vA2g3iLud6uyGtL1JyajEciUXIRSeDhlPW0Lil/eeCbnHShoTpHDUDQB1TVyHATwC8JX8kK6pdDVkOJksI+gGgIGQuB4E1LsfUueiBrb8bztRNtD1CHFtBdTbjlBvVHPf+TKBnk4YVxTNKeruJ1nyCYf8w+D7GklA1zSrkbtlAH0rhbiiakpRf5vW5cZyJdfxx3CdnBR0VTMxnovB2Zlcx2JKcZloOcFk7OwWfDiluEx0RdHGU8N2tA9UtHMX/SnFZaKzijbeGLbjVK6jmlJcJh+q6lS08cHwWZzKdbSlFNeCAeyKog259DOWcMRtKcb1ij5DFxf0L59BVw3jWghpL0rPVg0dn30GfdowrkoE2C9C0qiqyfC9z59jG4kRWxTYFzT164o6z3z+wOBSnOAiwB7X1F1R1LkR50EGCwBRRLDcgh/JAPZAjC34+bgPsVEAkCKC5Tu+uKrQmNzc3ksABxTl7yie4UvcpBIo9egC7F3FjjKqWmhMHqeerILcTSnZoGd4jISq0FdnVws+Qc4ge81rEv8n4ZlmNbDli9SspMsgPoeH6qGzcEEBN+hFatq6BOCv4p57aR6mKZomNL1Lwr6W4r1GNZAFTY7eqpXWz7oxey7hSaJuzZj83+sxci3OqYsOHIatRqYM8yFV6qWq1UXzkbDjKIn6FOc0goaTZdo6n6GkUBu5k67VqUyUQ47fAJxCydRLvcvWMnKzjJCbx1NV/iFNr5dpuNBNkJMZ/QzjN43b3k98JpIHDp/Qbi0p4H3Kg3i7Tk5rorwXcbIMShA98nFbjQwlM2ryBJFcVcjEvEySfaTlmxxmJNR39LeblOqMnYX7B6/XSMb8ZML6AAAAAElFTkSuQmCC"/>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Epoch Converter
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Convert a unix epoch timestamp to a human readable format.
              </p>
            </div>
          </NuxtLink>

          <NuxtLink
            to="/others/hexconverter"
            class="relative flex flex-col justify-center md:justify-start overflow-hidden min-h-[210px] md:h-[210px] w-full cursor-pointer transition-all hover:shadow-lg"
            style="
              border-radius: 20px;
              border: 1px solid #eeeef0;
              background: #ffffff;
            "
          >
            <!-- Card Background - bgcard.svg -->
            <div
              class="absolute hidden sm:block"
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
            <div class="relative z-10 p-5 sm:p-5 md:p-6">
              <div
                class="mb-2 relative"
                style="padding-top: 4.67px; padding-left: 2.33px"
              >
                <!-- Icon Background - bgcardicon.svg -->
                <div
                  class="absolute -top-2 -left-2 w-8 h-8"
                  style="
                    background-image: url('/images/about/bgcardicon.svg');
                    background-repeat: no-repeat;
                    background-size: contain;
                    z-index: 0;
                  "
                ></div>
                <!-- Integrity Icon -->
                <div class="relative bottom-1 z-10">
             <svg width="31" height="31" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17865_5952)">
<mask id="mask0_17865_5952" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="-1" width="17" height="27">
<path d="M1.625 -0.0510254H17.9897V26H1.625V-0.0510254Z" fill="white"/>
</mask>
<g mask="url(#mask0_17865_5952)">
<path d="M16.2483 -0.0510254H3.36621C2.91055 -0.0510254 2.47367 0.131975 2.15164 0.457569C1.82942 0.783371 1.64844 1.22512 1.64844 1.68563V24.2634C1.64844 24.7239 1.82943 25.1657 2.15164 25.4915C2.47366 25.8171 2.91056 26.0001 3.36621 26.0001H16.2483C16.704 26.0001 17.1409 25.8171 17.4629 25.4915C17.7851 25.1657 17.9661 24.7239 17.9661 24.2634V1.68563C17.9661 1.22511 17.7851 0.783381 17.4629 0.457569C17.1409 0.131969 16.704 -0.0510254 16.2483 -0.0510254ZM17.1071 24.2631H17.1073C17.1073 24.4934 17.0168 24.7143 16.8556 24.8771C16.6946 25.0399 16.4762 25.1314 16.2483 25.1314H3.36621C3.13848 25.1314 2.91994 25.0399 2.75893 24.8771C2.59792 24.7143 2.50742 24.4934 2.50742 24.2631V1.68533C2.50742 1.45507 2.59791 1.2343 2.75893 1.0713C2.91994 0.908499 3.13848 0.816996 3.36621 0.816996H16.2483C16.4762 0.816996 16.6946 0.908494 16.8556 1.0713C17.0168 1.2343 17.1073 1.45507 17.1073 1.68533L17.1071 24.2631Z" fill="black"/>
<path d="M15.3889 1.68579H4.22402C3.99629 1.68579 3.77775 1.77729 3.61674 1.94029C3.45573 2.10309 3.36523 2.32386 3.36523 2.55432V6.02786V6.02766C3.36523 6.25792 3.45573 6.47889 3.61674 6.64169C3.77775 6.80449 3.99629 6.89599 4.22402 6.89599H15.3889C15.6166 6.89599 15.8351 6.80449 15.9961 6.64169C16.1571 6.47889 16.2476 6.25792 16.2476 6.02766V2.55433C16.2476 2.32387 16.1572 2.10309 15.9961 1.9403C15.8351 1.7773 15.6166 1.68579 15.3889 1.68579ZM4.22402 6.02766V2.55433H15.3889V6.02787L4.22402 6.02766Z" fill="black"/>
<path d="M5.08281 11.2378H4.22402C3.99629 11.2378 3.77775 11.3293 3.61674 11.4921C3.45573 11.6551 3.36523 11.8759 3.36523 12.1061V12.9747C3.36523 13.2049 3.45573 13.4257 3.61674 13.5887C3.77775 13.7515 3.99629 13.843 4.22402 13.843H5.08281C5.31054 13.843 5.52909 13.7515 5.6901 13.5887C5.85111 13.4257 5.9416 13.2049 5.9416 12.9747V12.1061C5.9416 11.8759 5.85111 11.6551 5.6901 11.4921C5.52909 11.3293 5.31054 11.2378 5.08281 11.2378ZM4.22402 12.9745V12.1061H5.08281V12.9745H4.22402Z" fill="black"/>
<path d="M8.51836 11.2378H7.65957C7.43164 11.2378 7.21329 11.3293 7.05229 11.4921C6.89108 11.6551 6.80078 11.8759 6.80078 12.1061V12.9747C6.80078 13.2049 6.89107 13.4257 7.05229 13.5887C7.21329 13.7515 7.43164 13.843 7.65957 13.843H8.51836C8.74609 13.843 8.96464 13.7515 9.12565 13.5887C9.28665 13.4257 9.37715 13.2049 9.37715 12.9747V12.1061C9.37715 11.8759 9.28666 11.6551 9.12565 11.4921C8.96464 11.3293 8.74609 11.2378 8.51836 11.2378ZM7.65957 12.9745V12.1061H8.51836V12.9745H7.65957Z" fill="black"/>
<path d="M11.9541 11.2378H11.0951C10.8674 11.2378 10.649 11.3293 10.4878 11.4921C10.3268 11.6551 10.2363 11.8759 10.2363 12.1061V12.9747C10.2363 13.2049 10.3268 13.4257 10.4878 13.5887C10.649 13.7515 10.8674 13.843 11.0951 13.843H11.9541C12.1818 13.843 12.4002 13.7515 12.5614 13.5887C12.7224 13.4257 12.8129 13.2049 12.8129 12.9747V12.1061C12.8129 11.8759 12.7224 11.6551 12.5614 11.4921C12.4002 11.3293 12.1818 11.2378 11.9541 11.2378ZM11.0953 12.9745L11.0951 12.1061H11.9539V12.9745H11.0953Z" fill="black"/>
<path d="M15.3895 11.2378H14.5307C14.3029 11.2378 14.0844 11.3293 13.9234 11.4921C13.7624 11.6551 13.6719 11.8759 13.6719 12.1061V12.9747C13.6719 13.2049 13.7624 13.4257 13.9234 13.5887C14.0844 13.7515 14.3029 13.843 14.5307 13.843H15.3895C15.6172 13.843 15.8357 13.7515 15.9967 13.5887C16.1577 13.4257 16.2482 13.2049 16.2482 12.9747V12.1061C16.2482 11.8759 16.1578 11.6551 15.9967 11.4921C15.8357 11.3293 15.6172 11.2378 15.3895 11.2378ZM14.5307 12.9745V12.1061H15.3895V12.9745H14.5307Z" fill="black"/>
<path d="M5.08281 14.7117H4.22402C3.99629 14.7117 3.77775 14.8032 3.61674 14.966C3.45573 15.1288 3.36523 15.3497 3.36523 15.58V16.4483C3.36523 16.6788 3.45573 16.8996 3.61674 17.0624C3.77775 17.2254 3.99629 17.3167 4.22402 17.3167H5.08281C5.31054 17.3167 5.52909 17.2254 5.6901 17.0624C5.85111 16.8996 5.9416 16.6788 5.9416 16.4483V15.58C5.9416 15.3497 5.85111 15.1288 5.6901 14.966C5.52909 14.8032 5.31054 14.7117 5.08281 14.7117ZM4.22402 16.4483V15.58H5.08281V16.4483H4.22402Z" fill="black"/>
<path d="M8.51836 14.7117H7.65957C7.43164 14.7117 7.21329 14.8032 7.05229 14.966C6.89108 15.1288 6.80078 15.3497 6.80078 15.58V16.4483C6.80078 16.6788 6.89107 16.8996 7.05229 17.0624C7.21329 17.2254 7.43164 17.3167 7.65957 17.3167H8.51836C8.74609 17.3167 8.96464 17.2254 9.12565 17.0624C9.28665 16.8996 9.37715 16.6788 9.37715 16.4483V15.58C9.37715 15.3497 9.28666 15.1288 9.12565 14.966C8.96464 14.8032 8.74609 14.7117 8.51836 14.7117ZM7.65957 16.4483V15.58H8.51836V16.4483H7.65957Z" fill="black"/>
<path d="M11.9541 14.7117H11.0951C10.8674 14.7117 10.649 14.8032 10.4878 14.966C10.3268 15.1288 10.2363 15.3497 10.2363 15.58V16.4483C10.2363 16.6788 10.3268 16.8996 10.4878 17.0624C10.649 17.2254 10.8674 17.3167 11.0951 17.3167H11.9541C12.1818 17.3167 12.4002 17.2254 12.5614 17.0624C12.7224 16.8996 12.8129 16.6788 12.8129 16.4483V15.58C12.8129 15.3497 12.7224 15.1288 12.5614 14.966C12.4002 14.8032 12.1818 14.7117 11.9541 14.7117ZM11.0953 16.4483L11.0951 15.58H11.9539V16.4483H11.0953Z" fill="black"/>
<path d="M15.3895 14.7117H14.5307C14.3029 14.7117 14.0844 14.8032 13.9234 14.966C13.7624 15.1288 13.6719 15.3497 13.6719 15.58V16.4483C13.6719 16.6788 13.7624 16.8996 13.9234 17.0624C14.0844 17.2254 14.3029 17.3167 14.5307 17.3167H15.3895C15.6172 17.3167 15.8357 17.2254 15.9967 17.0624C16.1577 16.8996 16.2482 16.6788 16.2482 16.4483V15.58C16.2482 15.3497 16.1578 15.1288 15.9967 14.966C15.8357 14.8032 15.6172 14.7117 15.3895 14.7117ZM14.5307 16.4483V15.58H15.3895V16.4483H14.5307Z" fill="black"/>
<path d="M5.08281 18.1848H4.22402C3.99629 18.1848 3.77775 18.2763 3.61674 18.4391C3.45573 18.6019 3.36523 18.8229 3.36523 19.0531V19.9215C3.36523 20.1517 3.45573 20.3727 3.61674 20.5355C3.77775 20.6983 3.99629 20.7898 4.22402 20.7898H5.08281C5.31054 20.7898 5.52909 20.6983 5.6901 20.5355C5.85111 20.3727 5.9416 20.1517 5.9416 19.9215V19.0531C5.9416 18.8229 5.85111 18.6019 5.6901 18.4391C5.52909 18.2763 5.31054 18.1848 5.08281 18.1848ZM4.22402 19.9215V19.0531H5.08281V19.9215H4.22402Z" fill="black"/>
<path d="M8.51836 18.1848H7.65957C7.43164 18.1848 7.21329 18.2763 7.05229 18.4391C6.89108 18.6019 6.80078 18.8229 6.80078 19.0531V19.9215C6.80078 20.1517 6.89107 20.3727 7.05229 20.5355C7.21329 20.6983 7.43164 20.7898 7.65957 20.7898H8.51836C8.74609 20.7898 8.96464 20.6983 9.12565 20.5355C9.28665 20.3727 9.37715 20.1517 9.37715 19.9215V19.0531C9.37715 18.8229 9.28666 18.6019 9.12565 18.4391C8.96464 18.2763 8.74609 18.1848 8.51836 18.1848ZM7.65957 19.9215V19.0531H8.51836V19.9215H7.65957Z" fill="black"/>
<path d="M11.9541 18.1848H11.0951C10.8674 18.1848 10.649 18.2763 10.4878 18.4391C10.3268 18.6019 10.2363 18.8229 10.2363 19.0531V19.9215C10.2363 20.1517 10.3268 20.3727 10.4878 20.5355C10.649 20.6983 10.8674 20.7898 11.0951 20.7898H11.9541C12.1818 20.7898 12.4002 20.6983 12.5614 20.5355C12.7224 20.3727 12.8129 20.1517 12.8129 19.9215V19.0531C12.8129 18.8229 12.7224 18.6019 12.5614 18.4391C12.4002 18.2763 12.1818 18.1848 11.9541 18.1848ZM11.0953 19.9215L11.0951 19.0531H11.9539V19.9215H11.0953Z" fill="black"/>
<path d="M15.3895 18.1848H14.5307C14.3029 18.1848 14.0844 18.2763 13.9234 18.4391C13.7624 18.6019 13.6719 18.8229 13.6719 19.0531V19.9215C13.6719 20.1517 13.7624 20.3727 13.9234 20.5355C14.0844 20.6983 14.3029 20.7898 14.5307 20.7898H15.3895C15.6172 20.7898 15.8357 20.6983 15.9967 20.5355C16.1577 20.3727 16.2482 20.1517 16.2482 19.9215V19.0531C16.2482 18.8229 16.1578 18.6019 15.9967 18.4391C15.8357 18.2763 15.6172 18.1848 15.3895 18.1848ZM14.5307 19.9215V19.0531H15.3895V19.9215H14.5307Z" fill="black"/>
<path d="M5.08281 21.658H4.22402C3.99629 21.658 3.77775 21.7495 3.61674 21.9125C3.45573 22.0753 3.36523 22.296 3.36523 22.5265V23.3948C3.36523 23.6251 3.45573 23.8459 3.61674 24.0089C3.77775 24.1717 3.99629 24.2632 4.22402 24.2632H5.08281C5.31054 24.2632 5.52909 24.1717 5.6901 24.0089C5.85111 23.8459 5.9416 23.6251 5.9416 23.3948V22.5265C5.9416 22.296 5.85111 22.0753 5.6901 21.9125C5.52909 21.7495 5.31054 21.658 5.08281 21.658ZM4.22402 23.3946V22.5265H5.08281V23.3948L4.22402 23.3946Z" fill="black"/>
<path d="M8.51836 21.658H7.65957C7.43164 21.658 7.21329 21.7495 7.05229 21.9125C6.89108 22.0753 6.80078 22.296 6.80078 22.5265V23.3948C6.80078 23.6251 6.89107 23.8459 7.05229 24.0089C7.21329 24.1717 7.43164 24.2632 7.65957 24.2632H8.51836C8.74609 24.2632 8.96464 24.1717 9.12565 24.0089C9.28665 23.8459 9.37715 23.6251 9.37715 23.3948V22.5265C9.37715 22.296 9.28666 22.0753 9.12565 21.9125C8.96464 21.7495 8.74609 21.658 8.51836 21.658ZM7.65957 23.3946V22.5265H8.51836V23.3948L7.65957 23.3946Z" fill="black"/>
<path d="M11.9541 21.658H11.0951C10.8674 21.658 10.649 21.7495 10.4878 21.9125C10.3268 22.0753 10.2363 22.296 10.2363 22.5265V23.3948C10.2363 23.6251 10.3268 23.8459 10.4878 24.0089C10.649 24.1717 10.8674 24.2632 11.0951 24.2632H11.9541C12.1818 24.2632 12.4002 24.1717 12.5614 24.0089C12.7224 23.8459 12.8129 23.6251 12.8129 23.3948V22.5265C12.8129 22.296 12.7224 22.0753 12.5614 21.9125C12.4002 21.7495 12.1818 21.658 11.9541 21.658ZM11.0953 23.3946L11.0951 22.5265H11.9539V23.3948L11.0953 23.3946Z" fill="black"/>
<path d="M15.3895 21.658H14.5307C14.3029 21.658 14.0844 21.7495 13.9234 21.9125C13.7624 22.0753 13.6719 22.296 13.6719 22.5265V23.3948C13.6719 23.6251 13.7624 23.8459 13.9234 24.0089C14.0844 24.1717 14.3029 24.2632 14.5307 24.2632H15.3895C15.6172 24.2632 15.8357 24.1717 15.9967 24.0089C16.1577 23.8459 16.2482 23.6251 16.2482 23.3948V22.5265C16.2482 22.296 16.1578 22.0753 15.9967 21.9125C15.8357 21.7495 15.6172 21.658 15.3895 21.658ZM14.5307 23.3946V22.5265H15.3895V23.3948L14.5307 23.3946Z" fill="black"/>
<path d="M4.22637 8.63273H5.08516C5.32228 8.63273 5.51465 8.43822 5.51465 8.19847C5.51465 7.95871 5.32228 7.7644 5.08516 7.7644H4.22637C3.98925 7.7644 3.79688 7.95871 3.79688 8.19847C3.79688 8.43822 3.98925 8.63273 4.22637 8.63273Z" fill="black"/>
<path d="M6.80059 8.63273H7.65938C7.8965 8.63273 8.08867 8.43822 8.08867 8.19847C8.08867 7.95871 7.8965 7.7644 7.65938 7.7644H6.80059C6.56327 7.7644 6.37109 7.95871 6.37109 8.19847C6.37109 8.43822 6.56327 8.63273 6.80059 8.63273Z" fill="black"/>
<path d="M9.37871 8.63273H10.2375C10.4746 8.63273 10.667 8.43822 10.667 8.19847C10.667 7.95871 10.4746 7.7644 10.2375 7.7644H9.37871C9.14159 7.7644 8.94922 7.95871 8.94922 8.19847C8.94922 8.43822 9.14159 8.63273 9.37871 8.63273Z" fill="black"/>
<path d="M12.8137 7.76465H11.9549C11.7176 7.76465 11.5254 7.95896 11.5254 8.19871C11.5254 8.43847 11.7176 8.63298 11.9549 8.63298H12.8137C13.0508 8.63298 13.243 8.43847 13.243 8.19871C13.243 7.95896 13.0508 7.76465 12.8137 7.76465Z" fill="black"/>
<path d="M14.5311 8.63273H15.3898C15.627 8.63273 15.8193 8.43822 15.8193 8.19847C15.8193 7.95871 15.627 7.7644 15.3898 7.7644H14.5311C14.2939 7.7644 14.1016 7.95871 14.1016 8.19847C14.1016 8.43822 14.2939 8.63273 14.5311 8.63273Z" fill="black"/>
<path d="M4.22637 10.3698H5.08516C5.32228 10.3698 5.51465 10.1755 5.51465 9.93573C5.51465 9.69577 5.32228 9.50146 5.08516 9.50146H4.22637C3.98925 9.50146 3.79688 9.69577 3.79688 9.93573C3.79688 10.1755 3.98925 10.3698 4.22637 10.3698Z" fill="black"/>
<path d="M7.65937 10.3698C7.89649 10.3698 8.08867 10.1755 8.08867 9.93573C8.08867 9.69577 7.89649 9.50146 7.65937 9.50146H6.80058C6.56327 9.50146 6.37109 9.69577 6.37109 9.93573C6.37109 10.1755 6.56327 10.3698 6.80058 10.3698H7.65937Z" fill="black"/>
<path d="M10.667 9.93524C10.667 9.81991 10.6216 9.70962 10.5411 9.62823C10.4606 9.54662 10.3514 9.50098 10.2375 9.50098H9.37871C9.14159 9.50098 8.94922 9.69529 8.94922 9.93524C8.94922 10.175 9.14159 10.3693 9.37871 10.3693H10.2375C10.3514 10.3693 10.4606 10.3237 10.5411 10.2421C10.6216 10.1607 10.667 10.0504 10.667 9.93524Z" fill="black"/>
<path d="M12.8137 9.50098H11.9549C11.7176 9.50098 11.5254 9.69529 11.5254 9.93524C11.5254 10.175 11.7176 10.3693 11.9549 10.3693H12.8137C13.0508 10.3693 13.243 10.175 13.243 9.93524C13.243 9.69529 13.0508 9.50098 12.8137 9.50098Z" fill="black"/>
<path d="M14.5311 10.3698H15.3898C15.627 10.3698 15.8193 10.1755 15.8193 9.93573C15.8193 9.69577 15.627 9.50146 15.3898 9.50146H14.5311C14.2939 9.50146 14.1016 9.69577 14.1016 9.93573C14.1016 10.1755 14.2939 10.3698 14.5311 10.3698Z" fill="black"/>
<path d="M5.63868 3.54993L5.20919 3.98419V3.98399C5.12628 4.06499 5.07914 4.17607 5.07814 4.29262C5.07714 4.40897 5.12249 4.52107 5.20379 4.60328C5.2853 4.68569 5.39596 4.73154 5.51123 4.73052C5.62649 4.72951 5.73636 4.68164 5.81647 4.59802L6.24596 4.16376H6.24576C6.40857 3.99348 6.40617 3.72263 6.24057 3.55516C6.07496 3.38768 5.8071 3.38531 5.63868 3.54993Z" fill="black"/>
<path d="M7.78693 3.54992L6.92814 4.41825H6.92794C6.84523 4.49905 6.79789 4.61034 6.79689 4.72668C6.79589 4.84323 6.84124 4.95513 6.92274 5.03754C7.00404 5.11995 7.11491 5.1656 7.22998 5.16458C7.34524 5.16357 7.45511 5.1159 7.53522 5.03208L8.39401 4.16375C8.55682 3.99347 8.55442 3.72262 8.38882 3.55515C8.22321 3.3877 7.95535 3.3853 7.78693 3.54992Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_17865_5952">
<rect width="24" height="26" fill="white"/>
</clipPath>
</defs>
</svg>




                </div>
              </div>
              <h3
                class="mb-1 text-base sm:text-lg"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  line-height: 24px;
                  letter-spacing: -0.011em;
                  color: #1a1925;
                "
              >
                Knowledge base
              </h3>
              <p
                class="text-base md:text-[0.8125rem] card-description"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: -0.006em;
                  color: #51515e;
                "
              >
                Convert a hexadecimal value to decimal and a decimal value to
                hexadecimal.
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>
      <div class="mb-12 sm:mb-8 md:mb-0">
        <SectionsAccessAllFeaturesSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SectionsAccessAllFeaturesSection from "~/components/sections/AccessAllFeaturesSection.vue";
</script>

<style scoped>
/* Section Headings - Mobile Optimized */
.section-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-style: normal;

  line-height: 24px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a1925;
}

@media (min-width: 768px) {
  .section-heading {
    font-size: 32px;
    margin-bottom: 24px;
  }
}

/* Card Description Text - Mobile Optimized */
.card-description {
  width: 85%;
}

@media (min-width: 640px) {
  .card-description {
    width: 75%;
  }
}

@media (min-width: 768px) {
  .card-description {
    width: 90%;
  }
}

.cta-heading {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.04em;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-heading {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (min-width: 768px) {
  .cta-heading {
    font-size: 40px;
    line-height: 48px;
  }
}

@media (min-width: 1024px) {
  .cta-heading {
    font-size: 48px;
    line-height: 56px;
  }
}

.cta-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.011em;
  text-align: center;
  color: #51515e;
}

@media (min-width: 640px) {
  .cta-subtitle {
    font-size: 13px;
    line-height: 20px;
  }
}

@media (min-width: 768px) {
  .cta-subtitle {
    font-size: 14px;
    line-height: 22px;
  }
}

@media (min-width: 1024px) {
  .cta-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

.cta-metric-text {
  font-family: "Funnel Display", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 640px) {
  .cta-metric-text {
    font-size: 16px;
    line-height: 22px;
  }
}

@media (min-width: 768px) {
  .cta-metric-text {
    font-size: 18px;
    line-height: 24px;
  }
}

@media (min-width: 1024px) {
  .cta-metric-text {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
