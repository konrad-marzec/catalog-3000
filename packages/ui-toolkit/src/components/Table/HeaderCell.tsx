import { useCallback } from 'react';
import styled from 'styled-components';

import { Direction, SorterFunction, TableColumn } from '../../types/table.types';
import Sorter from './Sorter';

interface HeaderCellProps<T> {
  active?: boolean;
  column: TableColumn<T>;
  sortWith: (sorter: SorterFunction<T>, direction: Direction) => void;
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Th = styled.th`
  padding: 16px;
  font-weight: 500;
  position: relative;
  overflow-wrap: break-word;
  border-bottom: 1px solid var(--muted-light);

  ::before {
    top: 50%;
    right: 0;
    width: 1px;
    content: '';
    height: 1.6em;
    position: absolute;
    transform: translateY(-50%);
    background-color: var(--muted-light);
  }

  &:last-of-type {
    &::before {
      display: none;
    }
  }
`;

function HeaderCell<T>({ column, active, sortWith }: HeaderCellProps<T>): JSX.Element {
  const onClick = useCallback(
    (direction: Direction) => {
      if (!column.sorter) {
        return;
      }

      sortWith(column.sorter, direction);
    },
    [column.sorter, sortWith],
  );

  return (
    <Th>
      <Header>
        <span>{column.title}</span>
        {column.sorter ? <Sorter onClick={onClick} active={active} /> : null}
      </Header>
    </Th>
  );
}

export default HeaderCell;
