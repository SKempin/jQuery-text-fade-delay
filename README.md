# jQuery Text Fade Delay

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/SKempin/jQuery-text-fade-delay/blob/master/LICENSE)

Fade in a series of blockquote elements followed by a delayed cite elements, and simultaneously fade both out.

## Demo
[jQuery Text Fade Delay - Live DEMO] (https://skempin.github.io/jQuery-text-fade-delay/)


## Installation
[node.js](http://nodejs.org/download/) is required to get ``npm``.

If you would like to download the code and try it for yourself:

1. Clone the repo: `https://github.com/SKempin/jQuery-text-fade-delay.git` or `bower install jquery-text-fade-delay`
2. `cd /jQuery-text-fade-delay`
2. Install NPM packages: `npm install`
3. Build project and launch: `gulp`
4. Distilled files will be compiled into the `dist` directory


## Setup

1. Include the plugin dist CSS and JS files in your `<head>`:

	```html
	<link rel="stylesheet" href="dist/css/fader.min.css">
	<script src="dist/js/fader.min.js"></script>
	```

2. Use the following HTML structure:

    ```html
        <ul id="quotes">
            <li>
                <blockquote>Quote goes here</blockquote>
                <cite>Citation goes here</cite>
            </li>
            <li>
                <blockquote>Second quote goes here</blockquote>
                <cite>Citation goes here</cite>
            </li>
        </ul>
    ```

3. Call the plugin:

    ```javascript
        $("#quotes").fader({
    	    fadeSpeed: 750,     // blockquote fade in speed
            duration: 4000,     // duration before fading to the next blockquote
            citeDelay: 1500,    // delay until cite element fades in
            citeFadeSpeed: 1000 // cite fade in speed
    	})

    ```

## Options

Setting | Default Value | Description |
------------ | ------------ |------------ |
fadeSpeed | `500` | Blockquote fade in speed (ms)
duration | `2000` | Duration (ms) before fading to the next blockquote
citeDelay | `1200` | Delay (ms) until cite element fades in
citeFadeSpeed | `750` | Cite fade in speed (ms)


## Browser Support

- Chrome 42+
- Firefox 39+
- Safari 9+
- Internet Explorer 10+
- Edge 14+



## Author
[Stephen Kempin](http://www.stephenkempin.co.uk)

## Licence
[MIT](https://github.com/SKempin/jQuery-text-fade-delay/blob/master/LICENSE)
