# React Zoomer Image
**React Zoomer Image** is a simple React component to zoom images. It's strongly inspired by the beautiful Medium zoom effect.

Click [here](https://zl5vw7p3km.codesandbox.io/) to try the online demo version.

## Table of contents
- [Install](#install)
- [Usage](#usage)
- [Props](#props)
- [Contributing](#contributing)
## Install
You can install **React Zoomer Image** with npm:
```
npm install react-zoomer-image
```
or with Yarn:
```
yarn add react-zoomer-image
``` 

## Usage
You just need to import the package:
```js
import { ZoomerImage } from 'react-zoomer-image';
```
and use it into your React components. e.g.
```jsx
import React, { Component } from 'react';
import { ZoomerImage } from 'react-zoomer-image';

class AwesomeComponent extends Component {
  render() {
    return (
      <div className="awesome-component">
        <ZoomerImage
          zoomId='awesome-image'
          imgAlt='Awesome Image'
          imgTitle='This is a really awesome image!'
          imgSrc='http://awesome.image/foo.jpg'
        />
      </div>
    )
  }
}
```
Then you'll just have to click on the image and enjoy the magic!

## Props
| Name     | Type   | Required | Description                                                                             |
|----------|--------|----------|-----------------------------------------------------------------------------------------|
| **zoomId**   | String | yes      | Unique key to easily distinguish the image in your page. <u>Must be unique for each image!</u>|
| **imgSrc**   | String | yes      | The source of the image you want to render.                                             |
| **imgAlt**   | String | no       | The text you want to insert into the image alt attribute. Useful to have a better SEO.  |
| **imgTitle** | String | no       | The text you want to insert into the image title attribute.                             |

## Contributing
Do you like **React Zoomer Image** and would you like to help? Feel free to fork, open issues and ask for Pull Requests! <3