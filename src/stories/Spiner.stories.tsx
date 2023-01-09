import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spiner } from '../components/Spiner';

export default {
    title: 'Component/Spiner',
    component: Spiner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Spiner>;

const Template: ComponentStory<typeof Spiner> = (args) => <Spiner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 40,
};
