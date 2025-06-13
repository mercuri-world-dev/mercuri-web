import { describe, test, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Partners from './+page.svelte';
// import { within } from '@testing-library/svelte'; 

beforeEach(() => {
	render(Partners);
});

describe.skip('/+page.svelte', () => {

	test('should render footer', () => {
		const footer = screen.getByTestId('footer');
		expect(footer).toBeInTheDocument();
	});
});
