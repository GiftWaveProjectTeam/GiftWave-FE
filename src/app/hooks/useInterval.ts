import { useEffect, useRef } from "react";

type Callback = () => void;

const useInterval = (callback: Callback, delay: number, trigger?: boolean) => {
  const savedCallback = useRef<Callback>();

  //Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, trigger]);

  useEffect(() => {
    function tick() {
      savedCallback.current !== undefined && savedCallback.current();
    }

    if (delay !== null && trigger !== false) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, trigger]);
};

export default useInterval;
