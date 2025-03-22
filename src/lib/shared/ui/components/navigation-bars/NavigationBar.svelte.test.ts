import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Navigation from './NavigationBar.svelte';

describe.skip('Navigation.svelte', () => {
	test('should render a navigation element', () => {
		render(Navigation);
		const nav = document.querySelector('nav');
		expect(nav).toBeInTheDocument();
	});

	test('should render a logo', () => {
		render(Navigation);
		const logo = screen.getByRole('img', { name: /mercuri logo/i });
		expect(logo).toBeInTheDocument();
	});

	test('should render a logo with a link to home page', () => {
		render(Navigation);
		const logoLink = screen.getByRole('link', { name: /mercuri logo/i });
		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute('href', '/');
	});

	test('should render all navigation buttons', () => {
		render(Navigation);

		const aboutButton = screen.getByRole('link', { name: /about/i });
		const innovationButton = screen.getByRole('link', { name: /innovation/i });
		const advocacyButton = screen.getByRole('link', { name: /advocacy/i });
		const joinUsButton = screen.getByRole('link', { name: /join us/i });
		const donateButton = screen.getByRole('link', { name: /donate/i });

		expect(aboutButton).toBeInTheDocument();
		expect(innovationButton).toBeInTheDocument();
		expect(advocacyButton).toBeInTheDocument();
		expect(joinUsButton).toBeInTheDocument();
		expect(donateButton).toBeInTheDocument();
	});

	test('should have correct href attributes for donation button', () => {
		render(Navigation);

		const donateButton = screen.getByRole('link', { name: /donate/i });

		expect(donateButton).toHaveAttribute(
			'href',
			'https://hcb.hackclub.com/donations/start/mercuri-world'
		);
	});
});
