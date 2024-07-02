import 'styled-components';
import { Theme } from './src/comon/styled/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}