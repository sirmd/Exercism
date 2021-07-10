
class PubSub {
	constructor() {
		this.events = {};
		this.eventsEnum = {
			UPDATE: 'update',
			STABILIZE: 'stabilize'
		}
	}

	on(event, eventObj) {
		if (!this.events[event]) {
			this.events[event] = [];
		}

		this.events[event].push(eventObj);

	}

	removeListener(event, eventObj) {
		if (!this.events[event]) {
			return;
		}

		this.events[event] = this.events[event].filter(_eventObj => _eventObj.id !== eventObj.id);

	}

	emit(event, obj) {
		(this.events[event] || []).forEach(({ callback }) => callback(obj));
	}

}

class InputCell extends PubSub {
	constructor(value) {
		super();
		this.value = value;
	}

	setValue(value) {
		this.value = value;

		// Dispatch an update to all listeners
		this.emit(this.eventsEnum.UPDATE, this);

		// Dispatch an stabilize event to execute callbacks
		this.emit(this.eventsEnum.STABILIZE, this);
	}

}

class ComputeCell extends InputCell {
	constructor(inputCells, computerFn) {
		super(computerFn(inputCells));
		this.computerFn = computerFn;
		this.inputs = inputCells;
		this.prevValue = this.value;
		this.inputs.forEach(input => {
			input.on(this.eventsEnum.UPDATE, {
				callback: () => this.compute()
			});
			input.on(this.eventsEnum.STABILIZE, {
				callback: () => this.stabilize()
			})
		});
	}

	addCallback(cb) {
		this.on(this.eventsEnum.STABILIZE, {
			id: cb.id,
			callback: () => cb.call(this)
		});
	}

	removeCallback(cb) {
		this.removeListener(this.eventsEnum.STABILIZE, cb);
	}

	stabilize() {
		if (this.prevValue === this.value) {
			return;
		}

		this.prevValue = this.value;
		this.emit(this.eventsEnum.STABILIZE, this);
	}

	compute() {
		this.value = this.computerFn(this.inputs);
		this.emit(this.eventsEnum.UPDATE, this);
	}

}

class CallbackCell {
	constructor(callback) {
		this.id = Date.now() + Math.ceil(Math.random() * 100000);
		this.values = [];
		this.callback = callback;
	}

	call(cell) {
		this.values.push(this.callback(cell));
	}
}


module.exports = {
	InputCell,
	ComputeCell,
	CallbackCell,
}
