import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export class InvestorRegistrationClientFirst extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const {handleChange, handleDateChange, handleGenderChange,handlePhoneChange, values} = this.props;
        const {classes} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details 1"/>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                helperText="Enter First Name"
                                floatingLabelText="First Name"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                helperText="Enter Middle Name"
                                floatingLabelText="Middle Name"
                                onChange={handleChange('middleName')}
                                defaultValue={values.middleName}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                helperText="Enter Surname"
                                floatingLabelText="Surname"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                helperText="Enter email"
                                floatingLabelText="Email"
                                onChange={handleChange('email')}
                                defaultValue={values.email}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <div className="gender">
                                <FormLabel component="legend">Gender</FormLabel>
                                <Radio
                                    checked={values.gender === 'male'}
                                    onChange={handleGenderChange}
                                    value='male'
                                    name="radio-button-demo"
                                    aria-label="Male"
                                    label="Male"
                                /> Male &nbsp;&nbsp;&nbsp;
                                <Radio
                                    checked={values.gender === 'female'}
                                    onChange={handleGenderChange}
                                    value='female'
                                    name="radio-button-demo"
                                    aria-label="Female"
                                    label="Female"
                                /> Female
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container>
                                    <DatePicker
                                        fullWidth
                                        margin="normal"
                                        label="Date of Birth"
                                        value={values.dob}
                                        onChange={handleDateChange}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>

                        </Grid>
                        <Grid item xs={3}>

                        </Grid>
                    </Grid>
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

InvestorRegistrationClientFirst.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(InvestorRegistrationClientFirst);

