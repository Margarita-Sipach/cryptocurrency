import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/ui/button/Button';
import { CryptoElement } from '../components/ui/CryptoElement';
import { TableHeader } from '../components/ui/TableHeader';
import { tableHeader } from '../data';

describe('TableHeader', () => {
  test('TableHeader render', () => {
    render(<TableHeader />);
    expect(screen.getByTestId<HTMLElement>('table-header')).toBeInTheDocument();
  });

  test('TableHeader has all columns', () => {
    render(<TableHeader />);
    expect(screen.getByText<HTMLElement>(tableHeader[0])).toBeInTheDocument();
    expect(screen.getByText<HTMLElement>(tableHeader[3])).toBeInTheDocument();
    expect(screen.getByText<HTMLElement>(tableHeader[7])).toBeInTheDocument();
  });
});
