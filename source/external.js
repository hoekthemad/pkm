/**
 * External code provided by Gawaak - developer of Progress Knight Multiplayer
 * @author Gawaak
 */
let getSkillPrice = (level, isTheOrder, priceModifier, happinessModifier, relicLevel, isDarkMagic, fanaticism, isBoostActive) => {
    level = 1*level;
    priceModifier = 1*priceModifier;
    happinessModifier = 1* happinessModifier;
    relicLevel = 1*relicLevel;
    fanaticism = 1*fanaticism;
    const a = (0.001 * Math.pow(level,
            Math.log((level * Math.sqrt(level)) / (isTheOrder ? 1 : 3.27)))
    )
    const b = (
        priceModifier *
        happinessModifier *
        0.1 *
        (1 + relicLevel) *
        (isDarkMagic ? fanaticism : 1) *
        (isBoostActive ? 2 : 1)
    )

    return 1 + a / b
}

const getEffect = (baseValue, level, skillEffects, isSkillEffects) => {
    return (0.01 * Math.round(100 * Math.pow(
        (1 + baseValue *
            (isSkillEffects ? 1 : skillEffects) *
            (level - 1)),
        0.6)))
}

const insanityThreshold = (brands, thresholdDecrease) => {
    const threshold = 7200

    return Math.floor(1000 +
        (brands > 1 ?
            (threshold - 1000) +
            (brands - 2) *
            threshold :
            0)
        * 1 / thresholdDecrease)
}
