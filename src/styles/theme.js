export const LightTheme = {
  font: {
    family: {
      header: "Montserrat, sans-serif",
      body: "Lato, sans-serif"
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    }
  },
  color: {
    bg: "hsla(0, 0%, 100% ,1)", // Beyaz
    greybg: "hsla(0, 0%, 96% ,1)", // light gray
    midgrey: "hsla(0, 0%, 70% ,1)", // mid gray
    main: "hsla(0,0%,14%,1)", // Siyah
    type: "hsla(0,0%,39%,1)", // koyu Gri
    gold: "hsla(46,40%,61%,1)", // gold
    gold_bg: "hsla(46,40%,61%,0.05)",
    gold_border: "hsla(46,40%,61%,0.25)",
    white: "hsla(0, 0%, 100% ,1)"
  }
};

export const DarkTheme = {
  font: {
    family: {
      header: "Playfair Display, serif",
      body: "Open Sans, sans-serif"
    }
  },
  color: {
    bg: "hsla(238, 100%, 5%,1)", //koyu lacivert
    bg_low: "hsla(238, 100%, 5%, 0.8)", // Beyaz 0.8
    main: "hsla(0,0%, 100%,1)", // Beyaz
    type: "hsla(0,0%,90%,1)", // Acik Gri
    accent: "hsla(54,100%,50%,1)", // Sari
    accent2: "hsla(187,100%,50%,1)" // acik mavi
  },
  component: {
    bg: "hsla(0,0%,100%,1)", // beyaz
    type: "hsla(0,0%,0%,1)" // siyah
  },
  boxshadow: "0px 1px 30px hsla(0,0%,100%,0.2)",
  shadow_lvl1: "0px 1px 3px hsla(0,0%,0%,0.2)",
  shadow_small:
    "0px 2px 1px -1px hsla(0,0%,100%,0.2), 0px 1px 1px 0px hsla(0,0%,100%,0.14), 0px 1px 3px 0px hsla(0,0%,100%,0.12)",
  radius: "16px"
};
