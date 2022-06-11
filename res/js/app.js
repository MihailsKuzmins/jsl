function setLocale(langRes) {
	const element = document.getElementById("lang-selector");
	if (!element) {
		return;
	}

	const obj = langRes[element.value];
	if (!obj) {
		return;
	}

	for (const key of Object.keys(obj)) {
		const localeElem = document.getElementById(key);
		if (localeElem) {
			localeElem.innerHTML = obj[key];
		}
	}
}
