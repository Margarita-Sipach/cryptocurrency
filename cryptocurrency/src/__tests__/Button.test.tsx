import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/button/Button';

describe('Button', () => {
  test('Button render', () => {
    render(<Button />);
    expect(screen.getByTestId<HTMLElement>('button')).toBeInTheDocument();
  });

  test('Button title render', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText<HTMLElement>('Button')).toBeInTheDocument();
  });

  test('Add button render', () => {
    render(<Button type="add" />);
    expect(screen.getByText<HTMLElement>('+')).toBeInTheDocument();
  });
});
