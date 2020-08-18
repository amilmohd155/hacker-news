import React from "react";
import "./App.css";
import ReactTimeAgo from "react-time-ago";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUpvotes: [0, 0],
    };
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote(event, id) {
    this.setState({ currentUpvotes: this.state.currentUpvotes + 1 });
    console.log(this.state.currentUpvotes);
    if (localStorage.getItem("points") === undefined) {
      localStorage.setItem("points", JSON.stringify());
    }
  }

  render() {
    const getHostName = (url) => {
      let alpha = document.createElement("a");
      alpha.href = url;
      return alpha.host;
    };

    function ListItemsFunction(props) {
      const items = props.items;
      const listItem = items.map((item, index) => (
        <React.Fragment>
          <tr>
            <td>
              <span style={{ padding: "2px" }}>{index + 1}</span>
            </td>
            <td style={{ width: "100%" }}>
              <span>
                <a href={item.url}>{item.title}</a>
                <span style={{ color: "#9E9E9E" }}>
                  {" ("}
                  <a
                    href={"https://news.ycombinator.com/from?site=" + getHostName(item.url)}
                    style={{ color: "#9E9E9E", fontSize: "9pt" }}
                  >
                    <span>
                      {item.url !== "" ? getHostName(item.url) : "nil"}
                    </span>
                  </a>
                  {") "}
                </span>
              </span>
            </td>
            <td>
              <center>
                <span style={{ cursor: "pointer" }}>
                  <div className="upvote" onClick={props.handleUpvote} />
                </span>
              </center>
            </td>
          </tr>
          <tr className="subtext">
            <td colSpan="1"></td>
            <td>
              {"by "}
              <a
                href={"https://news.ycombinator.com/user?id=" + item.author}
                id="author"
              >
                {item.author}
              </a>
              <span>
                <a
                  href={"https://news.ycombinator.com/item?id=" + item.objectID}
                >
                  <ReactTimeAgo date={item.created_at} />
                </a>
              </span>
              {" | "}
              <span className="hide-span">
                <a href="">hide</a>
              </span>
              {" | "}
              <span>
                <a
                  href={"https://news.ycombinator.com/item?id=" + item.objectID}
                >
                  {item.num_comments}&nbsp;comments
                </a>
              </span>
            </td>
            <td>
              <span>{item.points}</span>
            </td>
          </tr>
          <tr className="space5"></tr>
        </React.Fragment>
      ));
      return <tbody>{listItem}</tbody>;
    }

    return (
      <table>
        <ListItemsFunction
          items={this.props.items}
          handleUpvote={this.handleUpvote}
        />
      </table>
    );
  }
}

export default ListItem;
