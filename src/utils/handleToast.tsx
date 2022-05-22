import toast from 'react-hot-toast';

export interface ToastConfigText {
    loading: string;
    success: JSX.Element;
    error: JSX.Element;
}

const handleToast = <T,>(
    promise: Promise<T>,
    configText: ToastConfigText
): Promise<T> => toast.promise(promise, configText);

export default handleToast;
