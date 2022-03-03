import { c as create_ssr_component } from "../../chunks/index-c31da524.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '*{padding:0;margin:0;box-sizing:border-box}body{font-family:"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif}nav.svelte-49azsk{display:flex;justify-content:center;height:5rem;border-bottom:1px solid rgb(195, 195, 195);padding:1rem;background:rgb(75, 102, 160)}.container.svelte-49azsk{display:grid;place-items:center}main.svelte-49azsk{padding:3rem;max-width:2000px}ul.svelte-49azsk{display:flex;align-items:center}li.svelte-49azsk{list-style:none}a.svelte-49azsk{background:rgb(130, 128, 250);padding:1rem;margin:1rem;border-radius:5px;border:1px solid rgba(24, 24, 24, 0.507);text-decoration:none;color:white;font-weight:600}a.svelte-49azsk:hover{background:rgb(107, 105, 248);cursor:pointer}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-49azsk"}"><ul class="${"svelte-49azsk"}"><li class="${"svelte-49azsk"}"><a href="${"/"}" class="${"svelte-49azsk"}">Error simulation</a></li>
		<li class="${"svelte-49azsk"}"><a href="${"/explanation"}" class="${"svelte-49azsk"}">Explanation</a></li></ul></nav>

<div class="${"container svelte-49azsk"}"><main class="${"svelte-49azsk"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export { _layout as default };
