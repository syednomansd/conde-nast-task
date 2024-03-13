import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NewsOverview from './NewsOverview';
import { useNews } from '../hooks/useNews'; // Update import path

jest.mock('../hooks/useNews', () => ({
  useNews: jest.fn(),
}));

describe('NewsOverview Component', () => {
  it('renders news items and pagination when data is loaded', async () => {
    // Mock the useNews hook to return loaded news data immediately
    useNews.mockReturnValue({
      currentNews: [
        { id: 1, title: 'News 1', teaser: 'Teaser 1' },
        { id: 2, title: 'News 2', teaser: 'Teaser 2' }
      ],
      paginate: jest.fn(),
      currentPage: 1,
      isLoading: false,
      error: null
    });

    render(
      <BrowserRouter>
        <NewsOverview />
      </BrowserRouter>
    );

    // Assert the presence of news items
    expect(await screen.findByText('News 1')).toBeInTheDocument();
    expect(screen.getByText('Teaser 1')).toBeInTheDocument();
    expect(await screen.findByText('News 2')).toBeInTheDocument();
    expect(screen.getByText('Teaser 2')).toBeInTheDocument();
  });
});