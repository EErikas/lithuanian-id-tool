<script>
import { t, locale, locales } from "./i18n";
import {generateRandomID, checkID} from "./idTools"
	
	// Create a locale specific timestamp
$: time = new Date().toLocaleDateString($locale, {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
});
let idCode = '';
function generateID() {
	idCode = generateRandomID();
}
function getIdInfo() {
	let response = checkID(idCode);
	console.log(response);
}
</script>

<div class="navbar">
	<div class="site-name">Lithuanian ID Number Tool</div>
	<div class="select-wrapper">
		<select bind:value={$locale}>
			{#each locales as l}
				<option value={l}>{l} </option>
			{/each}
			</select>
	</div>
</div>
<main>

	<h1>{$t("homepage.title")}!</h1>

	<p>{@html $t("homepage.welcome", { name: "Jane Doe" })}!</p>
	<p>{@html $t("homepage.time", { time })}!</p>

	    <!-- Input form with number-only constraints -->
	<div class="input-form">
		<input
			bind:value={idCode}
			type="text"
			class="form-input"
			pattern="[0-9]{1,11}" 
			maxlength="11"
			placeholder="Enter number"
			title="Only numbers from 0 to 9, up to 11 characters" />

		<div class="form-buttons">
			<button on:click={getIdInfo}>Check</button>
			<button on:click={generateID}>Generate</button>
		</div>

	</div>
</main>




<style>
main {
	max-width: 24rem;
	margin: 3rem auto;
	padding: 0 0.5rem;
}
</style>
