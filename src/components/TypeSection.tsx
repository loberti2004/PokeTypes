import { TypeBadgeList } from './TypeBadgeList'

interface TypeSectionProps {
  title: string
  description: string
  types: string[]
  getTypeColor: (typeName: string) => string
  emptyMessage: string
  additionalContent?: React.ReactNode
  onTypeClick?: (type: string) => void
}

export function TypeSection({ 
  title, 
  description, 
  types, 
  getTypeColor, 
  emptyMessage,
  additionalContent,
  onTypeClick
}: TypeSectionProps) {
  return (
    <div className="type-section">
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
      <TypeBadgeList 
        types={types} 
        getTypeColor={getTypeColor} 
        emptyMessage={emptyMessage}
        onTypeClick={onTypeClick}
      />
      {additionalContent}
    </div>
  )
}
