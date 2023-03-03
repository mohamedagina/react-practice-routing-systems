import { useState } from 'react';

import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = indexToExpand =>
    setExpandedIndex(current =>
      current === indexToExpand ? -1 : indexToExpand
    );

  return (
    <div className="border-x border-t rounded">
      {items.map((item, index) => (
        <div key={item.id}>
          <div
            onClick={() => handleClick(index)}
            className="flex items-center justify-between bg-gray-50 cursor-pointer border-b p-3"
          >
            {item.label}{' '}
            <span className="text-2xl">
              {expandedIndex === index ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          </div>

          {expandedIndex === index && (
            <div className="border-b p-5">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
