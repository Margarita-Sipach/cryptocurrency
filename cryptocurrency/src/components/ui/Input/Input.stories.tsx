import { Input } from '.';
import { InputProps, InputTemplateProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Input',
  components: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number'],
    },
  },
} as Meta;

const Template: Story<InputTemplateProps> = (arg) => {
  const { placeholder, type, min, ...args } = arg;
  return <Input {...{ ...args, attributes: { placeholder: placeholder, type: type, min: min } }} />;
};
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input',
  type: 'text',
  min: '',
  value: '',
  onChange: () => {},
  onFocus: () => {},
  className: '',
};
