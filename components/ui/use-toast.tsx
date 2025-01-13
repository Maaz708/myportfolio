// src/components/ui/use-toast.ts
import { useState } from 'react';

type Toast = {
    id: number;
    message: string;
};

export const useToast = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message }]);
        setTimeout(() => removeToast(id), 3000); // Auto-remove after 3 seconds
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return {
        toasts,
        addToast,
        removeToast,
    };
};