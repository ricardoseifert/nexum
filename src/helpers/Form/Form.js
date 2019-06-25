export const StateFormToKeyPair = (stateForm) => {
    const formElementsArray = [];
    for (let key in stateForm) {
        formElementsArray.push({
            id: key,
            value: stateForm[key].inputproperties.value
        });
    }
    return formElementsArray;
}