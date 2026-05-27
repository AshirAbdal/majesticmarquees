type Props = {
  label?: string;
  className?: string;
  ratio?: string; // e.g. 'aspect-[4/3]'
};
export default function Placeholder({ label = 'Image', className = '', ratio = 'aspect-[4/3]' }: Props) {
  return (
    <div className={`placeholder-img ${ratio} w-full ${className}`}>{label}</div>
  );
}
