import { render, screen } from '@testing-library/react';
import Ofertas from './Ofertas';

test('renders offers section', () => {
  render(<Ofertas />);
  const offerText = screen.getByText(/Ofertas del Mes/i);
  expect(offerText).toBeInTheDocument();
});
