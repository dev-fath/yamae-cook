import React from 'react';
import './button.css';
import classNames from 'classnames';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * button is disabled
   */
  disabled?: boolean;
}
1;
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      className={classNames('storybook-button', {
        'text-grayscale-500 bg-grayscale-300 border-1 border-grayscale-300 border-solid': disabled,
        'text-grayscale-900 bg-transparent border-1 border-grayscale-900 border-solid':
          !disabled && !primary,
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
