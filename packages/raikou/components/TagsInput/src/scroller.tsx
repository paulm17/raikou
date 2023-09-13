import React, { useEffect, useRef, useState } from "react";
import { Box } from "../../Box/src";

interface tagsInputScrollerProps {
  tags: string[];
  children: React.ReactNode;
  maxHeight: number;
}

function TagsInputScroller({
  tags,
  children,
  maxHeight,
}: tagsInputScrollerProps) {
  const [height, setHeight] = useState(0);
  const div = useRef(null);

  useEffect(() => {
    const newHeight = Math.min((div.current as any).scrollHeight, maxHeight);
    setHeight(newHeight);
  }, [tags]);

  return (
    <Box
      id="content"
      ref={div}
      className="w-full"
      style={{
        maxHeight: `${height}px`,
        overflowY: height === maxHeight ? "scroll" : "hidden",
      }}
    >
      {children}
    </Box>
  );
}

export { TagsInputScroller };

TagsInputScroller.displayName = "@raikou/core/TagsInputScroller";
