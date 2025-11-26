'use client'

interface FloatingCreateButtonProps {
  onClick: () => void
}

export function FloatingCreateButton({ onClick }: FloatingCreateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-30 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-2xl shadow-2xl hover:scale-110 transition-transform duration-300 animate-glow"
    >
      +
    </button>
  )
}
