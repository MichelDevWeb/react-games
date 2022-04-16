import React from "react";
import { debounce } from "lodash";

const useDebounce = () => {
  return React.useCallback(
    debounce((nextValue) => console.log(nextValue), 1000),
    []
  );
};

export default useDebounce;
