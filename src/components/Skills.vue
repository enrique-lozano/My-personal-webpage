<template>
	<div class="text-center mb-8">
		<h2>{{ $t('skills.title') }}</h2>
		<span>{{ $t('skills.subtitle') }}</span>
	</div>

	<div class="flex flex-wrap justify-center">
		<a :href="skill.link" target="_blank" v-for="skill in skills" :key="skill">
			<div class="bubble rounded-lg border shadow-lg">
				<img class="" :src="skill.icon" alt="" />
				<span>{{ skill.name }}</span>
			</div></a
		>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AboutMe extends Vue {
	skills = [
		{
			name: 'Ionic Framework',
			link: 'https://ionicframework.com/',
			icon: require('@/assets/skills/ionic.png'),
		},
		{
			name: 'Angular',
			link: 'https://angular.io/',
			icon: require('@/assets/skills/angular.png'),
		},
		{
			name: 'Bootstrap',
			link: 'https://getbootstrap.com/',
			icon: require('@/assets/skills/bootstrap.png'),
		},
		{
			name: 'C / C++',
			link: 'https://en.wikipedia.org/wiki/C%2B%2B',
			icon: require('@/assets/skills/c.png'),
		},
		{
			name: 'CSS',
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
			icon: require('@/assets/skills/css-3.png'),
		},
		{
			name: 'Firebase',
			link: 'https://firebase.google.com/',
			icon: require('@/assets/skills/firebase.png'),
		},
		{
			name: 'Google Play Console',
			link: 'https://developer.android.com/distribute/console?hl=es',
			icon: require('@/assets/skills/GooglePlay.svg'),
		},
		{
			name: 'HTML',
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
			icon: require('@/assets/skills/html-5.png'),
		},
		{
			name: 'Java',
			link: 'https://www.java.com/es/',
			icon: require('@/assets/skills/java.png'),
		},
		{
			name: 'Javascript',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			icon: require('@/assets/skills/js.png'),
		},
		{
			name: 'Laravel',
			link: 'https://laravel.com/',
			icon: require('@/assets/skills/laravel.png'),
		},
		{
			name: 'Neural Networks / AI',
			link: 'https://ai.google/',
			icon: require('@/assets/skills/neural.png'),
		},
		{
			name: 'Node JS',
			link: 'https://nodejs.org/en/about/',
			icon: require('@/assets/skills/node-js.png'),
		},
		{
			name: 'Office',
			link: 'https://www.office.com/',
			icon: require('@/assets/skills/office.png'),
		},
		{
			name: 'PostgreSQL',
			link: 'https://www.postgresql.org/',
			icon: require('@/assets/skills/postgre.png'),
		},
		{
			name: 'Python',
			link: 'https://www.python.org/downloads/',
			icon: require('@/assets/skills/python.png'),
		},
		{
			name: 'SASS / SCSS',
			link: 'https://sass-lang.com/',
			icon: require('@/assets/skills/sass.png'),
		},
		{
			name: 'Tailwind',
			link: 'https://tailwindcss.com/',
			icon: require('@/assets/skills/tailwind.png'),
		},
		{
			name: 'Typescript',
			link: 'https://www.typescriptlang.org/',
			icon: require('@/assets/skills/typescript.png'),
		},
		{
			name: 'Vue',
			link: 'https://vuejs.org/',
			icon: require('@/assets/skills/vue.png'),
		},
	];
}
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

	img {
		max-height: 2rem;
	}

	span {
		margin-left: 0.5rem;
	}
}

.bubble:hover {
	transform: scale(1.05);
}
</style>
