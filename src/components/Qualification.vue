<template>
	<header class="text-center">
		<h2>{{ $t('qualification.title') }}</h2>
		<span>{{ $t('qualification.subtitle') }}</span>
	</header>

	<div class="text-center mb-8">
		<div id="radios">
			<input id="rad1" type="radio" name="radioBtn" checked />
			<label for="rad1" @click="slidePrev()">{{ $t('qualification.jobs.title') }}</label>
			<input id="rad2" type="radio" name="radioBtn" />
			<label for="rad2" @click="slideNext()">{{ $t('qualification.education.title') }}</label>
			<div id="background-of-selected"></div>
		</div>
	</div>

	<swiper id="qualification-swiper" :autoHeight="true" :slides-per-view="1" :allowTouchMove="false" @swiper="onSwiper">
		<swiper-slide>
			<!---------- JOBS ----------->

			<div class="qualification-data">
				<template v-for="(n, i) in 3" :key="i">
					<QualificationItem
						:position="$t('qualification.jobs.' + i + '.title')"
						:url="$t('qualification.jobs.' + i + '.web')"
						:description="$t('qualification.jobs.' + i + '.description')"
						:years="$t('qualification.jobs.' + i + '.years')"
						:company="$t('qualification.jobs.' + i + '.site')"
						:img-src="`../assets/images/qualification-logos/jobs/img${i}.png`"
					>
					</QualificationItem>
				</template>
			</div>
		</swiper-slide>
		<swiper-slide>
			<!---------- EDUCATION ----------->

			<div class="qualification-data">
				<div class="outer">
					<template v-for="(n, i) in 2" :key="i">
						<QualificationItem
							:position="$t('qualification.education.' + i + '.title')"
							:url="$t('qualification.education.' + i + '.web')"
							:description="$t('qualification.education.' + i + '.description')"
							:years="$t('qualification.education.' + i + '.years')"
							:company="$t('qualification.education.' + i + '.site')"
							:img-src="`../assets/images/qualification-logos/education/img${i}.png`"
						>
						</QualificationItem>
					</template>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts" setup>
import { Swiper as ISwiper } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import QualificationItem from './QualificationItem.vue';

const swiperRef = ref<undefined | ISwiper>(undefined);

function onSwiper(el: ISwiper) {
	swiperRef.value = el;
}

function slidePrev() {
	swiperRef.value?.slideTo(0);
}

function slideNext() {
	swiperRef.value?.slideTo(1);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$toggleWidth: min(35vw, 250px);
$padding: 6px;
$border-radius: 0.5rem;

#radios {
	position: relative;
	display: inline-flex;
	padding: $padding;
	border-radius: $border-radius;
	z-index: 0;
	background-color: var(--white);

	input {
		display: none;
	}

	#background-of-selected,
	label {
		width: $toggleWidth;
		height: 50px;
		text-align: center;
		display: inline-flex;
		z-index: 2;
		cursor: pointer;
		border-radius: $border-radius;
		align-items: center;
		justify-content: center;
	}

	#background-of-selected {
		background-color: var(--light);
		position: absolute;
		left: $padding;
		top: $padding;
		z-index: -1;
		transition: transform 0.25s ease-in-out;
	}

	#rad1:checked ~ #background-of-selected {
		transform: translateX(0);
	}

	#rad2:checked ~ #background-of-selected {
		transform: translateX($toggleWidth);
	}
}
</style>
