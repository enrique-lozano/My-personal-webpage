<template>
	<nav class="bg-light z-10 fixed top-0">
		<div class="padding-x w-full">
			<div class="flex items-center justify-between w-full">
				<div>
					<img class="logo" @click="goto('home')" src="./../assets/images/personalLogo.png" />
				</div>
				<div class="flex items-center">
					<select name="lang" id="lang" v-model="$i18n.locale">
						<option value="es">ES</option>
						<option value="en">EN</option>
					</select>
					<div class="right-links">
						<span @click="goto('projects')">{{ $t('projects.title') }}</span>
						<span @click="goto('qualification')">{{ $t('qualification.title') }}</span>
						<span @click="goto('contact')">{{ $t('contact.title') }}</span>
					</div>
					<DarkModeToggle class="md:ml-8" />
					<input id="__menu" type="checkbox" />
					<div class="mobile-menu flex flex-col flex-wrap p-12">
						<div @click="goto('projects')" class="w-full py-4 border-b border-gray-300">{{ $t('projects.title') }}</div>
						<div @click="goto('qualification')" class="w-full py-4 border-b border-gray-300">
							{{ $t('qualification.title') }}
						</div>
						<div @click="goto('contact')" class="w-full py-4 border-b border-gray-300">{{ $t('contact.title') }}</div>
						<div class="flex text-center absolute bottom-12 right-12 left-12">
							<div class="w-full" v-bind:class="{ 'text-primary': $i18n.locale === 'es' }" @click="changeLangInMenu('es')">Español</div>
							<div class="w-full" v-bind:class="{ 'text-primary': $i18n.locale === 'en' }" @click="changeLangInMenu('en')">English</div>
						</div>
					</div>
					<label title="Menu" for="__menu" class="hamburger">
						<div class="hamburger-icon"></div>
					</label>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import DarkModeToggle from './../components/DarkModeToggle.vue';

import i18n from '../i18n/i18n';

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

.dark nav img.logo {
	background-color: var(--black);
	filter: brightness(0.95);
}

nav {
	height: $navHeight;
	font-size: 1.1rem;
	width: 100%;
	z-index: 3;
	display: flex;
	align-items: center;

	img.logo {
		height: calc(0.6 * $navHeight);
		padding: 6px;
		border-radius: 0.325rem;
	}

	select {
		background-color: var(--light);
		margin-right: 16px;
		margin-bottom: 4px;
		color: var(--primary);
		cursor: pointer;
		@media (max-width: 800px) {
			display: none;
		}
	}
}

#__menu:checked ~ .mobile-menu {
	visibility: visible;
	transform: translateX(-100%);
	transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0s;
}

#__menu:checked ~ .hamburger .hamburger-icon {
	transform: rotate(45deg);
	transition: transform 150ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

#__menu:checked ~ .hamburger .hamburger-icon::before {
	bottom: 0;
	opacity: 0;
	transition: bottom 150ms cubic-bezier(0.895, 0.03, 0.685, 0.22), opacity 0s 150ms;
}

#__menu:checked ~ .hamburger .hamburger-icon::after {
	top: 0;
	transform: rotate(-90deg);
	transition: top 150ms cubic-bezier(0.895, 0.03, 0.685, 0.22), transform 150ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.mobile-menu {
	background-color: var(--light);
	height: calc(100vh - $navHeight);
	left: 100%;
	position: fixed;
	top: $navHeight;
	transform: translateX(0);
	transform-origin: top left;
	transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0s 0.3s;
	visibility: hidden;
	width: 100vw;
	z-index: 2;
}

.right-links {
	display: flex;
	align-items: center;
	@media (max-width: 800px) {
		display: none;
	}

	span {
		margin: 0 10px;
		position: relative;
		cursor: pointer;
		width: max-content;
	}

	span:after {
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		left: 50%;
		position: relative;
		background: var(--black);
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	span:hover:after {
		width: 100%;
		left: 0;
	}
}

#__menu {
	display: none;
}

.hamburger {
	cursor: pointer;
	display: inline-block;
	height: 40px;
	padding: 0 0.5rem;
	position: relative;
	margin-left: 2vw;

	@media (min-width: 800px) {
		display: none;
	}
}

.hamburger::before {
	content: ' ';
	display: block;
	height: 100%;
	width: 1.5rem;
}

.hamburger-icon {
	background-color: var(--black);
	border-radius: 1px;
	height: 2px;
	position: absolute;
	right: 0.5rem;
	top: calc(50% - 2px / 2);
	transition: transform 150ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
	width: calc(100% - 1rem);
}

.hamburger-icon::after,
.hamburger-icon::before {
	background-color: var(--black);
	border-radius: 1px;
	content: '';
	height: 100%;
	left: 0;
	position: absolute;
	width: 100%;
}

.hamburger-icon::before {
	bottom: 0.425rem;
	transition: bottom 150ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0s 150ms;
}

.hamburger-icon::after {
	top: 0.425rem;
	transition: top 150ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 150ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
</style>
