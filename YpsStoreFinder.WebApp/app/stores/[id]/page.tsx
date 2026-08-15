'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { use } from 'react';
import AppShell from '../../../components/AppShell';
import StoreDetailsContent from '../../../components/StoreDetailsContent';
import { useLanguage } from '../../../context/LanguageContext';
import { buttonStyles } from '../../../components/ui/Button';

export default function StoreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLanguage();

  return (
    <AppShell active="stores">
      <div className="hud-grid min-h-full p-4 pb-16 sm:p-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/?view=stores" className={buttonStyles({ size: 'sm' })}><ArrowLeft className="h-4 w-4" />{t('back')}</Link>
          <div className="mt-5">
            <StoreDetailsContent storeId={id} variant="page" />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
