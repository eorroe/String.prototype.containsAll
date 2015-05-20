# `String.prototype.containsAll` proposal

## Problem

Let's say I want to check whether a string has every instance of strings

In ES5
```JS
var str = 'Hello this is a string';

// Using good old indexOf
str.indexOf('Hello') > -1 && str.indexOf('is'); // true

// Using ES6 (String.prototype.includes)
str.includes('Hello') && str.includes('is'); // true
```
So what happens if I want to do this with a bunch of strings it would be tedious and long, `String.prototype.containsAll` to the rescue:

# Solution
```JS
var str = 'Hello this is a string';

str.containsAll(['Hello', 'is']); // true

//Let's add a string that it's not a part of str
str.containsAll(['Hello', 'is', 'notInString']) // false
```
So `containsAll` checks if all of the strings in the array are a part of the string that `containsAll` is being called on.

```JS
var str = 'Hello this is a string';

// Passing an array of strings where none are included in string that containsAll is called on
str.containsAll(['notInString']); // false
```

`String.prototype.containsAll` has a second parameter which is the index from where to check if any of the strings in the array are included:

```JS
var str = 'Hello this is a string';

// As before
str.containsAll(['Hello']); // true
// With Index
str.containsAll(['Hello'], 1); // false

// Multiple strings

// As before
str.containsAll(['Hello', 'is']); // true
// With Index
str.containsAll(['Hello', 'is'], 1); // false
```

Check out [`String.prototype.contains`](https://github.com/eorroe/String.prototype.contains) proposal

Here's the former discussion on [ES-Discuss](https://esdiscuss.org/topic/accepting-an-array-as-the-first-parameter-to-string-prototype-includes)
