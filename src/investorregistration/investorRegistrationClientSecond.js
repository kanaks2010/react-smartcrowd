import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import Button from "@material-ui/core/Button";

export class InvestorRegistrationClientSecond extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
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
                    <AppBar title="Enter user details 2"/>
                    <TextField
                        helperText="Enter phone"
                        floatingLabelText="phone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}/>
                    <br/>
                    <TextField
                        helperText="Enter city Name"
                        floatingLabelText="city Name"
                        onChange={handleChange('city')}
                        defaultValue={values.city}/>
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
                        onClick={this.continue}
                        variant="contained" color="primary">
                        Next
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
export default InvestorRegistrationClientSecond;
