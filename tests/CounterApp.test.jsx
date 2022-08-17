import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 100;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(initialValue)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100')
    });

    test('Debe de incrementar con el boton +1', () => {

        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', () => {

        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });


    test('Debe de funcionar el botón de reset', () => {

        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        // screen.debug();
        expect(screen.getByText('355')).toBeTruthy();
    });
})