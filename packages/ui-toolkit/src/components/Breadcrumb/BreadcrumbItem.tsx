import { MouseEventHandler, ReactNode, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface BreadcrumbItemProps {
  to?: string;
  className?: string;
  children?: ReactNode;
  separator?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}

const Separator = styled.span`
  color: var(--muted);
  margin: 0 8px;
`;

const BreadcrumbItemHolder = styled.span`
  color: var(--muted);

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  &:hover {
    a {
      color: var(--primary);
    }
  }

  &:last-of-type {
    color: var(--primary);
    pointer-events: none;
    font-weight: 500;

    ${Separator} {
      display: none;
    }
  }
`;

function BreadcrumbItem({ separator = '/', children, to, ...restProps }: BreadcrumbItemProps): JSX.Element | null {
  const link = useMemo(() => {
    if (to) {
      return (
        <Link to={to} {...restProps}>
          {children}
        </Link>
      );
    }

    return <span {...restProps}>{children}</span>;
  }, [children, restProps, to]);

  if (children) {
    return (
      <BreadcrumbItemHolder>
        {link}
        {separator && <Separator>{separator}</Separator>}
      </BreadcrumbItemHolder>
    );
  }

  return null;
}

export default BreadcrumbItem;
