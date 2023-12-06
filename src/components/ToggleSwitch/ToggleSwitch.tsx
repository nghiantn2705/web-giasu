import React from 'react';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  idToggle: string;
  readOnly: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle,
  children,
  idToggle,
  readOnly,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={idToggle}
        className="hidden"
        checked={isChecked}
        onChange={onToggle}
        disabled={readOnly}
      />
      <label htmlFor={idToggle} className="cursor-pointer">
        <div
          className={`w-10 h-6 rounded-full p-1 duration-300 ease-in-out flex items-center ${
            isChecked ? 'bg-[#144272]' : 'bg-gray-300'
          } ${readOnly ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
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
