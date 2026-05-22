import { TypeIcon } from './TypeIcon'

interface TypeBadgeListProps {
  types: string[]
  getTypeColor: (typeName: string) => string
  emptyMessage: string
  isNoEffect?: boolean
  onTypeClick?: (type: string) => void
}

export function TypeBadgeList({ types, getTypeColor, emptyMessage, isNoEffect = false, onTypeClick }: TypeBadgeListProps) {
  if (types.length === 0) {
    return <p className="no-types">{emptyMessage}</p>
  }

  return (
    <div className="type-badges">
      {types.map((type) => (
        <div
          key={type}
          className={`type-badge ${isNoEffect ? 'no-effect-badge' : ''} ${onTypeClick ? 'clickable' : ''}`}
          style={{ backgroundColor: getTypeColor(type) }}
          onClick={() => onTypeClick?.(type)}
        >
          <TypeIcon type={type} size={40} />
          <span>{type}</span>
        </div>
      ))}
    </div>
  )
}
