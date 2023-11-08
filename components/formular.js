const formTemplate = document.createElement('template');

class Form extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div id="anmelden" class="component form active">
            <h2>Anmelden</h2>
            <form class="anmeldeformular">
                <input type="text" name="firstname"  placeholder="Vorname*" required>
                <input type="text" name="lastname" placeholder="Nachname*" required>
                <input type="email" name="email" placeholder="E-Mail*" required>
                <input type="text" name="birthday" placeholder="Geburtsdatum" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input type="text" name="address" placeholder="Adresse">
                <input type="number" name="plz" placeholder="PLZ">
                <input type="text" name="ort" placeholder="Ort">
                <input type="tel" name="phone" placeholder="Telefon/Mobile*" required>
                <textarea type="text" name="comment" placeholder="Bemerkung"></textarea>
                <input type="submit" value="Anmelden">
            </form>
        </div>
    `;
    }
}
  
customElements.define('form-component', Form);