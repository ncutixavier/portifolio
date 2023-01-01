import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../redux/actions/articleAction";
import { formatDate } from "../utils/helper";
import ReactHtmlParser from "react-html-parser";
import FullArticleSkeleton from "./skeleton/FullArticleSkeleton";
import "../assets/scss/landing.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { pink } from "@material-ui/core/colors";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import validate from "./Validate";
import axios from "axios";
import { Spinner } from "reactstrap";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { getComments } from "../redux/actions/commentsAction";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  media: {
    height: 350,
    width: "100%",
    borderRadius: "5px",
    margin: "10px",
  },
  commentBtn: {
    fontSize: "1.3rem",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  root: {
    maxWidth: 345,
  },
}));

export default function Articles(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmitted(true);
    if (Object.keys(validate(values)).length === 0) {
      // console.log('Val:', values);
      axios
        .post(
          `https://portifolio-backend.onrender.com/api/v1/blogs/${props.id}/comments`,
          values
        )
        .then(function (response) {
          if (response) {
            setSubmitted(false);
            values.name = "";
            values.comment = "";
            setModal(!modal);
            dispatch(getComments(props.id));
          }
        })
        .catch(function (err) {
          if (err) {
            setSubmitted(false);
          }
        });
    } else {
      setSubmitted(false);
    }
  };

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.article);
  const allComments = useSelector((state) => state.comments);
  const { loading, error, post } = postData;
  const {
    loading: loadComments,
    error: errorComments,
    data: articleComments,
  } = allComments;

  useEffect(() => {
    dispatch(getArticle(props.id));
    dispatch(getComments(props.id));
  }, [dispatch, props.id]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="articles">
      <Container>
        <Col>
          {loading ? (
            <FullArticleSkeleton />
          ) : error ? (
            <div class="error-message">
              <Row className="back-btn">
                <Card className={classes.root}>
                  <Card>
                    <CardContent>
                      <Typography variant="h3" component="body2">
                        NOT FOUND
                      </Typography>
                    </CardContent>
                  </Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        The article you're trying to retrieve is no longer
                        existed. Please go back to access existed articles.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <a href="/blogs">
                      <span className="back-btn-div">Go Back</span>
                    </a>
                  </CardActions>
                </Card>
              </Row>
            </div>
          ) : post.data.article ? (
            <div>
              <Row className="back-btn">
                <Link to="/blogs">
                  <div className="back-btn-div">
                    <span className="back-arrow">
                      <ArrowBackIosIcon />
                    </span>
                    <span>Back</span>
                  </div>
                </Link>
              </Row>
              <Row lg={12} md={12} sm={12}>
                <CardMedia
                  className={classes.media}
                  image={post.data.article.image}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h2"
                    className="full-article-title ma-5"
                  >
                    {post.data.article.title}
                  </Typography>
                  <div className="full-article-text">
                    {ReactHtmlParser(post.data.article.content)}
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom>
                    Edited by {post.data.article.author} on{" "}
                    {formatDate(post.data.article.date)}
                  </Typography>
                </CardContent>
              </Row>
              <Row>
                <Col className="py-2">
                  <Box color="text.primary">
                    <Typography
                      gutterBottom
                      variant="h3"
                      className="full-article-title ma-5"
                    >
                      Comments
                    </Typography>
                  </Box>
                  {loadComments ? (
                    <div style={{ padding: "2rem 0" }}>Loading comments...</div>
                  ) : errorComments ? (
                    <div style={{ padding: "2rem 0" }}>
                      Error occured while fetching comments, try again
                    </div>
                  ) : (
                    <div className="my-5">
                      {articleComments?.comments.map((com, i) => (
                        <CardHeader
                          key={i}
                          className="card-header"
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.pink}
                            >
                              {com.name.charAt(0).toUpperCase()}
                            </Avatar>
                          }
                          title={com.name}
                          subheader={com.comment}
                        />
                      ))}
                    </div>
                  )}

                  <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    className={classes.commentBtn}
                    onClick={toggle}
                  >
                    Leave a comment
                  </Button>
                  {/* {console.log(post.data.article.comments)} */}
                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className="mt-5"
                    centered
                  >
                    <ModalHeader toggle={toggle}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>
                        Write your comment
                      </span>
                    </ModalHeader>
                    <Form onSubmit={handleSubmit}>
                      <ModalBody>
                        <FormGroup>
                          <Label for="name" style={{ fontSize: "14px" }}>
                            Name
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <p className="error">{errors.name}</p>
                          )}
                        </FormGroup>
                        <FormGroup>
                          <Label for="name" style={{ fontSize: "14px" }}>
                            Comment
                          </Label>
                          <Input
                            type="textarea"
                            name="comment"
                            id="comment"
                            value={values.comment}
                            onChange={handleChange}
                          />
                          {errors.comment && (
                            <p className="error">{errors.comment}</p>
                          )}
                        </FormGroup>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          type="submit"
                          variant="contained"
                          className="mr-3"
                        >
                          <span style={{ fontSize: "12px" }}>Send</span>
                          {submitted && (
                            <Spinner
                              color="light"
                              style={{
                                width: "1rem",
                                height: "1rem",
                                marginLeft: "1rem",
                              }}
                            />
                          )}
                        </Button>
                        <Button
                          color="secondary"
                          onClick={toggle}
                          variant="outlined"
                          style={{ fontSize: "12px" }}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Form>
                  </Modal>
                </Col>
              </Row>
            </div>
          ) : (
            <FullArticleSkeleton />
          )}
        </Col>
      </Container>
    </div>
  );
}
