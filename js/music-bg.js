const audioPlayPause = () => {
    const playPause = document.querySelector('i')
    const audio = document.querySelector('#audio')

    if (audio.paused) {
        audio.play()
        playPause.classList.remove('fa-pause')
        playPause.classList.add('fa-play')
    }else{
        audio.pause()
        playPause.classList.add('fa-pause')
        playPause.classList.remove('fa-play')
    }
}