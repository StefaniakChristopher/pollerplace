import { render, screen } from '@testing-library/svelte';
import Index from '../routes/+page.svelte';
import "@testing-library/jest-dom";


describe('firstpage', () => {

    it('Welcome the user', () => {
        const { getByText } = render(Index)
    
        expect(getByText('Welcome to SvelteKit jos')).toBeInTheDocument();
    });

    it('it has a heading', () => {
        render(Index);
        const header = screen.getByRole("heading", { name: "Sign UP"});
        expect(header).toBeInTheDocument();
    })


})

