import classNames from 'classnames';

const Panel = ({ children, className, ...attr }) => {
  const classes = classNames(
    className,
    'border rounded p-3 shadow bg-white w-full'
  );
  return (
    <div className={classes} {...attr}>
      {children}
    </div>
  );
};

export default Panel;
