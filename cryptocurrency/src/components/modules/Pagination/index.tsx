import classes from './style.module.scss';
import { Button } from '../../ui/button/Button';

interface PaginationProps {
  onPageClick: (arg: number) => void;
  activePage: number;
  pageAmount: number;
}

export const Pagination = ({ onPageClick, activePage, pageAmount }: PaginationProps) => {
  return (
    <div className={classes.pagination}>
      {Array.from({ length: pageAmount }, (_, index) => index + 1).map((item) => (
        <Button
          key={item}
          className={`${classes.pagination__item} ${
            activePage === item && classes.pagination__item_active
          }`}
          onClick={(e: React.MouseEvent) =>
            onPageClick(+((e.target as HTMLElement).textContent || 1))
          }
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
