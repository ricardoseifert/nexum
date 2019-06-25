// Ich würde es später erweitern, damit mehr Funktionalität unterstützt werden können.
export const NumberFormatter = (value, props) => {
    return new Intl.NumberFormat('de-DE', props).format(value);
}
