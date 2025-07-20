"use client"

import {useTheme} from "next-themes";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react"
import { motion, useInView } from "motion/react"

import { cn } from "@/lib/utils"

interface FooterWrapperProps {
  children: React.ReactNode
}

export function FooterWrapper({ children }: FooterWrapperProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

interface FooterContentProps {
  children: React.ReactNode
}

export function FooterContent({ children }: FooterContentProps) {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      variants={contentVariants}
      className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:px-8"
    >
      {children}
    </motion.div>
  )
}

interface AnimatedLogoProps {
  darkSrc: string;
  lightSrc: string;
  className?: string
}

export function AnimatedLogo({ className, darkSrc, lightSrc }: AnimatedLogoProps) {
  const { theme } = useTheme()
  const [imageSrc, setImageSrc] = useState(darkSrc)
  
  useEffect(() => {
    setImageSrc(theme === "dark" ? darkSrc : lightSrc)
  }, [theme, darkSrc, lightSrc])
  
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.a
      href="#home"
      variants={logoVariants}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className={cn("flex items-center gap-2", className)}
      aria-label="Navigate to homepage"
    >
      <Image
          src={imageSrc}
          alt="Lilian Caffier Logo"
          width={20}
          height={20}
          className="h-5 w-auto"
      />
    
    </motion.a>
  )
}

interface AnimatedSocialLinksProps {
  children: React.ReactNode
}

export function AnimatedSocialLinks({ children }: AnimatedSocialLinksProps) {
  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={socialVariants}
      className="flex items-center gap-4"
      role="list"
      aria-label="Social media links"
    >
      {children}
    </motion.div>
  )
}

interface AnimatedSocialIconProps {
  href: string
  children: React.ReactNode
  ariaLabel: string
}

export function AnimatedSocialIcon({
  href,
  children,
  ariaLabel,
}: AnimatedSocialIconProps) {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.a
      href={href}
      target={"_blank"}
      variants={iconVariants}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
      aria-label={ariaLabel}
      role="listitem"
    >
      {children}
    </motion.a>
  )
}

interface AnimatedNavigationProps {
  children: React.ReactNode
}

export function AnimatedNavigation({ children }: AnimatedNavigationProps) {
  const navVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <motion.div
      variants={navVariants}
      className="text-muted-foreground flex items-center gap-5 text-sm"
    >
      {children}
    </motion.div>
  )
}

interface AnimatedNavLinkProps {
  href: string
  children: React.ReactNode
}

export function AnimatedNavLink({ href, children }: AnimatedNavLinkProps) {
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.a
      href={href}
      variants={linkVariants}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="hover:text-foreground transition-colors duration-300"
    >
      {children}
    </motion.a>
  )
}
