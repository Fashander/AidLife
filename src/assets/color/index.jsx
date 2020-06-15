import { createMuiTheme } from '@material-ui/core/styles';
import customTheme from './theme.json';

const jsJson = JSON.parse(JSON.stringify(customTheme));

const theme = createMuiTheme({
    ...jsJson
})

export default theme;