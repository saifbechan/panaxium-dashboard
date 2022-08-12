import { RecoilRoot } from 'recoil';
import { expect, test, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../pages';
import Layout from '../components/Layout';

vi.mock('react-youtube', () => {
  return { default: vi.fn() };
});

test('Home', () => {
  render(
    <RecoilRoot>
      <Layout>
        <Home />
      </Layout>
    </RecoilRoot>
  );
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { level: 1, name: /Saif Bechan/i })).toBeDefined();
});
