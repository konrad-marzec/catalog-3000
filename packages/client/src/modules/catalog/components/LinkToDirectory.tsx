import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FileSystemNode, Kind } from '../catalog.types';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

function LinkToDirectory({ name, type }: FileSystemNode): JSX.Element {
  const location = useLocation();

  if (type === Kind.FILE) {
    return <span>{name}</span>;
  }

  if (location.pathname === '/') {
    return <StyledLink to={`${location.pathname}${name}`}>{name}</StyledLink>;
  }

  return <StyledLink to={`${location.pathname}/${name}`}>{name}</StyledLink>;
}

export default LinkToDirectory;
