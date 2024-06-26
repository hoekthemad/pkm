Fundamentals = {
    productivity: {
        level: 1, relicLevel: 1, baseEffect: 0.205, display: 'Productivity'
    },
    concentration: {
        level: 1, relicLevel: 1, baseEffect: 0.12, display: 'Concentration'
    },
    bargaining: {
        level: 1, relicLevel: 1, baseEffect: 0.135, display: 'Bargaining'
    },
    meditation: {
        level: 1, relicLevel: 1, baseEffect: 0.0135, display: 'Meditation'
    },

    /**
     * f setLevel
     * Set the level of a particular order skills
     * 
     * Setting productivity level for example; 
     * Fundamentals.setLevel('productivity', 2308);
     * @param {string} skillName 
     * @param {int} level 
     */
    setLevel: (skillName, level) => {
        Fundamentals[skillName].level = level;
    },

    /**
     * f getLevel
     * Returns the level of a particular order skill
     * 
     * Getting productivity level for example;
     * Fundamentals.getLevel('productivity')
     * @param {string} skillName 
     * @returns {int}
     */
    getLevel: (skillName) => {
        return parseInt(Fundamentals[skillName].level);
    },

    /**
     * f setRelicLevel
     * Set the relic level of a particular order skills
     * 
     * Setting productivity relic level for example;
     * Fundamentals.setRelicLevel('productivity', 3793);
     * @param {string} skillName 
     * @param {int} relicLevel 
     */
    setRelicLevel: (skillName, relicLevel) => {
        Fundamentals[skillName].relicLevel = relicLevel;
    },

    /**
     * f getRelicLevel
     * Returns the Relic level of a particular order skill
     * 
     * Getting productivity relic level for example;
     * Fundamentals.getRelicLevel('productivity')
     * @param {string} skillName 
     * @returns {int}
     */
    getRelicLevel: (skillName) => {
        return parseInt(Fundamentals[skillName].relicLevel);
    },

    /**
     * f getBaseEffect
     * Returns the base skill effect of a particular order skill
     * @param {string} skillName 
     * @returns {Float64Array}
     */
    getBaseEffect: (skillName) => {
        return parseFloat(Fundamentals[skillName].baseEffect);
    },

    /**
     * f getDisplay
     * Returns the name value to be output to the UI of a skill
     * 
     * Getting productivity display value for example;
     * Fundamentals.getDisplay('productivity');
     * @param {string} skillName 
     * @returns {string}
     */
    getDisplay: (skillName) => {
        return Fundamentals[skillName].display.toString();
    }
}
