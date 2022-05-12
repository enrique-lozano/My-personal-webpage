<template>
	<div class="text-center mb-8">
		<h2>{{ $t('contact.title') }}</h2>
		<span>{{ $t('contact.subtitle') }}</span>
	</div>

	<div class="flex flex-wrap">
		<div class="w-full md:w-1/2 md:pr-8 lg:pr-12">
			<p class="text-justify mb-5">{{ $t('contact.text') }}</p>
			<div class="contact-link">
				<img src="./../assets/icons/email.svg" alt="" />
				<a target="_blank" href="mailto:kikelozano8@gmail.com">{{ $t('contact.links.email') }}</a>
			</div>
			<div class="contact-link">
				<img src="./../assets/icons/linkedin.svg" alt="" />
				<a target="_blank" href="https://www.linkedin.com/in/enrique-lozano-cebriano/">{{ $t('contact.links.linkedin') }}</a>
			</div>
			<div class="contact-link">
				<img src="./../assets/icons/github.svg" alt="" />
				<a target="_blank" href="https://github.com/enriqueloz88">{{ $t('contact.links.github') }}</a>
			</div>
		</div>
		<form class="w-full mt-6 md:mt-0 md:w-1/2">
			<input v-model="name" type="text" placeholder="Name" class="w-full" />
			<input v-model="subject" id="subject" type="text" placeholder="Subject" class="w-full" />
			<textarea v-model="body" name="" id="body" rows="4" placeholder="Message" class="w-full"></textarea>
			<button @click="sendMail()" class="flat-button" id="send-mail" style="float: right">{{ $t('contact.sendMailButton') }}</button>
		</form>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AboutMe extends Vue {
	subject = '';
	name = '';
	body = '';

	sendMail() {
		var link = 'mailto:kikelozano8@gmail.com' + '?subject=' + this.subject + '&body=' + this.body;
		window.location.href = link;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact-link {
	display: flex;
	align-items: center;
	margin: 12px 0;

	img {
		max-width: 1.8rem;
		margin-right: 8px;
		transition: all 0.1s;
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
}

form {
	& > * {
		margin-bottom: 10px;
	}
}
</style>
