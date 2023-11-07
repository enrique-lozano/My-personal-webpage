<template>
	<NavBar @go-to="((id:string) => goto(id))" @change-lang="((lang: 'en' | 'es') => changeLangInMenu(lang))"></NavBar>

	<section ref="home" class="bg-light relative">
		<div class="padding-x home">
			<div class="left-side">
				<img class="profile-img" src="../assets/images/person-removebg.png" alt="" />
			</div>

			<div class="right-side">
				<div class="titles">
					<span>{{ $t('home.line1') }}</span>
					<h1 class="my-2">Enrique Lozano</h1>
					<h4>
						{{ $t('typedMessages.before') }}
						<h6 class="typing" style="text-decoration: underline; display: inline"></h6>
					</h4>
				</div>

				<div class="buttons-container">
					<a role="button" class="button-icon" type="button" target="_blank" :href="APP_LINKS.gitHubURL">
						<font-awesome-icon icon="fa-brands fa-github" />
					</a>

					<a role="button" class="button-icon" type="button" target="_blank" :href="`mailto:${APP_LINKS.mail}`">
						<font-awesome-icon icon="fa-regular fa-envelope" />
					</a>

					<a role="button" class="button-icon" type="button" target="_blank" :href="APP_LINKS.linkedinURL">
						<font-awesome-icon icon="fa-brands fa-linkedin" />
					</a>

					<a
						role="button"
						class="button-icon"
						type="button"
						target="_blank"
						:href="getImageUrl(`docs/CV-${i18n.global.locale.value.toUpperCase()}.pdf`)"
					>
						<font-awesome-icon icon="fa-regular fa-file-pdf" />
					</a>
				</div>

				<div class="know-more-container">
					<div class="scroll-down mt-2"><span></span><span></span><span></span></div>
				</div>
			</div>
		</div>
	</section>

	<section ref="projects" class="py-20 bg-white">
		<div class="padding-x">
			<Projects />
		</div>
	</section>

	<section ref="qualification" class="py-20 bg-light">
		<div class="padding-x">
			<Qualification />
		</div>
	</section>

	<section ref="skills" class="py-20 bg-white">
		<div class="padding-x">
			<Skills />
		</div>
	</section>

	<section ref="contact" class="py-20 bg-light">
		<div class="padding-x">
			<AboutMe />
		</div>
	</section>

	<section ref="contact" class="py-20 bg-white">
		<div class="padding-x">
			<Contact />
		</div>
	</section>
</template>

<script lang="ts" setup>
import Typed from 'typed.js';
import { onMounted, ref, Ref } from 'vue';
import Contact from './../components/Contact.vue';
import NavBar from './../components/NavBar.vue';
import Projects from './../components/Projects.vue';
import Qualification from './../components/Qualification.vue';
import Skills from './../components/Skills.vue';

import AboutMe from '../components/AboutMe.vue';
import APP_LINKS from '../constants/constants';
import i18n from '../i18n/i18n';

onMounted(() => {
	setTimeout(() => {
		new Typed('.typing', {
			strings: [
				i18n.global.t('typedMessages.0'),
				i18n.global.t('typedMessages.1'),
				i18n.global.t('typedMessages.2'),
				i18n.global.t('typedMessages.3'),
				i18n.global.t('typedMessages.4')
			],
			typeSpeed: 100,
			backSpeed: 35,
			loop: true
		});
	}, 200);

	// Get light/dark mode
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

const getImageUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

function changeLangInMenu(lang: 'es' | 'en') {
	i18n.global.locale.value = lang;
}

const projects: Ref<HTMLElement | null> = ref(null);
const qualification: Ref<HTMLElement | null> = ref(null);
const skills: Ref<HTMLElement | null> = ref(null);
const contact: Ref<HTMLElement | null> = ref(null);

const refs = {
	projects: projects,
	qualification: qualification,
	skills: skills,
	contact: contact
};

function goto(refName: string) {
	// Close the menu in case we have it open (in mobile)
	const menuButton = document.getElementById('__menu') as HTMLInputElement;
	menuButton.checked = false;

	Object.keys(refs).forEach((k) => {
		const key = k as 'projects' | 'qualification' | 'skills' | 'contact';

		if (key == refName) {
			if (refs[key] && refs[key].value) {
				const top = refs[key].value!.offsetTop;

				// 5 because is the navHeight in rem
				window.scrollTo(0, top - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
			}
		}
	});
}
</script>

<style scoped lang="scss">
$navHeight: 5rem;
$spanSize: 16px;

.scroll-down {
	span {
		display: block;
		width: $spanSize;
		height: $spanSize;
		border-bottom: 2px solid var(--black);
		border-right: 2px solid var(--black);
		transform: rotate(45deg);
		margin: -10px 16px;
		animation: scroll-down 1.5s infinite;
	}

	span:nth-child(2) {
		animation-delay: -0.2s;
	}

	span:nth-child(3) {
		animation-delay: -0.4s;
	}
}

@keyframes scroll-down {
	0% {
		opacity: 0;
		transform: rotate(45deg) translate(0px, 0px);
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: rotate(45deg) translate(18px, 18px);
	}
}

.home {
	padding-top: calc($navHeight + 2rem);
	display: flex;
	min-height: 100vh;
	min-height: 100svh;
	position: relative;

	@media (max-width: 1024px) {
		flex-wrap: wrap;
	}

	.left-side {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		img.profile-img {
			height: 100%;
			object-fit: cover;
			max-height: calc(100vh - $navHeight - 2rem);
			max-height: calc(100svh - $navHeight - 2rem);

			@media (max-width: 1024px) {
				max-height: 30vh;
				padding-top: 8px;
				border-radius: 100%;
				border: 1px solid var(--light-tint);
			}
		}
	}

	.right-side {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;

		padding-left: 2rem;

		.titles {
			margin: 3vh 0;
		}

		@media (max-width: 1024px) {
			align-items: center;
			padding-left: 0;

			.titles {
				text-align: center;
			}
		}

		.buttons-container {
			@apply flex items-center gap-3;

			margin: 1vh;
		}

		padding-bottom: 140px;

		.know-more-container {
			@apply flex items-center mt-12;

			padding-bottom: 64px;
			position: absolute;
			bottom: 0;
			left: 50%;
			left: calc(50% - ($spanSize * 1.5));
		}
	}
}
</style>
