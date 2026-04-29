"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ControlPanelProps {
  isAutoMode: boolean
  onAutoModeToggle: (value: boolean) => void
  irrigationFrequency: number
  onIrrigationFrequencyChange: (value: number) => void
  nutrientN: number
  onNutrientNChange: (value: number) => void
  nutrientP: number
  onNutrientPChange: (value: number) => void
  nutrientK: number
  onNutrientKChange: (value: number) => void
  rpm: number
  onRpmChange: (value: number) => void
  orientation: string
  onOrientationChange: (value: string) => void
}

export function ControlPanel({
  isAutoMode,
  onAutoModeToggle,
  irrigationFrequency,
  onIrrigationFrequencyChange,
  nutrientN,
  onNutrientNChange,
  nutrientP,
  onNutrientPChange,
  nutrientK,
  onNutrientKChange,
  rpm,
  onRpmChange,
  orientation,
  onOrientationChange,
}: ControlPanelProps) {
  return (
    <div className="space-y-4">
      {/* Irrigation & Nutrition */}
      <div className="bg-card rounded-xl p-4 border border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4">SULAMA VE BESİN</h3>
        
        {/* Auto/Manual Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">Mod</span>
          <div className="flex items-center gap-3">
            <span className={cn("text-sm", !isAutoMode && "text-muted-foreground")}>Aut</span>
            <button
              onClick={() => onAutoModeToggle(!isAutoMode)}
              className={cn(
                "w-14 h-7 rounded-full transition-colors relative",
                isAutoMode ? "bg-accent" : "bg-muted"
              )}
            >
              <div
                className={cn(
                  "absolute w-5 h-5 bg-white rounded-full top-1 transition-all shadow-sm",
                  isAutoMode ? "left-8" : "left-1"
                )}
              />
            </button>
            <span className={cn("text-sm", isAutoMode && "text-muted-foreground")}>Manuel</span>
          </div>
        </div>

        {/* Frequency Slider */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Sıklık</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={irrigationFrequency}
            onChange={(e) => onIrrigationFrequencyChange(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
            style={{
              background: `linear-gradient(to right, #ff6b35 0%, #ff6b35 ${irrigationFrequency}%, #e0e0e0 ${irrigationFrequency}%, #e0e0e0 100%)`
            }}
          />
        </div>

        {/* Nutrient Mix Sliders */}
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">Besin Karışımı</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-6">N</span>
            <input
              type="range"
              min="0"
              max="100"
              value={nutrientN}
              onChange={(e) => onNutrientNChange(parseInt(e.target.value))}
              className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, #ff6b35 0%, #ff6b35 ${nutrientN}%, #e0e0e0 ${nutrientN}%, #e0e0e0 100%)`
              }}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-6">N</span>
            <input
              type="range"
              min="0"
              max="100"
              value={nutrientP}
              onChange={(e) => onNutrientPChange(parseInt(e.target.value))}
              className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, #ff6b35 0%, #ff6b35 ${nutrientP}%, #e0e0e0 ${nutrientP}%, #e0e0e0 100%)`
              }}
            />
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground w-6">N&apos;</span>
            <input
              type="range"
              min="0"
              max="100"
              value={nutrientK}
              onChange={(e) => onNutrientKChange(parseInt(e.target.value))}
              className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
              style={{
                background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${nutrientK}%, #e0e0e0 ${nutrientK}%, #e0e0e0 100%)`
              }}
            />
          </div>
        </div>
      </div>

      {/* Rotation & Position */}
      <div className="bg-card rounded-xl p-4 border border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4">DÖNÜŞ VE KONUM YÖNLENDİRME</h3>
        
        <div className="flex items-center gap-4">
          {/* RPM Dial */}
          <div className="relative">
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(#ff6b35 ${(rpm / 30) * 360}deg, rgba(255,255,255,0.12) ${(rpm / 30) * 360}deg 360deg)`,
              }}
            >
              <div className="absolute inset-0 rounded-full rpm-rotor" />
              <div className="h-[68px] w-[68px] rounded-full bg-card border border-border flex items-center justify-center rpm-core">
                <span className="text-2xl font-bold text-foreground">{rpm}</span>
              </div>
            </div>
          </div>
          
          {/* Reactor Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-24 bg-gradient-to-b from-green-700 to-green-900 rounded-lg border-2 border-green-600" />
              {/* Rotation arrow */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-accent">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M5 10 C 15 0, 25 0, 35 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Direction Controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onRpmChange(Math.max(0, rpm - 1))}
              className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onRpmChange(Math.min(30, rpm + 1))}
              className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-accent/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-2">RPM</p>
        
        <button className="w-full flex items-center justify-center gap-2 mt-2 py-2 bg-muted rounded-lg hover:bg-secondary transition-colors">
          <ChevronDown className="w-4 h-4 text-foreground" />
        </button>

        {/* Orientation Buttons */}
        <div className="flex gap-2 mt-4">
          {["Dikey", "Yatay", "45 Derece"].map((opt) => (
            <button
              key={opt}
              onClick={() => onOrientationChange(opt)}
              className={cn(
                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                orientation === opt
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-secondary"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
