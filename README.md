# React Aesthetic Overlay

A React component library for aesthetic overlay effects.


## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-pretty-overlay
```


If you're using `yarn`, in the command prompt run:

```sh
yarn add react-pretty-overlay
```



## Usage

```jsx
import React from 'react';
import { OverlayFull, OverlayUp, OverlayDown, OverlayLeft, OverlayRight } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';
```


## Overlay Full

```jsx
import React from 'react';
import { OverlayFull } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';

function App() {
  return (
    <div>
      <h1>Overlay Full Example</h1>
      <OverlayFull
        image="example.jpg"
        text="Overlay Full"
        color="#ff0000"
        transparency={0.6}
        duration="0.5s"
        height="200px"
        width="300px"
      />
    </div>
  );
}

export default App;
```


## Overlay Up

```jsx
import React from 'react';
import { OverlayUp } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';

function App() {
  return (
    <div>
      <h1>Overlay Up Example</h1>
      <OverlayUp
        image="example.jpg"
        text="Overlay Up"
        color="#00ff00"
        transparency={0.6}
        duration="0.5s"
        height="200px"
        width="300px"
      />
    </div>
  );
}

export default App;
```


## Overlay Down

```jsx
import React from 'react';
import { OverlayDown } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';

function App() {
  return (
    <div>
      <h1>Overlay Down Example</h1>
      <OverlayDown
        image="example.jpg"
        text="Overlay Down"
        color="#0000ff"
        transparency={0.6}
        duration="0.5s"
        height="200px"
        width="300px"
      />
    </div>
  );
}

export default App;
```


## Overlay Left

```jsx
import React from 'react';
import { OverlayLeft } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';

function App() {
  return (
    <div>
      <h1>Overlay Left Example</h1>
      <OverlayLeft
        image="example.jpg"
        text="Overlay Left"
        color="#ff00ff"
        transparency={0.6}
        duration="0.5s"
        height="200px"
        width="300px"
      />
    </div>
  );
}

export default App;
```


## Overlay Right

```jsx
import React from 'react';
import { OverlayRight } from 'react-pretty-overlay';
import 'react-pretty-overlay/dist/styles/overlay.css';

function App() {
  return (
    <div>
      <h1>Overlay Right Example</h1>
      <OverlayRight
        image="example.jpg"
        text="Overlay Right"
        color="#00ffff"
        transparency={0.6}
        duration="0.5s"
        height="200px"
        width="300px"
      />
    </div>
  );
}

export default App;
```