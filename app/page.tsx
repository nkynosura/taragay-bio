"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/bioreactor/sidebar"
import { Header } from "@/components/bioreactor/header"
import { PlantSelection } from "@/components/bioreactor/plant-selection"
import { GravitySimulation } from "@/components/bioreactor/gravity-simulation"
import { CameraFeed } from "@/components/bioreactor/camera-feed"
import { ControlPanel } from "@/components/bioreactor/control-panel"
import { DataTable } from "@/components/bioreactor/data-table"
import { ReportsPage } from "../components/bioreactor/reports-page"
import { ProfilePage } from "@/components/bioreactor/profile-page"
import { Menu, X } from "lucide-react"

type UserName = "Nisa" | "Musa"

const users: Record<UserName, { password: string; role: "Admin" | "Editor" }> = {
  Nisa: { password: "4691", role: "Admin" },
  Musa: { password: "4691", role: "Editor" },
}

export default function BioreactorPortal() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeMenuItem, setActiveMenuItem] = useState("anasayfa")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<UserName | null>(null)
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [authError, setAuthError] = useState("")
  
  // Plant Selection
  const [selectedPlant, setSelectedPlant] = useState("marul")
  
  // Gravity Simulation
  const [selectedEnvironment, setSelectedEnvironment] = useState("ay")
  const [customGravity, setCustomGravity] = useState(0.5)
  
  // Control Panel
  const [isAutoMode, setIsAutoMode] = useState(true)
  const [irrigationFrequency, setIrrigationFrequency] = useState(50)
  const [nutrientN, setNutrientN] = useState(60)
  const [nutrientP, setNutrientP] = useState(70)
  const [nutrientK, setNutrientK] = useState(85)
  const [rpm, setRpm] = useState(12)
  const [orientation, setOrientation] = useState("Dikey")
  
  // Sensor Data
  const [temperature, setTemperature] = useState(24.1)
  const [humidity, setHumidity] = useState(66)
  const [co2Level, setCo2Level] = useState(1198)
  const [phLevel, setPhLevel] = useState(5.7)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Simulate real-time data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => prev + (Math.random() - 0.5) * 0.2)
      setHumidity(prev => Math.max(50, Math.min(80, prev + Math.floor((Math.random() - 0.5) * 2))))
      setCo2Level(prev => Math.max(1000, Math.min(1400, prev + Math.floor((Math.random() - 0.5) * 20))))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getEnvironmentLabel = () => {
    switch (selectedEnvironment) {
      case "dunya":
        return "Dünya"
      case "ay":
        return "Ay"
      case "mars":
        return "Mars"
      case "iss":
        return "ISS"
      default:
        return "Özel"
    }
  }

  const getGravityString = () => {
    const env = selectedEnvironment
    switch (env) {
      case "dunya": return "1.0g"
      case "ay": return "0.16g"
      case "mars": return "0.38g"
      case "iss": return "Microg"
      default: return `${customGravity.toFixed(2)}g`
    }
  }

  const renderDashboard = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      {/* Left Column - Plant & Environment */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">BİTKİ VE ORTAM SEÇİMİ</h2>
        <PlantSelection
          selectedPlant={selectedPlant}
          onPlantChange={setSelectedPlant}
        />
        <GravitySimulation
          selectedEnvironment={selectedEnvironment}
          onEnvironmentChange={setSelectedEnvironment}
          customGravity={customGravity}
          onCustomGravityChange={setCustomGravity}
        />
      </div>

      {/* Center Column - Camera & Stats */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">CANLI GÖRÜNTÜ VE DURUM</h2>
        <CameraFeed
          temperature={temperature}
          humidity={humidity}
          co2Level={co2Level}
          phLevel={phLevel}
        />
      </div>

      {/* Right Column - Controls & Data */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">REAKTÖR KONTROLLERİ VE ANALİZ</h2>
        <ControlPanel
          isAutoMode={isAutoMode}
          onAutoModeToggle={setIsAutoMode}
          irrigationFrequency={irrigationFrequency}
          onIrrigationFrequencyChange={setIrrigationFrequency}
          nutrientN={nutrientN}
          onNutrientNChange={setNutrientN}
          nutrientP={nutrientP}
          onNutrientPChange={setNutrientP}
          nutrientK={nutrientK}
          onNutrientKChange={setNutrientK}
          rpm={rpm}
          onRpmChange={setRpm}
          orientation={orientation}
          onOrientationChange={setOrientation}
        />
        <DataTable
          mode={getEnvironmentLabel()}
          day={4}
          innerTemp={temperature}
          outerTemp={21}
          humidity={humidity}
          gravity={getGravityString()}
          nutrientLevel={82}
        />
      </div>
    </div>
  )

  const menuLabels: Record<string, string> = {
    anasayfa: "Anasayfa",
    raporlar: "Raporlar",
    profil: "Profil",
    yardim: "Yardım",
  }

  const renderComingSoonPage = (item: string) => (
    <section className="rounded-2xl border border-border bg-card p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Modül Durumu</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">
        {menuLabels[item] ?? "Bu sayfa"} yakında
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Bu bölüm henüz aktif değil. İçerik hazır olduğunda burada görüntülenecek.
      </p>
    </section>
  )

  const renderMainPanel = () => {
    switch (activeMenuItem) {
      case "anasayfa":
        return renderDashboard()
      case "raporlar":
        return <ReportsPage />
      case "profil":
        return <ProfilePage currentUserName={currentUser ?? "Nisa"} />
      default:
        return renderComingSoonPage(activeMenuItem)
    }
  }

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item)
    setSidebarOpen(false)
  }

  const handleLogin = () => {
    const username = usernameInput.trim() as UserName
    const isValidUser = username in users

    if (!isValidUser || users[username].password !== passwordInput.trim()) {
      setAuthError("Geçersiz kullanıcı adı veya şifre.")
      return
    }

    setCurrentUser(username)
    setAuthError("")
    setActiveMenuItem("anasayfa")
    setPasswordInput("")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setUsernameInput("")
    setPasswordInput("")
    setAuthError("")
    setSidebarOpen(false)
  }

  const handleSwitchUser = () => {
    const nextUser = currentUser === "Nisa" ? "Musa" : "Nisa"
    setCurrentUser(null)
    setUsernameInput(nextUser)
    setPasswordInput("")
    setAuthError("Kullanıcı değiştirildi. Şifreyi girerek devam edin.")
    setSidebarOpen(false)
  }

  if (!currentUser) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <section className="w-full max-w-md rounded-2xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur">
          <div className="mb-5 text-center">
            <img src="/taragay-logo.png" alt="Taragay Bio Logo" className="mx-auto h-14 w-auto object-contain" />
            <h1 className="mt-4 text-2xl font-semibold text-foreground">Taragay-Bio Giriş</h1>
            <p className="mt-1 text-sm text-muted-foreground">Dashboard erişimi için oturum açın.</p>
          </div>

          <div className="space-y-3">
            <input
              value={usernameInput}
              onChange={(event) => setUsernameInput(event.target.value)}
              placeholder="Kullanıcı adı (Nisa / Musa)"
              className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-[#86bc25] focus:ring-2"
            />
            <input
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder="Şifre"
              className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-[#86bc25] focus:ring-2"
            />
            {authError && <p className="text-xs text-amber-300">{authError}</p>}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-lg bg-[#86bc25] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#86bc25]/90"
            >
              Giriş Yap
            </button>
          </div>

          <div className="mt-4 rounded-lg border border-border/70 bg-background/40 p-3 text-xs text-muted-foreground">
            <p>Nisa / 4691</p>
            <p>Musa / 4691</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 
        transform transition-transform duration-300 lg:transform-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <Sidebar activeItem={activeMenuItem} onItemClick={handleMenuItemClick} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <Header
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          currentUserName={currentUser}
          onSwitchUser={handleSwitchUser}
          onGoProfile={() => setActiveMenuItem("profil")}
          onLogout={handleLogout}
        />
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-4 left-4 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Main Grid */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {renderMainPanel()}
        </main>
      </div>
    </div>
  )
}
