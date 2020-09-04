import { useState } from "react";

const useLocalStorage = (label) => {
  const [storage, setStorage] = useState(label);

  return [storage, setStorage];
};

export default useLocalStorage;
