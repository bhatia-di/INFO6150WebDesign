In order to convert scss files into css file, we use the command:
sass --watch ./scss/style.scss output.css

CSS Grid layout/Flexbox
Used Flex layout to change row and column direction for certification gallery

CSS Grid Layout
Used Github Project html page to set the grid layout and divided the page into sections named header, main, menu, footer

# SASS Features

1. Variables:
Used $purple as a variable throughtout the code

2. Custom Properties & Nesting:
I have used $size as a custom property and nested CSS properties. 

3. Interpolation:

Interpolation is basically an insertion. Interpolation allows us to interpolate sass expressions into a simple SASS or CSS code. Means, you can define ( some part or the whole ) selector name, property name, CSS at-rules, quoted or unquoted strings etc, as a variable. Interpolation is a new principle and it is widely used in SASS.


4. Placeholder selectors
Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output. In fact, any complex selector (the ones between the commas) that even contains a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.

Used extend to use the placeholder CSS


