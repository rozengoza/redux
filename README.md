## Why React Redux ?
  - [x] Prop Drilling
    - [x] State Management
      - [x] In normal sense, we pass data from one component to another through props. 
      - [x] Data in react passes from child component to parent component so, the flow is unidirectional. This is solved by prop drilling. Through a sequence of components, we pass data from child component to  parent component. 
  
  - [x] Solution to Prop Drilling
    - [x] context, useContext API -> Consumer ,  Provider.
    - [x] alternatively, we can use Redux for global state management

### useContext, context API
  - [ ] Lets try to understand useContext, context API 
    - [x] Parent Component -> Child Component A -> Child Component B -> Child Component C
          - Concept :-  If parent component has a data that is only needed to  Child Component C, parent component passes prop to A, then A to B and  finally B to C finally. We are passing to A and B even though data is not needed in these components. So, react Hooks  provides context API that allows us to easily access data at different levels of the component tree, without having to pass the props to each level.
          - Usage :-  createContext()
                      provider -> to pass
                      consumer -> to access 

          - Demerits :- 
            - [x] causes performance issue as  it causes component to  re-render whenever the context value changes, context value is updated frequently
            - [x] less type safety


## useContext vs React Redux
  - [ ] Difference is based on usage context and scale of management scope
    - [x] useContext is suitable for managing smaller-scale states, redux is used for complex state management share across entire application 
  

  ## Let's dig into react-redux
    - [ ] provides a single global state store to manage the entire application's state
    - [ ] uses concept of actions and reducers to update the state
    - [x] [x] data flow :-
      - [ ] follows a unidirecitonal pattern, which means the data flows in one direction through our application
      - [ ] it transfers data via actions, reducers, dispatch and selectors

  # Redux Introduction
    - [ ] every components that require data communicates / calls the store to  get the data
    - [ ] store is a centrallized store
    - [ ] with rules ensuring that the state can only be updated in a predictable fashion

  # Redux main topics
    # Action
      - What to do?

    # Reducers
      - How to do?

    # Store
      -  Object which holds the state of the application

    # Functions assosiated with store
      - createStrore()
      - dispatch(action)
      - getState()
