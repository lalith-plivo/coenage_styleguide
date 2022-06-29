import React from 'react';

export interface PasswordToggleIconProps {
  reveal: boolean;
}

export type PasswordInputVisibilityToggleIcon = React.FC<PasswordToggleIconProps>;

export const PasswordToggleIcon: PasswordInputVisibilityToggleIcon = ({
  reveal,
}: PasswordToggleIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="none">
    {reveal ? (
      <>
        <path
          fill="#C2C5CE"
          fillRule="evenodd"
          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781h-.001zm4.26 4.26l1.515 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478v-.001z"
          clipRule="evenodd"
        />
        <path
          fill="#C2C5CE"
          d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
        />
      </>
    ) : (
      <>
        <path
          fill="#C2C5CE"
          stroke="#C2C5CE"
          d="M10.49 10.99a1.4 1.4 0 11-1.98-1.98 1.4 1.4 0 011.98 1.98z"
        />
        <path
          fill="#C2C5CE"
          fillRule="evenodd"
          d="M.435 10a9.504 9.504 0 0118.13 0 9.504 9.504 0 01-18.13 0zM13.3 10a3.8 3.8 0 11-7.6 0 3.8 3.8 0 017.6 0z"
          clipRule="evenodd"
        />
      </>
    )}
  </svg>
);
