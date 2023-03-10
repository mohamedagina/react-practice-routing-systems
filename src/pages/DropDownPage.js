import { useState } from 'react';
import DropDown from '../components/DropDown';

function DropDownPage() {
  const [selected, setSelected] = useState();

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' }
  ];

  const handleChange = option => {
    setSelected(option);
  };
  return (
    <div>
      <DropDown options={options} value={selected} onChange={handleChange} />
    </div>
  );
}

export default DropDownPage;
