# VF GL render Core


## Installing

```bash
npm install vf-gl-core --save
```

## Usage

Including using Node:

```js
var gl = require('vf-gl-core');
```

Including in the Browser:

```html
<canvas id="stage"></canvas>
<script src="node_modules/vf-gl-core/dist/vf-gl-core.min.js"></script>
<script>
    try 
    {
        var context = vf.gl.createContext(document.getElementById('stage'));
    }
    catch(e)
    {
        console.error("Unable to create WebGL context");
    }
</script>
```

## Rebuilding

After install NPM module with `npm install`, build using:

```bash
npm run dist
```


## License

This content is released under the [MIT License](http://opensource.org/licenses/MIT).