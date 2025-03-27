

// Function to validate password: At least 8 characters, contains a symbol
export const passwordValidate = (password) => {
    const regex = /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
};
