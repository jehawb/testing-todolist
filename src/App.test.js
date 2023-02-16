import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * @jest-environment jsdom
 */
test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  expect(div).not.toBeNull();
});
