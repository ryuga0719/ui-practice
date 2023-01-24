import Fonts from "../../../components/layouts/Fonts.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Layouts/Fonts",
  component: Fonts,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Fonts },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <p>↓レスポンシブにフォントサイズを調整する↓</p>
    <fonts v-bind="args">
      <template #heading>
      ${args.heading}
      </template>
      <template #text>
      ${args.text}
      </template>
    </fonts>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  heading: "sample",
  text: "text",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
