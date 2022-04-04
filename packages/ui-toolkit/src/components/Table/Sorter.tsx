import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Direction } from '../../types/table.types';

interface SorterProps {
  active?: boolean;
  onClick: (direction: Direction) => void;
}

const Arrow = styled.div<{ active?: boolean; direction?: Direction }>`
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  cursor: pointer;
  height: 0;
  width: 0;

  ${({ direction, active }) => {
    const color = active ? 'var(--primary)' : 'var(--muted-light)';

    if (direction === Direction.DOWN) {
      return css`
        border-top: 6px solid ${color};
        margin-top: 1px;
      `;
    }

    return css`
      margin-bottom: 1px;
      border-bottom: 6px solid ${color};
    `;
  }}
`;

const SorterHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Sorter({ onClick, active }: SorterProps): JSX.Element {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (active) {
      return;
    }

    setDirection(0);
  }, [active]);

  const onDescClick = useCallback(() => {
    setDirection(Direction.DOWN);
    onClick(Direction.DOWN);
  }, [onClick]);

  const onAscClick = useCallback(() => {
    setDirection(Direction.UP);
    onClick(Direction.UP);
  }, [onClick]);

  return (
    <SorterHolder>
      <Arrow onClick={onAscClick} active={direction === Direction.UP} />
      <Arrow onClick={onDescClick} active={direction === Direction.DOWN} direction={Direction.DOWN} />
    </SorterHolder>
  );
}

export default Sorter;
