import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Tooltip(props) {
  const { label, position } = props;

  const [display, setDisplay] = useState('none');

  useEffect(() => {
    setDisplay('block');
    setTimeout(() => {
      setDisplay('none');
    }, 7000);
  }, [position]);

  return (
    <StyledTooltip
      style={{
        top: position.y + 5 + 'px',
        left: position.x + 5 + 'px',
        display,
      }}
    >
      {label}
    </StyledTooltip>
  );
}

const StyledTooltip = styled.div`
  position: fixed;
  opacity: 1;
  transform: none;
  color: #fff;
  padding: 4px 8px;
  font-size: 16px;
  max-width: 300px;
  border-radius: 4px;
  background-color: rgba(97, 97, 97, 0.9);
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
