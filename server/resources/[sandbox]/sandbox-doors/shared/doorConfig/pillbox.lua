local publicDoorPermissions = { -- Public Doors, Police can lock when on duty, Medical Staff Whenever
	{ type = "job", job = "police", workplace = false, gradeLevel = 0, jobPermission = false, reqDuty = true },
	{ type = "job", job = "ems", workplace = false, gradeLevel = 0, jobPermission = false, reqDuty = false },
}

local staffOnlyDoorPermissions = { -- Medical Staff Only (Allows Offduty)
	{ type = "job", job = "ems", workplace = false, gradeLevel = 0, jobPermission = false, reqDuty = false },
}

local staffOnlyStrictDoorPermissions = { -- On Duty Medical Staff Only
	{ type = "job", job = "ems", workplace = false, gradeLevel = 0, jobPermission = false, reqDuty = true },
}

addDoorsListToConfig({
	-- PILLBOX MEDICAL
	-- Elevator Doors to Garage
	{
		id = "pillbox_elev1_1",
		model = -1048421071,
		coords = vector3(340.12, -585.72, 27.79),
		locked = true,
		maxDist = 3.0,
		double = "pillbox_elev1_2",
		autoRate = 6.0,
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_elev1_2",
		model = 1674289593,
		coords = vector3(340.77, -583.94, 27.79),
		locked = true,
		double = "pillbox_elev1_1",
		maxDist = 3.0,
		autoRate = 6.0,
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_elev2_1",
		model = -1048421071,
		coords = vector3(341.47, -582.01, 27.8),
		locked = true,
		maxDist = 3.0,
		double = "pillbox_elev2_2",
		autoRate = 6.0,
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_elev2_2",
		model = 1674289593,
		coords = vector3(342.12, -580.23, 27.8),
		locked = true,
		double = "pillbox_elev2_1",
		maxDist = 3.0,
		autoRate = 6.0,
		restricted = publicDoorPermissions,
	},

	{
		id = "pillbox_garagedoor_near",
		model = -820650556,
		coords = vector3(337.28, -564.42, 29.82),
		locked = true,
		special = true,
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_garagedoor_far",
		model = -820650556,
		coords = vector3(330.13, -561.83, 29.78),
		locked = true,
		special = true,
		restricted = publicDoorPermissions,
	},

	-- Outer double doors
	{
		id = "pillbox_garage_outerdoor_1",
		model = -1421582160,
		coords = vector3(321.01, -559.91, 28.95),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_garage_outerdoor_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_garage_outerdoor_2",
		model = 1248599813,
		coords = vector3(318.67, -561.01, 28.95),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_garage_outerdoor_1",
		restricted = publicDoorPermissions,
	},

	-- Inner hallway double doors
	{
		id = "pillbox_garage_innerdoor_1",
		model = -1700911976,
		coords = vector3(339.33, -587.63, 28.95),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_garage_innerdoor_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_garage_innerdoor_2",
		model = -434783486,
		coords = vector3(338.45, -590.05, 28.95),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_garage_innerdoor_1",
		restricted = publicDoorPermissions,
	},

	-- Reception Double Doors Left
	{
		id = "pillbox_lower_rec_left_1",
		model = -1700911976,
		coords = vector3(346.67, -590.3, 28.95),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_lower_rec_left_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_lower_rec_left_2",
		model = -434783486,
		coords = vector3(345.79, -592.72, 28.95),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_lower_rec_left_1",
		restricted = publicDoorPermissions,
	},

	-- Reception Double Doors Right
	{
		id = "pillbox_lower_rec_right_1",
		model = -1700911976,
		coords = vector3(349.86, -581.53, 28.95),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_lower_rec_right_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_lower_rec_right_2",
		model = -434783486,
		coords = vector3(348.98, -583.95, 28.95),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_lower_rec_right_1",
		restricted = publicDoorPermissions,
	},

	{ -- Reception Lower Door
		id = "pillbox_lower_reception",
		model = 854291622,
		coords = vector3(348.55, -585.16, 28.95),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_lower_reception",
		restricted = publicDoorPermissions,
	},

	-- Pillbox Upper

	{
		id = "pillbox_upper_main_1",
		model = 661758796,
		coords = vector3(300.03, -583.73, 42.28),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_upper_main_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_upper_main_2",
		model = -487908756,
		coords = vector3(299.12, -586.23, 42.28),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_upper_main_1",
		restricted = publicDoorPermissions,
	},

	{
		id = "pillbox_upper_reception",
		model = 854291622,
		coords = vector3(313.48, -595.46, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_upper_staff_lockers",
		model = 854291622,
		coords = vector3(309.13, -597.75, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyDoorPermissions,
	},

	{
		id = "pillbox_hallway_ward_a_1",
		model = -1700911976,
		coords = vector3(305.22, -582.31, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_a_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_hallway_ward_a_2",
		model = -434783486,
		coords = vector3(302.8, -581.42, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_a_1",
		restricted = publicDoorPermissions,
	},

	{
		id = "pillbox_hallway_ward_ab_1",
		model = -1700911976,
		coords = vector3(325.67, -580.46, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_ab_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_hallway_ward_ab_2",
		model = -434783486,
		coords = vector3(326.55, -578.04, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_ab_1",
		restricted = publicDoorPermissions,
	},

	{
		id = "pillbox_hallway_ward_b_1",
		model = -1700911976,
		coords = vector3(326.65, -590.11, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_b_2",
		restricted = publicDoorPermissions,
	},
	{
		id = "pillbox_hallway_ward_b_2",
		model = -434783486,
		coords = vector3(324.24, -589.23, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_b_1",
		restricted = publicDoorPermissions,
	},

	{
		id = "pillbox_hallway_ward_c_1",
		model = -1700911976,
		coords = vector3(348.43, -588.74, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_c_2",
		restricted = staffOnlyStrictDoorPermissions,
	},
	{
		id = "pillbox_hallway_ward_c_2",
		model = -434783486,
		coords = vector3(349.31, -586.33, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_hallway_ward_c_1",
		restricted = staffOnlyStrictDoorPermissions,
	},

	{
		id = "pillbox_intensive_care_1",
		model = -1700911976,
		coords = vector3(318.48, -579.23, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_intensive_care_2",
		restricted = staffOnlyStrictDoorPermissions,
	},
	{
		id = "pillbox_intensive_care_2",
		model = -434783486,
		coords = vector3(316.07, -578.35, 43.43),
		locked = false,
		autoRate = 6.0,
		double = "pillbox_intensive_care_1",
		restricted = staffOnlyStrictDoorPermissions,
	},

	{
		id = "pillbox_surgery1_1",
		model = -1700911976,
		coords = vector3(314.42, -572.22, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery1_2",
		restricted = staffOnlyStrictDoorPermissions,
	},
	{
		id = "pillbox_surgery1_2",
		model = -434783486,
		coords = vector3(312.01, -571.34, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery1_1",
		restricted = staffOnlyStrictDoorPermissions,
	},

	{
		id = "pillbox_surgery2_1",
		model = -1700911976,
		coords = vector3(320.26, -574.35, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery2_2",
		restricted = staffOnlyStrictDoorPermissions,
	},
	{
		id = "pillbox_surgery2_2",
		model = -434783486,
		coords = vector3(317.84, -573.47, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery2_1",
		restricted = staffOnlyStrictDoorPermissions,
	},

	{
		id = "pillbox_surgery3_1",
		model = -1700911976,
		coords = vector3(325.66, -576.31, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery3_2",
		restricted = staffOnlyStrictDoorPermissions,
	},
	{
		id = "pillbox_surgery3_2",
		model = -434783486,
		coords = vector3(323.24, -575.43, 43.43),
		locked = true,
		autoRate = 6.0,
		double = "pillbox_surgery3_1",
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Lab
		model = 854291622,
		coords = vector3(307.12, -569.57, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox MRI
		model = 854291622,
		coords = vector3(336.16, -580.14, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},
	{ -- Pillbox Diagnostics
		model = 854291622,
		coords = vector3(340.78, -581.82, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},
	{ -- Pillbox XRAY
		model = 854291622,
		coords = vector3(346.77, -584.0, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Director Office
		model = 854291622,
		coords = vector3(336.87, -592.58, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Patients Room
		model = 854291622,
		coords = vector3(360.5, -589.0, 43.43),
		locked = false,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Dr Office 372
		model = 854291622,
		coords = vector3(358.73, -593.88, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Dr Office 373
		model = 854291622,
		coords = vector3(352.2, -594.15, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Dr Treatment
		model = 854291622,
		coords = vector3(346.89, -593.6, 43.43),
		locked = true,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Private Room 374
		model = 854291622,
		coords = vector3(350.83, -597.9, 43.43),
		locked = false,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Private Room 369
		model = 854291622,
		coords = vector3(357.49, -579.61, 43.43),
		locked = false,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},

	{ -- Pillbox Private Room 370
		model = 854291622,
		coords = vector3(356.13, -583.36, 43.43),
		locked = false,
		autoRate = 6.0,
		restricted = staffOnlyStrictDoorPermissions,
	},
})
