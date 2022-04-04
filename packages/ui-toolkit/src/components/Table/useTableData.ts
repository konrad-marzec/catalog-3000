import { useCallback, useMemo, useState } from 'react';

import { Direction, SorterFunction } from '../../types/table.types';
import { noop } from '../../utils';

export function useTableData<T>(
  data: T[],
): [T[], { sorter: SorterFunction<T>; setSorterAndOrder: (sorter: SorterFunction<T>, direction: Direction) => void }] {
  const [sorter, setSorter] = useState<SorterFunction<T>>(noop);
  const [direction, setDirection] = useState(1);

  const setSorterAndOrder = useCallback((sorter: SorterFunction<T>, direction: Direction) => {
    setDirection(direction);
    setSorter(() => sorter);
  }, []);

  const result = useMemo(() => {
    if (!sorter) {
      return data;
    }

    return data.sort((a, b) => direction * sorter(a, b));
  }, [data, sorter, direction]);

  return [
    result,
    {
      sorter,
      setSorterAndOrder,
    },
  ];
}
