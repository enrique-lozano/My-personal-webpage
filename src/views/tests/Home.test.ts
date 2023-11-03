import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import i18n from '../../i18n/i18n';
import Home from '../Home.vue';

const wrapper = shallowMount(Home, {
	global: {
		mocks: {
			// Mock $t variable
			$t: (msg: string) => i18n.global.t(msg, 0, { locale: 'en' })
		}
	}
});

describe('Home page', () => {
	it('should mount', () => {
		expect(wrapper.element).toBeDefined();
	});

	it('should have my name', () => {
		expect(wrapper.text()).toContain('Enrique Lozano');
	});
});
