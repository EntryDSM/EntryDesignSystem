import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../components/Button';

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

export const WithIcon = Template.bind({});

WithIcon.args = {
    kind: ['icon', 'outlined'],
    icon: 'Check',
};

export const Delete = Template.bind({});

Delete.args = {
    kind: 'delete',
    children: 'button',
};
