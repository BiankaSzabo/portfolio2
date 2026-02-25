interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="px-3 py-1 bg-primary-light text-primary rounded-lg text-xs font-medium">
      {label}
    </span>
  );
}
