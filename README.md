# Gess
Grid Extremely Simple for Sass. That's it. Preview with [github pages](http://graciano.github.io/gess/)

[![GitHub license](https://img.shields.io/github/license/graciano/gess.svg)](https://github.com/graciano/gess/blob/master/LICENSE)
[![Bower](https://img.shields.io/bower/v/gess.svg)](https://graciano.github.io/gess/)
[![Other Badge](https://img.shields.io/badge/much%20badge-many%20fun-yellow.svg)](https://graciano.github.io/gess/)
[![GitHub release](https://img.shields.io/github/release/graciano/gess.svg)](https://github.com/graciano/gess/releases)


## Install

 - With [Bower](http://bower.io/ "Font-end dependency manager"): `$ bower install gess`
 - Or [download](https://github.com/graciano/gess/archive/master.zip)

## Usage

Include the row mixin with these arguments:

`@include gess(<width, widhts, or yet a map explained bellow>, [optional]<size of device, for responsiveness>);`

```Sass
//You'll have to import it:
@import "path/to/gess";

/**
* And use it like this
*/
@include gess(50%, 'small');

//Or use a list of widths:
@include gess((20%, 25%, 100%, 200px));

//Or a map with the keys as string selectors and values as widths.
@include gess((
      '.info-header': 100%,
      '.call-us': 50%,
      '.address': 50%
  ), 'big');
  ```

### Customization & Hacks
You can change the device map and it's breakpoints
```Sass
$devices: (
    //the first entry SHOULD have the value 0 at it's first element
    'small': (0, 480px), 
    'medium': (480px, 1000px),
    'big': (1000px)
    //the last one SHOULD have only one element, but still a list
);
```
You can also use the `media_query` function for other purposes besides grid
```sass
.some-nice-class{
    @media #{media_query('big')}{
      padding-top: 3em; // some random css
    }
  }
```
In the `media_query` function you can set the optional second argument to `true` to use `min-device-width` instead of `min-width` as well with the max values.
```sass
    @media #{media_query('big', true)}{
      // some other css
    }
```

## License

MIT license in the license file.

## To do

 - ~~Solve the 49% bug~~
 - ~~Make a demo here~~
 - ~~Make it responsive~~
 - I don't think there is much more to do, since it is an **Extremely Simple** tool and I intend to keep it that way.
