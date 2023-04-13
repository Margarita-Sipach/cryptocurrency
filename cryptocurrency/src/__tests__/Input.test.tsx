import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '../components/ui/Input';
import { describe, it, expect, test } from 'vitest';

const testData = {
  placeholder: 'Input',
  type: 'text',
};

describe('Input', () => {
  test('Input render', () => {
    render(<Input attributes={testData} value="" onChange={() => {}} />);
    expect(screen.getByTestId<HTMLElement>('input')).toBeInTheDocument();
  });

  test('Input placeholder render', () => {
    render(<Input attributes={testData} value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText<HTMLElement>('Input')).toBeInTheDocument();
  });

  test('Input value render', () => {
    render(<Input attributes={testData} value="10" onChange={() => {}} />);
    const input = screen.queryByTestId<HTMLInputElement>('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '10' } });
    expect(input.value).toEqual('10');
  });
});
