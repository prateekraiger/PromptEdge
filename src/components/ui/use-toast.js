import { useState, useEffect } from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
function generateId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastStore = {
  state: {
    toasts: [],
  },
  listeners: new Set(),

  getState: () => toastStore.state,

  setState: (nextState) => {
    if (typeof nextState === "function") {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState };
    }

    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },

  subscribe: (listener) => {
    toastStore.listeners.add(listener);
    return () => {
      toastStore.listeners.delete(listener);
    };
  },
};

const toast = {
  add: (props) => {
    const id = generateId();
  const update = (props) =>
      toastStore.setState((state) => ({
        ...state,
        toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...props } : t)),
      }));
    const dismiss = (toastId = id) => {
      update({ id: toastId, open: false });
    };

    toastStore.setState((state) => ({
      ...state,
      toasts: [
        {
          ...props,
          id,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss();
          },
        },
        ...state.toasts,
      ].slice(0, TOAST_LIMIT),
    }));

    return {
      id,
      dismiss: () => dismiss(id),
      update: (props) => update({ ...props, id }),
    };
  },
  dismiss: (toastId) => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === toastId ? { ...t, open: false } : t
      ),
    }));
  },
  remove: (toastId) => {
  toastStore.setState((state) => ({
    ...state,
      toasts: state.toasts.filter((t) => t.id !== toastId),
    }));
  },
};

export function useToast() {
  const [state, setState] = useState(toastStore.getState());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe((state) => {
      setState(state);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts = [];

    state.toasts.forEach((toast) => {
      if (toast.duration === Infinity) {
        return;
      }

      const timeout = setTimeout(() => {
        toast.onOpenChange?.(false);
      }, toast.duration || 5000);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
