import { Link } from 'react-router-dom';
import {Table, TableContainer, TableBody, TableCell, TableRow, List, ListItem, Box} from '@mui/material';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import { useTheme } from '@mui/styles';
import { Typography } from '@mui/joy';
import { BootstrapButton, navTitle, tableRow } from '../template/theme';
import * as resume from "../template/resume.json"

export default function WorkExperience () { 
    const theme = useTheme()

    const makeWorkRow=(work)=>{
      return( 
        work.map((w)=>{
          return (
          <TableRow key={w.endDate} sx={tableRow} >
            <TableCell scope="row" sx={{ verticalAlign: 'top', p:0, m:0,  borderRight:'3px dotted', borderColor:theme.palette.bright, borderBottom: 0,}}>
              <Typography sx={{fontSize:"85%", color: theme.palette.bright, fontWeight: 'bold'}}> {w.startDate} - {w.endDate}</Typography>
            </TableCell>
            <TableCell sx={{ verticalAlign: 'top', py:"0.2rem", m:0, borderBottom: 0, maxWidth: '80%', '@media (max-width: 786px)': {maxWidth: '50vw'} }}>
              <Link to={w.website} target="_blank" rel="noopener noreferrer">
                <Typography sx={{fontSize:"100%", color: theme.palette.light, }}>
                    {w.position}  {w.company}
                    <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'1rem'}}/>
                </Typography >
              </Link> 
              <List sx={{fontSize: '1rem',width: '90%', color: theme.palette.text,}}>
              <ListItem sx={{color:'inherit', fontFamily:'Hind'}}>{w.summary}</ListItem>
                {makeButtons(w)}
              </List>
            </TableCell>
          </TableRow>
      )}))}

    const makeButtons = ({tools}) =>{
        return( 
            <>
            {tools.map((tool)=>{
              return (
              <BootstrapButton 
                variant="outlined" 
                key={tool+tool.indexOf()}
                sx={{width:'fit-content', m: '.2rem'}}
                >
                {tool}
              </BootstrapButton>)})}
            </> 
        )}

    const makeEduRow = (exp) =>{
      return( exp.map((a)=>{
          return (
          <TableRow key={a.endDate} sx={tableRow} >
              <TableCell scope="row" sx={{ 
                horizontalAlign: 'right', verticalAlign: 'top', p:0, m:0,  
                borderRight:'3px dotted', borderColor:theme.palette.bright,  
                fontFamily: 'Hind', borderBottom: 0,
                }}>
                <Typography sx={{fontSize:'85%', color: theme.palette.bright, fontWeight: 'bold'}}> 
                  {a.endDate} </Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: 'top', py:"0.2rem", m:0, borderBottom: 0, maxWidth: '80%' }}>
                <Typography sx={{fontSize:"1rem, "}}>
                  <Link to={a.website} target="_blank" rel="noopener noreferrer">{a.studyType}  {a.area}. {a.institution}</Link> 
                  <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                </Typography>
              </TableCell>    
          </TableRow>
      )}))}
    const makeCertRow = (cert) =>{
      return( cert.map((a)=>{
          return (
          <TableRow key={a.name} sx={tableRow} >
              <TableCell scope="row" sx={{ 
                horizontalAlign: 'right', verticalAlign: 'top', p:0, m:0,  
                borderRight:'3px dotted', borderColor:theme.palette.bright,  
                fontFamily: 'Hind', borderBottom: 0,
                }}>
                <Typography sx={{fontSize:'85%', color: theme.palette.bright}}> 
                  {a.date} </Typography>
              </TableCell>
              <TableCell sx={{ verticalAlign: 'top', py:"0.2rem", m:0, borderBottom: 0, maxWidth: '80%' }}>
                <Typography sx={{fontSize:"1rem"}}>
                  <Link to={a.website} target="_blank" rel="noopener noreferrer">{a.name} {a.issuer}</Link> 
                  <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                </Typography>
              </TableCell>    
          </TableRow>
      )}))}

      const makeHeader = (section) =>{
        return(
          <TableRow>
          <TableCell colSpan={2} scope="row" sx={{ horizontalAlign: 'right', verticalAlign: 'top', p:0, m:0,  borderColor:theme.palette.bright,  fontFamily: 'Tourney Variable', borderBottom: 0,}}>
            <Typography level="h5" sx={navTitle}>
            {section}
            </Typography>
          </TableCell>
      </TableRow>
        )
      }
    
    return (
      <TableContainer>
        <Table aria-label="work and experience" > 
          <TableBody>
            {makeHeader("Experience")}
            {makeWorkRow(resume.work)}
            {makeHeader("Certificates")}
            {makeCertRow(resume.certificates)}
            {makeHeader("Education")}
            {makeEduRow(resume.education)}
          </TableBody>
        </Table>
    </TableContainer>
    )
}