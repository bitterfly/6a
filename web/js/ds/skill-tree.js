"use strict";

function SkillTree(source) {
    this.dict = {};
    BinaryTree.call(this, source, true, function(value) { this.dict[value.name] = value; });
    this.points = 0;
}

SkillTree.prototype = new BinaryTree;

SkillTree.prototype.master = function(skill) {
    var skill_node = this.find_rec(skill); 

    if (!skill_node.mastered && this.points > skill_node.price) {
        this.points -= skill_node.price;
        skill_node.mastered = true;
    }
}

SkillTree.prototype.add_points = function(points) {
    this.points += points;
}

SkillTree.prototype.find = function(name) {
    return this.dict[name];
}

