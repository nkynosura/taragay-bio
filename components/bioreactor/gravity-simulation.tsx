"use client"

import { cn } from "@/lib/utils"

const environments = [
  { id: "dunya", name: "DÜNYA", gravity: "1.0g", color: "from-blue-500 to-green-500", emoji: "🌍" },
  { id: "ay", name: "AY (Moon)", gravity: "0.16g", color: "from-gray-300 to-gray-400", emoji: "🌙" },
  { id: "mars", name: "MARS", gravity: "0.38g", color: "from-orange-500 to-red-600", emoji: "🔴" },
  { id: "iss", name: "ULUSLARARASI UZAY İSTASYONU (ISS)", gravity: "Microg", color: "from-gray-600 to-gray-800", emoji: "🛸" },
]

interface GravitySimulationProps {
  selectedEnvironment: string
  onEnvironmentChange: (env: string) => void
  customGravity: number
  onCustomGravityChange: (value: number) => void
}

export function GravitySimulation({
  selectedEnvironment,
  onEnvironmentChange,
  customGravity,
  onCustomGravityChange,
}: GravitySimulationProps) {
  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <h3 className="text-sm font-semibold text-foreground mb-3">YERÇEKİMİ SİMÜLASYONU ORTAMI</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {environments.map((env) => (
          <button
            key={env.id}
            onClick={() => onEnvironmentChange(env.id)}
            className={cn(
              "relative rounded-xl p-3 text-white overflow-hidden transition-all duration-300",
              `bg-gradient-to-br ${env.color} border`,
              selectedEnvironment === env.id
                ? "ring-2 ring-primary ring-offset-2 ring-offset-card scale-[1.03] border-white/40 shadow-lg shadow-primary/30"
                : "opacity-65 border-transparent saturate-50 hover:opacity-100 hover:saturate-100"
            )}
          >
            {selectedEnvironment === env.id && (
              <span className="absolute right-2 top-2 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-semibold">
                Seçili
              </span>
            )}
            <div className="text-center">
              <p className="font-bold text-xs">{env.name}</p>
              <p className="text-xs opacity-90">({env.gravity})</p>
              <div className="mt-2 text-3xl">{env.emoji}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Custom Gravity Slider */}
      <div className="mt-4 bg-muted rounded-xl p-4">
        <h4 className="text-xs font-semibold text-foreground mb-3">FARKLI KÜTLEÇEKİMİ BELİRLEYİNİZ</h4>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={customGravity}
            onChange={(e) => onCustomGravityChange(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
            style={{
              background: `linear-gradient(to right, #ff6b35 0%, #ff6b35 ${(customGravity / 2) * 100}%, #e0e0e0 ${(customGravity / 2) * 100}%, #e0e0e0 100%)`
            }}
          />
          <span className="text-sm font-bold text-foreground min-w-[50px] text-right">{customGravity.toFixed(1)}g</span>
        </div>
      </div>
    </div>
  )
}
