# js-ping



## Intro

js-ping是一个简单的用来在前端检测网络是否通畅的工具。

js-ping is a simple tool used to check whether the network is smooth on the front end.



## Usage

Install the package first.

```bash
npm i js-ping
```

Import package.

```javascript
import { ping } from "js-ping";
```

Then use it.

```javascript
ping("http://localhost:5000").then(res => {
  console.log(res)
})
  .catch(err => {
  console.log(err)
})
```

If successful, the returned result is in json format.

```json
{
  "status": 200,
  "response": "Hello, World !"
}
```

If it fails, the return result is in string format.

```json
"error"
"timeout"
```



## Example

```vue
<template>
  <div id="app">
    <a href="https://github.com/Kuari/js-ping" target="_blank">js-ping</a>
  </div>
</template>

<script>
import { ping } from "js-ping";

export default {
  mounted() {
    ping("http://localhost:5000").then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  }
}
</script>
```

