<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Projects from './+page.svelte';

	const { Story } = defineMeta({
		title: 'Pages/Projects',
		component: Projects,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default" />
