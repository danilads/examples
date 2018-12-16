let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "ABILITIES_LOADING": {
			return {
				...state,
				loading: true,
			}
		}
		case "ABILITIES_LOADED": {
			let arr = action.payload;
			let result = [];
			let cnt = 0;
			for (let pos in arr.abilitydata) {
				result.push({...arr.abilitydata[pos],codeName: pos, key: cnt});
				cnt++;
			}
			// https://dota2.gamepedia.com/Heroes
			// нужно добавить в abilitiesVerify
			result.push({
				dname: "Cold Snap - (Quas/Quas/Quas)",
				key:cnt+2,
				pos: "a1",
				skill: "invoker_cold_snap",
				hero: "Invoker",
				desc: "Iadewwdewdeededs"})

			result.push({dname: "Invoke",key:cnt+1,pos: "u1",skill: "invoker_invoke",hero: "Invoker",desc:"Combines the properties of the elements currently being manipulated to create a new spell for Invoker to use. Click the help button to see the list of possible spells."})

			result.push({dname: "Cold Snap - (Quas/Quas/Quas)",key:cnt+2,pos: "a1",skill: "invoker_cold_snap",hero: "Invoker",desc: "Invoker draws the heat from an enemy, chilling them to their very core for a duration based on the level of Quas. The enemy will take damage and be briefly frozen. Further damage taken in this state will freeze the enemy again, dealing bonus damage. The enemy can only be frozen so often, but the freeze cooldown decreases based on the level of Quas."})
			result.push({dname: "Ghost Walk - (Quas/Quas/Wex)",key:cnt+3,pos: "a2",skill: "invoker_ghost_walk",hero: "Invoker",desc: "Invoker manipulates the ice and electrical energies around him, rendering his body invisible. The elemental imbalance created as a consequence slows nearby enemies based on the level of Quas, and slows Invoker as well based on the level of Wex."})
			result.push({dname: "Ice Wall - (Quas/Quas/Exort)",key:cnt+4,pos: "a3",skill: "invoker_ice_wall",hero: "Invoker",desc: "Generates a wall of solid ice directly in front of Invoker for a duration based on the level of Quas. The bitter cold emanating from it greatly slows nearby enemies based on the level of Quas and deals damage each second based on the level of Exort."})
			result.push({dname: "EMP - (Wex/Wex/Wex)",key:cnt+5,pos: "a4",skill: "invoker_emp",hero: "Invoker",desc: "Invoker builds up a charge of electromagnetic energy at a targeted location which automatically detonates after 2.9 seconds. The detonation covers an area, draining mana based on the level of Wex. Deals damage for each point of mana drained. If EMP drains mana from an enemy hero, Invoker gains 50% of the mana drained."})
			result.push({dname: "Tornado - (Quas/Wex/Wex)",key:cnt+6,pos: "a5",skill: "invoker_tornado",hero: "Invoker",desc: "Unleashes a fast moving tornado that picks up enemy units in its path, suspending them helplessly in the air shortly before allowing them to plummet to their doom. Travels further based on the level of Wex. Holds enemies in the air for a duration based on the level of Quas. Deals base damage plus added damage based on levels in Wex."})
			result.push({dname: "Alacrity - (Wex/Wex/Exort)",key:cnt+7,pos: "a6",skill: "invoker_alacrity",hero: "Invoker",desc: "Invoker infuses an ally with an immense surge of energy, increasing their attack speed based on the level of Wex and their damage based on the level of Exort."})
			result.push({dname: "Sun Strike - (Exort/Exort/Exort)",key:cnt+8,pos: "a7",skill: "invoker_sun_strike",hero: "Invoker",desc: "Sends a catastrophic ray of fierce energy from the sun at any targeted location, incinerating all enemies standing beneath it once it reaches the earth. Deals damage based on the level of Exort, however this damage is spread evenly over all enemies hit."})
			result.push({dname: "Forge Spirit - (Quas/Exort/Exort)",key:cnt+9,pos: "a8",skill: "invoker_forge_spirit",hero: "Invoker",desc: "Invoker forges a spirit embodying the strength of fire and fortitude of ice. Damage, mana, and armor are based on the level of Exort while attack range, health, and duration are based on the level of Quas. The elemental's scorching attack is capable of melting the armor of enemy heroes."})
			result.push({dname: "Chaos Meteor - (Wex/Exort/Exort)",key:cnt+10,pos: "a9",skill: "invoker_chaos_meteor",hero: "Invoker",desc: "Invoker pulls a flaming meteor from space onto the targeted location. Upon landing, the meteor rolls forward, constantly dealing damage based on the level of Exort, and rolling further based on the level of Wex. Units hit by the meteor will also be set on fire for a short time, receiving additional damage based on the level of Exort."})
			result.push({dname: "Deafening Blast - (Quas/Wex/Exort)",key:cnt+11,pos: "a10",skill: "invoker_deafening_blast",hero: "Invoker",desc: "Invoker unleashes a mighty sonic wave in front of him, dealing damage to any enemy unit it collides with based on the level of Exort. The sheer impact from the blast is enough to knock those enemy units back for a duration based on the level of Quas, then disarm their attacks for a duration based on the level of Wex."})

			result.push({dname: "Primal Spring",key:cnt+12,pos: "s3",skill: "monkey_king_primal_spring",hero: "Monkey King",desc: "Monkey King springs out from his tree perch, damaging and slowing enemies in the area where he lands. Damage and slow amounts are in proportion to channel duration."})
			result.push({dname: "Mischief",key:cnt+13,pos: "s5",skill: "monkey_king_mischief",hero: "Monkey King",desc: "Changes Monkey King's shape to deceive opponents, using the environment nearby as inspiration for the disguise. Taking damage, attacking, or using any item or ability breaks Monkey King's disguise. Grants invulnerability for 0.2 upon transforming."})
			
			
			return {
				...state,
				loading: false,
				isLoaded: true,
				data: result,
			}
		}
		default: return state;
	}
	return state;
};



