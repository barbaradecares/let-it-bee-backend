import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import history from "../history";
import { relative } from "path";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image1: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  image2: {
    position: "relative",
    height: 600,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        // border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageBackdrop2: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },

  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function MainPhoto(props) {
  const { classes } = props;

  return (
    <div>
      <div>
        <div className={classes.root}>
          <ButtonBase
            focusRipple
            key={""}
            className={classes.image2}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "100%"
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(../images/main.jpg)`,
                height: "100%"
              }}
            />
            <span className={classes.imageBackdrop2} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                // variant="subtitle1"
                color="inherit"
                variant="h1"
                className={classes.imageTitle}
              >
                Smart beekeeping
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </div>

        <div style={{ position: "relative", height: 500 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 214, 0.7)",
              zIndex: 0
            }}
          >
            <div style={{ position: relative, zIndex: 1 }}>
              <Grid
                container
                alignItems="center"
                style={{ minHeight: "63vh" }}
                spacing={16}
                justify="center"
              >
                <Grid item xs={4}>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "450px",
                      height: "450px",
                      borderRadius: "225px",
                      textAlign: "center",
                      boxSizing: "border-box",
                      boxShadow: "0px 0px 0px 2px rgb(101,96,0) inset",
                      padding: "50px",
                      border: " 10px solid white",
                      margin: "10px",
                      color: "rgb(101,96,0)"
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    <Typography color="inherit">
                      LetItBee is an exciting new tool for professional or
                      hobbyists Beekeepers to remotely track vital information
                      from multiple beehives in multiple places, all from their
                      phone or computer. Using calibrated sensors an apiarist
                      can track hive humidity, temperature and local weather.
                      LetItBee allows its users to have a powerful advantage in
                      monitoring hive health and seasonal development, spotting
                      potentially devastating problems before they happen.
                    </Typography>
                  </div>
                </Grid>
                {/* <Grid item xs={3}>
                  <Card
                    style={{
                      margin: "20px",
                      height: "400px"
                    }}
                  >
                    <CardContent align="center">
                      <Typography variant="h6">
                        LetItBee is a beehive monitor that will allow hobbyists
                        and professional beekeepers to keep track of their
                        honeybees’ health and their hives status.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card style={{ margin: "20px", height: "400px" }}>
                    <CardContent align="center">
                      <Typography variant="h6">
                        Exciting new tool for Beekeepers to remotely track vital
                        information from multiple beehives in multiple places,
                        all from their phone or computer. Using calibrated
                        sensors an apiarist can track hive humidity, temperature
                        and local weather.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card style={{ margin: "20px", height: "400px" }}>
                    <CardContent align="center">
                      <Typography variant="h6">
                        Powerful advantage in monitoring hive health and
                        seasonal development, and spotting potentially
                        devastating problems before they happen.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid> */}
              </Grid>
            </div>
          </div>
        </div>

        <div className={classes.root}>
          <ButtonBase
            focusRipple
            key={""}
            className={classes.image1}
            focusVisibleClassName={classes.focusVisible}
            onClick={() => history.push("/login")}
            style={{
              width: "100%"
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(../images/honey.jpg)`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Log in
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </div>
        <div className={classes.root}>
          <ButtonBase
            focusRipple
            key={""}
            className={classes.image1}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "100%"
            }}
            onClick={() => history.push("/signup")}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(../images/hive.jpg)`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Sign up
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}

MainPhoto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPhoto);
