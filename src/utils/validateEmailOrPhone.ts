export function validateEmailOrPhone(input: string): string {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (emailRegex.test(input)) {
        return "Email";
    } else if (phoneRegex.test(input)) {
        return "Phone Number";
    } else {
        return "Invalid";
    }
}