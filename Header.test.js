import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders navigation links', () => {
  render(<Header />);
  expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
  expect(screen.getByText(/Productos/i)).toBeInTheDocument();
  expect(screen.getByText(/Servicios/i)).toBeInTheDocument();
  expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
});
