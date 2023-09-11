export default function Card({id, personal_info, employee_name, employee_salary, employee_age, image}){
    //deestructurar datos del objeto personal_info
    const {address, phone_number, zipcode} = personal_info;
    //deestructurar datos del objeto image
    const {profile_image: image_url, description: image_description} = image;
    const card = document.createElement("div");
    card.innerHTML =
    `<div class="card">
        <img src="${image_url}" class="card-img-top" alt="${image_description}">
        <div class="card-body">
          <h3 class="card-title">#${id} ${employee_name}</h3>
          <p class="card-text">
          Age: <div class="ageText">${employee_age}</div><br>
          Salary: <div class="salaryText">${employee_salary}</div>
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
          Personal info:<br>
          Address: ${address}<br>
          Phone_number: ${phone_number}<br>
          Zipcode: ${zipcode}
          </small>
        </div>
      </div>`
    return card;
}