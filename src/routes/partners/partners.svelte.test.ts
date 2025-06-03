import { describe, test, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Partners from './+page.svelte';

beforeEach(() => {
	render(Partners);
});

describe.skip('/+page.svelte', () => {
	test('should render navbar', () => {
		const navbar = screen.getByTestId('navbar');
		expect(navbar).toBeInTheDocument();
	});

	test('should render h1', () => {
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toBeInTheDocument();
	});

	test('should render Collaborate paragraph', () => {
		const paragraph = screen.getAllByRole('paragraph');
		expect(paragraph[0]).toHaveTextContent(
			/At mercuri.world, we work with/
		);
		expect(paragraph).toBeInTheDocument();
	});

	test('should render photos ImageCarousel component', () => {
		const imageCarousel = screen.getAllByTestId('images-carousel')[0];
		expect(imageCarousel).toBeInTheDocument();
	});

	test('should render Why Partner h2', () => {
		const heading = screen.getAllByRole('heading', { level: 2 })[0];
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/Why partner/);
	});

	test('should render email link', () => {
		const emailLink = screen.getAllByRole('link')[0];
		expect(emailLink).toBeInTheDocument();
		expect(emailLink).toHaveAttribute('href', 'mailto:hq@mercuri.world');
		expect(emailLink).toHaveTextContent('hq@mercuri.world');
	});

	test('should render Our Partners h2', () => {
		const heading = screen.getAllByRole('heading', { level: 2 })[1];
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/Our Partners/);
	});

	test('should render logos ImageCarousel component', () => {
		const imageCarousel = screen.getAllByTestId('images-carousel')[1];
		expect(imageCarousel).toBeInTheDocument();
	});


	test('should render footer', () => {
		const footer = screen.getByTestId('footer');
		expect(footer).toBeInTheDocument();
	});
});
