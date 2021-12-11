<template>
	<div id="radios">
		<input id="light" type="radio" name="radioBtn" @click="toggleDarkMode('Light')" checked />
		<label for="light">
			<img src="../assets/icons/sun.png" alt="calendar_icon" />
		</label>
		<input id="dark" type="radio" name="radioBtn" @click="toggleDarkMode('Dark')" />
		<label for="dark"> <img src="../assets/icons/moon.png" alt="calendar_icon" /> </label>
		<div id="background-of-selected"></div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
	mounted: () => {
		// If dark mode is on at the init of the app, we set the checked button to dark
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.getElementById('dark')?.click();
		}
	},
})
export default class DarkModeToggle extends Vue {
	toggleDarkMode(goTo: 'Dark' | 'Light') {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$toggleWidth: 1.8rem;
$padding: 0px;
$border-radius: 0.75rem;

#radios {
	position: relative;
	display: inline-flex;
	padding: $padding;
	border-radius: $border-radius;
	z-index: 0;
	@apply bg-light border border-white;

	input {
		display: none;
	}

	img {
		max-width: 60%;
	}

	#background-of-selected,
	label {
		width: $toggleWidth;
		height: 40px;
		text-align: center;
		display: inline-flex;
		z-index: 2;
		cursor: pointer;
		border-radius: $border-radius;
		align-items: center;
		justify-content: center;
	}

	#background-of-selected {
		background-color: var(--white);
		position: absolute;
		left: $padding;
		top: $padding;
		cursor: initial;
		z-index: 3;
		transition: transform 0.5s ease-in-out;
	}

	#light:checked ~ #background-of-selected {
		transform: translateX(0);
	}

	#dark:checked ~ #background-of-selected {
		transform: translateX($toggleWidth);
	}
}
</style>
