import { describe, test, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Projects from './+page.svelte';
import { within } from '@testing-library/svelte'; //*

const getCardByIndex = (index: number) => within(screen.getAllByTestId('project-card')[index]); 
//IMPORTANT : restricts the region where it will check headings and paras

beforeEach(() => {
	render(Projects);
});

describe('/+page.svelte', () => {
	test('should render navbar', () => {
		const navbar = screen.getByTestId('navbar');
		expect(navbar).toBeInTheDocument();
	});

	test('should render text-scroll', () => {
		const scrollText = screen.getByTestId('text-scroll'); //*
		expect(scrollText).toBeInTheDocument();
	});

	test('should render CareerQuest card h2, h3, and p', () => {
		const utils = getCardByIndex(0);
		const first_heading = utils.getAllByRole('heading', { level: 2 })[0];
		const second_heading = utils.getAllByRole('heading', { level: 2 })[1];
		const paragraph = utils.getAllByRole('paragraph')[0];
		expect(first_heading ).toHaveTextContent(/CareerQuest/);
		expect(second_heading ).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/Identifying suitable and accommodating employment/
		);
	});

	test('should render AI-Assisted Translation card h2, h3, and p', () => {
		const utils = getCardByIndex(1);
		const first_heading  = utils.getAllByRole('heading', { level: 2 })[0];
		const second_heading  = utils.getAllByRole('heading', { level: 2 })[1];
		const paragraph = utils.getAllByRole('paragraph')[0];
		expect(first_heading ).toHaveTextContent(/AI-Assisted Translation/);
		expect(second_heading ).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/In the age of increasingly-accurate AI translation software/
		);
	});

	test('should render Multilingual Resource Library card h2, h3, and p', () => {
		const utils = getCardByIndex(2);
		const first_heading  = utils.getAllByRole('heading', { level: 2 })[0];
		const second_heading  = utils.getAllByRole('heading', { level: 2 })[1];
		const paragraph = utils.getAllByRole('paragraph')[0];
		expect(first_heading ).toHaveTextContent(/Multilingual Resource Library/);
		expect(second_heading).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/The vast majority of digital mental health resources are only offered in English/
		);
	});

	test('should render Mobile Mental Well-being Resource Hub card h2, h3, and p', () => {
		const utils = getCardByIndex(3);
		const first_heading  = utils.getAllByRole('heading', { level: 2 })[0];
		const second_heading  = utils.getAllByRole('heading', { level: 2 })[1];
		const paragraph = utils.getAllByRole('paragraph')[0];
		expect(first_heading ).toHaveTextContent(/Mobile Mental Well-being Resource Hub/);
		expect(second_heading ).toHaveTextContent(/Team Members: /);
		expect(paragraph).toHaveTextContent(
			/The mercuri.world app provides interactive, pocket-sized versions of the multilingual resources/
		);
	});

	test('should render Build with us h2 with correct text', () => {
		const bottom = screen.getByTestId('projects-bottom');
		const utils = within(bottom);
		const heading = utils.getAllByRole('heading', { level: 2 })[0];
		const para = utils.getAllByRole('paragraph')[0];
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(
			/Build with us./
		);
		expect(para).toHaveTextContent(
			/We are always open to new team members and project proposals/
		);
	});

	test('should render a button with correct href', () => {
		const bottom = screen.getByTestId('projects-bottom');
		const utils = within(bottom);
		
		const link = utils.getByRole('link', { name: /join us/i });
	  
		expect(link).toHaveAttribute('href', '/volunteer');
		expect(link).toBeInTheDocument();
	  
		const button = link.closest('button');
		expect(button).toBeInTheDocument();
		// expect(button.tagName).toBe('BUTTON');
	  });
	  

	test('should render footer', () => {
		const footer = screen.getByTestId('footer');
		expect(footer).toBeInTheDocument();
	});
});
