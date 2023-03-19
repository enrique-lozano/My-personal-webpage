<template>
	<div class="mb-8">
		<h2>{{ $t('projects.title') }}</h2>
		<span>{{ $t('projects.subtitle') }}</span>
	</div>

	<swiper :breakpoints="swiperOptions.breakpoints" :spaceBetween="swiperOptions.spaceBetween" @swiper="onSwiper">
		<swiper-slide v-for="i in [0, 1]" :key="i" style="align-self: stretch; height: auto">
			<div class="border rounded-xl p-4 h-full" style="border-color: rgba(0, 0, 0, 0.2)">
				<img
					class="m-auto rounded-xl w-auto"
					style="max-width: min(100%, 275px)"
					:src="getImageUrl('images/' + $t('projects.projects.' + i + '.title') + '.png')"
					alt=""
					width="384"
					height="512"
				/>
				<div class="pt-6 p-4 md:text-left">
					<h3 class="mb-1">{{ $t('projects.projects.' + i + '.title') }}</h3>
					<p class="mb-2 text-justify">{{ $t('projects.projects.' + i + '.description') }}</p>
					<div class="flex">
						<a :href="$t('projects.projects.' + i + '.link')" target="_blank" class="font-medium">
							{{ $t('projects.projects.knowMore') }} ➔
						</a>
					</div>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { SwiperOptions } from 'swiper';

import { Swiper as ISwiper } from 'swiper/types';
import { ref } from 'vue';

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

a {
	position: relative;
}

a:after {
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
a:hover:after {
	width: 100%;
	left: 0;
}
a:hover {
	color: var(--primary);
}
</style>
