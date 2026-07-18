---
name: Kinetic HUD
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f25'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  data-value:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for the high-performance gaming demographic, positioning the interface as a premium command center rather than a standard web utility. The brand personality is technical, precise, and authoritative, mimicking the aesthetic of advanced telemetry systems and high-end hardware diagnostic tools.

The design style utilizes **Glassmorphism** combined with **Sci-Fi HUD** elements. It relies on deep layered backgrounds, high-contrast neon accents, and functional translucency. The interface should feel like an emissive display: elements don't just sit on the screen; they appear powered by a light source. Visual density is balanced by strict grid alignment and "data-first" information hierarchy, ensuring that despite the decorative glows, the utility remains uncompromised.

## Colors
The palette is rooted in a "Void Black" foundation to maximize the luminosity of accent colors. 

- **Foundation:** Use `#0a0a0f` for the primary canvas. Layered containers use `#0f0f18` to create structural separation without losing the dark aesthetic.
- **Accents:** Electric Violet (`#8b5cf6`) serves as the primary action color, while Cyan (`#22d3ee`) is used for secondary data streams and telemetry indicators. 
- **System States:** Amber (`#f59e0b`) is reserved for warnings and moderate bottlenecks, while Magenta (`#ec4899`) is used for critical failures or hardware redlines.
- **Glass Effects:** Surfaces use a semi-transparent white alpha (`0.04`) paired with a `backdrop-filter: blur(12px)` to simulate high-tech polycarbonate screens.

## Typography
The typography system uses a mix of geometric expression and technical precision.

- **Display & Headlines:** Use **Space Grotesk** (serving as a modern, accessible alternative to Orbitron) for a futuristic, wide-set look. Headlines should often use uppercase styling with slight letter spacing to mimic industrial labeling.
- **Body Text:** **Manrope** provides a balanced, highly legible contrast for long-form descriptions or hardware specs, maintaining a professional tone.
- **Data & Telemetry:** **JetBrains Mono** is used for all numerical values, system paths, and technical labels. The monospaced nature ensures that fluctuating data points don't cause layout jitter.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 4px increments. This creates a "machined" feel where every element feels snapped into a physical chassis.

- **Desktop:** 12-column grid with 20px gutters. Use large outer margins (40px+) to allow the background gradients and blurs to frame the content.
- **Tablet:** 8-column grid. Modules should stack into dual-column cards.
- **Mobile:** 4-column grid. Padding is reduced to 16px to maximize screen real estate for data visualizations.
- **Rhythm:** Use "Component Grouping"—related data points should be housed within a single glass container with tight internal spacing (8px-12px) to emphasize their connection.

## Elevation & Depth
Depth in this design system is achieved through light and transparency rather than traditional shadows.

- **Layer 0 (Base):** `#0a0a0f` solid background.
- **Layer 1 (Glass):** Semi-transparent surfaces with 12px backdrop blur. Borders are 1px solid `rgba(255,255,255,0.1)`.
- **Layer 2 (Active/Focus):** Elements gain a "Border Glow"—a 1px solid line of the Primary or Secondary accent color accompanied by a subtle outer `box-shadow` of the same hue to simulate light bleed.
- **Overlays:** Modals use a heavier blur (20px) and a slightly darker tint to push the background further away.

## Shapes
Shapes are crisp and geometric. To maintain the "high-end hardware" feel, avoid overly rounded or "bubbly" corners.

- **Primary Corners:** 4px (`rounded-sm`) for most functional components like inputs and small buttons.
- **Containers:** 8px (`rounded-md`) for main glass panels.
- **Special Elements:** Use 45-degree "clipped corners" (via CSS clip-path) for decorative accents or primary CTA buttons to reinforce the sci-fi HUD aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Electric Violet fill with a cyan "glow" on hover. Secondary buttons are "ghost" style with a 1px border and a subtle glass fill.
- **Input Fields:** Dark backgrounds (`rgba(0,0,0,0.4)`) with a bottom-only border that glows Cyan when focused. Labels must be in JetBrains Mono at 12px.
- **Cards:** All cards must utilize the Glassmorphism specification. Header sections of cards should have a subtle horizontal separator line (1px) with a 20% opacity gradient.
- **Status Chips:** Small, pill-shaped indicators with a dot icon. The dot should have a "breathing" animation (opacity pulse) for active system monitoring.
- **Telemetry Gauges:** Use circular or linear progress bars with segmented steps rather than smooth fills to give a digital, notched appearance.
- **Dividers:** Use gradients that fade out at the edges (e.g., `linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)`).