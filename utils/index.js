export const imageChecker = (url) => {
    if(!url) return false

    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|gif|bmp|webpg)$', 'i');
        return pattern.test(url);
    }
};