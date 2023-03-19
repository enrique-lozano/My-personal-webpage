<template>
	<div class="flex w-full items-center flex-col-reverse md:flex-row">
		<div class="w-full text-center md:w-2/5 mt-3 md:mt-0">
			<img style="max-height: 30vh" class="pr-4 py-6" src="../assets/illustrations/coder.svg" alt="" />
		</div>
		<div class="w-full md:w-3/5">
			<h2 class="mb-3">{{ $t('aboutMe.title') }}</h2>
			<p class="text-justify" v-html="$t('aboutMe.innerTextHtml')"></p>
		</div>
	</div>
</template>
