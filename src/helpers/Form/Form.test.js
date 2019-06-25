import * as FormHelpers from './Form';

test('Dinamic form to get a Key Pair Value Array', () => {
    const form = { 
        shippingForm: {
            street: {
                inputtype: "input",
                inputproperties: {
                    placeholder: "Place Holder",
                    type: "text",
                    value: "Testing Value"
                }
            }
        }
    }

    const objResultToMatch = [{"id": "street", "value": "Testing Value"}];

    expect(FormHelpers.StateFormToKeyPair(form.shippingForm)).toMatchObject(objResultToMatch)
})