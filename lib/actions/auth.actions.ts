'use server';
import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client"
export const signUpWithEmail = async({ email, fullName, investmentGoals, preferredIndustry, password, riskTolerance, country}: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({
            body: {email, password, name: fullName}
        });

        if (response) {
         await inngest.send({
             name: 'app/user.created',
             data: { email, name: fullName, investmentGoals, preferredIndustry, country}
         })
        }
        return { success: true, data: response}
    } catch(e) {
        console.log('Sign Up Failed', e);
        return  {success:false, error: 'Sign Up Failed'};
    }
}