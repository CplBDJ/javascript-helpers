# javascript-helpers
Small collection of JavaScript files that make programming easier.

> I dabble in JavaScript, these scripts might be poorly written but they work for me.

| Script | Description |
| ----------- | ----------- |
| html.js | Create HTML objects in JavaScript more like in HTML. Allows adding listeners, children and attributes in a function call. |
| http.js | Simple wrapper around XMLHttpRequest. Only GET and POST methods are implemented. | 


## html.js
```javascript
let table = $table(
  $tr(
    $th('Name'),
    $th('Age')
  ),
  $tr(
    $td('John Doe'),
    $td(42),
  ),
  $tr(
    $td('Bob Smith'),
    $td(73),
  ),
  $tr(
    $td('Jane Doe'),
    $td(40)
  )
document.body.append(table);
```

## http.js
> I prefer call-backs to promises.
```javascript
let dataRequest = new HTTP('https://www.example.com/api/v1', successfulRequest, failedReuest, notFound);
dataRequest.get({id: 1});
dataRequest.get({id: 2});  // This fails, in version 1.1 and earlier.

let dataPost = new HTTP('https://www.example.com/api/v1', successfulPost, failedPost, notFound);
dataPost.post({id: 3, name:'Jane Doe', age: 40});

// You could also do a oneliner:
(new HTTP('https://www.example.com/api/v1', successfulRequest, failedReuest, notFound)).get({id:  2});
```
