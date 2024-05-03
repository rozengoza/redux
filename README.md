## Why React Redux ?
  - [x] Prop Drilling
    - [x] State Management
      - [x] In normal sense, we pass data from one component to another through props. 
      - [x] Data in react passes from child component to parent component so, the flow is unidirectional. This is solved by prop drilling. Through a sequence of components, we pass data from child component to  parent component. 
  
  - [x] Solution to Prop Drilling
    - [x] context, useContext API -> Consumer ,  Provider.
    - [x] alternatively, we can use Redux for global state management

### USECONTEXT, context API
  - [] Lets try to understand useContext, context API 
    - [x] Parent Component -> Child Component A -> Child Component B -> Child Component C
          - Concept :-  If parent component has a data that is only needed to  Child Component C, parent component passes prop to A, then A to B and  finally B to C finally. We are passing to A and B even though data is not needed in these components. So, react Hooks  provides context API that allows us to easily access data at different levels of the component tree, without having to pass the props to each level.
          - Usage :-  createContext()
                      provider -> to pass
                      consumer -> to access
