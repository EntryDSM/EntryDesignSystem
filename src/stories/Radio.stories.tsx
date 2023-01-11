import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from 'components/Radio';

export default {
    title: 'Component/Radio',
    component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: ['입학 공지사항', '예비 신입생 안내'],
};
