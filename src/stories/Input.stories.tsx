import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../components/Input';

export default {
    title: 'component/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PrimaryInput = Template.bind({});

PrimaryInput.args = {
    type: 'text',
};

export const TestInputTelephone = () => {
    const [value, setValue] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <div>
            <Input
                type="tel"
                placeholder="전화번호"
                width={240}
                value={value}
                onChange={onChange}
                maxLength={13}
            />
        </div>
    );
};
