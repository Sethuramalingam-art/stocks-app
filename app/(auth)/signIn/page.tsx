'use client'

import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {useRouter} from "next/navigation";
import { toast } from "sonner"
import InputField from '@/components/forms/InputField';
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";
import {signInWithEmail} from "@/lib/actions/auth.actions";

const Page = () => {
    const router = useRouter();
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
            const result = await signInWithEmail(data);

            if (result.success) { router.push('/') }
        }catch(error){
            toast.error('Sign In Failed', {
                description: error instanceof Error ? error.message : 'Failed to create an user'

            });
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
