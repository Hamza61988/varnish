<script setup>
const processingFeatures = [
  {
    title: "Trim",
    description:
      "Trims pixels from all edges that are similar to the top left pixel.",
    examples: [{ code: "https://ip.keycdn.com/example.jpg?trim=10" }],
  },
  {
    title: "Crop",
    description:
      "Crops the image by smart, {width,height}, {width,height,x,y}, fp,{fp-x,fp-y}, fp,{fp-x,fp-y,fp-z}, or fpd,{fp-x,fp-y}. smart uses an algorithm to automatically focus on the most important part of the image. width, height, x, and y are defined in pixels. fp-x, fp-y are defined in pixels or as a ratio of the base image. fp-z is the zoom factor. fp is the focus point and fpd is the focus point in debug mode that adds a red hairline cross to the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?crop=smart&width=400&height=400",
        image: "/images/Zones/crop.svg",
        widthClass: "",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?crop=600,400",
        image: "/images/Zones/crop2.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?crop=600,400,100,0",
        image: "/images/Zones/crop3.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?crop=fp,0.40,0.70,2.2&width=600&height=400",
        image: "/images/Zones/crop4.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?crop=fpd,0.40,0.70&width=800&height=400",
        image: "/images/Zones/crop5.svg",
      },
    ],
  },
  {
    title: "Width",
    description: "Resizes the image width defined in pixels.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?width=600",
        image: "/images/Zones/width.svg",
      },
    ],
  },
  {
    title: "Height",
    description: "Resizes the image height defined in pixels",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?height=400",
        image: "/images/Zones/height.svg",
      },
    ],
  },
  {
    title: "Fit",
    description:
      "Defines how the image should fit within the provided width and height dimensions.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?width=400&height=400&fit=cover",
        image: "/images/Zones/fit.svg",
      },
    ],
  },
  {
    title: "Position",
    description: "Sets the position of the image in the canvas.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?width=400&height=200&fit=cover&position=top",
        image: "/images/Zones/position.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?width=400&height=400&fit=contain&position=top",
        image: "/images/Zones/position2.svg",
      },
    ],
  },
  {
    title: "Enlarge",
    description:
      "Defines if the image should be enlarged beyond the original dimensions.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?width=730&enlarge=0",
        image: "/images/Zones/enlarge.svg",
      },
    ],
  },
  {
    title: "bg",
    description: "Sets the background color of the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?width=400&height=400&fit=contain&bg=2e3234",
        image: "/images/Zones/bg.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?width=400&height=400&fit=contain&bg=46,50,52",
        image: "/images/Zones/bg2.svg",
      },
    ],
  },
  {
    title: "extend",
    description:
      "Extend the image by {padding} or {top,right,bottom,left} defined in pixels.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?extend=100",
        image: "/images/Zones/extend.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?extend=100,50,100,50",
        image: "/images/Zones/extend2.svg",
      },
    ],
  },
  {
    title: "rotate",
    description: "Rotates the output image by a positive or negative degree.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?rotate=90",
        image: "/images/Zones/rotatee.svg",
      },
    ],
  },
  {
    title: "flip",
    description: "Flips the image vertically (y axis).",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?flip=1",
        image: "/images/Zones/flip.svg",
      },
    ],
  },
  {
    title: "flop",
    description: "Flops the image horizontally (x axis).",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?flop=1",
        image: "/images/Zones/flop.svg",
      },
    ],
  },
  {
    title: "sharpen",
    description:
      "Sharpens the image. A higher sharpen value will increase the processing latency.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?sharpen=10",
        image: "/images/Zones/sharpen.svg",
      },
    ],
  },
  {
    title: "blur",
    description:
      "Blurs the image. A higher blur value will increase the processing latency.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?blur=5",
        image: "/images/Zones/blur.svg",
      },
    ],
  },
  {
    title: "gamma",
    description:
      "Performs a gamma correction by reducing the encoding pre-resize at a factor of 1/gamma then increasing the encoding post-resize at a factor of gamma.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?gamma=1.5",
        image: "/images/Zones/gamma.svg",
      },
    ],
  },
  {
    title: "negate",
    description: "Creates the negative of the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?negate=1",
        image: "/images/Zones/negate.svg",
      },
    ],
  },
  {
    title: "normalize",
    description:
      "Improves output image contrast by lengthening its luminance to cover the full dynamic range.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?normalize=1",
        image: "/images/Zones/normalize.svg",
      },
    ],
  },
  {
    title: "threshold",
    description:
      "Changes any pixel value greater than or equal to the threshold value to 255, otherwise to 0.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?threshold=100",
        image: "/images/Zones/threshold.svg",
      },
    ],
  },
  {
    title: "tint",
    description:
      "Tints the image using tint hex color value while preserving the image luminance.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?tint=047aed",
        image: "/images/Zones/tint.svg",
      },
    ],
  },
  {
    title: "grayscale",
    description:
      "Converts the image to a 8-bit grayscale with 256 shades of gray. If the  input image is in a nonlinear color space (e.g. sRGB), use gamma together with grayscale for optimal results.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?grayscale=1",
        image: "/images/Zones/grayscale.svg",
      },
    ],
  },
  {
    title: "removealpha",
    description: "Removes the alpha channel from the image, if any.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?removealpha=1",
      },
    ],
  },
  {
    title: "olurl",
    description:
      "Specifies the URL of the overlay image (also known as watermark). The valid overlay image formats are svg, jpeg, png and webp. The URL can be plain (e.g. https://logos.keycdn.com/keycdn-logo-black.svg) or encoded (e.g. https%3A%2F%2Flogos.keycdn.com%2Fkeycdn-logo-black.svg).",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg",
        image: "/images/Zones/olurl.svg",
      },
    ],
  },
  {
    title: "olalign",
    description:
      "Changes the alignment of the overlay image within the base image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olalign=topright",
        image: "/images/Zones/olalign.svg",
      },
    ],
  },
  {
    title: "olx and oly",
    description:
      "Sets the location of the overlay image based on coordinates (pixels). olx and oly will take precedence over olalign.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olx=100&oly=300",
        image: "/images/Zones/olxoly.svg",
      },
    ],
  },
  {
    title: "olwidth",
    description:
      "Defines the width of the overlay image relative to the base image if <=1 or in absolute pixel if >2.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olwidth=400",
        image: "/images/Zones/olwidth.svg",
      },
    ],
  },
  {
    title: "olheight",
    description:
      "Defines the height of the overlay image relative to the base image if <=1 or in absolute pixel if >2.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olheight=0.75",
        image: "/images/Zones/olheight.svg",
      },
    ],
  },
  {
    title: "olscale",
    description:
      "Defines the width of the overlay image in percent to the width of the base image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olscale=40",
        image: "/images/Zones/olscale.svg",
      },
    ],
  },
  {
    title: "olpadding",
    description: "Changes the padding of the overlay image in pixels.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olalign=bottomleft&olpadding=100",
        image: "/images/Zones/olpadding.svg",
      },
    ],
  },
  {
    title: "olalpha",
    description: "Adjusts the alpha transparency of the overlay image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olalpha=35",
        image: "/images/Zones/olalpha.svg",
      },
    ],
  },
  {
    title: "olrepeat",
    description: "Repeats the overlay image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olrepeat=1",
        image: "/images/Zones/olrepeat.svg",
      },
    ],
  },
  {
    title: "format",
    description: "Specifies the output format of the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=jpeg",
        image: "/images/Zones/format.svg",
      },
    ],
  },
  {
    title: "quality",
    description: "Sets the quality level of the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?quality=70",
        image: "/images/Zones/quality.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?format=webp&quality=70",
        image: "/images/Zones/quality2.svg",
      },
    ],
  },
  {
    title: "progress",
    description: "Specifies to use progressive (interlace) scan of the image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?progressive=1",
        image: "/images/Zones/progress.svg",
      },
      {
        code: "https://ip.keycdn.com/example.jpg?format=png&progressive=1",
        image: "/images/Zones/progress2.svg",
      },
    ],
  },
  {
    title: "compression",
    description: "Defines the zlib compression level of the PNG image.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=png&compression=5",
        image: "/images/Zones/compression.svg",
      },
    ],
  },
  {
    title: "adaptive",
    description: "Enables adaptive row filtering on PNG images.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=png&adaptive=1",
        image: "/images/Zones/adaptive.svg",
      },
    ],
  },
  {
    title: "alphaquality",
    description: "Specifies the quality of the alpha layer.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=webp&alphaquality=20",
      },
    ],
  },
  {
    title: "lossless",
    description: "This option encodes the WebP image without any loss.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=webp&lossless=1",
        image: "/images/Zones/lossless.svg",
      },
    ],
  },
  {
    title: "nearlossless",
    description:
      "This option adjusts WebP pixel values to help compressibility, but has  minimal impact on the visual quality. It is linked to the quality parameter.",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?format=webp&nearlossless=1",
        image: "/images/Zones/nearlosses.svg",
      },
    ],
  },

  {
    title: "metadata",
    description: "Keeps the image metadata (EXIF, IPTC, and XMP).",
    examples: [
      {
        code: "https://ip.keycdn.com/example.jpg?metadata=1",
        image: "/images/Zones/metadata.svg",
      },
    ],
  },
  {
    title: "Signing requests",
    description:
      "Signing Image Processing requests means securing the URL from unwanted modifications. Once the Zone settings Secure Token and Image Processing are enabled, an image can only be requested with a valid token. Any request with an invalid signature will result in a 403 error. This ensures that an unwanted image operation cannot be executed. Each  request will be signed with a individual token. How to generate a valid  token is described in our Secure Token article.",
    examples: [
      {
        code: "curl -I https://www.keycdn.com/img/example.jpg",
        image: "/images/Zones/signingreq.svg",
      },
    ],
  },
  {
    title: "Signing overlay requests",
    description:
      "Signing overlay images is a special case where the base image from the origin should not be  revealed or accessed. In order to achieve this, there are a few  important details to consider. First, a canonical header would reveal  where the base image is located. That means if the origin server is not  authenticating requests then someone could simply use this URL to access the image directly from the origin without the watermark. Therefore,  the Zone setting Canonical Header should be disabled. The canonical header should also be removed from the origin server if set. Next, choosing a secret Origin URL, such as https://urjdh47e.example.com, is recommended as this makes it more difficult to be guessed compared to something more common like https://www.example.com. Limiting acccess to the origin server to only KeyCDN can be implemented for further access control. One way to do this would be through the X-Pull request header, which is a request header that all of KeyCDN's requests contain. A unique X-Pull Key could be set followed by a rule added to the origin server that forbids any requests without that request header and value.",
    examples: [
      {
        code: "https://ipsigned.keycdn.com/example.jpg?olurl=https://logos.keycdn.com/keycdn-logo-black.svg&olwidth=400&token=bxoFkqiyiKcFVIUmzBcVbg",
        image: "/images/Zones/signingoverlayreq.svg",
      },
    ],
  },
];
const tableHeaders = ["PARAMETER", "VALUE", "DEPENDENCIES", "DEFAULT"];

const tableRows = [
  {
    paramName: "trim",
    paramType: "trim",
    valRange: "0-100",
    valType: "integer",
    dependencies: "",
    default: "",
  },
  {
    paramName:
      "crop=smart\ncrop={width,height}\ncrop={width,height,x,y}\ncrop=fp,{fp-x,fp-y}\ncrop=fp,{fp-x,fp-y,fp-z}\ncrop=fpd,{fp-x,fp-y}",
    paramType: "crop",
    valRange: "0 - 10000\n\n\n0 - 1\n\n0 - 100", // Extra \n used to space out visually to match left side
    valType:
      "integer (pixels) for width,\nheight, x, y, fp-x, fp-y\nfloat (ratio of base image)\nfor fp-x, fp-y\ninteger (zoom factor)\nfor fp-z",
    dependencies: "smart,fp, fpd\nrequires width and\nheight",
    default: "",
  },
  {
    paramName: "width",
    paramType: "resize",
    valRange: "0-10000",
    valType: "integer (pixels)",
    dependencies: "",
    default: "",
  },
  {
    paramName: "height",
    paramType: "resize",
    valRange: "0-10000",
    valType: "integer (pixels)",
    dependencies: "",
    default: "",
  },
  {
    paramName: "fit",
    paramType: "resize",
    valRange: "cover, contain, fill,\ninside, or outside",
    valType: "string",
    dependencies: "width and height",
    default: "",
  },
  {
    paramName: "position",
    paramType: "resize",
    valRange: "top, right, bottom,\nor left",
    valType: "string",
    dependencies: "fit of cover or\ncontain",
    default: "",
  },
  {
    paramName: "enlarge",
    paramType: "resize",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "width or height",
    default: "",
  },
  {
    paramName: "bg={hex}\nbg={r,g,b}\nbg={r,g,b,a}",
    paramType: "resize, extend",
    // Using double newlines to visually space out the Hex and RGB values
    valRange: "000000-ffffff\n\n0,0,0,0.0-\n255,255,255,1.0",
    valType: "hex\n\nrgb with optional\nalpha",
    dependencies: "extend or fit of\ncontain",
    default: "",
  },
  {
    paramName: "extend={padding}\nextend={top,right,bottom,left}",
    paramType: "extend",
    valRange: "0-1000",
    valType: "integer (pixels)",
    dependencies: "",
    default: "",
  },
  {
    paramName: "rotate",
    paramType: "compose",
    valRange: "-359-359",
    valType: "integer (degrees)",
    dependencies: "",
    default: "",
  },
  {
    paramName: "flip",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "flop",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "sharpen",
    paramType: "compose",
    valRange: "0-100",
    valType: "integer",
    dependencies: "",
    default: "",
  },
  {
    paramName: "blur",
    paramType: "compose",
    valRange: "0.3-100",
    valType: "float",
    dependencies: "",
    default: "",
  },
  {
    paramName: "gamma",
    paramType: "compose",
    valRange: "0-3",
    valType: "float",
    dependencies: "",
    default: "",
  },
  {
    paramName: "negate",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "normalize",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "threshold",
    paramType: "compose",
    valRange: "0-255",
    valType: "integer",
    dependencies: "",
    default: "",
  },
  {
    paramName: "tint",
    paramType: "compose",
    valRange: "000000-ffffff",
    valType: "hex",
    dependencies: "",
    default: "",
  },
  {
    paramName: "grayscale",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "removealpha",
    paramType: "compose",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "",
  },
  {
    paramName: "olurl",
    paramType: "overlay",
    valRange: "URL",
    valType: "string",
    dependencies: "",
    default: "",
  },
  {
    paramName: "olalign",
    paramType: "overlay",
    valRange:
      "center, top,\ntopright,\nright, bottomright,\nbottom, bottomleft\nor topleft",
    valType: "string",
    dependencies: "olurl",
    default: "center",
  },
  {
    paramName: "olx and oly",
    paramType: "overlay",
    valRange: "0-2000",
    valType: "integer (pixels)",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "olwidth",
    paramType: "overlay",
    valRange: "0-1 float\n2-2000",
    valType: "integer\n(pixels)",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "olheight",
    paramType: "overlay",
    valRange: "0-1 float\n2-2000",
    valType: "integer\n(pixels)",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "olscale",
    paramType: "overlay",
    valRange: "1-99",
    valType: "integer (percent)",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "olpadding",
    paramType: "overlay",
    valRange: "0-1000",
    valType: "integer (pixels)",
    dependencies: "olurl",
    default: "10",
  },
  {
    paramName: "olalpha",
    paramType: "overlay",
    valRange: "1-99",
    valType: "integer (percent)",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "olrepeat",
    paramType: "overlay",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "format",
    paramType: "format",
    valRange: "jpeg, png, or webp",
    valType: "string",
    dependencies: "olurl",
    default: "",
  },
  {
    paramName: "quality",
    paramType: "format",
    valRange: "0-100",
    valType: "integer",
    dependencies: "jpeg or webp",
    default: "jpeg: 82 / webp: 80",
  },
  {
    paramName: "progressive",
    paramType: "format",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "jpeg or png",
    default: "0",
  },
  {
    paramName: "compression",
    paramType: "format",
    valRange: "0-9",
    valType: "integer",
    dependencies: "png",
    default: "3",
  },
  {
    paramName: "adaptive",
    paramType: "format",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "png",
    default: "0",
  },
  {
    paramName: "alphaquality",
    paramType: "format",
    valRange: "0-100",
    valType: "integer",
    dependencies: "webp",
    default: "100",
  },
  {
    paramName: "lossless",
    paramType: "format",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "webp",
    default: "0",
  },
  {
    paramName: "nearlossless",
    paramType: "format",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "webp",
    default: "0",
  },
  {
    paramName: "metadata",
    paramType: "format",
    valRange: "0 or 1",
    valType: "boolean",
    dependencies: "",
    default: "0",
  },
];
</script>

<template>
  <div class=" md:max-w-lg lg:max-w-3xl flex flex-col gap-4">
    <h1 class="text-[2rem] md:text-5xl font-medium mt-4">Image Processing</h1>

    <img src="/images/Zones/imageprocessing.svg" alt="image processing" />

    <p style="font-family: inter" class="text-[#73737F] text-[13px] md:text-[1rem]">
      Our powerful real-time Image Processing feature transforms and optimizes
      your images with simple query parameters. Your image management workflow
      defines the user experience by transforming and optimizing the image
      delivery for any browser. Process images on the fly to create multiple
      variants and deliver them from our high performance CDN.
    </p>

    <div
      class="bg-[#FEF9D8] text-[#73737F] max-w-[47.5rem] mt-4 mx-auto py-5 rounded-2xl px-10 shadow-sm border border-[#1a192514]"
    >
      <p class="text-[13px] md:text-[1rem]">
        <span class="font-bold">Note: </span>Purging a processed image from the
        CDN cache can only be done by Purge URL. The Cache Key Scheme setting
        must be disabled.
      </p>
    </div>

    <div class="w-full mt-8 font-inter">
      <div
        class="grid grid-cols-4 border-b border-gray-200 pb-4 mb-4 text-[#8B929A] text-[11px] gap-2 md:text-[1rem]  uppercase"
      >
        <div
          style="font-weight: 400; font-family: inter"
          class=""
          v-for="header in tableHeaders"
          :key="header"
        >
          {{ header }}
        </div>
      </div>

      <div
        v-for="(row, index) in tableRows"
        :key="index"
        class="grid grid-cols-4  border-b gap-4 border-gray-200 py-6 text-[#73737F] text-[11px] md:text-base"
      >
        <div class="flex  flex-col gap-1">
          <span
            style="font-family: inter"
            class="text-[#000000]  font-normal whitespace-pre-line leading-relaxed text-[11px] md:text-[15px]"
          >
            {{ row.paramName }}
          </span>
          <span style="font-family: inter" class="text-[#A0A0AA] text-[11px] md:text-[15px]">{{
            row.paramType
          }}</span>
        </div>

        <div class="flex flex-col gap-1">
          <span
            style="font-family: inter"
            class="font-medium  text-black whitespace-pre-line leading-relaxed text-[11px] md:text-[15px]"
          >
            {{ row.valRange }}
          </span>
          <span style="font-family: inter" class="text-[#A0A0AA] text-[11px] md:text-[15px]">
            {{ row.valType }}
          </span>
        </div>

        <div class="whitespace-pre-line text-[11px] md:text-[15px] text-[#A0A0AA]">
          {{ row.dependencies }}
        </div>

        <div class="whitespace-pre-line text-[11px] md:text-[15px] text-[#A0A0AA]">
          {{ row.default }}
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h2 class="text-[2rem] md:text-5xl font-medium text-[#1A1925] mb-4">
        Order of Operations
      </h2>
      <p class="text-[#73737F] text-[13px] md:text-[1rem] leading-relaxed mb-4" style="font-family: Inter;">
        The query parameters can be defined in any order but our system
        normalizes the transformation sequence to the following order:
      </p>
      <ol class="list-disc">
        <ol class="list-decimal flex flex-col gap-4 text-[#73737F] text-[13px] md:text-[1rem] pl-6">
          <li>trim</li>
          <li>crop</li>
          <li>resize</li>
          <li>extend</li>
          <li>compose</li>
          <li>overlay</li>
          <li>format</li>
        </ol>
      </ol>
    </div>

    <div>
      <div
        v-for="(feature, index) in processingFeatures"
        :key="index"
        class="flex flex-col gap-4 mt-8"
      >
        <h2
          class="text-[1.5rem] md:text-[2rem] font-semibold leading-[35px] tracking-[-0.02em]"
          style="font-family: 'Bricolage Grotesque', sans-serif"
        >
          {{ feature.title }}
        </h2>

        <p
          class="text-[13px] md:text-[1rem] leading-[26px] tracking-[-0.006em] text-[#73737f] font-normal"
          style="font-family: 'Inter', sans-serif"
        >
          {{ feature.description }}
        </p>

        <template v-for="(example, exIndex) in feature.examples" :key="exIndex">
          <div
            class="w-full md:w-[662.98px] py-[9px] px-6 border border-[#eeeef0] text-[13px] md:text-sm text-[#73737f] overflow-x-auto whitespace-nowrap"
            style="font-family: 'Inter', sans-serif"
          >
            {{ example.code }}
          </div>

          <img
            v-if="example.image"
            :src="example.image"
            :alt="feature.title + ' example'"
            :class="example.widthClass || 'w-[539px]'"
          />
        </template>
      </div>
    </div>
  </div>
  <ClientOnly>
    <Teleport to="#full-width-section">
      <svg
        class="image-processing-bg hidden md:flex"
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
  </ClientOnly>
</template>

<style scoped>
p,
ol,
ul {
  font-family: inter;
}
</style>
