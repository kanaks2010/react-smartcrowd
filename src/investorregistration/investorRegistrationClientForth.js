import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import Button from "@material-ui/core/Button";

export class InvestorRegistrationClientForth extends Component {

    submit = e => {
        e.preventDefault();
        console.log(this.props);
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {handleChange, values} = this.props;

        console.log(this.props);

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details 4"/>
                    <TextField
                        helperText="Enter img"
                        floatingLabelText="Image"
                        onChange={handleChange('img')}
                        defaultValue={values.img}/>
                    <br/>
                    <Button
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                        variant="contained" color="secondary">
                        Back
                    </Button>
                    <Button
                        primary={true}
                        style={styles.button}
                        onClick={this.submit}
                        variant="contained" color="primary">
                        Submit
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}

const styles = {
    button: {
        margin: 15
    }
}
export default InvestorRegistrationClientForth;
