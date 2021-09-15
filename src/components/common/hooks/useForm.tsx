import * as React from 'react';

interface InitialStateInterface {
    first_name?: string
    last_name?: string
    name?: string
    email?: string
    password?: string
    phone?: string
    message?: string
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
