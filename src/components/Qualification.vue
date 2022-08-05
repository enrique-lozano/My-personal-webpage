<template>
	<div class="text-center">
		<h2>{{ $t('qualification.title') }}</h2>
		<span>{{ $t('qualification.subtitle') }}</span>
	</div>

	<div class="text-center my-8">
		<div id="radios">
			<input id="rad1" type="radio" name="radioBtn" checked />
			<label for="rad1" @click="slidePrev()">{{ $t('qualification.jobs.title') }}</label>
			<input id="rad2" type="radio" name="radioBtn" />
			<label for="rad2" @click="slideNext()">{{ $t('qualification.education.title') }}</label>
			<div id="background-of-selected"></div>
		</div>
	</div>

	<swiper :slides-per-view="1" :allowTouchMove="false" @swiper="onSwiper">
		<swiper-slide>
			<!---------- JOBS ----------->

			<div class="qualification-data">
				<template v-for="(n, i) in 2" :key="i">
					<div>
						<h4 class="qualification-header">{{ $t('qualification.jobs.' + i + '.site') }}</h4>
						<a :href="$t('qualification.jobs.' + i + '.web')" target="_blank">{{ $t('qualification.jobs.' + i + '.webPlaceholder') }}</a>
						<div class="qualification-calendar">
							<img src="../assets/icons/calendar_month_black.svg" alt="calendar_icon" />
							{{ $t('qualification.jobs.' + i + '.years') }}
						</div>
					</div>

					<div>
						<span class="rounder"></span>
						<span class="line"></span>
					</div>

					<div>
						<h4 class="qualification-header">{{ $t('qualification.jobs.' + i + '.title') }}</h4>
						<p>{{ $t('qualification.jobs.' + i + '.description') }}</p>
					</div>
				</template>
			</div>
		</swiper-slide>
		<swiper-slide>
			<!---------- EDUCATION ----------->

			<div class="qualification-data">
				<template v-for="(n, i) in 2" :key="i">
					<div>
						<h4 class="qualification-header">{{ $t('qualification.education.' + i + '.site') }}</h4>
						<a :href="$t('qualification.education.' + i + '.web')" target="_blank">{{
							$t('qualification.education.' + i + '.webPlaceholder')
						}}</a>
						<div class="qualification-calendar">
							<img src="../assets/icons/calendar_month_black.svg" alt="calendar_icon" />
							{{ $t('qualification.education.' + i + '.years') }}
						</div>
					</div>

					<div>
						<span class="rounder"></span>
						<span class="line"></span>
					</div>

					<div>
						<h4 class="qualification-header">{{ $t('qualification.education.' + i + '.title') }}</h4>
						<p>{{ $t('qualification.education.' + i + '.description') }}</p>
					</div>
				</template>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';

// swiper core styles
import 'swiper/swiper.min.css';
@Options({
	components: {
		Swiper,
		SwiperSlide,
	},
})
export default class AboutMe extends Vue {
	swiper: any;
	onSwiper(swiper: any) {
		this.swiper = swiper;
	}

	slidePrev() {
		this.swiper.slideTo(0);
	}

	slideNext() {
		this.swiper.slideTo(1);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$toggleWidth: 35vw;
$padding: 6px;
$border-radius: 0.5rem;

#radios {
	position: relative;
	display: inline-flex;
	padding: $padding;
	border-radius: $border-radius;
	z-index: 0;
	background-color: var(--light);

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
		background-color: var(--white);
		position: absolute;
		left: $padding;
		top: $padding;
		z-index: -1;
		transition: transform 0.5s ease-in-out;
	}

	#rad1:checked ~ #background-of-selected {
		transform: translateX(0);
	}

	#rad2:checked ~ #background-of-selected {
		transform: translateX($toggleWidth);
	}
}

.dark .qualification-calendar img {
	filter: brightness(0) invert(1);
}

.qualification-data {
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	column-gap: 1.5rem;
	text-align: justify;

	p {
		margin-bottom: 22px;
	}

	a {
		text-decoration: underline;
	}

	.qualification-calendar {
		display: flex;
		align-items: center;
		margin-top: 6px;

		img {
			margin-right: 5px;
		}
	}

	.rounder {
		display: inline-block;
		width: 13px;
		height: 13px;
		@apply bg-primary;
		border-radius: 50%;
	}

	.line {
		display: block;
		width: 1px;
		height: 100%;
		@apply bg-primary;
		transform: translate(6px, -7px);
	}
}
</style>
