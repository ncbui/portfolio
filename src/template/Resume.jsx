import { HeaderCell, NavName, NavSubtitle, NavTitleText, ResumeContainer, ResumeRow , WorkDate, WorkSheets } from './theme';
import { BootstrapButton } from './theme';
import * as resume from '../../resume.json'
import generatePDF from 'react-to-pdf';
import { useTheme } from '@mui/styles';
import { Box, List, Table,  Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { TableBody, TableCell, Paper, TableRow, TableHead, ListItem } from '@mui/material';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';

const options = {
    filename: 'resume.pdf',
    page: {
      margin: 5
    }
  };

const getTargetElement = () => document.getElementById('container');
const downloadPdf = () => generatePDF(getTargetElement, options);


function createCertData(cert){
  const dates = `${cert.date}`;
  const main = <Typography>{cert.name}. <i>{cert.issuer}</i></Typography>;
  return { dates, main };
}
function createEduData(edu){
  console.log("edu", edu)
  const dates = edu.startDate=="" ?<Typography>{edu.endDate}</Typography>:<Typography>{edu.startDate} - {edu.endDate}</Typography>
  const main = <Typography>{edu.studyType}  {edu.area}<br/> <i>{edu.institution}</i></Typography>;
  return { dates, main };
}
function createWorkData(work) {
  const dates = `${work.startDate} - ${work.endDate}`;
  const main = <Typography>{work.position}  <i>{work.name}</i><List>{work.highlights ? work.highlights.map((i)=>{<ListItem key={i.substring(0,3)}>{i}</ListItem>}) : ''}</List></Typography>;
  return { dates, main };
}

export default function Resume() {
  const theme = useTheme()

  const MakeSectionRow = (type, details)=> {
    const makeRowByType = () => {
      if(type=='certs' || type=='cert'){
        return(details.map((c)=>{
          const { dates, main } = createCertData(c)
          return(
          <TableRow colSpan={4} key={dates} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} scope="row" align="right"> <Typography sx={{padding: '0 1rem'}}> {dates} </Typography> </TableCell>
            <TableCell colSpan={3}> {main} </TableCell>
          </TableRow>)
        }))
      }
      if(type=='edu'){
        return(details.map((e)=>{
          const { dates, main } = createEduData(e)
          return(
          <TableRow colSpan={4} key={dates} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} align="right" padding="" scope="row" > <Typography sx={{padding: '0 1rem'}}> {dates} </Typography>  </TableCell>
            <TableCell colSpan={3}> {main} </TableCell>
          </TableRow>)
        }))
      }
      if(type=='work'){
        console.log('work', details)
        return(details.map((w)=>{
          const { dates, main } = createWorkData(w)
          // console.log('dates', dates, main)
          return(
          <TableRow colSpan={4} key={dates} sx={{verticalAlign:'top'}} >
            <TableCell colSpan={1} scope="row" align="right"> <Typography sx={{padding: '0 1rem'}}> {dates} </Typography>  </TableCell>
            <TableCell colSpan={3}> {main} </TableCell>  
          </TableRow>)
        }))
      }
    }
    return( 
      makeRowByType() )}

  // const makeWorkRow=(work)=>{
  //       return( 
  //         work.map((w)=>{
  //           return (
  //           <ResumeRow sx={{width:'100%'}} key={w.endDate} >
  //             <MakeDateCell>{w.startDate} - {w.endDate}</MakeDateCell>
  //             <TableCell>
  //               <Link to={w.url} target='_blank' rel='noopener noreferrer'>
  //                 {w.position}  <i>{w.name}</i>
  //               </Link> 
  //               {/* <WorkList sx={{ m:0 }}>
  //                 { w.highlights ? <WorkListItem>{w.highlights}</WorkListItem> : '' }
  //               </WorkList> */}
  //             </TableCell>
  //           </ResumeRow>
  //       )}))}

      const makeSectionHeader = (header) => {
        return (
          <ResumeRow sx={{border: 0}}>
            <HeaderCell colSpan={4} sx={{margin:0, padding:0, border: 0,}}>
              <NavTitleText sx={{ color: theme.palette.dark1, fontSize:'1.2rem', paddingTop: '.75rem', paddingBottom: '.5rem'  }}>{header} </NavTitleText>
            </HeaderCell>
        </ResumeRow>
        )
      }
      const makeTableHead = () => {
        return (
        <TableRow sx={{ }}>
            <TableCell colSpan={3}>
              <Box sx={{ width: '25rem', marginTop:'4rem', marginBottom:'2rem' }}>
              <NavTitleText sx={{ color: theme.palette.dark1, fontSize:'1.2rem',  }}>
                <NavName sx={{color:theme.palette.dark1, display:'block', lineHeight:1, fontSize:'2.5rem'}}> 
                  Cam Bui 
                </NavName>
                <NavTitleText sx={{color:theme.palette.dark1, lineHeight:1, fontSize:'1.2rem'}}> 
                  Fullstack Devops Engineer 
                </NavTitleText>
                <NavSubtitle sx={{color:theme.palette.dark1, }}>
                  Experienced software engineer with <br/> expertise in GitOps and full-stack development. 
                </NavSubtitle>
              </NavTitleText>
              </Box>
            </TableCell>
            <TableCell colSpan={1} sx={{ fontSize:'1.1rem',lineHeight:1, }}>
              <Box align='right' sx={{marginBottom:'4.6rem', marginRight:'1.2rem', '& a': { color:theme.palette.dark1 }}}>
                { resume.basics.profiles.map((p) => {
                  return (<Typography key={p.network}><Link to={p.url}>{p.network}: {p.username} </Link><br/></Typography>)})
                  }
                <Link to={resume.basics.url}>ncbui.github.io</Link>
              </Box>  
            </TableCell>
          </TableRow>)
      }

  return (
    <WorkSheets component={Paper} sx={{ padding:'1.5rem', height:'100vh' }} >
      <BootstrapButton onClick={downloadPdf} sx={{margin: '0 2rem'}}>Download</BootstrapButton>
       <ResumeContainer id='container' component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            { makeTableHead() }
          </TableHead>
          <TableBody>
          { makeSectionHeader('Work') }
          { MakeSectionRow('work', resume.work) }
          { makeSectionHeader('Certificates') }
          { MakeSectionRow('certs', resume.certificates) }
          { makeSectionHeader('Education') }
          { MakeSectionRow('edu', resume.education) }
      </TableBody>
    </Table>
  </ResumeContainer>
</WorkSheets>
  );
}
