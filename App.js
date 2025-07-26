/*
<div id="parent">
    <div id="child">
        <h1> I am h1 </h1>
                <h1> I am h1 </h1>

    </div>
</div>



*/

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello ,  I am H1 tag"),
    React.createElement("h2", {}, "Hello ,  I am H2 tag"),
  ]),
  [
    React.createElement("div", { id: "child-2" }, [
      React.createElement("h1", {}, "Hello ,  I am H1 tag"),
      React.createElement("h2", {}, "Hello ,  I am H2 tag"),
    ]), 
  ]
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello world from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
