import { TableHeader } from '.';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';
import { Form } from '../../modules/Form';

export default {
  title: 'TableHeader',
  components: TableHeader,
} as Meta;

const Template: Story = (arg) => <TableHeader {...arg} />;
export const Default = Template.bind({});
Default.args = {};
