import StackBasic from "../../../components/layouts/StackBasic.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Layouts/StackBasic",
  component: StackBasic,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { StackBasic },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <stack-basic v-bind="args">
      <div class="w-full bg-red-300">a</div>
      <div class="w-full bg-yellow-300">b</div>
      <div class="w-full bg-blue-300">c</div>
    </stack-basic>
    `,
});

export const Column = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Column.args = {
  mode: "col",
  gapY: "16px",
};

export const Row = Template.bind({});
Row.args = {
  mode: "row",
  gapX: "16px",
};
