'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute w-96 h-96 -top-40 -left-40 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl opacity-20 animate-float"></div>
      <div className="absolute w-80 h-80 -bottom-32 -right-32 rounded-full bg-gradient-to-br from-accent to-primary blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-72 h-72 top-1/2 right-1/4 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
  )
}
