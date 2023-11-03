<template>
	<div class="toggle-container">
		<label for="toggle-input">
			<input type="checkbox" id="toggle-input" name="toggle-input" @change="(event) => toggleDarkMode(event.target)" />
			<font-awesome-icon icon="fa-solid fa-sun" class="sun" />
			<font-awesome-icon icon="fa-solid fa-moon" class="moon" />
			<span class="toggle"></span>
		</label>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
	// If dark mode is on at the init of the app, we set the checked button/input to dark
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		const input = document.getElementById('toggle-input');

		if (input && input instanceof HTMLInputElement) {
			input.checked = true;
			toggleDarkMode(input);
		}
	}
});

function toggleDarkMode(inputEl: any) {
	if (!inputEl || !(inputEl instanceof HTMLInputElement)) return;

	const goTo = inputEl.checked ? 'Dark' : 'Light';

	// Dark mode currently on
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		if (goTo == 'Dark') return;
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	} else {
		//LIght mode currently on
		if (goTo == 'Light') return;
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$toggleWidth: 3rem;
$padding: 0px;
$border-radius: 0.75rem;

.toggle-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

label {
	width: $toggleWidth;
	height: $toggleWidth;
	border-radius: 50%;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
}

input {
	position: absolute;
	opacity: 0;
}

.toggle {
	position: absolute;
	display: block;
	background-color: var(--light-tint);
	border-radius: 50%;
	z-index: -1;
	transition: 1s;
	width: $toggleWidth;
	height: $toggleWidth;
}

input:checked {
	& ~ .moon {
		transform: rotate(360deg) scale(0);
		transition-delay: 0s;
	}

	& ~ .sun {
		transform: scale(1) rotate(360deg);
		transition-delay: 0.4s;
	}
}

.moon,
.sun {
	font-size: calc($toggleWidth * 0.6);
	color: gray;
	filter: drop-shadow(0 0 2px var(--light-tint));
	transition: 1s ease;
}

.moon {
	transition-delay: 0.4s;
}

.sun {
	transform: scale(0);
	position: absolute;
}
</style>
