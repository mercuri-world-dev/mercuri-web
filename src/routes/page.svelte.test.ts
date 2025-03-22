import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe.skip('/+page.svelte', () => {
	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render h1 with correct text', () => {
		render(Page);
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveTextContent(
			'Pioneering innovative digital solutions for global mental well-being.'
		);
	});

	test('should render an image', () => {
		render(Page);
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});

	test('should render image with alt text', () => {
		render(Page);
		const image = screen.getByAltText("A stylized sketch of a girl's face.");
		expect(image).toBeInTheDocument();
		expect(image.tagName).toBe('IMG');
	});

	test('should render h2', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});

	test('should render h2 with correct text', () => {
		render(Page);
		const heading = screen.getByRole('heading', { level: 2 });
		expect(heading).toHaveTextContent(
			'mercuri.world makes mental health resources accessible to everyone.'
		);
	});

	test('should render p', () => {
		render(Page);
		expect(screen.getByRole('paragraph')).toBeInTheDocument();
	});

	test('should render p with correct text', () => {
		render(Page);
		const heading = screen.getByRole('paragraph');
		expect(heading).toHaveTextContent(
			'We are a collective of activists, researchers, engineers, and creatives based in over a dozen nations. we develop, translate, and curate evidence-based digital mental health resources and disseminate them digitally and through our global outreach network.'
		);
	});
});
