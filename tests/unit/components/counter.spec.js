// Para montar los componentes.
import {shallowMount, mount} from '@vue/test-utils'

import Counter from '@/components/Counter'


describe('Counter Component', () => {
    // PRIMER EJEMPLO DE TEST
    // test('debe hacer match con el snapshot', () => {
    //     const wrapper = shallowMount ( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()
    // }) 

    // SEGUNDO EJEMPLO DE TEST
    test('H2 Debe de tener el valor por defecto', () => {
        const wrapper = shallowMount ( Counter ) 
        const h2 = wrapper.find('h2')
        console.log('lalalalallaalla:',h2.text())
        expect(h2.text()).toBe('Counter')
    })
})    