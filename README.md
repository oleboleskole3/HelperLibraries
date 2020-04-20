# HelperLibraries
These are some short libraries i make to help myself.

--> [ES6Arrayfunctions.js](#ES6Arrayfunctions.js)

--> [reqSender.js](#reqSender.js)

--> [Credits](#credits)


<a name="ES6Arrayfunctions.js" />

### ES6Arrayfunctions.js
This library is made to bring the glorius ES6 *arr.*(map || filter || reduce) into older javascript versions.

To use just link either the [ES6Arrayfunctions.js](http://oleboleskole3.github.io/HelperLibraries/ES6Arrayfunctions.js) or the minified [ES6Arrayfunctionsmin.js](http://oleboleskole3.github.io/HelperLibraries/ES6Arrayfunctionsmin.js).


<a name="reqSender.js" />

### reqSender.js
This library is made to easily send get/post/put/patch/detete reqests, it has both synchronous and asynchronous support.
It is also backwards compatible, since i had a hard time not using arrow functions and other things

Remember to link either [reqSender.js](http://oleboleskole3.github.io/HelperLibraries/reqSender.js) or the minified [reqSendermin.js](http://oleboleskole3.github.io/HelperLibraries/reqSendermin.js) in your head tag

##### Syntax

To send a synchronous request to any url you use `getDataSync(method : ('get' || 'post' || 'put' || 'patch' || 'delete'), url : String); -> returns an XMLHttpRequest object with all of your data`
###### Example:
```javascript
// Send a synchronous get reqest to '/data.json' and console.log it
var data = JSON.parse(getDataSync('get', '/data.json').responseText);
console.log(data)
```

To send an asynchronous request to any url you use `getDataAsync(method : ('get' || 'post' || 'put' || 'patch' || 'delete'), url : String, callbackfn : function(request : XMLHttpRequest object with all of your data));`
###### Example:
```javascript
// Send an asynchronous get reqest to '/data.json' and console.log it
getDataAsync('get', '/data.json', function(req) {
  var data = JSON.parse(req.responseText);
  console.log(data);
});
```


<a name="credits" />

### Credits
All of the minified scripts were made though [this](https://javascript-minifier.com) js minifier.
