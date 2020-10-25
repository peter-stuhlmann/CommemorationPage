import React, { useEffect } from 'react';
import { Container } from './Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';

export default function Spinner() {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(true);
    }, 1000);
    return () => {
      setShowSpinner(false);
    };
  }, []);

  return (
    showSpinner && (
      <Container fixedCenter>
        <CircularProgress />
      </Container>
    )
  );
}
