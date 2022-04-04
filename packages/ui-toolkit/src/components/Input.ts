import styled from 'styled-components';

export default styled.input`
  margin: 0;
  width: 100%;
  min-width: 0;
  font-size: 14px;
  list-style: none;
  padding: 4px 11px;
  position: relative;
  border-radius: 2px;
  line-height: 1.5715;
  transition: all 0.3s;
  display: inline-block;
  background-color: var(--background);
  border: 1px solid var(--muted-light);

  &:hover {
    border-color: var(--primary);
  }

  &:focus {
    outline: 0;
    border-color: var(--primary-hover);
    box-shadow: 0 0 0 2px var(--primary-outline);
  }
`;
