<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Sponsor from './+page.svelte';

	const { Story } = defineMeta({
		title: 'Pages/Sponsor',
		component: Sponsor,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default" />
