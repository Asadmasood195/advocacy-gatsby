import * as React from 'react';

interface InitialStateInterface {
    first_name?: string
    last_name?: string
    name?: string
    email?: string
    password?: string
    phone?: string
    message?: string
    company_name? : string
    country? : string
    city? : string
    state? : string
    zip? : string
    street_address? : string
    notes? : string
    sales_tax? : string
    customer_number? : string
    po_number? : string
    card_number? : string
    expiration? : string
    card_security? : string
    e_check? : string
    terms? : boolean
}

export const useForm = (callback: () => void,
    initialState: InitialStateInterface) => {
    const [values, setValues] = React.useState(initialState);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values,
        setValues
    };
};
