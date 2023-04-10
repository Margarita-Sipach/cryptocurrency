import { AddButton } from '.';
import { AddButtonProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'buttons/AddButton',
  components: AddButton,
} as Meta;

const Template: Story<AddButtonProps> = (arg) => <AddButton {...arg} />;
export const Default = Template.bind({});
Default.args = {
  id: 'bitcoin',
  onVisibleModal: () => {},
  onGetModalId: () => {},
};
