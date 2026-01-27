<template>
  <div class=" overflow-hidden">
    <main>
      <section
        class="site-padding site-margins"
      >
        <commonTitle
          upername="Tools"
          title="Tools"
          subtitle="Troubleshoot website, network, and CDN issues for fast resolutions."
          mobileAlignment="start"
          pcAlignment="center"
        />

        <div class="flex flex-col gap-[50px] md:gap-[60px]">
          <div v-for="section in toolsSections" :key="section.title">
            <div class="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8">
              <h3
                class="text-left text-[1.5rem] md:text-[2rem] section-heading"
                style="margin-bottom: 16px"
              >
                {{ section.title }}
              </h3>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-[0.625rem] md:gap-[0.75rem] max-w-6xl mx-auto"
            >
              <NuxtLink
                v-for="tool in section.items"
                :key="tool.link"
                :to="tool.link"
                class="block"
              >
                <LandingFeatures :features="[tool]" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <div class="mb-12 sm:mb-8 md:mb-0">
        <SectionsAccessAllFeaturesSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SectionsTitle from "~/components/common/Title.vue";
import SectionsUpername from "~/components/common/Upername.vue";
import SectionsAccessAllFeaturesSection from "~/components/common/AccessAllFeatures.vue";

const toolsSections = [
  {
    title: "WEB",
    items: [
      {
        title: "Website Speed Test",
        description:
          "Full page speed test to get detailed insights on how a website performs.",
        link: "/web/websitespeedtest",
        icon: `<svg
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
                  </svg>`,
      },
      {
        title: "Performance Test",
        description:
          "Asset performance test from multiple locations to get detailed speed metrics.",
        link: "/web/performancetest",
        icon: `<svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="34" height="35" fill="url(#pattern0_18486_10137)"/>
<defs>
<pattern id="pattern0_18486_10137" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10137" transform="matrix(0.0111111 0 0 0.0107937 0 0.0142857)"/>
</pattern>
<image id="image0_18486_10137" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2ZTYhNYRjHf25jpkTKQiiSshAWajZiQViyU2RvY0FKVmQ5yMJG2UlWiiVJjMTCxsfCYkopmYuUbxmfj069appm5t733td5/+ec51dndc997vv/9c6c93kOOI7jOI7jOI7jOEm5DrSBp8A94DJwFjgBHAR2A5uBtcAyoJX255vDFsAirgngJfAYuAFcAo7lDlEV7kTKnnodyh2gKmztQ/JzYCh3gCbs6r25F96EXf3IH47xFCeLT5Git/XwO41lfTjSxe7ma7kXXhXWBMF/epD8G9iQO4A6K4HzwK8+ThoXcodQZnno+Cb6PDN/A1bkDqPIkh4Ev5/ls1O5A6mxKMwrPkYI/gyMAAuB29N8/i7UdYD5wNEOu3Lq9TXs+sWT6mya5r7DGXPJMATsB15HCP4eHoxLZ6g5Ounexrfac4Pg8QjBP4CLwKoumph/39lHQ2mFWfGzyPNvcXZeHfE7o2Ek2rhWuxUGOWMRgoum5EoY3vcyr95Bw9gOPIw8994EhnMvvCoU/yvvRgq+HyZyThdsBG5FCn4A7My98KowHF6axgh+AuwC5uRePDAInAwvfWda73hojop7S2cdcDVyojYG7BE7FYxErL+4V3qi9iKcnwfQY7adPPV6VVazcQb4GbGwNnAg159cl1jk9d85HbGYt8ARYB76yIl+08UiPgDHgQVUB1MTPdsA6Et4UFRxLGlqoqd7Ok+EkWUxsK8qpiZ6IMhuh919riaviUxNtBqDiRoNF11So+GiS2o0XHQHUgly0R1w0SVhLroczEWXg7nocjAXXa1Gw+oqekSs0ait6LZYo1Fb0SYmyEXjovvCxAS5aFx0X5iYIBdNQ0XXtdEwNdF1bTRMTXRdGw1TE60WzMTqJEMtmInVSYZaMBOrkwy1YCZWJxlqwUysTjLUgplYnWSoBTOxOslQC2ZidZKhFszE6iRDLZiJ1UmGWjATq5MMtWAmVicZasFMrE4y1IKZWJ1kqAUzsTrJUAtmYnWSoRbMxOokQy2YidVxHMdxHMdxHMdxHMeh7vwFyKXyl1/mTAcAAAAASUVORK5CYII="/>
</defs>
</svg>
`,
      },
      {
        title: "HTTP Header Checker",
        description:
          "Single asset request with curl to get the HTTP response headers.",
        link: "/web/httpheaderchecker",
        icon: `<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="25" height="22" fill="url(#pattern0_18486_10139)"/>
<defs>
<pattern id="pattern0_18486_10139" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10139" transform="matrix(0.0128889 0 0 0.0146465 -0.08 -0.159091)"/>
</pattern>
<image id="image0_18486_10139" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2aQW7TQBSGv0CgwAJxAO7R7JEQl4EuyQmAHSpUiLicgxwBuoMjIIEEK6AQ2NVo1FlEyGPFzstk/Px/0ttEyszz5/Efx2MQQgghhBBCCCGEGBc3gCPgDPgN1Crq6OI98Ag42FbyXeBjAQdVF14foqveK1mS6SS718o+KqD5emD1sI/oswIarwdW7/qI/lVA4/XAKjjrzL6brgdaEo1E46kkGonGU0k0Eo2nkmgkGk8l0Ug0nkqiGZhocYlEZ0KiMyHRmZDoTIxO9JU9zTsK0deBV/Hdir/AG+BW5h5GIfp5Q1+LzD24Fz0Ffjb0FT7LSdGiD+IlvwL+AFWPS/4w0df3lu+EOU7jnGHuE4PXuIoW/bphvPBZFx4n+lq2fGdhMO9gRN8HLgzehVgm+gonIEXTy5kXsSdXom8DnxLj/QAmHfL5PDFOiJQmJolMr2NPoTc3oquW8Y4N8vk8noQUxy3zh95ciL6XiIxQn4E7HcaaJ8Z5u8UVFXp7MHTR1ge47JHPuzjhxYk+bRln0XGsPvncJcKqoYq2XkGzxFjhruXaHq6wIkTvIhPnPfN5VwugCNGWkWGRz7uIkL2Lto4Mq3y2vuJcip4Z5LM70da/7pb5bBltRYgu6f7Z9Y+h5QFNDfPZ3e2dZYTMDPPZ8m6oKNEWK2hulM+u/4JbHODSIJ/dP1Ta9jHp1CifXxhEmOsH/4c9nz+vM2k5We4e/PfdyuqzP9jEaixbWW2bs1WG++dqTJuzxC3+k7jCVlHATdJ8M8jn9dcNVnGj9mV828mt6HU22ZD9msj0TfP5fzbdBHYlehOeNcz/hDJwJXoaZYeV/QV4ClylDFyJLhmJzoREZ0KiMyHRmZBoL6JVtJZEI9F4KolGovFUEk2hooUQQgghhBBCCCEYGP8APqEa1dG0j/YAAAAASUVORK5CYII="/>
</defs>
</svg>
`,
      },
      {
        title: "HTTP/2 Test",
        description:
          "Verify if a URL is delivered through the HTTP/2 network protocol.",
        link: "/web/http2test",
        icon: `<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.374 2.73071C24.1902 2.73081 24.8545 3.39494 24.8545 4.21118V7.02954L24.8447 7.13599C24.797 7.37589 24.584 7.55368 24.332 7.55396V7.55493C24.0415 7.55493 23.8069 7.32101 23.8066 7.03052V4.21118C23.8066 3.97437 23.6128 3.77954 23.376 3.77954H1.58008C1.34327 3.77954 1.14941 3.97437 1.14941 4.21118V7.03052C1.14919 7.32101 0.914574 7.55493 0.624023 7.55493C0.333553 7.55484 0.0998304 7.32096 0.0996094 7.03052V4.21118C0.0996094 3.39489 0.763782 2.73071 1.58008 2.73071H23.374Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M24.332 6.50562C24.6225 6.50585 24.8564 6.73949 24.8564 7.03003V21.7673C24.8564 22.5837 24.1921 23.2478 23.374 23.2478H1.58008C0.763782 23.2478 0.0996094 22.5836 0.0996094 21.7673V7.03003C0.0996094 6.73934 0.333336 6.50562 0.624023 6.50562H24.332ZM1.14941 21.7683C1.14963 22.0049 1.3434 22.199 1.58008 22.199H23.374C23.6107 22.199 23.8045 22.0049 23.8047 21.7683V7.55444H1.14941V21.7683Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" fill="black"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" stroke="black" stroke-width="0.2"/>
<path d="M26.0049 0.100342C26.8211 0.100435 27.4854 0.764572 27.4854 1.58081V18.907C27.4854 19.3419 27.3458 19.7559 27.0898 20.074V20.075C26.8203 20.4091 26.4394 20.6055 26.0381 20.616L26.0361 20.6179H24.332C24.0415 20.6178 23.8077 20.3841 23.8076 20.0935C23.8076 19.8029 24.0414 19.5692 24.332 19.5691H26.0049C26.1062 19.569 26.2113 19.5068 26.2959 19.3855C26.3798 19.265 26.4355 19.0954 26.4355 18.908V1.58081C26.4355 1.34406 26.2416 1.15025 26.0049 1.15015L4.21094 1.14917C3.97413 1.14917 3.7793 1.344 3.7793 1.58081V3.25269C3.7793 3.54336 3.54555 3.77805 3.25488 3.77808C2.9642 3.77808 2.73047 3.54337 2.73047 3.25269V1.58081C2.73047 0.764514 3.39464 0.100342 4.21094 0.100342H26.0049Z" stroke="black" stroke-opacity="0.2" stroke-width="0.2"/>
<path d="M3.60059 4.48462C3.96373 4.4847 4.25781 4.77869 4.25781 5.14185C4.25774 5.50494 3.96368 5.79899 3.60059 5.79907C3.23742 5.79907 2.94344 5.50498 2.94336 5.14185C2.94336 4.77864 3.23738 4.48462 3.60059 4.48462Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M5.80371 4.48462C6.16685 4.4847 6.46094 4.77869 6.46094 5.14185C6.46086 5.50494 6.1668 5.79899 5.80371 5.79907C5.44054 5.79907 5.14656 5.50498 5.14648 5.14185C5.14648 4.77864 5.44051 4.48462 5.80371 4.48462Z" fill="black" stroke="black" stroke-width="0.2"/>
<path d="M8.00098 4.48462C8.36412 4.4847 8.6582 4.77869 8.6582 5.14185C8.65813 5.50494 8.36407 5.79899 8.00098 5.79907C7.63781 5.79907 7.34383 5.50498 7.34375 5.14185C7.34375 4.77864 7.63777 4.48462 8.00098 4.48462Z" fill="black" stroke="black" stroke-width="0.2"/>
</svg>
`,
      },
      {
        title: "Brotli Test",
        description:
          "Verify if a server supports the lossless Brotli compression algorithm.",
        link: "/web/brotlitest",
        icon: `<svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="18.8929" height="25" fill="url(#pattern0_18486_10141)"/>
<defs>
<pattern id="pattern0_18486_10141" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10141" transform="matrix(0.0164251 0 0 0.0125926 -0.23913 -0.0666667)"/>
</pattern>
<image id="image0_18486_10141" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4nO3dO2sUURjG8X8UvKC1iOYLBFTEgIVgsSDRQlPrB7ARNWUKGxEV0toFoghiY2NhpRYGRSUgRA0pFBsRL3hF4nVBjwwMuBzOZmdmd/Ke8877wFOdnZM5v92dXWZ2N2CxWCwWi8WSUtYBE8Ac8A1wgv0N3Ad2oyzDwBNhXBfoT2AMRY/kGJGdNuyJCDBdE7DnIoB0TcBeigDRdfS7VmwXWff2uPN/AQdJMC6yohU7RmiV2LFCq8OOGVoVduzQarBTgFaBnQp08tgpQSeNnRp0stgpQieJnSp0ctgpQyeFnTp0MtgaoLO0CpxiFb0G6SLrlhqxswu+YnGRdbLP9SyHnV1dF4s0rAtgTNb4yBaLa1jFIr1wZ9A6KxbphTuD1lmxSC/cGbTOikV64c6gdVYs0gt3Bq2zYpFeuDPocJ8Bjwq27W3rj//o8jey79A8Be4Ct4DbwD3gY5OgWyXmfuNtO+SNLwTmP9djzhHgAvDHoPuDPkWxjOWXqAwaeFsjdJaTmqFvANOBjnrz7ghsWwV6P/ASmA1c81sLfNAK7QL9Amz05r00IOgjHWMZ6npv/FqToKe8OTd3OX72C511nzc+1RTodv7N286c6XLbQUAf9sbPNwX6qjdf9tR+XyP0Hm/8YlOgR735ji5z236hF4FV3vhiE6BnvbmGeiy8CvQh4BVwPXCI2gX8bQL0uDfXgR63H+T76NX5HV12n8VSFfl54Gl8c4Wgs19kuFJxv5ODPubNs63A07hf6A35MbvscTlZ6E/5ojszU2C7KtCt/OzdfP5xsarASUKf9ebYlH8stg5o/+1dY6DbgVf/0wW3NegSvRw4sfPOoHun7I7u9Lbf3uVs3nTgfIdBF+ydknN/Nuj/KbOTMyXnNuiOGPQKpcxOvs7f0xatfxXcHw99Ze2Fd5uFJkI7BTVoDFpVDRqDVlWDxqBV1aAxaFU1aAxaVQ0ag1ZVscT20/Ouxn6VhE7lnym4AfShJHSVrye4RHtcEjq7iv04AgRXc7MP4KxBOMPKseeBrUSS7JF9Ij+OaXiBXAIe5IcL8UeyxWKxWCwWC4XzD5O0FbmWTEpIAAAAAElFTkSuQmCC"/>
</defs>
</svg>
`,
      },
    ],
  },
  {
    title: "NETWORK",
    items: [
      {
        title: "IP Location Finder",
        description:
          "Lookup an IP address or hostname to get the geographical location.",
        link: "/networks/iplocationfinder",
        icon: `<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="34" height="33" fill="url(#pattern0_18486_10143)"/>
<defs>
<pattern id="pattern0_18486_10143" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10143" transform="matrix(0.0107843 0 0 0.0111111 0.0147059 0)"/>
</pattern>
<image id="image0_18486_10143" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdUlEQVR4nO2cTWhdRRTHf1YbUWMViqhU7MZW7aJPEKoFqVDauNOqYKkrwcSqxbpxIbgRbLEL2yZxK26sH2tdlKxVRKVq1+JCY0EwLVjT9CvkysAJyCP38525M+fe+cF/k7x3z8z/zZ175utCIpFIJBKJRN+5B3gRmAHmgF+BC8A10QX525x85oB8J1GBjcBh4Ecga6gfgDfkWokh7gOmgUsjGDysReAksGk4WB9ZD7wJ/Kto8LDcj/cucDM95UHgF48GD+tnYCs943nPrThPF4Fn6QkvAdcDmLyqZeBVOs7BgAYPy2Umne0uliMw+P8tex8d4wHgnwjMHZZ7TjxERxhrObuoq58kzTTP2xGYWaa3MM4mGaFlkct1IfdimOkITMwq6jhG2ag8d5F51qLViajDEZiX1dQhDDLKVGcWSN9jDPdgWYnAuKymXJnvxhAHlA24LA/WHcBtosdkZeWKcqz9GGJGseLzwPaCWAP5jFY8t1hghjnFlry9QryBYss+jSF+U6r0dI2Ys0ox3YKvGc4rVXpHjZiPK8VcwBBXlSo9XiPmuFJM1wWZYSmA0RuUYrrRrBnmDXcd8xjirFKlZ2rE/FAppps7N8NXiv3loEK8RxSfC19iiHeUKp3JrTwoMflPxXiu7GbYrVjxTFr2rPTD46Kd0l1oteRVubKb4VbZrJIZ00Upuyk+jsC4rKY+wiBPRmBcVlNPYJTvIjAvq7Gv+gaMYqlV78Y4pyMwsVNTo3lsjjwDcVvV7qcjHIzA0DxN0TE+j8DUYX1GB7kFOBOBuas6K4u8nWSz8kJqU81LWTrNFuCvgCb/DWyjJwzk5GuIDONResbOlrf0uuW1XfSUp2Tvhm+TL0sss6yXfcULBXvZDpVcY0JxMTevJbsYRbxesFfQ9ekfhD5+cbJCRVeAyZLr7PVk9pJcu4iXK27IPEEgNtTYaL5Swexdyqdpncl7SmK+UONInrvenQRgqmbFlyvs1JxQ2kN3pUJ3UcfkoMP1bxoYcK3CWeznRjzCfL1CjH1SlrrXdnVula0jbDS/CjxT4eHU1OjXSq799AgLuittvyHhaE5B/gDWKcWYbWCE+44Grg6/58RwdW+FdWLoWoU4ohjnJjlTUtXkM3JKV4v3cuK4PSQ30gJ7C24rN4+hycMVBzRLHs50bynoHstSRhU+bflBcaKC0W5A4YOvc+KdwjN3FAwsfKU+d5XMiSzKZ3wwWXAHOS+88UqgZP6LAqPdyk2IQdlUiNzZ9620v8BoN/DwySctd5VBHw7bCoz2/WKTPW3HPhow3bm9oLLufz4pyqmPWM2diziX8yO3QWs5dZu5cx7H1oj/Pu3QWrfZdu68FmNi9jnRMeWRYNOc2nljO8WJjEnfqW2o3Dk2vDe4bwPlzjHiLacOPrESGd5y6pC5c4x4yaljyJ1jRD2nnii4TZLQ605PRVDwzJgaJQghNiFmxrUQ8i0yWY/UyOjjERQ8M6ZG28bG5IupZVOq8+JVm3MviUQikUgkEolEIoEK/wHfSXVwQu7/ngAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,
      },
      {
        title: "DNS Checker",
        description:
          "Lookup a DNS record from multiple servers to get detailed record information.",
        link: "/networks/dnschecker",
        icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="-5.66602" y="-3" width="35" height="35" fill="url(#pattern0_18486_10145)"/>
<defs>
<pattern id="pattern0_18486_10145" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10145" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10145" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGlUlEQVR4nO2ca4hWRRjHf+6aFmWQdLHLdjG6XyxLKtIyKxGyC14rs5spkUFmpRJEdAOLjEytIKgPWRFEQdoFtwuVpealLT9E4Ycu1mrurlak2apvPPC8cBjOzJl59+h7zu784PnyOmfOnL+zM88888xAJBKJRCKRSCQSiUS86Q0MAaYB84GlQAuwCegAKmod+luLlnkWmAqcr3VEUjgGmA58APydELNW+0vrukvr7tH0BSYBnwB7chDXZlL3x8CN+s4ew8HAbKB1L4prs9+BWUA/ujH76bi7qQ4Cm9am/9ndroefCawtgMCmrQfOpRsgs/+DwM4cRFkHjAUOVRsHfJNDvf8Cc4BGSsoJwMqcet4CHXpM5Lfnc3rHV8CxlIxLgC2eH7g6o8eLL53FQsfzO/UdPm3ZCJxNSRjjOVSsAa4CpjjKLAMaPN4pZZod9dyu71rj0a5twAgKjviqnRkf0q7leums/6uj3NEB75aFyVZLXb8AffSdk4wVpu2vYAIFZbhHT15mrNRuc5SVlWIo9zjquzlRbgCwJKOt/wFXUjBkXPvT0ehdKoL0qCQtlvI/Wia/LKTXbrDUKR5KEmnLDG2baxgR17QQHAX8nOE+jU957gLHM7d2oT2uMV8CTibXAtszJsgm6oz4niscjZSxcJjlWZtb1trFFdv+wGaHm5jGMMf4LvZlvf3sWY7Gbddea1vItFuee4Su87il7i0OwS7M6Nn3UydOBXY4ImY3OJ69zPFBJ+fQtpMc9YuPb0NWnrsdQ+AZ7GPEb13u+BhZ0rp4xvLcqhzbaFukzMt4brbju1aWeakeiUQikUgkEolEInuVI4DzLDZIA/gS7AnhcGCgWtZeXlOirNgBHvU36k6KbB4/p0EuibNc4/l8XbjPsWytqHVqFGy6Z3TudSN2crWj7PfGu0Zm1D02I7TboUGkxjIKXUnYDx7Bo6TQ1aSXphyEvjugnYtTNitKJXQF+E2HB1+hxb6wZIr6Cj1Qo3DJsjs1/2+pJY4te4yFFbpNd1XG617dQkuWqPSYEKErGmuuVeiHjHLtGlKtImPzm0aZTymw0LKzbXJiyo53pyOt1ia0xIuvqFHo14xy76aUOU5TF6omwpdK6Or+nO/+oE3o6naXeDqhQi9O2XwdSonwFbohJadiQQ1CV7S3NQQKfa8j2XERcEfRM5V8hUZdvGTZN/AT+lXN5E/+Jj5wiND9HRu3ZsLNfN3hL63QzUbZtz2FnqMegDnGDw1074aox1PxsD+K1sNDhF5nlH05QGjhlZR3tQUIjWb8T9NzLq6d77TEm1IIfVCKH/twoNAHpvTgSqDQSXprmECEf8uSO5h0AUsh9IwAUWxCo8LsyElok5Ep9Y0ok9BjgH9S3DTJlwsVGo2ZhAjdSw8LdSQsTcABKfUNpqBCi3cwF3hSx+BvLYLMdNSZJTQ6kYb0aNPj+UnLVoNHx+tS3PS1+5Y51vFhRpK5j9CHWKJwNqHHWdrSmeI6Vu1RCkSI0LuBFz16iY/QwsUpE5hrjJ4b0NZ3HENbXZhujH1Ja9ew6GfAY8BpnnW+ZNQjE6mNOUZZye1zMQr43HFid70myRcqRFpm+uuEOFGPe4wKPM4RiUQikUgkEolECkiD5ljUelhonuU5ORS/tw8LPd2Fw0Ir6pG9dIpjd2KPrrRc58YrFju9jsffxmUcf8ujbTXxgOODtushSduuhrn95EqQCeUJx4FO2514F2Vsa0ngrG406s0ttsZtdfSgRZZnNteQedrVI8qXZhxRXl6EhEefQ/cTAg/dS35FrUx11Cs74CbXeRy6L8wlhWfpToStsbs0ecX3GokNNcaBQ6+RmOkYk6t/kfv8WHIWw1N2uE1rNnrHLY6yrvgzgZlIYpONfUFzy6oUF6NUmehxC00HcJP2qD6aFWTrTSH3ZDR5XvUzOWM8dt0xUiguz7iNpqImFw6O1oulbGU+8pyEGj0urxqdkryTZts8dmgKw6CAtKvVGX8F4p1kYfNgarmOTeabUiEHfL72/MBKhr1gmRz76L/l8Y5VRbjSp1ZEiKcyZnZfa1E38TC1CY58kRDbpTvjtVyWVTgGF/QS2O8c1xGV/lrj1gIIvEWDR4XK2cibfhoj8Z0s87SNGrOQrNYeQ1/genXL8hjDbbZbb5Cc2N17sG+85E7gfUcOXIiJH/+e1nmkVwt6II16S/kUvU1siS40WnVVuUetQ39bq2Xm6cLknCJE2iKRSCQSiUQikUiEsvA/DCk/7Usj5kgAAAAASUVORK5CYII="/>
</defs>
</svg>
`,
      },
      {
        title: "Ping Test",
        description:
          "Ping any IP address or hostname simultaneously from multiple locations.",
        link: "/networks/pingtest",
        icon: `<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="32" height="31" fill="url(#pattern0_18486_10147)"/>
<defs>
<pattern id="pattern0_18486_10147" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10147" transform="matrix(0.0107639 0 0 0.0111111 0.015625 0)"/>
</pattern>
<image id="image0_18486_10147" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaUlEQVR4nO2bXYhVVRTHfzdTa0JD7eOlUkyEvox66FsCDURJDSLyaZ5KGEw0I3rQOLeHPl4KpCLUnow0VEQxUBF8SdQgBxJSKEKZVCTUypBypubEgjUQl7kz59y799n7nLN+sGC495yz1/rPPnuvvfa+YBiGYRiGYRiGYRiGYRiGYUTCzcDDwEvABuAL4DDwPXAOuAJcA1K1a/rZOb1Grv0SeBd4BXgWmEbNaQAPAKuB3cAZ4N//iejSftE2XtM2K8+dwErgK+CiJ1GzmLS9HXgVuIOKMBlYCuwABgOK287+AQ4BvUAPJeRxYDPwWwRiphlNfN0EPEYJeAbYF4FoaZd2RN/E6HgOOBqBQKlj69csSCbvoDwFnIhAkNSzfQc8EUJgyU83ekzJ0ghtGNgK3F6EwA2doX+NIPA0kMkiaQ1wgy+R79FJInSgaST2DXC3a5FlBr4cQXBpZPY78KILgW8EmjUbi9MOxm6ZryZ1KrK8FscjCCQtiR0D7sor8n3AQATOpyWz88BDWUV+MuB4PAicBHZqubNXc3VxframlZPUpuln8/SaXr1nlz4jVG3lUpacW1Z4Vwsu6vygNQZZgd2KO3o0ng80WypSeKmVL2nn2IMFOnNCc9Eiy5TS1lpdVhcR46BqOipNjw1fBT6MpPguAnwE/OkxXtFyTN5y3OAf+vpOJz6maryu56QkqwNNR+PUemAK8SOCv92yJ+mtJ7sUew8ws4ugFwJ9uhA4qFnEz1pnuK52RT+T7w7otX16b6f/3FnA3iJF7lRsyb2fz9nGBM0O3tcF0pCDXjWkC4j3VHhpI2/JYaAokfOO2bKzMiPHc+9X5846Hh9Hswva4x/N4Z/E8rXrMbmbni1pzBsZdyEaml8eCVx1W5wxbvH3zXHesq57chaxZbZ+OuP9LxSYw2bN5Zdn9H2+zgneRR5tGLmgy9/xmAPsj0DYdnZYaztZhroBH8NFO+S/eEo3AsZiIvAO8HcEYo5nf2lc4vNYSMynffbkVsY7bDKzpCXWoxnS0mgO2ixvM56lJTGZd5YROasrshszrNlGdDQ8F6TSQLYxhsMzrSuptKK2lMhwXfVLIzDvKVynVEnshMipgtgJJaHp8GT+GmARMHeUzdm5+t1ah78kKGwxElLsy8DHXRwGb+gh+E863DUpnch5xT4PvA7c4rBtedY6rclUWuQsY/aQ5qo+t7t6VMTrVRiTO+nZPwKPFOiDFP1/qmJPHkvsPbo3WDRTW/YEKyfyCBLYlhx7ePfqhus23TS4pDs6g/p3v/5atk+Ph2VB2v68yiKTQ4gVut01nCNjGNZ7XvZ5Gr8qLNTCere5sJznWxA6mBi5CfjMgcCt9qk+2wBuA771IPKIHct5DKKyrPIo8ohJGwZ+C1GVWYzELHYSOqg6iJ2EDqYOYiehg6iD2Elo5+sgdhLa6TqInYR2tg5iJ6GdrIPYSWjn6iB2EtqpOoidhHam6jStaG8YhmEYhmEYhmEYhmEYhkHZ+A/eOK8xryvLGQAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,
      },
      {
        title: "Ping IPv6 Test",
        description:
          "Ping any IPv6 address or hostname simultaneously from multiple locations.",
        link: "/networks/ipv6test",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1966 4.40307V0C9.41832 0.269392 7.84846 1.93173 6.79883 4.40307H11.1966Z" fill="black"/>
<path d="M11.197 11.1701V5.42236H6.41173C5.84321 7.0997 5.49554 9.06299 5.44727 11.1699L11.197 11.1701Z" fill="black"/>
<path d="M12.2168 18.9558H16.6138C15.5649 21.4236 13.9915 23.0859 12.2168 23.3528V18.9558Z" fill="black"/>
<path d="M12.2168 12.1895H17.9671C17.9203 14.2966 17.5691 16.2586 17.0024 17.9349L12.2168 17.9352V12.1895Z" fill="black"/>
<path d="M17.9671 11.1688H12.2168V5.4231H17.0024C17.5691 7.09946 17.9203 9.06144 17.9671 11.1688Z" fill="black"/>
<path d="M16.6138 4.40251H12.2168V0.000732422C13.9963 0.267841 15.5649 1.93018 16.6138 4.40251Z" fill="black"/>
<path d="M17.722 4.40315H20.8848C19.4532 2.60077 17.505 1.22739 15.2637 0.511719C16.2503 1.45764 17.0902 2.79087 17.722 4.40315Z" fill="black"/>
<path d="M18.9851 12.189C18.9398 14.2849 18.6181 16.2354 18.0801 17.9365H21.6074C22.6714 16.2591 23.3221 14.2961 23.4131 12.189H18.9851Z" fill="black"/>
<path d="M11.197 12.189H5.44727C5.49581 14.2961 5.84373 16.2593 6.41277 17.9365L11.197 17.9367V12.189Z" fill="black"/>
<path d="M17.7205 18.9553C17.089 20.5658 16.2495 21.898 15.2637 22.8432C17.5032 22.1281 19.4507 20.756 20.882 18.9553H17.7205Z" fill="black"/>
<path d="M5.6901 4.40247H2.5293C3.96214 2.59956 5.9102 1.22768 8.14843 0.51123C7.16516 1.45715 6.32242 2.79169 5.6901 4.40247Z" fill="black"/>
<path d="M4.42975 11.1688H0C0.0889516 9.06164 0.73981 7.09966 1.80291 5.4231H5.33378C4.79499 7.12282 4.47198 9.07569 4.42975 11.1688Z" fill="black"/>
<path d="M5.33345 17.9352H1.80746C0.744364 16.2588 0.0934928 14.2968 0 12.1897H4.42975C4.47194 14.2826 4.79489 16.2352 5.33345 17.9352Z" fill="black"/>
<path d="M5.694 18.9558C6.32606 20.5666 7.16426 21.8965 8.14778 22.8424C5.90955 22.126 3.96149 20.7538 2.5332 18.9558H5.694Z" fill="black"/>
<path d="M11.1972 23.3548V18.9553H6.80078C7.85041 21.4248 9.42001 23.0857 11.1972 23.3548Z" fill="black"/>
<path d="M18.082 5.42188C18.6198 7.1229 18.941 9.07343 18.9861 11.1694H23.4138C23.3233 9.0625 22.6735 7.09922 21.6101 5.42188H18.082Z" fill="black"/>
</svg>
`,
      },
      {
        title: "Traceroute Test",
        description:
          "Trace any IP address or hostname simultaneously from multiple locations.",
        link: "/networks/traceroutetest",
        icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="-2.66602" width="31" height="32" fill="url(#pattern0_18486_10149)"/>
<defs>
<pattern id="pattern0_18486_10149" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10149" transform="matrix(0.0111111 0 0 0.0107639 0 0.015625)"/>
</pattern>
<image id="image0_18486_10149" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKUlEQVR4nO2cWcgOURiAH8tvzS5KslwgRSjcSBEirtwga5biRhHiQtkK2VKiXCpLQnYJIbJFKSESsi/J+l/YR4ejpO+c+WbmzDfnn3mfOld/c847zz/fmXPeeWdAEARBEARBEARBEASh2NQD1gCvgaAA7R3wDfgKPAVOAyuBwUDtNEWv8ODkA0/aY2Ah0CQN0Q88OMHAs/YCGO9a9D0PTizwtG0HGrkSvdiDEwo8bheBli5E19Wy73twUkEFmroBVkc85hLQ2IXsItIK6AXMBy6XIXtH1gHnheHAzRDZE7IOMi+o6WGvRfTLtJZ+RaRWiGy1zhYcXtm3LJuaVHeQRWOE5aoelHVweeOSQbTKjQgOmWcQfcblIAK/19mlRD/LOrC80cIgWqVYBcdLve8G2YLjbbrp4UHhqA9sAD7otgVo6KjvPgbRdyig5GMlRGx11P8ig+gTFEzyUYOIaj2/JuVa0bfh9YBDIZm2pNPHaEvfvSnIlXykjPxxEtHNLI/47jr6teRCcpBAdB3DvP+3TaUA08XhMiXHFd0cOG7p8yFQRcHn5CCBaDUVjAkpvfgJDCPnkg9GlBwmWvXZERgILLfknv9t69I+0f7AEr2UegR80tvS65a8bDllZm+BTSF1E+oJ/YEYkl23o/qcnKM6na13QLYAqoFOCcvMNlviWOuB5INpSR4csUxsTok+ohz/1rJcyrLw8of+VaZy8+sGfI4Y0OyEZWZvLKJfZST5np6/U2NpxIDeA+0Tlpmtt8SzssKCrwJj9Vo6VZaVGdBn4Jy+UcYtM3ukRapNiAl1wrtSFKti2A3MArpSQboDX0oEpJIrc4G+QNNKBqT/abtjSHSVKk2NUXpdqR7XXABGZh0Q8WR7L9pX6uhCQxHtmWwR7UD2ThHtj2xvRKvy03HAFKAtNY8qYJ9B8kdfkvNdgOf/bYMHkB/ZG/GEUrndG9RMqnSq84kuqV3tU3L+jSGx3SDrwPLGJ8PcVuldX+4xZcXU3C04xPT20RCXgwiwxyB6VdaB5Y35BtH3fVl/5oUelh3VpKyDyxvXLZ9QUIUkgiOmW67qsz7lCmo6dXXBnkn2kUo8OysKQ/WO0CRbFWILjthgEX3e1SDCn+nBVDm/33JcO/33qB8ZCfRXutRbqf1CYlNLzQU6YRTEaE/0UjZsyaqe5l/RcQUJy9isNCiR0ftmSZ3W0p/ACRI2ldxqY4lrhoMxVJtmGaONIckWt4ytrJujqjo6pZ9e2F4s7+xIgGqTLeOccTSG+radickx+lNXdkXo4FD0RMs4pxyNcdIyxsSYv8SKcdqBgBchX+CKI6FUGx/y0ubLiP3Zytic0xrYFrPis1q/q6dSAWGocq3burozyhg/9HEzyxijp77qw27s5ZSxCYIgCIIgCIIgCIIgCIIgCIIgCJTiF3jPiWhYDSnMAAAAAElFTkSuQmCC"/>
</defs>
</svg>
`,
      },
      {
        title: "BGP Looking Glass",
        description:
          "Comprehensive directory of BGP looking glass servers in various regions.",
        link: "/networks/bgplookingglass",
        icon: `<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2734 2.46726C12.6927 0.876394 10.5933 0 8.35909 0C6.12585 0 4.02738 0.876394 2.44857 2.46726C0.868831 4.05812 -0.000984651 6.17361 8.36488e-07 8.42482C8.36488e-07 10.6751 0.86877 12.7906 2.44857 14.3815C4.02738 15.9733 6.12684 16.8487 8.36008 16.8487C10.5933 16.8487 12.6928 15.9733 14.2735 14.3815C17.5326 11.0962 17.5326 5.75158 14.2735 2.4672L14.2734 2.46726ZM8.361 15.3832C6.5166 15.3832 4.78282 14.6601 3.47853 13.3448C2.17331 12.0306 1.45557 10.2836 1.45557 8.42507C1.45557 6.56659 2.17325 4.81865 3.47853 3.5044C4.78282 2.19015 6.51654 1.46599 8.36002 1.46599C10.2044 1.46599 11.9404 2.19015 13.2456 3.5044C15.9366 6.21798 15.9366 10.6323 13.2456 13.3451C11.9401 14.6601 10.2054 15.3833 8.36094 15.3833L8.361 15.3832Z" fill="black"/>
<path d="M3.93947 7.83893C3.99288 7.43843 3.71259 7.06991 3.31295 7.0161C2.92318 6.96228 2.54975 7.24471 2.49733 7.6474C2.25481 9.49813 2.86785 11.3174 4.17888 12.6396C4.32035 12.7822 4.50657 12.8547 4.6928 12.8547C4.87806 12.8547 5.06525 12.7834 5.20672 12.6406C5.49087 12.3543 5.49087 11.8903 5.20672 11.604C4.21981 10.6061 3.75802 9.23411 3.93947 7.83893Z" fill="black"/>
<path d="M21.7417 18.4361C20.2774 17.2402 17.6183 15.0328 16.0561 13.7322C15.7361 14.2032 15.3754 14.6537 14.9604 15.0719C14.5473 15.4872 14.1012 15.8544 13.6309 16.181C14.9207 17.7542 17.1111 20.4316 18.2973 21.9061C18.9296 22.6947 19.655 23.1323 20.3948 23.1714C20.4287 23.1733 20.4646 23.1743 20.5014 23.1743C20.9504 23.1743 21.5807 23.0257 22.2169 22.3846C22.9045 21.6918 23.0207 21.005 22.9976 20.5506C22.9567 19.8051 22.5232 19.0732 21.7417 18.4361Z" fill="black"/>
</svg>
`,
      },
    ],
  },
  {
    title: "SECURITY",
    items: [
      {
        title: "Certificate Checker",
        description:
          "Decode an SSL/TLS certificate to validate intermediate certificates.",
        link: "/security/certificatechecker",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0_18486_10151)"/>
<defs>
<pattern id="pattern0_18486_10151" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10151" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10151" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`,
      },
      {
        title: "Certificate Chain Composer",
        description:
          "Generate intermediate certificates for an SSL/TLS certificate.",
        link: "/security/certificatechaincomposer",
        icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="29" height="29" fill="url(#pattern0_18486_10153)"/>
<defs>
<pattern id="pattern0_18486_10153" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10153" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10153" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVR4nO2dz2tdRRTHP77E5FWbRNBSiAg2rVjcdO3aFrWtiKGL1qIo+KO2iwr+C4W30FistlRbFIRk40KJEsW9JlaSXdtYrGBatdoIYq0Sobll4Dx4hMyde++bufe+mfnAQEn75sc382bOnDlnCpFIJBKJRCIRN2wDjgBTwAKwDPwvZVl+NiX/ZqujPnhLP3AQmAWSnOVb4ADQV/Ug6s4TwA8FBF5bFoFdVQ+mjjSBdywIvLZ8DNxV9eDqwibgewcit8s5aSNoRuVrnjguF0MWezTjerwEnAR2A9uBYSnqz3vk75YyzuwNBMZm4LxBmCvAUWAgo6XyPPCToc7TBMTmDCLPACMF6h4CPjXU/SQBMJphuZgAGl20oT57wrBe94U+k9+01JYSezqlHXWo8ZJNGayLluU21YZ5NeUE6R0bMtjJtkVu86qmvVVgDM/4oCKRFXeK9bJeu6/hEY9XKHKbk5q2J/GEfoOF8VZJ/diraX8eTziYIvInXZpweXhY04freMKsZoDKEthYYj+GNf1YwZObkURTniu5LyM+C31EM7hfZe0uE6+XjqmKN8BOnvJ5M1zQDO6ZDJ8dlF/In8A/wPtdujdP+WzeLWsGN5ZB5Jl1PqfEtn1gOYQHrGgGd6/h3nA9kVX5u2A/DqUcwbfgATc1A1SmVl6RVfmroLXxi6a+b/CEJc0AHykgsipv52xfHYa+SKlvP54wrxngeAGRZ2TtzsNESn3nfXL8f6gZZOempu4CPzeI/JX8MvJwzFCnCtLxhhc1g7wmwrmayS1DncrU84oHZWdfb7BvAF9WIPJcgW9HT/B1imlVtsjqGu0+PGXcMPiy1uRLwP14TF/KUdzGTG4YrItELh5UiIP3PArcciDycAaLJRiREfEuWRS5X47Vv0WRzQ6iPCKr2OYdwD65Tf8jw7ejJ0TepskZuSnH6nk5jLwgJpxLkR8ALufcTBfrLHLRnJFVMeHG1xxpbYn8Y87+zNXZhLOVM7IgG19VIp+q62FE3VicsSBw0lFuWdj48op8AXiMQHNGEscir4o/eX+dvXBl5YwkOUVGAsTPyjKkYj/+lZua67IJT4ppt8XnnJG7xcp4WoK8r1kW2RuyiKwEfjlj3IXyJb/uyEHUs7jIGRlw5LTvWVzkjDQdOe17Fhc5IwNxJrvPGWnGmew+Z6QZRXafM9K0dKxW5qI37HKwJk93uSa3T3zqMBJEzoiyLvIwaNlB5EWYrClnZLpAzsi7FkVO5FjtBbMpJz6VjJ6HRkqgYhGRE/FdeJ0z8lKB+hrAf11cP10OLWfk5y5yRj4qaMLtCDFnRK2zRdkoYquZfQM4ntFO3qfpixeb4YLDR0DusGTHe50z8lDJ/egHfg8xZySvtdEt3ueM1EHokZQIIm9yRqpeOhoG96k3OSO6zbAsR85EKDkjOvPuvRLabqWInNQ57qIIh1OO3y6T3Fuh5YxsTbmRVjfbLmiFmjOicypdSclYLUor5JyRZw3OeVsb0jGDyEHkjKRdyJ6w8BTlhA9B4DbYaRBCed/uKVDvEPBZ6DN5LacNglyV54IHM7538UrK05PBitwONzhnEKYzmHGPBDMOdTyAvVdMM92jIkEuF7oAmosZROq2LIYscqfY3zkUec5nEy4v8b/dqCCwxsZScsE334UrO/uAPFJtCiBPei1npK6MyfvJk3JpuiyXByu9mDMSiUQikUgkQk9yGxIluCqVivLYAAAAAElFTkSuQmCC"/>
</defs>
</svg>
`,
      },
      {
        title: "SHA256 Generator",
        description:
          "Instantly generate a SHA256 hash of any string or input value.",
        link: "/security/sha256",
        icon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="30" height="30" fill="url(#pattern0_18486_10157)"/>
<defs>
<pattern id="pattern0_18486_10157" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10157" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10157" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2cS07DMBRFLxlQgdgHpEsqYUklFR/BABixEGj2Q0NbQGISZCkjFDPBsa9f7pE8Py9Sc2pXLiCEEEIIIYQQQoiJUAA4AA9sPv9mBuAOwA7AF4AHAEfyCU8NoPu13KDyCfzx3AwM9i6fsJwNDOVWm8inJPMJRuUZ7FU+478POwCX8gnL2jPYeSKfhswnWHi2nsHcu3vqPqOHZ9cPPXUfs+G5IPMxG54VmU8w1mThySKExwBu+y/23cTWBsBNrPOQe4KBu8TLPYNRcUX+JBi0S7w+xv52ogeNOA/aoVcH4hyluhBce44Yra83AFeMPw6UHmHtCI3vCCsyn9F3hEv5xNmBLeQT5yjyVD52w1OS+ZgNT0XmYzY8NZmP2fA0ZD4mw1OQ+ZgNT0nmYzY8FZmP2fDUZD5mw9OQ+ZgMT0HmYzY8JZmP2fBUZD5mw1OT+ZgNT0PmYzI8BZmP2fCUZD5mw1OR+ZgNT03mYzY8DZmPyfAUZD5mw1OS+ZgNT0XmYzY8NZmP2fA0ZD4mw1OQ+fyJ7qpAd1W6SEt3VRBn6a4KjDxoh14d0F2Vbop3VXwX2F/IfLLfEa7IdmArqxfq2XZgTQ4X6nPfgRVkPsGYe4baJjqKnFs9GlUII5FLCJfInFxCuEDmtGR/adZ6fNzPWlmzHxiqTRiePZlPMB4HBnNn2Klg8wnGCYBnAN/9eup/MEgFm88o/yx+CB5mZD5CCCGEEEIIIYTAaPwAMJeIQzAEo1QAAAAASUVORK5CYII="/>
</defs>
</svg>
`,
      },
      {
        title: "SSL FREAK Test",
        description:
          "Verify if a server is vulnerable to the FREAK attack (CVE-2015-0204).",
        link: "/security/sslfreaktest",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="24" height="24" fill="url(#pattern0_18486_10159)"/>
<defs>
<pattern id="pattern0_18486_10159" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_18486_10159" transform="scale(0.0111111)"/>
</pattern>
<image id="image0_18486_10159" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7klEQVR4nO2cX2iXVRzGPwvUZXbTlTkUzW6iNIOh3ZQi6k16FUFGGIixStq8cN6Y0kZmoV6YFwr+g4z+CXWjYEEwYU0zC4dgkg50VI7apsxNTZMTL3yDke6A85zzPe+77wceGL9tv/M8z2DveX/nnBcMwzAMwzAMwzCMOxgHzADmAyuADcB24ABwGDgGnAW6gH7RIOBEg8Ne75Kf7ZDfPSDvtUHee76MVYxZSR4BngMagA+Bz4B24Dfg9rDSUum2jF14+FQ8NYjHwmv2PAg8C7wB7AC+A3oUinT3qR7xvkOyzJNsqtQCbwM/ALcyKMlFUpHtBNAkmZNSB3RmUIJLrE7JnoQJwKkMQjslnZIOotOUQVinrMYURZ/IIKhT1vEURQ9lENQpq5jDR0c7pMtEVjRWNFVSJYte4fHzmhUdTqs8fl63osPpLY+f1VZ0ODV5/KyxosOp2eNnnRUdTus9ft6xosPpXY+fFis6nN73+NlsRYfTFo+frVZ0OG33+PnIig6nnR4/u6zocNrr8bPPig6njz1+ij0cVnQgfe7x84UVHU5fefx8XdWi/1EIdcjj57DSXo9Krhl+4/HzrYKfgRRF9ykEa/P4aVPw81eKos8pBPve46dDwU+xczU67QrBfvT4Oang52iKog8q7XkbCY09gMWUMjofKAQ74/Hzi4KfTSmKXqkQ7LzHT1dmq/LBmKsQrNvjp1vBT32KoostqzcSB7vk8ZP6ZMF1YDyJOJ44XF9G8/piOpmM1sThrnq8DD+pVZkL4X/UJw7nMtLzKYuukWNkboypT+Os4s4MgrvE2o0CSzII7hJrkUbRNfLhihsj+hV4ACUaMyjAZbCjNToPA1cyKMFF1mVgEspsy6AIp7hTKhl1iW4ahoAvZVNji3w9lOhmaQqZsDFy2AvAY3cZd2aCD5WKbcHZMDFy4OWesV+JOO7FHB4j8X9ejRh4hmfcR5X+wGrURFz6n+4Zd3KkMY9IpiwpLoy9EUK/7BlzeYTxenO6AI7ES5EuhjPvMtbjka4NL1IS9kcIf01W4FtFB+W10OMU24BLQ608Ts2VTCdlBlUqJistnLpR6veUz0sKzTMKS01ulHd/T1NyFkX6XxpKhbeFVITFskzvMtPfwAtUjKUK+0F8uiGeKsmCTD6/HpCluErzpPJs5A9gDmOEacBPSvPkqYwxaoE9CUv+pIw3IyF5M/L075o8otgAngB+jlDyaWC2drjcmAC8B9wMND9uTbm9tozMus+TVsUJrqe0Q5SJZfd4bKJbjjxkuyqS+7+TZjlAOVLBfwJrUz08u+o8JLOTDtk11C/nHRvke4ZhGIZhGIZhGAaj5F9MGANvZ0DgYQAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,
      },
      {
        title: "TLS Logjam Test",
        description:
          "Verify if a server is vulnerable to the Logjam attack (CVE-2015-4000).",
        link: "/security/tlslogjam",
        icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_17865_5918)">
<rect x="-2.66602" y="-1" width="31" height="31" fill="url(#pattern0_17865_5918)"/>
</g>
<defs>
<pattern id="pattern0_17865_5918" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_17865_5918" transform="scale(0.0111111)"/>
</pattern>
<clipPath id="clip0_17865_5918">
<rect width="28" height="30" fill="white"/>
</clipPath>
<image id="image0_17865_5918" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/ElEQVR4nO2dW4hXRRzHP1u6G2Rl3iIzokwSKgwjJYnMyIeCEnsz0nqoBx/a1S4QXWyD6kUi6MWHLhZUhOTmg29FF4pss+0CFUYUaPRgLoq60WXdJkZGqNOZObc5M2fmP1/4wrKc329+v++enfM785/5/SEhISEhISEhodcxAKwEhoER4FvgMPAX8AvwHvAa8CRwGzDbd8Ch4SpgmxJVVOAJ4CNgI3C27yS6jCuB3cDfFQXO4zHgaeBc30l1bYrYCkxaEDjLcWCD7wS7gIXAWAsCZznSy9PJUuCgA5FPcR9wET0o8tGSD7j3gU3AcmAeMF1xnvrdZnXNiRL+Dqj/op7AwhJ38gTwVMWSbbay+a3A9w/AXHrgwTdWIMTrwPkNxpgPvFEwhqzBTyNibC2YJh6wONaDBdPJI0RcJ08aRF7bwpi3G8T+HbiECLHbcHfZvJOzeMgw7g4iwxLDG5+ck9vGm5qxp4DLiAjbDNVFkwdfWVxgqEaeJ6JK47AmSVmOucIzmhgOqro8eKzUJDjpeGlzruHBeB0RYFiTnHybc40PNbE8TgR4W5OcfK12jfsNi07B4ztNcnKdwjWu1cTyDRFgXJOcj/WG8zSxyBiDx5+a5Po9VUB5sfxBBBAapngiT0x0LJ5oExMdiyfaxETH4ok2MdGxeKJNTHQsnkKcAQwBo2oVTkTKCeBTYFCVh06xAPi6AyIIx/xK5e7sTu5FkcW/xHZyZw91IFnhmfe5EHq0A4kKz9zjQujjHUhUeKbUoHX4TlJ0hEloktDExCQ0SWhiYhKaJDQxMQlNEpqYmIQmCU0XOaV2U60DLlYrcwPq5zuAXeqaJDT1+TFweYmcrwA+SUJTiy8A0yrkLa99KQlNJe6oeSpL2ryVhKYUfwZmNsh/pvLROkTgXGtBgzZOkP0PImDuMuQlTx+8ChxR3A7MwiNEwJ+KXKjJqV9zonevp12vJyEC5SZDTlsMdo/iCSLQLQLTNPksUqdohWHvtJeziCIwThUc43inhA95sKkPxxCB8TlDLhsq+LkTxxAB8QBwliaPWRU74BwC5iShyeUaQx4v13xtdwYRCEcMOVxfs+2btFmVhOY/fe90uz77DWcfyzbBcrLJUQTAIUP8T1jw/1gSGj4HTq9RM+d1OJhuqK0Xt6yzdyGFgbJ7wdWG2N812J6jWanTXf9B27W16DCfNcR9V4Gt7C6WxfwCm/Ut6uxdTGGomWcYVuZ+LbCX00oWiwpsxtusrUWANfP2Evay71MWS0rYvdhLQu+0UDOvyLFdUcJO+r6xF4Q+ZqlmXp1jf1NJ2+/VIaqohR6s0Wao7NSzpoL9lpiF3luzZs6j3CyTxboK9tZr6+MdqpmXamLsK6iZ83hvjp97KvqwWluPBlAz323po67BGn6stbqvM7iwzP2GmnmOWjuu6jOv++7DNfwcstXPb0B9BudT6FsN8b3SgRtBrnVbwQKPYu80xLWq4deLyHn/J+DHkq3sdZQx3GBL7AF1JnqPwwfkUdXQVRfPvga+xzL9/+XPX4Swbu0aww3/iMtyfC5v6FOufUeFxaqObSLKmTl+ZzT06W1PSBvoU/sumk5L1+T4XmbBr5c9IW1gvQUxTs3Rl7b0rUfO94S0AZvdcGxVHVl+SQSYsChIW5QxBo/POiBkEeWyRfBYbek7ENvkzUSCW9Rdo2uh7IMyFtkv76TI/wC9YfRvA72vwwAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        title: "Epoch Converter",
        description:
          "Convert a unix epoch timestamp to a human readable format.",
        link: "/others/epochconverter",
        icon: `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_17865_5918)">
<rect x="-2.66602" y="-1" width="31" height="31" fill="url(#pattern0_17865_5918)"/>
</g>
<defs>
<pattern id="pattern0_17865_5918" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_17865_5918" transform="scale(0.0111111)"/>
</pattern>
<clipPath id="clip0_17865_5918">
<rect width="28" height="30" fill="white"/>
</clipPath>
<image id="image0_17865_5918" width="90" height="90" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/ElEQVR4nO2dW4hXRRzHP1u6G2Rl3iIzokwSKgwjJYnMyIeCEnsz0nqoBx/a1S4QXWyD6kUi6MWHLhZUhOTmg29FF4pss+0CFUYUaPRgLoq60WXdJkZGqNOZObc5M2fmP1/4wrKc329+v++enfM785/5/SEhISEhISEhodcxAKwEhoER4FvgMPAX8AvwHvAa8CRwGzDbd8Ch4SpgmxJVVOAJ4CNgI3C27yS6jCuB3cDfFQXO4zHgaeBc30l1bYrYCkxaEDjLcWCD7wS7gIXAWAsCZznSy9PJUuCgA5FPcR9wET0o8tGSD7j3gU3AcmAeMF1xnvrdZnXNiRL+Dqj/op7AwhJ38gTwVMWSbbay+a3A9w/AXHrgwTdWIMTrwPkNxpgPvFEwhqzBTyNibC2YJh6wONaDBdPJI0RcJ08aRF7bwpi3G8T+HbiECLHbcHfZvJOzeMgw7g4iwxLDG5+ck9vGm5qxp4DLiAjbDNVFkwdfWVxgqEaeJ6JK47AmSVmOucIzmhgOqro8eKzUJDjpeGlzruHBeB0RYFiTnHybc40PNbE8TgR4W5OcfK12jfsNi07B4ztNcnKdwjWu1cTyDRFgXJOcj/WG8zSxyBiDx5+a5Po9VUB5sfxBBBAapngiT0x0LJ5oExMdiyfaxETH4ok2MdGxeKJNTHQsnkKcAQwBo2oVTkTKCeBTYFCVh06xAPi6AyIIx/xK5e7sTu5FkcW/xHZyZw91IFnhmfe5EHq0A4kKz9zjQujjHUhUeKbUoHX4TlJ0hEloktDExCQ0SWhiYhKaJDQxMQlNEpqYmIQmCU0XOaV2U60DLlYrcwPq5zuAXeqaJDT1+TFweYmcrwA+SUJTiy8A0yrkLa99KQlNJe6oeSpL2ryVhKYUfwZmNsh/pvLROkTgXGtBgzZOkP0PImDuMuQlTx+8ChxR3A7MwiNEwJ+KXKjJqV9zonevp12vJyEC5SZDTlsMdo/iCSLQLQLTNPksUqdohWHvtJeziCIwThUc43inhA95sKkPxxCB8TlDLhsq+LkTxxAB8QBwliaPWRU74BwC5iShyeUaQx4v13xtdwYRCEcMOVxfs+2btFmVhOY/fe90uz77DWcfyzbBcrLJUQTAIUP8T1jw/1gSGj4HTq9RM+d1OJhuqK0Xt6yzdyGFgbJ7wdWG2N812J6jWanTXf9B27W16DCfNcR9V4Gt7C6WxfwCm/Ut6uxdTGGomWcYVuZ+LbCX00oWiwpsxtusrUWANfP2Evay71MWS0rYvdhLQu+0UDOvyLFdUcJO+r6xF4Q+ZqlmXp1jf1NJ2+/VIaqohR6s0Wao7NSzpoL9lpiF3luzZs6j3CyTxboK9tZr6+MdqpmXamLsK6iZ83hvjp97KvqwWluPBlAz323po67BGn6stbqvM7iwzP2GmnmOWjuu6jOv++7DNfwcstXPb0B9BudT6FsN8b3SgRtBrnVbwQKPYu80xLWq4deLyHn/J+DHkq3sdZQx3GBL7AF1JnqPwwfkUdXQVRfPvga+xzL9/+XPX4Swbu0aww3/iMtyfC5v6FOufUeFxaqObSLKmTl+ZzT06W1PSBvoU/sumk5L1+T4XmbBr5c9IW1gvQUxTs3Rl7b0rUfO94S0AZvdcGxVHVl+SQSYsChIW5QxBo/POiBkEeWyRfBYbek7ENvkzUSCW9Rdo2uh7IMyFtkv76TI/wC9YfRvA72vwwAAAABJRU5ErkJggg=="/>
</defs>
</svg>
`,
      },
      {
        title: "Knowledge base",
        description:
          "Convert a hexadecimal value to decimal and a decimal value to hexadecimal.",
        link: "/others/hexconverter",
        icon: `<svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_18507_10215" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-1" width="17" height="27">
<path d="M0 -0.0507812H16.3647V26.0002H0V-0.0507812Z" fill="white"/>
</mask>
<g mask="url(#mask0_18507_10215)">
<path d="M14.6233 -0.0507812H1.74121C1.28555 -0.0507812 0.848669 0.132219 0.526642 0.457814C0.204421 0.783615 0.0234375 1.22537 0.0234375 1.68588V24.2636C0.0234375 24.7242 0.204426 25.1659 0.526642 25.4917C0.848664 25.8173 1.28556 26.0003 1.74121 26.0003H14.6233C15.079 26.0003 15.5159 25.8173 15.8379 25.4917C16.1601 25.1659 16.3411 24.7242 16.3411 24.2636V1.68588C16.3411 1.22536 16.1601 0.783625 15.8379 0.457814C15.5159 0.132214 15.079 -0.0507812 14.6233 -0.0507812ZM15.4821 24.2633H15.4823C15.4823 24.4936 15.3918 24.7146 15.2306 24.8774C15.0696 25.0402 14.8512 25.1317 14.6233 25.1317H1.74121C1.51348 25.1317 1.29494 25.0402 1.13393 24.8774C0.972919 24.7146 0.882422 24.4936 0.882422 24.2633V1.68557C0.882422 1.45531 0.972914 1.23454 1.13393 1.07154C1.29494 0.908743 1.51348 0.817241 1.74121 0.817241H14.6233C14.8512 0.817241 15.0696 0.908738 15.2306 1.07154C15.3918 1.23454 15.4823 1.45531 15.4823 1.68557L15.4821 24.2633Z" fill="black"/>
<path d="M13.7639 1.68604H2.59902C2.37129 1.68604 2.15275 1.77753 1.99174 1.94054C1.83073 2.10333 1.74023 2.32411 1.74023 2.55457V6.0281V6.0279C1.74023 6.25816 1.83073 6.47914 1.99174 6.64193C2.15275 6.80473 2.37129 6.89623 2.59902 6.89623H13.7639C13.9916 6.89623 14.2101 6.80474 14.3711 6.64193C14.5321 6.47914 14.6226 6.25816 14.6226 6.0279V2.55457C14.6226 2.32411 14.5322 2.10334 14.3711 1.94054C14.2101 1.77754 13.9916 1.68604 13.7639 1.68604ZM2.59902 6.0279V2.55457H13.7639V6.02811L2.59902 6.0279Z" fill="black"/>
<path d="M3.45781 11.2378H2.59902C2.37129 11.2378 2.15275 11.3293 1.99174 11.4921C1.83073 11.6551 1.74023 11.8759 1.74023 12.1061V12.9747C1.74023 13.2049 1.83073 13.4257 1.99174 13.5887C2.15275 13.7515 2.37129 13.843 2.59902 13.843H3.45781C3.68554 13.843 3.90409 13.7515 4.0651 13.5887C4.22611 13.4257 4.3166 13.2049 4.3166 12.9747V12.1061C4.3166 11.8759 4.22611 11.6551 4.0651 11.4921C3.90409 11.3293 3.68554 11.2378 3.45781 11.2378ZM2.59902 12.9745V12.1061H3.45781V12.9745H2.59902Z" fill="black"/>
<path d="M6.89336 11.2378H6.03457C5.80664 11.2378 5.58829 11.3293 5.42729 11.4921C5.26608 11.6551 5.17578 11.8759 5.17578 12.1061V12.9747C5.17578 13.2049 5.26607 13.4257 5.42729 13.5887C5.58829 13.7515 5.80664 13.843 6.03457 13.843H6.89336C7.12109 13.843 7.33964 13.7515 7.50065 13.5887C7.66165 13.4257 7.75215 13.2049 7.75215 12.9747V12.1061C7.75215 11.8759 7.66166 11.6551 7.50065 11.4921C7.33964 11.3293 7.12109 11.2378 6.89336 11.2378ZM6.03457 12.9745V12.1061H6.89336V12.9745H6.03457Z" fill="black"/>
<path d="M10.3291 11.2378H9.47012C9.24239 11.2378 9.02404 11.3293 8.86283 11.4921C8.70182 11.6551 8.61133 11.8759 8.61133 12.1061V12.9747C8.61133 13.2049 8.70182 13.4257 8.86283 13.5887C9.02404 13.7515 9.24239 13.843 9.47012 13.843H10.3291C10.5568 13.843 10.7752 13.7515 10.9364 13.5887C11.0974 13.4257 11.1879 13.2049 11.1879 12.9747V12.1061C11.1879 11.8759 11.0974 11.6551 10.9364 11.4921C10.7752 11.3293 10.5568 11.2378 10.3291 11.2378ZM9.47032 12.9745L9.47012 12.1061H10.3289V12.9745H9.47032Z" fill="black"/>
<path d="M13.7645 11.2378H12.9057C12.6779 11.2378 12.4594 11.3293 12.2984 11.4921C12.1374 11.6551 12.0469 11.8759 12.0469 12.1061V12.9747C12.0469 13.2049 12.1374 13.4257 12.2984 13.5887C12.4594 13.7515 12.6779 13.843 12.9057 13.843H13.7645C13.9922 13.843 14.2107 13.7515 14.3717 13.5887C14.5327 13.4257 14.6232 13.2049 14.6232 12.9747V12.1061C14.6232 11.8759 14.5328 11.6551 14.3717 11.4921C14.2107 11.3293 13.9922 11.2378 13.7645 11.2378ZM12.9057 12.9745V12.1061H13.7645V12.9745H12.9057Z" fill="black"/>
<path d="M3.45781 14.7119H2.59902C2.37129 14.7119 2.15275 14.8034 1.99174 14.9662C1.83073 15.129 1.74023 15.35 1.74023 15.5802V16.4486C1.74023 16.679 1.83073 16.8998 1.99174 17.0626C2.15275 17.2256 2.37129 17.3169 2.59902 17.3169H3.45781C3.68554 17.3169 3.90409 17.2256 4.0651 17.0626C4.22611 16.8998 4.3166 16.679 4.3166 16.4486V15.5802C4.3166 15.35 4.22611 15.129 4.0651 14.9662C3.90409 14.8034 3.68554 14.7119 3.45781 14.7119ZM2.59902 16.4486V15.5802H3.45781V16.4486H2.59902Z" fill="black"/>
<path d="M6.89336 14.7119H6.03457C5.80664 14.7119 5.58829 14.8034 5.42729 14.9662C5.26608 15.129 5.17578 15.35 5.17578 15.5802V16.4486C5.17578 16.679 5.26607 16.8998 5.42729 17.0626C5.58829 17.2256 5.80664 17.3169 6.03457 17.3169H6.89336C7.12109 17.3169 7.33964 17.2256 7.50065 17.0626C7.66165 16.8998 7.75215 16.679 7.75215 16.4486V15.5802C7.75215 15.35 7.66166 15.129 7.50065 14.9662C7.33964 14.8034 7.12109 14.7119 6.89336 14.7119ZM6.03457 16.4486V15.5802H6.89336V16.4486H6.03457Z" fill="black"/>
<path d="M10.3291 14.7119H9.47012C9.24239 14.7119 9.02404 14.8034 8.86283 14.9662C8.70182 15.129 8.61133 15.35 8.61133 15.5802V16.4486C8.61133 16.679 8.70182 16.8998 8.86283 17.0626C9.02404 17.2256 9.24239 17.3169 9.47012 17.3169H10.3291C10.5568 17.3169 10.7752 17.2256 10.9364 17.0626C11.0974 16.8998 11.1879 16.679 11.1879 16.4486V15.5802C11.1879 15.35 11.0974 15.129 10.9364 14.9662C10.7752 14.8034 10.5568 14.7119 10.3291 14.7119ZM9.47032 16.4486L9.47012 15.5802H10.3289V16.4486H9.47032Z" fill="black"/>
<path d="M13.7645 14.7119H12.9057C12.6779 14.7119 12.4594 14.8034 12.2984 14.9662C12.1374 15.129 12.0469 15.35 12.0469 15.5802V16.4486C12.0469 16.679 12.1374 16.8998 12.2984 17.0626C12.4594 17.2256 12.6779 17.3169 12.9057 17.3169H13.7645C13.9922 17.3169 14.2107 17.2256 14.3717 17.0626C14.5327 16.8998 14.6232 16.679 14.6232 16.4486V15.5802C14.6232 15.35 14.5328 15.129 14.3717 14.9662C14.2107 14.8034 13.9922 14.7119 13.7645 14.7119ZM12.9057 16.4486V15.5802H13.7645V16.4486H12.9057Z" fill="black"/>
<path d="M3.45781 18.1851H2.59902C2.37129 18.1851 2.15275 18.2766 1.99174 18.4394C1.83073 18.6022 1.74023 18.8231 1.74023 19.0534V19.9217C1.74023 20.152 1.83073 20.373 1.99174 20.5358C2.15275 20.6986 2.37129 20.7901 2.59902 20.7901H3.45781C3.68554 20.7901 3.90409 20.6986 4.0651 20.5358C4.22611 20.373 4.3166 20.152 4.3166 19.9217V19.0534C4.3166 18.8231 4.22611 18.6022 4.0651 18.4394C3.90409 18.2766 3.68554 18.1851 3.45781 18.1851ZM2.59902 19.9217V19.0534H3.45781V19.9217H2.59902Z" fill="black"/>
<path d="M6.89336 18.1851H6.03457C5.80664 18.1851 5.58829 18.2766 5.42729 18.4394C5.26608 18.6022 5.17578 18.8231 5.17578 19.0534V19.9217C5.17578 20.152 5.26607 20.373 5.42729 20.5358C5.58829 20.6986 5.80664 20.7901 6.03457 20.7901H6.89336C7.12109 20.7901 7.33964 20.6986 7.50065 20.5358C7.66165 20.373 7.75215 20.152 7.75215 19.9217V19.0534C7.75215 18.8231 7.66166 18.6022 7.50065 18.4394C7.33964 18.2766 7.12109 18.1851 6.89336 18.1851ZM6.03457 19.9217V19.0534H6.89336V19.9217H6.03457Z" fill="black"/>
<path d="M10.3291 18.1851H9.47012C9.24239 18.1851 9.02404 18.2766 8.86283 18.4394C8.70182 18.6022 8.61133 18.8231 8.61133 19.0534V19.9217C8.61133 20.152 8.70182 20.373 8.86283 20.5358C9.02404 20.6986 9.24239 20.7901 9.47012 20.7901H10.3291C10.5568 20.7901 10.7752 20.6986 10.9364 20.5358C11.0974 20.373 11.1879 20.152 11.1879 19.9217V19.0534C11.1879 18.8231 11.0974 18.6022 10.9364 18.4394C10.7752 18.2766 10.5568 18.1851 10.3291 18.1851ZM9.47032 19.9217L9.47012 19.0534H10.3289V19.9217H9.47032Z" fill="black"/>
<path d="M13.7645 18.1851H12.9057C12.6779 18.1851 12.4594 18.2766 12.2984 18.4394C12.1374 18.6022 12.0469 18.8231 12.0469 19.0534V19.9217C12.0469 20.152 12.1374 20.373 12.2984 20.5358C12.4594 20.6986 12.6779 20.7901 12.9057 20.7901H13.7645C13.9922 20.7901 14.2107 20.6986 14.3717 20.5358C14.5327 20.373 14.6232 20.152 14.6232 19.9217V19.0534C14.6232 18.8231 14.5328 18.6022 14.3717 18.4394C14.2107 18.2766 13.9922 18.1851 13.7645 18.1851ZM12.9057 19.9217V19.0534H13.7645V19.9217H12.9057Z" fill="black"/>
<path d="M3.45781 21.6582H2.59902C2.37129 21.6582 2.15275 21.7497 1.99174 21.9127C1.83073 22.0755 1.74023 22.2963 1.74023 22.5267V23.3951C1.74023 23.6253 1.83073 23.8461 1.99174 24.0091C2.15275 24.1719 2.37129 24.2634 2.59902 24.2634H3.45781C3.68554 24.2634 3.90409 24.1719 4.0651 24.0091C4.22611 23.8461 4.3166 23.6253 4.3166 23.3951V22.5267C4.3166 22.2963 4.22611 22.0755 4.0651 21.9127C3.90409 21.7497 3.68554 21.6582 3.45781 21.6582ZM2.59902 23.3949V22.5267H3.45781V23.3951L2.59902 23.3949Z" fill="black"/>
<path d="M6.89336 21.6582H6.03457C5.80664 21.6582 5.58829 21.7497 5.42729 21.9127C5.26608 22.0755 5.17578 22.2963 5.17578 22.5267V23.3951C5.17578 23.6253 5.26607 23.8461 5.42729 24.0091C5.58829 24.1719 5.80664 24.2634 6.03457 24.2634H6.89336C7.12109 24.2634 7.33964 24.1719 7.50065 24.0091C7.66165 23.8461 7.75215 23.6253 7.75215 23.3951V22.5267C7.75215 22.2963 7.66166 22.0755 7.50065 21.9127C7.33964 21.7497 7.12109 21.6582 6.89336 21.6582ZM6.03457 23.3949V22.5267H6.89336V23.3951L6.03457 23.3949Z" fill="black"/>
<path d="M10.3291 21.6582H9.47012C9.24239 21.6582 9.02404 21.7497 8.86283 21.9127C8.70182 22.0755 8.61133 22.2963 8.61133 22.5267V23.3951C8.61133 23.6253 8.70182 23.8461 8.86283 24.0091C9.02404 24.1719 9.24239 24.2634 9.47012 24.2634H10.3291C10.5568 24.2634 10.7752 24.1719 10.9364 24.0091C11.0974 23.8461 11.1879 23.6253 11.1879 23.3951V22.5267C11.1879 22.2963 11.0974 22.0755 10.9364 21.9127C10.7752 21.7497 10.5568 21.6582 10.3291 21.6582ZM9.47032 23.3949L9.47012 22.5267H10.3289V23.3951L9.47032 23.3949Z" fill="black"/>
<path d="M13.7645 21.6582H12.9057C12.6779 21.6582 12.4594 21.7497 12.2984 21.9127C12.1374 22.0755 12.0469 22.2963 12.0469 22.5267V23.3951C12.0469 23.6253 12.1374 23.8461 12.2984 24.0091C12.4594 24.1719 12.6779 24.2634 12.9057 24.2634H13.7645C13.9922 24.2634 14.2107 24.1719 14.3717 24.0091C14.5327 23.8461 14.6232 23.6253 14.6232 23.3951V22.5267C14.6232 22.2963 14.5328 22.0755 14.3717 21.9127C14.2107 21.7497 13.9922 21.6582 13.7645 21.6582ZM12.9057 23.3949V22.5267H13.7645V23.3951L12.9057 23.3949Z" fill="black"/>
<path d="M2.60137 8.63298H3.46016C3.69728 8.63298 3.88965 8.43847 3.88965 8.19871C3.88965 7.95896 3.69728 7.76465 3.46016 7.76465H2.60137C2.36425 7.76465 2.17188 7.95896 2.17188 8.19871C2.17188 8.43847 2.36425 8.63298 2.60137 8.63298Z" fill="black"/>
<path d="M5.17559 8.63298H6.03438C6.2715 8.63298 6.46367 8.43847 6.46367 8.19871C6.46367 7.95896 6.2715 7.76465 6.03438 7.76465H5.17559C4.93827 7.76465 4.74609 7.95896 4.74609 8.19871C4.74609 8.43847 4.93827 8.63298 5.17559 8.63298Z" fill="black"/>
<path d="M7.75371 8.63298H8.6125C8.84962 8.63298 9.04199 8.43847 9.04199 8.19871C9.04199 7.95896 8.84962 7.76465 8.6125 7.76465H7.75371C7.51659 7.76465 7.32422 7.95896 7.32422 8.19871C7.32422 8.43847 7.51659 8.63298 7.75371 8.63298Z" fill="black"/>
<path d="M11.1887 7.76465H10.3299C10.0926 7.76465 9.90039 7.95896 9.90039 8.19871C9.90039 8.43847 10.0926 8.63298 10.3299 8.63298H11.1887C11.4258 8.63298 11.618 8.43847 11.618 8.19871C11.618 7.95896 11.4258 7.76465 11.1887 7.76465Z" fill="black"/>
<path d="M12.9061 8.63298H13.7648C14.002 8.63298 14.1943 8.43847 14.1943 8.19871C14.1943 7.95896 14.002 7.76465 13.7648 7.76465H12.9061C12.6689 7.76465 12.4766 7.95896 12.4766 8.19871C12.4766 8.43847 12.6689 8.63298 12.9061 8.63298Z" fill="black"/>
<path d="M2.60137 10.3698H3.46016C3.69728 10.3698 3.88965 10.1755 3.88965 9.93573C3.88965 9.69577 3.69728 9.50146 3.46016 9.50146H2.60137C2.36425 9.50146 2.17188 9.69577 2.17188 9.93573C2.17188 10.1755 2.36425 10.3698 2.60137 10.3698Z" fill="black"/>
<path d="M6.03437 10.3698C6.27149 10.3698 6.46367 10.1755 6.46367 9.93573C6.46367 9.69577 6.27149 9.50146 6.03437 9.50146H5.17558C4.93827 9.50146 4.74609 9.69577 4.74609 9.93573C4.74609 10.1755 4.93827 10.3698 5.17558 10.3698H6.03437Z" fill="black"/>
<path d="M9.04199 9.93573C9.04199 9.82039 8.99665 9.71011 8.91614 9.62871C8.83564 9.54711 8.72637 9.50146 8.6125 9.50146H7.75371C7.51659 9.50146 7.32422 9.69577 7.32422 9.93573C7.32422 10.1755 7.51659 10.3698 7.75371 10.3698H8.6125C8.72637 10.3698 8.83564 10.3241 8.91614 10.2425C8.99665 10.1611 9.04199 10.0509 9.04199 9.93573Z" fill="black"/>
<path d="M11.1887 9.50098H10.3299C10.0926 9.50098 9.90039 9.69529 9.90039 9.93524C9.90039 10.175 10.0926 10.3693 10.3299 10.3693H11.1887C11.4258 10.3693 11.618 10.175 11.618 9.93524C11.618 9.69529 11.4258 9.50098 11.1887 9.50098Z" fill="black"/>
<path d="M12.9061 10.3698H13.7648C14.002 10.3698 14.1943 10.1755 14.1943 9.93573C14.1943 9.69577 14.002 9.50146 13.7648 9.50146H12.9061C12.6689 9.50146 12.4766 9.69577 12.4766 9.93573C12.4766 10.1755 12.6689 10.3698 12.9061 10.3698Z" fill="black"/>
<path d="M4.01368 3.55017L3.58419 3.98444V3.98423C3.50128 4.06523 3.45414 4.17632 3.45314 4.29287C3.45214 4.40921 3.49749 4.52131 3.57879 4.60352C3.6603 4.68593 3.77096 4.73178 3.88623 4.73077C4.00149 4.72975 4.11136 4.68189 4.19147 4.59827L4.62096 4.164H4.62076C4.78357 3.99373 4.78117 3.72287 4.61557 3.5554C4.44996 3.38793 4.1821 3.38555 4.01368 3.55017Z" fill="black"/>
<path d="M6.16193 3.55017L5.30314 4.4185H5.30294C5.22023 4.49929 5.17289 4.61058 5.17189 4.72693C5.17089 4.84347 5.21624 4.95537 5.29774 5.03778C5.37904 5.12019 5.48991 5.16584 5.60498 5.16483C5.72024 5.16382 5.83011 5.11615 5.91022 5.03232L6.76901 4.16399C6.93182 3.99372 6.92942 3.72286 6.76382 3.55539C6.59821 3.38794 6.33035 3.38555 6.16193 3.55017Z" fill="black"/>
</g>
</svg>
`,
      },
    ],
  },
];
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
