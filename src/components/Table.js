import { Fragment } from 'react';

const Table = ({ tableData, config, keyFn }) => {
  const renderedHeaders = config.map(column => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>
        {tableData.map(rowData => (
          <tr className="border-b" key={keyFn(rowData)}>
            {config.map(column => (
              <td className="p-3" key={column.label}>
                {column.render(rowData)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
