"use client"

const plants = [
  { id: "arpa", name: "Arpa", image: "🌾" },
  { id: "marul", name: "Marul", image: "🥬" },
  { id: "domates", name: "Domates", image: "🍅" },
  { id: "algler", name: "Algler", image: "🌿" },
]

interface PlantSelectionProps {
  selectedPlant: string
  onPlantChange: (plant: string) => void
}

export function PlantSelection({ selectedPlant, onPlantChange }: PlantSelectionProps) {
  const selected = plants.find(p => p.id === selectedPlant) || plants[0]

  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <h3 className="text-sm font-semibold text-foreground mb-3">BİTKİ TÜRÜ</h3>
      
      <label className="sr-only" htmlFor="plant-select">Bitki seçimi</label>
      <select
        id="plant-select"
        value={selectedPlant}
        onChange={(e) => onPlantChange(e.target.value)}
        className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {plants.map((plant) => (
          <option key={plant.id} value={plant.id}>
            {plant.name}
          </option>
        ))}
      </select>

      {/* Plant Preview */}
      <div className="mt-4 flex gap-3">
        <div className="flex-1 bg-muted rounded-lg p-2 flex items-center justify-center">
          <div className="w-full h-20 bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg flex items-center justify-center">
            <span className="text-4xl">{selected.image}</span>
          </div>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors self-end">
          {selected.name}
        </button>
      </div>
    </div>
  )
}
