import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme, LinearProgress } from '@mui/material';
import { makeStyles, withTheme } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import useInterval from 'react-useinterval';

const useStyles = makeStyles((theme) => ({
    container: {
        width: 36,
        height: 36,
        lineHeight: '26px',
        fontSize: 22,
        marginBottom: 4,
        textAlign: 'center',
    },
    icon: {
        width: '100%',
        height: 'calc(100% - 4px)',
        fontSize: 22,
        background: `${theme.palette.secondary.dark}80`,
        padding: 5,
        position: 'relative',
    },
    fa: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        fontSize: (buff) =>
            Boolean(buff.override) && `${buff?.override ?? ''}`.length > 2
                ? '0.85rem'
                : '1rem',
    },
}));

export default withTheme(({ buff }) => {
    const classes = useStyles(buff);
    const buffDefs = useSelector((state) => state.status.buffDefs);
    const buffDef = buffDefs[buff.buff];

    const BuffProggressBar = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        width: '100%',
        [`&.${linearProgressClasses.colorPrimary}`]: {
            background: theme.palette.secondary.dark,
        },
        [`& .${linearProgressClasses.bar}`]: {
            background: `linear-gradient(to right, #a20b61, #e6bc02)`,
        },
    }));

    const [pct, setPct] = useState(Math.floor(Date.now() / 1000) - buff?.startTime);
    useInterval(
        () => {
            setPct(Math.floor(Date.now() / 1000) - buff?.startTime);
        },
        pct > buff.val ? null : (Boolean(buff?.options?.customInterval) ? buff?.options?.customInterval : 1000),
    );

    if (pct > buff.val) return null;
    return (
        <div className={classes.container}>
            <div className={classes.icon}>
                {Boolean(buff.override) ? (
                    <span className={classes.fa}>{buff.override}</span>
                ) : (
                    <FontAwesomeIcon
                        className={classes.fa}
                        icon={buffDef.icon}
                    />
                )}
            </div>
            <BuffProggressBar
                variant="determinate"
                value={Math.floor(((buff.val - (pct > 0 ? (pct - 1) : pct)) / buff.val) * 100)}
            />
        </div>
    );
});
