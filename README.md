# markdown-it-accessible-lists

Adds `role="list"` to `ol` and `ul` elements to insure semantics aren't lost when creating custom styles with `list-style: none;`.

## Usage

```js
const markdownIt = require("markdown-it");
const markdownAccessibleLists = require("markdown-it-accessible-lists");

let markdownLibrary = markdownIt().use(markdownAccessibleLists);
```

Unordered and ordered lists will now have the attribute `role="list"` applied.

```html
<ol role="list">
  ...
</ol>

<ul role="list">
  ...
</ul>
```
