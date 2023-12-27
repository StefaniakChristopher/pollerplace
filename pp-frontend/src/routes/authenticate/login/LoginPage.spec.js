// @ts-nocheck
import { render, screen} from '@testing-library/svelte';
// @ts-ignore
import LoginPage from './+page.svelte';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import axios from 'axios'
import {jest} from '@jest/globals'

const defaultEmail = "something@mail.com"
const defaultPass = "muhammad123"

const filloutForm = async () => {
    await userEvent.type(emailInput, defaultEmail)
    await userEvent.type(passwordInput, defaultPass)
}


describe('Login Page', () => {

    it('has a login header', () => {
        render(LoginPage);
        const header = screen.getByRole("heading", { name: "Login"});
        expect(header).toBeInTheDocument();
    })

    it('has a password input', () => {
        render(LoginPage);
        const passwordInput = screen.getByLabelText("Password", { label: "passwordInput"}, { type : "password"});
        expect(passwordInput).toBeInTheDocument();
    })

    it('has a email input', () => {
        render(LoginPage);
        const emailInput = screen.getByLabelText("Email", { label: "emailInput"});
        expect(emailInput).toBeInTheDocument();
    })

    it('has a submit button', () => {
        render(LoginPage);
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
    })
    
    // it('that submit button starts off disabled', ()=> {
    //     render(LoginPage)
    //     const submitButton = screen.getByRole("button", { name: "Submit" });
    //     expect(submitButton).toBeDisabled()
    // })

    // it('but once the inputs are filled out and the passwords match it becomes enabled', async ()=> {
    //     render(LoginPage)
    //     const submitButton = screen.getByRole("button", { name: "Submit" });
    //     await filloutForm()
    //     expect(submitButton).toBeEnabled()
    // })

    it('sign up button sends a POST request to backend with the login info (pass and email) to authenticate', async ()=> {
        render(LoginPage)
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await filloutForm()

        const mockFn = jest.fn()

        axios.post = mockFn

        await userEvent.click(submitButton)

        const firstCall = mockFn.mock.calls[0]
        const body = firstCall[1]
        expect(body).toEqual({
            email: defaultEmail,
            password: defaultPass
        })   
    })


})

