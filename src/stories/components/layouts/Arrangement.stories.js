import Arrangement from "../../../components/layouts/Arrangement.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Layouts/Arrangement",
  component: Arrangement,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Arrangement },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <arrangement v-bind="args" />`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
