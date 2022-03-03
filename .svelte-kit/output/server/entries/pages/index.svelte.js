import { c as create_ssr_component, e as escape, a as add_attribute, i as is_promise, n as noop, b as each, v as validate_component } from "../../chunks/index-c31da524.js";
import { c as colRef } from "../../chunks/firebase-5ee02f5a.js";
import { onSnapshot } from "firebase/firestore";
import "firebase/app";
var Item_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-u21cb5{border:1px solid black;margin:1rem 0}.container.svelte-u21cb5{display:flex;flex-direction:column;gap:0.5rem}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { name } = $$props;
  let { symbol } = $$props;
  let { cmc_rank } = $$props;
  let { last_updated } = $$props;
  let { circulating_supply } = $$props;
  let { total_supply } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.symbol === void 0 && $$bindings.symbol && symbol !== void 0)
    $$bindings.symbol(symbol);
  if ($$props.cmc_rank === void 0 && $$bindings.cmc_rank && cmc_rank !== void 0)
    $$bindings.cmc_rank(cmc_rank);
  if ($$props.last_updated === void 0 && $$bindings.last_updated && last_updated !== void 0)
    $$bindings.last_updated(last_updated);
  if ($$props.circulating_supply === void 0 && $$bindings.circulating_supply && circulating_supply !== void 0)
    $$bindings.circulating_supply(circulating_supply);
  if ($$props.total_supply === void 0 && $$bindings.total_supply && total_supply !== void 0)
    $$bindings.total_supply(total_supply);
  $$result.css.add(css$2);
  return `<div class="${"container svelte-u21cb5"}"><div class="${"item"}">Id: ${escape(id)}</div>
		<div class="${"item"}">Name: ${escape(name)}</div>
		<div class="${"item"}">Symbol: ${escape(symbol)}</div>
		<div class="${"item"}">Cmc rank: ${escape(cmc_rank)}</div>
		<div class="${"item"}">Circulating supply: ${escape(circulating_supply)}</div>
		<div class="${"item"}">Total supply: ${escape(total_supply)}</div>
	<div class="${"item"}">Last updated: ${escape(last_updated)}</div>
</div>`;
});
var Error_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-in9u1k{border:1px solid black;margin:1rem}",
  map: null
};
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ActionCode } = $$props;
  let { Timezone } = $$props;
  let { Author } = $$props;
  let { Error } = $$props;
  let { Date } = $$props;
  let { id } = $$props;
  if ($$props.ActionCode === void 0 && $$bindings.ActionCode && ActionCode !== void 0)
    $$bindings.ActionCode(ActionCode);
  if ($$props.Timezone === void 0 && $$bindings.Timezone && Timezone !== void 0)
    $$bindings.Timezone(Timezone);
  if ($$props.Author === void 0 && $$bindings.Author && Author !== void 0)
    $$bindings.Author(Author);
  if ($$props.Error === void 0 && $$bindings.Error && Error !== void 0)
    $$bindings.Error(Error);
  if ($$props.Date === void 0 && $$bindings.Date && Date !== void 0)
    $$bindings.Date(Date);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<main class="${"svelte-in9u1k"}"><div class="${"item actionCode"}">Action code: ${escape(ActionCode)}</div>
	<div class="${"item Timezone"}">Timezone: ${escape(Timezone)}</div>
	<div class="${"item Author"}">Author: ${escape(Author)}</div>
	<div class="${"item Error"}">Error: ${escape(Error)}</div>
	<div class="${"item Date"}">Date: ${escape(Date)}</div>
	<div class="${"item id"}">id: ${escape(id)}</div>
</main>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1v8p0hs{display:flex;justify-content:space-between;flex-wrap:wrap}span.svelte-1v8p0hs{display:inline}li.svelte-1v8p0hs{list-style:decimal}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dataPromise;
  let chat_id;
  let author;
  let message;
  let errors;
  onSnapshot(colRef, (snapshot) => {
    let newerrors = [];
    snapshot.docs.forEach((doc) => {
      newerrors.push({ ...doc.data(), id: doc.id });
    });
    errors = newerrors;
  });
  $$result.css.add(css);
  return `<section class="${"steps"}"><h1>Instructions for setting up bot</h1>
	<ul><li class="${"svelte-1v8p0hs"}">Open telegram</li>
		<li class="${"svelte-1v8p0hs"}">Type in @EconomicsDesignBot</li>
		<li class="${"svelte-1v8p0hs"}">Press or type in &#39;/start&#39;</li>
		<li class="${"svelte-1v8p0hs"}">Copy the response which represents the chat id</li>
		<li class="${"svelte-1v8p0hs"}">Paste it in the chat id field below</li></ul></section>

<form><fieldset><legend>Get data or simulate error</legend>
		<label><input type="${"radio"}" name="${"method"}"${add_attribute("value", 1, 0)}${add_attribute("checked", true, 1)}>
			Get Data
		</label>

		<label><input type="${"radio"}" name="${"method"}"${add_attribute("value", 2, 0)}${""}>
			Simulate Error
		</label>
		<br>
		<br>

		<label class="${"chatid"}">Chat id
			<input type="${"text"}" name="${"chat_id"}"${add_attribute("value", chat_id, 0)}></label>
		<br>
		<br>

		<label class="${"author"}">Author
			<input type="${"text"}" name="${"author"}"${add_attribute("value", author, 0)}></label>

		<br>
		<br>

		<label class="${"message"}">Message
			<input type="${"text"}" name="${"message"}"${add_attribute("value", message, 0)}></label>

		<br>
		<br>

		<button type="${"submit"}">Submit</button></fieldset></form>

<main class="${"svelte-1v8p0hs"}"><section class="${"data"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			Getting data...
		`;
    }
    return function(result) {
      return `
			${result?.data ? `<h1>Data collected successfully</h1>
				${each(result.data, (item) => {
        return `${validate_component(Item, "Item").$$render($$result, {
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          cmc_rank: item.cmc_rank,
          last_updated: item.last_updated,
          circulating_supply: item.circulating_supply,
          total_supply: item.total_supply
        }, {}, {})}`;
      })}` : ``}

			${result?.error ? `<h1>There was an error</h1>
				${escape(result.error)}` : ``}
		`;
    }(__value);
  }(dataPromise)}</section>

	<section class="${"errors"}">${errors ? `<h1>Number of errors: ${escape(errors.length)}</h1>
			${each(errors, (error, i) => {
    return `<span class="${"svelte-1v8p0hs"}">${escape(i + 1)}</span>${validate_component(Error_1, "Error").$$render($$result, Object.assign(error), {}, {})}`;
  })}` : ``}</section>
</main>`;
});
export { Routes as default };
