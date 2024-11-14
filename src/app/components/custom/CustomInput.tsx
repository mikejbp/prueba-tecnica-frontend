import { MoveRight } from 'lucide-react';

interface CustomInputProps {
  type: string;
  placeholder: string;
  width?: string;
  left?: string;
}

export function CustomInput({
  type,
  placeholder,
  width = 'w-80',
  left = '10.8rem',
}: CustomInputProps) {
  return (
    <div className="mt-6 absolute">
      <input
        type={type}
        placeholder={placeholder}
        className={`p-4 text-gray bg-white rounded-full shadow-md 2xl:${width}`}
      />
      <div
        className={`bg-red-light shadow-sm shadow-red-light max-w-12 rounded-full h-12 p-3 relative bottom-[3.3rem] left-[10.8rem] 2xl:left-[${left}]`}
      >
        <MoveRight />
      </div>
    </div>
  );
}
