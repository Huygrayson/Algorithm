class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        function checkNode(newNode, currNode){
            if(newNode.val >= currNode.val){
                if(currNode.right === null){
                    currNode.right = newNode;
                    console.log(`${newNode.val} right ${currNode.val}`);
                }
                else{
                    checkNode(newNode, currNode.right);
                }
            }
            else{
                if(currNode.left === null){
                    currNode.left = newNode;
                    console.log(`${newNode.val} left ${currNode.val}`);
                }
                else{
                    checkNode(newNode, currNode.left);
                }
            }

        }
        if(!this.root){
            this.root = newNode;
            console.log(`root ${newNode.val}`);
        }
        else{
            checkNode(newNode, this.root)
        }
    }
    find(value){
        var retNode = null;
        function compareNode(val, currNode){
            if(val === currNode.val){
                retNode = currNode;
            }
            else{
                if(val > currNode.val){
                    if(currNode.right === null){
                        return null;
                    }
                    else{
                        compareNode(val, currNode.right);
                    }
                }
                else{
                    if(currNode.left === null){
                        return null;
                    }
                    else{
                        compareNode(val, currNode.left);
                    }
                }
            }
            return retNode
        }
        if(!this.root){
            return undefined;
        }
        else{
            return compareNode(value, this.root)
        }
    }
    // breadth first search
    BFS(){
        var currNode = this.root;
        var data = [];
        var queue = [];
        queue.push(currNode);
        while(queue.length){
            var currNode = queue.shift();
            data.push(currNode.val);
            if(currNode.left) queue.push(currNode.left);
            if(currNode.right) queue.push(currNode.right);
        }
        return data;
    }
    // Depth first searches below
    DFSPreOrder(){
        var currNode = this.root;
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(currNode);
        return data
    }
    DFSPostOrder(){
        var currNode = this.root;
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(currNode);
        return data
    }
    DFSInOrder(){
        var currNode = this.root;
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(currNode);
        return data
    }
}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(20);
tree.insert(21);
tree.insert(12);
tree.insert(10);
tree.insert(9);
tree.insert(17);
tree.insert(14);
console.log(tree.DFSInOrder());