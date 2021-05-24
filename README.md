# js-ping



## Intro

js-ping是一个简单的用来在前端检测网络是否通畅的工具。

js-ping is a simple tool used to check whether the network is smooth on the front end.



## Usage

```html
<script src="../ping.js"></script>
<script>
ping("<your-address>")
  .then((response) => {
   	// ...
  })
  .catch((error) => {
   	// ...
  })
</script>
```



## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>js-ping-exmaple</title>
</head>
<body>
<div class="container">
  The http://localhost address is requested by default, and port 80 can be started and closed to test its effect.
  <div>Response :</div>
  <div id="response"></div>
</div>

<script src="../ping.js"></script>
<script>
ping("http://localhost:80")
  .then((response) => {
    document.getElementById("response").innerHTML = JSON.stringify(response);
  })
  .catch((error) => {
    document.getElementById("response").innerHTML = error;
  })
</script>
</body>
</html>
```



