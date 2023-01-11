import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/Button';

export default {
    title: 'component/Button', // 폴더이름
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
    kind: 'contained',
    children: 'button',
};

export const Outlined = Template.bind({});

Outlined.args = {
    kind: 'outlined',
    children: 'button',
};

export const Rounded = Template.bind({});

Rounded.args = {
    kind: 'rounded',
    children: 'button',
};

export const Deletee = Template.bind({});

Deletee.args = {
    kind: 'delete',
    children: 'button',
};
