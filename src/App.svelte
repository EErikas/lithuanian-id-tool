<script>
	import { t, locale, locales } from "./utils/i18n";
	import {generateRandomID, checkID} from "./utils/idTools";
		
	let idCode = "";
	let result = {};
	function generateID() {
		idCode = generateRandomID();
	}
	function getIdInfo() {
		result = checkID(idCode);
	}
</script>

<div class="navbar">
	<div class="site-name">{$t("homepage.title")}</div>
	<div class="select-wrapper">
		<select bind:value={$locale}>
			{#each locales as l}
				<option value={l}>{l.toUpperCase()} </option>
			{/each}
		</select>
	</div>
</div>

<main>
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
		<h2>{$t("results.header")}</h2>
		<table>
			<tr>
				<th>{$t("results.genderHeader")}</th>
				<td>{$t(result.gender)}</td>
			</tr>
			<tr>
				<th>{$t("results.birthDateHeader")}</th>
				<td>
					{result.dateOfBirth.date}
					<!-- Enumerate footnotes for the exceptions (if such exist): -->
					<sup>{Array.from({ length: result.dateOfBirth.exceptions.length }, (_, i) => i + 1).join(', ')}</sup>
				</td>
			</tr>
			<tr>
				<th>{$t("results.birthOrderHeader")}</th>
				<td>{result.birthOrder}</td>
			</tr>
		</table>
		{#each Object.entries(result.dateOfBirth.exceptions) as [id, content]}
			<p><sup>{Number(id) + 1}</sup> {$t(content)}</p>
		{/each}

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

<style>
	table {
		width: 70%;  /* Adjust table width as needed */
		border-collapse: collapse;  /* Ensure borders don't overlap */
	}
	
	/* Add borders to table cells */
	td, th {
		border: 1px solid #000;  /* 1px black border */
		padding: 10px;  /* Padding for readability */
	}
	th {
		background-color: #333;  /* Dark gray background */
		color: white;  /* White text for contrast */
	}
</style>