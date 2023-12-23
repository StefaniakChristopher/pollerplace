// @ts-nocheck
import { render, screen } from '@testing-library/svelte';
// @ts-ignore
import SignUpPage from './+page.svelte';
import "@testing-library/jest-dom";


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

    it('has a submit button', () => {
        render(SignUpPage);
        const passwordInput = screen.get
        expect(usernameInput).toBeInTheDocument();
    })
    
})

