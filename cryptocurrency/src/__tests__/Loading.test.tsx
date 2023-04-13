import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/button/Button';
import { CryptoElement } from '../components/ui/CryptoElement';
import { Loader } from '../components/ui/Loading';

describe('Loading', () => {
  test('Loading render', () => {
    render(<Loader />);
    expect(screen.getByTestId<HTMLElement>('loader')).toBeInTheDocument();
  });
});
