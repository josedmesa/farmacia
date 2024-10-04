import { render, fireEvent, screen } from '@testing-library/react';
import Calificacion from './Calificacion';

test('renders and changes rating', () => {
  render(<Calificacion />);
  const select = screen.getByDisplayValue('1 estrella');

  fireEvent.change(select, { target: { value: '5' } });
  const updatedRating = screen.getByText(/Producto calificado con 5 estrellas/i);
  expect(updatedRating).toBeInTheDocument();
});
