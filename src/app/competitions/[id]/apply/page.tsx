import ApplyForm from "./components/ApplyForm";

export const runtime = 'edge';

interface PageProps {
  params: { id: string };
}

export default function ApplyPage({ params }: PageProps) {
  return <ApplyForm competitionId={params.id} />;
}
