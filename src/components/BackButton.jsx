import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ label = 'Back' }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-sm text-[#D98969] font-medium hover:underline transition"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
}
