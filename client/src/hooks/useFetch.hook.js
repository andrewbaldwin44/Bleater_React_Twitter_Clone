import { useEffect } from 'react';

function useFetch(url, callback, setStatus, watchedValue = null) {
  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(callback)
        .catch(() => setStatus('error'));
  }, [watchedValue]);
}

export default useFetch;
