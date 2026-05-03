import { useEffect, useState } from "react";

type TypewriterNameProps = {
  text: string;
};

const TypewriterName = ({ text }: TypewriterNameProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;
    const timeout = window.setTimeout(() => setIndex(index + 1), index < 6 ? 100 : 70);
    return () => window.clearTimeout(timeout);
  }, [index, text]);

  return (
    <span className="inline-flex items-center">
      <span>{text.slice(0, index)}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-px bg-primary align-middle animate-caret" />
    </span>
  );
};

export default TypewriterName;
