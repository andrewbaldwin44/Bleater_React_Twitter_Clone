import { useEffect } from 'react';

function usePut(url, body, watching) {
  useEffect(() => {
    fetch(url, body);
  });
}

export default usePut;
