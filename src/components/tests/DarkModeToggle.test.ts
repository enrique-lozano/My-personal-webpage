import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DarkModeToggleVue from '../DarkModeToggle.vue';

describe('Dark Mode Toogle', () => {
	it('should mount', () => {
		const wrapper = shallowMount(DarkModeToggleVue);
		expect(wrapper.element).toBeDefined();
	});

	it('toggles dark mode', () => {
		// TODO: Test dark mode toggle
	});
});
