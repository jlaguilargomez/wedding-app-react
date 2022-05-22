export function takeUserFromEmail(email: string | undefined | null): string {
    if (!email) {
        return '';
    }
    return email.split('@')[0];
}
