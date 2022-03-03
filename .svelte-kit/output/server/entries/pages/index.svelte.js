import { c as create_ssr_component, e as escape, a as add_attribute, b as each, i as is_promise, n as noop, v as validate_component } from "../../chunks/index-c31da524.js";
import { c as colRef } from "../../chunks/firebase-5ee02f5a.js";
import { onSnapshot } from "firebase/firestore";
import "firebase/app";
var Item_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-aw5ei0{border:1px solid black;margin:1rem 0}.container.svelte-aw5ei0{display:flex;flex-direction:column;gap:0.5rem;padding:1rem}",
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
  return `<div class="${"container svelte-aw5ei0"}"><div class="${"item"}">Id: ${escape(id)}</div>
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
  code: "main.svelte-y3f0i0{border:1px solid black;margin:1rem 0;padding:0.5rem}header.svelte-y3f0i0{display:flex;justify-content:space-between}",
  map: null
};
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ActionCode } = $$props;
  let { Timezone } = $$props;
  let { Author } = $$props;
  let { Error } = $$props;
  let { Date } = $$props;
  let { id } = $$props;
  let { number } = $$props;
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
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  $$result.css.add(css$1);
  return `<main class="${"svelte-y3f0i0"}"><header class="${"svelte-y3f0i0"}"><div class="${"item actionCode"}">Action code: ${escape(ActionCode)}</div>
		<div>${escape(number)}</div></header>
	<div class="${"item Timezone"}">Timezone: ${escape(Timezone)}</div>
	<div class="${"item Author"}">Author: ${escape(Author)}</div>
	<div class="${"item Error"}">Error: ${escape(Error)}</div>
	<div class="${"item Date"}">Date: ${escape(Date)}</div>
	<div class="${"item id"}">id: ${escape(id)}</div>
</main>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ie8t3e.svelte-ie8t3e{display:flex;justify-content:space-between;flex-wrap:wrap;gap:3rem}.instructions.svelte-ie8t3e.svelte-ie8t3e{font-size:1.3rem;font-weight:400;padding-left:2rem;margin:1rem}.instructions.svelte-ie8t3e li.svelte-ie8t3e{margin:0.5rem}form.svelte-ie8t3e.svelte-ie8t3e{margin:1rem 0}.text-fields.svelte-ie8t3e label.svelte-ie8t3e{display:flex;justify-content:space-between;max-width:20rem}.text.svelte-ie8t3e.svelte-ie8t3e{padding:1rem 0.5rem;height:2rem}.radio.svelte-ie8t3e.svelte-ie8t3e{width:5rem}fieldset.svelte-ie8t3e.svelte-ie8t3e{font-size:1.2rem;padding:1rem}p.group.svelte-ie8t3e.svelte-ie8t3e{margin-top:0.6rem;font-size:1.3rem}li.svelte-ie8t3e.svelte-ie8t3e{list-style:decimal}input.svelte-ie8t3e.svelte-ie8t3e{border-radius:5px;font-size:1rem}button.svelte-ie8t3e.svelte-ie8t3e{padding:0.5rem;width:10rem;border-radius:5px;background:rgb(154, 152, 251);font-weight:800}button.svelte-ie8t3e.svelte-ie8t3e:hover{background:rgb(130, 128, 250)}",
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
  return `<section class="${"steps"}"><h1>Instructions for setting up telegram bot</h1>
	<p class="${"group svelte-ie8t3e"}">These instructions will also work after adding the bot to a group</p>
	<ul class="${"instructions svelte-ie8t3e"}"><li class="${"svelte-ie8t3e"}">Open telegram</li>
		<li class="${"svelte-ie8t3e"}">Type in @EconomicsDesignBot</li>
		<li class="${"svelte-ie8t3e"}">Press or type in &#39;/start&#39;</li>
		<li class="${"svelte-ie8t3e"}">Copy the response which represents the chat id</li>
		<li class="${"svelte-ie8t3e"}">Paste it in the chat id field below</li></ul></section>

<section></section>
<form class="${"svelte-ie8t3e"}"><fieldset class="${"svelte-ie8t3e"}">Use this form to either get data from the coin market cap api successfully and print it next to the error log,
		or simulate an error.
		<br>
		<br>
		<label><input type="${"radio"}" class="${"radio svelte-ie8t3e"}" name="${"method"}"${add_attribute("value", 1, 0)}${add_attribute("checked", true, 1)}>
			<b>Get Data</b></label>

		<label><input type="${"radio"}" class="${"radio svelte-ie8t3e"}" name="${"method"}"${add_attribute("value", 2, 0)}${""}>
			<b>Simulate Error</b></label>
		<br>
		<br>

		<div class="${"text-fields svelte-ie8t3e"}"><label class="${"chatid svelte-ie8t3e"}"><span><b>Chat id</b></span>
				<input type="${"text"}" name="${"chat_id"}" class="${"text svelte-ie8t3e"}"${add_attribute("value", chat_id, 0)}></label>
		<br>
		<br>
		
		<label class="${"author svelte-ie8t3e"}"><span><b>Author</b></span>
			<input type="${"text"}" name="${"author"}" class="${"text svelte-ie8t3e"}"${add_attribute("value", author, 0)}></label>
		
		<br>
		<br>
		
		<label class="${"message svelte-ie8t3e"}"><span><b>Message</b></span>
			<input type="${"text"}" name="${"message"}" class="${"text svelte-ie8t3e"}"${add_attribute("value", message, 0)}></label></div>
		
		<br>
		<br>
		
		<button type="${"submit"}" class="${"svelte-ie8t3e"}">Submit</button></fieldset></form>

<main class="${"svelte-ie8t3e"}"><section class="${"errors"}">${errors ? `<h1>Number of simulated errors: ${escape(errors.length)}</h1>
			${each(errors, (error, i) => {
    return `${validate_component(Error_1, "Error").$$render($$result, Object.assign(error, { number: i + 1 }), {}, {})}`;
  })}` : ``}</section>

	<section class="${"data"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			Getting data...
		`;
    }
    return function(result) {
      return `
			${result?.data ? `<h1 style="${"text-align:right;"}">Data collected successfully</h1>
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
</main>`;
});
export { Routes as default };
