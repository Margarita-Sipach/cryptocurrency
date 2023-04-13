import { describe, it, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Button } from '../components/ui/button/Button';
import { UserPortfolio } from '../components/ui/UserPortfolio';
import { ContextData } from '../App';

const mockContextData = {
  changes: [{ id: 'bitcoin', value: 1000 }],
  setChanges: () => {},
  oldValue: 1000,
  setOldValue: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

describe('UserPortfolio', () => {
  test('UserPortfolio render', () => {
    render(<UserPortfolio onClick={() => {}} />);
    expect(screen.getByTestId<HTMLElement>('user-portfolio')).toBeInTheDocument();
  });

  test('Init value is 0 in then beginning', () => {
    render(<UserPortfolio onClick={() => {}} />);
    expect(screen.getByText<HTMLElement>('$ 0.000')).toBeInTheDocument();
  });

  test('Change value is not exist in then beginning', () => {
    render(<UserPortfolio onClick={() => {}} />);
    expect(screen.queryByTestId<HTMLElement>('diff')).toBeFalsy();
  });

  test('Init value is equal oldValue', () => {
    render(
      <ContextData.Provider value={{ ...mockContextData }}>
        <UserPortfolio onClick={() => {}} />
      </ContextData.Provider>
    );
    waitFor(() => expect(screen.queryByText<HTMLElement>('$ 1000.000')).toBeInTheDocument());
  });

  test('Change value is exist when oldValue is exist', () => {
    render(
      <ContextData.Provider value={{ ...mockContextData }}>
        <UserPortfolio onClick={() => {}} />
      </ContextData.Provider>
    );
    waitFor(() => expect(screen.queryByTestId<HTMLElement>('diff')).toBeTruthy());
  });
});
