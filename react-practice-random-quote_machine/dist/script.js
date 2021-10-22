function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",





















    () => {
      return this.setState({
        currentQuote: this.state.data[Math.floor(Math.random() * Math.floor(this.state.data.length))],
        currentColor: this.state.colorData[Math.floor(Math.random() * Math.floor(this.state.colorData.length))] });

    });this.state = { data: [], currentQuote: { "text": "A house divided against itself cannot stand.", "author": "Abraham Lincoln" }, colorData: ["#EAD2AC", "#DF928E", "#C58882", "#D1DEDE", "#1D201F"], currentColor: "#EAD2AC" };}componentDidMount() {fetch("https://type.fit/api/quotes").then(res => res.json()).then(data => this.setState({ data: data }));}

  render() {
    return (

      React.createElement("div", { id: "quote-box" },
      React.createElement("div", { id: "text" },
      React.createElement("i", { class: "fa fa-quote-left" }),
      this.state.currentQuote.text),

      React.createElement("div", { id: "author" }, this.state.currentQuote.author),
      React.createElement("div", { id: "bottom-part" },
      React.createElement("div", { class: "buttons" },
      React.createElement("a", { class: "button", id: "tweet-quote", href: "twitter.com/intent/tweet" }, React.createElement("i", { class: "fa fa-twitter" })),
      React.createElement("button", { class: "button", id: "new-quote", onClick: this.handleChange }, "click this")))));





  }}


ReactDOM.render(React.createElement(RandomQuoteMachine, null), document.getElementById('root'));