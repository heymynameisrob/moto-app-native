const colour = {
  "primary": {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#889096",
    "700": "#7E868C",
    "800": "#687076",
    "900": "#11181C",
  },
  "secondary": {
    "50": "",
    "100": "",
    "200": "",
    "300": "",
    "400": "",
    "500": "",
    "600": "",
    "700": "",
    "800": "",
    "900": "",
  },
  "grey": {
    "0": "#ffffff",
    "50": "#373737",
    "100": "#353535",
    "200": "#333333",
    "300": "#2E2E2E",
    "400": "#9ca3af",
    "500": "#272727",
    "600": "#242424",
    "700": "#222222",
    "800": "#1E1E1E",
    "900": "#121212",
  },  
  "text": {
    "high": "rgba(255,255,255,1)",
    "medium": "rgba(255,255,255,0.8)",
    "low": "rgba(255,255,255,0.6)",
  }
}

const borders = {
  "radius": {
    "none": 0,
    "s": 4,
    "m": 8,
    "l": 12,
    "xl": 16,
    "xxl": 20,
    "full": 9999,   
  },
  "width": {
    "none": 0,
    "default": 1,
    "thin": 2,
    "thick": 4,
  },
  "color": {
    "default": colour.grey[600],
    "primary": colour.primary[500],
  }
}

const fontSize = {
  "largeTitle": {
    "size": 34,
    "lineHeight": 40,
    "weight": "bold"
  },
  "title1": {
    "size": 28,
    "lineHeight": 34,
    "weight": "bold"
  },
  "title2": {
    "size": 22,
    "lineHeight": 28,
    "weight": "bold"
  },
  "title3": { 
    "size": 20,
    "lineHeight": 26,
    "weight": "bold"
  },
  "headline": {
    "size": 17,
    "lineHeight": 22,
    "weight": "bold"
  },
  "body": {
    "size": 17,
    "lineHeight": 22,
    "weight": "normal"
  },
  "callout": {
    "size": 16,
    "lineHeight": 21,
    "weight": "normal"
  },
  "subhead": {  
    "size": 15,
    "lineHeight": 20,
    "weight": "normal"
  },
  "footnote": {
    "size": 13,
    "lineHeight": 18,
    "weight": "normal"
  },
  "caption1": {
    "size": 12,
    "lineHeight": 16,
    "weight": "normal"
  },
  "caption2": {
    "size": 11,
    "lineHeight": 13,
    "weight": "normal"
  }
}

const spacing = {
  "none": 0,
  "xxs": 4,
  "xs": 8,
  "s": 12,
  "m": 16,
  "l": 20,
  "xl": 24,
  "xxl": 32,
  "xxxl": 40,
  "3xl": 48,
  "4xl": 56,
  "5xl": 64,
}

const motion = {

}

export { colour, borders, fontSize, spacing, motion }