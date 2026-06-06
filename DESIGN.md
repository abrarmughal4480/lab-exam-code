---
name: Academic Excellence System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737686'
  outline-variant: '#c3c5d7'
  surface-tint: '#1353d8'
  primary: '#003fb1'
  on-primary: '#ffffff'
  primary-container: '#1a56db'
  on-primary-container: '#d4dcff'
  inverse-primary: '#b5c4ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#474a4d'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f6265'
  on-tertiary-container: '#dbdee1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003dab'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e0e2e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built to evoke a sense of modern intellectualism and institutional reliability. It targets students, faculty, and administrative stakeholders who require a high-functioning environment that balances academic tradition with digital innovation. 

The aesthetic is **Corporate / Modern**, emphasizing clarity, accessibility, and high-quality production value. By utilizing generous whitespace and a refined color palette, the system communicates prestige without being exclusionary. The emotional response should be one of "calm confidence"—the user should feel they are in a space designed for focus, achievement, and growth.

## Colors

This color palette is anchored by "Institutional Blue" (#1A56DB), a shade chosen for its association with authority, stability, and intelligence. 

- **Primary:** Used for key actions, brand signals, and active states.
- **Secondary:** High-purity white, used for primary surface areas to maintain a clean, "paper-like" academic feel.
- **Neutral Background:** A soft, light gray (#F9FAFB) provides subtle contrast between the page background and content cards, reducing eye strain during long reading sessions.
- **Functional Accents:** Success, warning, and error states should utilize standard semantic tones but maintain the same saturation levels as the primary blue to ensure visual harmony.

## Typography

The design system utilizes **Inter** across all levels to ensure a systematic, utilitarian, and highly readable experience. Inter’s tall x-height and open counters make it ideal for the information-dense environments typical of educational platforms.

Large display headings use a tighter letter-spacing and heavier weight to project authority. Body text is set with a comfortable line height (1.5–1.6) to facilitate long-form reading of course materials and research papers. Mobile typography scales down display sizes significantly to ensure titles do not break awkwardly on narrow viewports.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to provide a structured, organized feel reminiscent of traditional academic journals, while transitioning to a **Fluid Grid** for mobile devices.

- **Desktop (1280px+):** A 12-column grid with 24px gutters and 64px outer margins. Content is typically contained within a maximum width of 1200px.
- **Tablet (768px - 1279px):** An 8-column grid with 24px gutters and 40px margins.
- **Mobile (Up to 767px):** A 4-column grid with 16px gutters and 20px margins.

Spacing follows a linear 8px scale. Spaciousness is a priority; use `lg` and `xl` spacing increments to separate distinct content sections, preventing the UI from feeling cluttered or overwhelming.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and tonal layering. The design system avoids harsh borders in favor of soft depth cues that suggest a natural stacking of information.

- **Surface Level (Level 0):** The light gray background (#F9FAFB).
- **Raised Level (Level 1):** White cards and containers use a very soft shadow (e.g., `0px 4px 20px rgba(0, 0, 0, 0.04)`) to separate content from the background.
- **Overlay Level (Level 2):** Modals, dropdowns, and active tooltips use a more pronounced, diffused shadow (`0px 12px 32px rgba(0, 0, 0, 0.08)`) to indicate temporary interaction layers.

This "soft-elevation" approach ensures the UI feels light and accessible while providing clear mental models of what elements are interactive or "above" the primary content plane.

## Shapes

The shape language is defined by modern, **Rounded** corners that soften the professional aesthetic. 

- **Standard Elements:** Buttons, input fields, and small tags use a 0.5rem (8px) radius.
- **Large Containers:** Cards, feature blocks, and modal windows use a **rounded-xl** (1.5rem / 24px) radius to create a friendly and approachable frame for academic content.

This high degree of roundedness is a deliberate choice to counteract the "coldness" often associated with enterprise or institutional software, making the platform feel like a welcoming modern campus.

## Components

### Buttons
Primary buttons are solid #1A56DB with white text, using the `label-md` type style. Secondary buttons use a primary-colored border with no fill. Interaction states (hover/active) should involve a subtle darken/lighten of the primary hue rather than a color shift.

### Cards
Cards are the primary organizational unit. They must always have a white background, Level 1 elevation, and a 24px (xl) corner radius. Internal padding should be a minimum of 24px (md).

### Input Fields
Inputs use a light gray border (Tertiary color) that shifts to a 2px Primary Blue border upon focus. Labels should be placed above the field using `label-md` for maximum legibility.

### Chips & Tags
Used for course categories or status indicators. These should have a 100px (pill) radius and use low-contrast background tints (e.g., 10% opacity of the category color) with high-contrast text.

### Lists
Data lists and course catalogs should utilize "Ghost Dividers"—using whitespace and subtle 1px border-bottom separators (#E5E7EB) rather than heavy alternating row colors.