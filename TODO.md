# Horror Movie Poster Formats — TODO

This file captures the poster format ideas for the HTML5 horror movie poster project.
Each format uses the same movie data (title, director, cast, tagline) but applies a different layout, mood, and styling.

---

## 1. The Omen — Minimal Symbol Horror

**Vibe:** Psychological, ominous, slow-burn

**Layout**

* Centered minimal symbol or object (door, eye, silhouette, ritual item)
* Large title near bottom with wide letter spacing
* Tagline placed subtly near symbol or title
* Cast + director in very small text at the bottom

**Styling**

* Background: solid black, dark red, or muted green
* Colors: 1 accent color max
* Fonts: thin serif or minimal sans-serif
* Add grain, noise, or slight fade to image

**Goal**

* Create unease through simplicity and restraint

---

## 2. The Face — Character-Centric Terror

**Vibe:** Intimate, disturbing, personal

**Layout**

* Full-height close-up of a face (eyes, mouth, half-face)
* Title overlaid on the image (center or lower third)
* Tagline placed near eyes or mouth
* Cast and director stacked at bottom

**Styling**

* High contrast lighting
* Text overlays with opacity or blend modes
* Fonts: distressed sans-serif or sharp serif
* Optional blur or noise effect

**Goal**

* Make the viewer uncomfortable by confronting them directly

---

## 3. The Corridor — Environmental Horror

**Vibe:** Isolation, dread, inevitability

**Layout**

* Wide environmental shot (hallway, forest path, stairwell, empty room)
* Title centered or top-aligned
* Tagline floating in negative space
* Cast and director neatly aligned at bottom

**Styling**

* Desaturated color palette
* Heavy shadows and vignettes
* Perspective lines drawing the eye inward
* Fonts: clean, cinematic sans-serif

**Goal**

* Suggest something terrible is coming, but not yet

---

## 4. The Chaos — Aggressive Modern Horror

**Vibe:** Unstable, violent, frantic

**Layout**

* Full-bleed image with distortion or tilt
* Large broken or misaligned title typography
* Handwritten or scratched tagline
* Cast text intentionally messy or partially obscured

**Styling**

* Glitch effects (skew, jitter, blur)
* Red overlays or inverted colors
* Distressed or handwritten fonts
* Slight random rotations of text blocks

**Goal**

* Make the poster feel dangerous and out of control

---

## Implementation Notes

* Create a base HTML structure shared by all posters
* Switch poster type via CSS classes
* Randomly select both movie data and poster format
* Keep typography and layout rules tied to poster type

**Next Steps**

* Define CSS variables per poster type
* Add subtle animations (flicker, jitter, breathing)
* Optionally map poster types to sub-genres (psychological, slasher, supernatural)
