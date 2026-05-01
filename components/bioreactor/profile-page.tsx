"use client"

import { useEffect, useState } from "react"
import { BadgeCheck, BookOpenText, Clock3, FlaskConical, ShieldCheck } from "lucide-react"

interface ProfilePageProps {
  currentUserName: string
}

const profileConfig = {
  Nisa: {
    fullName: "Nisa Nur Keklik",
    role: "Operasyon ve Süreç Yönetimi Sorumlusu",
    permission: "Admin",
    completedExperiments: 28,
    sessionHours: 316,
    education:
      "Yalova Üniversitesi - Endüstri Mühendisliği (Lisans 2. Sınıf). Operasyon, süreç yönetimi ve proje geliştirme odaklı.",
  },
  Musa: {
    fullName: "Musa Seyidoğlu",
    role: "Mekanik ve Sistem Mimarisi Sorumlusu",
    permission: "Admin",
    completedExperiments: 17,
    sessionHours: 214,
    education:
      "Yalova Üniversitesi - Makine Mühendisliği (Lisans 4. Sınıf). Mekanik tasarım, teknik çizim ve sistem mimarisi odaklı.",
  },
}

export function ProfilePage({ currentUserName }: ProfilePageProps) {
  const profile = profileConfig[currentUserName as keyof typeof profileConfig] ?? profileConfig.Nisa
  const [liveSessionSeconds, setLiveSessionSeconds] = useState(profile.sessionHours * 3600)

  useEffect(() => {
    setLiveSessionSeconds(profile.sessionHours * 3600)
  }, [profile.sessionHours])

  useEffect(() => {
    const ticker = setInterval(() => {
      setLiveSessionSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(ticker)
  }, [])

  const hours = String(Math.floor(liveSessionSeconds / 3600)).padStart(2, "0")
  const minutes = String(Math.floor((liveSessionSeconds % 3600) / 60)).padStart(2, "0")
  const seconds = String(liveSessionSeconds % 60).padStart(2, "0")

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Profilim</p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">{profile.fullName}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#86bc25]/50 bg-[#86bc25]/10 px-3 py-1 text-xs font-semibold text-[#86bc25]">
          <ShieldCheck className="h-4 w-4" />
          Yetki: {profile.permission}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-[#86bc25]">
            <FlaskConical className="h-4 w-4" />
            <p className="text-sm font-medium">Tamamlanan Deney Sayısı</p>
          </div>
          <p className="mt-3 text-3xl font-semibold text-foreground">{profile.completedExperiments}</p>
        </div>

        <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-[#86bc25]">
            <Clock3 className="h-4 w-4" />
            <p className="text-sm font-medium">Sistemde Kalma Süresi</p>
          </div>
          <p className="mt-3 text-3xl font-semibold text-foreground">{hours}:{minutes}:{seconds}</p>
        </div>

        <div className="rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
          <div className="flex items-center gap-2 text-[#86bc25]">
            <BadgeCheck className="h-4 w-4" />
            <p className="text-sm font-medium">Aktif Proje</p>
          </div>
          <p className="mt-3 text-2xl font-semibold text-foreground">Taragay-Bio</p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
        <div className="flex items-center gap-2 text-[#86bc25]">
          <BookOpenText className="h-4 w-4" />
          <h3 className="text-sm font-semibold text-foreground">Eğitim Bilgisi</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {profile.education}
        </p>
      </div>
    </section>
  )
}
