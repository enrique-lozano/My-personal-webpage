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

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
	font-family: 'Roboto Slab', serif;
	@apply text-black transition-colors duration-700;
}

.padding-x {
	@apply px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-40;
}

h1 {
	@apply text-5xl;
	font-family: 'Nunito', sans-serif;
}

h2 {
	@apply text-4xl;
}
h3 {
	@apply text-xl font-semibold;
}
h4 {
	@apply text-lg font-medium;
}

input,
textarea {
	@apply p-2.5 border bg-light border-gray-300 rounded-lg shadow-sm w-full;
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
