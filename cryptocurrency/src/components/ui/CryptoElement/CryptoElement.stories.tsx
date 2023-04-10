import { CryptoElement } from '.';
import { CryptoElementProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'CryptoElement',
  components: CryptoElement,
} as Meta;

const Template: Story<CryptoElementProps> = (arg) => <CryptoElement {...arg} />;
export const Default = Template.bind({});
Default.args = {
  title: 'bitcoin',
  price: 1000,
  className: '',
};
