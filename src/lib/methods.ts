export const extractFirstAndLastName = (name: string) => {
    const nameArr = name.split(" ");
    return {
        firstName: nameArr[0],
        lastName: nameArr[1],
    };
}

