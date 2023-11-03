import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.pdf', '**/*.svg'],
	optimizeDeps: { exclude: ['swiper/vue', 'swiper/types'] },
	test: {
		environment: 'happy-dom'
	}
});
