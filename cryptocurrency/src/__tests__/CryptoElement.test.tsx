import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CryptoElement } from '../components/ui/CryptoElement';

describe('CryptoElement', () => {
  test('CryptoElement render', () => {
    render(<CryptoElement title="" price={0} />);
    expect(screen.getByTestId<HTMLElement>('popular-currency')).toBeInTheDocument();
  });

  test('CryptoElement title render', () => {
    render(<CryptoElement title="bitcoin" price={0} />);
    expect(screen.getByText<HTMLElement>('bitcoin')).toBeInTheDocument();
  });

  test('CryptoElement price render', () => {
    render(<CryptoElement title="" price={1000} />);
    expect(screen.getByText<HTMLElement>('$ 1000.000')).toBeInTheDocument();
  });
});
