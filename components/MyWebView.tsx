import WebView from 'react-native-webview';

const BASE_URI = 'https://www.eyeheart.co.kr';

function MyWebView() {
  return <WebView source={{ uri: BASE_URI }} />;
}

export default MyWebView;
