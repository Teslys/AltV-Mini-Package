window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

if('alt' in window) {
    if ('SpeechRecognition' in window) {
        const recognition = new window.SpeechRecognition();
        alt.on('microphoneON',() => {
            console.log("Bu Da geliyor")
            recognition.onresult = (event) => {
                console.log('buraya geliyor')
                const speechToText = event.results[0][0].transcript;
                console.log(event)
                alt.emit('pushClient',speechToText)
            }
            recognition.start();
        })
    } else {
        console.log("api Desteklenmiyor..")
    }
}
