OrderSkills = {
    faith: {
        level: 1, relicLevel: 1, baseEffect: 0.205, display: 'Faith'
    },
    zeal: {
        level: 1, relicLevel: 1, baseEffect: 0.12, display: 'Zeal'
    },
    devotion: {
        level: 1, relicLevel: 1, baseEffect: 0.135, display: 'Devotion'
    },
    fervour: {
        level: 1, relicLevel: 1, baseEffect: 0.0135, display: 'Fervour'
    },

    /**
     * f setLevel
     * Set the level of a particular order skills
     * 
     * Setting faith level for example; 
     * OrderSkills.setLevel('faith', 2308);
     * @param {string} skillName 
     * @param {int} level 
     */
    setLevel: (skillName, level) => {
        OrderSkills[skillName].level = level;
    },

    /**
     * f getLevel
     * Returns the level of a particular order skill
     * 
     * Getting faith level for example;
     * OrderSkills.getLevel('faith')
     * @param {string} skillName 
     * @returns {int}
     */
    getLevel: (skillName) => {
        return parseInt(OrderSkills[skillName].level);
    },

    /**
     * f setRelicLevel
     * Set the relic level of a particular order skills
     * 
     * Setting faith relic level for example;
     * OrderSkills.setRelicLevel('faith', 3793);
     * @param {string} skillName 
     * @param {int} relicLevel 
     */
    setRelicLevel: (skillName, relicLevel) => {
        OrderSkills[skillName].relicLevel = relicLevel;
    },

    /**
     * f getRelicLevel
     * Returns the Relic level of a particular order skill
     * 
     * Getting faith relic level for example;
     * OrderSkills.getRelicLevel('faith')
     * @param {string} skillName 
     * @returns {int}
     */
    getRelicLevel: (skillName) => {
        return parseInt(OrderSkills[skillName].relicLevel);
    },

    /**
     * f getBaseEffect
     * Returns the base skill effect of a particular order skill
     * @param {string} skillName 
     * @returns {Float64Array}
     */
    getBaseEffect: (skillName) => {
        return parseFloat(OrderSkills[skillName].baseEffect);
    },

    /**
     * f getDisplay
     * Returns the name value to be output to the UI of a skill
     * 
     * Getting faith display value for example;
     * OrderSkills.getDisplay('faith');
     * @param {string} skillName 
     * @returns {string}
     */
    getDisplay: (skillName) => {
        return OrderSkills[skillName].display.toString();
    }
}