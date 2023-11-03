<template>
	<div class="card">
		<header>
			<div class="qualification-calendar">
				<font-awesome-icon icon="fa-regular fa-calendar" />
				<span>
					{{ years }}
				</span>
			</div>
		</header>

		<div class="info">
			<div class="flex items-center gap-3 mb-2">
				<div>
					<img class="card-img" :src="imgSrc" alt="" />
				</div>

				<div>
					<div class="underline-on-hover">
						<a :href="url" target="_blank">
							<h3 class="title">
								{{ company }}
							</h3>
							<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
						</a>
					</div>
				</div>
			</div>

			<h4 class="qualification-header">
				{{ position }}
			</h4>

			<p>{{ description }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	url: string;
	company: string;
	position: string;
	years: string;
	description: string;
	imgSrc: string;
}>();
</script>

<style scoped lang="scss">
.card {
	position: relative;
	margin: 0 0 20px 12px;
	padding: 10px;
	border-radius: 8px;
	display: grid;

	header {
		margin-bottom: 12px;
	}

	@media (min-width: 724px) {
		grid-template-columns: 180px 1fr;

		header {
			margin-bottom: 0px;
		}
	}

	.card-img {
		height: 2.25rem;
		aspect-ratio: 1;
		background-color: white;
		border-radius: 4px;
		object-fit: contain;
	}
}

/* Information about the timeline */
.info {
	display: flex;
	flex-direction: column;
	gap: 0px;
}

p {
	margin: 8px 0px;
}

.qualification-calendar {
	display: inline-flex;
	width: fit-content;
	align-items: center;
	gap: 8px;
	padding: 6px 10px;
	border-radius: 4px;
	background-color: var(--light-tint);

	span {
		font-size: 12px;
	}

	svg {
		margin-bottom: 2px;
	}
}
</style>
