import classes from './style.module.scss';

// interface LoadingProps {}

export const Loader = () => {
  return (
    <div className={classes.bg}>
      <div className={classes.loader}></div>
    </div>
  );
};
