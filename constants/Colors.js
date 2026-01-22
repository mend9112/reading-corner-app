const colorsRC = {
  /* Primary */
  white: '#FFFFFF',
  cream: '#ECE7DF',
  forest: '#505535',
  caramel: '#C67D43',
  ink: '#1E1E0D',

  /* Secondary */
  offWhite: '#F7F5EF',
  beige: '#D3CABA',
  sage: '#AEB8A4',
  pine: '#282D0D',
  copper: '#9E553A',
};

const navBackground = colorsRC.forest;
const iconColor = colorsRC.cream;
const btnPrimary = colorsRC.caramel;
const btnPrimaryText = colorsRC.offWhite;

export const Colors = {
  navBackground: colorsRC.forest,
  iconColor: colorsRC.cream,

  dark: {
    header: colorsRC.cream,
    subheader: colorsRC.sage,
    text: colorsRC.cream,
    background: colorsRC.forest,

    // navBackground: colorsRC.forest,
    // iconColor: colorsRC.cream,

    bubble: colorsRC.beige,
    btnPrimary: colorsRC.caramel,
    btnPrimaryText: colorsRC.offWhite
  },
  light: {
    header: colorsRC.forest,
    subheader: colorsRC.sage,
    text: colorsRC.ink,
    background: colorsRC.offWhite,
    
    // navBackground: colorsRC.forest,
    // iconColor: colorsRC.cream,

    bubble: colorsRC.beige,
    btnPrimary: colorsRC.caramel,
    btnPrimaryText: colorsRC.offWhite
  },
}