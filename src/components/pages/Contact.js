import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Us</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
             value="Alexmaxwell@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">website</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value="www.ARmaxwell.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">GitHub</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value="https://github.com/Alexmaxwell7"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
