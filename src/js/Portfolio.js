import React from "react";
import "../css/portfolio.css";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { Cars: [], showMore: true };
    this.GetImages = this.GetImages.bind(this);
    this.ShowMoreImages = this.ShowMoreImages.bind(this);
  }
  async componentDidMount() {
    await fetch(
      "https://api.pexels.com/v1/search?query=luxury car&per_page=80",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "563492ad6f9170000100000141f5f4c8d54a4fb6bf184e3526d7c10d",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => this.GetImages(data));
  }

  GetImages(data) {
    console.log(data);
    this.setState({ Cars: data.photos });
  }

  ShowMoreImages() {
    this.setState((prevState) => ({ showMore: !prevState.showMore }));
    this.render();
  }

  render() {
    const imagesToShow = this.state.showMore ? 11 : 80;
    const toShow = this.state.showMore ? "Show More" : "Show Less";
    this.items = this.state.Cars.slice(0, imagesToShow).map((item) => (
      <img key={item.id} src={item.src.large} alt="" />
    ));
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <hr />
        <button className="portBtn underline" onClick={this.ShowMoreImages}>
          {toShow}
        </button>
        <div className="portfolio dontShow" styles>
          {this.items}
        </div>
        <div
          className="imageHidder"
          style={
            this.state.showMore ? { display: "block" } : { display: "none" }
          }></div>
      </div>
    );
  }
}

export default Portfolio;

//563492ad6f9170000100000141f5f4c8d54a4fb6bf184e3526d7c10d
