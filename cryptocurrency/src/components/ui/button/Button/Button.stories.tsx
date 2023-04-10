import { Button } from '.';
import { ButtonProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'buttons/Button',
  components: Button,
} as Meta;

const Template: Story<ButtonProps> = (arg) => <Button {...arg} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  className: '',
};
