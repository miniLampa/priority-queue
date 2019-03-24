class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) {
			return;
		}

		node.parent = this;

		if (this.left) {
			this.right = node;
		} else {
			this.left = node;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			node.parent = null;
			this.left = null;
		} else if (this.right === node) {
			node.parent = null;
			this.right = null;
		} else {
			throw new Error('Unassigned node');
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) {
			return;
		}

		const left = this.left;
		const right = this.right;
		const parent = this.parent;
		const extra = this.parent.parent;

		if (extra) {
			this.parent = extra;
			if (extra.left === parent) {
				extra.left = this;
			} else {
				extra.right = this;
			}
		} else {
			this.parent = null;
		}

		if (parent.left === this) {
			this.left = parent;
			this.right = parent.right;
			if (this.right) {
				this.parent = this;
			}
		} else {
			this.right = parent;
			this.left = parent.left;
			if (this.left) {
				this.left.parent = this;
			}
		}

		parent.parent = this;
		parent.left = left;
		parent.right = right;
	}
}

module.exports = Node;
