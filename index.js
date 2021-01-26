// function for handling form submission
const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const errors = validateForm(formData);

    // clear all previous errors
    const errorElements = document.querySelectorAll('.error');
    for (let element of errorElements) {
        element.style.display = 'none';
    }

    // display any new errors
    Object.keys(errors).forEach((key) => {
        // find specific the specific error element
        const errorElement = document.querySelector(`#park_${key} .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = 'block';
    });

    // if there are no errors
if (!Object.keys(errors).length) {
    //create a new element
    const parkSection = document.createElement("section");
  
    // add the park class
    parkSection.classList.add("park");
  
    // construct the HTML for this element
    const content = `
      <h2>${formData.get("name")}</h2>
      <div class="location">${formData.get("location")}</div>
      <div class="description">${formData.get("description")}</div>
      <button class="rateBtn" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established stat">
          <h3>Established</h3>
          <div class="value">${formData.get("established")}</div>
        </div>
        <div class="area stat">
          <h3>Area</h3>
          <div class="value">${formData.get("area")}</div>
        </div>
        <div class="rating stat">
          <h3>Rating</h3>
          <div class="value">${formData.get("rating")}</div>
        </div>
      </div>
      `;
  
    // set the innerHTML
    parkSection.innerHTML = content;
  
    //append to the main element
    document.querySelector("main").appendChild(parkSection);
  }

    // // get park name (name) value
    // const name = formData.get('name');
    // console.log(name);

    // // get park location (name) value
    // const location = formData.get('location');
    // console.log(location);

    // // get park description (name) value
    // const description = formData.get('description');
    // console.log(description);

    // // get park established date (name) value
    // const established = formData.get('established');
    // console.log(established);

    // // get park area stat (name) value
    // const area = formData.get('area');
    // console.log(area);

    // // get park rating (name) value
    // const rating = formData.get('rating');
    // console.log(rating);
};

// event listener function for form submission
const main = () => {
    // get the form element
    const form = document.querySelector('#parkForm');
    // attach the submit handler
    form.addEventListener('submit', submitHandler);
};

// accepts a single string value and returns true if the value is not null and the string contains at least one none-space character
function validateExists(value) {
    return value && value.trim();
}

// function takes each input field, performs required validation on it and generate a collection of error messages which may then be displayed for the user
function validateForm(formData) {
    const errors = {};
  
    // check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
  
    // check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    }
  
    // check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
  
    return errors;
  }

// event listener to invoke main() function
window.addEventListener('DOMContentLoaded', main);