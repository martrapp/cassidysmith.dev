import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/400-italic.css'
import '@fontsource/atkinson-hyperlegible/700.css'
import '@fontsource/syne/variable.css'

export const typography = {
  html: {
    fontSize: '$base',
  },
  body: {
    fontFamily: '$body',
    fontSize: 'clamp(calc($body * 0.875), 3vw, $body)',
    lineHeight: '$body',
  },
  h1: {
    fontSize: '$5',
    lineHeight: '$5',
  },
  h2: {
    fontSize: '$4',
    lineHeight: '$4',
  },
  h3: {
    fontSize: '$3',
    lineHeight: '$3',
  },
  h4: {
    fontSize: '$2',
    lineHeight: '$2',
  },
  h5: {
    fontSize: '$1',
    lineHeight: '$1',
  },
  h6: {
    fontSize: '$0',
    lineHeight: '$0',
  },

  'h1, h2, h3': {
    fontFamily: '$heading',
    fontWeight: '740',
    marginTop: '$1',
    marginBottom: 'calc($0 / 2)',
  },
  'h4, h5, h6': {
    fontFamily: '$heading',
    fontWeight: '700',
    marginTop: '$0',
    marginBottom: 'calc($0 / 2)',
    '& + p': {
      marginTop: 0,
    },
  },
  'ul, ol, p, blockquote': {
    marginTop: 'calc($0 / 2)',
  },
  'h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote': {
    '&:first-child': { marginTop: 0 },
    '&:last-child': { marginBottom: 0 },
  },
  'p + p': {
    marginTop: 0,
    textIndent: '$space$0'
  },
}