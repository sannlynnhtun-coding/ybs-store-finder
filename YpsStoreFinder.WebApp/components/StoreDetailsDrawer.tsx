'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useCallback, useEffect, useId, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import StoreDetailsContent from './StoreDetailsContent';
import UiButton from './ui/Button';

export default function StoreDetailsDrawer({ storeId }: { storeId: string }) {
  const router = useRouter();
  const { t } = useLanguage();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeDrawer = useCallback(() => router.back(), [router]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    document.body.style.overflow = 'hidden';
    dialog?.querySelector<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>('button, [href], input, select, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [closeDrawer]);

  return (
    <div className="store-details-backdrop modal-backdrop fixed inset-0 z-[2100] flex items-end justify-end bg-ink/45 backdrop-blur-[2px] sm:p-3 lg:p-4" onMouseDown={(event) => event.target === event.currentTarget && closeDrawer()}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="store-details-drawer ui-material flex max-h-[92dvh] min-h-0 w-full flex-col overflow-hidden border border-white/60 shadow-soft sm:max-h-[calc(100dvh-1.5rem)] sm:max-w-[520px] sm:rounded-[24px]">
        <div className="store-details-drawer-handle mx-auto mt-2 h-1.5 w-12 shrink-0 rounded-full bg-muted/50 sm:hidden" aria-hidden="true" />
        <header className="flex min-h-16 shrink-0 items-center justify-between gap-4 border-b border-line/70 bg-surface/90 px-4 sm:px-5">
          <div className="min-w-0">
            <p className="hud-section-label text-store">YPS Finder</p>
            <h2 id={titleId} className="truncate text-lg font-bold text-ink">{t('storeDetails')}</h2>
          </div>
          <UiButton type="button" variant="ghost" size="icon" onClick={closeDrawer} aria-label={t('close')}>
            <X className="h-5 w-5" />
          </UiButton>
        </header>
        <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto bg-canvas/25 p-4 sm:p-5">
          <StoreDetailsContent storeId={storeId} variant="drawer" />
        </div>
      </div>
    </div>
  );
}
