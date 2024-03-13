import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders home link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });

  test('renders about link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const aboutLink = getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders contact link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const contactLink = getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });
});