import Link from './Link';

const SideBar = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' }
  ];
  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {links.map(link => (
        <Link
          key={link.label}
          to={link.path}
          className="mb-3"
          activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
