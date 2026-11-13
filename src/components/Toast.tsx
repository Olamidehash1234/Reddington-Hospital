import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'loading';
  show: boolean;
  onHide: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, show, onHide }) => {
  useEffect(() => {
    if (show) {
      if (type === 'loading') return;

      const timer = setTimeout(() => {
        onHide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, type, onHide]);

  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'loading':
        return (
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-[#176B45]';
      case 'error':
        return 'bg-[#B42318]';
      case 'loading':
        return 'bg-[#2D2D2D]';
    }
  };

  return (
    <div className="fixed right-4 top-4 z-[100] w-[calc(100vw-2rem)] max-w-[420px] sm:right-6 sm:top-6">
      <div role={type === 'error' ? 'alert' : 'status'} className={`${getBgColor()} flex items-start gap-3 rounded-lg px-4 py-4 text-white shadow-lg sm:px-5`}>
        <span className="flex-shrink-0">{getIcon()}</span>
        <p className="min-w-0 flex-1 text-[15px] font-medium leading-6">{message}</p>
        <button
          type="button"
          onClick={onHide}
          className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Dismiss notification"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      {(type === 'success' || type === 'error') && (
        <div className="h-1 w-full overflow-hidden rounded-b-lg bg-white/30">
          <div className="h-full w-full origin-left bg-white/90" style={{ animation: 'toast-progress 5s linear forwards' }}></div>
        </div>
      )}
      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
