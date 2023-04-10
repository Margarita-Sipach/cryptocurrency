import { Loader } from '.';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Loader',
  components: Loader,
} as Meta;

const Template: Story = () => <Loader />;
export const Default = Template.bind({});
Default.args = {};
