import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import ListaProductos from './ListaProductos';

test('renders ListaProductos component with product list', () => {
  act(() => {
    render(<ListaProductos />);
  });

  const productElement = screen.getByText(/Dolex Gripa X 12 Tabletas/i);
  expect(productElement).toBeInTheDocument();
});

