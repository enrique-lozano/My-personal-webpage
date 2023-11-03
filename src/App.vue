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

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root {
	--primary: #367ee9;
	--light: #eaeff6;
	--light-tint: #cdd3db;
	--black: #000000;
	--text-color: #575757;
	--white: #fff;
}

.dark {
	--primary: #367ee9;
	--light: #151516;
	--light-tint: #2c2c30;
	--black: #fff;
	--text-color: #c3c3c3;
	--white: #000000;
}

/*---------GLOBAL STYLES--------*/

* {
	scroll-behavior: smooth;
	font-family: 'Lato', serif;
	font-size: calc(11px + 0.6vh);
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
	letter-spacing: 6px;
	line-height: 1.2;
	@apply font-bold;

	font-size: 3rem;

	@media (max-width: 1024px) {
		font-size: 2.5rem;
	}
}

h2 {
	letter-spacing: 2px;
	@apply text-4xl font-semibold;
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

p,
span {
	color: var(--text-color);
}

button {
	@apply p-2.5 flex items-center rounded transition duration-300 transform hover:scale-105;
}

.button-icon {
	@apply p-2.5 flex items-center rounded transition duration-300 transform hover:scale-105;

	padding: 8px;
	border: 1px solid #2d2d2d;
	color: var(--text-color);
	border-radius: 7px;

	&:hover {
		filter: contrast(0.7);
	}

	svg,
	img {
		width: 24px;
		height: 24px;
	}
}

.flat-button {
	@apply bg-primary text-white;
}

.stroked-button {
	@apply bg-white text-primary border border-primary hover:bg-light;
}

a {
	display: flex;
	align-items: center;
	position: relative;
	gap: 0.5rem;
	transition: all 0.4s;

	svg,
	img {
		transition: all 0.2s;
	}

	&:hover {
		color: var(--primary);

		.svg-inline--fa path,
		svg path {
			fill: var(--primary);
		}
	}
}

.underline-on-hover {
	position: relative;
	display: inline;
	width: fit-content;
}

.underline-on-hover:after {
	bottom: 0;
	content: '';
	display: block;
	height: 2px;
	left: 0%;
	position: relative;
	background: var(--primary);
	transition: width 0.4s ease 0s, left 0.3s ease 0s;
	width: 0;
}

.underline-on-hover:hover:after {
	width: 100%;
	left: 0;
}
.underline-on-hover:hover {
	color: var(--primary);

	* {
		color: var(--primary);
	}

	svg,
	img {
		transform: translate(0px, -4px);
	}
}
</style>
