import HTMLView from 'react-native-htmlview';
import {HtmlRendererProps} from './types';

export function AppHtmlRenderer({value, style, ...props}: HtmlRendererProps) {
  return <HTMLView value={value} style={style} {...props} />;
}
