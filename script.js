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
