import { bin2dec } from "@/utils/bin2dec";
test("Return decimal value of binary input", () => {
    expect(bin2dec("111")).toBe(7);
    expect(bin2dec("1010")).toBe(10);
    expect(bin2dec("0001010")).toBe(10);
    expect(bin2dec("001011")).toBe(11);
});

// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
