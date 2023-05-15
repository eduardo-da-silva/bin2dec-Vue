import { mount } from '@vue/test-utils';
import Converter from '@/components/Converter.vue';

describe('Converter', () => {
    it('deve converter o valor de input em binário para decimal quando clicar no botão', async () => {
        const wrapper = mount(Converter);

        // Arrange ??
        const inputBin = wrapper.find('#inputBin');
        const btConverter = wrapper.find('button');
        const outputDec = wrapper.find("#outputDec")

        // Act ??
        await inputBin.setValue('1010');
        await btConverter.trigger('click')

        // Assert ??
        expect(outputDec.element.value).toEqual('10');
        expect(wrapper.vm.output).toEqual(10)
    });
});