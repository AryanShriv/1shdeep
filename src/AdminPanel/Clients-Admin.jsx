import React from "react";
import "./AdminPanel.css";

const ClientsAdmin = () => {
  return (
    <div className="client-container">
      <div class="Clintele">
        <form className="flex flex-col">
          <div class="form-control">
            <textarea
              className="input input-alt"
              placeholder="Your Client's Link Here!"
              required=""
              type="text"
            />
            <span class="input-border input-border-alt"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientsAdmin;
