const calendlyBaseUrl = "https://calendly.com/kessem-mechali/30min";

const bookingForm = document.getElementById("bookingForm");
const addressInput = document.getElementById("address");

let autocomplete;

function initAddressAutocomplete() {
  if (!window.google || !google.maps || !google.maps.places || !addressInput) return;

  autocomplete = new google.maps.places.Autocomplete(addressInput, {
    types: ["address"],
    componentRestrictions: { country: "ca" },
    fields: ["formatted_address", "address_components"]
  });

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();

    if (place && place.formatted_address) {
      addressInput.value = place.formatted_address;
    }
  });
}

window.addEventListener("load", function () {
  initAddressAutocomplete();
});

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const parentName = document.getElementById("parentName").value.trim();
    const parentEmail = document.getElementById("parentEmail").value.trim();
    const address = document.getElementById("address").value.trim();

    const rawPhone = document.getElementById("phone").value.replace(/\D/g, "");
    const phone = rawPhone.startsWith("1") ? `+${rawPhone}` : `+1${rawPhone}`;

    const studentName = document.getElementById("studentName").value.trim();
    const subjects = document.getElementById("subjects").value.trim();
    const grade = document.getElementById("grade").value.trim();
    const sessionType = document.getElementById("sessionType").value;
    const notes = document.getElementById("notes").value.trim();

    const params = new URLSearchParams({
      name: parentName,
      email: parentEmail,
      a1: address,
      a2: phone,
      a3: studentName,
      a4: subjects,
      a5: grade,
      a6: sessionType,
      a7: notes
    });

    window.location.href = `${calendlyBaseUrl}?${params.toString()}`;
  });
}
