"use client"

import { useEffect, useMemo, useState } from "react"
import { BarChart3, CalendarDays, CheckCircle2, Download, TrendingUp } from "lucide-react"

const initialFlowData = [
  { day: "Pzt", rootLength: 2 },
  { day: "Sal", rootLength: 5 },
  { day: "Çar", rootLength: 12 },
  { day: "Per", rootLength: 18 },
]

interface ReportsPageProps {
  temperature: number
  photoperiodHours: number
}

export function ReportsPage({ temperature, photoperiodHours }: ReportsPageProps) {
  const [flowData, setFlowData] = useState(initialFlowData)
  const [biomass, setBiomass] = useState(12.4)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowData((prev) => {
        const nextValue = Number((Math.max(1.2, Math.min(20, prev[prev.length - 1].rootLength + (Math.random() - 0.45) * 1.6))).toFixed(1))
        const timestamp = new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
        return [...prev.slice(1), { day: timestamp, rootLength: nextValue }]
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const thermalFactor = Math.max(0, temperature - 22) * 0.0009
    const photoFactor = photoperiodHours * 0.0005
    setBiomass((prev) => Number((prev + thermalFactor + photoFactor).toFixed(3)))
  }, [temperature, photoperiodHours])

  const quickMetrics = useMemo(
    () => [
      { label: "Kök Yönelim Sapması", value: "42.5°" },
      { label: "Simülasyon Modu", value: "Ay (0.16g)" },
      { label: "Toplam Fotoperiyot", value: `${photoperiodHours}h/gün` },
      { label: "Biyokütle Tahmini", value: `${biomass.toFixed(2)}g` },
    ],
    [biomass, photoperiodHours],
  )

  const handleCsvDownload = () => {
    const hourlyData = Array.from({ length: 24 }, (_, hour) => ({
      hour: `${String(hour).padStart(2, "0")}:00`,
      temperatureC: Number((21.8 + Math.sin(hour / 3) * 1.1).toFixed(1)),
      humidityPct: Number((61.5 + Math.cos(hour / 4) * 4.2).toFixed(1)),
      rpm: Number((11.6 + Math.sin(hour / 2.5) * 2.4).toFixed(1)),
    }))

    const payload = {
      seed: "Arpa (Hordeum vulgare)",
      mode: "Ay (0.16g)",
      metrics: hourlyData,
    }

    const csvRows = [
      ["Saat", "Sicaklik_C", "Nem_Pct", "RPM"].join(","),
      ...hourlyData.map((item) =>
        [item.hour, item.temperatureC, item.humidityPct, item.rpm].join(","),
      ),
    ]
    const csvContent = csvRows.join("\n")

    const csvBlob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const csvUrl = URL.createObjectURL(csvBlob)
    const csvLink = document.createElement("a")
    csvLink.href = csvUrl
    csvLink.download = "arpa-saatlik-veri.csv"
    csvLink.click()
    URL.revokeObjectURL(csvUrl)

    const jsonBlob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8;",
    })
    const jsonUrl = URL.createObjectURL(jsonBlob)
    const jsonLink = document.createElement("a")
    jsonLink.href = jsonUrl
    jsonLink.download = "arpa-saatlik-veri.json"
    jsonLink.click()
    URL.revokeObjectURL(jsonUrl)
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Raporlar</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground">Raporlar Sayfası</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Biyoreaktör performansını haftalık trendler ve özet metriklerle takip edin.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <Download className="h-4 w-4" />
            PDF Dışa Aktar
          </button>
          <button
            type="button"
            onClick={handleCsvDownload}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#86bc25]/60 bg-card/80 px-4 py-2 text-sm font-medium text-[#86bc25] transition-colors hover:bg-[#86bc25]/10"
          >
            <Download className="h-4 w-4" />
            CSV Veri İndir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickMetrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-2xl font-semibold text-foreground">{metric.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Kök Uzunluğu (mm)</h3>
            </div>
            <span className="text-xs text-muted-foreground">İlk 4 gün çimlenme</span>
          </div>

          <div className="space-y-3">
            {flowData.map((item) => (
              <div key={item.day} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.day}</span>
                  <span>{item.rootLength} mm</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400"
                    style={{ width: `${Math.min(100, (item.rootLength / 20) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-[#86bc25]/20 bg-card/60 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#86bc25]">Kök Gelişim Analizi</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Kiss (2014) prensiplerine göre mikro yerçekimi stresi analizi
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Planlanan Rapor</h3>
            </div>
            <p className="text-sm text-muted-foreground">Aylık performans özeti</p>
            <p className="mt-2 text-sm font-medium text-foreground">30 Nisan 2026 - 09:00</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Durum</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Gravitropizm sinyali zayıf
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Random Walk algoritması aktif
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                LED Spektrumu: Optimize
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Otomorfogenez gözlemleniyor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
