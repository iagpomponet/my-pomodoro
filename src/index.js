class App {
	start() {
		const timer = new Timer(120 * 1);
		timer.watch();
	}
}

class Timer {
	constructor(time) {
		this.time = time;
		this.isTimerRunning = false;
		this.timerButtonElement = document.querySelector('.pomodoro__timer-button');
	}

	watch() {
		const btnElement = this.timerButtonElement;
		const timerElement = document.querySelector('.pomodoro__timer');

		let timeState = this.time;
		let timer = null;

		let minutes = Math.floor(timeState / 60);
		let seconds = timeState % 60;

		timerElement.textContent = `${minutes || '00'}: ${seconds || '00'}`;

		btnElement && btnElement.addEventListener('click', () => {
			const isStopped = document.querySelector('.pomodoro__timer-button').textContent === "START";
			console.log('starting timer');

			// if stopped -> starts , if running => stops
			console.log('timer', timer)
			console.log('isStopped', isStopped)

			if (!isStopped) {
				btnElement.textContent = "START"
				clearInterval(timer)
			}
			else {
				timer = setInterval(() => {
					console.log('minutes', minutes);
					console.log('seconds', seconds);
					console.log('timeState', timeState);

					timeState = timeState - 1;
					minutes = Math.floor(timeState / 60);
					seconds = timeState % 60;

					timerElement.textContent = `${minutes || '00'}: ${seconds || '00'}`;

					return;
				}, 1000);

				btnElement.textContent = "STOP";
			}
		})

		console.log(this.timerElement);
	}

}

const app = new App();
app.start();