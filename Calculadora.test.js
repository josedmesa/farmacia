import { render, fireEvent, screen } from '@testing-library/react';
import Calculadora from './Calculadora';

test('calculates dose based on weight input', () => {
  render(<Calculadora />);
  const input = screen.getByPlaceholderText(/Peso en kg/i);
  const button = screen.getByText(/Calcular Dosis/i);

  fireEvent.change(input, { target: { value: '50' } });
  fireEvent.click(button);

  const result = screen.getByText(/La dosis recomendada es: 25 mg./i);
  expect(result).toBeInTheDocument();
});
