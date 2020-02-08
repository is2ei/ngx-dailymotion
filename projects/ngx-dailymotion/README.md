# NgxDailymotion

[![npm version](https://badge.fury.io/js/ngx-dailymotion.svg)](https://badge.fury.io/js/ngx-dailymotion)
[![CircleCI](https://circleci.com/gh/is2ei/ngx-dailymotion.svg?style=svg)](https://circleci.com/gh/is2ei/ngx-dailymotion)
[![codecov](https://codecov.io/gh/is2ei/ngx-dailymotion/branch/master/graph/badge.svg)](https://codecov.io/gh/is2ei/ngx-dailymotion)

Dailymotion player component for Angular.

## Usage

```typescript
// app.component.ts
import { NgxDailymotionModule } from 'ngx-dailymotion';
```

```html
<!-- app.component.html -->
<dailymotion
  video="xwr14q"
  uiTheme="light"
  autoplay="true"
></dailymotion>
...
<script src="https://api.dmcdn.net/all.js"></script>
```

## API

### Components

| Name | Type | Description |
| ------------- | ------------- | ------------- |
| video | string | The Dailymotion video ID that identifies the video that the player will load |
| width | string | The width of the video player. The default value is 480 |
| height | string | The height of the video player. The default value is 270 |
| autoplay | boolean | Starts the playback of the video automatically after the player loads. |
| controls | boolean | 	Whether to display the player controls or not. This parameter only removes the control bar, but keeps the startscreen and the endscreen (useful on mobile devices where the video tag needs a direct user interaction to start the playback). |
| mute | boolean | Whether to mute the video or not. |
| quality | ['auto', '240', '380', '480', '720', '1080', '1440', '2160'] | Specify the suggested playback quality for the video. |
| sharing-enable | boolean | Whether to display the sharing button or not. |
| start | number | Specify the time (in seconds) from which the video should start playing. |
| ui-logo | boolean | Whether to display the Dailymotion logo or not. |
| ui-theme | ['dark', 'light'] | Choose the default base colour theme. |
