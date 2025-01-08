import React from "react";
import "./../css/form.css";

function Form() {
  return (
    <form>
      <div class="mb-3">
        <label for="InputName" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="InputName"
          aria-describedby="nameHelp"
          placeholder="Votre nom"
        />
        <label for="InputEmail" class="form-label"></label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          placeholder="Votre adresse email"
        />
        <label for="InputPhone" class="form-label"></label>
        <input
          type="tel"
          class="form-control"
          id="InputPhone"
          aria-describedby="phoneHelp"
          placeholder="Votre numéro de téléphone"
        />

        <label for="InputMessage" class="form-label"></label>
        <input
          type="textarea"
          class="form-control"
          id="InputMessage"
          aria-describedby="messageHelp"
          placeholder="Votre message"
        />
        <div class="mb-3"></div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
