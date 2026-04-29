"use client"

interface DataTableProps {
  mode: string
  day: number
  innerTemp: number
  outerTemp: number
  humidity: number
  gravity: string
  nutrientLevel: number
}

export function DataTable({
  mode,
  day,
  innerTemp,
  outerTemp,
  humidity,
  gravity,
  nutrientLevel,
}: DataTableProps) {
  const data = [
    { metric: "Mod", value: mode },
    { metric: "Gün", value: day.toString() },
    { metric: "İç Sıcaklık", value: `${innerTemp.toFixed(1)}°C` },
    { metric: "Dış Sıcaklık", value: `${outerTemp}°C` },
    { metric: "Nem Oranı", value: `%${humidity}` },
    { metric: "Kütle Çekimi", value: gravity },
    { metric: "Besin Seviyesi", value: `%${nutrientLevel}` },
  ]

  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <h3 className="text-sm font-semibold text-foreground mb-4">GELİŞMİŞ VERİ TABLOSU</h3>
      
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/70">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-foreground">Ölçüm</th>
              <th className="px-3 py-2 text-right font-semibold text-foreground">Değer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.metric} className="border-t border-border">
                <td className="px-3 py-2 text-muted-foreground">{row.metric}</td>
                <td className="px-3 py-2 text-right font-medium text-foreground">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
