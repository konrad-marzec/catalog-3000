import { useCallback } from 'react';
import styled from 'styled-components';

import { TableColumn } from '../../types/table.types';
import TableCell from './TableCell';
import HeaderCell from './HeaderCell';
import { useTableData } from './useTableData';

interface TableProps<T> {
  data: T[];
  columns: Array<TableColumn<T>>;
  dataKey: keyof T | ((x0: T) => string);
}

const TableHolder = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 6px;
  border-collapse: separate;
  box-shadow: 0px 0px 8px 2px var(--shadow);
`;

const THead = styled.thead`
  background-color: var(--background);
`;

const TBody = styled.tbody`
  background-color: var(--background);
`;

const Tr = styled.tr`
  &:hover {
    background-color: var(--list-hover);
  }
`;

function Table<T>({ columns, data, dataKey }: TableProps<T>): JSX.Element {
  const [result, { sorter, setSorterAndOrder }] = useTableData(data);

  const getKey = useCallback(
    (item: T) => {
      if (typeof dataKey === 'function') {
        return dataKey(item);
      }

      return `${item[dataKey] as unknown as string}`;
    },
    [dataKey],
  );

  return (
    <TableHolder>
      <THead>
        <tr>
          {columns.map((column) => (
            <HeaderCell column={column} sortWith={setSorterAndOrder} active={column.sorter === sorter} />
          ))}
        </tr>
      </THead>
      <TBody>
        {result.map((record) => (
          <Tr key={getKey(record)}>
            {columns.map((column, idx) => (
              <TableCell key={idx} column={column} record={record} />
            ))}
          </Tr>
        ))}
      </TBody>
    </TableHolder>
  );
}

export default Table;
