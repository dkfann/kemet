const imagePath = '../assets/images';
const getInitialGameState = (usernames) => {
    return {
        // Takes all the usernames and returns an object
        // with the usernames as keys with empty arrays as values
        ...usernames.reduce((acc, username) => {
            return {
                ...acc,
                [username]: [],
            }
        }, {})
    };
};

module.exports = {
    getInitialGameState,
};
