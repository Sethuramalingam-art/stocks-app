"use client"
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form';
import {Button} from "@/components/ui/button";

const Page = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName:'',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology',
        },
        mode:'onBlur'
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
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting? 'Creating Account' : 'Start Your Investing Journey'}
                </Button>
            </form>
        </>
    )
}
export default Page
