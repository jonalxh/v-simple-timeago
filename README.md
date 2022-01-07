# v-simple-timeago

A simple Time Ago component for Vue to convert timestamp dates into human readable date strings (relative dates).

This Web Component works based on Javascript Intl.RelativeTimeFormat, so it will translate dates into the locale language of the browser, in next versions it will allow to define an specific locale code. Using Intl.RelativeTimeFormat allows us to reduce the dependencies and be focused on new Browser technologies, see [browser compatibility](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat).

## Setup
Add the component to your node-modules or libraries folder (soon)
```
npm i v-simple-timeago
```

Import the component into your .vue files and add it to the components section
```
import VSimpleTimeago from "v-simple-timeago"

export default {
    components: {
        VSimpleTimeago
    },
    data() {
        return {
            now: Date.now(),
            yesterday: 1628646076306
        }
    }
}
```


Use it in your template.
```
<VSimpleTimeago :date="now"></VSimpleTimeago> <!-- 0 seconds ago -->

<VSimpleTimeago :date="yesterday"></VSimpleTimeago> <!-- 1 day ago -->
```

## Props 

| Prop   |      Default      |  Definition |
|----------|:-------------:|------:|
| date      |  Date.now() | Required to display a correct date formatted |
| initialUpper |    true   |   Sets the initial letter to upper case |
| lang | undefined | Sets the language of the output relative date, if undefined it will generate with the browser language |




## Development
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
