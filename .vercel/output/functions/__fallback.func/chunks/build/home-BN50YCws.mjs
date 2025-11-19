import { H as HeroSection_default, F as FeaturesSection_default, G as GetStartedInMinutesSection_default, S as SpeedUpImagesSection_default, D as DevelopWithEaseSection_default, T as TestimonialsSection_default, C as CTASection_default } from './CTASection-Z0lLeMrF.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import './virtual_public-tD1KABXp.mjs';
import './virtual_public-D935o5Sf.mjs';
import './virtual_public-Cs2PJ4Tc.mjs';

var home_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
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
    computed(() => {
      const naCost = calculateRegionCost(bandwidth.value.naEurope, "naEurope");
      const asiaCost = calculateRegionCost(bandwidth.value.asiaOceania, "asiaOceania");
      const africaCost = calculateRegionCost(bandwidth.value.africaLatin, "africaLatin");
      return naCost + asiaCost + africaCost;
    });
    ref([
      false,
      false,
      false,
      false,
      false,
      false
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHeroSection = HeroSection_default;
      const _component_SectionsFeaturesSection = FeaturesSection_default;
      const _component_SectionsGetStartedInMinutesSection = GetStartedInMinutesSection_default;
      const _component_SectionsSpeedUpImagesSection = SpeedUpImagesSection_default;
      const _component_SectionsDevelopWithEaseSection = DevelopWithEaseSection_default;
      const _component_SectionsTestimonialsSection = TestimonialsSection_default;
      const _component_SectionsCTASection = CTASection_default;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "",
        style: { "background-color": "#f7f7f8" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionsHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFeaturesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsGetStartedInMinutesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSpeedUpImagesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsDevelopWithEaseSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsTestimonialsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsCTASection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = home_vue_vue_type_script_setup_true_lang_default.setup;
home_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var home_default = home_vue_vue_type_script_setup_true_lang_default;

export { home_default as default };
//# sourceMappingURL=home-BN50YCws.mjs.map
