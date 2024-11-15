interface CurvedDashedLineProps {
  color?: string;
  strokeWidth?: number;
  dashArray?: string;
  className?: string;
}

export function CurvedDashedLine({
  color = '#FF0000',
  strokeWidth = 6,
  dashArray = '80,40',
  className = '',
}: CurvedDashedLineProps = {}) {
  return (
    <svg
      viewBox="0 0 900 400"
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 120 180 A 205 305 0 0 1 904 200"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
      />
    </svg>
  );
}
