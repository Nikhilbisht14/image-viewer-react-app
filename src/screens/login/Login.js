import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    formControl: {
        margin: theme.spacing(),
        width: 350
    },

    buttonControl: {
        margin: theme.spacing(),
        pointer: 'cursor'
    }
})

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            usernameRequired: "dispNone",
            loginPassword: "",
            loginPasswordRequired: "dispNone",
            usernamePasswordIncorrect: "dispNone",
        };
    }

    /* Event Triggers When Username Field Value Changed */
    inputUsernameChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    };

    /* Event Triggers When Password Field Value Changed */
    inputPasswordChangeHandler = (event) => {
        this.setState({ loginPassword: event.target.value });
    };

    /* Event Triggers When Login Button Pressed */
    loginClickHandler = () => {
        let tempUsername = "nikhil";
        let tempPassword = "nikhil@1234";
        let accessToken =
            "IGQVJVSmxhUHQ0REg3N3QzcS1idHFPQ2Y3WFFLc3pyU21UbkJyQTFUSXQ5RUFDdkxwWk5qSThwYkVIS1llX05LSUxkS3QzTEdFZAzZAZAdlRxT1FxSXluRk0xV2szTjg4M1RlTXY4UnV0MTdJX0dhMFdOck9USkc2LVMyR3hF";

        /* Initial Set usernamePasswordIncorrect state as display none */
        this.setState({ usernamePasswordIncorrect: "dispNone" });

        /* Toggle username display property */
        this.state.username === ""
            ? this.setState({ usernameRequired: "dispBlock" })
            : this.setState({ usernameRequired: "dispNone" });

        /* Toggle password display property */
        this.state.loginPassword === ""
            ? this.setState({ loginPasswordRequired: "dispBlock" })
            : this.setState({ loginPasswordRequired: "dispNone" });

        if (
            this.state.username === tempUsername &&
            this.state.loginPassword === tempPassword
        ) {
            /* save access-token in session storage */
            window.sessionStorage.setItem(
                "access-token",
                accessToken
            );

            //redirect to home page
            this.props.history.replace("/home");
        } else {
            if (this.state.username !== "" && this.state.loginPassword !== "") {
                this.setState({ usernamePasswordIncorrect: "dispBlock" });
            }
        }
    };

    render() {
        // Used FormControl,Input and Buttons for Login card. Also used FormHelperText for showing inline errors
        const { classes } = this.props;
        return (
            <div>
                <Header
                    title="Image Viewer"
                    parent="login"
                    history={this.props.history}
                />
                <div className="card-container">
                    {/* Login form */}
                    <Card variant="outlined" className="login-card">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                LOGIN
                            </Typography>
                            <br />
                            <FormControl className={classes.formControl} required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input className="inputBox"
                                    id="username"
                                    type="text"
                                    username={this.state.username}
                                    onChange={this.inputUsernameChangeHandler}
                                />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl className={classes.formControl} required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input className="inputBox"
                                    id="password"
                                    type="password"
                                    loginPassword={this.state.loginPassword}
                                    onChange={this.inputPasswordChangeHandler}
                                />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <FormHelperText
                                    className={this.state.usernamePasswordIncorrect}
                                >
                                    <span className="red">
                                        Incorrect username and/or password
                                    </span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            {/* Login Button */}
                            <FormControl className={classes.buttonControl} required>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.loginClickHandler}
                                >
                                    LOGIN
                                </Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);
