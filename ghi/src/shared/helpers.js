export const wait = ms =>
new Promise((resolve => {
    setTimeout(() => {
        resolve();
    }, ms);
}));

export const attack = ({})