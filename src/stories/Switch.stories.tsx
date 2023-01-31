import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '../components/Switch';

export default {
    title: 'Component/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
