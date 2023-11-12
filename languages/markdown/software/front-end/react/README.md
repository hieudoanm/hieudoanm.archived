# React

## Virtual Dom

DOM takes all the HTML elements and wraps them in an object with a tree-structure.

Virtual DOM is an abstraction of your Real DOM but it's pretty light-weight than the Real DOM.

Virtual DOM is very easy to understand if you take an example of a lift which has a mirror inside it. Suppose, 4 people enters into the lift. Now, the mirror will reflect its appearance with 4 people. Again people entering into the lift will reflect the object of mirror. And same effect happens when people exit from the lift, the mirror object gets changes (increase, decrease, or even empty). So, in reality mirror has no real object, but it only reflects its presence with outer object.

## Rendering

Rendering is a process that is triggered by a change of state in some component of your application, when a state change occurs React.

- It will collect from the root of your App all the components that requested a re-render because their state or their props changed.

Reconciliation: Once the re-rendering has happened, React has the context of two versions of the React.createElement output, the version executed before the state change occurred, and the version executed after the state has changed.

- Elements that changed type must be recreated.
- Changes within the attributes of an element are replaced, without unmounting the element.
- Upgrades within the element's children recreate all children
- Updates within child elements that use `key` as attributes are compared and only new items are represented.

Commit: After React calculated all the changes that should be made in the application tree. `react-dom` appears for the browser and react-native for the mobile platforms, which make the modifications to the browser or mobile app API (finally! 🥳).

## Life Cycle

```jsx
import React from 'react';

const App = () => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    // mounting and updating
    console.log('update 1');
    return () => {
      // unmount
      console.log('unmount 2', val);
    };
  }, [val]);

  console.log('mount 3');

  // Output:
  // mount 3
  // update 1
  // mount 3
  // unmount 2 0
  // update 1

  return (
    <div>
      <h1>React Lifecycle</h1>
      <h2>Update state: {value}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
};
```

## Class Component vs. Functional Component

- Difference syntax
- Before the introduction of hooks, functional components were stateless. However, with React 16.8, you can implement states with the useState hook to create a stateful component (just like the class component).
- Usage
  - Functional components with hooks are concise and more straightforward to code with. They perform exactly as the class component; this implies no difference between the two other than syntax.
  - By using just functional components in your project, you drastically eliminate the need to refactor the class component into a functional component when it grows.
  - Since classes confuse both people and machines, most especially the this keyword, you don't have to worry about this anymore in functional components.
  - No need for unnecessary method binding like we always do in the class component.
  - Sharing stateful logic between components is tedious in a class-based approach.

## `import`

- After compiling, the code we actually get is `return React.createElement`

## Best Practices

- Directory Layout:
  - Use `.jsx`, `.test.jsx` and `css/scss` in the same folder.
  - Use `index.jsx` to directly import
  - Avoid using `export default`, use `export` only to apply tree shaking
- CSS in JavaScript
  - Styled Components
  - Striving for the Single Responsibility of React Components
- SEO Optimation
  - Listing pages in robots.txt
  - Pre-rendering with `react-snap`
  - Server Side Rendering with Gatsby
- Optimization
  - Bundle
    - Measure: `Webpack Bundle Analyser` - `Lighthouse/Web dev`
    - Image compression
    - Using light package alternatives
    - Prefer Functions with Hooks than Classes
    - A better way to Bundle-Split
      - Vendor bundles: these are bundles installed and imported for use. `node_module` packages
      - The second is our main source bundle, which is the critical code needed to render the application
      - A bunch of other bundles split by routes
  - Performance
    - Use [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - Profiling Components with the DevTools Profiler
    - Virtualize Long Lists
    - Avoid Reconciliation
    - Use `React.Fragments` to avoid additional HTML element wrappers.
    - Avoid Inline Function Definition in the Render Function.
    - Avoid using Index as Key for map
    - Avoid Props in Initial States
    - Avoid spreading props on DOM elements
    - Memoize React Components (stateless component which will get re-render when parameters are the same)
    - CSS Animations Instead of JS Animations
