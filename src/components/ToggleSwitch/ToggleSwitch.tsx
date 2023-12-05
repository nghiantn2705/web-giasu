import React from 'react';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  idToggle: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle,
  children,
  idToggle,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={idToggle} // Đảm bảo ID là duy nhất cho mỗi nút chuyển đổi
        className="hidden"
        checked={isChecked}
        onChange={onToggle}
      />
      <label htmlFor={idToggle} className="cursor-pointer">
        <div
          className={`w-10 h-6 bg-gray-300 rounded-full p-1 duration-300 ease-in-out flex items-center ${
            isChecked ? 'bg-blue-tw2' : ''
          }`}
        >
          <div
            className={`toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
              isChecked ? 'translate-x-full bg-white' : ''
            }`}
          ></div>
        </div>
      </label>
      <span className="ml-2 text-sm">{children}</span>
    </div>
  );
};

export default ToggleSwitch;
