import { c as create_ssr_component } from "../../chunks/index-c31da524.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1ehnbcy{display:flex;justify-content:center;height:3rem;border-bottom:1px solid black;padding:1rem}ul.svelte-1ehnbcy{display:flex;align-items:center}li.svelte-1ehnbcy{list-style:none}a.svelte-1ehnbcy{padding:1rem;margin:1rem;border-radius:5px;border:1px solid black;text-decoration:none}a.svelte-1ehnbcy:hover{background:rgb(212, 212, 212);cursor:pointer}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1ehnbcy"}"><ul class="${"svelte-1ehnbcy"}"><li class="${"svelte-1ehnbcy"}"><a href="${"/"}" class="${"svelte-1ehnbcy"}">Error simulation</a></li>
        <li class="${"svelte-1ehnbcy"}"><a href="${"/explanation"}" class="${"svelte-1ehnbcy"}">Explanation</a></li></ul></nav>


${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
