var SkillTree = Class.create(BinaryTree, {

    initialize: function($super, source) {
        this.dict = {};
        $super(source, true, function(value) { dict[value.name] = value; });
        this.points = 0;
    },

    master: function(skill) {
        var skill_node = find_rec(skill); 

        if (!skill_node.mastered && this.points > skill_node.price) {
            this.points -= skill_node.price;
            skill_node.mastered = true;
        }
    },

    add_points: function(points) {
        this.points += points;
    },

    find: function(name) {
        return dict[name];
    }

});
 
