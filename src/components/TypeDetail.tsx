import { TypeIcon } from './TypeIcon'
import { TypeSection } from './TypeSection'
import { TypeBadgeList } from './TypeBadgeList'
import './TypeDetail.css'
import typeData from '../data/typeData.json'
import pokemonTypes from '../data/pokemonTypes.json'

interface TypeDetailProps {
  type: string
  color: string
  onBack: () => void
  onTypeClick?: (type: string, color: string) => void
}

export function TypeDetail({ type, color, onBack, onTypeClick }: TypeDetailProps) {
  const data = typeData[type as keyof typeof typeData]
  
  const getTypeColor = (typeName: string) => {
    const typeInfo = pokemonTypes.find(t => t.name === typeName)
    return typeInfo?.color || '#888888'
  }

  const handleTypeClick = (clickedType: string) => {
    const clickedColor = getTypeColor(clickedType)
    onTypeClick?.(clickedType, clickedColor)
  }

  return (
    <div className="type-detail" style={{ backgroundColor: color }}>
      <button className="back-button" onClick={onBack}>
        <span className="arrow">‹</span>
        <span>Back</span>
      </button>
      
      <div className="type-detail-header">
        <TypeIcon type={type} size={120} />
        <h1>{type}</h1>
      </div>

      <div className="type-sections">
        <TypeSection
          title="Effective"
          description="Deals 2x damage to:"
          types={data.strongAgainst}
          getTypeColor={getTypeColor}
          emptyMessage="No super effective types"
          onTypeClick={handleTypeClick}
        />

        <TypeSection
          title="Not Effective"
          description="Deals 0.5x damage to:"
          types={data.weakAgainst}
          getTypeColor={getTypeColor}
          emptyMessage="No not very effective types"
          onTypeClick={handleTypeClick}
          additionalContent={
            data.noEffect.length > 0 && (
              <>
                <p className="section-description" style={{ marginTop: '1.5rem' }}>
                  Deals 0x damage to (No Effect):
                </p>
                <TypeBadgeList
                  types={data.noEffect}
                  getTypeColor={getTypeColor}
                  emptyMessage=""
                  isNoEffect={true}
                  onTypeClick={handleTypeClick}
                />
              </>
            )
          }
        />

        <TypeSection
          title="Weak To"
          description="Takes 2x damage from:"
          types={data.weaknesses}
          getTypeColor={getTypeColor}
          emptyMessage="No weaknesses"
          onTypeClick={handleTypeClick}
        />

        <TypeSection
          title="Resistant To"
          description="Takes 0.5x damage from:"
          types={data.resistances}
          getTypeColor={getTypeColor}
          emptyMessage="No resistances"
          onTypeClick={handleTypeClick}
          additionalContent={
            data.immunities.length > 0 && (
              <>
                <p className="section-description" style={{ marginTop: '1.5rem' }}>
                  Takes 0x damage from (Immune):
                </p>
                <TypeBadgeList
                  types={data.immunities}
                  getTypeColor={getTypeColor}
                  emptyMessage=""
                  isNoEffect={true}
                  onTypeClick={handleTypeClick}
                />
              </>
            )
          }
        />
      </div>
    </div>
  )
}
