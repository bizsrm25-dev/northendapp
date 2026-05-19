---
name: North End Reserve
colors:
  surface: '#fff8f6'
  surface-dim: '#dfd9d7'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2f0'
  surface-container: '#f3ecea'
  surface-container-high: '#ede7e5'
  surface-container-highest: '#e8e1df'
  on-surface: '#1d1b1a'
  on-surface-variant: '#4f4540'
  inverse-surface: '#33302f'
  inverse-on-surface: '#f6efed'
  outline: '#81756f'
  outline-variant: '#d3c3bd'
  surface-tint: '#705a4f'
  primary: '#25160e'
  on-primary: '#ffffff'
  primary-container: '#3c2a21'
  on-primary-container: '#aa9084'
  inverse-primary: '#dec1b3'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2c1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#472508'
  on-tertiary-container: '#be8a65'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdcce'
  primary-fixed-dim: '#dec1b3'
  on-primary-fixed: '#281810'
  on-primary-fixed-variant: '#574238'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#f4bb92'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#653d1e'
  background: '#fff8f6'
  on-background: '#1d1b1a'
  surface-variant: '#e8e1df'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies a premium, sensory experience inspired by high-end coffee culture and refined hospitality. It utilizes a **Glassmorphism** aesthetic to create a sense of depth, transparency, and modern sophistication. 

The UI should feel "immersive" and "weightless," achieved through frosted glass panels that appear to float over rich, warm backgrounds. The emotional response is one of calm, artisanal quality and technological elegance. Every interaction should feel soft yet precise, echoing the meticulous craft of a master brewer.

## Colors
The palette is rooted in the organic tones of roasted espresso and steamed milk.

- **Primary (Roasted Brown):** Used for high-contrast typography and structural elements.
- **Secondary (Metallic Gold):** Reserved for subtle accents, calls-to-action, and "premium" status indicators.
- **Neutral (Creamy Latte):** The foundation color for page backgrounds, providing a warm, non-clinical canvas.
- **Glass Surfaces:** Semi-transparent white (`rgba(255, 255, 255, 0.4)`) combined with a heavy `backdrop-filter: blur(20px)` to create the signature frosted effect.

## Typography
Typography emphasizes clarity and geometric modernism. **Sora** provides a bold, contemporary feel for headlines, substituting for Poppins with a slightly more technical edge that complements the glass aesthetic. **DM Sans** ensures high legibility for body text across translucent surfaces.

To maintain accessibility on glass panels, body text should primarily use the Roasted Brown (Primary) at high opacity. Headlines may occasionally use white when placed over darker image backgrounds, provided a text-shadow or dark overlay is present.

## Layout & Spacing
The layout follows a **fluid grid** system designed for breathing room and "white space" (or "latte space"). 

- **Desktop:** 12-column grid with generous 48px margins to allow floating glass cards to feel unconstrained.
- **Mobile:** 4-column grid with 16px margins.
- **Rhythm:** An 8px base unit governs all padding and margins. Glass containers should utilize internal padding of at least 32px to ensure content doesn't feel cramped against the "frosted" edges.
- **Floating Logic:** Navigation bars and primary action menus should be "detached" from the screen edges, floating with a 16-24px margin from the top or bottom.

## Elevation & Depth
Depth is not communicated through traditional black shadows, but through **translucency and inner highlights.**

- **Z-Axis Hierarchy:** Higher elevation layers have higher background blur (up to 40px) and a brighter white inner border (1px solid `rgba(255, 255, 255, 0.6)`).
- **Inner Glow:** Every glass panel must feature a subtle top-left white highlight to simulate light catching the edge of the glass.
- **Shadows:** Use extremely soft, tinted shadows (`rgba(60, 42, 33, 0.08)`) with a large spread (30px+) to ground floating elements without making them feel "heavy."

## Shapes
This design system uses a **Rounded** shape language to evoke comfort and flow. 

Standard components (buttons, inputs) utilize a 0.5rem radius. Feature cards and primary glass panels utilize `rounded-xl` (1.5rem) to emphasize the "object-like" quality of the UI. Avoid sharp corners entirely to maintain the calm, modern atmosphere.

## Components
- **Glass Cards:** The primary container. Features a `backdrop-filter: blur(20px)`, a semi-transparent white background, and a 1px white inner border.
- **Glowing Buttons:** Primary buttons are solid Roasted Brown with a "gold pulse" or gold-tinted glow on hover. Secondary buttons use a glass background with a Golden (#D4AF37) border.
- **Navigation Bar:** A floating, pill-shaped glass element at the top of the viewport. Links use Roasted Brown with a subtle Golden underline on hover.
- **Input Fields:** Soft latte-tinted backgrounds with 1px borders that "glow" gold when focused.
- **Chips:** Small, highly-rounded glass elements used for categories (e.g., "Single Origin," "Dark Roast") with Golden text.
- **Lists:** Separated by soft, low-opacity Roasted Brown dividers (10% opacity) rather than heavy lines.