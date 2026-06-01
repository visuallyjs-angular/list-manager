### Template Demo

This demo serves as a template and starting point for building custom VisuallyJS applications in Angular.

#### How it works

The template demonstrates how to set up a basic interactive surface with a custom palette. It uses a declarative approach for the palette, where HTML elements with `data-vjs-*` attributes define the available node types.

#### Components Used

- `vjs-surface`: The main interactive drawing surface.
- `vjs-palette`: A directive used on a container to turn its children into draggable nodes for the surface.
- `vjs-controls`: Standard zoom and navigation tools.
- `vjs-miniview`: A small navigation window.

#### Component Options

The `vjs-surface` is configured with standard sets of options:
- `viewOptions`: Maps data to visual elements.
- `renderOptions`: Controls visual styling and layout.
- `modelOptions`: Manages the underlying data model.

The palette uses `data-vjs-type` and `data-vjs-label` attributes to define the nodes it provides.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
