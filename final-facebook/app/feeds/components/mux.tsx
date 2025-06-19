import { WebView } from 'react-native-webview';

export function MuxPlayer() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@mux/mux-player"></script>
      </head>
      <body style="margin:0;padding:0;">
        <mux-player
          playback-id="LqkLWF9SgcIR2z8ye827Z1H3hpx9N011KkB5ww4lVJiE"
          metadata-viewer-user-id="Placeholder (optional)"
          metadata-video-title="Screen Recording 2025-06-18 at 10"
          style="width:100%;height:100%;"
        ></mux-player>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlContent }}
      style={{ height: 300, width: '100%' }}
    />
  );
}
