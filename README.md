li-sweetjs
==========

A set of sweet js macros used in LoL Improve *.sjs files

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
