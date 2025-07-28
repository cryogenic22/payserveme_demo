import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentCount = end * easeOutQuart
      setCount(currentCount)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [end, duration, isInView])

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

export default CountUp