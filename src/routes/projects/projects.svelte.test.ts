import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Projects from './+page.svelte';

describe.skip('/+page.svelte', () => {
	test('should render navbar', () => {
		render(Projects);
		const navbar = screen.getByTestId('navbar');
		expect(navbar).toBeInTheDocument();
	});

	test('should render scroll-text', () => {
		render(Projects);
		const scrollText = screen.getByTestId('scroll-text');
		expect(scrollText).toBeInTheDocument();
	});

	test('should render CareerQuest card h2, h3, and p', () => {
		render(Projects);
		const h2 = screen.getAllByRole('heading', { level: 2 })[0];
		const h3 = screen.getAllByRole('heading', { level: 2 })[0];
		const paragraph = screen.getAllByRole('paragraph')[0];
		expect(h2).toHaveTextContent(/CareerQuest/);
		expect(h3).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(/Identifying suitable and accommodating employment/);
	});

	test('should render AI-Assisted Translation card h2, h3, and p', () => {
		render(Projects);
		const h2 = screen.getAllByRole('heading', { level: 2 })[1];
		const h3 = screen.getAllByRole('heading', { level: 2 })[1];
		const paragraph = screen.getAllByRole('paragraph')[1];
		expect(h2).toHaveTextContent(/AI-Assisted Translation/);
		expect(h3).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/In the age of increasingly-accurate AI translation software/
		);
	});

	test('should render Multilingual Resource Library card h2, h3, and p', () => {
		render(Projects);
		const h2 = screen.getAllByRole('heading', { level: 2 })[2];
		const h3 = screen.getAllByRole('heading', { level: 2 })[2];
		const paragraph = screen.getAllByRole('paragraph')[2];
		expect(h2).toHaveTextContent(/Multilingual Resource Library/);
		expect(h3).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/The vast majority of digital mental health resources are only offered in English/
		);
	});

	test('should render Mobile Mental Well-being Resource Hub card h2, h3, and p', () => {
		render(Projects);
		const h2 = screen.getAllByRole('heading', { level: 2 })[3];
		const h3 = screen.getAllByRole('heading', { level: 2 })[3];
		const paragraph = screen.getAllByRole('paragraph')[3];
		expect(h2).toHaveTextContent(/Mobile Mental Well-being Resource Hub/);
		expect(h3).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/The mercuri.world app provides interactive, pocket-sized versions of the multilingual resources/
		);
	});

	test('should render Build with us h2 with correct text', () => {
		render(Projects);
		const heading = screen.getAllByRole('heading', { level: 2 })[4];
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(
			/We are always open to new team members and project proposals/
		);
	});

	test('should render a button with correct href', () => {
		render(Projects);
		const button = screen.getByRole('button', { name: /join us/i });
		expect(button).toHaveAttribute('href', '/volunteer');
		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe('BUTTON');
	});

	test('should render footer', () => {
		render(Projects);
		const footer = screen.getByTestId('footer');
		expect(footer).toBeInTheDocument();
	});
});
