import '../css/style.css';
import './plugins';
import locations from "./store/locations";
import formUI from "./views/form";
import ticketsUI from "./views/tickets";
import currencyUI from "./views/currency";

document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const form = formUI.form;

    // Events
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    });

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // get all data from inputs
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;
        // CODE, CODE, 2019-09, 2019-10
        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        });
        ticketsUI.renderTickets(locations.lastSearch);
    }
});