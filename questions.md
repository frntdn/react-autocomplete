1. What is the difference between Component and PureComponent? Give
   an example where it might break my app. 

In PureComponent we don't use `shouldComponentUpdate` because it works automatically (React compare props and state). If we use data structures in props and state in PureComponents it will always return `false` for `shouldComponentUpdate` because it doesn't contain deep comparison.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

`shouldComponentUpdate` just prevent context updating.

3. Describe 3 ways to pass information from a component to its PARENT.

- Callback
- Ref
- Context

4. Give 2 ways to prevent components from re-rendering.

   - Don't change a link to Object (Array, Function as prop). Use useMemo, useCallback, etc.
   - Don't use `setState` in parent


5. What is a fragment and why do we need it? Give an example where it might
   break my app. 

Group react elements without nested wrapping in `div` elements. Fragment also can be an array of elements.


6. Give 3 examples of the HOC pattern. 

High-orded components this is a techchnique that helps you to enhance component behavior and share common business logic. I don't use it for long time but before it I used it to create some additional functionality for simple elements like `Input`.

   ```
   function withFocus(Component) {
     const [isFocused, setIsFocused] = useState<boolean>(false);

     const handleFocus = useCallback((active: boolean) => {
       setIsFocused(active);
     }, [])
        
     function NewComponent() {
       return <Component onFocus={handleFocus} />
     }

     return <NewComponent />;
   }

   withFocus(Input)
   ```

7. What's the difference in handling exceptions in promises, callbacks
   and async...await? 

- Promises uses `.then` and `.catch` chains to handle errors. 
- Callback is asynchronous technique to handle errors or some actions at the end of some script. 
- And `async await` this an abstract syntax on generator and promises and it seems more synchronous but at the same time they are asynchronous like promises. 

8. How many arguments does setState take and why is it async. 

It can take `newState` object or callback like `(prevState) => {...prevState}`

9. List the steps needed to migrate a Class to Function Component. 

I would like to start from moving everything that doesn't work with state to utils functions. Then rewrite lifecycles hooks to `useEffect` and rewrite all the handlers.

10. List a few ways styles can be used with components. 

For some reasons I would like to use at my job `css-in-js` solutions. They are working perfectly when you want to have an option to make a point change of some property in css of component directly. Also I can use TypeScript with them. I used `styled-components` at my job for 3+ years and it helped me to build design systems with theming too.

11. How to render an HTML string coming from the server. 

dangerouslySetInnerHTML or innerHTML
If i should render something from 3rd api I would like to use backend for frontend to sanitize html before render it on the client.
