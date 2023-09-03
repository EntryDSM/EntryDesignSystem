import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from '../components/Toast';
import { CustomToastContainer } from '../components/ToastContainer';

export default {
    title: 'component/ToastContainer', // 폴더이름
    component: Toast,
} as ComponentMeta<typeof CustomToastContainer>;

const Template: ComponentStory<typeof CustomToastContainer> = () => (
    <>
        <CustomToastContainer />
        <button onClick={() => Toast('hello', { type: 'success' })}>버튼</button>
    </>
);

export const Contained = Template.bind({});

Contained.args = {
    type: 'success',
};
