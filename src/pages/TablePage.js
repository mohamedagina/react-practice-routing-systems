import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const fruits = [
    { name: 'Apple', color: 'bg-red-500', score: 4 },
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Banana', color: 'bg-yellow-500', score: 3 },
    { name: 'Lime', color: 'bg-green-500', score: 1 }
  ];

  const config = [
    {
      label: 'Name',
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name
    },
    {
      label: 'Color',
      render: fruit => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: fruit => fruit.score,
      sortValue: fruit => fruit.score
    }
  ];

  const keyFn = fruit => fruit.name;
  return <SortableTable config={config} tableData={fruits} keyFn={keyFn} />;
};

export default TablePage;
