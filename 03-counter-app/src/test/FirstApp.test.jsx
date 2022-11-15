import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('first app ', () => {

    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola soy Goku';
    //     const { container } = render(<FirstApp title={title} />)
    //     expect(container).toMatchSnapshot()
    // })
    test('debe mostrar el titulo en un h1', () => {
        const title = 'Hola soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);


    })

})
