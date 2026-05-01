"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Bug, Download, MessageSquareText, Orbit, Settings2, Sprout } from "lucide-react"

const quickStartSteps = [
  {
    title: "Tohum Hazırlığı ve Yerleştirme",
    description: "Arpa veya seçili tohumu steril kapsüle yerleştirip biyoreaktör yuvasına sabitleyin.",
    icon: Sprout,
  },
  {
    title: "Simülasyon Modu Seçimi",
    description: "Deney protokolüne göre Ay, Mars veya ISS yerçekimi simülasyonunu seçin.",
    icon: Orbit,
  },
  {
    title: "Parametre Doğrulama",
    description: "RPM, sıcaklık ve nem eşiklerini kontrol ederek deneyi kontrollü biçimde başlatın.",
    icon: Settings2,
  },
]

const faqItems = [
  {
    id: "item-1",
    question: "Otomorfogenez gözlemi ne zaman başlar?",
    answer:
      "Arpa örneklerinde mikro yerçekimi stresine bağlı ilk yönelim sapmaları genellikle 48-72 saat aralığında gözlemlenir.",
  },
  {
    id: "item-2",
    question: "Besin çözeltisi pH dengesi nasıl korunur?",
    answer:
      "pH aralığı 5.6-6.2 bandında tutulur. Sensör verisine göre tampon çözelti mikro dozaj pompası ile otomatik eklenir.",
  },
  {
    id: "item-3",
    question: "Simülasyon hızı (RPM) nasıl ayarlanır?",
    answer:
      "Kontrol panelindeki RPM sürgüsü ile hız güncellenir. Deney güvenliği için değişiklikler kademeli uygulanır.",
  },
]

const supportTeam = [
  {
    name: "Musa Seyidoğlu",
    title: "Mekanik ve Sistem Mimarisi",
  },
  {
    name: "Nisa Nur Keklik",
    title: "Operasyon ve Süreç Yönetimi",
  },
]

export function HelpPage() {
  const [issueType, setIssueType] = useState("Sensör Hatası")
  const [issueNote, setIssueNote] = useState("")

  const handleSendIssue = () => {
    setIssueNote("")
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teknik Destek</p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">Operasyonel Rehber ve Yardım Merkezi</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Taragay-Bio saha operasyonları, biyoreaktör çalıştırma adımları ve hızlı hata yönetimi için tek noktadan erişim.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
        <h3 className="text-sm font-semibold text-[#86bc25]">Hızlı Başlatma ve Sistem Kalibrasyon Rehberi</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickStartSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-lg border border-border bg-card/70 p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#86bc25]/20 text-xs font-semibold text-[#86bc25]">
                    {index + 1}
                  </span>
                  <Icon className="h-4 w-4 text-[#86bc25]" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{step.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
        <h3 className="text-sm font-semibold text-[#86bc25]">SSS</h3>
        <Accordion type="single" collapsible className="mt-3">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="text-foreground hover:no-underline">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {supportTeam.map((member) => (
          <div key={member.name} className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
            <p className="text-lg font-semibold text-foreground">{member.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#86bc25]/50 bg-[#86bc25]/10 px-3 py-2 text-sm font-medium text-[#86bc25] transition-colors hover:bg-[#86bc25]/20">
              <MessageSquareText className="h-4 w-4" />
              Hızlı Mesaj Gönder
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
        <div className="flex items-center gap-2">
          <Bug className="h-4 w-4 text-[#86bc25]" />
          <h3 className="text-sm font-semibold text-[#86bc25]">Hata Bildir</h3>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          <select
            value={issueType}
            onChange={(event) => setIssueType(event.target.value)}
            className="rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-[#86bc25] focus:ring-2"
          >
            <option>Sensör Hatası</option>
            <option>Motor Takılması</option>
            <option>Veri Senkronizasyonu</option>
          </select>
          <input
            value={issueNote}
            onChange={(event) => setIssueNote(event.target.value)}
            placeholder="Kısa açıklama girin..."
            className="md:col-span-2 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-[#86bc25] focus:ring-2"
          />
        </div>
        <button
          onClick={handleSendIssue}
          className="mt-3 rounded-lg bg-[#86bc25] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#86bc25]/90"
        >
          Bildirim Gönder
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur">
        <h3 className="text-sm font-semibold text-[#86bc25]">Dokümantasyon</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-3 py-2 text-sm text-foreground hover:bg-muted">
            <Download className="h-4 w-4 text-[#86bc25]" />
            Kullanım Kılavuzu PDF
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-3 py-2 text-sm text-foreground hover:bg-muted">
            <Download className="h-4 w-4 text-[#86bc25]" />
            Bilimsel Dayanaklar
          </button>
        </div>
      </div>
    </section>
  )
}
