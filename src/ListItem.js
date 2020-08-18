import React from "react";
import "./App.css";
import ReactTimeAgo from "react-time-ago";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleUpvote = this.handleUpvote.bind(this);
    // this.onClickHide = this.onClickHide.bind(this);
  }

  // onClickHide(id) {

  // }

  // componentDidUpdate(prevProps) {

  // }

  // handleUpvote(id) {
  //   console.log(this.state.upvoteValues);
  // }

  // componentDidUpdate(prevProps) {
  //   var res = new Map(this.props.items.map((i) => [i.objectID, i.points]));
  //   localStorage.setItem("upvotes", JSON.stringify([...res]));

  // }

  render() {
    const getHostName = (url) => {
      let alpha = document.createElement("a");
      alpha.href = url;
      return alpha.host;
    };

    return (
      <tbody>
        {this.props.items.map((item, index) => (
          <React.Fragment>
            <tr>
              <td>
                <span style={{ padding: "2px" }}>{(index + 1)}</span>
              </td>
              <td style={{ width: "100%" }}>
                <span>
                  <a href={item.url}>{item.title}</a>
                  <span style={{ color: "#9E9E9E" }}>
                    {" ("}
                    <a
                      href={
                        "https://news.ycombinator.com/from?site=" +
                        getHostName(item.url)
                      }
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
                  <span
                    // value={item.objectID}
                    // onClick={this.handleUpvote.bind(this, item.objectID)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="upvote" />
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
                    href={
                      "https://news.ycombinator.com/item?id=" + item.objectID
                    }
                  >
                    <ReactTimeAgo date={item.created_at} />
                  </a>
                </span>
                {" | "}
                <span
                  value={index}
                  // onClick={this.onClickHide(this, index)}
                  className="hide-span"
                >
                  hide
                </span>
                {" | "}
                <span>
                  <a
                    href={
                      "https://news.ycombinator.com/item?id=" + item.objectID
                    }
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
        ))}
      </tbody>
    );
  }
}

export default ListItem;
