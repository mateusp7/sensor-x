export const ExplanationDescription = ({
  description,
}: {
  description: string
}) => {
  return (
    <p className="font-semibold text-sm text-primary-1 tracking-wide">
      {description}
    </p>
  )
}
