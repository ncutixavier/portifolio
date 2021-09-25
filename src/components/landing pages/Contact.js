import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    FormFeedback,
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import swal from 'sweetalert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_8Q8lp87WvxGxE6xiXQ68f');

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: '',
            nameErrorStatus: false,
            emailErrorStatus: false,
            messageErrorStatus: false,
        };
    }

    change = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    validate = () => {
        let isError = false;
        const errors = {
            nameError: '',
            emailError: '',
            messageError: '',
            nameErrorStatus: false,
            emailErrorStatus: false,
            messageErrorStatus: false,
        };

        if (this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailErrorStatus = true;
            errors.emailError = 'Provide a valid email';
        }
        if (this.state.name.length === 0) {
            isError = true;
            errors.nameErrorStatus = true;
            errors.nameError = 'Name is required!';
        }
        if (this.state.message.length === 0) {
            isError = true;
            errors.messageErrorStatus = true;
            errors.messageError = 'Message is required!';
        }
        this.setState({
            ...this.state,
            ...errors,
        });
        return isError;
    };

    handleSubmit(e) {
        e.preventDefault();
        const error = this.validate();
        const SERVICE_ID = 'service_ikkj11e';
        const TEMPLATE_ID = 'template_u4z6v9l';
        if (!error) {
            document.querySelector('.send-btn').innerHTML = "sending..."
            // const data = {
            //     name: this.state.name,
            //     email: this.state.email,
            //     message: this.state.message
            // }
            try {
                emailjs
                    .send(SERVICE_ID, TEMPLATE_ID, {
                        name: this.state.name,
                        email: this.state.email,
                        message: this.state.message
                    })
                    .then(
                        (result) => {
                            swal({
                                title: "Message has been sent!",
                                text: "Thank you for your message, I will get back to you shortly!",
                                icon: "success",
                                button: "Okay"
                            });
                            document.querySelector('.send-btn').innerHTML = "send"
                            this.setState({ name: "" })
                            this.setState({ email: "" })
                            this.setState({ message: "" })
                        },
                        (error) => {
                            swal({
                                title: "Errror",
                                text: "Error occured while sending email, please try again",
                                icon: "error",
                                button: "Okay"
                            });
                        }
                    );
            } catch (error) {
                swal({
                    title: "Errror",
                    text: "Error occured while sending email, please try again",
                    icon: "error",
                    button: "Okay"
                });
            }
        }
    }

    render() {
        const info = [
            {
                id: 1,
                text: 'Email',
                value: 'ncuti60@gmail.com',
                icon: <MailOutlineIcon />,
            },
            {
                id: 2,
                text: 'Address',
                value: 'KG 27 Ave, Kigali, Rwanda',
                icon: <RoomIcon />,
            },
            {
                id: 3,
                text: 'Phone',
                value: '(250) 783 573 335',
                icon: <PhoneIcon />,
            },
        ];
        return (
            <div className='contact' name='contact'>
                <Container>
                    <div className='contact-title'>
                        Get in <span>touch</span>
                    </div>
                    <Row>
                        {info.map((c, i) => (
                            <Col md={4} sm={12} key={i} className='my-4'>
                                <div className='c-contact'>
                                    <div className='c-icon mr-4'>{c.icon}</div>
                                    <div className=''>
                                        <div className='h2'>{c.text}</div>
                                        <div className='h4'>{c.value}</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='field-input'>
                            <div className='h1 my-5'>Send me a quick message!</div>

                            <FormGroup className='mb-4'>
                                {/* <Label for="examplePassword">Name</Label> */}
                                <Input
                                    type='text'
                                    invalid={this.state.nameErrorStatus}
                                    name='name'
                                    value={this.state.name}
                                    onChange={(e) => this.change(e)}
                                    placeholder='Name'
                                />
                                <FormFeedback>{this.state.nameError}</FormFeedback>
                            </FormGroup>

                            <FormGroup className='mb-4'>
                                {/* <Label for="exampleEmail">Email</Label> */}
                                <Input
                                    type='email'
                                    invalid={this.state.emailErrorStatus}
                                    name='email'
                                    value={this.state.email}
                                    onChange={(e) => this.change(e)}
                                    placeholder='Email'
                                />
                                <FormFeedback>{this.state.emailError}</FormFeedback>
                            </FormGroup>

                            <FormGroup className='mb-4'>
                                {/* <Label for="exampleText">Message</Label> */}
                                <Input
                                    invalid={this.state.messageErrorStatus}
                                    name='message'
                                    type='textarea'
                                    value={this.state.message}
                                    onChange={(e) => this.change(e)}
                                    placeholder='Message'
                                />
                                <FormFeedback>
                                    {this.state.messageError}
                                </FormFeedback>
                            </FormGroup>
                            <Button color='secondary' className='send-btn' block>
                                Send
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contact;
