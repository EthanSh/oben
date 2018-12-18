import React from 'react'
import PropTypes from 'prop-types'
import SearchItem from './SearchItem'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

let style = {
    padding: '20px 0'
}

const SearchItemList = ({querys, addQuery}) => (

    <div style={style}>

        <List component="nav">

            {querys.search.map((query,index) =>
                {
                    let name = `Guest Name: ${query.name}，  Duration: ${query.from} to ${query.to}`
                    return (
                        <div key={index}>
                            <ListItem>
                                <ListItemText primary={name} />
                            </ListItem>
                            <Divider />
                        </div>

                    )
                }
            )}
        </List>

        <SearchItem addQuery={addQuery}/>
    </div>

)

SearchItemList.propTypes = {
    querys: PropTypes.object.isRequired,
    addQuery: PropTypes.func.isRequired
}

export default SearchItemList