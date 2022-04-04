import { ReactNode } from 'react';
import BreadcrumbItem from './BreadcrumbItem';

interface BreadcrumbProps {
  children?: ReactNode;
}

function Breadcrumb({ children }: BreadcrumbProps): JSX.Element {
  return <div>{children}</div>;
}

Breadcrumb.BreadcrumbItem = BreadcrumbItem;

export default Breadcrumb;
