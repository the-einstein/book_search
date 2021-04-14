import {mount} from "@vue/test-utils";
import App from "@/App";

test('App', () => {
    const wrapper = mount(App);

    expect(wrapper.find("router-view").exists()).toBe(true);
    expect(wrapper.find('#app').exists()).toBe(true);
})