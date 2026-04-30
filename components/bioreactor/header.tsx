"use client"

import { Bell, ChevronDown, LogOut, Moon, RefreshCw, Sun, UserCircle2 } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  isDarkMode: boolean
  onToggleDarkMode: () => void
  currentUserName: string
  onSwitchUser: () => void
  onGoProfile: () => void
  onLogout: () => void
}

const notifications = [
  "Sıcaklık eşiği aşıldı",
  "Sulama tamamlandı",
  "Fotoperiyot döngüsü senkronize edildi",
]

export function Header({
  isDarkMode,
  onToggleDarkMode,
  currentUserName,
  onSwitchUser,
  onGoProfile,
  onLogout,
}: HeaderProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const userInitials = currentUserName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <header className="relative h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-foreground">
        TGY BIOS - BİYOREAKTÖR KONTROL PORTALI
      </h1>
      
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
        
        {/* Notifications */}
        <button
          onClick={() => {
            setShowNotifications((prev) => !prev)
            setShowUserMenu(false)
          }}
          className="relative p-2 rounded-lg hover:bg-muted transition-colors"
        >
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        {showNotifications && (
          <div className="absolute right-24 top-14 z-20 w-72 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur">
            <p className="mb-2 text-xs uppercase tracking-wide text-[#86bc25]">Bildirimler</p>
            <ul className="space-y-2">
              {notifications.map((item) => (
                <li key={item} className="rounded-md border border-border/80 bg-background/40 px-2 py-1 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* User Avatar */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserMenu((prev) => !prev)
              setShowNotifications(false)
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#86bc25] to-green-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">{userInitials}</span>
            </div>
            <span className="hidden text-sm font-medium text-foreground xl:inline">{currentUserName}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-12 z-20 w-56 rounded-xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur">
              <button
                onClick={() => {
                  onSwitchUser()
                  setShowUserMenu(false)
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
              >
                <RefreshCw className="h-4 w-4 text-[#86bc25]" />
                Kullanıcı Değiştir
              </button>
              <button
                onClick={() => {
                  onGoProfile()
                  setShowUserMenu(false)
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
              >
                <UserCircle2 className="h-4 w-4 text-[#86bc25]" />
                Profilim
              </button>
              <button
                onClick={() => {
                  onLogout()
                  setShowUserMenu(false)
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-foreground hover:bg-muted"
              >
                <LogOut className="h-4 w-4 text-[#86bc25]" />
                Çıkış Yap
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
