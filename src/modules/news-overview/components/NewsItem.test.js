import React from 'react';
import { render } from '@testing-library/react';
import NewsItem from './NewsItem';

describe('NewsItem Component', () => {
  const mockArticle = {
    id: 1,
    title: 'Test Title',
    teaser: 'Test Teaser',
    date: '2024-03-13',
  };

  it('renders with article data', () => {
    const { getByText } = render(<NewsItem article={mockArticle} />);

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Teaser')).toBeInTheDocument();
    expect(getByText('2024-03-13')).toBeInTheDocument();
  });

  it('renders nothing if article is null', () => {
    const { container } = render(<NewsItem article={null} />);
    expect(container.firstChild).toBeNull();
  });
});