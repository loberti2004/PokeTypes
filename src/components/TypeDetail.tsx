import { TypeIcon } from './TypeIcon'
import './TypeDetail.css'
import typeData from '../data/typeData.json'
import pokemonTypes from '../data/pokemonTypes.json'

interface TypeDetailProps {
  type: string
  color: string
  onBack: () => void
}

export function TypeDetail({ type, color, onBack }: TypeDetailProps) {
  const data = typeData[type as keyof typeof typeData]
  
  const getTypeColor = (typeName: string) => {
    const typeInfo = pokemonTypes.find(t => t.name === typeName)
    return typeInfo?.color || '#888888'
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
        <div className="type-section">
          <h2>Effective</h2>
          <p className="section-description">Deals 2x damage to:</p>
          <div className="type-badges">
            {data.strongAgainst.length > 0 ? (
              data.strongAgainst.map((targetType) => (
                <div
                  key={targetType}
                  className="type-badge"
                  style={{ backgroundColor: getTypeColor(targetType) }}
                >
                  <TypeIcon type={targetType} size={40} />
                  <span>{targetType}</span>
                </div>
              ))
            ) : (
              <p className="no-types">No super effective types</p>
            )}
          </div>
        </div>

        <div className="type-section">
          <h2>Not Effective</h2>
          <p className="section-description">Deals 0.5x damage to:</p>
          <div className="type-badges">
            {data.weakAgainst.length > 0 ? (
              data.weakAgainst.map((targetType) => (
                <div
                  key={targetType}
                  className="type-badge"
                  style={{ backgroundColor: getTypeColor(targetType) }}
                >
                  <TypeIcon type={targetType} size={40} />
                  <span>{targetType}</span>
                </div>
              ))
            ) : (
              <p className="no-types">No not very effective types</p>
            )}
          </div>

          {data.noEffect.length > 0 && (
            <>
              <p className="section-description" style={{ marginTop: '1.5rem' }}>Deals 0x damage to (No Effect):</p>
              <div className="type-badges">
                {data.noEffect.map((targetType) => (
                  <div
                    key={targetType}
                    className="type-badge no-effect-badge"
                    style={{ backgroundColor: getTypeColor(targetType) }}
                  >
                    <TypeIcon type={targetType} size={40} />
                    <span>{targetType}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="type-section">
          <h2>Weak To</h2>
          <p className="section-description">Takes 2x damage from:</p>
          <div className="type-badges">
            {data.weaknesses.length > 0 ? (
              data.weaknesses.map((attackType) => (
                <div
                  key={attackType}
                  className="type-badge"
                  style={{ backgroundColor: getTypeColor(attackType) }}
                >
                  <TypeIcon type={attackType} size={40} />
                  <span>{attackType}</span>
                </div>
              ))
            ) : (
              <p className="no-types">No weaknesses</p>
            )}
          </div>
        </div>

        <div className="type-section">
          <h2>Resistant To</h2>
          <p className="section-description">Takes 0.5x damage from:</p>
          <div className="type-badges">
            {data.resistances.length > 0 ? (
              data.resistances.map((attackType) => (
                <div
                  key={attackType}
                  className="type-badge"
                  style={{ backgroundColor: getTypeColor(attackType) }}
                >
                  <TypeIcon type={attackType} size={40} />
                  <span>{attackType}</span>
                </div>
              ))
            ) : (
              <p className="no-types">No resistances</p>
            )}
          </div>

          {data.immunities.length > 0 && (
            <>
              <p className="section-description" style={{ marginTop: '1.5rem' }}>Takes 0x damage from (Immune):</p>
              <div className="type-badges">
                {data.immunities.map((attackType) => (
                  <div
                    key={attackType}
                    className="type-badge no-effect-badge"
                    style={{ backgroundColor: getTypeColor(attackType) }}
                  >
                    <TypeIcon type={attackType} size={40} />
                    <span>{attackType}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
