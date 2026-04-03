const calendlyBaseUrl = "https://calendly.com/kessem-mechali/30min";

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const parentName = document.getElementById("parentName").value.trim();
    const parentEmail = document.getElementById("parentEmail").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const subjects = document.getElementById("subjects").value.trim();
    const grade = document.getElementById("grade").value.trim();
    const sessionType = document.getElementById("sessionType").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const params = new URLSearchParams();

    params.set("name", parentName);
    params.set("email", parentEmail);

    // Calendly custom questions:
    // a1 = Complete Address (Postal Code, City)
    // a2 = Phone Number
    // a3 = Student name
    // a4 = Which subjects does your child need support in?
    // a5 = What is the student’s current grade level?
    // a6 = Online or In-person
    // a7 = Additional Notes

    params.set("a1", address);
    params.set("a2", phone);
    params.set("a3", studentName);
    params.set("a4", subjects);
    params.set("a5", grade);
    params.set("a6", sessionType);
    params.set("a7", notes);

    const finalUrl = `${calendlyBaseUrl}?${params.toString()}`;

    window.location.href = finalUrl;
  });
}
