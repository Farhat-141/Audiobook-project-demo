const mappings = [
    {coverId: 'book', sound: 'The Courage To Be Disliked.mp3'},
    {coverId: 'baldwin', sound: 'Yeat - if we being real (Slowed) King Baldwin IV.mp3'},
    {coverId: 'podcast', sound: 'chipi chipi chapa chapa dubi dubi daba daba (1).mp3'}
];

let currentSound = ''; // Variable to keep track of the currently playing sound

mappings.forEach(mapping => {
    const coverEl = document.getElementById(mapping.coverId);
    const playerEl = document.getElementById('player');
    const sourceEl = playerEl.querySelector('source');
    const soundNameEl = document.querySelector('.sound-name'); // Select the existing sound name element

    coverEl.addEventListener('click', function() {
        // Check if the clicked sound is the same as the currently playing sound
        if (currentSound === mapping.sound) {
            return; // If it is the same, do nothing
        }

        currentSound = mapping.sound; // Update the current sound
        sourceEl.src = mapping.sound; // Set the audio source
        playerEl.load(); // Load the new source
        playerEl.play(); // Play the audio

        soundNameEl.textContent = mapping.sound; // Update the sound name
    });
});
