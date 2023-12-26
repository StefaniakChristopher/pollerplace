// @ts-nocheck
import { render, screen} from '@testing-library/svelte';
// @ts-ignore
import SignUpPage from './+page.svelte';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const filloutForm = async () => {
    await userEvent.type(emailInput, "something@mail.com")
    await userEvent.type(usernameInput, "muhammad")
    await userEvent.type(passwordInput, "muhammad123")
    await userEvent.type(repeatPasswordInput, "muhammad123")
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
        expect(usernameInput).toBeInTheDocument();
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
})

