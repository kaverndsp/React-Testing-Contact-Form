import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "../components/ContactForm";


test('firstName, lastName, email, message inputs are rendered', () => {
    const {getByLabelText} = render(<ContactForm />);
    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);

})


test('form submit adds new animal to list', () => {
    const {getByLabelText} = render(<ContactForm />);
    
    const firstNametInput = getByLabelText(/firstname/i);
    const lastNameInput = getByLabelText(/lastname/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

  
    fireEvent.change(firstNameInput, {target: {value: 'Test first Name'}});
    fireEvent.change(lastNameInput, {target: {value: 'Test Last Name'}});
    fireEvent.change(emailInput, {target: {value: 'Test Email'}});
    fireEvent.change(messageInput, {target: {value: 'Test Message'}});

    expect(firstNametInput.value).toBe("Test first Name");
    expect(lastNameInput.value).toBe("Test Last Name");
    expect(emailInput.value).toBe("Test Email");
    expect(messageInput.value).toBe("Test Message");

});
