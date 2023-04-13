import { Button } from '.';
import { ButtonProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button',
  components: Button,
} as Meta;

const Template: Story<ButtonProps> = (arg) => <Button {...arg} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  className: '',
};

export const AddButton = Template.bind({});
AddButton.args = {
  type: 'add',
  onClick: () => {},
  id: 'bitcoin',
};
