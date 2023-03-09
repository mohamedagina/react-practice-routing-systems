import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const DropDown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handleClose = e => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener('click', handleClose, true);

    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  const handleChange = option => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(current => !current)}
      >
        {value?.label ?? 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>

      {isOpen && options.length && (
        <Panel className="absolute top-full">
          {options.map(option => (
            <div
              className="hover:bg-sky-100 rounded cursor-pointer p-1"
              key={option.value}
              onClick={() => handleChange(option)}
            >
              {option.label}
            </div>
          ))}
        </Panel>
      )}
    </div>
  );
};

export default DropDown;
