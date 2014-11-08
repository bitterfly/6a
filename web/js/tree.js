var BinaryTreeNode = Class.create({

    initialize: function(value, parent, f) {
        if (parent === true) {
            this.parent == null;
            var obj = typeof value === 'string' ? JSON.parse(value) : value;

            if (Array.isArray(obj)) {
                this.value = f ? f(obj[0]) : obj[0];
                if (obj.length >= 1) this.left  = create_binary_tree_node(obj[1], this);
                if (obj.length >= 2) this.right = create_binary_tree_node(obj[2], this);
            }
        } else {
            this.value  = value;
            this.parent = parent;
        }
    },

    append_child: function(value) {
        if (!this.left && !this.right) {
            this.left =  new BinaryTreeNode(value, this);
        } else if (this.left && !this.right) {
            this.right = new BinaryTreeNode(value, this);
        } else {
            return false;
        }

        return true;
    },

    append_child_rec: function(value) {
        return this.appendChild(value)           ||
               this.left.appendChild(value)      ||
               this.right.appendChild(value)     ||
               this.left.appendChildRec(value)   ||
               this.right.appendChildRec(value);
    },

    find_rec: function(value) {
        return this.value === value ? this : this.left.findRec(value) || this.right.findRec(value);
    },

    export: function(as_array) {
        return as_array ? [this.value, this.left ? this.left.export() : null, this.right ? this.right.export() : null] : JSON.stringify(this);
    }

});

var BinaryTree = new Class.create({

    initialize: function(value) {
        this.root = new BinaryTreeNode(value, null);
    },

    append: function(value) {
        if (!this.root) {
            this.root = new BinaryTreeNode(value, null);
        } else {
            this.root.append_child_rec(value);
        }
    },

    find: function(value) {
        return this.root.find_rec(value);
    },

    export: function(as_array) {
        return this.root.export(as_array);
    }

});

function create_binary_tree_node(source, parent, f) {
    var obj = typeof source === 'string' ? JSON.parse(source) : source;

    if (Array.isArray(obj)) {
        var root = new BinaryTreeNode(f ? f(obj[0]) : obj[0], parent);
        if (obj.length >= 1) root.left  = create_binary_tree_node(obj[1], root);
        if (obj.length >= 2) root.right = create_binary_tree_node(obj[2], root);
        return root;
    }

    return obj;
}

function is_path(from, to) {
    return from === to || from.left && is_path(from.left, to) || from.right && is_path(from.right, to);
}

