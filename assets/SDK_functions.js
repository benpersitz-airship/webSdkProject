// SDK CODES

function prompt_registration() {
	UA.then((sdk) => {
		sdk.plugins
			.load(
				"html-prompt",
				"https://aswpsdkus.com/notify/v1/ua-html-prompt.min.js",
				{
					askAgainDelay: 0,
					i18n: {
						en: {
							title: "Lets keep in touch",
							message:
								"Make sure you stay up to date with everything Airship SDK. Subscribe to notifications. We send about one per week.",
							accept: "Sign up now",
							deny: "So you're saying there's a chance.."
						}
					}
				}
			)
			.then((plugin) => plugin.prompt());
	});
}

function prompt_sms_form() {
	let options = {
		platform: "sms",
		// automatic: {
		// 	askAgainDelay: 0
		// },
		i18n: {
			en: {
				terms: "These are terms that you agree to.",
				footer: "This here be a footer",
				placeholderMsisdn: "1360-867-5309",
				submitButton: "Receive Texts",
				invalidMsisdn: "Whoops, that number wasn't valid. Please try again"
			}
		},
		senderId: "63706",
		country: "US"
	};
	UA.then((sdk) => {
		return sdk.plugins.load(
			"subscription-form",
			"https://aswpsdkus.com/notify/v1/ua-subscription-form.min.js"
		);
	}).then((formFactory) => {
		let form = formFactory.setupModalForm(options);
		form.open()
	});
}

function prompt_email_form() {
	let options = {
		platform: "email",
		size: "large",
		automatic: {
			askAgainDelay: 0
		},
		i18n: {
			en: {
				terms: "These are terms that you agree to.",
				footer: "This here be a footer",
				placeholderEmail: "support@airship.com",
				submitButton: "Receive Emails",
				invalidEmail: "Whoops, that email wasn't valid. Please try again"
			}
		},
		senderId: "63706",
		country: "US"
	};
	UA.then((sdk) => {
		return sdk.plugins.load(
			"subscription-form",
			"https://aswpsdkus.com/notify/v1/ua-subscription-form.min.js"
		);
	}).then((formFactory) => {
		formFactory.setupModalForm(options);
		// form.open()  //call this if you aren't using automatic display
	});
}

async function associateNamedUser() {
	const namedUserId = document.querySelector("#nuid").value;
	const SDK = await UA;
	const channel = await SDK.getChannel();
	channel.namedUser.set(namedUserId);
}

async function changeTags(e) {
	const id = e.id;
	const tagNU = document.getElementById("tagNU");
	const tagGroup = document.getElementById("tag-group").value;
	const tagString = document.getElementById("tag-name").value;
	const SDK = await UA;
	const channel = await SDK.getChannel();
	if (tagNU.checked) {
		if (id == "tag-add") {
			channel.namedUser.tags.add(tagString, tagGroup);
		} else if (id == "tag-remove") {
			channel.namedUser.tags.remove(tagString, tagGroup);
		} else {
			channel.namedUser.tags.set(tagString, tagGroup);
		}
	} else {
		if (id == "tag-add") {
			channel.tags.add(tagString, tagGroup);
		} else if (id == "tag-remove") {
			channel.tags.remove(tagString, tagGroup);
			console.log("tag removed");
		} else {
			channel.tags.set(tagString, tagGroup);
		}
	}
}

async function setAttrs() {
	const attrNU = document.getElementById("attrNU");
	const SDK = await UA;
	const channel = await SDK.getChannel();
	const fnValue = document.querySelector("#first_name").value;
	const lnValue = document.querySelector("#last_name").value;
	const tierValue = document.querySelector("#loyalty_tier").value;
	const valueList = {
		first_name: fnValue,
		last_name: lnValue,
		loyalty_tier: tierValue
	};
	for (let value of Object.keys(valueList)) {
		if (valueList[value] == "") {
			delete valueList[value];
		} else if (valueList[value] == "null") {
			valueList[value] = "";
			console.log("WOWWWW");
		}
	}
	if (attrNU.checked) {
		const results = await channel.namedUser.attributes.set(valueList);
		results == true
			? console.log("Attributes set")
			: console.log("An error occurred");
	} else {
		const results = await channel.atributes.set(valueList);
		results == true
			? console.log("Attributes set")
			: console.log("An error occurred");
	}
}
