<template>
	<header>
		<h2>{{ $t('projects.title') }}</h2>
		<span>{{ $t('projects.subtitle') }}</span>
	</header>

	<swiper :breakpoints="swiperOptions.breakpoints" :spaceBetween="swiperOptions.spaceBetween" @swiper="onSwiper">
		<swiper-slide v-for="i in [0, 1]" :key="i" style="align-self: stretch; height: auto">
			<div class="rounded-xl p-4 h-full" style="border: 1px solid var(--light)">
				<img class="rounded-xl project-logo" :src="getImageUrl('images/' + $t('projects.projects.' + i + '.title') + '.png')" alt="" />
				<div class="pt-6 p-4 md:text-left">
					<h3 class="mb-1">{{ $t('projects.projects.' + i + '.title') }}</h3>
					<p class="mb-2 text-justify">{{ $t('projects.projects.' + i + '.description') }}</p>
					<div class="flex">
						<div class="underline-on-hover">
							<a :href="$t('projects.projects.' + i + '.link')" target="_blank" class="font-medium">
								{{ $t('projects.projects.knowMore') }}

								<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</swiper-slide>
		<swiper-slide style="align-self: center; height: auto">
			<div class="show-more-button-container">
				<a role="button" target="_blank" :href="APP_LINKS.gitHubURL" class="button-icon show-more-button">
					<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
				</a>

				<span> Ver todos </span>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { SwiperOptions } from 'swiper';

import { Swiper as ISwiper } from 'swiper/types';
import { ref } from 'vue';
import APP_LINKS from '../constants/constants';

const getImageUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

const swiperRef = ref<undefined | ISwiper>(undefined);

function onSwiper(el: ISwiper) {
	swiperRef.value = el;
}

const swiperOptions: SwiperOptions = {
	spaceBetween: 20,
	breakpoints: {
		1250: {
			slidesPerView: 2.3
		},
		1050: {
			slidesPerView: 2.1
		},
		850: {
			slidesPerView: 1.7
		},
		750: {
			slidesPerView: 1.5
		},
		650: {
			slidesPerView: 1.3
		},
		550: {
			slidesPerView: 1.2
		},
		0: {
			slidesPerView: 1.1
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
	padding: 16px 0px;
}

.show-more-button-container {
	display: flex;
	width: fit-content;
	gap: 6px;
	align-items: center;
	flex-direction: column;
	margin-left: 1rem;

	.show-more-button {
		border: none;
		//background-color: var(--light);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border-radius: 100%;
		display: inline-flex;
		padding: 12px;

		.svg-inline--fa {
			font-size: 24px;
			width: 24px;
			height: 24px;
		}
	}
}

.project-logo {
	margin: auto;
	width: min(100%, 250px);
	aspect-ratio: 1 / 1;
	object-fit: cover;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
