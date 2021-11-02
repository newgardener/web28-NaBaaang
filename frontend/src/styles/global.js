import { createGlobalStyle, css } from 'styled-components';
import notoSansLight from '@/assets/fonts/NotoSansKR-Light.otf';
import notoSansMedium from '@/assets/fonts/NotoSansKR-Medium.otf';
import notoSansBold from '@/assets/fonts/NotoSansKR-Bold.otf';

const fontMixin = (fontName, fontUrl) => css`
    @font-face {
        font-family: ${fontName};
        src: local(${fontName}), url(${fontUrl}) format('opentype');
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  ${fontMixin('notoSansLight', notoSansLight)}
  ${fontMixin('notoSansMedium', notoSansMedium)}
  ${fontMixin('notoSansBold', notoSansBold)}
`;

export default GlobalStyle;
