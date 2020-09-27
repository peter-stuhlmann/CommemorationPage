import { useLayoutEffect, useRef, useState } from 'react';

export default function useDimensions() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    setDimensions(ref.current.getBoundingClientRect().toJSON());
  }, []);

  return [ref, dimensions];
}
