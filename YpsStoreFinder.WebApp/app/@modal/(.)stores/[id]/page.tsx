import StoreDetailsDrawer from '../../../../components/StoreDetailsDrawer';

export default async function StoreDetailsModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <StoreDetailsDrawer storeId={id} />;
}
