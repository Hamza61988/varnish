import { H as HeroSection_default, F as FeaturesSection_default, G as GetStartedInMinutesSection_default, S as SpeedUpImagesSection_default, D as DevelopWithEaseSection_default, T as TestimonialsSection_default, C as CTASection_default } from './CTASection-Z0lLeMrF.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
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

var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-UGZtdw4-.mjs.map
