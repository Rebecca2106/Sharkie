class Sound {

	audio;

	constructor(pfad) {
		this.pfad = pfad;
		this.audio = new Audio(pfad);

	}

	configuresound(audio) {

		let volume = document.querySelector("#volume-control");
		volume.addEventListener("change", function (e) {
			audio.volume = e.currentTarget.value / 100;
		})
	}
}

