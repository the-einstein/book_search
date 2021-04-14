import {mount} from "@vue/test-utils";
import App from "@/App";

test('App', () => {
    const wrapper = mount(App);

    expect(wrapper.find('#app').exists()).toBe(true);
})