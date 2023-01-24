import WaiAriaAccordion from "../../../components/accordions/WaiAriaAccordion.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Accordions/WaiAriaAccordion",
  component: WaiAriaAccordion,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { WaiAriaAccordion },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <wai-aria-accordion v-bind="args">${args.content}</wai-aria-accordion>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  heading: "アコーディオンのラベル",
  buttonId: "wai-aria-accordion-button",
  contentId: "wai-aria-accordion-content",
  content: "コンテンツ",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };
