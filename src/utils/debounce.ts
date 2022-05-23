export const debounce = (func: (some: any) => void, timeout = 300): any => {
    let timer: any;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};
// function saveInput() {
//     console.log('Saving data');
// }
//  const processChange = debounce(() => saveInput());
