import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthorImageArticle from '../../components/authorImageArticle';

describe('AuthorImageArticle component', () => {
  test('renders author information and article body', () => {
    // Mock data for testing
    const data = {
      nodeArticle: {
        author: { displayName: 'Author Name' },
        mediaImage: { mediaImage: { url: 'mock-image-url' } },
        body: { processed: '<p>Article Body</p>' },
      },
    };

    const { getByText, getByAltText } = render(
      <AuthorImageArticle data={data} />
    );

    // Add more specific tests based on your component's output
    expect(getByText("Data is not available")).toBeInTheDocument();
    expect(getByText('Author Name')).toBeInTheDocument();
    expect(getByText('Article Body')).toBeInTheDocument();
  });
});

// You can add more tests based on your specific requirements.
