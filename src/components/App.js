import React from 'react'
import SearchArea from '../container/SearchArea'
import MealList from '../container/MealList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

let style = {
	padding: '0 24px'
}

const App = () => (
	<div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Youth Hotel
                </Typography>
            </Toolbar>
        </AppBar>
		<div className="mainBody" style={style}>
            <SearchArea />
            <MealList />
		</div>
	</div>
)

export default App