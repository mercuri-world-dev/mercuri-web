<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import OurStory from './+page.svelte';

	const { Story } = defineMeta({
		title: 'Pages/OurStory',
		component: OurStory,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default" />
