"use client"

import { Terminal, AlertTriangle, Info, ShieldAlert } from "lucide-react"

interface TelemetryPageProps {
  logs: string[]
}

export function TelemetryPage({ logs }: TelemetryPageProps) {
  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Loglar</p>
          <h2 className="mt-1 text-2xl font-semibold text-foreground">Telemetri Zaman Çizgisi</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Sistem komutları, uyarılar ve donanım loglarının gerçek zamanlı veri akışı (Data Logger).
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-black/80 backdrop-blur p-5 font-mono text-sm shadow-inner relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Terminal className="w-32 h-32 text-[#86bc25]" />
        </div>
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3 relative z-10">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="text-primary font-bold tracking-widest">TARAGAY-BİO // DATA LOGGER</span>
          <div className="ml-auto flex items-center gap-2">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs text-muted-foreground">CANLI BAĞLANTI AKTİF</span>
          </div>
        </div>
        
        <div className="space-y-3 h-[500px] overflow-y-auto custom-scrollbar pr-2 relative z-10">
          {logs.length === 0 ? (
            <div className="text-muted-foreground text-center pt-10">Sistem günlüğü boş...</div>
          ) : (
            logs.map((log, idx) => {
              let Icon = Info
              let color = "text-cyan-400"
              if (log.includes("UYARI") || log.includes("stres")) {
                 Icon = AlertTriangle
                 color = "text-yellow-400"
              } else if (log.includes("Kritik") || log.includes("Hata")) {
                 Icon = ShieldAlert
                 color = "text-red-500"
              } else if (log.includes("tamamlandı") || log.includes("aktifleştirildi") || log.includes("normalize") || log.includes("ayarlanıyor") || log.includes("güncellemesi")) {
                 color = "text-[#86bc25]"
              }

              return (
                <div key={idx} className="flex items-start gap-3 border-l-2 border-white/5 pl-3 py-2 transition-colors hover:bg-white/5 rounded-r-md">
                  <Icon className={`h-4 w-4 mt-0.5 ${color}`} />
                  <div className="flex-1 leading-relaxed">
                    <span className="text-muted-foreground text-xs mr-3 inline-block min-w-[80px]">
                      [{new Date(Date.now() - idx * 7500).toLocaleTimeString('tr-TR')}]
                    </span>
                    <span className="text-gray-300">{log}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
