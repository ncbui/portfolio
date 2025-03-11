import { theme } from "../template/theme";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router";

export default function ProjectsMenu(project, setProjectView) {
    return ( 
        <List sx={{width:'100%', display: 'flex', flexDirection: 'row', justifyContent: 'center',  px:0, m:0, borderBottom: '5px dotted ',borderColor: theme.palette.primary.bright,'@media (max-width: 780px)' : {width:'90%'}}}>
            <ListItem sx={{border: '1px solid black', borderRadius:'.5rem', padding:'3px 6px', width:'fit-content'}}>
                <Link onClick={() => setProjectView('anaconda')}> Anaconda</Link>
            </ListItem >
        </List>
    )
}