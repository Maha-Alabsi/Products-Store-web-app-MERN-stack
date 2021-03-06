import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    boxShadow: '0px 0px 5px gray',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
  },
  cardDescription: {
    color: theme.palette.text.secondary,
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '10px',
  },
  proLabel: {
    borderRadius: '5px',
    color: theme.palette.common.white,
    height: '25px',
    lineHeight: '25px',
    padding: '0 10px',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
