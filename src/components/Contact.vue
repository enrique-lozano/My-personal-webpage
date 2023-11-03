<template>
	<header class="text-center mb-8">
		<h2>{{ $t('contact.title') }}</h2>
		<span>{{ $t('contact.subtitle') }}</span>
	</header>

	<div class="flex flex-wrap">
		<div class="w-full md:w-1/2 md:pr-8 lg:pr-12 flex flex-col">
			<p class="text-justify mb-5">{{ $t('contact.text') }}</p>
			<div class="underline-on-hover contact-link">
				<a target="_blank" :href="`mailto:${APP_LINKS.mail}`">
					<font-awesome-icon icon="fa-regular fa-envelope" />

					{{ $t('contact.links.email') }}
				</a>
			</div>
			<div class="underline-on-hover contact-link">
				<a target="_blank" :href="APP_LINKS.linkedinURL">
					<font-awesome-icon icon="fa-brands fa-linkedin" />

					{{ $t('contact.links.linkedin') }}
				</a>
			</div>
			<div class="underline-on-hover contact-link">
				<a target="_blank" :href="APP_LINKS.gitHubURL">
					<font-awesome-icon icon="fa-brands fa-github" />

					{{ $t('contact.links.github') }}
				</a>
			</div>
		</div>
		<form class="w-full mt-6 md:mt-0 md:w-1/2">
			<input v-model="name" type="text" placeholder="Name" class="w-full bg-light" />
			<input v-model="subject" id="subject" type="text" placeholder="Subject" class="w-full bg-light" />
			<textarea v-model="body" name="" id="body" rows="4" placeholder="Message" class="w-full bg-light"></textarea>
			<button @click="sendMail()" class="flat-button" id="send-mail" style="float: right">
				{{ $t('contact.sendMailButton') }}
			</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import APP_LINKS from './../constants/constants';

const subject = ref('');
const name = ref('');
const body = ref('');

function sendMail() {
	var link = `mailto:${APP_LINKS.mail}` + '?subject=' + subject.value + '&body=' + body.value;
	window.location.href = link;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-link {
	margin: 8px 0;

	svg {
		font-size: 24px;
	}
}

form {
	& > * {
		margin-bottom: 10px;
	}
}
</style>
