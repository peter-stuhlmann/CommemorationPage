import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function DownIcon(props) {
  const { className, color, size, style } = props;
  return (
    <SvgIcon className={className} color={color} size={size} style={style}>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </SvgIcon>
  );
}
