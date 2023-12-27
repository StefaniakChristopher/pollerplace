// @ts-nocheck
import { render, screen} from '@testing-library/svelte';
// @ts-ignore
import SignUpPage from './+page.svelte';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import axios from 'axios'
import {jest} from '@jest/globals'

const defaultEmail = "something@mail.com"
const defaultUser = "muhammad"
const defaultPass = "muhammad123"

const filloutForm = async () => {
    await userEvent.type(emailInput, defaultEmail)
    await userEvent.type(usernameInput, defaultUser)
    await userEvent.type(passwordInput, defaultPass)
    await userEvent.type(repeatPasswordInput, defaultPass)
}


describe('Sign Up Page', () => {

    it('has a sign up header', () => {
        render(SignUpPage);
        const header = screen.getByRole("heading", { name: "Sign Up"});
        expect(header).toBeInTheDocument();
    })

    it('has a username input', () => {
        render(SignUpPage);
        const usernameInput = screen.getByLabelText("Username", { label: "usernameInput"});
        expect(usernameInput).toBeInTheDocument();
    })

    it('has a password input', () => {
        render(SignUpPage);
        const passwordInput = screen.getByLabelText("Password", { label: "passwordInput"}, { type : "password"});
        expect(passwordInput).toBeInTheDocument();
    })

    it('has a repeat password input', () => {
        render(SignUpPage);
        const repeatPasswordInput = screen.getByLabelText("Repeat Password", { label: "repeatPasswordInput"}, { type : "password"});
        expect(repeatPasswordInput).toBeInTheDocument();
    })

    it('has a email input', () => {
        render(SignUpPage);
        const emailInput = screen.getByLabelText("Email", { label: "emailInput"});
        expect(emailInput).toBeInTheDocument();
    })

    it('has a submit button', () => {
        render(SignUpPage);
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
    })
    
    it('that submit button starts off disabled', ()=> {
        render(SignUpPage)
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeDisabled()
    })

    it('but once the inputs are filled out and the passwords match it becomes enabled', async ()=> {
        render(SignUpPage)
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await filloutForm()
        expect(submitButton).toBeEnabled()
    })

    it('sign up button sends a POST request to backend with the login info (username, pass, email)', async ()=> {
        render(SignUpPage)
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await filloutForm()

        const mockFn = jest.fn()

        axios.post = mockFn

        await userEvent.click(submitButton)

        const firstCall = mockFn.mock.calls[0]
        const body = firstCall[1]
        expect(body).toEqual({
            username: defaultUser,
            email: defaultEmail,
            password: defaultPass
        })   
    })


})

