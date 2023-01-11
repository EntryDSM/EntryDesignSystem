import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Textarea } from 'components/Textarea';

export default {
    title: 'Component/Textarea',
    component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
