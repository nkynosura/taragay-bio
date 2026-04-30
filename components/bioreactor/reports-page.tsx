"use client"

import { BarChart3, CalendarDays, CheckCircle2, Download, TrendingUp } from "lucide-react"

const weeklyReports = [
  { day: "Pzt", production: 76, quality: 89 },
  { day: "Sal", production: 81, quality: 92 },
  { day: "Çar", production: 88, quality: 95 },
  { day: "Per", production: 84, quality: 93 },
  { day: "Cum", production: 91, quality: 96 },
  { day: "Cmt", production: 86, quality: 90 },
  { day: "Paz", production: 79, quality: 88 },
]

const quickMetrics = [
  { label: "Haftalık Verim", value: "%87", change: "+4.2%" },
  { label: "Enerji Tüketimi", value: "42 kWh", change: "-3.1%" },
  { label: "Hata Oranı", value: "%1.8", change: "-0.7%" },
]

export function ReportsPage() {
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
        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          <Download className="h-4 w-4" />
          PDF Dışa Aktar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {quickMetrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-2xl font-semibold text-foreground">{metric.value}</span>
              <span className="text-sm font-medium text-emerald-400">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Haftalık Üretim / Kalite</h3>
            </div>
            <span className="text-xs text-muted-foreground">Son 7 gün</span>
          </div>

          <div className="space-y-3">
            {weeklyReports.map((item) => (
              <div key={item.day} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.day}</span>
                  <span>
                    Üretim {item.production}% - Kalite {item.quality}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400"
                    style={{ width: `${item.production}%` }}
                  />
                </div>
              </div>
            ))}
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
                Sulama dengesi stabil
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Besin dağılımı hedef aralıkta
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Sıcaklık dalgalanması düşük
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
