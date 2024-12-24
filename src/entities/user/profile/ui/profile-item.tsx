interface ProfileInfoProps {
  label: string;
  value: string | null;
}

export const ProfileItem = ({ label, value }: ProfileInfoProps) => (
  <div className="flex gap-4">
    <p className="w-1/4 font-medium py-1 text-muted-foreground text-lg">
      {label}
    </p>
    <p className="w-3/4 font-normal text-lg py-1">{value}</p>
  </div>
);
