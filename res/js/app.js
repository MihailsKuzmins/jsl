const localeKey = "locale";

function loadLocale(langRes) {
	const element = getLocaleSelector();
	if (!element) {
		return;
	}

	const locale = localStorage.getItem(localeKey) || "en";
	element.value = locale;
	setLocalePrivate(locale, langRes);
}

function setLocale(langRes) {
	const element = getLocaleSelector();
	if (!element) {
		return;
	}

	localStorage.setItem(localeKey, element.value);
	setLocalePrivate(element.value, langRes);
}

function setLocalePrivate(locale, langRes) {
	const obj = langRes[locale];
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

function getLocaleSelector() {
	return document.getElementById("lang-selector");
}
