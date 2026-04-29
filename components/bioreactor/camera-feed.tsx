"use client"

import { Thermometer, Wind, CloudRain, Droplets } from "lucide-react"

interface CameraFeedProps {
  temperature: number
  humidity: number
  co2Level: number
  phLevel: number
}

export function CameraFeed({ temperature, humidity, co2Level, phLevel }: CameraFeedProps) {
  return (
    <div className="space-y-4">
      {/* Live Camera */}
      <div className="bg-card rounded-xl overflow-hidden border border-border">
        <div className="bg-primary px-4 py-2">
          <h3 className="text-sm font-semibold text-primary-foreground">CANLI KAMERA BESLEMESİ</h3>
        </div>
        <div className="relative aspect-video bg-gradient-to-b from-gray-800 to-gray-900">
          {/* Camera simulation with plant imagery */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* LED strips on sides */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-blue-200 to-white opacity-80" />
              <div className="absolute right-2 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-blue-200 to-white opacity-80" />
              
              {/* Plant area */}
              <div className="absolute inset-8 bg-gradient-to-b from-green-900/30 to-green-800/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🥬</div>
                  <p className="text-white/80 text-sm bg-black/50 px-4 py-2 rounded-lg">
                    Kamera İç görünümü
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Camera Controls */}
        <div className="flex justify-center gap-4 p-3 bg-muted">
          <button className="p-2 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition-colors">
            <Thermometer className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-card text-foreground hover:bg-secondary transition-colors">
            <Wind className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-card text-foreground hover:bg-secondary transition-colors">
            <CloudRain className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-card text-foreground hover:bg-secondary transition-colors">
            <Droplets className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Temperature */}
        <div className="rounded-xl p-4 border border-orange-300/40 bg-gradient-to-br from-orange-500/25 via-red-500/15 to-card shadow-sm shadow-orange-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-orange-100">SICAKLIK</span>
            <Thermometer className="w-4 h-4 text-orange-200" />
          </div>
          <p className="text-3xl font-bold text-orange-50">{temperature.toFixed(1)}°C</p>
        </div>

        {/* Humidity */}
        <div className="rounded-xl p-4 border border-cyan-300/40 bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-card shadow-sm shadow-cyan-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-cyan-100">NEM</span>
            <Droplets className="w-4 h-4 text-cyan-200" />
          </div>
          <p className="text-3xl font-bold text-cyan-50">%{humidity}</p>
        </div>

        {/* CO2 Level */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">CO2 SEVİYESİ</span>
          </div>
          <p className="text-3xl font-bold text-primary">{co2Level} <span className="text-lg">ppm</span></p>
        </div>

        {/* pH Level */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">BESİN ÇÖZELTİSİ (pH)</span>
          </div>
          <p className="text-3xl font-bold text-primary">{phLevel.toFixed(1)}</p>
        </div>
      </div>
    </div>
  )
}
