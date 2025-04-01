function toggleDetails(patientId) {
    const details = document.getElementById(patientId);
    // Toggle visibility of the patient details tab
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
