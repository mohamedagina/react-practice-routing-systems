import classNames from 'classnames';

const Button = ({
  outline,
  rounded,
  primary,
  secondary,
  warning,
  danger,
  success,
  className,
  children,
  ...attributes
}) => {
  const classes = classNames('px-3 py-1.5 border', className, {
    'text-white': !outline,
    'border-blue-500 bg-blue-500': primary,
    'border-gray-900 bg-gray-900 ': secondary,
    'border-yellow-400 bg-yellow-400 ': warning,
    'border-green-500 bg-green-500': success,
    'border-red-600 bg-red-600': danger,
    'rounded-full': rounded,
    'bg-transparent': outline,
    'text-blue-500': outline && primary,
    'bg-transparent text-gray-900': outline && secondary,
    'text-yellow-400': outline && warning,
    'text-green-500': outline && success,
    'text-red-600': outline && danger
  });

  return (
    <button {...attributes} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  hasOneVariation: ({ primary, secondary, success, warning, danger }) => {
    if (
      Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger) >
      1
    )
      return new Error('Only one vatiation can be true!!');
  }
};

export default Button;
