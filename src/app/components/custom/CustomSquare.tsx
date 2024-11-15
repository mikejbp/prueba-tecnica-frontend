interface CustomSquareProps {
  image: string;
  alt: string;
}

export function CustomSquare({ image, alt }: CustomSquareProps) {
  return (
    <div className="flex flex-col items-center justify-around gap-4 rounded-[20px] shadow-[0px_3px_6px] shadow-gray-light p-10 transform transition-all bg-white duration-300 hover:scale-105 hover:shadow-lg">
      <img src={image} width={80} height={80} alt={alt} />
      <p className="text-gray-dark xl:text-description font-comfortaa leading-6">{alt}</p>
    </div>
  );
}
