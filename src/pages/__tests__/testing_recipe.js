import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListOfIngredients from '../../components/ingredientsAndRecipe';
import PrepInfo from '../../components/preparationAndImage';

describe('ListOfIngredients component', () => {
  test('renders ingredients and instructions', () => {
    // Mock data for testing
    const data = {
      nodeFood: {
        ingredients: ['Ingredient 1', 'Ingredient 2'],
        recipeInstruction: { processed: '<p>Instructions</p>' },
      },
    };

    const { getByText } = render(<ListOfIngredients data={data} />);

    // Add more specific tests based on your component's output
    expect(getByText('Ingredients')).toBeInTheDocument();
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
    expect(getByText('Recipe Instructions')).toBeInTheDocument();
    expect(getByText('Instructions')).toBeInTheDocument();
  });
});

describe('PrepInfo component', () => {
  test('renders preparation information', () => {
    // Mock data for testing
    const data = {
      nodeFood: {
        mediaImage: { mediaImage: { url: 'mock-image-url' } },
        preparationTime: '<p>Preparation Time</p>',
        cookingTime: '<p>Cooking Time</p>',
        numberOfServings: '<p>Number of Servings</p>',
        difficulty: '<p>Difficulty</p>',
      },
    };

    const { getByText, getByAltText } = render(<PrepInfo data={data} />);

    // Add more specific tests based on your component's output
    expect(getByText("Data is not available")).toBeInTheDocument();
    expect(getByText('Preparation Time:')).toBeInTheDocument();
    expect(getByText('Cooking Time:')).toBeInTheDocument();
    expect(getByText('Number of Servings:')).toBeInTheDocument();
    expect(getByText('Difficulty:')).toBeInTheDocument();
    expect(getByText('Preparation Time')).toBeInTheDocument();
    expect(getByText('Cooking Time')).toBeInTheDocument();
    expect(getByText('Number of Servings')).toBeInTheDocument();
    expect(getByText('Difficulty')).toBeInTheDocument();
  });
});

// You can add more tests based on your specific requirements.
