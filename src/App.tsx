import './App.css'
import { TypeIcon } from './components/TypeIcon'
import { TypeDetail } from './components/TypeDetail'
import { useState } from 'react'
import pokemonTypes from './data/pokemonTypes.json'

function App() {
  const [selectedType, setSelectedType] = useState<{ name: string; color: string } | null>(null)

  if (selectedType) {
    return (
      <TypeDetail 
        type={selectedType.name} 
        color={selectedType.color}
        onBack={() => setSelectedType(null)}
      />
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Pokémon Types</h1>
        <p>Select a type</p>
      </header>
      
      <div className="type-grid">
        {pokemonTypes.map((type) => (
          <button
            key={type.name}
            className="type-card"
            style={{ backgroundColor: type.color }}
            onClick={() => setSelectedType(type)}
          >
            <TypeIcon type={type.name} size={80} />
            <span className="type-name">{type.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
