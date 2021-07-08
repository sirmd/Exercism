function LinkedList() {
	let head = { id: null, isHead: true };
	let tail = { id: null, isTail: true };
	head.next = tail;
	tail.prev = head;

	const push = (id) => {
		const node = {
			id,
			next: tail,
			prev: tail.prev,
		};
		node.prev.next = node;
		node.next.prev = node;
	};

	const unshift = (id) => {
		const node = {
			id,
			next: head.next,
			prev: head
		};
		node.prev.next = node;
		node.next.prev = node;
	};

	const pop = () => {
		const node = tail.prev;
		tail.prev = node.prev;
		node.prev.next = tail;
		return node.id;
	};

	const shift = () => {
		const node = head.next;
		head.next = node.next;
		node.next.prev = head;
		return node.id;
	}

	const hasNext = (node) => !node.next.isTail;

	const count = () => {
		let count = 0;
		let node = head;
		while (hasNext(node)) {
			++count;
			node = node.next;
		}
		return count;
	};

	const deleteNode = (id) => {
		const replaceNode = (node) => {
			node.prev.next = node.next;
			node.next.prev = node.prev;
		}

		let node = head;

		do {
			node = node.next;
			if (node.id === id) {
				return replaceNode(node);
			};
		} while (hasNext(node));
	}

	return {
		push,
		pop,
		shift,
		unshift,
		count,
		delete: deleteNode
	}
}

module.exports = {
	LinkedList
}

