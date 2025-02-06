"use client"
import { signUpSchema } from "@/lib/validation";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/auth";


export default function Page() {
    return (
        <AuthForm
            type="SIGN_UP"
            schema={signUpSchema}
            defaultValues={{
                email: "",
                password: "",
                fullName: "",
                universityId: 0,
                universityCard: "",
            }}
            onSubmit={signUp}
        />
    );
}
