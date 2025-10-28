import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login page by default', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
