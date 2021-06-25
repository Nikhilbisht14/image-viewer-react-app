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
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  gridListMain: {
    transform: "translateZ(0)",
    width: "1265px",
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 240,
    maxWidth: 240,
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
  width: "590px",
  margin: "10px",
};

const cardStyle = {
  width: "80%",
  height: "100%",
};

const commentStyle = {
  formControlStyle: {
    width: "80%",
    marginRight: "10px",
    height: "40px",
    marginTop: "60px",
  },
  commentButtonStyle: {
    height: "45px",
    marginTop: "-50px",
    marginLeft: "470px",
  },
};

const tileData = [
  {
    img: "../../assests/LionelMessi.jpg",
    content: 'content1',
    author: 'author1',
    likes: '10'
  },
  {
    img: "LionelMessi",
    content: 'content2',
    author: 'author2',
    likes: '20'
  },
  {
    img: "LionelMessi",
    content: 'content3',
    author: 'author3',
    likes: '30',
  },
  {
    img: "LionelMessi",
    content: 'content4',
    author: 'author4',
    likes: '40',
  }
];

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
        <Header title="Image Viewer" showHomePage="home" history={this.props.history}></Header>
        <GridList cols={2} cellHeight={500} className={classes.gridListMain}>
          {tileData.map((eg) => (
            // Card header
            <GridListTile cols={2} key="post1" style={gridListTileStyle}>
              <Card style={{ cardStyle }} variant="outlined">
                <CardHeader
                  avatar={<Avatar aria-label="recipe" src={eg.img}></Avatar>}
                  title="Messi"
                  subheader="24/06/21 22:33:44"
                ></CardHeader>

                {/* Image, image-content and likes section */}
                <CardContent>
                  <img src={eg.img} alt="imag1" className="post-image" /><br /><br/>
                  <Divider style={{ backgroundColor: "#c0c0c0" }} />
                  <Typography variant="h5" style={postStyle.captionStyle}>
                    {eg.content}
                  </Typography>
                  <div>
                    <Typography display="inline" variant="caption" style={postStyle.hashtagStyle}>#Best #skills #Passion</Typography>
                  </div>
                  <div className="like-section">
                    <FavoriteBorderIcon style={postStyle.likeIconStyle} />
                    <span className="like-post">{eg.likes}</span>
                  </div>

                  {/* Comment section */}
                  <div className="comment-section">
                    <FormControl style={commentStyle.formControlStyle}>
                      <InputLabel htmlFor="addComment">Add a comment</InputLabel>
                      <Input id="addComment" type="text" placeholder="Add a comment"
                      />
                    </FormControl>
                    <Button className="addBtn" variant="contained" color="primary" style={commentStyle.commentButtonStyle}>ADD</Button>
                  </div>

                </CardContent>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Home);