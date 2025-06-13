<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Partners from './+page.svelte';

	const { Story } = defineMeta({
		title: 'Pages/Partners',
		component: Partners,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default" />