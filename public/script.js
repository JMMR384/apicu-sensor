async function fetchHives() {
    const response = await fetch('/api/hives');
    const data = await response.json();
    // Aquí puedes actualizar la UI con los datos obtenidos
}

async function addHive(hive) {
    const response = await fetch('/api/hives', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hive),
    });
    const newHive = await response.json();
    console.log('Colmena agregada:', newHive);
    // Actualiza la UI si es necesario
}