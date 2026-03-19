import ApplyForm from "./components/ApplyForm";

export async function generateStaticParams() {
  return [
    { id: 'art-2026-01' },
    { id: 'music-2026-01' },
    { id: 'stem-2026-01' },
    { id: 'speech-2026-01' },
    { id: 'dance-2026-01' },
    { id: 'writing-2026-01' },
  ];
}

interface PageProps {
  params: { id: string };
}

export default function ApplyPage({ params }: PageProps) {
  return <ApplyForm competitionId={params.id} />;
}
