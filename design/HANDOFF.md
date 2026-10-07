# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):
Posts → Read more → the post → All posts(goes back)

Components → React files:
PostCard → src/components/PostCard.tsx
Button → src/components/Button.tsx
Tag → src/components/Tag.tsx

Button variants → prop: variant = "primary" | "secondary"

PostCard layout: direction column (vertical), gap 12, padding 16, radius 8
PostCard: width 320, height hug, fill color/surface, stroke color/border
PostCard children: image placeholder, title, date, tags (React, TypeScript), Button "Read more"
Title: font size 20, weight Regular (400)
Date: font size 14, weight Regular (400)

Breakpoint change: phone 1 column, desktop 3 columns; header: on desktop the logo, site name and links are in one row, on phone they are stacked in a column and centered

Tokens (all ten):
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8
space/4 = 16 
space/6 = 24
radius/md = 8 