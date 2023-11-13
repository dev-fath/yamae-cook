import React from 'react';
import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * 프라이머리 버튼인가?
   */
  primary?: boolean;
  /**
   * 버튼 사이즈
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼 텍스트
   */
  label: string;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 버튼이 비활성상태인가?
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames('storybook-button', {
        'text-grayscale-500': disabled,
        'bg-grayscale-300': disabled,
        'border-grayscale-300': disabled,
        'text-grayscale-900': !disabled && !primary,
        'border-solid': disabled || !primary,
        'border-1': disabled || !primary,
        'border-grayscale-900': !disabled && !primary,
        'bg-transparent': !disabled && !primary,
        'bg-primary-900': !disabled && primary,
        'text-white': !disabled && primary,
        'bg-primary-900 text-white': !disabled && primary,
        'text-[12px] py-[10px] px-[16px]': size === 'small',
        'text-[14px] py-[11px] px-[20px]': size === 'medium',
        'text-[16px] py-[12px] px-[24px]': size === 'large',
      })}
      onClick={props.onClick}
    >
      {label}
    </button>
  );
};
