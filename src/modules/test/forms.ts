export const formData = (form: HTMLElement) => {
    const inputs = form.querySelectorAll('input');
    let values: {[prop: string]: string} = {};
    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
};
