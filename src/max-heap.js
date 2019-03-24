const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
    const node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
			return;
		}

		const parentNode = this.parentNodes[0];

		parentNode.appendChild(node);
		this.parentNodes.push(node);

		if (parentNode.left && parentNode.right) {
			this.parentNodes.shift();
		}
  }

  shiftNodeUp(node) {
		if (node.parent) {	
			if (node.priority > node.parent.priority) {
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else {
			this.root = node;
		}
	}
  
  pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return !this.root;
	}

	clear() {
		
	}

	shiftNodeDown(node) {
		if (node.parent) {	
			if (node.priority < node.parent.priority) {
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else {
			this.root = node;
		}
	}
}

module.exports = MaxHeap;
