import { Breadcrumb } from '@catalog/ui-toolkit';
import { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

function Navigation(): JSX.Element {
  const { path = '' } = useParams<{ path?: string }>();

  const parts = useMemo(() => path.split('/').filter(Boolean), [path]);

  const getURL = useCallback((idx: number) => `/${[...parts].splice(0, idx + 1).join('/')}`, [parts]);

  return (
    <nav>
      <Breadcrumb>
        {<Breadcrumb.BreadcrumbItem to="/">.</Breadcrumb.BreadcrumbItem>}
        {parts.map((part, idx) => {
          const url = getURL(idx);

          return (
            <Breadcrumb.BreadcrumbItem key={url} to={url}>
              {part}
            </Breadcrumb.BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </nav>
  );
}

export default Navigation;
