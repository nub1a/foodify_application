import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  navigation: {
    paddingBottom: '2px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: '20px',
  },
  container: {
    marginTop: '38px',
    paddingTop: '20px',
    gridRow: 'row',
    justify: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
