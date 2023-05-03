import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

export default {
    title: 'Component/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: 'orange',
    label: 'asdf',
};

export const TestOnClick = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const asdf = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setChecked(!checked);
        if (!checked) {
            console.dir(e.currentTarget.value);
        }
    };
    return (
        <div>
            <Checkbox
                label="test"
                value="for test"
                name="asdf"
                isChecked={checked}
                onClick={asdf}
            />
        </div>
    );
};
