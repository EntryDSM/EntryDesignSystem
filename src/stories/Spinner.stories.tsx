import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from '../components/Spinner';

export default {
    title: 'Component/Spinner',
    component: Spinner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 40,
};
