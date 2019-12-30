ngx-dailymotion
===

[![CircleCI](https://circleci.com/gh/is2ei/ngx-dailymotion.svg?style=svg)](https://circleci.com/gh/is2ei/ngx-dailymotion)
[![codecov](https://codecov.io/gh/is2ei/ngx-dailymotion/branch/master/graph/badge.svg)](https://codecov.io/gh/is2ei/ngx-dailymotion)


Dailymotion player component for Angular, inspired by [u-wave/react-dailymotion](https://github.com/u-wave/react-dailymotion)

## Overview

```html
<dailymotion
  video=""

></dailymotion>
...
<script src="https://api.dmcdn.net/all.js"></script>
```

## API

### Components

| Name | Type | Description |
| ------------- | ------------- | ------------- |
| video | string | A string representing a video ID – of the form xID (e.g. xwr14q) for public-accessible videos or kID (e.g. kABCD1234) for private-accessible videos. |
| autoplay | bool | Starts the playback of the video automatically after the player loads. |
