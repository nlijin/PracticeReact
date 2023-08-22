# PracticeReact

# Episode 3: Laying the foundation

adding scripts to automate run and build commands in package.json
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
}
now you just have to type npm run start / npm start or npm run build

# JSX: html like or XML like syntax (jsx is transpiled before it reaches the JS engine by parcel dependency(babel))

without jsx:
const heading = React.createElement('h1', {id: "heading"}, "NamasteReact");

with jsx:
const jsxHeading = <h1 id="heading">Namaste React</h1>

# if jsx is in multiple lines, we have to wrap it in round brackets();

const jsxHeading = (

<h1 className = "head" >
Namaste React
</h1>
)

# React component:

everything is react is a component, ex buttons, list, nav.
there are two types of components class and functional components.
classbase components are very old way of writing react.

# functional component

functional component is a javascript function which returns a jsx code.

ex:
const HeadingComponent = () => {
return <h1> Namaste React Functional Component</h1>
}

# render the above functional component;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)

# component composition

const Title = () => {

<h1> This is title</h1>
}

const HeadingComponent = () => {
(

<div>
    <Title />
    <Title></Title>
    {Title()}
        {console.log('this is javascript inside jsx')}
    <h1> Namaste React Functional Component</h1>
</div>
)

}

we can also write elements in jsx; if we use curly brackets{} we can write any javascript code inside it.
as in above example
jsx also sanitise the data which we get from api or anywhere, it will stop cross site scripting attacks
