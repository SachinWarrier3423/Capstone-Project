import { useEffect, useRef } from 'react';

export default function useSocket(url, onMessage) {
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket(url);
    wsRef.current.onmessage = (e) => onMessage(JSON.parse(e.data));
    return () => wsRef.current?.close();
  }, [url, onMessage]);

  return wsRef.current;
}