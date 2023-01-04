import { PropsWithChildren } from 'react';

interface ButtonProps {}

/**
 * Primary UI component for user interaction
 */
function Button({ children }: PropsWithChildren<ButtonProps>) {
    return <button type="button">{children}</button>;
}

export default Button;
