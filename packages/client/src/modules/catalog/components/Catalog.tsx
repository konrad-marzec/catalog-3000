import { Button, Input, Table } from '@catalog/ui-toolkit';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { loadCatalog } from '../catalog.api';
import { FileSystemNode } from '../catalog.types';
import LinkToDirectory from './LinkToDirectory';
import Navigation from './Navigation';

const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'name' as keyof FileSystemNode,
    render: LinkToDirectory,
    sorter: (a: FileSystemNode, b: FileSystemNode) => a.name.localeCompare(b.name),
  },
  {
    title: 'Size',
    dataIndex: 'sizeKb' as keyof FileSystemNode,
    sorter: (a: FileSystemNode, b: FileSystemNode) => a.sizeKb - b.sizeKb,
  },
];

const CatalogHolder = styled.div`
  padding: 20px;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 26px 20px;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 32px;
  background: var(--background);
  justify-content: space-between;
  box-shadow: 0px 0px 8px 2px var(--shadow);
`;

function Catalog(): JSX.Element {
  const location = useLocation();
  const [data, setData] = useState<FileSystemNode>();

  useEffect(() => {
    void loadCatalog(location.pathname).then(setData);
  }, [location.pathname]);

  return (
    <CatalogHolder>
      <Header>
        <Navigation />
        <div>
          <Input />
          <Button>asd</Button>
        </div>
      </Header>
      <Table dataKey="name" data={data?.items ?? []} columns={COLUMNS} />
    </CatalogHolder>
  );
}

export default Catalog;
