import { useState, useRef, useCallback, useEffect } from 'react';
import { generatePresentationPlan, renderSlides } from '../api';

export function useGeneratePresentation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const abortControllerRef = useRef(null);

  // Cleanup on unmount: 
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const generate = useCallback(async (requestBody) => {
    // If a previous request is ongoing, abort it
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      // 1. Generate plan
      const planResponse = await generatePresentationPlan(requestBody, controller.signal);
      // If aborted, fetch will throw AbortError
      // 2. Render slides
      const slidesResponse = await renderSlides(planResponse.data, controller.signal);
      setData(slidesResponse);
      setIsLoading(false);
      abortControllerRef.current = null;
      return slidesResponse;
    } catch (err) {
      if (err.name === 'AbortError') {
        // Swallow or handle cancellation specifically
        console.warn('Generation aborted');
      } else {
        setError(err);
      }
      setIsLoading(false);
      abortControllerRef.current = null;
      throw err;
    }
  }, []);

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  }, []);

  return { generate, isLoading, error, data, cancel };
}
