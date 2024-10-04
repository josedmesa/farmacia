import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  const footerText = screen.getByText(/Farmacia Salud Total/i);
  expect(footerText).toBeInTheDocument();
});
