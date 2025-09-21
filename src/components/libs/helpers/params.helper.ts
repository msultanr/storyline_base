export class Params {
    // Function to restore original case (remove lowercase transformation)
    static restoreOriginalCase(input: string) {
        const decodedInput = decodeURIComponent(input);

        return decodedInput?.replace(/-/g, ' ').replace(/\b[a-z]/g, char => char.toUpperCase());
    }

    // Function to generate URL parameter and return original string
    static generateAndRestore(input: string) {
        const urlParam = input.toLowerCase().replace(/\s+/g, '-');
        const original = input;
        return { urlParam, original };
    }

    // Function to replace spaces with dashes
    static replaceSpacesWithDash(input: string) {
        return input.replace(/\s+/g, '-');
    }
}