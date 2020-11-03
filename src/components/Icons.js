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

export const Logo = (props) => {
  const { backgroundColor, className, color, height, width } = props;
  return (
    <svg viewBox="0 0 2398 436" className={className} style={{ height: height, width: width }}>
      <path fill={backgroundColor || '#fff'} d="M1198.5,435.9q-597,0-1193.9.1c-3.81,0-4.6-.78-4.6-4.6Q.18,217.74,0,4.09C0,.67.68,0,4.1,0Q1199,.15,2393.9,0c3.42,0,4.1.67,4.09,4.09q-.16,213.66,0,427.31c0,3.82-.79,4.6-4.6,4.6Q1796,435.84,1198.5,435.9Z" />
      <path fill={color || '#000'} d="M1699.66,264.56c1.13-8.23,2.19-16.48,3.4-24.7.61-4.14,4-9.45-.25-12.05-4.59-2.81-8.32,3.06-11.27,5.55-27.17,22.94-54,46.29-84.46,64.94-1.07.66-2.94,1.81-3.41,1.44-18.74-14.82-26.91,5.77-39.67,11.46-24,10.67-49.36,15-75.52,17.09a426.92,426.92,0,0,1-59.73.41c-27.2-1.68-54.34-4.28-81.48-6.82-13.13-1.23-26.41,2.2-39.46-1.84-9.27-2.86-10.07-11.55-10.21-18-.16-7.3,6.42-9.62,14.36-11.6a493.78,493.78,0,0,0,64.17-20.75c31.87-12.78,63.17-27,94.52-41.08,12-5.37,23.45-11.88,35.12-17.94.78-.4,1.88-1.89,1.75-2.06-1.15-1.55-2.28-3.53-3.92-4.24-27.73-12-55.37-24.16-83.37-35.45-17.94-7.24-31.09-23-29.92-42.14,1-16.93,17-22.52,29.18-27.92,32.89-14.64,64.26-32.15,96.32-48.32,9-4.54,17.12-10.86,25.52-16.53,4.75-3.21,10.17-5.16,14.11-.49A18.37,18.37,0,0,1,1559.08,51c-7.62,24.25-32.53,26.55-50,37.47-24.28,15.19-51.15,26.23-77,38.89-3.72,1.83-11.54.88-10.3,5.5,1,3.75,7,7.39,12.6,9.58,23.41,9.18,46.63,18.88,69.52,29.28,12.08,5.48,22.87,13.91,35.12,18.85,8.75,3.52,15.6-5.33,22.71-9.22,23.54-12.84,47.67-25.21,69.09-41.1,10.27-7.62,15.25-22.59,22.11-34.52,16.38-28.49,34.78-55.25,63.22-73.13,9.56-6,18.94-13.06,30.4-15.17,5.5-1,12.74-2.94,16.31,2.51,5.27,8,5.68,17.63,3.44,27.08-4.2,17.75-17.25,29.13-29.78,40.75-11.86,11-23.8,21.93-36.27,32.19-14.65,12.06-29.8,23.52-45,34.94-6.29,4.73-9.57,11.36-12.7,18-11.22,24-25.87,46.54-31.24,73-.69,3.44-1.74,6.8-2.29,10.25-.21,1.3.54,2.75.85,4.13,3-1.62,6.35-2.84,9-4.93,24.53-19.34,48.75-39.08,73.45-58.21,16.69-12.92,28.73-4.37,33.9,20.87,4.07,19.85-3.44,38-5.16,56.87-.49,5.47-5.95,11.06-12.2,8.68C1700.92,280.59,1699.4,272.65,1699.66,264.56Z" />
      <path fill={color || '#000'} d="M206.07,94.32c-.9-11.86,4.45-18.12,18.05-21.79,30-8.11,60.39-7.79,90.86-8.44,20.47-.44,41-1.66,61.4-.74,27.31,1.22,54.56,4,81.8,6.42,24,2.17,48.1,3.93,71.91,7.53,27.06,4.09,53.82,10.17,80.77,15.1,24.45,4.47,49.21,9.24,71.71,19.22C712,124.68,743.33,137,761.73,166.11c13.89,22,13.25,47.12.37,67.85-14.55,23.42-39,37.59-64.3,49.09-26.33,12-53.54,21.41-80.87,30.73-21.71,7.4-43.83,13-66,18.8-21.67,5.68-42.42,15.56-64.31,19.48-24.54,4.39-48.26,12.63-73.46,14.32-13.51.91-26.65,6.65-40,9.91-18,4.36-35.88,9-54,12.5-33.39,6.44-66.77,12.73-100,19.86a967.61,967.61,0,0,1-102.73,16.12c-22.34,2.32-44.37,4.42-66.69,3a130.64,130.64,0,0,1-22.91-3.9c-9.6-2.37-10.67-10.9-10.39-18.53.32-8.85,10.3-7.22,15.4-11.14,3.56-2.74,9-3.26,13.77-4.08,1.71-.3,5.69-2.24,5.61,2.18-.29,16.18,11.31,12.28,20,11.39,24.85-2.52,49.66-5.55,74.42-8.86,14.51-1.95,28.83-5.38,43.36-7.15,30.8-3.75,60.51-12.66,90.86-18.36,29.15-5.46,58-12,86.92-18.56,28.2-6.39,56.71-11.41,84.86-18,23.71-5.55,47.08-12.52,70.62-18.78,31.64-8.41,63.37-16.32,94.73-25.93,35.58-10.9,70.13-23.64,101.67-43.3,13.32-8.3,26-18.2,33.62-33,5.47-10.56-2.28-32.64-17.53-44.34-19.3-14.82-41.36-24.24-64.06-33-26.58-10.29-54.07-16-81.79-20.69-31.14-5.22-62.2-11.13-93.9-12.9-20.64-1.15-41.11-5.68-61.74-6.39-24.68-.84-49.32-4-74.13-1.68-8.57.8-17.8-2.75-26-.91-20.82,4.72-42,1.2-63,4.35-16.29,2.44-32.79,3.55-48.09,9.66C210.61,110.43,206.26,108.44,206.07,94.32Z"/ >
      <path fill={color || '#000'} d="M1741.32,271.48c3.34-18.88,13.52-32.85,29.16-43.52,5-3.39,9.56-6.72,15.48-8.73,14.31-4.86,22.25,1,20.78,16.25-.25,2.53-.29,5.56,2.81,5.36,11.86-.77,11.69,8.85,10.88,15.06-1,8,.21,14.13,6.9,17.4,5.79,2.83,11.85-1.27,16.78-4.25,19.43-11.77,34.35-28.63,49.93-44.84,22.64-23.56,31.33-55.53,50.36-81.19,20.12-27.12,32.83-59.67,59.86-81.69a182.22,182.22,0,0,1,19.28-13.9c2.78-1.71,7-3.18,10.07,0,3.82,4,3.9,9.14,4,14.49.41,15.47-9.59,26.63-15.37,39.6-11.12,25-30,44.54-45.41,66.49-14.21,20.3-32.51,37.74-46.66,58.07-6.86,9.86-8.41,23.44-12.16,35.39-.43,1.37.38,3.13.62,4.71a44.26,44.26,0,0,0,4.5-1.85c28.92-15.74,49.36-40.72,67.34-66.88,8.49-12.35,11.5-29,19.44-42.59,14.88-25.5,35.35-46.36,55.07-68,9.54-10.46,22.24-17.94,28.85-31.53,2.82-5.79,12.09-8.2,17.17-3.62,6.21,5.59,7.49,16.2,3.25,22.58-9.46,14.24-21.91,26.44-32.11,40.24-11.95,16.18-22.8,33.19-34.15,49.82-12.32,18-26.09,35.28-36.54,54.33-8.53,15.55-12.29,33.41-5.41,51.33,1.44,3.74,4.63,4.81,8.85,2.66s9.2-3.62,12.78.23,0,8.17-2,11.6c-12.14,20.83-23.87,23.78-36,8.14-4.47-5.75-5-14.45-7.77-21.66-1.73-4.56.75-12.07-4.16-13.38s-7.37,5.94-11.17,9.09c-17.06,14.14-32.93,30.64-55,36.7-13.42,3.68-15.73-7.74-17.49-17.5-1.29-7.15-1.81-14.45-2.68-21.68-5.17,4.8-9.79,10.44-15.62,14.24-14.1,9.2-24.8,23.76-43.83,25.43-11.57,1-29.73-10.65-31.42-22.33-.66-4.52-3.76-5.85-9.07-3.91-10.93,4-22.27,6.9-33.54,9.91C1743.69,291.29,1744.08,280.09,1741.32,271.48Z" />
      <path fill={color || '#000'} d="M824.65,246c11.32-1.12,16.37,4.58,21,14.74,3.32,7.34,9.2,13.43,10.38,22.22.32,2.35,4-.37,5.25-1.86A74.81,74.81,0,0,1,882.82,264c6.65-3.63,15.34-9.15,20.73-3.82s5.14,15.21.63,23c-2.12,3.63-1.73,7,1.09,9.25,3.11,2.52,6.45,5.54,11.3,1.66,13.19-10.54,27.39-19.66,30.12-38.86,1.31-9.24,10.61-7.81,17.9-8.29,25.2-1.69,43.56,12.46,62.13,26.26.5.37,1.18,1,1.14,1.53-2.51,26.17,14.63,8.94,20.38,7.59,28.61-6.7,56.54-15.44,86.52-16.18,8.35-.21,16.42-10.48,24.68-16.05,29.48-19.89,42-51,56.4-81.61,12.9-27.45,30.34-52.73,44.94-79.43,12.88-23.56,29.89-44.18,45-66.15,3.88-5.64,10.45-7.13,14.89-2.88,4.23,4,6.71,11.42,3.09,17.23-12.54,20.14-21.07,42.35-34.73,62.05-12.35,17.82-20.68,38.37-31.42,57.37-14.83,26.24-33,50.62-44.57,78.65-6.64,16.07-7.85,33.48-11.3,50.35-2.7,13.25-7.27,26.2-11.91,38.95-1.86,5.1-8.6,5.33-12.3,3.74-4.2-1.8-7.46-6.81-4.49-12.35,8.49-15.86,5.78-33.65,8.9-50.43.07-.42-.76-1.43-.82-1.4-2.49,1.15-5.46,1.86-7.3,3.7-17.81,17.88-37.91,32.82-60.49,43.8-9.88,4.8-23.83,17.94-31.61-.44-5.77-13.63-12.63-8.18-20.33-6.16-8.71,2.28-17.31,5.06-25.85,7.93-10.16,3.42-21.77,6.53-30.67,2-7.72-3.92-6.63-15.26-4.94-24.26,1.24-6.65-5.57-6.24-8.71-9-13.92-12.12-24.16-9.49-33.58,5.42-10.39,16.47-24,31.79-44,35.13-13.61,2.29-23.8-7.67-28.68-21.28-2.61-7.28-5.53-6.85-10.21-1-3.94,5-9.16,9.15-14.42,12.79-9.24,6.39-16.16-.25-17.64-7.4-3.79-18.27-13.18-15.65-25.82-10.15s-26,9.91-39.28,14.26a12.35,12.35,0,0,1-14.75-6.06c-4.15-8.8-6.35-18.6.75-27.68C776.79,259,803.26,246,824.65,246Z" />
      <path fill={color || '#000'} d="M2162.91,273.93c-1.63-11.25,2.13-22.59,8-33.5.76-1.41.46-3.38.65-5.1a27.27,27.27,0,0,0-3.62.72Q2144.19,244,2120.43,252c-8.38,2.84-13.68,9.92-18.75,16.18a92.8,92.8,0,0,1-42.48,29.68c-12.65,4.24-13.21-11.47-13.83-19.56-1.68-21.74,5.36-41.76,15.55-61,6-11.42,11.57-23.58,23.49-29,13.29-6.08,36.91,8.71,42.08,22.18,4,10.47,12.05.52,17.78-.06,14.73-1.49,28.34-10.29,44.35-3.74,13.36,5.45,7.42,16.29,8.72,24.85.77,5.11-1.41,10.62-3.87,15.87-4.44,9.46.77,11.59,9.18,9.27,3.76-1,7.37-2.64,11-4,17.6-6.59,34-17.54,53.77-16.46,10.19.56,20.29,2.59,23.57,15.15,5.67,21.7,26,28,41.83,39.08,11.21,7.85,23.08,15.09,21.08,31.76-1,8.18-6.58,12.82-13,9.35-23.86-12.81-49.43-23.46-66.79-45.83-.1-.14-.28-.25-.31-.39-6.6-32.13-25.72-15.51-40.66-9.58s-29.54,12.47-45.37,16C2175.66,294.41,2163,286.54,2162.91,273.93Z" />
      <path fill={color || '#000'} d="M447.33,293.45c-9.42-2.22-6.2-9-6.48-15.28-.73-16.18-2.45-32.31-3.93-48.45-2.55-27.87-5.29-55.73-7.8-83.61-.41-4.6.29-9.3-.13-13.89-.7-7.75,2.31-13.63,10.15-12.83,8.45.87,11.78,9.76,11.3,16.15-1.64,22.09,2.68,43.62,4,65.39,1.41,22.84,4.28,45.68,3.92,68.48C458.26,277,463.33,291,447.33,293.45Z" />
      <path fill={color || '#000'} d="M1066,142c.43,5.61-1.1,10.69-6.12,13.43-5.92,3.22-9.63-1.56-13.77-4.85-6.8-5.4-16.23-6-21.89-14.36-6.52-9.61-4.33-26.31,6.24-31.23a11.46,11.46,0,0,1,6.64-.79C1043.36,105.48,1066,135.46,1066,142Z" />
      <path fill={backgroundColor || '#fff'} d="M1538.78,225.24c10.66,8,23.24,14.59,28.07,28.67,7.25,21.13-8.53,36.77-32.23,38-11.76.59-24.21,5.55-36.59,6.59-17.73,1.49-35.46,2.24-53.39.21-14.89-1.69-30.12-.36-44.94-3.75a19.12,19.12,0,0,1-2.54-1c.62-.67,1.1-1.7,1.86-2,17.18-6.06,32.6-15.88,49.62-22.57,20.91-8.21,40.29-20.29,60.45-30.45C1518.46,234.27,1528.13,230.15,1538.78,225.24Z" />
      <path fill={backgroundColor || '#fff'} d="M1604.72,188.27c3.69,2.72.32,6-.58,8.09-5.63,13.2-12.43,25.95-12.85,40.79,0,.62-1.6,1.85-1.93,1.69-1.47-.71-3.54-1.55-4-2.83-3-8.89-8.59-15.8-15.58-21.85-1-.89-1.68-4.23-1.3-4.46C1580.38,202.46,1592.42,195.47,1604.72,188.27Z" />
      <path fill={backgroundColor || '#fff'} d="M1693.63,92C1702,79.41,1709,72.46,1717,66.59c1.17-.86,2.89-1,4.36-1.42,0,.68.24,1.68-.1,2C1713.28,74.41,1705.24,81.57,1693.63,92Z" />
      <path fill={backgroundColor || '#fff'} d="M2075.55,254.14c-.64-.89-1.61-1.91-1.47-2.1a48.35,48.35,0,0,1,3.53-3.93c.44.67,1.4,1.67,1.22,1.95A38.32,38.32,0,0,1,2075.55,254.14Z" />
    </svg>
  );
};