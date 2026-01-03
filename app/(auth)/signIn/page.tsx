'use client'

import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import InputField from '@/components/forms/InputField';
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignInFormData) => {
        try{
            console.log("handleSubmit", data);
        }catch(error){
            console.log("handleSubmit", error);
        }
    }

    return (
        <>
            <h1 className="form-title">Welcome back</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField name="email" label="Email" placeholder="contact@gmail.com" register={register} error={errors.email}
                        validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}/>

            <InputField name="password" label="Password" placeholder="enter your password" register={register} error={errors.password}
                        validation={{ required: 'Password is required', minLength: 8 }}/>

            <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                {isSubmitting ? 'Signing In' : 'Sign In'}
            </Button>

            <FooterLink text="Don't have an account?" linkText="Create an account" href="/signUp" />
        </form>
        </>
    )
}
export default Page
