import React from 'react';

type SkeletonProps = {
  width?: string | number; // Width of the skeleton
  height?: string | number; // Height of the skeleton
  borderRadius?: string | number; // Border radius for rounded corners
  className?: string; // Additional class names
};

const Skeleton: React.FC<SkeletonProps> = ({ 
  width = '100%', 
  height = '1rem', 
  borderRadius = '4px', 
  className 
}) => {
  return (
    <span
      className={`skeleton ${className || ''}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      }}
    />
  );
};

export default Skeleton;
