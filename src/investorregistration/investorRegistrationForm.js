import React, {Component} from 'react'
import InvestorRegistrationClientSecond from "./investorRegistrationClientSecond";
import InvestorRegistrationClientFirst from "./investorRegistrationClientFirst";
import InvestorRegistrationClientThird from "./investorRegistrationClientThird";
import InvestorRegistrationClientForth from "./investorRegistrationClientForth";

export class InvestorRegistrationForm extends Component {

    state = {
        step: 1,
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'male',
        dob: new Date('2014-08-18T21:11:54'),
        secondaryTelephone: '',
        email: '',
        phone: '',
        city: '',
        detail: '',
        img: '',
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState(
            {
                step: step + 1
            }
        );
    };
    prevStep = () => {
        const {step} = this.state;
        this.setState(
            {
                step: step - 1
            }
        );
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    handleDateChange = date => {
        console.log(date);
        this.setState({
              dob: date
        });
    };
    handleGenderChange = event => {
        console.log(event)
        this.setState({ gender: event.target.value });
    };
    handlePhoneChange = secondaryPhone => event => {
        this.setState({ [secondaryPhone]: event.target.value });
    };
    render() {

        const {step} = this.state;
        const {firstName, middleName, lastName, gender, dob, secondaryTelephone, email, phone, city, detail, img} = this.state;
        const values = {firstName, middleName, lastName, gender, dob, secondaryTelephone, email, phone, city, detail, img};

        switch (step) {
            case 1:
                return (
                    <InvestorRegistrationClientFirst
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleDateChange={this.handleDateChange}
                        handleGenderChange={this.handleGenderChange}
                        handlePhoneChange={this.handlePhoneChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <InvestorRegistrationClientSecond
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <InvestorRegistrationClientThird
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <InvestorRegistrationClientForth
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
        }
    }

}

export default InvestorRegistrationForm
