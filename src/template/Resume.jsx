import { HeaderCell, NavName, NavSubtitle, NavTitleText, WorkDate, WorkDateCell, WorkList, WorkListItem, WorkRow, WorkSheets } from './theme';
import { BootstrapButton } from './theme';
import * as resume from '../../resume.json'
import generatePDF from "react-to-pdf";
import { useTheme } from '@mui/styles';
import { Container, Table,  Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { TableBody, TableContainer, TableCell } from '@mui/material';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';

const options = {
    filename: "resume.pdf",
    page: {
      margin: 5
    }
  };

const getTargetElement = () => document.getElementById("container");
const downloadPdf = () => generatePDF(getTargetElement, options);

export default function Resume() {
  const theme = useTheme()

  const makeWorkRow=(work)=>{
        return( 
          work.map((w)=>{
            return (
            <WorkRow sx={{width:'100%'}} key={w.endDate} >
              <WorkDateCell sx={{ width: '7rem' }}>
                <WorkDate sx={{color: theme.palette.dark1}}> {w.startDate} - {w.endDate}</WorkDate>
              </WorkDateCell>
              <TableCell sx={{ width: '80%'}} >
                  <Typography sx={{ '& a': {fontFamily:'Hind',color:theme.palette.dark1},}} > 
                  <Link to={w.url} target="_blank" rel="noopener noreferrer">
                    {w.position}  <i>{w.name}</i>
                    {/* {w.url ? <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.dark1, fontSize:'1rem'}}/> : '' } */}
                  </Link> 
                  </Typography >
                <WorkList sx={{ m:0 }}>
                  { w.summary ? <WorkListItem>{w.summary}</WorkListItem> : 'ERROR' }
                  { w.tools ? <WorkListItem sx={{m:0}}>
                    {w.tools.map((t)=>{`${t}, `})}
                    </WorkListItem> : 'ERROR' }
                </WorkList>
              </TableCell>
            </WorkRow>
        )}))}
  
  
      const makeEduRow = (exp) =>{
        return( exp.map((a)=>{
            return (
            <WorkRow  key={a.endDate} sx={{width:'100%', height: "100%", border: '1px solid pink',
              padding: '1rem', margin: 0}}>
                <WorkDateCell sx={{ width: '7rem', border: '1px solid blue',}}>
                  <WorkDate sx={{color: theme.palette.dark1}}> {a.endDate} </WorkDate>
                </WorkDateCell>
                <TableCell sx={{width: '80%', padding: 0, margin: 0, border: '1px solid yellow',}}>
                  <Typography sx={{ '& a': {fontFamily:'Hind',color:theme.palette.dark1}, border: '1px solid green',}}>
                    <Link to={a.url} target="_blank" rel="noopener noreferrer">{a.studyType}  {a.area}. {a.institution}</Link> 
                    <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                  </Typography>
                </TableCell>    
            </WorkRow>
        )}))}
  
      const makeCertRow = (cert) =>{
        return( cert.map((a)=>{
            return (
            <WorkRow sx={{width:'100%'}} key={a.name} >
                <WorkDateCell sx={{ m:0, padding:0, width: '7rem'}}>
                  <WorkDate sx={{color: theme.palette.dark1}}> {a.date} </WorkDate>
                </WorkDateCell>
                <TableCell sx={{m:0, p:'0 1rem', width: '90%'}} >
                  <Typography sx={{ '& a': {fontFamily:'Hind',color:theme.palette.dark1},}}>
                    <Link to={a.url} target="_blank" rel="noopener noreferrer" color={theme.palette.dark1}>{a.name} {a.issuer}</Link> 
                    <TurnSlightRightOutlinedIcon  sx={{color: theme.palette.bright, fontSize:'80%'}}/>
                  </Typography>
                </TableCell>    
            </WorkRow>
        )}))}

  return (
    <WorkSheets sx={{ padding:'1.5rem 0',backgroundColor:'rgb(255, 255, 255,.2)', height:'100vh'}}>
        <BootstrapButton onClick={downloadPdf}>Download Cam`s resume</BootstrapButton>
        <Container id="container" sx={{
          color:theme.palette.dark1, border:'1px solid grey',backgroundColor:'white'
          }}>
            <Container id="resumeHeader" sx={{paddingTop:'1.5rem', display: 'flex', flexDirection:'row'}}>
                <Container sx={{padding: 0, color:theme.palette.dark1, width: '80%', marginLeft:'-2.5rem', marginBottom:'-1rem', display: 'flex', flexDirection:'col'}}>
                  <Typography>
                    <NavName sx={{color:theme.palette.dark1, display:'block', width: '30vw', lineHeight:1,fontSize:'2.5rem'}}> 
                      Cam Bui 
                    </NavName>
                    <NavTitleText sx={{color:theme.palette.dark1, width: '60%', lineHeight:1, fontSize:'1.2rem'}}> 
                      Fullstack Devops Engineer 
                    </NavTitleText>
                    <NavSubtitle sx={{color:theme.palette.dark1, width: '100%'}}>
                      Experienced software engineer with expertise in GitOps, cloud platforms, and full-stack development. 
                      </NavSubtitle>
                  </Typography>
                </Container>
                <Container sx={{ m:0, color:theme.palette.dark1, width: '40%', 
                  textAlign:'right', display: 'flex', flexDirection:'col', justifyContent:'flex-end'}}>
                    <Typography sx={{fontSize:'1rem', '& a': {color:theme.palette.dark1},}}>
                        <Link to={resume.basics.profiles[0].url}>github: {resume.basics.profiles[0].username} </Link> <br/>
                        <Link to={resume.basics.profiles[1].url}>linked: {resume.basics.profiles[1].username} </Link> <br/>
                        <Link to={resume.basics.url}>ncbui.github.io</Link>
                    </Typography>
                </Container>
            </Container>
            <TableContainer id="resume-table" sx={{ width:'100%',overflow:'hidden', border: '1px solid pink', }}>
              <Table aria-label="work and experience" > 
                <TableBody>
                  <WorkRow sx={{width:'100%'}}>
                    <HeaderCell colSpan={2} sx={{m:'.5rem 0', padding:0}}>
                      <NavTitleText sx={{color: theme.palette.dark1, fontSize:'1.2rem' }}>Experience </NavTitleText>
                    </HeaderCell>
                  </WorkRow>
                  {makeWorkRow(resume.work)}
                  <WorkRow sx={{width:'100%'}}>
                    <HeaderCell colSpan={2} sx={{m:'.5rem 0', padding:0}}>
                      <NavTitleText sx={{color: theme.palette.dark1, fontSize:'1.2rem' }}>Certificates </NavTitleText>
                    </HeaderCell>
                  </WorkRow>
                  {makeCertRow(resume.certificates)}
                  <WorkRow sx={{width:'100%'}}>
                    <HeaderCell colSpan={2} sx={{m:'.5rem 0', padding:0}}>
                      <NavTitleText sx={{color: theme.palette.dark1, fontSize:'1.2rem' }}>Education </NavTitleText>
                    </HeaderCell>
                  </WorkRow>
                  {makeEduRow(resume.education)}
                </TableBody>
              </Table>
             </TableContainer>
        </Container>
    </WorkSheets>
  );
}