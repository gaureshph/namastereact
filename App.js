const h11 = React.createElement("h1", { id: "h11" }, "I am an h1 tag");
const h21 = React.createElement("h2", { id: "h21" }, "I am an h2 tag");
const h12 = React.createElement("h1", { id: "h12" }, "I am an h1 tag");
const h22 = React.createElement("h2", { id: "h22" }, "I am an h2 tag");

const child1 = React.createElement("div", { id: "parent" }, [h11, h21]);
const child2 = React.createElement("div", { id: "parent" }, [h12, h22]);
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);