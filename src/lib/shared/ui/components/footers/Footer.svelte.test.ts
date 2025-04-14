import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe('Footer.svelte', () => {
	test('should render a footer element', () => {
		render(Footer);
		const footer = document.querySelector('footer');
		expect(footer).toBeInTheDocument();
	});

	test('should render a logo', () => {
		render(Footer);
		const logo = screen.getByRole('img', { name: /mercuri logo \(star only\)/i });
		expect(logo).toBeInTheDocument();
	});

	test('should render a header with "mercuri.world" text', () => {
		render(Footer);
		const header = screen.getByRole('heading', { name: /mercuri.world/i });
		expect(header).toBeInTheDocument();
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

	test('should render left navigation links', () => {
		render(Footer);

		const homeLink = screen.getByRole('link', { name: /home/i });
		// const aboutLink = screen.getByRole('link', { name: /about/i });
		const storyLink = screen.getByRole('link', { name: /our story/i });
		const teamLink = screen.getByRole('link', { name: /our team/i });
		const projectsLink = screen.getByRole('link', { name: /projects/i });
		const careerLink = screen.getByRole('link', { name: /careerquest/i });
		const libraryLink = screen.getByRole('link', { name: /library/i });
		const appLink = screen.getByRole('link', { name: /app/i });

		expect(homeLink).toBeInTheDocument();
		// expect(aboutLink).toBeInTheDocument();
		expect(storyLink).toBeInTheDocument();
		expect(teamLink).toBeInTheDocument();
		expect(projectsLink).toBeInTheDocument();
		expect(careerLink).toBeInTheDocument();
		expect(libraryLink).toBeInTheDocument();
		expect(appLink).toBeInTheDocument();

		expect(homeLink).toHaveAttribute('href');
		// expect(aboutLink).toHaveAttribute('href');
		expect(storyLink).toHaveAttribute('href');
		expect(teamLink).toHaveAttribute('href');
		expect(projectsLink).toHaveAttribute('href');
		expect(careerLink).toHaveAttribute('href');
		expect(libraryLink).toHaveAttribute('href');
		expect(appLink).toHaveAttribute('href');

	});

	test('should render right navigation links', () => {
		render(Footer);

		const talksLink = screen.getByRole('link', { name: /little talks/i });
		const chaptersLink = screen.getByRole('link', { name: /chapters/i });
		const joinusLink = screen.getByRole('link', { name: /join us/i });
		const volunteerLink = screen.getByRole('link', { name: /volunteer/i });
		const partnerLink = screen.getByRole('link', { name: /partner/i });
		const sponsorLink = screen.getByRole('link', { name: /sponsor/i });

		expect(talksLink).toBeInTheDocument();
		expect(chaptersLink).toBeInTheDocument();
		expect(joinusLink).toBeInTheDocument();
		expect(volunteerLink).toBeInTheDocument();
		expect(partnerLink).toBeInTheDocument();
		expect(sponsorLink).toBeInTheDocument();

		expect(talksLink).toHaveAttribute('href');
		expect(chaptersLink).toHaveAttribute('href');
		expect(joinusLink).toHaveAttribute('href');
		expect(volunteerLink).toHaveAttribute('href');
		expect(partnerLink).toHaveAttribute('href');
		expect(sponsorLink).toHaveAttribute('href');

	});

	test('left links should have correct href attributes', () => {
		render(Footer);

		const homeLink = screen.getByRole('link', { name: /home/i });
		// const aboutLink = screen.getByRole('link', { name: /about/i });
		const storyLink = screen.getByRole('link', { name: /our story/i });
		const teamLink = screen.getByRole('link', { name: /our team/i });
		const projectsLink = screen.getByRole('link', { name: /projects/i });
		const careerLink = screen.getByRole('link', { name: /careerquest/i });
		const libraryLink = screen.getByRole('link', { name: /library/i });
		const appLink = screen.getByRole('link', { name: /app/i });

		expect(homeLink).toHaveAttribute('href', '/');
		// expect(aboutLink).toHaveAttribute('href', '/about');
		expect(storyLink).toHaveAttribute('href', '/our-story');
		expect(teamLink).toHaveAttribute('href', '/our-team');
		expect(projectsLink).toHaveAttribute('href', '/projects');
		expect(careerLink).toHaveAttribute('href', '/careerquest');
		expect(libraryLink).toHaveAttribute('href', '/library');
		expect(appLink).toHaveAttribute('href', '/app');
	});

	test('right links should have correct href attributes', () => {
		render(Footer);

		const talksLink = screen.getByRole('link', { name: /little talks/i });
		const chaptersLink = screen.getByRole('link', { name: /chapters/i });
		const joinusLink = screen.getByRole('link', { name: /join us/i });
		const volunteerLink = screen.getByRole('link', { name: /volunteer/i });
		const partnerLink = screen.getByRole('link', { name: /partner/i });
		const sponsorLink = screen.getByRole('link', { name: /sponsor/i });

		expect(talksLink).toHaveAttribute('href', '/little-talks');
		expect(chaptersLink).toHaveAttribute('href', '/chapters');
		expect(joinusLink).toHaveAttribute('href', '/join');
		expect(volunteerLink).toHaveAttribute('href', '/volunteer');
		expect(partnerLink).toHaveAttribute('href', '/partner');
		expect(sponsorLink).toHaveAttribute('href', '/sponsor');
	});
});