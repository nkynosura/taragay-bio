"use client"

import { Home, FileText, Settings, User, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeItem: string
  onItemClick: (item: string) => void
}

const menuItems = [
  { id: "anasayfa", label: "Anasayfa", icon: Home },
  { id: "raporlar", label: "Raporlar", icon: FileText },
  { id: "ayarlar", label: "Ayarlar", icon: Settings },
  { id: "profil", label: "Profil", icon: User },
  { id: "yardim", label: "Yardım", icon: HelpCircle },
]

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col min-h-screen">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-primary">TGY</span>{" "}
            <span className="text-sidebar-foreground">BIOS</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-sidebar-accent text-sidebar-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Links */}
      <div className="p-4 border-t border-sidebar-border">
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-left">
              <User className="w-5 h-5" />
              <span>Profil</span>
            </button>
          </li>
          <li>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-left">
              <HelpCircle className="w-5 h-5" />
              <span>Yardım</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
