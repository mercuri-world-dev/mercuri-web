import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe.skip('Footer.svelte', () => {
	test('should render a footer element', () => {
		render(Footer);
		const footer = document.querySelector('footer');
		expect(footer).toBeInTheDocument();
	});

	test('should render a logo', () => {
		render(Footer);
		const logo = screen.getByRole('img', { name: /mercuri logo/i });
		expect(logo).toBeInTheDocument();
	});

	test('should render a header with "mercuri.world" text', () => {
		render(Footer);
		const header = screen.getByRole('heading');
		expect(header).toHaveTextContent('mercuri.world');
	});

	test('should render a paragraph with a description', () => {
		render(Footer);
		const paragraph = screen.getByText(/pioneering innovative digital solutions/i);
		expect(paragraph.tagName.toLowerCase()).toBe('p');
	});

	test('should render a paragraph with a sponsor declaration', () => {
		render(Footer);
		const paragraph = screen.getByText(/fiscally sponsored|Hack Foundation|501(c)(3) nonprofit/i);
		expect(paragraph.tagName.toLowerCase()).toBe('p');
	});

	test('should render a paragraph with a copyright declaration', () => {
		render(Footer);
		const paragraph = screen.getByText(/© 2025|copyright|all rights reserved/i);
		expect(paragraph.tagName.toLowerCase()).toBe('p');
	});

	test('should render navigation links', () => {
		render(Footer);

		const homeLink = screen.getByRole('link', { name: /home/i });
		const aboutLink = screen.getByRole('link', { name: /about/i });
		const storyLink = screen.getByRole('link', { name: /our story/i });
		const teamLink = screen.getByRole('link', { name: /our team/i });

		expect(homeLink).toBeInTheDocument();
		expect(aboutLink).toBeInTheDocument();
		expect(storyLink).toBeInTheDocument();
		expect(teamLink).toBeInTheDocument();

		expect(homeLink).toHaveAttribute('href');
		expect(aboutLink).toHaveAttribute('href');
		expect(storyLink).toHaveAttribute('href');
		expect(teamLink).toHaveAttribute('href');
	});

	test('links should have correct href attributes', () => {
		render(Footer);

		const homeLink = screen.getByRole('link', { name: /home/i });
		const aboutLink = screen.getByRole('link', { name: /about/i });
		const storyLink = screen.getByRole('link', { name: /our story/i });
		const teamLink = screen.getByRole('link', { name: /our team/i });

		expect(homeLink).toHaveAttribute('href', '/');
		expect(aboutLink).toHaveAttribute('href', '/about');
		expect(storyLink).toHaveAttribute('href', '/our-story');
		expect(teamLink).toHaveAttribute('href', '/our-team');
	});
});
