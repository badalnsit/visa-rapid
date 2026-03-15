'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const observerOptions = useMemo(() => ({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
  }), [options.threshold, options.rootMargin])

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      observerOptions
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [observerOptions, options.once])

  return [ref, isVisible] as const
}

export default useScrollAnimation
