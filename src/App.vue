<template>
	<!---
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	----->

	<router-view />
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

:root {
	--primary: #367ee9;
	--light: #eaeff6;
	--black: #000000;
	--white: #fff;
}

.dark {
	--primary: #367ee9;
	--light: #151516;
	--black: #fff;
	--white: #000000;
}

/*---------GLOBAL STYLES--------*/

* {
	scroll-behavior: smooth;
	font-family: 'Merriweather', serif;
	@apply text-black transition-colors duration-700;
}

html,
body {
	background-color: var(--light);
}

.padding-x {
	max-width: 1280px;
	margin: auto;
	padding: 0 2rem;
}

section header {
	margin-bottom: 2rem;

	h2 {
		margin-bottom: 8px;
	}

	span {
		font-weight: 300;
	}
}

h1 {
	@apply text-5xl font-semibold;
}

h2 {
	@apply text-4xl;
}

h3 {
	@apply text-2xl font-semibold;
}

h4 {
	@apply text-lg font-medium;
}

input,
textarea {
	@apply p-2.5 rounded-lg shadow-sm w-full;

	border: 1px solid var(--light);
}

button {
	@apply p-2.5 flex items-center rounded transition duration-300 transform hover:scale-105;
}

.flat-button {
	@apply bg-primary text-white;
}

.stroked-button {
	@apply bg-white text-primary border border-primary hover:bg-light;
}
</style>
