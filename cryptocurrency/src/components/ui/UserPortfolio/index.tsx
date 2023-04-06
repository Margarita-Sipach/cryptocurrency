import { useUserPortfolio } from '../../../hooks';
import classes from './style.module.scss';

interface UserPortfolioProps {
  onClick: (arg: boolean) => void;
}

export const UserPortfolio = ({ onClick }: UserPortfolioProps) => {
  const [oldValue, newValue] = useUserPortfolio();

  return (
    <div className={classes.portfolio} onClick={() => onClick(true)} data-cy="user-portfolio">
      <span className={classes.title}>User Portfolio</span>
      <div>
        <span data-cy="balance" className={classes.value}>
          $ {newValue.toFixed(3)}
        </span>
        {newValue !== 0 && (
          <span
            data-cy="diff"
            className={`${classes.diff} ${newValue - oldValue < 0 ? classes.low : classes.high}`}
          >
            {(newValue - oldValue || 0).toFixed(3)} (
            {oldValue ? ((newValue / oldValue - 1) * 100).toFixed(3) : 0}
            %)
          </span>
        )}
      </div>
    </div>
  );
};
