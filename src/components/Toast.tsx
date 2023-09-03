import { toast, Flip, TypeOptions, ToastOptions } from 'react-toastify';
import { Icon } from './Icon';
import { theme } from '../style';

interface ToastProps extends ToastOptions {
    type: Exclude<TypeOptions, 'default'>;
}

export const Toast = (message: string, { type }: ToastProps) => {
    toast(message, {
        type,
        style: {
            ...ToastType[type].style,
            color: 'white',
        },
        transition: Flip,
        icon: ToastType[type].icon,
    });
};

const ToastType = {
    success: {
        style: {
            backgroundColor: theme.color.green500,
        },
        icon: <Icon icon="Check" color="realWhite" size={24} />,
    },
    error: {
        style: {
            backgroundColor: theme.color.error,
        },
        icon: <Icon icon="Error" color="realWhite" size={24} />,
    },
    info: {
        style: {
            backgroundColor: theme.color.black500,
        },
        icon: <Icon icon="Info" color="realWhite" size={24} />,
    },
    warning: {
        style: {
            backgroundColor: theme.color.orange500,
        },
        icon: <Icon icon="Warning" color="realWhite" size={24} />,
    },
};
