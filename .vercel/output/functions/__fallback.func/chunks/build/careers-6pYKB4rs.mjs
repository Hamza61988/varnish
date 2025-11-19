import { v as virtual_public__2Fimages_2Fabout_2FIconCareer_default } from './virtual_public-D935o5Sf.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

var careers_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    const isJobListingOpen = ref(true);
    const responsibilities = [
      "Support and engage with KeyCDN users.",
      "Provide fast, accurate and personalized communication to our customers.",
      "Primarily focused on content, customer success, community relations, and sponsoring.",
      "Maintain our knowledge base to improve the accuracy of the support we provide to customers."
    ];
    const skills = [
      "Bachelor's degree or higher, ideally in information technology, communication, or marketing.",
      "A strong practical understanding of web technologies (e.g. HTML, WordPress, and web frameworks).",
      "The experience and ability to create high quality content for multiple channels.",
      "Native English speaking (preferably located in North America or Europe)."
    ];
    const candidateTraits = [
      "Willingness to roll up your sleeves - We have a small (but rapidly growing) operation, so this isn't a role for professional managers.",
      "Passion for learning new things - We hit a relatively broad base of skillsets in our work, so if you just want to focus on the one thing you do well then this may not be the position for you. Ideally you'll be able to teach us things as well.",
      "Value Evidence over opinion - At KeyCDN it's far less important to be right than it is to get it right.",
      "Genuine enthusiasm for the problems we're solving - Life is too short to do anything that you're not excited about."
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen relative overflow-hidden",
        style: { "background": "#ffffff" }
      }, _attrs))}><div class="absolute inset-0 pointer-events-none hidden md:block" style="${ssrRenderStyle({
        "background-image": "url('/images/about/BGline.svg')",
        "background-repeat": "no-repeat",
        "background-position": "left bottom",
        "background-size": "auto",
        "opacity": "1",
        "z-index": "0"
      })}"></div><main class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10"><section class="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 mx-auto px-4 sm:px-6 md:px-0"><div class="flex items-center justify-center mb-4 sm:mb-6"><div class="flex items-center" style="${ssrRenderStyle({
        "height": "24px",
        "gap": "2px",
        "border-radius": "999px",
        "padding-top": "4px",
        "padding-right": "8px",
        "padding-bottom": "4px",
        "padding-left": "8px",
        "background": "#ffffffe5",
        "box-shadow": "0px 0.5px 0.5px 0px rgba(7, 1, 19, 0.03),\n                0px 1px 1px -0.5px rgba(7, 1, 19, 0.03),\n                0px 2px 2px -1px rgba(7, 1, 19, 0.03),\n                0px 3px 3px -1.5px rgba(7, 1, 19, 0.03)"
      })}"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#A3A3AE] stroke-[#A3A3AE]" viewBox="0 0 24 24" fill="none" stroke="#A3A3AE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({
        "min-width": "16px",
        "min-height": "16px"
      })}"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg><span style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "500",
        "font-size": "12px",
        "line-height": "16px",
        "letter-spacing": "0%",
        "text-align": "center",
        "color": "#1a1925"
      })}"> Careers </span></div></div><h1 class="text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "500",
        "letter-spacing": "-0.02em",
        "text-align": "center",
        "vertical-align": "middle",
        "color": "#1a1925"
      })}"> Careers </h1><p class="text-center mb-8 sm:mb-10 md:mb-12" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "24px",
        "letter-spacing": "-0.011em",
        "text-align": "center",
        "color": "#51515e"
      })}"> We are looking for smart and enthusiastic people to help us build a world-class CDN. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20"><div class="w-full m-auto"><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "text-align": "justify",
        "color": "#73737f"
      })}"> KeyCDN is a content delivery network headquartered in Switzerland. We are a privately funded company that has engineered our infrastructure from the ground up. There are no investors to please, allowing our primary focus to remain where it should be, making our network as fast and reliable as possible. </p></div><div class="w-full space-y-4 sm:space-y-6" style="${ssrRenderStyle({
        "display": "flex",
        "flex-direction": "column",
        "align-items": "flex-end"
      })}"><div class="flex gap-4 p-4 sm:p-5 md:p-6 mb-4" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> Outcome-oriented culture </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> We strongly value a positive working environment where talent can thrive. </p></div></div><div class="flex gap-4 p-4 sm:p-5 md:p-6" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> International team </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Diverse origins with team members based out of many different countries. </p></div></div><div class="flex gap-4 p-4 sm:p-5 md:p-6" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> Pride in your craft </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Enjoy the work that you do and be proud of the impact that your skills have. </p></div></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20"><div class="w-full space-y-4 sm:space-y-6"><div class="flex gap-4 p-4 sm:p-5 md:p-6" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> Remote first company </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Geographical restraints are a problem of the past allowing you to work from any location. </p></div></div><div class="flex gap-4 p-4 sm:p-5 md:p-6" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> Flexible vacation time </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Take time off when needed as we highly value a healthy work-life balance. </p></div></div><div class="flex gap-4 p-4 sm:p-5 md:p-6" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff",
        "width": "80%"
      })}"><div class="flex-shrink-0 flex items-center justify-center rounded-full" style="${ssrRenderStyle({
        "width": "48px",
        "height": "48px"
      })}"><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FIconCareer_default)} alt="Icon" class="w-6 h-6"></div><div><h3 class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Bricolage Grotesque', sans-serif",
        "font-weight": "600",
        "font-size": "18px",
        "line-height": "24px",
        "letter-spacing": "-0.02em",
        "color": "#1a1925"
      })}"> Continued learning </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "15px",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> We invest in your education in the constantly changing IT landscape. </p></div></div></div><div class="w-full m-auto"><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "text-align": "justify",
        "color": "#73737f"
      })}"> Our global footprint is vast with 60+ data centers spread across 6 continents. It is imperative that we expand our network where true value can be added and performance can be enhanced. We are looking for talented individuals that have the passion and initiative to help us improve and grow our network. </p></div></div><div class="mb-12 sm:mb-16 md:mb-20"><div style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff"
      })}"><button class="w-full flex items-center justify-between pb-4 mb-4 cursor-pointer bg-transparent border-none text-left" style="${ssrRenderStyle({
        "border-bottom": "1px solid #eeeef0",
        "padding": "24px"
      })}"><h2 style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#73737f"
      })}"> Customer support specialist (remote) </h2><svg class="${ssrRenderClass([{ "rotate-180": unref(isJobListingOpen) }, "w-5 h-5 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="${ssrRenderStyle({ "color": "#73737f" })}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="space-y-6" style="${ssrRenderStyle([{ "padding": "24px" }, unref(isJobListingOpen) ? null : { display: "none" }])}"><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> If you&#39;re passionate about technology and customer support, can back our content strategy, and execute with a minimal amount of hand holding then we&#39;d love to have a conversation with you. We&#39;re looking for a customer support specialist that loves interacting with our customers. </p><div><h3 class="mb-3" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "600",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> The job </h3><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> Solve customer issues by developing expertise in relevant product areas and by learning to troubleshoot a diverse range of customer issues. The ideal candidate will be comfortable working in a rapid changing startup environment and is willing to be evaluated based on objective performance measures. </p></div><div><h3 class="mb-3" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> You&#39;ll own and be responsible for: </h3><ul class="space-y-2" style="${ssrRenderStyle({
        "list-style-type": "disc",
        "padding-left": "20px"
      })}"><!--[-->`);
      ssrRenderList(responsibilities, (item) => {
        _push(`<li style="${ssrRenderStyle({
          "font-family": "'Inter', sans-serif",
          "font-weight": "400",
          "font-size": "16px",
          "line-height": "26px",
          "letter-spacing": "-0.006em",
          "color": "#000000",
          "margin-bottom": "4px"
        })}">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="mb-3" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "600",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> What skills and experience we&#39;re looking for </h3><ul class="space-y-2" style="${ssrRenderStyle({
        "list-style-type": "disc",
        "padding-left": "20px"
      })}"><!--[-->`);
      ssrRenderList(skills, (item) => {
        _push(`<li style="${ssrRenderStyle({
          "font-family": "'Inter', sans-serif",
          "font-weight": "400",
          "font-size": "16px",
          "line-height": "26px",
          "letter-spacing": "-0.006em",
          "color": "#000000",
          "margin-bottom": "4px"
        })}">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="mb-3" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "600",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> What we absolutely need in a candidate </h3><ul class="space-y-2" style="${ssrRenderStyle({
        "list-style-type": "disc",
        "padding-left": "20px"
      })}"><!--[-->`);
      ssrRenderList(candidateTraits, (item) => {
        _push(`<li style="${ssrRenderStyle({
          "font-family": "'Inter', sans-serif",
          "font-weight": "400",
          "font-size": "16px",
          "line-height": "26px",
          "letter-spacing": "-0.006em",
          "color": "#000000",
          "margin-bottom": "4px"
        })}">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="pt-4"><p class="mb-2" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> Please apply by emailing us at jobs [at] keycdn [dot] com. </p><p style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "font-size": "16px",
        "line-height": "26px",
        "letter-spacing": "-0.006em",
        "color": "#000000"
      })}"> No recruiters or agencies. </p></div></div></div></div></section></main></div>`);
    };
  }
});
var _sfc_setup = careers_vue_vue_type_script_setup_true_lang_default.setup;
careers_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var careers_default = careers_vue_vue_type_script_setup_true_lang_default;

export { careers_default as default };
//# sourceMappingURL=careers-6pYKB4rs.mjs.map
