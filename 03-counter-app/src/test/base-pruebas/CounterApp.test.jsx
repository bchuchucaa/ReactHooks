import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../../CounterApp/CounterApp"

describe('prubeas en CounterApp', () => {
    test('Deberia hacer match con el snapshot', () => {
        const value = 100
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
    })
    test('debe de incrementar con el boton +1', () => {

        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('1+'))
        expect(screen.getByText('11')).toBeTruthy();

    })
    test('debe de decrementar con el boton -1', () => {

        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('1-'))
        expect(screen.getByText('9')).toBeTruthy();

    })
    test('debe de funcionar el boton de reset', () => {

        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText('1+'))

        fireEvent.click(screen.getByText('1+'))

        fireEvent.click(screen.getByText('1+'))

        fireEvent.click(screen.getByText('Reset'))


        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText(10)).toBeTruthy();




    })


})