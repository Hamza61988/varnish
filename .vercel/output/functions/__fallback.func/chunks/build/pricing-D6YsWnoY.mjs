import { t as __plugin_vue_export_helper_default } from './server.mjs';
import { v as virtual_public__2Fimages_2Fabout_2FGroup_default } from './virtual_public-tD1KABXp.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

var PricingTableSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PricingTableSection",
  __ssrInlineRender: true,
  props: {
    headings: {},
    tableData: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-3 sm:px-4 md:px-6 lg:px-4 py-8 sm:py-10 md:py-12 lg:py-16 bg-[#F7F7F8]" }, _attrs))} data-v-075ab536><div class="max-w-6xl mx-auto" data-v-075ab536><div class="mb-6 sm:mb-8 md:mb-10 lg:mb-12" data-v-075ab536><div class="mb-3 sm:mb-4 text-center flex justify-start items-start" data-v-075ab536><button class="inline-flex justify-start items-start space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[white] rounded-full text-xs sm:text-sm font-medium text-gray-700 border border-gray-200" data-v-075ab536><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 fill-[#A3A3AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-075ab536><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-075ab536></path></svg><span data-v-075ab536>Pricing</span></button></div><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8" data-v-075ab536><div class="text-center md:text-left" data-v-075ab536><h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3" data-v-075ab536> Pricing Plans </h2><p class="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0" data-v-075ab536> Get access to our entire content delivery network without commitment. </p></div><div class="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4" data-v-075ab536><span class="text-sm sm:text-base text-gray-900 font-medium" data-v-075ab536>Monthly</span><button class="relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full bg-gray-200 transition-colors" data-v-075ab536><span class="inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition translate-x-1" data-v-075ab536></span></button><span class="text-sm sm:text-base text-gray-400" data-v-075ab536>Yearly</span></div></div></div><div class="flex flex-col lg:flex-row overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 lg:mx-0 px-3 sm:px-4 md:px-6 lg:px-0 pricing-table-container" style="${ssrRenderStyle({ "background-color": "#f3f4f6" })}" data-v-075ab536><div class="flex w-full min-w-0" style="${ssrRenderStyle({ "padding": "2% 3%" })}" data-v-075ab536><div class="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 flex-shrink-0" data-v-075ab536><div class="bg-[#F3F4F6] rounded-lg p-0.5 sm:p-1" data-v-075ab536><div class="bg-white rounded-lg overflow-hidden" data-v-075ab536><table class="w-full" data-v-075ab536><thead data-v-075ab536><tr style="${ssrRenderStyle({ "background-color": "#f3f4f6" })}" data-v-075ab536><th class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-left text-xs sm:text-sm font-semibold bg-transparent align-middle" style="${ssrRenderStyle({ "color": "#73737f" })}" data-v-075ab536> REGION </th></tr></thead><tbody data-v-075ab536><!--[-->`);
      ssrRenderList(__props.tableData, (row, index) => {
        _push(`<tr class="bg-[#F3F4F6]" data-v-075ab536><td class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-medium text-gray-900 bg-transparent text-left align-middle" data-v-075ab536>${ssrInterpolate(row.region)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="flex-1 bg-gray-100 rounded-lg p-0.5 sm:p-1 min-w-0 overflow-x-auto" data-v-075ab536><div class="bg-white rounded-lg overflow-hidden pricing-table-wrapper" style="${ssrRenderStyle({ "padding": "2% 3%" })}" data-v-075ab536><table class="w-full pricing-table" data-v-075ab536><thead data-v-075ab536><tr style="${ssrRenderStyle({ "background-color": "#212129" })}" data-v-075ab536><!--[-->`);
      ssrRenderList(__props.headings, (heading, index) => {
        _push(`<th class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm font-semibold text-white align-middle whitespace-nowrap" data-v-075ab536><div data-v-075ab536>${ssrInterpolate(heading.title.toUpperCase())}</div><div class="text-xs font-normal text-gray-300 mt-0.5 sm:mt-1" data-v-075ab536> Per Month </div></th>`);
      });
      _push(`<!--]--></tr></thead><tbody data-v-075ab536><!--[-->`);
      ssrRenderList(__props.tableData, (row, rIndex) => {
        _push(`<tr class="bg-white" data-v-075ab536><!--[-->`);
        ssrRenderList(row.prices, (price, cIndex) => {
          _push(`<td class="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center text-xs sm:text-sm bg-white align-middle whitespace-nowrap pricing-cell" data-v-075ab536><span class="font-bold text-gray-900" data-v-075ab536>${ssrInterpolate(price.value)}</span><span class="text-gray-500 font-normal" data-v-075ab536>/GB</span></td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></section>`);
    };
  }
});
var _sfc_setup$8 = PricingTableSection_vue_vue_type_script_setup_true_lang_default.setup;
PricingTableSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PricingTableSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var PricingTableSection_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PricingTableSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-075ab536"]]);
var EnterpriseSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "EnterpriseSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 pb-12 md:pb-16" }, _attrs))} data-v-85f48174><div class="max-w-6xl mx-auto" data-v-85f48174><div class="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6" style="${ssrRenderStyle({ "border-radius": "20px" })}" data-v-85f48174><div class="flex items-center space-x-4" data-v-85f48174><div class="thumb-icon-container" data-v-85f48174><div class="thumb-blob" data-v-85f48174></div><svg xmlns="http://www.w3.org/2000/svg" class="thumb-icon" viewBox="0 0 24 24" fill="none" data-v-85f48174><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H16.4262C17.907 22 19.1662 20.9197 19.3914 19.4562L20.4683 12.4562C20.7479 10.6384 19.3411 9 17.5032 9H14C13.4477 9 13 8.55228 13 8V4.46584C13 3.10399 11.896 2 10.5342 2C10.2093 2 9.91498 2.1913 9.78306 2.48812L7.26394 8.72711C7.11395 9.05212 6.78231 9.25 6.42785 9.25H4C2.89543 9.25 2 10.1454 2 11.25V13Z" stroke="#1F62FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-85f48174></path></svg></div><div data-v-85f48174><h3 class="enterprise-heading" data-v-85f48174> Enterprise </h3><p class="enterprise-description" data-v-85f48174> Over 100 TB per month? Contact us for discounted volume pricing. </p></div></div><button class="contact-us-button" data-v-85f48174> Contact Us </button></div></div></section>`);
    };
  }
});
var _sfc_setup$7 = EnterpriseSection_vue_vue_type_script_setup_true_lang_default.setup;
EnterpriseSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/EnterpriseSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var EnterpriseSection_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EnterpriseSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-85f48174"]]);
var ConfigurationOptionsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ConfigurationOptionsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 py-6 md:py-8" }, _attrs))}><div class="container mx-auto px-4"><div class="max-w-6xl mx-auto"><div class="space-y-3 md:space-y-4" style="${ssrRenderStyle({
        "width": "60%",
        "margin": "0 auto"
      })}"><div class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow" style="${ssrRenderStyle({ "border-radius": "20px" })}"><div class="flex-1 min-w-0 pr-4"><h3 class="text-sm md:text-base font-medium text-gray-900 mb-1"> Zone </h3><p class="text-xs md:text-sm text-gray-500"> The first 3 Zones are included for free. Each additional Zone is $1 per month. </p></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div><div class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow" style="${ssrRenderStyle({ "border-radius": "20px" })}"><div class="flex-1"><h3 class="text-sm md:text-base font-medium text-gray-900"> Storage </h3></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div><div class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow" style="${ssrRenderStyle({ "border-radius": "20px" })}"><div class="flex-1"><h3 class="text-sm md:text-base font-medium text-gray-900"> Log Forwarding </h3></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div><div class="bg-white rounded-lg shadow-sm p-5 md:p-6 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow" style="${ssrRenderStyle({ "border-radius": "20px" })}"><div class="flex-1"><h3 class="text-sm md:text-base font-medium text-gray-900"> Image Forwarding </h3></div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div></div></div></section>`);
    };
  }
});
var _sfc_setup$6 = ConfigurationOptionsSection_vue_vue_type_script_setup_true_lang_default.setup;
ConfigurationOptionsSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ConfigurationOptionsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var ConfigurationOptionsSection_default = ConfigurationOptionsSection_vue_vue_type_script_setup_true_lang_default;
var AccessAllFeaturesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "AccessAllFeaturesSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 py-6 md:py-8" }, _attrs))} data-v-c0824cec><div class="container mx-auto px-4" data-v-c0824cec><div class="max-w-6xl mx-auto" data-v-c0824cec><div class="text-center mb-4 md:mb-6" data-v-c0824cec><h2 class="feature-heading" data-v-c0824cec> ACCESS ALL FEATURES </h2></div><div class="flex flex-wrap justify-center items-center gap-2 md:gap-3" data-v-c0824cec><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>Instant Purge</span></div><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>HTTP/2</span></div><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>TLS Certificate</span></div><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>Origin Shield</span></div><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>Secure Token</span></div><div class="flex items-center space-x-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFFFF] rounded-full" style="${ssrRenderStyle({ "border": "1px solid #EEEEF0" })}" data-v-c0824cec><div class="feature-dot-container" data-v-c0824cec><div class="feature-dot-inner" data-v-c0824cec></div></div><span class="feature-text" data-v-c0824cec>DDoS Protection</span></div></div></div></div></section>`);
    };
  }
});
var _sfc_setup$5 = AccessAllFeaturesSection_vue_vue_type_script_setup_true_lang_default.setup;
AccessAllFeaturesSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AccessAllFeaturesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var AccessAllFeaturesSection_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AccessAllFeaturesSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c0824cec"]]);
var region_slider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "region-slider",
  __ssrInlineRender: true,
  setup(__props) {
    const bandwidth = ref({
      naEurope: 0,
      asiaOceania: 0,
      africaLatin: 0
    });
    const formatGB = (val) => `${val} GB`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-7de087e6><div class="" data-v-7de087e6><div class="mb-6" data-v-7de087e6><div class="flex justify-between items-center mb-2" data-v-7de087e6><label class="region-label" data-v-7de087e6>North America / Europe</label><span class="value-display" data-v-7de087e6>${ssrInterpolate(formatGB(unref(bandwidth).naEurope))}</span></div><input${ssrRenderAttr("value", unref(bandwidth).naEurope)} type="range" min="0" max="2000" step="10" class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100" style="${ssrRenderStyle({ background: `linear-gradient(to right, #1F62FF ${unref(bandwidth).naEurope / 20}%, #e5e7eb ${unref(bandwidth).naEurope / 20}%)` })}" data-v-7de087e6></div><div class="mb-6" data-v-7de087e6><div class="flex justify-between items-center mb-2" data-v-7de087e6><label class="region-label" data-v-7de087e6>Asia / Oceania</label><span class="value-display" data-v-7de087e6>${ssrInterpolate(formatGB(unref(bandwidth).asiaOceania))}</span></div><input${ssrRenderAttr("value", unref(bandwidth).asiaOceania)} type="range" min="0" max="2000" step="10" class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100" style="${ssrRenderStyle({ background: `linear-gradient(to right, #1F62FF ${unref(bandwidth).asiaOceania / 20}%, #e5e7eb ${unref(bandwidth).asiaOceania / 20}%)` })}" data-v-7de087e6></div><div class="mb-6" data-v-7de087e6><div class="flex justify-between items-center mb-2" data-v-7de087e6><label class="region-label" data-v-7de087e6>Africa / Latin America</label><span class="value-display" data-v-7de087e6>${ssrInterpolate(formatGB(unref(bandwidth).africaLatin))}</span></div><input${ssrRenderAttr("value", unref(bandwidth).africaLatin)} type="range" min="0" max="2000" step="10" class="w-full accent-indigo-600 cursor-pointer rounded-lg h-2 bg-gray-100" style="${ssrRenderStyle({ background: `linear-gradient(to right, #1F62FF ${unref(bandwidth).africaLatin / 20}%, #e5e7eb ${unref(bandwidth).africaLatin / 20}%)` })}" data-v-7de087e6></div></div></div>`);
    };
  }
});
var _sfc_setup$4 = region_slider_vue_vue_type_script_setup_true_lang_default.setup;
region_slider_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/region-slider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var region_slider_default = /* @__PURE__ */ __plugin_vue_export_helper_default(region_slider_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7de087e6"]]);
var HaveMoreQuestionsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HaveMoreQuestionsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center mt-6 md:mt-8" }, _attrs))}><div class="text-base font-semibold text-gray-700 mb-0.5"> Have more questions? </div><div class="text-sm text-gray-500"> Find additional answers in our <a href="#faq" class="underline text-[#51515E] hover:text-blue-700">FAQ</a> or <a href="/contact" class="underline text-[#51515E] hover:text-blue-700">contact us</a>. </div></div>`);
    };
  }
});
var _sfc_setup$3 = HaveMoreQuestionsSection_vue_vue_type_script_setup_true_lang_default.setup;
HaveMoreQuestionsSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HaveMoreQuestionsSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var HaveMoreQuestionsSection_default = HaveMoreQuestionsSection_vue_vue_type_script_setup_true_lang_default;
var CostCalculatorSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CostCalculatorSection",
  __ssrInlineRender: true,
  setup(__props) {
    const bandwidth = ref({
      naEurope: 500,
      asiaOceania: 0,
      africaLatin: 0
    });
    watch(() => bandwidth.value, (newVal) => {
      console.log("Bandwidth changed:", newVal);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiRegionSlider = region_slider_default;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "mx-auto",
        style: { "padding": "5% 0% 5% 0%" }
      }, _attrs))}><div class="text-center mb-6 md:mb-8"><div class="flex justify-center mb-2"><div class="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><span class="text-sm text-gray-700 font-medium">Calculator</span></div></div><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2"> Calculate Your Costs </h2><p class="text-sm md:text-base text-gray-500"> Enter your monthly outbound bandwidth for a pricing estimation. </p></div><div class="bg-white rounded-lg shadow-lg p-6 md:p-8 bg-white w-[60%] mx-auto" style="${ssrRenderStyle({ "border-radius": "20px" })}">`);
      _push(ssrRenderComponent(_component_UiRegionSlider, {
        label: "North America/Europe",
        modelValue: bandwidth.value.naEurope,
        "onUpdate:modelValue": ($event) => bandwidth.value.naEurope = $event,
        min: 0,
        max: 2e3,
        step: 1
      }, null, _parent));
      _push(`<div class="flex flex-col sm:flex-row items-center justify-start gap-4"><button onclick="console.log(&#39;Get Started button clicked&#39;)" class="px-6 md:px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium w-full sm:w-auto"> Get Started </button><div class="text-center sm:text-right"><span class="text-lg md:text-xl text-gray-500">$20.00/Month</span></div></div></div>`);
      _push(ssrRenderComponent(HaveMoreQuestionsSection_default, null, null, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup$2 = CostCalculatorSection_vue_vue_type_script_setup_true_lang_default.setup;
CostCalculatorSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CostCalculatorSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var CostCalculatorSection_default = CostCalculatorSection_vue_vue_type_script_setup_true_lang_default;
var FAQSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FAQSection",
  __ssrInlineRender: true,
  props: { openFAQs: { default: void 0 } },
  emits: ["toggle-faq"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const internalOpenFAQs = ref([
      false,
      false,
      false,
      false,
      false,
      false
    ]);
    watch(() => props.openFAQs, (newVal) => {
      if (newVal) internalOpenFAQs.value = [...newVal];
    }, { deep: true });
    const openFAQs = computed(() => props.openFAQs || internalOpenFAQs.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "container mx-auto px-4 pb-12 md:pb-16"
      }, _attrs))} data-v-dabbd285><div class="max-w-6xl mx-auto" data-v-dabbd285><div class="text-center mb-8 md:mb-12" data-v-dabbd285><div class="flex justify-center mb-2" data-v-dabbd285><div class="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm" data-v-dabbd285><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 fill-[#A3A3AE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-dabbd285></path></svg><span class="text-sm font-medium text-gray-700 uppercase" data-v-dabbd285>FAQ</span></div></div><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2" data-v-dabbd285> Common Pricing Questions </h2><p class="text-gray-600" data-v-dabbd285>You&#39;ve Got Questions, We&#39;ve got answers</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8" data-v-dabbd285><div class="space-y-4" data-v-dabbd285><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>Is there a minimum usage?</span>`);
      if (!openFAQs.value[0]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[0]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> Yes, the minimum usage is $4 per month. </div>`);
      else _push(`<!---->`);
      _push(`</div><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>What payment methods are accepted?</span>`);
      if (!openFAQs.value[1]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[1]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> We accept all major credit cards, PayPal, and wire transfers. </div>`);
      else _push(`<!---->`);
      _push(`</div><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>How is storage billed?</span>`);
      if (!openFAQs.value[2]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[2]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> Storage is billed based on the average amount of data stored throughout the month, measured in GB. </div>`);
      else _push(`<!---->`);
      _push(`</div></div><div class="space-y-4" data-v-dabbd285><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>Is there a minimum payment?</span>`);
      if (!openFAQs.value[3]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[3]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> Yes, there is a minimum payment of $4 per month regardless of usage. </div>`);
      else _push(`<!---->`);
      _push(`</div><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>How is traffic calculated?</span>`);
      if (!openFAQs.value[4]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[4]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> Traffic is calculated based on the total amount of data transferred from our CDN to end users, measured in GB. </div>`);
      else _push(`<!---->`);
      _push(`</div><div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-dabbd285><button type="button" class="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer" data-v-dabbd285><span class="font-semibold text-gray-900 text-sm md:text-base" data-v-dabbd285>How much does a TLS certificate cost?</span>`);
      if (!openFAQs.value[5]) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-dabbd285></path></svg>`);
      else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-dabbd285><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-dabbd285></path></svg>`);
      _push(`</button>`);
      if (openFAQs.value[5]) _push(`<div class="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base" data-v-dabbd285> TLS certificates are provided free of charge for all zones. </div>`);
      else _push(`<!---->`);
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(HaveMoreQuestionsSection_default, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
var _sfc_setup$1 = FAQSection_vue_vue_type_script_setup_true_lang_default.setup;
FAQSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FAQSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var FAQSection_default = /* @__PURE__ */ __plugin_vue_export_helper_default(FAQSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-dabbd285"]]);
var pricing_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const headings = [
      { title: "First 10 TB" },
      { title: "Next 40 TB" },
      { title: "Next 50 TB" },
      { title: "Over 100 TB" }
    ];
    const tableData = [
      {
        region: "North America Europe",
        prices: [
          { value: "$0.04" },
          { value: "$0.03" },
          { value: "$0.02" },
          { value: "$0.01" }
        ]
      },
      {
        region: "Asia Oceania",
        prices: [
          { value: "$0.08" },
          { value: "$0.06" },
          { value: "$0.04" },
          { value: "$0.02" }
        ]
      },
      {
        region: "Africa Latin America",
        prices: [
          { value: "$0.10" },
          { value: "$0.08" },
          { value: "$0.06" },
          { value: "$0.04" }
        ]
      }
    ];
    const bandwidth = ref({
      naEurope: 500,
      asiaOceania: 0,
      africaLatin: 0
    });
    const calculateRegionCost = (gb, region) => {
      let total = 0;
      let remaining = gb;
      const prices = region === "naEurope" ? [
        0.04,
        0.03,
        0.02,
        0.01
      ] : region === "asiaOceania" ? [
        0.08,
        0.06,
        0.04,
        0.02
      ] : [
        0.1,
        0.08,
        0.06,
        0.04
      ];
      if (remaining > 0) {
        const firstTier = Math.min(remaining, 1e4);
        total += firstTier * prices[0];
        remaining -= firstTier;
      }
      if (remaining > 0) {
        const secondTier = Math.min(remaining, 4e4);
        total += secondTier * prices[1];
        remaining -= secondTier;
      }
      if (remaining > 0) {
        const thirdTier = Math.min(remaining, 5e4);
        total += thirdTier * prices[2];
        remaining -= thirdTier;
      }
      if (remaining > 0) total += remaining * prices[3];
      return total;
    };
    const totalCost = computed(() => {
      const naCost = calculateRegionCost(bandwidth.value.naEurope, "naEurope");
      const asiaCost = calculateRegionCost(bandwidth.value.asiaOceania, "asiaOceania");
      const africaCost = calculateRegionCost(bandwidth.value.africaLatin, "africaLatin");
      return naCost + asiaCost + africaCost;
    });
    const openFAQs = ref([
      false,
      false,
      false,
      false,
      false,
      false
    ]);
    const toggleFAQ = (index) => {
      openFAQs.value[index] = !openFAQs.value[index];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsPricingTableSection = PricingTableSection_default;
      const _component_SectionsEnterpriseSection = EnterpriseSection_default;
      const _component_SectionsConfigurationOptionsSection = ConfigurationOptionsSection_default;
      const _component_SectionsAccessAllFeaturesSection = AccessAllFeaturesSection_default;
      const _component_SectionsCostCalculatorSection = CostCalculatorSection_default;
      const _component_SectionsFAQSection = FAQSection_default;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "",
        style: { "background-color": "#f7f7f8" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionsPricingTableSection, {
        headings,
        "table-data": tableData
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsEnterpriseSection, null, null, _parent));
      _push(`<section class="container mx-auto px-4 py-12 md:py-16 bg-[#F7F7F8]"><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"><div class="relative overflow-hidden min-h-[210px] md:h-[210px]" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff"
      })}"><div class="absolute hidden sm:block" style="${ssrRenderStyle({
        "width": "148px",
        "height": "148px",
        "top": "8px",
        "right": "26px",
        "opacity": "1",
        "border": "none",
        "border-image-source": "radial-gradient(\n                  81.86% 81.86% at 100% 100%,\n                  rgba(26, 25, 37, 0.12) 0%,\n                  rgba(26, 25, 37, 0) 77.02%\n                )",
        "border-image-slice": "1",
        "background-image": "url('/images/about/bgcard.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain"
      })}"></div><div class="relative z-10 p-4 sm:p-5 md:p-6"><div class="mb-4 relative" style="${ssrRenderStyle({
        "padding-top": "4.67px",
        "padding-left": "2.33px"
      })}"><div class="absolute -top-2 -left-2 w-8 h-8" style="${ssrRenderStyle({
        "background-image": "url('/images/about/bgcardicon.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain",
        "z-index": "0"
      })}"></div><img${ssrRenderAttr("src", virtual_public__2Fimages_2Fabout_2FGroup_default)} alt="Integrity Icon" class="relative z-10" style="${ssrRenderStyle({
        "height": "20.71px",
        "width": "auto",
        "color": "#1a1925"
      })}"></div><h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "500",
        "line-height": "24px",
        "letter-spacing": "-0.011em",
        "color": "#1a1925"
      })}"> Secure and Flexible Sharing Tools </h3><p class="text-sm sm:text-base" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Our pricing includes unlimited HTTP and HTTPS requests to keep costs low and affordable from the very beginning. </p></div></div><div class="relative overflow-hidden min-h-[210px] md:h-[210px]" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff"
      })}"><div class="absolute hidden sm:block" style="${ssrRenderStyle({
        "width": "148px",
        "height": "148px",
        "top": "8px",
        "right": "26px",
        "opacity": "1",
        "border": "none",
        "border-image-source": "radial-gradient(\n                  81.86% 81.86% at 100% 100%,\n                  rgba(26, 25, 37, 0.12) 0%,\n                  rgba(26, 25, 37, 0) 77.02%\n                )",
        "border-image-slice": "1",
        "background-image": "url('/images/about/bgcard.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain"
      })}"></div><div class="relative z-10 p-4 sm:p-5 md:p-6"><div class="mb-4"><div class="relative"><div class="absolute -top-2 -left-2 w-8 h-8" style="${ssrRenderStyle({
        "background-image": "url('/images/about/bgcardicon.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain",
        "z-index": "0"
      })}"></div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative z-10"><path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "500",
        "line-height": "24px",
        "letter-spacing": "-0.011em",
        "color": "#1a1925"
      })}"> Low minimum usage </h3><p class="text-sm sm:text-base" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Our minimum charge is $4 per month based on the combined total account traffic volume and other services used. </p></div></div><div class="relative overflow-hidden min-h-[210px] md:h-[210px]" style="${ssrRenderStyle({
        "border-radius": "20px",
        "border": "1px solid #eeeef0",
        "background": "#ffffff"
      })}"><div class="absolute hidden sm:block" style="${ssrRenderStyle({
        "width": "148px",
        "height": "148px",
        "top": "8px",
        "right": "26px",
        "opacity": "1",
        "border": "none",
        "border-image-source": "radial-gradient(\n                  81.86% 81.86% at 100% 100%,\n                  rgba(26, 25, 37, 0.12) 0%,\n                  rgba(26, 25, 37, 0) 77.02%\n                )",
        "border-image-slice": "1",
        "background-image": "url('/images/about/bgcard.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain"
      })}"></div><div class="relative z-10 p-4 sm:p-5 md:p-6"><div class="mb-4"><div class="relative"><div class="absolute -top-2 -left-2 w-8 h-8" style="${ssrRenderStyle({
        "background-image": "url('/images/about/bgcardicon.svg')",
        "background-repeat": "no-repeat",
        "background-size": "contain",
        "z-index": "0"
      })}"></div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative z-10"><path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19V15C15 14.4696 15.2107 13.9609 15.5858 13.5858C15.9609 13.2107 16.4696 13 17 13H19C19.5304 13 20.0391 13.2107 20.4142 13.5858C20.7893 13.9609 21 14.4696 21 15V19Z" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H7C7.53043 21 8.03914 20.7893 8.41421 20.4142C8.78929 20.0391 9 19.5304 9 19V15C9 14.4696 8.78929 13.9609 8.41421 13.5858C8.03914 13.2107 7.53043 13 7 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19Z" stroke="#1A1925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><h3 class="mb-2 sm:mb-3 text-base sm:text-lg" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "500",
        "line-height": "24px",
        "letter-spacing": "-0.011em",
        "color": "#1a1925"
      })}"> 24/7 support </h3><p class="text-sm sm:text-base" style="${ssrRenderStyle({
        "font-family": "'Inter', sans-serif",
        "font-weight": "400",
        "line-height": "20px",
        "letter-spacing": "-0.006em",
        "color": "#51515e"
      })}"> Our professional technical support team is available 24 hours a day, 7 days a week for all customers at no additional cost. </p></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_SectionsConfigurationOptionsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAccessAllFeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsCostCalculatorSection, {
        bandwidth: unref(bandwidth),
        "onUpdate:bandwidth": ($event) => isRef(bandwidth) ? bandwidth.value = $event : null,
        "total-cost": unref(totalCost)
      }, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFAQSection, {
        "open-faqs": unref(openFAQs),
        onToggleFaq: toggleFAQ
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = pricing_vue_vue_type_script_setup_true_lang_default.setup;
pricing_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pricing_default = pricing_vue_vue_type_script_setup_true_lang_default;

export { pricing_default as default };
//# sourceMappingURL=pricing-D6YsWnoY.mjs.map
