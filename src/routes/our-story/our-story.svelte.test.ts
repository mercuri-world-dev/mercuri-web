import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import OurStory from './+page.svelte';

describe.skip('/+page.svelte', () => {
	test('should render navbar', () => {
		render(OurStory);
		const navbar = screen.getByTestId('navbar');
		expect(navbar).toBeInTheDocument();
	});

	test('should render h1', () => {
		render(OurStory);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render h1 with correct text', () => {
		render(OurStory);
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveTextContent(/The future of mental health access is digital./);
	});

	test('should render an image', () => {
		render(OurStory);
		const image = screen.getAllByRole('img')[0];
		expect(image).toBeInTheDocument();
	});

	test('should render image with alt text', () => {
		render(OurStory);
		const image = screen.getByAltText(/The mercuri.world Vietnam chapter./);
		expect(image).toBeInTheDocument();
		expect(image.tagName).toBe('IMG');
	});

	test('should render h2', () => {
		render(OurStory);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render mission h2 with correct text', () => {
		render(OurStory);
		const heading = screen.getAllByRole('heading', { level: 2 })[0];
		expect(heading).toHaveTextContent(/Our Mission/);
	});

	test('should render p', () => {
		render(OurStory);
		expect(screen.getByRole('paragraph')).toBeInTheDocument();
	});

	test('should render p with correct text', () => {
		render(OurStory);
		const heading = screen.getByRole('paragraph');
		expect(heading).toHaveTextContent(
			/The past decade has witnessed an explosion in digital mental health resources/
		);
	});

	test('should render a button with correct text', () => {
		render(OurStory);
		const button = screen.getByRole('button', { name: /meet our team/i });
		expect(button).toHaveAttribute('href', '/our-team');
		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe('BUTTON');
	});

	test('should render growth report h2 with correct text', () => {
		render(OurStory);
		const heading = screen.getAllByRole('heading', { level: 2 })[1];
		expect(heading).toHaveTextContent(/2024 Growth Report/);
	});

	test('should render partners h2 with correct text', () => {
		render(OurStory);
		const heading = screen.getAllByRole('heading', { level: 2 })[2];
		expect(heading).toHaveTextContent(/Our Partners/);
	});

	test("should render an image carousel with partners' logos", () => {
		render(OurStory);
		const carousel = screen.getAllByTestId('images-carousel')[0];
		expect(carousel).toBeInTheDocument();
	});

	test('should render learn more h2 with correct text', () => {
		render(OurStory);
		const heading = screen.getAllByRole('heading', { level: 2 })[3];
		expect(heading).toHaveTextContent(/Learn more about our work/);
	});

	test('should render footer', () => {
		render(OurStory);
		const footer = screen.getByTestId('footer');
		expect(footer).toBeInTheDocument();
	});
});
