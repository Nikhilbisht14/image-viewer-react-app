import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LionelMessi from '../../assests/LionelMessi.jpg'
import Divider from "@material-ui/core/Divider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  gridListMain: {
    transform: "translateZ(0)",
    width: "1500px",
  },
  title: {
    color: theme.palette.primary.light,
  },
});

const postStyle = {
  hashtagStyle: {
    display: "inline",
    paddingRight: "2px",
    fontSize: "15px",
    color: "#5bbce4",
  },
  captionStyle: {
    fontSize: "20px",
    paddingTop: "10px",
    color: "black",
  },
  likeIconStyle: {
    fontSize: "40px",
  },
};

const gridListTileStyle = {
  width: "650px",
  margin: "20px",
};

const cardStyle = {
  width: "100%",
  height: "100%",
};


class Home extends Component {

  constructor() {
    super();
  }




  componentDidMount() {
    let data = null;
    let xhr = new XMLHttpRequest();
    // let that = this;

    xhr.addEventListener("readystatechange", () => {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    })

    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //      console.log(xhr.response);
    //   }

    xhr.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + sessionStorage.getItem('access-token'));
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
  }


  render() {

    const { classes } = this.props;
    return (
      <div>
        <Header title="Image Viewer" showHomePage="home"></Header>      
        <div className="grid-container">
          <GridList cols={2} cellHeight={900} className={classes.gridListMain}>
            <GridListTile key="post1" style={gridListTileStyle}>
              <Card style={{ cardStyle }} variant="outlined">
                <CardHeader
                  avatar={<Avatar aria-label="recipe" src={LionelMessi}></Avatar>}
                  title="Messi"
                  subheader="24/06/21 22:33:44"
                ></CardHeader>
                <CardContent>
                  <img src={LionelMessi} alt="imag1" className="post-image" />
                  <br />
                  <br />
                  <Divider style={{ backgroundColor: "#c0c0c0" }} />
                  <Typography variant="h5" style={postStyle.captionStyle}>
                    Greatest footballer of all the time.
                  </Typography>
                  <div>
                    <Typography
                      display="inline"
                      variant="caption"
                      style={postStyle.hashtagStyle}
                    >
                      #Best #skills #Passion
                    </Typography>
                  </div>
                  <div className="like-section">
                    <FavoriteBorderIcon style={postStyle.likeIconStyle} />
                    <span className="like-post"> 10 likes</span>
                  </div>
                </CardContent>
              </Card>
            </GridListTile>
          </GridList>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);