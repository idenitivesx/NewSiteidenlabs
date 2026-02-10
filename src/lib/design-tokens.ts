/**
 * IDENLABS DESIGN SYSTEM
 *
 * Typography: Inter (headings + body) + JetBrains Mono (accents/labels)
 * This gives a clean, modern, professional feel without being sterile.
 *
 * SPACING SCALE (8px base unit):
 *   4   → micro (icon gaps, badge padding)
 *   8   → xs (inline spacing)
 *   12  → sm (compact padding)
 *   16  → md (standard padding)
 *   24  → lg (section internal padding)
 *   32  → xl (card padding, element gaps)
 *   48  → 2xl (section gaps)
 *   64  → 3xl (major section padding)
 *   96  → 4xl (hero padding, section dividers)
 *   128 → 5xl (page-level vertical rhythm)
 *
 * TYPOGRAPHY SCALE:
 *   H1: 56px / 1.1 line-height / -0.02em tracking / 700 weight
 *   H2: 40px / 1.15 / -0.01em / 700
 *   H3: 28px / 1.25 / 0 / 600
 *   H4: 20px / 1.3 / 0 / 600
 *   Body: 17px / 1.6 / 0 / 400
 *   Body sm: 15px / 1.5 / 0 / 400
 *   Label: 13px / 1.4 / 0.04em / 500 (JetBrains Mono)
 *   Caption: 14px / 1.4 / 0 / 400
 *
 * MAX WIDTHS:
 *   Prose: 640px (for readability)
 *   Content: 1120px (main content area)
 *   Wide: 1280px (full-width sections)
 *
 * COLOR SYSTEM:
 *   Primary:   #0F2B1C (deep forest) — conveys trust, permanence
 *   Secondary: #1A6B4A (rich green) — action, growth
 *   Accent:    #D4A853 (warm gold) — premium feel, CTAs
 *   Neutral:   Slate scale for text/backgrounds
 *   Surface:   #FAFAF8 (warm white, not clinical)
 *   Error:     #DC2626
 *   Success:   #16A34A
 *
 * CONTRAST RATIOS (WCAG AA minimum 4.5:1):
 *   Primary on Surface: 14.2:1  ✓
 *   Secondary on Surface: 5.8:1 ✓
 *   Accent on Primary: 6.1:1   ✓
 *   White on Secondary: 5.2:1  ✓
 *   Slate-600 on Surface: 7.1:1 ✓
 *
 * BUTTON RULES:
 *   Solid primary → high-priority actions (hero CTA, submit forms)
 *   Solid secondary → supporting actions (learn more, secondary CTA)
 *   Ghost/outline → tertiary actions (cancel, back, navigation)
 *   Never use more than 1 solid primary button per viewport
 */

export const colors = {
  primary: {
    DEFAULT: "#0F2B1C",
    50: "#F0F7F4",
    100: "#D8EDE3",
    200: "#B3DCC9",
    300: "#7FC4A5",
    400: "#4DA87E",
    500: "#1A6B4A",
    600: "#15573C",
    700: "#0F2B1C",
    800: "#0A1D13",
    900: "#06110B",
  },
  accent: {
    DEFAULT: "#D4A853",
    light: "#E8C97D",
    dark: "#B8892F",
    50: "#FDF8ED",
    100: "#FAEDCF",
    200: "#F3D99F",
    500: "#D4A853",
    700: "#B8892F",
  },
  surface: {
    DEFAULT: "#FAFAF8",
    warm: "#F5F3EF",
    card: "#FFFFFF",
    muted: "#F1EFEB",
  },
  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
} as const;
