'use client';

import { useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch';

export default function ActionSetting() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <div>
      <div className={'flex flex-col gap-3'}>
        <h3>Tài khoản</h3>
        <ToggleSwitch
          idToggle={'1'}
          isChecked={isChecked1}
          onToggle={handleToggle1}
        >
          Trạng thái hồ sơ
        </ToggleSwitch>
        <ToggleSwitch
          idToggle={'2'}
          isChecked={isChecked2}
          onToggle={handleToggle2}
        >
          Hiện ảnh chứng chỉ
        </ToggleSwitch>
      </div>
    </div>
  );
}
