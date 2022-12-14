import { expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../pages';
import Layout from '../components/Layout';

vi.mock('react-youtube', () => {
  return { default: vi.fn() };
});

test('Home', () => {
  render(
    <Layout>
      <Home />
    </Layout>
  );
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { level: 1, name: /Name: John Doe/i })).toBeDefined();
});
