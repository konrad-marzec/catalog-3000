import styled from 'styled-components';

export default styled.button`
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  user-select: none;
  padding: 4px 15px;
  position: relative;
  text-align: center;
  border-radius: 2px;
  line-height: 1.5715;
  white-space: nowrap;
  display: inline-block;
  background: var(--background);
  border: 1px solid transparent;

  color: #ffffff;
  background: var(--primary);
  border-color: var(--primary);

  &:hover {
    border-color: var(--primary-hover);
    background: var(--primary-hover);
  }
`;
