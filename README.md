li-sweetjs
==========

A set of sweet js macros used in LoL Improve *.sjs files

# Usage

## Macros

### if
The `if` keyword, is now allowed at the end of anything that is not an expression  :

```javascript
  // Works fine
  console.log('hello, world') if (4 < 5);
  
  // Drawbacks : WILL NOT WORK
  function() { } if (4 < 5); // WILL NOT WORK AFTER AN EXPRESSION
```

### unless
Introduces the `unless` keyword. This keyword is the equivalent of `if (!condition)`

```javascript
  console.log('hello, world') unless (5 < 4);
  
  unless (5 < 4) {
    var a = 8;
    console.log(a);
  }
```

### in?
`in?` keyword is used to check wether a value exists in an array or not

```javascript
1 in? [1, 2, 3] // => true
"apple" in? ["hello", "bananas"] // false
```

### << (push)
`<<` is a syntax shortcut for `push`ing a value into an `array`.

```javascript
a = [1, 2, 3]
a << 5 // a == [1, 2, 3 ,5]
```

### ||= (or assign)
`||=` is a syntax shortcut for conditional assignment `a = a || b`

```javascript
object ||= {} // equivalent to object = object || {}
```

### => (call on all)
`=>` allows a method to be called on multiple elements in a single line

```javascript
[el1, el2, el3] => on('click', function() {});

// Equivalent to
el1.on('click, function() {});
el2.on('click, function() {});
el3.on('click, function() {});
```

# Installation 

## In LoLImprove modules grunt files

```javascript
  grunt.loadNpmTasks('grunt-sweet.js');    
  
  // ...
  
  sweetjs: {                                                                                                                                                                                
      options: {                                                                                                                                                                              
        modules: ['./li-sweetjs/if', './li-sweetjs/unless', './li-sweetjs/or-assign', './li-sweetjs/push', './li-sweetjs/in', './li-sweetjs/call-on-all', './li-sweetjs/or-assign'],          
        readableNames: true                                                                                                                                                                   
      },                                                                                                                                                                                      
      // Compiles to .js or .built.js files                                                                                                                                                   
      source: {                                                                                                                                                                               
        src: [ 'build/src/*.sjs', 'build/src/**/*.sjs' ], // Depends on the project but for LoL Improve modules                                                                                                                                    
      }                                                                                                                                                                                       
    }
```
