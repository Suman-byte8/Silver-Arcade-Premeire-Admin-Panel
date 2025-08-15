import React from 'react';

export function Switch({ checked = false, onCheckedChange = () => {}, className = '' }) {
  const toggle = () => onCheckedChange(!checked);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className={
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ' +
        (checked ? 'bg-blue-600' : 'bg-gray-300') + ' ' + className
      }
    >
      <span
        className={
          'inline-block h-5 w-5 transform rounded-full bg-white transition-transform ' +
          (checked ? 'translate-x-5' : 'translate-x-1')
        }
      />
    </button>
  );
}
