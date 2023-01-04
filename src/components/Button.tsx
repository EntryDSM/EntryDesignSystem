import { PropsWithChildren } from 'react';

interface ButtonProps {}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children }: PropsWithChildren<ButtonProps>) => {
    return <button type="button">{children}</button>;
};
