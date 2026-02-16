import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// console.log(heading);
// const jsxHeading = <h1 id="heading">Hello World</h1>;
// console.log(jsxHeading);

// const HeadingComponent = () => {
//   return <h1 className="heading">Hello World</h1>;
// };

const Title = (
    <h1 id="title" className="heading">
        Hello World
    </h1>
);

const Header = () => {
    return <h1 className="heading">Hello Heading</h1>;
};

const SubHeading = () => {
    return <h2 className="subheading">This is a subheading</h2>;
}

//component composition
const HeadingComponent = () => {
    return (
        <div>
            {Title}
            <Header />
            {SubHeading()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);