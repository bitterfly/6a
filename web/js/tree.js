"use strict";

function BinaryTreeNode(value, parent) {
    if (parent === true && value) {
        var obj = typeof value === 'string' ? JSON.parse(value) : value;

        if (Array.isArray(obj)) {
            this.value = obj[0];
        }
    } else {
        this.value  = value;
        //this.parent = parent;
    }
};

BinaryTreeNode.prototype.append_child = function (value) {
    if (!this.left && !this.right) {
        this.left =  new BinaryTreeNode(value, this);
    } else if (this.left && !this.right) {
        this.right = new BinaryTreeNode(value, this);
    } else {
        return false;
    }

    return true;
};

BinaryTreeNode.prototype.append_child_rec = function (value) {
    return this.append_child(value)            ||
           this.left.append_child(value)       ||
           this.right.append_child(value)      ||
           this.left.append_child_rec(value)   ||
           this.right.append_child_rec(value);
};

BinaryTreeNode.prototype.find_rec = function (value) {
    return this.value === value ? this : this.left.find_rec(value) || this.right.find_rec(value);
};

BinaryTreeNode.prototype.export = function (as_array) {
    return as_array ? [this.value, this.left ? this.left.export(true) : null, this.right ? this.right.export(true) : null] : JSON.stringify(this);
};

function BinaryTree(value) {
    if (value) {
        this.root = new BinaryTreeNode(value);
    }
};

BinaryTree.prototype.append = function (value) {
    if (!this.root) {
        this.root = new BinaryTreeNode(value);
    } else {
        this.root.append_child_rec(value);
    }
};

BinaryTree.prototype.find = function (value) {
    return this.root.find_rec(value);
};

BinaryTree.prototype.export = function (as_array) {
    return this.root.export(as_array);
};

function create_binary_tree_node(source, parent, f) {
    var obj = typeof source === 'string' ? JSON.parse(source) : source;

    if (Array.isArray(obj)) {
        var root = new BinaryTreeNode(f ? f(obj[0]) : obj[0], null);
        if (obj.length >= 1) { root.left  = create_binary_tree_node(obj[1], null); }
        if (obj.length >= 2) { root.right = create_binary_tree_node(obj[2], null); }
        return root;
    }

    return obj;
};

function create_binary_tree(source, f) {
    var tree = new BinaryTree();
    tree.root = create_binary_tree_node(source, null, f);
    return tree;
};

function is_path(from, to) {
    return from === to || from.left && is_path(from.left, to) || from.right && is_path(from.right, to);
};

