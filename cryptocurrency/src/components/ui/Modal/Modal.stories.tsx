import { Modal } from '.';
import { ModalProps, ModalTemplateProps } from './type';
import './style.module.scss';
import { Meta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useArgs } from '@storybook/client-api';
import { Form } from '../../modules/Form';
import { PortfolioTable } from '../../modules/PortfolioTable';

export default {
  title: 'Modal',
  components: Modal,
  argTypes: {
    children: {
      control: { type: 'select' },
      options: ['empty', 'form', 'table'],
    },
  },
} as Meta;

const Template: Story<ModalTemplateProps> = (arg) => {
  const [_, setArgs] = useArgs();
  const [isVisible, setIsVisible] = useState(arg.isOpenModal);
  const [modalChildren, setModalChildren] = useState(<></>);

  useEffect(() => {
    setIsVisible(arg.isOpenModal);
  }, [arg.isOpenModal]);

  useEffect(() => {
    setArgs({ ...arg, isOpenModal: isVisible });
  }, [isVisible]);

  useEffect(() => {
    setModalChildren(
      arg.children === 'form' ? (
        <Form id="id" onOpenModal={setIsVisible} />
      ) : arg.children === 'table' ? (
        <PortfolioTable />
      ) : (
        <></>
      )
    );
  }, [arg.children]);

  return <>{isVisible && <Modal {...{ onOpenModal: setIsVisible, children: modalChildren }} />}</>;
};
export const Default = Template.bind({});
Default.args = {
  children: 'empty',
  isOpenModal: true,
};
