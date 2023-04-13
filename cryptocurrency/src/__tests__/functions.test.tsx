import { getStartDate } from '../functions';
import { describe, expect, test } from 'vitest';

describe('Start date functions tests', () => {
  test('Time - 1 day ago', () => {
    expect(getStartDate('day')).toBeCloseTo(Date.now() - 86400000);
  });

  test('Time - 3 days ago', () => {
    expect(getStartDate('day', 3)).toBeCloseTo(Date.now() - 86400000 * 3);
  });

  test('Time - 1 week ago', () => {
    expect(getStartDate('week')).toBeCloseTo(Date.now() - 86400000 * 7);
  });

  test('Time - 3 weeks ago', () => {
    expect(getStartDate('week', 3)).toBeCloseTo(Date.now() - 86400000 * 7 * 3);
  });

  test('Time - 1 month ago', () => {
    expect(getStartDate('month')).toBeCloseTo(Date.now() - 86400000 * 31);
  });

  test('Time - 3 months ago', () => {
    expect(getStartDate('month', 3)).toBeCloseTo(Date.now() - 86400000 * 30 * 3);
  });

  test('Time - 1 year ago', () => {
    expect(getStartDate('year')).toBeCloseTo(Date.now() - 86400000 * 30 * 12 - 86400000 * 5);
  });

  test('Time - 3 years ago', () => {
    expect(getStartDate('year', 3)).toBeCloseTo(
      Date.now() - 86400000 * 30 * 12 * 3 - 86400000 * 15
    );
  });
});
