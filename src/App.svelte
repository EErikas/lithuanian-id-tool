<script>
	import { t, locale, locales } from "./utils/i18n";
	import {generateRandomID, checkID} from "./utils/idTools";
		
	// Create a locale specific timestamp
	$: time = new Date().toLocaleDateString($locale, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	let idCode = "";
	let result = {}
	function generateID() {
		idCode = generateRandomID();
	}
	function getIdInfo() {
		result = checkID(idCode);
		console.log(result);
	}
</script>

<div class="navbar">
	<div class="site-name">{$t("homepage.title")}</div>
	<div class="select-wrapper">
		<select bind:value={$locale}>
			{#each locales as l}
				<option value={l}>{l} </option>
			{/each}
		</select>
	</div>
</div>

<main>
	<!-- <p>{@html $t("homepage.time", { time })}!</p> -->

	<h2>{$t("homepage.introHeader")}</h2>
	<p>{$t("homepage.introText")}</p>
	
	<!-- Input form with number-only constraints -->
	<div class="input-form">
		<input
		bind:value={idCode}
		type="text"
		class="form-input"
		pattern="[0-9]{11}" 
		maxlength="11"
		placeholder="{$t("homepage.entryPlaceholder")}"
		title="Only numbers from 0 to 9, up to 11 characters" />
		
		<div class="form-buttons">
			<button on:click={getIdInfo}>{$t("button.check")}</button>
			<button on:click={generateID}>{$t("button.generate")}</button>
		</div>
	</div>

	<div>
		{#if result.error === null}
			{#if result.dateOfBirth.exceptions.length === 0}
				<p>{time}</p>
			{/if}
			<p>{result.gender}</p>
			<p>{result.dateOfBirth.date}</p>
			<p>{result.birthOrder}</p>
		{:else if result.error === undefined}
			<!-- Initial stage, returns nothing -->
		{:else}
			<h2>{$t("error.header")}!</h2>
			<p>{@html $t(result.error, {correctAnswer: result.correctAnswer})}</p>
		{/if}
	</div>

	<h2>{$t("homepage.noticeHeader")}</h2>
	{#each $t("homepage.noticeText") as item}
		<p>{item}</p>
	{/each}
	
</main>
