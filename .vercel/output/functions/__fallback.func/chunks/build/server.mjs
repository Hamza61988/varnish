import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { createApp, hasInjectionContext, inject, provide, toRef, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, shallowReactive, reactive, effectScope, shallowRef, isReadonly, getCurrentInstance, defineAsyncComponent, mergeProps, getCurrentScope, defineComponent, ref, withCtx, createBlock, toDisplayString, openBlock, h, Suspense, Fragment, isRef, isShallow, isReactive, toRaw, useSSRContext } from 'vue';
import { c as createError, h as hasProtocol, i as isScriptProtocol, k as joinURL, w as withQuery, l as createHooks, m as executeAsync, s as sanitizeStatusCode, n as defu, t as toRouteMatcher, o as createRouter$1, p as getContext, $ as $fetch } from '../nitro/nitro.mjs';
import { h as headSymbol, u as useHead, p as publicAssetsURL, b as baseURL } from '../routes/renderer.mjs';
import { createMemoryHistory, createRouter, START_LOCATION, RouterView } from 'vue-router';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderTeleport, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

if (!globalThis.$fetch) globalThis.$fetch = $fetch.create({ baseURL: baseURL() });
if (!("global" in globalThis)) globalThis.global = globalThis;
const nuxtLinkDefaults = {
	"componentName": "NuxtLink",
	"prefetch": true,
	"prefetchOn": { "visibility": true }
};
function getNuxtAppCtx(id = "nuxt-app") {
	return getContext(id, { asyncContext: false });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
	let hydratingCount = 0;
	const nuxtApp = {
		_id: options.id || "nuxt-app",
		_scope: effectScope(),
		provide: void 0,
		globalName: "nuxt",
		versions: {
			get nuxt() {
				return "3.20.0";
			},
			get vue() {
				return nuxtApp.vueApp.version;
			}
		},
		payload: shallowReactive({
			...options.ssrContext?.payload || {},
			data: shallowReactive({}),
			state: reactive({}),
			once: /* @__PURE__ */ new Set(),
			_errors: shallowReactive({})
		}),
		static: { data: {} },
		runWithContext(fn) {
			if (nuxtApp._scope.active && !getCurrentScope()) return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
			return callWithNuxt(nuxtApp, fn);
		},
		isHydrating: false,
		deferHydration() {
			if (!nuxtApp.isHydrating) return () => {};
			hydratingCount++;
			let called = false;
			return () => {
				if (called) return;
				called = true;
				hydratingCount--;
				if (hydratingCount === 0) {
					nuxtApp.isHydrating = false;
					return nuxtApp.callHook("app:suspense:resolve");
				}
			};
		},
		_asyncDataPromises: {},
		_asyncData: shallowReactive({}),
		_payloadRevivers: {},
		...options
	};
	nuxtApp.payload.serverRendered = true;
	if (nuxtApp.ssrContext) {
		nuxtApp.payload.path = nuxtApp.ssrContext.url;
		nuxtApp.ssrContext.nuxt = nuxtApp;
		nuxtApp.ssrContext.payload = nuxtApp.payload;
		nuxtApp.ssrContext.config = {
			public: nuxtApp.ssrContext.runtimeConfig.public,
			app: nuxtApp.ssrContext.runtimeConfig.app
		};
	}
	nuxtApp.hooks = createHooks();
	nuxtApp.hook = nuxtApp.hooks.hook;
	{
		const contextCaller = async function(hooks, args) {
			for (const hook of hooks) await nuxtApp.runWithContext(() => hook(...args));
		};
		nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
	}
	nuxtApp.callHook = nuxtApp.hooks.callHook;
	nuxtApp.provide = (name, value) => {
		const $name = "$" + name;
		defineGetter(nuxtApp, $name, value);
		defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
	};
	defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
	defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
	const runtimeConfig = options.ssrContext.runtimeConfig;
	nuxtApp.provide("config", runtimeConfig);
	return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin$1) {
	if (plugin$1.hooks) nuxtApp.hooks.addHooks(plugin$1.hooks);
}
async function applyPlugin(nuxtApp, plugin$1) {
	if (typeof plugin$1 === "function") {
		const { provide: provide$1 } = await nuxtApp.runWithContext(() => plugin$1(nuxtApp)) || {};
		if (provide$1 && typeof provide$1 === "object") for (const key in provide$1) nuxtApp.provide(key, provide$1[key]);
	}
}
async function applyPlugins(nuxtApp, plugins) {
	const resolvedPlugins = /* @__PURE__ */ new Set();
	const unresolvedPlugins = [];
	const parallels = [];
	let error = void 0;
	let promiseDepth = 0;
	async function executePlugin(plugin$1) {
		const unresolvedPluginsForThisPlugin = plugin$1.dependsOn?.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
		if (unresolvedPluginsForThisPlugin.length > 0) unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin$1]);
		else {
			const promise = applyPlugin(nuxtApp, plugin$1).then(async () => {
				if (plugin$1._name) {
					resolvedPlugins.add(plugin$1._name);
					await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
						if (dependsOn.has(plugin$1._name)) {
							dependsOn.delete(plugin$1._name);
							if (dependsOn.size === 0) {
								promiseDepth++;
								await executePlugin(unexecutedPlugin);
							}
						}
					}));
				}
			}).catch((e) => {
				if (!plugin$1.parallel && !nuxtApp.payload.error) throw e;
				error ||= e;
			});
			if (plugin$1.parallel) parallels.push(promise);
			else await promise;
		}
	}
	for (const plugin$1 of plugins) {
		if (nuxtApp.ssrContext?.islandContext && plugin$1.env?.islands === false) continue;
		registerPluginHooks(nuxtApp, plugin$1);
	}
	for (const plugin$1 of plugins) {
		if (nuxtApp.ssrContext?.islandContext && plugin$1.env?.islands === false) continue;
		await executePlugin(plugin$1);
	}
	await Promise.all(parallels);
	if (promiseDepth) for (let i = 0; i < promiseDepth; i++) await Promise.all(parallels);
	if (error) throw nuxtApp.payload.error || error;
}
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtPlugin(plugin$1) {
	if (typeof plugin$1 === "function") return plugin$1;
	const _name = plugin$1._name || plugin$1.name;
	delete plugin$1.name;
	return Object.assign(plugin$1.setup || (() => {}), plugin$1, {
		[NuxtPluginIndicator]: true,
		_name
	});
}
function callWithNuxt(nuxt, setup, args) {
	const fn = () => setup();
	const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
	return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
}
function tryUseNuxtApp(id) {
	let nuxtAppInstance;
	if (hasInjectionContext()) nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
	nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
	return nuxtAppInstance || null;
}
function useNuxtApp(id) {
	const nuxtAppInstance = tryUseNuxtApp(id);
	if (!nuxtAppInstance) throw new Error("[nuxt] instance unavailable");
	return nuxtAppInstance;
}
/* @__NO_SIDE_EFFECTS__ */
function useRuntimeConfig(_event) {
	return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
	Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
	return useNuxtApp()?.$router;
};
const useRoute = () => {
	if (hasInjectionContext()) return inject(PageRouteSymbol, useNuxtApp()._route);
	return useNuxtApp()._route;
};
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtRouteMiddleware(middleware) {
	return middleware;
}
var isProcessingMiddleware = () => {
	try {
		if (useNuxtApp()._processingMiddleware) return true;
	} catch {
		return false;
	}
	return false;
};
var URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
	to ||= "/";
	const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
	const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
	const isExternal = options?.external || isExternalHost;
	if (isExternal) {
		if (!options?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
		const { protocol } = new URL(toPath, "http://localhost");
		if (protocol && isScriptProtocol(protocol)) throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
	}
	const inMiddleware = isProcessingMiddleware();
	const router = useRouter();
	const nuxtApp = useNuxtApp();
	if (nuxtApp.ssrContext) {
		const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
		const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
		const redirect = async function(response) {
			await nuxtApp.callHook("app:redirected");
			const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
			const encodedHeader = encodeURL(location2, isExternalHost);
			nuxtApp.ssrContext._renderResponse = {
				statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
				body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
				headers: { location: encodedHeader }
			};
			return response;
		};
		if (!isExternal && inMiddleware) {
			router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
			return to;
		}
		return redirect(!inMiddleware ? void 0 : false);
	}
	if (isExternal) {
		nuxtApp._scope.stop();
		if (options?.replace) (void 0).replace(toPath);
		else (void 0).href = toPath;
		if (inMiddleware) {
			if (!nuxtApp.isHydrating) return false;
			return new Promise(() => {});
		}
		return Promise.resolve();
	}
	return options?.replace ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
	return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
	const url = new URL(location2, "http://localhost");
	if (!isExternalHost) return url.pathname + url.search + url.hash;
	if (location2.startsWith("//")) return url.toString().replace(url.protocol, "");
	return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
	const nuxtError = createError$1(error);
	try {
		const error2 = /* @__PURE__ */ useError();
		error2.value ||= nuxtError;
	} catch {
		throw nuxtError;
	}
	return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && "__nuxt_error" in error;
const createError$1 = (error) => {
	const nuxtError = createError(error);
	Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
		value: true,
		configurable: false,
		writable: false
	});
	return nuxtError;
};
var unhead_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		nuxtApp.vueApp.use(head);
	}
});
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
async function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	useNuxtApp().ssrContext._preloadManifest = true;
	return defu({}, ...toRouteMatcher(createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })).matchAll(path).reverse());
}
var virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Froutes_default = [
	{
		name: "faq",
		path: "/faq",
		component: () => import('./faq-CrF55phK.mjs')
	},
	{
		name: "home",
		path: "/home",
		component: () => import('./home-BN50YCws.mjs')
	},
	{
		name: "about",
		path: "/about",
		component: () => import('./about-BlZ8gao8.mjs')
	},
	{
		name: "index",
		path: "/",
		component: () => import('./pages-UGZtdw4-.mjs')
	},
	{
		name: "tools",
		path: "/tools",
		component: () => import('./tools-BD9or-2k.mjs')
	},
	{
		name: "careers",
		path: "/careers",
		component: () => import('./careers-6pYKB4rs.mjs')
	},
	{
		name: "contact",
		path: "/contact",
		component: () => import('./contact-WbpqY84X.mjs')
	},
	{
		name: "pricing",
		path: "/pricing",
		component: () => import('./pricing-D6YsWnoY.mjs')
	},
	{
		name: "support",
		path: "/support",
		component: () => import('./support-9DI9Zre-.mjs')
	},
	{
		name: "features",
		path: "/features",
		component: () => import('./features-deKhhkSM.mjs')
	},
	{
		name: "referral",
		path: "/referral",
		component: () => import('./referral-CirwcYDE.mjs')
	}
];
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
	const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
	return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
	if (to === from || from === START_LOCATION) return false;
	if (generateRouteKey(to) !== generateRouteKey(from)) return true;
	if (to.matched.every((comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default)) return false;
	return true;
}
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
	return new Promise((resolve) => {
		if (from === START_LOCATION) {
			resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
			return;
		}
		nuxtApp.hooks.hookOnce(hookToWait, () => {
			requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
		});
	});
} };
function _getHashElementScrollMarginTop(selector) {
	try {
		const elem = (void 0).querySelector(selector);
		if (elem) return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
	} catch {}
	return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	const isPageNavigation = isChangingPage(to, from);
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var configRouterOptions = {
	hashMode: false,
	scrollBehaviorType: "auto"
};
const hashMode = false;
var virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default = {
	...configRouterOptions,
	...router_options_default
};
const globalMiddleware = [/* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
	let __temp, __restore;
	if (!to.meta?.validate) return;
	const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
	if (result === true) return;
	return createError$1({
		fatal: false,
		statusCode: result && result.statusCode || 404,
		statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
		data: { path: to.fullPath }
	});
}), /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {})];
const namedMiddleware = {};
var router_default = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
		const history = virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.routes(virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Froutes_default : virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter({
			...virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = shallowRef(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = shallowRef(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		nuxtApp.hook("page:finish", syncCurrentRoute);
		router.afterEach((to, from) => {
			if (to.matched[to.matched.length - 1]?.components?.default === from.matched[from.matched.length - 1]?.components?.default) syncCurrentRoute();
		});
		const route = {};
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = shallowReactive(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		if (!nuxtApp.ssrContext?.islandContext) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error2) {
			[__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = reactive(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			if (!nuxtApp.ssrContext?.islandContext) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry$1 of toArray(componentMiddleware)) middlewareEntries.add(entry$1);
				}
				{
					const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
					if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
					else middlewareEntries.delete(key);
				}
				for (const entry$1 of middlewareEntries) {
					const middleware = typeof entry$1 === "string" ? nuxtApp._middleware.named[entry$1] || await namedMiddleware[entry$1]?.().then((r) => r.default || r) : entry$1;
					if (!middleware) throw new Error(`Unknown route middleware: '${entry$1}'.`);
					try {
						const result = await nuxtApp.runWithContext(() => middleware(to, from));
						if (result === false || result instanceof Error) {
							const error2 = result || createError$1({
								statusCode: 404,
								statusMessage: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error2));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error2 = createError$1(err);
						if (error2.fatal) await nuxtApp.runWithContext(() => showError(error2));
						return error2;
					}
				}
			}
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			await nuxtApp.callHook("page:loading:end");
		});
		router.afterEach((to) => {
			if (to.matched.length === 0) return nuxtApp.runWithContext(() => showError(createError$1({
				statusCode: 404,
				fatal: false,
				statusMessage: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error2) {
				await nuxtApp.runWithContext(() => showError(error2));
			}
		});
		return { provide: { router } };
	}
});
function injectHead(nuxtApp) {
	const nuxt = nuxtApp || tryUseNuxtApp();
	return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
		if (hasInjectionContext()) return inject(headSymbol);
	});
}
function useHead$1(input, options = {}) {
	const head = injectHead(options.nuxt);
	if (head) return useHead(input, {
		head,
		...options
	});
}
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext._payloadReducers[name] = reduce;
}
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
	["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
	["Ref", (data) => isRef(data) && data.value],
	["Reactive", (data) => isReactive(data) && toRaw(data)]
];
var virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Fplugins_server_default = [
	unhead_default,
	router_default,
	/* @__PURE__ */ defineNuxtPlugin({
		name: "nuxt:revive-payload:server",
		setup() {
			for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
		}
	}),
	/* @__PURE__ */ defineNuxtPlugin({ name: "nuxt:global-components" })
];
var CookieBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CookieBanner",
	__ssrInlineRender: true,
	setup(__props) {
		const showBanner = ref(true);
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(showBanner)) _push(`<div${ssrRenderAttrs(mergeProps({
				class: "bg-[#1a1a2e] text-white py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-4 w-full relative",
				style: { "border-radius": "6px" }
			}, _attrs))}><div class=""><p class="text-center text-white text-[11px] sm:text-xs md:text-xs" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"line-height": "16px",
				"letter-spacing": "0"
			})}"><span class="block sm:inline">Varnish uses cookies to make its website easier to use.</span><a href="#" class="underline hover:no-underline text-white ml-1" style="${ssrRenderStyle({ "text-decoration": "none" })}">Learn more</a></p><button type="button" class="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer z-10 p-1 sm:p-1.5" aria-label="Close cookie banner"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>`);
			else _push(`<!---->`);
		};
	}
});
var _sfc_setup$6 = CookieBanner_vue_vue_type_script_setup_true_lang_default.setup;
CookieBanner_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieBanner.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var CookieBanner_default = CookieBanner_vue_vue_type_script_setup_true_lang_default;
var dropdown_menu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "dropdown-menu",
	__ssrInlineRender: true,
	setup(__props) {
		const show = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
			if (unref(show)) {
				_push(`<div class="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"><div class="py-1">`);
				ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$5 = dropdown_menu_vue_vue_type_script_setup_true_lang_default.setup;
dropdown_menu_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var dropdown_menu_default = dropdown_menu_vue_vue_type_script_setup_true_lang_default;
var virtual_public__2Ficons_2FCompany_20logo_default = publicAssetsURL("/icons/Company logo.svg");
var Header_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Header",
	__ssrInlineRender: true,
	setup(__props) {
		const isMobileMenuOpen = ref(false);
		const openDropdown = ref(null);
		const navigationLinks = [
			{
				name: "Features",
				hasDropdown: false
			},
			{
				name: "Solutions",
				hasDropdown: true
			},
			{
				name: "Network",
				hasDropdown: false
			},
			{
				name: "Pricing",
				hasDropdown: false
			},
			{
				name: "Support",
				hasDropdown: false
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UiDropdownMenu = dropdown_menu_default;
			_push(`<!--[--><header class="bg-white shadow-sm sticky top-0 z-50" style="${ssrRenderStyle({ "background-color": "#f7f7f8" })}"><nav class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8"><div class="flex items-center justify-between h-14 sm:h-16 md:h-16"><div class="flex items-center flex-shrink-0"><img${ssrRenderAttr("src", virtual_public__2Ficons_2FCompany_20logo_default)} alt="Varnish Logo" class="h-7 w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 flex-shrink-0"><span class="text-lg sm:text-xl md:text-xl font-bold text-gray-900 whitespace-nowrap ml-1.5 sm:ml-2 md:ml-2">Varnish</span><div class="hidden tablet:flex items-center space-x-3 tablet:space-x-4 lg:space-x-6 xl:space-x-8 ml-3 tablet:ml-4 lg:ml-6 xl:ml-10 flex-1 min-w-0"><!--[-->`);
			ssrRenderList(navigationLinks, (link) => {
				_push(`<!--[-->`);
				if (!link.hasDropdown) _push(`<a href="#" class="text-gray-700 hover:text-gray-900 transition-colors text-xs tablet:text-[13px] whitespace-nowrap" style="${ssrRenderStyle({
					"font-family": "'Bricolage Grotesque', sans-serif",
					"font-weight": "500",
					"line-height": "20px",
					"letter-spacing": "-0.006em",
					"text-align": "center"
				})}">${ssrInterpolate(link.name)}</a>`);
				else _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
					trigger: withCtx((_, _push$1, _parent$1, _scopeId) => {
						if (_push$1) _push$1(`<a href="#" class="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 cursor-pointer text-xs tablet:text-[13px] whitespace-nowrap" style="${ssrRenderStyle({
							"font-family": "'Bricolage Grotesque', sans-serif",
							"font-weight": "500",
							"line-height": "20px",
							"letter-spacing": "-0.006em",
							"text-align": "center"
						})}"${_scopeId}><span${_scopeId}>${ssrInterpolate(link.name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></a>`);
						else return [createVNode("a", {
							href: "#",
							class: "text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 cursor-pointer text-xs tablet:text-[13px] whitespace-nowrap",
							style: {
								"font-family": "'Bricolage Grotesque', sans-serif",
								"font-weight": "500",
								"line-height": "20px",
								"letter-spacing": "-0.006em",
								"text-align": "center"
							}
						}, [createVNode("span", null, toDisplayString(link.name), 1), (openBlock(), createBlock("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							class: "h-4 w-4",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [createVNode("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "M19 9l-7 7-7-7"
						})]))])];
					}),
					default: withCtx((_, _push$1, _parent$1, _scopeId) => {
						if (_push$1) _push$1(`<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"${_scopeId}> Solution 1 </a><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"${_scopeId}> Solution 2 </a><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"${_scopeId}> Solution 3 </a>`);
						else return [
							createVNode("a", {
								href: "#",
								class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							}, " Solution 1 "),
							createVNode("a", {
								href: "#",
								class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							}, " Solution 2 "),
							createVNode("a", {
								href: "#",
								class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							}, " Solution 3 ")
						];
					}),
					_: 2
				}, _parent));
				_push(`<!--]-->`);
			});
			_push(`<!--]--></div></div><div class="hidden tablet:flex items-center space-x-2 tablet:space-x-3 lg:space-x-4 flex-shrink-0"><button class="flex items-center justify-center text-gray-700" style="${ssrRenderStyle({
				"width": "75px",
				"height": "32px",
				"border-radius": "6px",
				"border": "1px solid rgba(26, 25, 37, 0.09)",
				"padding": "6px",
				"background": "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"font-size": "12px",
				"line-height": "20px",
				"letter-spacing": "-0.02em",
				"text-align": "center",
				"text-transform": "capitalize",
				"box-shadow": "0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,\n                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,\n                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,\n                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),\n                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),\n                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),\n                0px 2px 4px -1px rgba(26, 25, 37, 0.12),\n                0px 4px 8px -4px rgba(26, 25, 37, 0.12),\n                0px 8px 12px -4px rgba(26, 25, 37, 0.06),\n                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset"
			})}"> Login </button><button class="flex items-center justify-center text-white" style="${ssrRenderStyle({
				"width": "75px",
				"height": "32px",
				"border-radius": "6px",
				"padding": "6px",
				"background": "linear-gradient(0deg, #1a1925, #1a1925),\n                linear-gradient(\n                  180deg,\n                  rgba(255, 255, 255, 0.12) 0%,\n                  rgba(255, 255, 255, 0) 100%\n                )",
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"font-size": "12px",
				"line-height": "20px",
				"letter-spacing": "-0.02em",
				"text-align": "center",
				"text-transform": "capitalize",
				"box-shadow": "0px 0.25px 0.25px 0px rgba(255, 255, 255, 0.12) inset,\n                0px 0.75px 0.75px 0px rgba(255, 255, 255, 0.08) inset,\n                0px 1px 3px 0px rgba(255, 255, 255, 0.08) inset,\n                0px 0.25px 0.25px 0px rgba(26, 25, 37, 0.24),\n                0px 0.75px 0.75px 0px rgba(26, 25, 37, 0.12),\n                0px 1px 1.5px -0.5px rgba(26, 25, 37, 0.12),\n                0px 2px 4px -1px rgba(26, 25, 37, 0.12),\n                0px 4px 8px -4px rgba(26, 25, 37, 0.12),\n                0px 8px 12px -4px rgba(26, 25, 37, 0.06),\n                0px -8px 20px 0px rgba(26, 25, 37, 0.08) inset"
			})}"> Sign Up </button></div><button class="tablet:hidden flex items-center justify-center p-2 sm:p-2.5 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Toggle menu">`);
			if (!unref(isMobileMenuOpen)) _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
			else _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`);
			_push(`</button></div></nav></header>`);
			ssrRenderTeleport(_push, (_push$1) => {
				if (unref(isMobileMenuOpen)) _push$1(`<div class="tablet:hidden fixed inset-0 bg-black bg-opacity-50 z-[9998]"></div>`);
				else _push$1(`<!---->`);
				if (unref(isMobileMenuOpen)) {
					_push$1(`<div class="tablet:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[9999] shadow-xl"><div class="flex flex-col h-full"><div class="flex items-center justify-between p-4 border-b border-gray-200"><div class="flex items-center"><img${ssrRenderAttr("src", virtual_public__2Ficons_2FCompany_20logo_default)} alt="Varnish Logo" class="h-8 w-8 flex-shrink-0"><span class="text-xl font-bold text-gray-900 whitespace-nowrap ml-2">Varnish</span></div><button class="p-2 text-gray-700 hover:text-gray-900 transition-colors" aria-label="Close menu"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex-1 overflow-y-auto px-4 py-6 space-y-1"><!--[-->`);
					ssrRenderList(navigationLinks, (link) => {
						_push$1(`<!--[-->`);
						if (!link.hasDropdown) _push$1(`<a href="#" class="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" style="${ssrRenderStyle({
							"font-family": "'Bricolage Grotesque', sans-serif",
							"font-weight": "500",
							"font-size": "13px",
							"line-height": "20px",
							"letter-spacing": "-0.006em"
						})}">${ssrInterpolate(link.name)}</a>`);
						else {
							_push$1(`<div><button class="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" style="${ssrRenderStyle({
								"font-family": "'Bricolage Grotesque', sans-serif",
								"font-weight": "500",
								"font-size": "13px",
								"line-height": "20px",
								"letter-spacing": "-0.006em"
							})}"><span>${ssrInterpolate(link.name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": unref(openDropdown) === link.name }, "h-4 w-4 transition-transform"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
							if (unref(openDropdown) === link.name) _push$1(`<div class="pl-4 space-y-1 mt-1"><a href="#" class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"> Solution 1 </a><a href="#" class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"> Solution 2 </a><a href="#" class="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"> Solution 3 </a></div>`);
							else _push$1(`<!---->`);
							_push$1(`</div>`);
						}
						_push$1(`<!--]-->`);
					});
					_push$1(`<!--]--></div><div class="p-4 border-t border-gray-200 space-y-3"><button class="w-full flex items-center justify-center text-gray-700 py-2" style="${ssrRenderStyle({
						"height": "32px",
						"border-radius": "6px",
						"border": "1px solid rgba(26, 25, 37, 0.09)",
						"background": "linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%)",
						"font-family": "'Bricolage Grotesque', sans-serif",
						"font-weight": "500",
						"font-size": "13px",
						"line-height": "20px",
						"letter-spacing": "-0.02em",
						"text-align": "center",
						"text-transform": "capitalize"
					})}"> Login </button><button class="w-full flex items-center justify-center text-white py-2" style="${ssrRenderStyle({
						"height": "32px",
						"border-radius": "6px",
						"background": "linear-gradient(0deg, #1a1925, #1a1925)",
						"font-family": "'Bricolage Grotesque', sans-serif",
						"font-weight": "500",
						"font-size": "13px",
						"line-height": "20px",
						"letter-spacing": "-0.02em",
						"text-align": "center",
						"text-transform": "capitalize"
					})}"> Sign Up </button></div></div></div>`);
				} else _push$1(`<!---->`);
			}, "body", false, _parent);
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$4 = Header_vue_vue_type_script_setup_true_lang_default.setup;
Header_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Header_default = Header_vue_vue_type_script_setup_true_lang_default;
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		provide(PageRouteSymbol, shallowReactive(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return h(props.vnode, { ref: props.vnodeRef });
		};
	}
});
const RouteProvider = defineRouteProvider();
var page_default = defineComponent({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = ref();
		inject(PageRouteSymbol, null);
		expose({ pageRef });
		inject(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return h(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: (routeProps) => {
				return h(Suspense, { suspensible: true }, { default() {
					return h(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			} });
		};
	}
});
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
var virtual_public__2Fimages_2FFrame_202147225686_default = publicAssetsURL("/images/Frame 2147225686.svg");
var Footer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Footer",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({
				class: "bg-white border-t border-gray-200 mt-auto",
				style: { "background-color": "#ffffff" }
			}, _attrs))}><div class="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12" style="${ssrRenderStyle({
				"margin-top": "20px",
				"margin-bottom": "20px"
			})}"><div class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12"><div class="space-y-3 sm:space-y-4 lg:col-span-6 col-span-3 sm:col-span-3 text-center sm:text-left"><div class="flex items-center justify-center sm:justify-start space-x-2"><img${ssrRenderAttr("src", virtual_public__2Ficons_2FCompany_20logo_default)} alt="Varnish Logo" class="h-7 w-7 sm:h-8 sm:w-8"><span class="text-lg sm:text-xl font-bold text-gray-900">Varnish</span></div><p class="leading-relaxed text-sm sm:text-base" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "24px",
				"letter-spacing": "-0.006em",
				"color": "#73737f"
			})}"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tristique risus. Suspendisse semper. </p><div class="flex items-center justify-center sm:justify-start space-x-2 pt-1"><img${ssrRenderAttr("src", virtual_public__2Fimages_2FFrame_202147225686_default)} alt="BEST CDN AWARD" class="h-[50px] sm:h-[62px] w-auto"></div></div><div class="lg:col-span-2 col-span-1 text-center sm:text-left"><h3 class="mb-3 sm:mb-4 text-sm sm:text-base" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#1a1a2e"
			})}"> Product </h3><ul class="space-y-2 sm:space-y-3"><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Features </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Network </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Pricing </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> API </a></li></ul></div><div class="lg:col-span-2 col-span-1 text-center sm:text-left"><h3 class="mb-3 sm:mb-4 text-sm sm:text-base" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#1a1a2e"
			})}"> Company </h3><ul class="space-y-2 sm:space-y-3"><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> About </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Blog </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Contact </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Referral </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Careers </a></li></ul></div><div class="lg:col-span-2 col-span-1 text-center sm:text-left"><h3 class="mb-3 sm:mb-4 text-sm sm:text-base" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "500",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#1a1a2e"
			})}"> Support </h3><ul class="space-y-2 sm:space-y-3"><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Knowledge Base </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Network Status </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Open Source </a></li><li><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Bricolage Grotesque', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> FAQ </a></li></ul></div></div><div class="flex flex-col sm:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-gray-200 gap-4 sm:gap-0"><div class="flex items-center order-2 sm:order-1"><div class="flex items-center space-x-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-300 rounded-full"><span class="relative flex h-2 w-2"><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span><span class="text-xs sm:text-sm text-gray-900">All systems operational</span></div></div><div class="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 order-1 sm:order-2"><span class="text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Inter', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> © 2025 Varnish Inc. </span><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Inter', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Privacy Policy </a><a href="#" class="hover:opacity-80 transition-opacity text-xs sm:text-sm" style="${ssrRenderStyle({
				"font-family": "'Inter', sans-serif",
				"font-weight": "400",
				"line-height": "20px",
				"letter-spacing": "-0.006em",
				"color": "#51515e"
			})}"> Terms of Service </a></div></div></div></footer>`);
		};
	}
});
var _sfc_setup$3 = Footer_vue_vue_type_script_setup_true_lang_default.setup;
Footer_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Footer_default = Footer_vue_vue_type_script_setup_true_lang_default;
var __plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_CookieBanner = CookieBanner_default;
	const _component_Header = Header_default;
	const _component_NuxtPage = page_default;
	const _component_Footer = Footer_default;
	_push(`<div${ssrRenderAttrs(mergeProps({
		class: "flex flex-col min-h-screen",
		style: {
			"font-family": "'Bricolage Grotesque', sans-serif",
			"margin-left": "6px",
			"margin-right": "6px",
			"border-radius": "6px"
		}
	}, _attrs))}>`);
	_push(ssrRenderComponent(_component_CookieBanner, null, null, _parent));
	_push(ssrRenderComponent(_component_Header, null, null, _parent));
	_push(`<main class="flex-1">`);
	_push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
	_push(`</main>`);
	_push(ssrRenderComponent(_component_Footer, null, null, _parent));
	_push(`</div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
var _sfc_main$1 = {
	__name: "nuxt-error-page",
	__ssrInlineRender: true,
	props: { error: Object },
	setup(__props) {
		const _error = __props.error;
		_error.stack && _error.stack.split("\n").splice(1).map((line) => {
			return {
				text: line.replace("webpack:/", "").replace(".vue", ".js").trim(),
				internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
			};
		}).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
		const statusCode = Number(_error.statusCode || 500);
		const is404 = statusCode === 404;
		const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
		const description = _error.message || _error.toString();
		const stack = void 0;
		const _Error404 = defineAsyncComponent(() => import('./error-404-BQujV2Xb.mjs'));
		const _Error = defineAsyncComponent(() => import('./error-500-DG52qccS.mjs'));
		const ErrorTemplate = is404 ? _Error404 : _Error;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({
				statusCode: unref(statusCode),
				statusMessage: unref(statusMessage),
				description: unref(description),
				stack: unref(stack)
			}, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var nuxt_error_page_default = _sfc_main$1;
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const IslandRenderer = () => null;
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		provide(PageRouteSymbol, useRoute());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
		const error = /* @__PURE__ */ useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		onErrorCaptured((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				onServerPrefetch(() => p);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderSuspense(_push, {
				default: () => {
					if (unref(abortRender)) _push(`<div></div>`);
					else if (unref(error)) _push(ssrRenderComponent(unref(nuxt_error_page_default), { error: unref(error) }, null, _parent));
					else if (unref(islandContext)) _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
					else if (unref(SingleRenderer)) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
					else _push(ssrRenderComponent(unref(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var nuxt_root_default = _sfc_main;
var entry = async function createNuxtAppServer(ssrContext) {
	const vueApp = createApp(nuxt_root_default);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt__2FUsers_2Frimshaafzal_2FDocuments_2FGitHub_2Fvarnish_one_fe_vercel_2F_nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$1(error);
	}
	if (ssrContext?._renderResponse) throw new Error("skipping render");
	return vueApp;
};
var entry_default = (ssrContext) => entry(ssrContext);

export { createError$1 as a, useRouter as c, nuxtLinkDefaults as d, entry_default as default, hashMode as i, useNuxtApp as l, injectHead as n, navigateTo as o, useHead$1 as r, resolveRouteObject as s, __plugin_vue_export_helper_default as t, useRuntimeConfig as u };
//# sourceMappingURL=server.mjs.map
