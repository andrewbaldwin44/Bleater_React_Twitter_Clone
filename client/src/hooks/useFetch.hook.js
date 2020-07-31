import React, { useEffect } from 'react';

function useFetch(url, callback) {
  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(callback);
  }, []);
}

export default useFetch;
