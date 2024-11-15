export const getCardStyle = (
  index: number,
  currentIndex: number,
  testimonialsLength: number,
  windowWidth: number,
) => {
  const position = (index - currentIndex + testimonialsLength) % testimonialsLength;
  const isMobile = windowWidth < 1284;

  const translate = isMobile
    ? { x: '0%', y: `${position * 10}%` }
    : { x: `${(position - 1) * 50}%`, y: '0%' };
  const scale = isMobile ? 1 - position * 0.05 : position === 1 ? 1 : 0.9;
  const zIndex = isMobile ? 3 - position : position === 1 ? 3 : 1 - position;
  const opacity = position <= 2 ? 1 : 0;

  return {
    transform: `translate(${translate.x}, ${translate.y}) scale(${scale})`,
    zIndex,
    opacity,
    transition: 'all 0.5s ease-in-out',
  };
};

const positionClassMap: { [key: number]: string } = {
  0: 'xl:left-[20%]',
  2: 'xl:right-[20%]',
};

export const getPositionClass = (position: number, isCenter: boolean) =>
  !isCenter ? positionClassMap[position] || '' : '';
