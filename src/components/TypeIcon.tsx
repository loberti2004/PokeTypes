interface TypeIconProps {
  type: string
  size?: number
}

export function TypeIcon({ type, size = 64 }: TypeIconProps) {
  const typeName = type.toLowerCase()
  
  return (
    <div className="type-icon-wrapper">
      <img 
        src={`/types/${typeName}.svg`}
        alt={type}
        width={size}
        height={size}
      />
    </div>
  )
}
