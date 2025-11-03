import { useEffect, useRef } from 'react'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const theme = useTimeBasedTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    // Disable smoothing for pixel art
    ctx.imageSmoothingEnabled = false
    ctx.imageSmoothingQuality = 'low'
    
    let animationFrameId
    let flakes = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Re-disable smoothing after resize
      ctx.imageSmoothingEnabled = false
      ctx.imageSmoothingQuality = 'low'
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Pixel art snowflake pattern (5x5 grid) - more visible
    const drawSnowflake = (x, y, size) => {
      const pixelSize = Math.max(size / 5, 2) // Minimum 2px for visibility
      ctx.fillStyle = '#60A5FA' // Brighter blue for better visibility
      
      // Center cross (thicker)
      ctx.fillRect(x - pixelSize * 2.5, y - pixelSize * 0.5, pixelSize * 5, pixelSize * 1.5)
      ctx.fillRect(x - pixelSize * 0.5, y - pixelSize * 2.5, pixelSize * 1.5, pixelSize * 5)
      
      // Diagonals
      ctx.fillRect(x - pixelSize * 2, y - pixelSize * 2, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 0.5, y - pixelSize * 2, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x - pixelSize * 2, y + pixelSize * 0.5, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 0.5, y + pixelSize * 0.5, pixelSize * 1.5, pixelSize * 1.5)
      
      // Outer points
      ctx.fillRect(x - pixelSize * 2.5, y - pixelSize * 2.5, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 1, y - pixelSize * 2.5, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x - pixelSize * 2.5, y + pixelSize * 1, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 1, y + pixelSize * 1, pixelSize * 1.5, pixelSize * 1.5)
    }

    // Pixel art star pattern (5x5 grid) - brighter and more visible
    const drawStar = (x, y, size) => {
      const pixelSize = Math.max(size / 5, 2) // Minimum 2px for visibility
      ctx.fillStyle = '#FBBF24' // Brighter golden yellow
      
      // Center point (larger)
      ctx.fillRect(x - pixelSize * 0.5, y - pixelSize * 0.5, pixelSize * 1.5, pixelSize * 1.5)
      
      // Horizontal line (thicker)
      ctx.fillRect(x - pixelSize * 2.5, y - pixelSize * 0.5, pixelSize * 2, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 0.5, y - pixelSize * 0.5, pixelSize * 2, pixelSize * 1.5)
      
      // Vertical line (thicker)
      ctx.fillRect(x - pixelSize * 0.5, y - pixelSize * 2.5, pixelSize * 1.5, pixelSize * 2)
      ctx.fillRect(x - pixelSize * 0.5, y + pixelSize * 0.5, pixelSize * 1.5, pixelSize * 2)
      
      // Diagonal points (larger)
      ctx.fillRect(x - pixelSize * 2, y - pixelSize * 2, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 0.5, y - pixelSize * 2, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x - pixelSize * 2, y + pixelSize * 0.5, pixelSize * 1.5, pixelSize * 1.5)
      ctx.fillRect(x + pixelSize * 0.5, y + pixelSize * 0.5, pixelSize * 1.5, pixelSize * 1.5)
    }

    // Flake/Star class for falling animation
    class Flake {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 12 + 10 
        this.speed = Math.random() * 1.2 + 0.3 
        this.wobble = Math.random() * 2
        this.wobbleSpeed = Math.random() * 0.02 + 0.01
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.03
      }

      update() {
        // Fall down
        this.y += this.speed
        
        // Slight horizontal wobble
        this.x += Math.sin(this.wobble) * 0.3
        this.wobble += this.wobbleSpeed
        
        // Rotation
        this.rotation += this.rotationSpeed
        
        // Reset when off screen
        if (this.y > canvas.height + 20) {
          this.y = -20
          this.x = Math.random() * canvas.width
        }
        
        // Keep x within bounds
        if (this.x < -20) this.x = canvas.width + 20
        if (this.x > canvas.width + 20) this.x = -20
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        
        const isDarkMode = theme.mode === 'dark'
        if (isDarkMode) {
          drawStar(0, 0, this.size)
        } else {
          drawSnowflake(0, 0, this.size)
        }
        
        ctx.restore()
      }
    }

    // Initialize flakes/stars - fewer for a more subtle effect
    const initFlakes = () => {
      flakes = []
      const count = Math.min(Math.floor(window.innerWidth / 25), 30) // Fewer flakes
      for (let i = 0; i < count; i++) {
        flakes.push(new Flake())
      }
    }

    initFlakes()

    // Animation loop
    const animate = () => {
      const isDarkMode = theme.mode === 'dark'
      
      // Clear canvas with appropriate background
      if (isDarkMode) {
        ctx.fillStyle = '#000000'
      } else {
        ctx.fillStyle = '#FFFFFF'
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw all flakes/stars
      flakes.forEach((flake) => {
        flake.update()
        flake.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    initFlakes()
    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme.mode]) // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0, // Behind content but visible
        imageRendering: 'pixelated',
        background: theme.mode === 'dark' ? '#000000' : '#FFFFFF',
        transition: 'background 0.5s ease',
        pointerEvents: 'none'
      }}
    />
  )
}

export default AnimatedBackground

