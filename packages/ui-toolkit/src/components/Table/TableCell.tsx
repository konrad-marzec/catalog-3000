import React from 'react';
import styled from 'styled-components';
import { TableColumn } from '../../types/table.types';

interface TableCellProps<T> {
  column: TableColumn<T>;
  record: T;
}

const Td = styled.td`
  padding: 16px;
  position: relative;
  overflow-wrap: break-word;
  border-bottom: 1px solid #f0f0f0;
`;

function TableCell<T>({ column, record }: TableCellProps<T>): JSX.Element {
  const value = (() => {
    if (typeof column.dataIndex === 'function') {
      return column.dataIndex(record);
    }

    return `${record[column.dataIndex] as unknown as string}`;
  })();

  if (column.render) {
    return <Td>{column.render(record)}</Td>;
  }

  return <Td>{value}</Td>;
}

export default TableCell;
