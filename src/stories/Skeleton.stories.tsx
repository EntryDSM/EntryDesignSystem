import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '../components/Skeleton';

export default {
    title: 'Component/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Contained = Template.bind({});

Contained.args = {
    width: 100,
    height: 100,
    isLoaded: true,
    children: <div>fdsafds</div>,
};
