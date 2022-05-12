<template>
	<nav class="z-10 flex items-center justify-between fixed w-full bg-light top-0 h-20 padding-x">
		<div>
			<img class="logo py-5" @click="goto('home')" src="./../assets/images/personalLogo.png" />
		</div>
		<div class="flex items-center">
			<select name="lang" id="lang" @change="changeLang($event)" v-model="$i18n.locale">
				<option value="es">ES</option>
				<option value="en">EN</option>
			</select>
			<div class="right-links">
				<span @click="goto('Projects')">{{ $t('projects.title') }}</span>
				<span @click="goto('Qualification')">{{ $t('qualification.title') }}</span>
				<span @click="goto('Contact')">{{ $t('contact.title') }}</span>
			</div>
			<DarkModeToggle class="md:ml-8" />
			<input id="__menu" type="checkbox" />
			<div class="mobile-menu flex flex-col flex-wrap p-12">
				<div @click="goto('Projects')" class="w-full py-4 border-b border-gray-300">{{ $t('projects.title') }}</div>
				<div @click="goto('Qualification')" class="w-full py-4 border-b border-gray-300">
					{{ $t('qualification.title') }}
				</div>
				<div @click="goto('Contact')" class="w-full py-4 border-b border-gray-300">{{ $t('contact.title') }}</div>
				<div class="flex text-center absolute bottom-12 right-12 left-12">
					<div class="w-full" v-bind:class="{ 'text-primary': $i18n.locale === 'es' }" @click="changeLangInMenu('es')">Español</div>
					<div class="w-full" v-bind:class="{ 'text-primary': $i18n.locale === 'en' }" @click="changeLangInMenu('en')">English</div>
				</div>
			</div>
			<label title="Menu" for="__menu" class="hamburger"><div class="hamburger-icon"></div></label>
		</div>
	</nav>

	<div ref="home" class="home bg-light relative padding-x">
		<div class="flex lg:items-center lg:w-1/2 h-full justify-center lg:justify-start text-center lg:text-left">
			<div class="mt-4 lg:mt-0">
				<span>{{ $t('home.line1') }}</span>
				<h1>Enrique Lozano</h1>
				<h4>
					{{ $t('typedMessages.before') }}
					<span class="typing" style="text-decoration: underline"></span>
				</h4>

				<div class="mt-4 flex flex-wrap flex-col lg:flex-row items-center lg:items-start">
					<button @click="goto('AboutMe')" class="flat-button my-1 lg:my-0 lg:mr-2" style="width: fit-content">
						{{ $t('home.button1') }}</button
					><a :href="require('@/assets/docs/CV1_EN.pdf')" target="_blank" download="CV_Enrique_Lozano">
						<button class="stroked-button my-1 lg:my-0" style="width: fit-content">
							{{ $t('home.button2') }}
						</button>
					</a>
				</div>
			</div>
		</div>
		<img class="absolute right-0 bottom-0" src="../assets/images/person-removebg.png" alt="" />
	</div>

	<div ref="AboutMe" class="py-6 padding-x bg-white">
		<AboutMe />
	</div>

	<div ref="Projects" class="py-6 padding-x bg-light">
		<Projects />
	</div>

	<div ref="Qualification" class="py-6 padding-x bg-white">
		<Qualification />
	</div>

	<div ref="Skills" class="py-6 padding-x bg-light">
		<Skills />
	</div>

	<div ref="Contact" class="py-6 padding-x bg-white">
		<Contact />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AboutMe from '@/components/AboutMe.vue'; // @ is an alias to /src
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';
import Qualification from '@/components/Qualification.vue';
import Skills from '@/components/Skills.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';
import Typed from 'typed.js';
import { useI18n } from 'vue-i18n';

@Options({
	components: {
		AboutMe,
		Contact,
		Projects,
		Qualification,
		Skills,
		DarkModeToggle,
	},
	methods: {
		goto(refName: string) {
			// Close the menu in case we have it open (in mobile)
			const menuButton = document.getElementById('__menu') as any;
			menuButton.checked = false;

			// ---- Go to ref ----
			var element = this.$refs[refName];
			var top = element.offsetTop;

			// 5 because is the navHeight in rem
			window.scrollTo(0, top - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize));
		},
	},
	mounted: () => {
		/* --------------------------------------------------
		------------------- ON PAGE LOAD --------------------
		--------------------------------------------------- */
		const { tm } = useI18n();

		new Typed('.typing', {
			strings: [tm('typedMessages.0'), tm('typedMessages.1'), tm('typedMessages.2'), tm('typedMessages.3'), tm('typedMessages.4')],
			typeSpeed: 100,
			backSpeed: 35,
			loop: true,
		});

		// Get light/dark mode
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	},
})
export default class Home extends Vue {
	changeLang(event: any) {
		this.$i18n.locale = event.target.value;
	}

	changeLangInMenu(lang: string) {
		this.$i18n.locale = lang;
	}
}
</script>

<style scoped lang="scss">
$navHeight: 5rem;

nav {
	height: $navHeight;
	font-size: 1.1rem;
	z-index: 3;

	img.logo {
		height: $navHeight;
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

.home {
	margin-top: $navHeight;
	height: calc(100vh - $navHeight);

	img {
		max-height: 80%;
		@media (min-width: 768px) {
			max-height: 80%;
		}
		@media (min-width: 1024px) {
			max-height: 100%;
		}
		@media (max-width: 1024px) {
			left: 0;
			margin: auto;
		}
	}
}
</style>
