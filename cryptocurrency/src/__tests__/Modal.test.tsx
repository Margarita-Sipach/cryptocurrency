import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '../components/ui/Input';
import { describe, it, expect, test } from 'vitest';
import { Modal } from '../components/ui/Modal';

describe('Modal', () => {
  test('Modal render', () => {
    render(
      <Modal onOpenModal={(arg = true) => {}}>
        <div>Modal</div>
      </Modal>
    );
    expect(screen.getByTestId<HTMLElement>('modal')).toBeInTheDocument();
  });

  // test('Modal close when esc click', () => {
  //   render(
  //     <Modal onOpenModal={(arg = true) => {}}>
  //       <div>Modal</div>
  //     </Modal>
  //   );
  //   const modal = screen.getByTestId<HTMLElement>('modal');
  //   fireEvent.click(modal);
  //   fireEvent.keyDown(modal, { key: 'esc' });
  //   expect(screen.getByTestId<HTMLElement>('modal')).toBeInTheDocument();
  // });
});
