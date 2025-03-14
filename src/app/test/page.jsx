'use client'

import { useRef  , useState} from 'react';

export default function Counter() {
  let ref = useRef(0);
  const [count, setCount] = useState(0); 

  function handleClick() {
    ref.current = ref.current + 1;
    setCount((prv)=>prv+1);
  }

  return (
    <button onClick={handleClick}>
      Click me! {count}
    </button>
  );
}