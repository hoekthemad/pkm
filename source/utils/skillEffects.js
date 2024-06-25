/**
 * func (user *User) getSkillEffectsBonus() float64 {
    achievBonus := math.Pow(1.005, float64(user.achievementsCount())) - 1
    brandsBonus := math.Pow(1.005, float64(user.brands)) - 1
    tableBonus := math.Pow(1.02, float64(user.tableLevel)) - 1
    codexBonus := 1.09971*math.Log(2.30202+0.139935*float64(user.CodexLevel/16.0)) - 0.9169238

    return achievBonus + brandsBonus + tableBonus + codexBonus
} 
 */

let SkillEffects = {
    fosBonus: 0,
    codexBonus: 0,
    brandBonus: 0,
    tableBonus: 0,

    conc: 0,

    getFosBonus: () => {},

    getCodexBonus: () => {},

    getBrandBonus: () => {},

    getTableBonus: () => {},

    getConc: () => {}
}