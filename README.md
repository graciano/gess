# Gess
Grid Extremely Simple for Sass. That's it.

[![Bower version](https://badge.fury.io/bo/gess.svg)](https://badge.fury.io/bo/gess)
[![GitHub version](https://badge.fury.io/gh/graciano%2Fgess.svg)](https://badge.fury.io/gh/graciano%2Fgess)

## Install

 - With [Bower](http://bower.io/ "Font-end dependency manager"): `$ bower install graciano/gess`
 - Or just copy/paste the `_gess.scss` file in any folder of your project.

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

## License

MIT license in the license file.

## To do

 - ~~Solve the 49% bug~~
 - ~~Make a demo here~~
 - ~~Make it responsive~~
 - Maybe make it responsive
 - I don't think there is much more to do, since it is an **Extremely Simple** tool and I intend to keep it that way.
