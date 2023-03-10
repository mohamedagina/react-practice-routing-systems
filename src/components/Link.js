import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

const Link = ({ to, children, className, activeClassName, ...attr }) => {
  const { navigate, currentPath } = useNavigation();

  const handleClick = e => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    'text-blue-400 cursor-pointer',
    className,
    currentPath === to && activeClassName
  );
  return (
    <a href={to} className={classes} onClick={handleClick} {...attr}>
      {children}
    </a>
  );
};

export default Link;
