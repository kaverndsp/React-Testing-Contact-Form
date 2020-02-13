import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from "./ContactForm";

test('firstName, lastName, email, message inputs are rendered', async () => {
    const {getByLabelText} = render(<ContactForm />);
    const firstName = getByLabelText(/firstName/i);
    const lastName = getByLabelText(/lastName/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    expect (firstName)
})


 