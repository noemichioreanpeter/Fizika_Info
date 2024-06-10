function calculateJumpVelocity() {
    // Az értékek beolvasása 
    const massBoat = parseFloat(document.getElementById('massBoat').value);
    const velocityBoat = parseFloat(document.getElementById('velocityBoat').value);
    const massPerson = parseFloat(document.getElementById('massPerson').value);

    // Ember sebességének kiszámítása
    const velocityPerson = (massBoat + massPerson) * velocityBoat / massPerson;

    // Eredmény kiírása
    document.getElementById('result').innerText = "Az ember kiugrási sebessége: " + velocityPerson.toFixed(2) + " m/s";

    document.getElementById('magyarazat').classList.remove('hidden');
}