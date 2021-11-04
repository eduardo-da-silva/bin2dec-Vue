import { mount } from '@vue/test-utils';
import InputBin from '@/components/InputBin.vue';

describe('InputBin', () => {
    it('não deve ter seu valor alterado quando dígitos diferente de 1 ou 0 forem inseridos', async () => {
        const wrapper = mount(InputBin, {
            propsData: {
                callback: jest.fn(),
            },
        });

        const input = wrapper.find('input');

        await input.setValue('1010101');
        expect(input.element.value).toEqual('1010101');
        await input.setValue('101aa01a01');
        expect(input.element.value).toEqual('1010101');
    });
});