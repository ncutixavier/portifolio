import React from 'react';
import { Input, Form, Button } from 'reactstrap';
import Icons from './Icons'

export default function IconAvatars() {
    return (
        <div className='footer'>
            <Form className="subscribe">
                <Input type="email" name="email" id="email" placeholder="Email" className="email" />
                <Button color="primary">subscribe</Button>
            </Form>
            <Icons />
        </div>
    );
}
