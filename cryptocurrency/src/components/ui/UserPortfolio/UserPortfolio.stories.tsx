import { UserPortfolio } from '.';
import { UserPortfolioProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';
import { Form } from '../../modules/Form';

export default {
  title: 'UserPortfolio',
  components: UserPortfolio,
} as Meta;

const Template: Story<UserPortfolioProps> = (arg) => <UserPortfolio {...arg} />;
export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
