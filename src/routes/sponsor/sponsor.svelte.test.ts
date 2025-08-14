import { render, fireEvent} from '@testing-library/svelte';
import Sponsor from './+page.svelte';
import { describe, expect, it } from 'vitest';

describe('Sponsor Page', () => {
  it('renders the "Donate to mercuri.world today." link as <a>', () => {
    const { getByText } = render(Sponsor);
    const donateLink = getByText('Donate to mercuri.world today.');
    expect(donateLink.tagName).toBe('A');
    expect(donateLink).toHaveAttribute('href', 'https://hcb.hackclub.com/donations/start/mercuri-world');
    
  });

  it('renders the "Become a corporate sponsor." heading', () => {
    const { getByText } = render(Sponsor);
    expect(getByText('Become a corporate sponsor.')).toBeInTheDocument();
  });

  it('main heading uses <h1> and <h2>', () => {
    const { container } = render(Sponsor);
    const h1 = container.querySelector('h1');
    const h2 = container.querySelector('h2');
    expect(h1).toHaveTextContent('Support the future of mental health.');
    expect(h2).toHaveTextContent('Support mercuri.world.');
  });

  it('description paragraph uses <p>', () => {
    const { container } = render(Sponsor);
    const p = container.querySelector('p');
    expect(p).toHaveTextContent(/passionate high school and college students/i);
  });

  it('corporate sponsorship email uses <a> with mailto', () => {
    const { getByText } = render(Sponsor);
    const emailLink = getByText(/hq@mercuri.world/i);
    expect(emailLink.tagName).toBe('A');
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });

  it('hover text is accessible via aria-label', async () => {
    const { getByText } = render(Sponsor);
    const hoverText = getByText('Hover over me!');
    expect(hoverText).toHaveAttribute('aria-label');
    await fireEvent.mouseOver(hoverText);
    expect(getByText(/Thank you for checking out our work!/i)).toBeInTheDocument();
  });
});