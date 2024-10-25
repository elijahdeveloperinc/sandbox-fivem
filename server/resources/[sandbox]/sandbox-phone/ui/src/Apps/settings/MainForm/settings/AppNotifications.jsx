import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		padding: 5,
		background: theme.palette.secondary.dark,
		transition: 'background ease-in 0.15s',
		borderBottom: `1px solid ${theme.palette.border.divider}`,

		'&:hover': {
			background: theme.palette.secondary.main,
			cursor: 'pointer',
		},
	},
	label: {
		flexGrow: 1,
		fontSize: 18,
		lineHeight: '38px',
	},
	icon: {
		width: 45,
		textAlign: 'center',
		lineHeight: '38px',
	},
	action: {
		textAlign: 'center',
		lineHeight: '38px',
		fontSize: 20,
		marginRight: 20,
	},
	arrow: {
		fontSize: 20,
	},
}));

export default () => {
	const classes = useStyles();
	const history = useNavigate();

	const appNotifsClicked = () => {
		history(`/apps/settings/app_notifs`);
	};

	return (
		<Grid
			item
			xs={12}
			className={classes.container}
			onClick={appNotifsClicked}
		>
			<div className={classes.icon}>
				<FontAwesomeIcon icon={['fas', 'bell-on']} />
			</div>
			<div className={classes.label}>Application Notifications</div>
			<div className={classes.action}>
				<FontAwesomeIcon
					className={classes.arrow}
					icon={['fas', 'chevron-right']}
				/>
			</div>
		</Grid>
	);
};
