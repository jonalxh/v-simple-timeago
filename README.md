# v-simple-timeago

A simple no-dependencies Time Ago component to convert complex dates into human readable date strings.

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
<VSimpleTimeago :date="now"></VSimpleTimeago>

<VSimpleTimeago :date="yesterday"></VSimpleTimeago>
```

##Props 

| Prop   |      Default      |  Definition |
|----------|:-------------:|------:|
| date      |  Date.now() | Required to display a correct date formatted |
| initialUpper |    true   |   Sets the initial letter to upper case |
|  |  |     |




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
