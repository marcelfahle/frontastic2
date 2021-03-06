export const StickyRightColumn = ({
  className = "",
  leftColumn,
  rightColumn
}) => (
  <div
    className={`md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1 ${className}`}
  >
    {leftColumn}

    <div className="self-baseline md:sticky md:top-0">{rightColumn}</div>
  </div>
);
