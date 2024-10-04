import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders Banner component with promotion message', () => {
  render(<Banner />);
  const promoMessage = screen.getByText(/Gran Promoción en Farmacia Salud Total/i);
  expect(promoMessage).toBeInTheDocument();
});
