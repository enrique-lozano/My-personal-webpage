<template>
	<header class="text-center mb-8">
		<h2>{{ $t('skills.title') }}</h2>
		<span>{{ $t('skills.subtitle') }}</span>
	</header>

	<div class="flex flex-wrap justify-center">
		<a :href="skill.link" target="_blank" v-for="skill in skills" :key="skill.name">
			<div class="bubble rounded-lg shadow-lg">
				<img class="" :src="skill.icon" alt="" />
				<span>{{ skill.name }}</span>
			</div></a
		>
	</div>
</template>

<script lang="ts" setup>
const getImageUrl = (name: string) => {
	return new URL(`../assets/skills/${name}`, import.meta.url).href;
};

const skills = [
	{
		name: 'Ionic Framework',
		link: 'https://ionicframework.com/',
		icon: getImageUrl('ionic.png')
	},
	{
		name: 'Angular',
		link: 'https://angular.io/',
		icon: getImageUrl('angular.png')
	},
	{
		name: 'Bootstrap',
		link: 'https://getbootstrap.com/',
		icon: getImageUrl('bootstrap.png')
	},
	{
		name: 'C / C++',
		link: 'https://en.wikipedia.org/wiki/C%2B%2B',
		icon: getImageUrl('c.png')
	},
	{
		name: 'CSS',
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		icon: getImageUrl('css-3.png')
	},
	{
		name: 'Dart',
		link: 'https://dart.dev/',
		icon: getImageUrl('dart.svg')
	},
	{
		name: 'Firebase',
		link: 'https://firebase.google.com/',
		icon: getImageUrl('firebase.png')
	},
	{
		name: 'Flutter',
		link: 'https://flutter.dev/',
		icon: getImageUrl('flutter.svg')
	},
	{
		name: 'Google Play Console',
		link: 'https://developer.android.com/distribute/console?hl=es',
		icon: getImageUrl('GooglePlay.svg')
	},
	{
		name: 'HTML',
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		icon: getImageUrl('html-5.png')
	},
	{
		name: 'Java',
		link: 'https://www.java.com/es/',
		icon: getImageUrl('java.png')
	},
	{
		name: 'Javascript',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: getImageUrl('js.png')
	},
	{
		name: 'Laravel',
		link: 'https://laravel.com/',
		icon: getImageUrl('laravel.png')
	},
	{
		name: 'Neural Networks / AI',
		link: 'https://ai.google/',
		icon: getImageUrl('neural.png')
	},
	{
		name: 'Node JS',
		link: 'https://nodejs.org/en/about/',
		icon: getImageUrl('node-js.png')
	},
	{
		name: 'Office',
		link: 'https://www.office.com/',
		icon: getImageUrl('office.png')
	},
	{
		name: 'PostgreSQL',
		link: 'https://www.postgresql.org/',
		icon: getImageUrl('postgre.png')
	},
	{
		name: 'Python',
		link: 'https://www.python.org/downloads/',
		icon: getImageUrl('python.png')
	},
	{
		name: 'SASS / SCSS',
		link: 'https://sass-lang.com/',
		icon: getImageUrl('sass.png')
	},
	{
		name: 'Tailwind',
		link: 'https://tailwindcss.com/',
		icon: getImageUrl('tailwind.png')
	},
	{
		name: 'Typescript',
		link: 'https://www.typescriptlang.org/',
		icon: getImageUrl('typescript.png')
	},
	{
		name: 'Vue',
		link: 'https://vuejs.org/',
		icon: getImageUrl('vue.png')
	}
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bubble {
	display: flex;
	align-items: center;
	margin-right: 1rem;
	margin-top: 1vh;
	padding: 0.45rem 0.75rem;
	transition: all 0.3s;
	cursor: pointer;
	border: 1px solid var(--light);

	img {
		max-height: 2rem;
		aspect-ratio: 1;
	}

	span {
		margin-left: 0.5rem;
	}
}

.bubble:hover {
	transform: scale(1.05);
}
</style>
