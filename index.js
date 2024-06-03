let subscriber = null

export const explicit = value => {
	const subscriptions = new Set()

	return {
		get value() {
			if (subscriber) {
				subscriptions.add(subscriber)
			}
			return value
		},
		set value(newValue) {
			value = newValue
			subscriptions.forEach(fn => fn())
		},
	}
}

export const implicit = fn => {
	const derived = explicit()
	fx(() => {
		derived.value = fn()
	})
	return derived
}

export const fx = fn => {
	subscriber = fn
	fn()
	subscriber = null
}