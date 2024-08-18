import { useEffect, useState, useCallback } from "react";
import { ApplicationVerifier, RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/firebase/authentication";

export function useRecaptcha(componentId: string) {
    const [recaptcha, setRecaptcha] = useState<ApplicationVerifier | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const initializeRecaptcha = useCallback(() => {
        try {
            const recaptchaVerifier = new RecaptchaVerifier(auth, componentId, {
                "size": "invisible", // ReCAPTCHA runs only when needed
                "callback": () => { } // Function to execute when reCAPTCHA is verified
            });
            setRecaptcha(recaptchaVerifier);
        } catch (error) {
            console.error("Failed to initialize reCAPTCHA: ", error);
            setError(error instanceof Error ? error : new Error('Failed to initialize reCAPTCHA'));
        }
    }, [componentId]);

    useEffect(() => {
        initializeRecaptcha();
        return () => {
            if (recaptcha instanceof RecaptchaVerifier) {
                try {
                    recaptcha.clear(); // Ensure recaptcha is an instance of RecaptchaVerifier before calling clear
                } catch (cleanupError) {
                    console.error("Error cleaning up reCAPTCHA: ", cleanupError);
                }
            }
        };
    }, [initializeRecaptcha, recaptcha]);

    return { recaptcha, error };
}
