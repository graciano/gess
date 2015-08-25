# Gess
Grid Extremely Simple for Sass. That's it.

#### A warning
We have a little bug :(

## Install

 - With [Bower](http://bower.io/ "Font-end dependency manager"): `$ bower install graciano/gess`
 - Or just copy/paste the `_gess.scss` file in any folder of your project.

## Usage

Include the row mixin with these arguments:

`@include row('selector-of-row', <width, widhts, or yet a map explained bellow>, boolean for 100% with in the selector);`

```Sass
//You'll have to import it:
@import "path/to/gess";

/**
* Let's say you want to use your .row class to use as row and it's children will ocuppy half of
* it's width, you'll have to use 49% as the width, because yes, we have a bug.
*/
@include row('.row', 49%, false);

//Or use a list of widths:
@include row('.row', (20%, 25%, 100%, 200px), true);

//Or a map with the keys as string selectors and values as widths.
@include row('.info', (
      '.info-header': 100%,
      '.call-us': 49%,
      '.address': 49%
  ), true);
  ```

## License

MIT license in the license file.

## To do

 - Solve the 49% bug
 - Export to some cool dependency manager
 - Make a demo here
 - I don't think there is much more to do, since it is an **Extremely Simple** tool and I intend to keep it that way.
