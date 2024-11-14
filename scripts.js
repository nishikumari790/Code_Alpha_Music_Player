const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');

const tracks = [
    {
        name: 'Track 1',
        artist: 'Arjit Singh',
        src: 'track1.mp3'
    },
    {
        name: 'Track 2',
        artist: 'Mitraz',
        src: 'track2.mp3'
    },
    {
        name: 'Track 3',
        artist: 'blue',
        src: 'track3.mp3'
    }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audioSource.src = track.src;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artist;
    audio.load();
}

function playTrack() {
    audio.play();
}

function pauseTrack() {
    audio.pause();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
        playButton.textContent = 'Pause';
    } else {
        pauseTrack();
        playButton.textContent = 'Play';
    }
});

nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

// Load the first track on start
loadTrack(currentTrackIndex);
