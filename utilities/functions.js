export const getTimeDiffInString = (timeDiff) => {
	let delta = timeDiff / 1000;

	timeDiff;
	const hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	const mins = Math.floor(delta / 60) % 60;
	delta -= mins * 60;
	const secs = Math.floor(delta) % 60;
	return { hours: pad(hours), mins: pad(mins), secs: pad(secs) };
};

const pad = (toPad) => {
	if (String(toPad).length == 1) return `0${toPad}`;
	return `${toPad}`;
};
